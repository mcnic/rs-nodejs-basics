import path from 'path';
import { stat, readdir } from 'fs/promises';

export default class DirectoryWalker {
  _dir = '';

  constructor(initialDir) {
    this._dir = initialDir;
  }

  get dir() {
    return this._dir;
  }

  set dir(newDir) {
    this._dir = newDir;
  }

  goUp() {
    this._dir = path.resolve(this._dir, '..');
  }

  async cd(dir) {
    const newDir = path.resolve(this._dir, dir);

    if (!(await stat(newDir)).isDirectory()) throw new Error('wrong directory');

    this._dir = newDir;
  }

  async ls(showHiddenFiles = false) {
    let files = await readdir(this._dir, { withFileTypes: true });
    if (!showHiddenFiles)
      files = files.filter((fileName) => fileName[0] !== '.');
    files = files.map((dirent) => ({
      Name: dirent.name,
      Type: dirent.isDirectory() ? 'directory' : 'file',
    }));

    console.table(files);
  }
}
