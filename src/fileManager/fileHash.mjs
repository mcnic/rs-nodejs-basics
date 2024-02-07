import { createReadStream } from 'fs';
import { createHash } from 'crypto';

export const calculateHash = async (fileName, hashType = 'sha256') => {
  console.log(fileName);
  const hash = createHash(hashType);
  const readStream = createReadStream(fileName);

  readStream.pipe(hash).on('finish', () => {
    console.log('Hash:', hash.digest('hex'));
  });
};
