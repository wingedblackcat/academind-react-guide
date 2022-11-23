import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesList.css";

/**
 * @param {object} props
 * @param {object[]} props.expenses
 */
const ExpensesList = ({ expenses }) => {
  const [expensesYear, setExpensesYear] = useState(new Date().getFullYear() - 1);

  /**
   * @param {number} selectedYear 
   */
  const yearChangeHandler = (selectedYear) => {
    setExpensesYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onYearSelect={yearChangeHandler} expensesYear={expensesYear} />
      {expenses.map(({ title, amount, date, id }) => (
        <ExpenseItem title={title} amount={amount} date={date} key={id} />
      ))}
    </Card>
  );
};

export default ExpensesList;
