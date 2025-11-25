console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");

/* Why the output comes in this order

JavaScript reads and runs code from top to bottom.
But it treats different types of tasks differently:

Normal code runs immediately.

Promises run after all normal code finishes.

setTimeout runs after Promises — even if the delay is 0. 
 
*/
