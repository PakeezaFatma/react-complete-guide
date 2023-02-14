import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm =(props) => {
    const [enteredTitle,setEnteredTitle] =useState('');
    const [enterAmount,setEnterAmount] =useState('');
    const [enterDate,setEnterDate] = useState('');
    //we can single usestate
//    const [userInput , setUserInput] = useState({
//         enterdTitle:'',
//         enterAmount:'',
//         enterDate:''
//     });
    const titleChangeHandler =(event) =>{
       setEnteredTitle(event.target.value);
    //    setUserInput({
    //     ...userInput, //beecause copy of rest value of object
    //     enterdTitle:event.target.value,
    //    })


    //this is safer way as compare to above that code
    // setUserInput((prevState) =>{
    //     return {...prevState,enterdTitle:event.target.value};
    // })
    };
    const amountChangeHandler =(event) =>{
        setEnterAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enterAmount:event.target.value,
        // })
    }
    const dateChangeHandler =(event) =>{
       setEnterDate(event.target.value);
    //    setUserInput({
    //     ...userInput,
    //     enterDate:event.target.value,
    //    })
    };

    const submitHandler =(event) =>{
    event.preventDefault();
    const exepnseData ={
        title: enteredTitle,
        amount: enterAmount,
        date: new Date(enterDate)
    };

    props.onSaveExepnseData(exepnseData);
    setEnteredTitle('');
    setEnterAmount('');
    setEnterDate('');
    };
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text'
                value ={enteredTitle}
                 onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" 
                step="0.01"
                value={enterAmount}
                 onChange={amountChangeHandler}/>
            </div> 
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01"
                 max="2023-12-31"
                 value={enterDate}
                  onChange={dateChangeHandler}/>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </div>
    </form>
    );
};

export default ExpenseForm;
