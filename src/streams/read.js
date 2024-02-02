import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const read = async () => {
  const file = path.join(process.cwd(), 'src/streams/files/fileToRead.txt');
  const readStream = createReadStream(file);

  await pipeline(readStream, process.stdout);
};

await read();
