"use strict";
console.log("task_07");

const transaction = {
  // DEPOSIT: 'deposit';
  // WITHDRAW: 'withdraw';
  id: 0
  // type,
  // amount,
  // status
};

// let id = "0000";
// let amount = 0;

const account = {
  balance: 0,
  transactionsLog: []
};

// let currentTransaction = [];

const createTransaction = function(amount, type) {
  const transactionId = Number.parseInt(transaction.id) + 1;
  let transactionType = type;
  let transactionAmount = amount;
  transaction.id = transactionId;
  if (transaction.type === "deposit") {
    account.balance = account.balance + transaction.amount;
    transaction.status = "passed";
  } else if (transaction.type === "withdraw") {
    if (account.balance < transaction.amount) {
      console.log("It is not enough funds on your account");
      transaction.status = "denied";
    } else {
      account.balance = account.balance - transaction.amount;
      transaction.status = "passed";
    }
  }
  // currentTransaction = [transaction];
  // account.transactionsLog = account.transactionsLog [transaction].slice();
  // account.transactionsLog[transaction.id].id = transaction.id;
  // account.transactionsLog.push(...[transaction]);
  account.transactionsLog.push(transaction);
  return transaction;
};

const deposit = function(amount) {
  // account.transactionsLog.push(transaction);
  return createTransaction(amount, "deposit");
};

const withdraw = function(amount) {
  // account.transactionsLog.push(transaction);
  return createTransaction(amount, "withdraw");
};

const getBalance = function() {
  return `Funds on your account: ${account.balance}cr`;
};

const getTransactionDetails = function(id) {
  // for (let i = 0, i < account.transactionLog.length, i += 1)
  // if (account.transactionsLog[i].id === id) {
  // return account.transactionsLog[i];
  // } else {};
};

const getTransactionType = function(type) {};

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
