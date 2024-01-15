const { Worker } = require("bullmq");

const connection = {
  host: "localhost",
  port: 6379,
};

const sendEmail = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(), 5 * 1000);
  });
};

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`Message recieved with id ${job.id}`);
    console.log("Processing message");
    console.log(`Sending email to ${job.data.email}`);
    await sendEmail();
    console.log("Email Sent");
  },
  { connection }
);
