import "./Dashboard.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../core/button/Button";
import Page from "../Page";
import views from "../../views/Views";
import MoneyView from "../../views/moneyView/MoneyView";
import TransactionHistoryView from "../../views/transactionHistoryView/TransactionHistoryView";

const Dashboard = props => {
  return (
    <Page>
      <div className='dashboard-page'>
        <div className='moneydiv'>
          <MoneyView money={props.income} label='Income' />
          <MoneyView money={props.expense} label='Expense' />
        </div>
        <div className='transactionhistorydiv'>
          <TransactionHistoryView />
        </div>
        <div className='buttons'>
          <Button
            onClick={() =>
              props.setPopup(true, views.Popup.CREATE_TRANSACTION)
            }>
            Create Transaction
          </Button>
          <Link to='/report'>
            <Button>Generate Report</Button>
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;
