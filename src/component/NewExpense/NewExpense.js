import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense =(props)=>{
    const saveExpenseDataHandler =(enteredExpenseData) =>{
        const exepnseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(exepnseData);
    }
    return (
    <div className="new-expense">
       <ExpenseForm onSaveExepnseData={saveExpenseDataHandler} /> 
    </div>
    );
};

export default NewExpense;