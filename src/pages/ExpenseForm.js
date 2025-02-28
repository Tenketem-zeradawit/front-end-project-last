import React, { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"; // Import icons
import { handleError } from '../utils';

function ExpenseForm({ addTransaction }) {
    const [expenseInfo, setExpenseInfo] = useState({
        amount: '',
        text: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpenseInfo((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const addIncome = (e) => {
        e.preventDefault();
        const { amount, text } = expenseInfo;
        if (!amount || !text) {
            handleError('Please add Income Details');
            return;
        }
        addTransaction({ amount: Math.abs(Number(amount)), text }); 
        setExpenseInfo({ amount: '', text: '' });
    };

    const addExpense = (e) => {
        e.preventDefault();
        const { amount, text } = expenseInfo;
        if (!amount || !text) {
            handleError('Please add Expense Details');
            return;
        }
        addTransaction({ amount: -Math.abs(Number(amount)), text });
        setExpenseInfo({ amount: '', text: '' });
    };

    return (
        <div className='container1'>
            <h1>Expense Tracker</h1>
            <form>
                <div>
                    <label htmlFor='text'>Expense Detail</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='text'
                        placeholder='Enter your Expense Name'
                        value={expenseInfo.text}
                    />
                </div>
                <div>
                    <label htmlFor='amount'>Amount</label>
                    <input
                        onChange={handleChange}
                        type='number'
                        name='amount'
                        placeholder='Enter your Amount'
                        value={expenseInfo.amount}
                    />
                </div>
             
                <button onClick={addIncome} className="income-btn">
                    <FaPlusCircle style={{ marginRight: '5px' }} />
                    Add Income
                </button>
              
                <button onClick={addExpense} className="expense-btn">
                    <FaMinusCircle style={{ marginRight: '5px' }} />
                    Add Expense
                </button>
               
            </form>
        </div>
    );
}

export default ExpenseForm;
