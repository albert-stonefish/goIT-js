"use strict";
console.log("task_07");

const transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
  id: 0
  // type,
  // amount,
  // status
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const currentTransaction = {};
    currentTransaction.id = account.transactions.length + 1;
    currentTransaction.type = type;
    currentTransaction.amount = amount;
    if (type === "deposit") {
      account.balance = account.balance + amount;
      currentTransaction.status = "passed";
    } else if (type === "withdraw") {
      if (account.balance < amount) {
        console.log("It is not enough funds on your account");
        currentTransaction.status = "denied";
      } else {
        account.balance = account.balance - amount;
        currentTransaction.status = "passed";
      }
    }

    // account.transactionsLog = account.transactionsLog [transaction].slice();
    // account.transactionsLog[transaction.id].id = transaction.id;
    // account.transactionsLog.push(...[transaction]);
    // account.transactions.push(currentTransaction);
    return transaction;
  },

  deposit(amount) {
    account.transactions.push(transaction);
    return createTransaction(amount, "deposit");
  },

  withdraw(amount) {
    account.transactions.push(transaction);
    return createTransaction(amount, "withdraw");
  },

  getBalance() {
    return `Funds on your account: ${account.balance}cr`;
  },

  getTransactionDetails(id) {
    // for (let i = 0, i < account.transactionLog.length, i += 1)
    // if (account.transactionsLog[i].id === id) {
    // return account.transactionsLog[i];
    // } else {};
  },

  getTransactionType(type) {}
};

console.log(transaction);
// console.log([transaction].slice());
console.log(deposit(500));
// console.log(currentTransaction);
// console.log(transaction);
console.log(account);
console.log(account.transactionsLog);
// console.log(account.transactionsLog[transaction.id].id);
console.log(account.transactionsLog[1]);
console.log(account.transactionsLog[2]);
console.log(getBalance());

console.log(withdraw(550));
console.log(account);
console.log(account.transactionsLog);
// console.log(account.transactionsLog[transaction.id].id);

console.log(account.transactionsLog[0]);
console.log(account.transactionsLog[1]);
console.log(account.transactionsLog[2]);
console.log(getBalance());

console.log(deposit(1000));
console.log(account);
console.log(account.transactionsLog);
console.log(account.transactionsLog[0]);
console.log(account.transactionsLog[1]);
console.log(account.transactionsLog[2]);
console.log(getBalance());

console.log("...");
