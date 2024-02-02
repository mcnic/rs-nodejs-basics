import { mkdir, readdir, copyFile } from 'fs/promises';
import path from 'path';

const copy = async () => {
  const srcDir = path.join(process.cwd(), 'src/fs/files');
  const destDir = path.join(process.cwd(), 'src/fs/files_copy');

  try {
    await mkdir(destDir);

    const files = await readdir(srcDir);
    for (const file of files) {
      await copyFile(path.join(srcDir, file), path.join(destDir, file));
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
