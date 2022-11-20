import ExpensesList from "./components/expenses/ExpensesList";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  return (
    <div>
      <NewExpense />
      <ExpensesList />
    </div>
  );
};

export default App;
