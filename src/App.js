import ExpensesList from "./components/expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  /**
   * @param {object} expense 
   */
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesList />
    </div>
  );
};

export default App;
