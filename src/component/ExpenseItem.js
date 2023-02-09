import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem =(props)  =>{
  const clickHandler =()=>{
    console.log('Cliked!!!');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetail title={props.title} amount={props.amount} />
      <button onClick={clickHandler}>Change Title</button>
      <button >Delete</button>
    </Card>
  );
}
export default ExpenseItem;
