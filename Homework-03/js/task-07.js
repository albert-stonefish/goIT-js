"use strict";
console.log("task_07");

const transaction = {};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type, status) {
    const currentTransaction = {};
    currentTransaction.id = account.transactions.length + 1;
    currentTransaction.type = type;
    currentTransaction.amount = amount;
    currentTransaction.status = status;
    return currentTransaction;
  },

  deposit(amount) {
    let message;
    let status = "passed";
    message = "Transaction passed";
    account.balance = account.balance + amount;
    console.log(message);
    return account.transactions.push(
      account.createTransaction(amount, "deposit", status)
    );
  },

  withdraw(amount) {
    let message;
    let status;
    if (account.balance < amount) {
      message = "It is not enough funds on your account. Transaction denied";
      status = "denied";
    } else {
      message = "Transaction passed";
      status = "passed";
      account.balance = account.balance - amount;
    }
    console.log(message);
    return account.transactions.push(
      account.createTransaction(amount, "withdraw", status)
    );
  },

  getBalance() {
    return `Funds on your account: ${account.balance}cr`;
  },

  getTransactionDetails(id) {
    for (let i = 0; i < account.transactions.length; i += 1) {
      if (account.transactions[i].id === id) {
        return account.transactions[i];
      } else {
      }
    }
  },

  getTransactionType(type) {
    let totalOfType = 0;
    let message;
    for (let i = 0; i < account.transactions.length; i++) {
      if (type === "deposit") {
        if (account.transactions[i].type === type) {
          totalOfType = totalOfType + account.transactions[i].amount;
          message = "Total deposited funds equals";
        } else {
        }
      } else {
        if (
          account.transactions[i].type === type &&
          account.transactions[i].status === "passed"
        ) {
          totalOfType = totalOfType + account.transactions[i].amount;
          message = "Total withdrawn funds equals";
        } else {
        }
      }
    }
    return `${message} ${totalOfType}`;
  }
};

console.log(account.deposit(500)); // +500

console.log(account.getBalance()); // balance

console.log(account.withdraw(550)); // -550

console.log(account.getBalance()); // balance

console.log(account.withdraw(400)); // -400

console.log(account.getBalance()); // balance

console.log(account.deposit(1000)); // +1000

console.log(account.getBalance()); // balance

console.log(account.transactions); //transactions history

console.log(account.getTransactionDetails(2)); //transaction history of transaction id:2

console.log(account.getTransactionType("deposit")); //total successfully deposited funds

console.log(account.getTransactionType("withdraw")); //total successfully withdrawn funds

console.log("...");
