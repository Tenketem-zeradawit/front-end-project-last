import React from "react";
import { useNavigate } from "react-router-dom";

function ExpenseDetails({ incomeAmt, expenseAmt }) {
    const navigate = useNavigate();

    return (
        <div className="summary-container">
           
            <div className="totals-container">
                <div className="box">
                    <h3>Total Income</h3>
                    <span className="income-amount">${incomeAmt}</span>
                </div>
                <div className="box">
                    <h3>Total Expense</h3>
                    <span className="expense-amount">${expenseAmt}</span>
                </div>
                <div className="box balance-box">
                    <h3>Total Balance</h3>
                    <span className="balance-amount">${incomeAmt - expenseAmt}</span>
                </div>
            </div>

            <button 
                onClick={() => navigate("/graph", { state: { incomeAmt, expenseAmt } })} 
                className="graph-button"
            >
                Show Graph
            </button>
        </div>
    );
}

export default ExpenseDetails;
