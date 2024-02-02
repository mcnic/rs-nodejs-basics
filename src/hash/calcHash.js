import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';

const calculateHash = async () => {
  try {
    const hash = createHash('sha256');
    const file = path.join(
      process.cwd(),
      'src/hash/files/fileToCalculateHashFor.txt'
    );

    const readStream = createReadStream(file);

    readStream.pipe(hash).on('finish', () => {
      console.log('SHA256 hash of file:', hash.digest('hex'));
    });
  } catch (error) {
    console.error(error.message);
  }
};

await calculateHash();
