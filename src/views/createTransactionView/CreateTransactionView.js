import "./CreateTransactionView.scss";
import React, { useState } from "react";
import Button from "../../core/button/Button";
import Transaction from "../../models/Transaction";
import User from "../../models/User";

const CreateTransactionView = props => {
  const [name, setName] = useState("");
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const updateName = e => {
    setName(e.target.value);
  };

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
    setIsExpense(e.target.value !== "false");
  };

  //Save the transaction to local storage on form submit
  const handleCreateTransaction = e => {
    //Stop default form funcitonality
    e.preventDefault();
    e.stopPropagation();
    //Create transaction object with state properties
    const newTransaction = new Transaction(
      name,
      date,
      amount,
      category,
      isExpense
    );
    //Store the transaction object in local storage
    const user = User.createFromObject(
      JSON.parse(localStorage.getItem("user"))
    );
    user.addTransaction(newTransaction);
    localStorage.setItem("user", JSON.stringify(user));
    window.dispatchEvent(new Event("storage"));

    //Close the popup
    props.setPopup(false);
  };

  return (
    <div className='create-transaction-view'>
      <form onSubmit={handleCreateTransaction}>
        <label>
          <p>Name</p>
          <input
            type='text'
            value={name}
            onChange={updateName}
            placeholder='Transaction Name'
          />
        </label>
        <label>
          <p>Date</p>
          <input type='date' value={date} onChange={updateDate} />
        </label>
        <label>
          <p>Amount</p>
          <input
            type='text'
            value={amount}
            onChange={updateAmount}
            pattern='(0\.((0[1-9]{1})|([1-9]{1}([0-9]{1})?)))|(([1-9]+[0-9]*)(\.([0-9]{1,2}))?)'
          />
        </label>
        <label>
          <p>Category</p>
          <select value={category} onChange={updateCategory}>
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
        <label>
          <p>Income or Expense</p>
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
