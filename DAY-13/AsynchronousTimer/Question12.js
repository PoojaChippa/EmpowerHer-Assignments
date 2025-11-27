function timer(duration, onComplete) {
  setTimeout(() => {
    const message = `Timer of ${duration} ms finished`;
    onComplete(message);
  }, duration);
}

//Example
timer(2000, function (msg) {
  console.log(msg);
});
