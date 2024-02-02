import { Worker } from 'worker_threads';
import path from 'path';
import { availableParallelism } from 'os';

const performCalculations = async () => {
  const fileName = path.join(process.cwd(), 'src/wt/worker.js');

  function createWorker(workerData) {
    return new Promise(function (resolve, reject) {
      const worker = new Worker(fileName, {
        workerData,
      });
      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', (err) => {
        resolve({ status: 'error', data: null });
        reject(err);
      });
    });
  }

  const workerThreads = [];
  const numCores = availableParallelism();
  for (let i = 0; i < numCores; i++) {
    workerThreads.push(createWorker(10 + i));
  }
  const results = await Promise.all(workerThreads);
  console.log(results);
};

await performCalculations();
