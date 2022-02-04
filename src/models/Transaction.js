// Transaction;
// const date;
// const amount;
// const name;
// const desc;
// const category;
// const isExpense;

class Transaction {
  constructor(name, date, amount, category, isExpense) {
    this.name = name;
    this.date = date;
    this.amount = parseInt(amount);
    this.category = category;
    this.isExpense = isExpense;
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
