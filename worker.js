const { parentPort } = require("worker_threads");

parentPort.on("message", (data) => {
  parentPort.postMessage(`fibonacci of ${data.num} = ${getFib(data.num)}`);
});

const getFib = (num) => {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  return getFib(num - 1) + getFib(num - 2);
};
