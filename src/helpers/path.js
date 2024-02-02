import path from 'path';
// import { fileURLToPath } from 'url';

// export const __filename = fileURLToPath(import.meta.url);
// export const __dirname = path.dirname(__filename);

export const getFullPath = (url) => path.join(process.cwd(), url);
export const getDirname = (url) => path.dirname(url);
