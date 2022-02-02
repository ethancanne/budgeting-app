import "./MoneyView.scss";
import React from "react";
import Button from "../../core/button/Button";

const MoneyView = props => {
  return (
    <div className='moneyView'>
      <h2>{props.label}</h2>
      <h1>${props.money}</h1>
    </div>
  );
};

export default MoneyView;
