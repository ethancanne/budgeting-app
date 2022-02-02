import React from "react";
import "./Page.scss";

const Page = props => {
  return (
    <div className='page'>
      <h1>Budgeting App</h1>
      {props.children}
    </div>
  );
};

export default Page;
