import "./ReportView.scss";
import User from "../../models/User";
import React, { useEffect, useState } from "react";
import Button from "../../core/button/Button";
import Transaction from "../../models/Transaction";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ReportView = ({ monthRange, year }) => {
  const transactions = User.createFromObject(
    JSON.parse(localStorage.getItem("user"))
  ).transactions;

  var maxValue = 0;
  const [data, setData] = useState([]);

  useEffect(() => {
    var theData = [];
    console.log(transactions);

    transactions.forEach(transaction => {
      if (
        transaction.date.getFullYear() === year &&
        transaction.date.getMonth() >= monthRange[0] &&
        transaction.date.getMonth() <= monthRange[1]
      ) {
        var categoryIndex = theData.findIndex(
          category => category.category === transaction.category
        );

        if (categoryIndex === -1) {
          theData.push({
            category: transaction.category,
            income: 0,
            expense: 0,
          });
          categoryIndex = theData.length - 1;
        }

        theData[categoryIndex].income += transaction.isExpense
          ? 0
          : transaction.amount;
        theData[categoryIndex].expense += transaction.isExpense
          ? transaction.amount
          : 0;

        setData(theData);
      }
    });
  }, []);

  return (
    <div className='report-view'>
      <p>
        Showing transactions for the months of <strong>{monthRange[0]}</strong>{" "}
        through <strong>{monthRange[1]}</strong>
      </p>
      <p>
        In the year <strong>{year}</strong>
      </p>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='category' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='income' fill='#8884d8' />
          <Bar dataKey='expense' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
      <Button onClick={() => history.back()}>Back</Button>
    </div>
  );
};

export default ReportView;
