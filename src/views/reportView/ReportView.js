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
  return (
    <div className='report-view'>
      <table id='moneygraph'>
        <caption>Financial Report</caption>
        <thead>
          <tr>
            <th></th>
            <th className='income'>Income</th>
            <th className='expense'>Expense</th>
          </tr>
        </thead>
        <tbody>
          <tr className='qtr' id='q1'>
            <th scope='row'>Q1</th>
            <td className='income bar' style={{ height: "111px" }}>
              <p>$18,450.00</p>
            </td>
            <td className='expense bar' style={{ height: "99px" }}>
              <p>$16,500.00</p>
            </td>
          </tr>
          <tr className='qtr' id='q2'>
            <th scope='row'>Q2</th>
            <td className='income bar' style={{ height: "206px" }}>
              <p>$34,340.72</p>
            </td>
            <td className='expense bar' style={{ height: "194px" }}>
              <p>$32,340.72</p>
            </td>
          </tr>
          <tr className='qtr' id='q3'>
            <th scope='row'>Q3</th>
            <td className='income bar' style={{ height: "259px" }}>
              <p>$43,145.52</p>
            </td>
            <td className='expense bar' style={{ height: "193px" }}>
              <p>$32,225.52</p>
            </td>
          </tr>
          <tr className='qtr' id='q4'>
            <th scope='row'>Q4</th>
            <td className='income bar' style={{ height: "110px" }}>
              <p>$18,415.96</p>
            </td>
            <td className='expense bar' style={{ height: "195px" }}>
              <p>$32,425.00</p>
            </td>
          </tr>
        </tbody>
      </table>

      <div id='ticks'>
        <div className='tick' style={{ height: "59px" }}>
          <p>$50,000</p>
        </div>
        <div className='tick' style={{ height: "59px" }}>
          <p>$40,000</p>
        </div>
        <div className='tick' style={{ height: "59px" }}>
          <p>$30,000</p>
        </div>
        <div className='tick' style={{ height: "59px" }}>
          <p>$20,000</p>
        </div>
        <div className='tick' style={{ height: "59px" }}>
          <p>$10,000</p>
        </div>
      </div>
    </div>
  );
};

export default ReportView;
