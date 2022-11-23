import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /**
   * @param {React.ChangeEvent} event
   */
  const titleChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredTitle(inputValue);
  };

  /**
   * @param {React.ChangeEvent} event
   */
  const amountChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredAmount(inputValue);
  };

  /**
   * @param {React.ChangeEvent} event
   */
  const dateChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredDate(inputValue);
  };

  /**
   * @param {React.FormEvent} event
   */
  const submitFormHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
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
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
