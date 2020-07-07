import React, { useState } from "react";
import Department from "./Department";
import Role from "./Role";
import Employee from "./Employee";

const Add = (props) => {
  

  const [current, setCurrent] = useState();

  const onClickBtn = (event) => {
    setCurrent(event);
  };



  return (
    <>
      <div className="wrapper">
        <button
          className="add"
          onClick={() => {
            onClickBtn(<Department setCurrent={setCurrent} />);
          }}
        >
          Add New Department
        </button>

        <button
          className="add"
          onClick={() => {
            onClickBtn(<Role setCurrent={setCurrent} />);
          }}
        >
          Add New Title
        </button>

        <button
          className="add"
          onClick={() => {
            onClickBtn(<Employee setCurrent={setCurrent} />);
          }}
        >
          Add New Employee
        </button>
      </div>

      {current}
    </>
  );
};

export default Add;
