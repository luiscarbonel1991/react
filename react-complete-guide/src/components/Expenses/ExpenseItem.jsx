
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const {amount, date} = props
    const [title, setTitle] = useState(props.title)

    const updatedTitle = () => setTitle('Hiiii')
    return (
       <li>
         <Card className="expense-item">
           <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={updatedTitle}>Change Title</button>
        </Card>
       </li>
    )
}

export default ExpenseItem;