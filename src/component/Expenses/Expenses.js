import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
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
        <ExpensesList items={filteredExpenses} />
       
      </Card>
    </div>
  );
};

export default Expenses;
