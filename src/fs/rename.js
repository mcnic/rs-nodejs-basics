import { rename as asyncRename } from 'fs/promises';
import path from 'path';

const rename = async () => {
  const srcFile = path.join(process.cwd(), 'src/fs/files/wrongFilename.txt');
  const destFile = path.join(process.cwd(), 'src/fs/files/properFilename.md');

  try {
    await asyncRename(srcFile, destFile);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
