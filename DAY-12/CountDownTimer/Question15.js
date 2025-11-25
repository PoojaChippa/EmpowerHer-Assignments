const readline = require("readline");

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user for countdown time
rl.question("Enter number of seconds to countdown: ", (input) => {
  let seconds = parseInt(input, 10);

  if (isNaN(seconds) || seconds <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  console.log(`Starting countdown from ${seconds} seconds...`);
  console.log("Press 's' to stop the countdown.\n");

  let remaining = seconds;
  let countdownId;
  let stopped = false;
  let stopRequested = false;

  // Enable key detection
  process.stdin.setRawMode(true);
  process.stdin.resume();

  // Listen for "s" key
  process.stdin.on("data", (key) => {
    if (key.toString().toLowerCase() === "s") {
      stopRequested = true;
    }
  });

  // Repeatedly check if user pressed "s"
  function checkForStop() {
    if (stopRequested && !stopped) {
      clearInterval(countdownId);
      stopped = true;
      console.log("Countdown stopped by user (pressed 's').");

      rl.close();
      process.exit();
    }

    if (!stopped) {
      setTimeout(checkForStop, 200);
    }
  }

  // Start checking for stop
  setTimeout(checkForStop, 200);

  // Countdown using setInterval
  countdownId = setInterval(() => {
    console.log(`Time remaining: ${remaining} seconds`);
    remaining--;

    if (remaining < 0 && !stopped) {
      clearInterval(countdownId);
      stopped = true;
      console.log("Countdown Complete!");

      rl.close();
      process.exit();
    }
  }, 1000);
});
