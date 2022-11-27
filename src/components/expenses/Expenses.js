import { useState } from "react";

import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExensesList from "./ExpensesList";
import "./Expenses.css";

/**
 * @param {object} props
 * @param {Expense[]} props.expenses
 */
const Expenses = ({ expenses }) => {
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
      <ExpensesChart expenses={filteredExpensesByYear} />
      <ExensesList expenses={filteredExpensesByYear} />
    </Card>
  );
};

export default Expenses;

/**
 * @typedef {object} Expense
 * @property {string} id
 * @property {string} title
 * @property {string} amount
 * @property {string} date
 */
