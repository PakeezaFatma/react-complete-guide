import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "./Card";
import "./ExpenseItem.css";
const ExpenseItem =(props)  =>{
 const [title, setTitle] = useState(props.title);
 const [amount, setAmount] = useState(props.amount);

  const clickHandler =()=>{
    setTitle('updated');
    setAmount('100$');
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetail title={title} amount={amount} />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandler}>change Amount</button>
    </Card>
  );
}
export default ExpenseItem;
