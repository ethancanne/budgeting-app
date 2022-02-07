import "./TransactionHistoryView.scss";
import React, { useState } from "react";
import User from "../../models/User";

const TransactionHistoryView = props => {
  var transactions = [];
  if (localStorage.getItem("user")) {
    transactions = User.createFromObject(
      JSON.parse(localStorage.getItem("user"))
    ).transactions;
  }

  return (
    <div className='transaction-history-view'>
      <table>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Income or Expense</th>
          <th>Delete</th>
        </tr>

        {transactions.map(transaction => (
          <tr>
            <td>{transaction.name}</td>
            <td>{transaction.date}</td>
            <td>${transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>{transaction.isExpense ? "Expense" : "Income"}</td>
            <td>Delete</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TransactionHistoryView;
