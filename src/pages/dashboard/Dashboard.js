import "./Dashboard.scss";
import React, { useState } from "react";
import Page from "../Page";
import MoneyView from "../../views/moneyView/MoneyView";

const Dashboard = props => {
  return (
    <div>
      <MoneyView money={props.income} label='Income' />
      <MoneyView money={props.expense} label='Expense' />
    </div>
  );
};

export default Dashboard;
