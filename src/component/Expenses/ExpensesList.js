import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
const ExpensesList = props =>{

// {props.items.length === 0 && <p>No expenses Found.</p>}
//         {props.items.length === 1 && <p>Only single Expense here. Please add more..."</p>}
//         {props.items.length > 0 &&(
           
//         )}
if(props.items.length ===0)
{
    return <h2 className="expenses-list__fallback ">Found no expenses.</h2>
}
// else if(props.items.length ===1)
// {
//     return <h2 className="expenses-list__fallback ">Found no expenses.12</h2>
// }
        return <ul className="expenses-list">
            {
                 props.items.map((expense) => (
                    <ExpenseItem
                    key={expense.id}
                      title={expense.title}
                      amount={expense.amount}
                      date={expense.date}
                    />
                  ))
            }
        </ul>
}
export default ExpensesList;