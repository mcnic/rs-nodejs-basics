import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const write = async () => {
    const filePath = path.join(
        process.cwd(),
        'src/streams/files/fileToWrite.txt'
    );
    const writableStream = createWriteStream(filePath, { autoClose: true });

    await pipeline(process.stdin, writableStream);
};

await write();
