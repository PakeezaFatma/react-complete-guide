import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  
  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };
  const filteredExpenses =props.items.filter(expense =>{
    return expense.date.getFullYear().toString()===filterYear;
  })
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        
        {filteredExpenses.length === 0 ? (<p>No expenses found.</p>
        ):(
        filteredExpenses.map((expense) => (
          <ExpenseItem
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
        )}
       
      </Card>
    </div>
  );
};

export default Expenses;
