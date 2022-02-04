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
    this.amount = amount;
    this.category = category;
    this.isExpense = isExpense;
  }
}

export default Transaction;
