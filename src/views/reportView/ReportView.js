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

const ReportView = ({ dateRange }) => {
  const transactions = User.createFromObject(
    JSON.parse(localStorage.getItem("user"))
  ).transactions;

  const [data, setData] = useState([]);

  useEffect(() => {
    var theData = [];
    console.log(dateRange);

    transactions.forEach(transaction => {
      if (
        transaction.date >= dateRange[0] &&
        transaction.date <= dateRange[1]
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
  }, [dateRange]);

  var dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className='report-view'>
      <p>
        Showing transactions for the dates of{" "}
        <strong>{dateRange[0].toLocaleString("en-US", dateOptions)}</strong>{" "}
        through{" "}
        <strong>{dateRange[1].toLocaleString("en-US", dateOptions)}</strong>
      </p>

      <ResponsiveContainer height={"100%"} width={"100%"}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='category' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='income' fill='#3b9648' />
          <Bar dataKey='expense' fill='#bf2a43' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportView;
