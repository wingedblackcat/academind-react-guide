import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

/**
 * @param {object} props
 * @param {import("./Expenses").Expense[]} props.expenses
 * @returns
 */
const ExensesList = ({ expenses = [] }) => {
  const isExpensesEmpty = expenses.length === 0;

  return isExpensesEmpty ? (
    <h2 className="expenses-list__fallback">Found no expenses</h2>
  ) : (
    <ul className="expenses-list">
      {expenses.map(({ title, amount, date, id }) => (
        <ExpenseItem title={title} amount={amount} date={date} key={id} />
      ))}
    </ul>
  );
};

export default ExensesList;
