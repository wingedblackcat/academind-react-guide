import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

/**
 * @param {{ title: string, amount: string, date: Date }} props
 */
const ExpenseItem = ({ title, amount, date }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);

  const titleChangeClickHandler = (e) => {
    setExpenseTitle(() => "Hot Damn");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={titleChangeClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
