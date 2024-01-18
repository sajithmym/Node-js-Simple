const { Queue, Worker } = require('bull');

async function processQueue() {
  // Create a new queue
  const myQueue = new Queue('myQueueName');

  // Add a job to the queue
  const job = await myQueue.add({ data: 'some data' });

  // Process jobs in the queue
  const worker = new Worker('myQueueName', async job => {
    // Do some processing with the job data
    console.log(job.data);
  });

  // Listen for completed jobs
  myQueue.on('completed', (job, result) => {
    console.log(`Job ${job.id} completed with result: ${result}`);
  });

  // Listen for failed jobs
  myQueue.on('failed', (job, err) => {
    console.log(`Job ${job.id} failed with error: ${err.message}`);
  });
}

// Call the asynchronous function to start processing the queue
processQueue();
