const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue");

async function init() {
  const res = await notificationQueue.add("email to user", {
    email: "abc.com",
    subject: "Welcome",
    body: "Hey User",
  });

  console.log("Job added to queue", res.id);
}

init();
