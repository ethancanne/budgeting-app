// Transaction;
// const date;
// const amount;
// const name;
// const desc;
// const category;
// const isExpense;

class Transaction {
  constructor(UID, name, date, amount, category, isExpense) {
    this.UID = UID;
    this.name = name;
    this.date = date;
    this.amount = parseInt(amount);
    this.category = category;
    this.isExpense = isExpense;
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
