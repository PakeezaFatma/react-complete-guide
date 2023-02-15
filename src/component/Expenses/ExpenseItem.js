import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "./Card";
import "./ExpenseItem.css";
const ExpenseItem =(props)  =>{


 
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetail title={props.title} amount={props.amount} /> 
      
    </Card>
    </li>
  );
}
export default ExpenseItem;
