
import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
 const  Expenses= (props)=>{
  useState();
  const [filterYear,setFilterYear]=useState('2022')
  const filterChangeHandler = selectYear =>{
    setFilterYear(selectYear);
  }
    return (
      
     <div>
      
     
        <Card className='expenses' >
        <ExpensesFilter selected ={filterYear} onChangeHandler={filterChangeHandler}/>
    {
      
        props.items.map(expense =>(
          <ExpenseItem 
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
        
        >
           </ExpenseItem>
        ))
        
      }
      
      
    </Card>
    </div>
    )
 }

 export default Expenses;