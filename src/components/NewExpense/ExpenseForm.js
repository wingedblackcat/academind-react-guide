import React, { useState } from "react";

import { formatDate } from "../../utils/date-format";
import "./ExpenseForm.css";

/**
 * @param {object} props
 * @param {Function} props.onSaveExpenseData
 * @param {Function} props.onCancel
 */
const ExpenseForm = ({ onCancel, onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(formatDate(new Date()));

  // ---------- Handlers ----------

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
      date: formatDate(new Date(enteredDate)),
    };

    onSaveExpenseData(expenseData);
    resetStates();
  };

  // ---------- Utils ----------

  const resetStates = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate(formatDate(new Date()));
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            placeholder="Expense Title"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amountChangeHandler}
            placeholder="Expense Amount"
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
        <button onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
