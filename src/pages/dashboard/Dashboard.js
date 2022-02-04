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
        <div className='moneydiv'>
          <MoneyView money={props.income} label='Income' />
          <MoneyView money={props.expense} label='Expense' />
        </div>
        <Button
          onClick={() => props.setPopup(true, views.Popup.CREATE_TRANSACTION)}>
          Create Transaction
        </Button>
      </div>
    </Page>
  );
};

export default Dashboard;
