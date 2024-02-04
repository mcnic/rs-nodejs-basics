import { createReadStream, createWriteStream } from 'fs';
import { writeFile, rename, unlink } from 'fs/promises';
import { pipeline } from 'stream/promises';

export const catFile = async (pathToFile) => {
  const readStream = createReadStream(pathToFile);

  readStream.pipe(process.stdout);
};

export const addFile = async (pathToFile) => {
  await writeFile(pathToFile, '', { flag: 'wx' });
};

export const renameFile = async (oldPath, newPath) => {
  rename(oldPath, newPath);
};

export const copyFile = async (oldPath, newPath) => {
  const readStream = createReadStream(oldPath);
  const writeStream = createWriteStream(newPath);

  await pipeline(readStream, writeStream);
};

export const deleteFile = async (pathToFile) => {
  await unlink(pathToFile);
};

export const moveFile = async (oldPath, newPath) => {
  await copyFile(oldPath, newPath);
  await deleteFile(oldPath);
};
