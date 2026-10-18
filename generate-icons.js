const fs = require('fs');
const zlib = require('zlib');

function createPNG(size, filename) {
  // Genera un PNG RGBA de size x size
  const width = size;
  const height = size;

  // Raw pixel data: 1 byte filter type (0) + 4 bytes RGBA per pixel per row
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(rowSize * height);

  const cx = width / 2;
  const cy = height / 2;
  const radius = size * 0.44;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter type None

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Fondo redondeado con gradiente índigo/violeta
      const cornerRadius = size * 0.22;
      const nx = Math.abs(dx) - (size / 2 - cornerRadius);
      const ny = Math.abs(dy) - (size / 2 - cornerRadius);
      const inBox = (nx <= 0 || ny <= 0) || (nx * nx + ny * ny <= cornerRadius * cornerRadius);

      if (inBox) {
        // Gradiente vertical (#4f46e5 a #7c3aed)
        const t = y / height;
        let r = Math.round(79 * (1 - t) + 124 * t);
        let g = Math.round(70 * (1 - t) + 58 * t);
        let b = Math.round(229 * (1 - t) + 237 * t);

        // Dibujar un libro estilizado / símbolo de educación en blanco en el centro
        const rx = (x - cx) / (size * 0.5);
        const ry = (y - cy) / (size * 0.5);

        // Páginas del libro (abierto)
        const isBookLeft = (rx >= -0.65 && rx <= -0.05 && ry >= -0.35 && ry <= 0.35);
        const isBookRight = (rx >= 0.05 && rx <= 0.65 && ry >= -0.35 && ry <= 0.35);

        // Marcador / lomo
        const isSpine = (Math.abs(rx) <= 0.04 && ry >= -0.4 && ry <= 0.4);

        // Checkmark o estrella
        const isCheck = (Math.abs(rx - 0.2) + Math.abs(ry - 0.1) < 0.15);

        if (isSpine) {
          r = 254; g = 240; b = 138; // Dorado Vygotsky
        } else if (isBookLeft || isBookRight) {
          // Páginas blancas con líneas sutiles
          r = 255; g = 255; b = 255;
          if (Math.abs(Math.sin(ry * 25)) > 0.8 && ry < 0.2) {
            r = 224; g = 231; b = 255; // Tinta azul suave
          }
        }

        rawData[pxOffset] = r;
        rawData[pxOffset + 1] = g;
        rawData[pxOffset + 2] = b;
        rawData[pxOffset + 3] = 255; // Opaco
      } else {
        // Transparente
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
      }
    }
  }

  const compressedData = zlib.deflateSync(rawData);

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR Chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const ihdrChunk = createChunk('IHDR', ihdr);
  const idatChunk = createChunk('IDAT', compressedData);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  const pngBuffer = Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
  fs.writeFileSync(filename, pngBuffer);
  console.log(`Generado ${filename} (${width}x${height})`);
}

function createChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);

  const crc = crc32(chunk.subarray(4, 8 + len));
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

function crc32(buf) {
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ (-1)) >>> 0;
}

const table = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let j = 0; j < 8; j++) {
    c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
  }
  table[i] = c;
}

createPNG(192, 'icon-192.png');
createPNG(512, 'icon-512.png');
