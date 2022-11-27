import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesList.css";

/**
 * @param {object} props
 * @param {Expense[]} props.expenses
 */
const ExpensesList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  const filteredExpensesByYear = expenses.filter(({ date }) => {
    return new Date(date).getFullYear() === Number(filteredYear);
  });

  /**
   * @param {string} selectedYear
   */
  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearSelect={yearChangeHandler}
        filteredYear={filteredYear}
      />
      {filteredExpensesByYear.map(({ title, amount, date, id }) => (
        <ExpenseItem title={title} amount={amount} date={date} key={id} />
      ))}
    </Card>
  );
};

export default ExpensesList;

/**
 * @typedef {object} Expense
 * @property {string} id
 * @property {string} title
 * @property {string} amount
 * @property {string} date
 */
