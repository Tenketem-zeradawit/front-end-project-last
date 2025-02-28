import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import { useNavigate, useLocation } from "react-router-dom";

const GraphPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { incomeAmt = 0, expenseAmt = 0 } = location.state || {}; 

    const data = [
        { name: "Income", amount: incomeAmt, color: "white" }, 
        { name: "Expense", amount: expenseAmt, color: "red" } 
    ];

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2 style={{ marginBottom: "20px" }}>Income vs. Expense</h2>

           
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center",  backgroundColor:"whitesmoke" ,width: "50vw"}}>
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart data={data} barSize={80} margin={{ top: 20, right: 0, left: 0, bottom: 50 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" label={{ value: "Income & Expense", position: "bottom", dy: 20 }} />
                        <YAxis label={{ value: "Amount ($)", angle: -90, position: "insideLeft" }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="amount" fill={(entry) => entry.color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

          
            <button 
                onClick={() => navigate("/home")} 
                style={{
                    padding: "12px 24px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px",
                    fontSize: "16px",
                    marginTop: "20px",
                }}
            >
                Back to Home
            </button>
        </div>
    );
};

export default GraphPage;
