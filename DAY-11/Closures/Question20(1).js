//1.
function createCounter() {
  // private variable
  let count = 0;

  function increment() {
    count++;
    console.log("Current count:", count);
  }

  function decrement() {
    count--;
    console.log("Current count:", count);
  }

  function getCount() {
    console.log("Current count:", count);
    return count;
  }

  return {
    increment,
    decrement,
    getCount,
  };
}

// Example usage:
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1
counter.getCount(); // Output: Current count: 1

console.log("\n");
// 2. How are closures used here?
console.log(
  "2: count is created inside createCounter, so it is not directly accessible outside. The inner functions (increment, decrement, getCount) form a closure, meaning they remember the variable count even after createCounter() has finished running. Because of this closure, the inner functions can use and update count, but the outside world cannot access it directly. This makes count act like a private variable."
);

console.log("\n");
// 3. What happens if multiple counters are created using same function?

console.log(
  "3. Each time we call createCounter(), a new count variable is created in a separate closure."
);

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment(); // Current count: 1 (counter1’s count = 1)
counter1.increment(); // Current count: 2 (counter1’s count = 2)

counter2.increment(); // Current count: 1 (counter2’s count = 1)
counter2.decrement(); // Current count: 0 (counter2’s count = 0)

counter1.getCount(); // Current count: 2
counter2.getCount(); // Current count: 0

console.log(
  "counter1 and counter2 do not share the same count. Each has its own private count maintained by its own closure."
);
