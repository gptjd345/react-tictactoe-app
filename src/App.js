import { useState } from "react";
import "./App.css"
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [id, setId]         = useState("");
  const [edit, setEdit]     = useState(false);
  const [alert, setAlert]   = useState({show: false});

  const [expenses, setExpenses] = useState([
        {id: 1, charge: "rent", amount:1600},
        {id: 2, charge: "transport", amount:300},
        {id: 3, charge: "meal", amount:900}
      ])
  
  const clearItems = () => {
    setExpenses([]);
  }    

  const handleCharge = (e) => {
    console.log(e.target.value);
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    console.log(e.target.valueAsNumber)
    console.log(typeof e.target.valueAsNumber)
    setAmount(e.target.valueAsNumber);
    
  }    

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id)
    console.log(newExpenses)
    /* update state */
    setExpenses(newExpenses)
    handleAlert({ type: 'sucess', text: 'The item is deleted sucessfully.'});

  }

  const handleAlert = ({type, text}) => {
    setAlert({ show:true, type, text});
    // after 7s remove
    setTimeout(() => {
      setAlert({show: false});
    },7000)
  }

  const handleEdit = (id) => {
    const expense = expenses.find(item => item.id ===id );
    const { charge, amount } = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0){
      if(edit) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge: charge, amount} : item
        })
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({type: 'success', text: "The item is modified."});
      } else {
        // contraction amount:amount -> amount
        const newExpense = {id: crypto.randomUUID(), charge: charge, amount};

        // To keep immutability
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        handleAlert({type: "sucess", text:"The item is created sucessfully. "})
      }
        setCharge("");
        setAmount(0);

      } else {
      console.log('error');
      handleAlert({
        type: "danger", 
        text:"Charge shouldn't be empty and amount has to bigger than 0 "})
    }

  }

    return(
      <main className="main-container">
        {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
        <h1>budget calculator</h1>
        {/* import component name's first letter has to start Uppercase */}
        <div style={{width:'100%', background:'white', padding:'1rem'}}>
          <ExpenseForm handleCharge={handleCharge}
                      charge={charge}
                      handleAmount={handleAmount}
                      amount={amount}
                      handleSubmit={handleSubmit}
                      edit={edit}
          />
        </div>
        <div style={{width:'100%', background:'white', padding:'1rem'}}>
          <ExpenseList 
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            clearItems={clearItems}
          />
        </div>

        <div style={{display:'flex', justifyContent:'end', marginTop:'1rem'}}>
          <p style={{fontSize:'2rem'}}>
            총지출:
            <span>
              {expenses.reduce((acc, curr) => {
                return (acc += curr.amount);
              }, 0)}
              RM
            </span>
          </p>
        </div>
      </main>
    )
  
}

export default App;