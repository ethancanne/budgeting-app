import "./Dashboard.scss";
import React, { useState } from "react";
import Button from "../../core/button/Button";
import Page from "../Page";
import views from "../../views/Views";
import MoneyView from "../../views/moneyView/MoneyView";

const Dashboard = props => {
  return (
    <Page>
      <div className='dashboard-page'>
        <MoneyView money={props.income} label='Income' />
        <MoneyView money={props.expense} label='Expense' />
        <Button
          onClick={() => props.setPopup(true, views.Popup.CREATE_TRANSACTION)}>
          Create Transaction
        </Button>
      </div>
    </Page>
  );
};

export default Dashboard;
