import { unlink } from 'fs/promises';
import path from 'path';

const remove = async () => {
  const file = path.join(process.cwd(), 'src/fs/files/fileToRemove.txt');

  try {
    await unlink(file);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
