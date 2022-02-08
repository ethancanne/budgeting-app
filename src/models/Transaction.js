// Transaction;
class Transaction {
  constructor(UID, name, date, amount, category, isExpense) {
    this.UID = UID;
    this.name = name;
    this.date = new Date(date);
    this.amount = parseInt(amount);
    this.category = category;
    this.isExpense = isExpense;
  }

  static createFromObject(transactionObj) {
    return new Transaction(
      transactionObj.UID,
      transactionObj.name,
      transactionObj.date,
      transactionObj.amount,
      transactionObj.category,
      transactionObj.isExpense
    );
  }

  setUID(UID) {
    this.UID = UID;
  }

  toJSON() {
    return {
      name: this.name,
      date: this.date,
      amount: this.amount,
      category: this.category,
      isExpense: this.isExpense,
      UID: this.UID,
    };
  }
}

export default Transaction;
