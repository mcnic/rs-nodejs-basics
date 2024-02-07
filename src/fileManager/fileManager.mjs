import path from 'path';
import os from 'os';
import { getArgs } from './getArgs.mjs';
import DirectoryWalker from './directoryWalker.mjs';
import {
  sayCurrentDir,
  sayGoodby,
  sayInvalidMessage,
  sayOperationFailed,
  sayWelcome,
} from './sayToConsole.mjs';
import {
  addFile,
  catFile,
  copyFile,
  deleteFile,
  moveFile,
  renameFile,
} from './fileOperations.mjs';
import { osCmd } from './osOperations.mjs';
import { calculateHash } from './fileHash.mjs';
import { compressBrotli, decompressBrotli } from './fileArchives.mjs';

const userName = getArgs()['username'] || 'nouname';
const directoryWalker = new DirectoryWalker(os.homedir());

const getFullPath = (pathToFile) => {
  return path.resolve(directoryWalker._dir, pathToFile);
};

const sayGoodbyAndExit = () => {
  sayGoodby(userName);
  process.exit();
};

sayWelcome(userName);
sayCurrentDir(directoryWalker.dir);

process.on('SIGINT', () => sayGoodbyAndExit());

process.stdin.on('data', async (data) => {
  try {
    const args = data.toString().trim().split(' ');

    switch (args[0]) {
      case '.exit':
        sayGoodbyAndExit();
        break;
      case 'up':
        directoryWalker.goUp();
        break;
      case 'cd':
        await directoryWalker.cd(args[1]);
        break;
      case 'ls':
        await directoryWalker.ls(true);
        break;
      case 'cat':
        await catFile(getFullPath(args[1]));
        break;
      case 'add':
        await addFile(getFullPath(args[1]));
        break;
      case 'rn':
        await renameFile(getFullPath(args[1]), getFullPath(args[2]));
        break;
      case 'cp':
        await copyFile(getFullPath(args[1]), getFullPath(args[2]));
        break;
      case 'mv':
        await moveFile(getFullPath(args[1]), getFullPath(args[2]));
        break;
      case 'rm':
        await deleteFile(getFullPath(args[1]));
        break;
      case 'os':
        await osCmd(args[1]);
        break;
      case 'hash':
        await calculateHash(getFullPath(args[1]));
        break;
      case 'compress':
        await compressBrotli(getFullPath(args[1]), getFullPath(args[2]));
        break;
      case 'decompress':
        await decompressBrotli(getFullPath(args[1]), getFullPath(args[2]));
        break;
      default:
        sayInvalidMessage();
    }
  } catch {
    sayOperationFailed();
  }

  sayCurrentDir(directoryWalker.dir);
});
