import "./ReportView.scss";
import User from "../../models/User";
import React, { useEffect } from "react";

const ReportView = () => {
  const transactions = User.createFromObject(
    JSON.parse(localStorage.getItem("user"))
  ).transactions;

  var maxValue = 0;
  var categoryValues = [];

  useEffect(() => {
    console.log(transactions);
    transactions.forEach(transaction => {
      if (transaction.amount > maxValue) {
        maxValue = transaction.amount;
      }
      var categoryIndex = categoryValues.findIndex(
        category => category.category === transaction.category
      );
      // console.log(categoryValues);
      if (!categoryIndex !== -1) {
        categoryValues.push({
          category: transaction.category,
          income: 0,
          expense: 0,
        });
        categoryIndex = categoryValues.length - 1;
      }
      categoryValues[categoryIndex].income += transaction.isExpense
        ? 0
        : transaction.amount;
      categoryValues[categoryIndex].expense += transaction.isExpense
        ? transaction.amount
        : 0;
    });
    console.log(categoryValues, maxValue);
  }, []);

  return <div className='report-view'></div>;
};

export default ReportView;
