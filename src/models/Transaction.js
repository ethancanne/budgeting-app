// Transaction;
class Transaction {
  constructor(name, date, amount, category, isExpense) {
    this.name = name;
    this.date = new Date(date);
    this.amount = parseInt(amount);
    this.category = category;
    this.isExpense = isExpense;
  }

  static createFromObject(transactionObj) {
    return new Transaction(
      transactionObj.name,
      transactionObj.date,
      transactionObj.amount,
      transactionObj.category,
      transactionObj.isExpense
    );
  }

  toJSON() {
    return {
      name: this.name,
      date: this.date,
      amount: this.amount,
      category: this.category,
      isExpense: this.isExpense,
    };
  }
}

export default Transaction;
