import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import path from 'path';

const compress = async () => {
  const rootPath = path.join(process.cwd(), 'src/zip/files');
  const input = path.join(rootPath, 'fileToCompress.txt');
  const output = path.join(rootPath, 'archive.gz');

  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);

  await pipeline(source, gzip, destination);
};

await compress();
