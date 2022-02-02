import React, {useState} from "react";
import Button from "../../core/button/Button";


const CreateTransactionView = () => {

  const [amount, setAmount] = useState(0)

  const updateAmount = (e)=>{
      setAmount(e.target.value)
  }


  return (
    <form onSubmit={}>
        <input type="text" value={amount} onChange={updateAmount}/>
        <Button>Click</Button>
    </form>
  );
};

export default CreateTransactionView;
