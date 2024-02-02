import { writeFile } from 'fs/promises';
import path from 'path';

const create = async () => {
  const filePath = path.join(process.cwd(), 'src/fs/files/fresh.txt');
  const text = 'I am fresh and young';

  try {
    await writeFile(filePath, text, { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
