
import ExpenseItem from './component/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      expenditure:'Delhi'
    },
    { id: 'e2', title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12), 
    expenditure:'Hyderabad'
  },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      expenditure:'Kolkata'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      expenditure:'Delhi'
    },
  ];

  return (
    <div >
      <h2> Let's get stateted</h2>
      <p>This is also visible</p>
      
      {
        expenses.map(expense =>(
          <ExpenseItem 
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
        expenditure={expense.expenditure}
        >
           </ExpenseItem>
        ))
        
      }
      
      
    </div>
  );
}

export default App;
