// Start logging "Loading..." every 1 second
const loadingInterval = setInterval(() => {
  console.log("Loading...");
}, 1000);

// Stops the interval after 5 seconds
setTimeout(() => {
  clearInterval(loadingInterval);
  console.log("Loaded successfully!");
}, 5000);
