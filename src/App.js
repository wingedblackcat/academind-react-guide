import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { formatDate } from "./utils/date-format";

const initExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: "94.12",
    date: formatDate(new Date(2020, 7, 14)),
  },
  {
    id: "e2",
    title: "New TV",
    amount: "799.49",
    date: formatDate(new Date(2021, 2, 12)),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: "294.67",
    date: formatDate(new Date(2021, 2, 28)),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: "450",
    date: formatDate(new Date(2021, 5, 12)),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initExpenses);

  /**
   * @param {{title: string, amount: string, date: string, id: string }} expense
   */
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
