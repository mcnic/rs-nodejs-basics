import { Transform } from 'stream';

const pipeLog = new Transform({
  transform(chunk, _, callback) {
    process.stdout(chunk.toString());
    callback(null, chunk.toString());
  },
});

export default pipeLog;
