import { readdir } from 'fs/promises';
import path from 'path';

const list = async () => {
  const srcDir = path.join(process.cwd(), 'src/fs/files');

  try {
    const files = await readdir(srcDir);
    console.log(files); // alternative is files.map((file) => console.log(file));
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
