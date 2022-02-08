import "./TransactionHistoryView.scss";
import React, { useState } from "react";
import User from "../../models/User";
import Button from "../../core/button/Button";

const TransactionHistoryView = props => {
  var user;
  if (localStorage.getItem("user")) {
    user = User.createFromObject(
      JSON.parse(localStorage.getItem("user"))
    );
  }

  function handleDelete(UID) {
    user.removeTransaction(UID);
  }

  return (
    <div className='transaction-history-view'>
      <table>
        <tr>
          <th>UID (For Debugging Only)</th>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Income or Expense</th>
          <th>Delete</th>
        </tr>

        {user.transactions.map(transaction => (
          <tr>
            <td>{transaction.UID}</td>
            <td>{transaction.name}</td>
            <td>{transaction.date}</td>
            <td>${transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>{transaction.isExpense ? "Expense" : "Income"}</td>
            <td>
              <Button
                onClick={() => handleDelete(transaction.UID)}
              >Delete</Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TransactionHistoryView;
