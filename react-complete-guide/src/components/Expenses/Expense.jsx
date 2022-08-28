

import "./Expense.css";
import Card from "../UI/Card";
import ExpenseItem from './ExpenseItem'

function Expense(props) {
  return (
    <Card className="expenses">
      {props.items.map((data) => (
        <div key={data.id}>
          <ExpenseItem
            title={data.title}
            amount={data.amount}
            date={data.date}
          />
        </div>
      ))}
    </Card>
  );
}

export default Expense;
