import React from "react";
import { Link } from "react-router-dom";
import "./Page.scss";

const Page = props => {
  return (
    <div className='page'>
      <Link to='/' style={{ textDecoration: "none", color: "black" }}>
        <h1>Budgeting App</h1>
      </Link>

      <div className='page-contents'>{props.children}</div>
    </div>
  );
};

export default Page;
