import { createReadStream } from 'fs';
import path from 'path';

const read = async () => {
  const fileToReadPath = path.join(
    process.cwd(),
    'src/fs/files/fileToRead.txt'
  );

  const readStream = createReadStream(fileToReadPath);
  readStream.pipe(process.stdout);
};

await read();
