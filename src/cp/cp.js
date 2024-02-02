import { spawn } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
  const fileName = path.join(process.cwd(), 'src/cp/files/script.js');

  process.stdout.write(
    'Enter your text or press "ctrl + c" or text "CLOSE" to quit\n'
  );
  const child = spawn(process.argv[0], [fileName, ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.on('data', (chunk) => {
    process.stdout.write(`Received from child process: ${chunk.toString()}\n`);
  });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
