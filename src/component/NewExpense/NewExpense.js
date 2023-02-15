import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense =(props)=>{
    const [isEditing,setEditing]=useState(false)
    const saveExpenseDataHandler =(enteredExpenseData) =>{
        const exepnseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(exepnseData);
       setEditing(false);
    };
    const startEditingHandler =()=>{
        setEditing(true);

    }
    const stopEditingHandler =()=>{
        setEditing(false);
    }
    return (
    <div className="new-expense">
        {!isEditing &&<button onClick={startEditingHandler}>Add New Expenses</button>}
       {isEditing &&<ExpenseForm 
       onSaveExepnseData={saveExpenseDataHandler} 
        onCancel={stopEditingHandler}/>} 
    </div>
    );
};

export default NewExpense;