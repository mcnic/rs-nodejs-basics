import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  try {
    const reverse = new Transform({
      transform(chunk, _, callback) {
        const reversedText = chunk.toString().split('').reverse().join('');
        callback(null, reversedText + '\n');
      },
    });

    await pipeline(process.stdin, reverse, process.stdout);
  } catch (error) {
    process.stderr(error.message);
  }
};

await transform();
