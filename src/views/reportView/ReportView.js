import "./ReportView.scss";
import User from "../../models/User";
import React, { useEffect, useState } from "react";
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
    console.log(transactions);

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
  }, []);

  return (
    <div className='report-view'>
      <p>
        Showing transactions for the dates of{" "}
        <strong>{dateRange[0].toLocaleString("en-US")}</strong> through{" "}
        <strong>{dateRange[1].toLocaleString("en-US")}</strong>
      </p>

      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='category' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='income' fill='#3b9648' />
          <Bar dataKey='expense' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportView;
