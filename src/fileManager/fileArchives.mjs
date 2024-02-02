import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';

export const compressBrotli = async (fileIn, fileOut) => {
  const arch = createBrotliCompress();
  const source = createReadStream(fileIn);
  const destination = createWriteStream(fileOut);

  await pipeline(source, arch, destination);
};

export const decompressBrotli = async (fileIn, fileOut) => {
  const arch = createBrotliDecompress();
  const source = createReadStream(fileIn);
  const destination = createWriteStream(fileOut);

  await pipeline(source, arch, destination);
};
