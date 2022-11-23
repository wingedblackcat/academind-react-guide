import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

/**
 * @param {object} props
 * @param {Function} props.onAddExpense
 */
const NewExpense = ({ onAddExpense }) => {

  /**
   * @param {object} enteredExpenseData 
   */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      amount: Number(enteredExpenseData.amount),
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
