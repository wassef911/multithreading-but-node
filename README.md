## Multithreading in node ?

![cover](./cover.png)

Worker threads are run on these isolated V8 engines, each worker having its own V8 engine and event queue. In other words, when workers are active, a Node application has multiple Node instances running in the same process.

V8 supports the creation of isolated V8 runtimes. These isolated instances, known as V8 Isolate , have their own Javascript heaps and micro-task queues.
