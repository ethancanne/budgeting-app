import "./ReportView.scss";
import User from "../../models/User";
import React, { useEffect, useState } from "react";
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

const ReportView = () => {
  const transactions = User.createFromObject(
    JSON.parse(localStorage.getItem("user"))
  ).transactions;

  var maxValue = 0;
  const [data, setData] = useState([]);

  useEffect(() => {
    var theData = [];

    transactions.forEach(transaction => {
      if (transaction.amount > maxValue) {
        maxValue = transaction.amount;
      }

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

      console.log(theData);

      setData(theData);
    });
  }, []);

  return (
    <div className='report-view'>
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
    </div>
  );
};

export default ReportView;
