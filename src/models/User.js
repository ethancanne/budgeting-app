// User;
// transactions;
// totalIncome;
// totalExpense;
// const username;

// generateReport;

class User {
  constructor(transactions, totalIncome, totalExpense) {
    this.transactions = transactions;
    this.totalIncome = parseInt(totalIncome);
    this.totalExpense = parseInt(totalExpense);
  }

  static createFromObject(userObj) {
    return new User(
      userObj.transactions,
      parseInt(userObj.totalIncome),
      parseInt(userObj.totalExpense)
    );
  }

  getNewUID() {
    if(this.transactions.length > 0) return Math.max.apply(Math, this.transactions.map(function(t) { return t.UID; })) + 1;
    else return 0;
  }

  addTransaction(transaction) {
    // Add transaction to total amount of money user has
    if (transaction.isExpense) this.totalExpense += transaction.amount;
    else this.totalIncome += transaction.amount;
    this.transactions.push(transaction);
  }

  removeTransaction(UID) {
    for (let i = this.transactions.length; i >= 0; --i) {
      if (this.transactions[i].UID == UID) {
        this.transactions.splice(i, 1);
        return 0;
      }
    }
    return 1;
  }

  recalculateTotals() {
    this.totalIncome = this.totalExpense = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].isExpense)
        this.totalExpense += transactions[i].amount;
      this.totalIncome += transactions[i].amount;
    }
  }

  generateReport(dateStart, dateEnd) {}

  toJSON() {
    return {
      transactions: this.transactions,
      totalExpense: this.totalExpense,
      totalIncome: this.totalIncome,
    };
  }
}

export default User;
