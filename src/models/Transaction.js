Transaction;
const date;
const amount;
const name;
const desc;
const category;
const isExpense;

const categoriesEnum = Object.freeze({
  paycheck: 'Paycheck',
  interest: 'Interest',
  bill: 'Bills & Utilities',
  food: 'Food',
  rent: 'Rent / Mortgage',
  auto: 'Auto & Transport',
  shopping: 'Shopping',
  entertainment: 'Entertainment',
  gift: 'Gifts & Donations',
  travel: 'Travel',
  misc: 'Other'
})

class Transaction {
  constructor(name, date, amount, category, isExpense) {
    this.name = name;
    this.date = date;
    this.amount = amount;
    this.category = category;
    this.isExpense = isExpense;
  }
}
