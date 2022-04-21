const http = require("http");
const url = require("url");
const port = 8000;

const { Worker } = require("worker_threads");
const worker = new Worker("./worker.js");

const requestListener = (req, res) => {
  // get the route param
  const requestUrl = url.parse(req.url);
  const path = requestUrl.pathname;
  const number = parseInt(path.split("/").slice(1)[0]);
  let msg = "fib printed to console.";
  //  if isValid number then post to worker
  if (typeof number === "number") worker.postMessage({ num: number });
  else msg = "err";

  // give a generic response
  res.setHeader("Content-Type", "text/plain");
  res.end(msg);
};

worker.once("message", (result) => console.log(result));

worker.on("error", (error) => {});

http
  .createServer(requestListener)
  .listen(port, () =>
    console.log(`Server is running on http://localhost:${port}`)
  );
