// 1. Implementation createBankAccount

function createBankAccount() {
  // Private variable
  let balance = 0;

  function deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive");
      return;
    }
    balance += amount;
    console.log("Deposited:", amount);
  }

  function withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive");
      return;
    }
    if (amount > balance) {
      console.log("Insufficient balance");
      return;
    }
    balance -= amount;
    console.log("Withdrawn:", amount);
  }

  function getBalance() {
    console.log("Current balance:", balance);
    return balance;
  }

  return {
    deposit,
    withdraw,
    getBalance,
  };
}

// Example usage:
const account = createBankAccount();
account.deposit(500); // Deposited: 500
account.withdraw(200); // Withdrawn: 200
account.withdraw(400); // Insufficient balance
console.log(account.balance); // undefined (no direct access)
account.getBalance(); // Current balance: 300

console.log("\n");

// 2. How closure keeps balance private

console.log(
  "balance is created inside createBankAccount, so it cannot be accessed from outside. The returned methods (deposit, withdraw, getBalance) form a closure, meaning they remember and can use balance even after the function finishes. Since balance is not returned or exposed as a property, doing account.balance gives undefined. Only the inner functions can access or change balance, making it act like a private variable."
);

console.log("\n");

// 3. Add transactionHistory Using Closures
function createBankAccount() {
  let balance = 0; // private
  let transactionHistory = []; // private

  function addTransaction(type, amount) {
    transactionHistory.push({
      type,
      amount,
      date: new Date().toISOString(),
    });
  }

  function deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive");
      return;
    }
    balance += amount;
    addTransaction("DEPOSIT", amount);
    console.log("Deposited:", amount);
  }

  function withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive");
      return;
    }
    if (amount > balance) {
      console.log("Insufficient balance");
      addTransaction("FAILED_WITHDRAWAL", amount);
      return;
    }
    balance -= amount;
    addTransaction("WITHDRAW", amount);
    console.log("Withdrawn:", amount);
  }

  function getBalance() {
    console.log("Current balance:", balance);
    return balance;
  }

  function getTransactionHistory() {
    return transactionHistory.slice();
  }

  return {
    deposit,
    withdraw,
    getBalance,
    getTransactionHistory,
  };
}

// Example usage:
const account2 = createBankAccount();
account2.deposit(1000); // Deposited: 1000
account2.withdraw(300); // Withdrawn: 300
account2.withdraw(800); // Insufficient balance

console.log(account2.balance); // undefined – still private

console.log(account2.getTransactionHistory());
/*
[
  { type: 'DEPOSIT', amount: 1000, date: '...' },
  { type: 'WITHDRAW', amount: 300, date: '...' },
  { type: 'FAILED_WITHDRAWAL', amount: 800, date: '...' }
]
*/

// How closures enable transactionHistory?
console.log(
  " transactionHistory is created inside createBankAccount, so it is hidden from the outside. The inner functions form a closure, so they keep access to transactionHistory even after the main function finishes. This lets the methods update and read the history, while outside code cannot access or change it directly. Closures provide private data + controlled access, similar to private variables in OOP."
);
