import "./CreateTransactionView.scss";
import React, { useState } from "react";
import Button from "../../core/button/Button";

const CreateTransactionView = props => {
  const [name, setName] = useState('Name');
  const [date, setDate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('Other');
  const [isExpense, setIsExpense] = useState(0);

  const updateName = e => {
    setName(e.target.value);
  }

  const updateDate = e => {
    setDate(e.target.value);
  };

  const updateAmount = e => {
    setAmount(e.target.value);
  };

  const updateCategory = e => {
    setCategory(e.target.value);
  };

  const updateIsExpense = e => {
    setIsExpense(e.target.value);
  };

  //Save the transaction to local storage on form submit
  const handleCreateTransaction = e => {
    //Stop default form funcitonality
    e.preventDefault();
    e.stopPropagation();
    //Create transaction object with state properties
    const newTransaction = new Transaction(name, date, amount, category, isExpense);
    //Store the transaction object in local storage
    App.user.transactions.push(newTransaction);
    //Close the popup
    props.setPopup(false);
  };
  return (
    <div className='create-transaction-view'>
      <form onSubmit={handleCreateTransaction}>
        <label>Name
          <input type='text' value={name} onChange={updateName} />
        </label>
        <label>Date
          <input type='date' value={date} onChange={updateDate} />
        </label>
        <label>Amount
          <input type='text' value={amount} onChange={updateAmount}
          pattern="(0\.((0[1-9]{1})|([1-9]{1}([0-9]{1})?)))|(([1-9]+[0-9]*)(\.([0-9]{1,2}))?)"/>
        </label>
        <label>Category
          <select value={isExpense} onChange={updateCategory}>
            <option value='Paycheck'>Paycheck</option>
            <option value='Interest'>Interest</option>
            <option value='Bills & Utilities'>Bills & Utilities</option>
            <option value='Food'>Food</option>
            <option value='Rent & Mortgage'>Rent & Mortgage</option>
            <option value='Auto & Transport'>Auto & Transport</option>
            <option value='Shopping'>Shopping</option>
            <option value='Entertainment'>Entertainment</option>
            <option value='Gifts & Donations'>Gifts & Donations</option>
            <option value='Travel'>Travel</option>
            <option value='Other'>Other</option>
          </select>
        </label>
        <label>Income or Expense
          <select onChange={updateIsExpense}>
            <option value='false'>Income</option>
            <option value='true'>Expense</option>
          </select>
        </label>

        <Button>Click</Button>
      </form>
    </div>
  );
};

export default CreateTransactionView;
