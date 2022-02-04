// User;
// transactions;
// totalIncome;
// totalExpense;
// const username;

// generateReport;

class User {
  constructor(transactions, totalIncome, totalExpense) {
    this.transactions = transactions;
    this.totalIncome = totalIncome;
    this.totalExpense = totalExpense;
  }

  addTransaction(transaction) {
    // Add transaction to total amount of money user has
    if (transaction.isExpense) totalExpense += transaction.amount;
    else totalIncome += transaction.amount;
    transactions.push(transaction);
  }

  removeTransaction(transactionName) {
    for (let i = transactions.length; i >= 0; --i) {
      if (transactions[i].name == transactionName) {
        transactions.splice(i, 1);
        return 0;
      }
    }
    return 1;
  }

  recalculateTotals() {
    totalIncome = totalExpense = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].isExpense) totalExpense += transactions[i].amount;
      totalIncome += transactions[i].amount;
    }
  }

  generateReport(dateStart, dateEnd) {}
}

export default User;
