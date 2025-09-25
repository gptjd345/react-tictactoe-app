import { useState } from "react";
import "./App.css"
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {

  const [expenses, setExpenses] = useState([
        {id: 1, charge: "rent", amount:1600},
        {id: 2, charge: "transport", amount:300},
        {id: 3, charge: "meal", amount:900}
      ])

  const handleDelete = (id) => {
    const newExpenses = expenses
                    .filter(expense => expense.id !== id)
    console.log(newExpenses)
    /* update state */
    setExpenses(newExpenses)

  }

    return(
      <main className="main-container">
        <h1>budget calculator</h1>
        {/* import component name's first letter has to start Uppercase */}
        <div style={{width:'100%', background:'white', padding:'1rem'}}>
          <ExpenseForm />
        </div>
        <div style={{width:'100%', background:'white', padding:'1rem'}}>
          <ExpenseList initialExpenses={expenses}
            handleDelete={handleDelete}
          />
        </div>

        <div style={{display:'flex', justifyContent:'end', marginTop:'1rem'}}>
          <p style={{fontSize:'2rem'}}>
            총지출:
            <span>원</span>
          </p>
        </div>
      </main>
    )
  
}

export default App;