import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import path from 'path';

const decompress = async () => {
  const rootPath = path.join(process.cwd(), 'src/zip/files');
  const input = path.join(rootPath, 'archive.gz');
  const output = path.join(rootPath, 'fileToCompress.txt');

  const source = createReadStream(input);
  const destination = createWriteStream(output);
  const decompress = createGunzip();

  await pipeline(source, decompress, destination);
};

await decompress();
