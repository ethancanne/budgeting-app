// User;
import Transaction from "./Transaction";

class User {
  constructor(transactions, totalIncome, totalExpense) {
    this.transactions = transactions;
    this.totalIncome = parseInt(totalIncome);
    this.totalExpense = parseInt(totalExpense);
  }

  static createFromObject(userObj) {
    const newTransactionList = [];
    userObj.transactions.forEach(transaction => {
      newTransactionList.push(Transaction.createFromObject(transaction));
    });
    return new User(
      newTransactionList,
      parseInt(userObj.totalIncome),
      parseInt(userObj.totalExpense)
    );
  }

  getNewUID() {
    if (this.transactions.length > 0)
      return (
        Math.max.apply(
          Math,
          this.transactions.map(function (t) {
            return t.UID;
          })
        ) + 1
      );
    else return 0;
  }

  addTransaction(transaction) {
    // Add transaction to total amount of money user has
    if (transaction.isExpense) this.totalExpense += transaction.amount;
    else this.totalIncome += transaction.amount;
    this.transactions.push(transaction);
  }

  removeTransaction(UID) {
    this.transactions = this.transactions.filter(
      transaction => transaction.UID !== UID
    );
  }

  recalculateTotals() {
    this.totalIncome = this.totalExpense = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].isExpense)
        this.totalExpense += this.transactions[i].amount;
      else this.totalIncome += this.transactions[i].amount;
    }
  }

  toJSON() {
    return {
      transactions: this.transactions,
      totalExpense: this.totalExpense,
      totalIncome: this.totalIncome,
    };
  }
}

export default User;
