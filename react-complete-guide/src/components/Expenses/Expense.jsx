import "./Expense.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [filterYear, setFilterYear] = useState(new Date().getFullYear());
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((data) => `${data.date.getFullYear()}` === filterYear)
  


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/> 
        <ExpenseList items={filteredExpenses}/> 
      </Card>
    </div>
  );
}

export default Expense;
