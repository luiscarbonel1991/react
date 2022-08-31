import { useState } from "react";
import AddExpense from "./AddExpense";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [preSubmit, setPreSubmit] = useState(false);
  const saveExpenseHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(data);
  };

  const enableOrDisablePreSubmit = (enable) => {
    setPreSubmit(enable);
  };

  return (
    <div className="new-expense">
      {!preSubmit && <AddExpense onEnableOrDisableSubmitHandler={enableOrDisablePreSubmit} />}
      {preSubmit && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onEnableOrDisableSubmitHandler={enableOrDisablePreSubmit}/>}
    </div>
  );
};

export default NewExpense;
