import './ExpenseItem.css';
function ExpenseDetail(props){
    const title= props.amount();
    const amount=props.amount();
    return(
        <div className="expense-item">
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
                
        </div>
    )
   
}
export default ExpenseDetail;