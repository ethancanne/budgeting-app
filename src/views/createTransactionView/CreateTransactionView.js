import "./CreateTransactionView.scss";
import React, { useState } from "react";
import Button from "../../core/button/Button";

const CreateTransactionView = props => {
  const [amount, setAmount] = useState(0);

  const updateAmount = e => {
    setAmount(e.target.value);
  };

  //Save the transaction to local storage on form submit
  const handleCreateTransaction = e => {
    //Stop default form funcitonality
    e.preventDefault();
    e.stopPropagation();
    //Create transaction object with state properties
    //Store the transaction object in local storage
    //Close the popup
    props.setPopup(false);
  };
  return (
    <div className='create-transaction-view'>
      <form onSubmit={handleCreateTransaction}>
        <input type='text' value={amount} onChange={updateAmount} />
        <input type='text' value={amount} onChange={updateAmount} />

        <Button>Click</Button>
      </form>
    </div>
  );
};

export default CreateTransactionView;
