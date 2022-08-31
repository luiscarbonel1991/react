import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const amountChangeHandler = (event) => setAmount(event.target.value);
  const dateChangeHandler = (event) => setDate(event.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    if (title == null || title === "") {
      return;
    }
    if (amount == null || amount === "") {
      return;
    }
    if (date == null || date === "") {
      return;
    }
    const formData = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(formData);
    cancelSubmit();
    setTitle("");
    setAmount("");
    setDate("");
  };

  const cancelSubmit = () => props.onEnableOrDisableSubmitHandler(false);

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={date}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button onClick={cancelSubmit} type="button">
              Cancel
            </button>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
