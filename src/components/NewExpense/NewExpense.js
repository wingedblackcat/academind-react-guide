import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

/**
 * @param {object} props
 * @param {Function} props.onAddExpense
 */
const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  /**
   * @param {{title: string, amount: string, date: string }} enteredExpenseData
   */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setIsEditing(false)
    onAddExpense(expenseData);
  };

  /**
   * @param {React.SyntheticEvent} event
   */
  const toggleEditingHandler = (event) => {
    event.preventDefault();
    setIsEditing((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onCancel={toggleEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={toggleEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
