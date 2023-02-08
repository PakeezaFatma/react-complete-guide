
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props)
{
    
    return (
        <Card className="expense-item">
            
          <ExpenseDate date={props.date}></ExpenseDate>
          <ExpenseDetail title ={props.title} amount ={props.amount}/>
         
        
           
           
        </Card>
    );
    
}
export default ExpenseItem;