import "./ExpenseForm.css";
import React, { useState } from "react";


const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //     eneteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    // setUserInput((prevState)=>{
    //     return{...prevState, eneteredTitle: event.target.value};
    // })
    // setUserInput ({
    //     ...userInput,
    //     eneteredTitle: event.target.value,
    // })
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput((prevState)=>{
    //     return{...prevState, eneteredAmount: event.target.value};
    // })
    // setUserInput ({
    //     ...userInput,
    //     eneteredAmount: event.target.value,
    // })
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // setUserInput((prevState)=>{
    //     return{...prevState, eneteredDate: event.target.value};
    // })
    // setUserInput ({
    //     ...userInput,
    //     eneteredDate: event.target.value,
    // })
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
