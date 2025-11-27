function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}

function getUserInput(callback) {
  setTimeout(() => {
    const username = "Pooja";
    callback(username);
  }, 1000);
}

getUserInput(displayMessage);
