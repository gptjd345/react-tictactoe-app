import { Component } from "react";
import "./App.css"
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {id: 1, charge: "rent", amount:1600},
        {id: 2, charge: "transport", amount:300},
        {id: 3, charge: "meal", amount:900}
      ]
    }
  }  

  handleDelete = (id) => {
    const newExpenses = this.state.expenses
                    .filter(expense => expense.id !== id)
    console.log(newExpenses)
    /* update state */
    this.setState({expenses: newExpenses})

  }

  render() {
    return(
      <main className="main-container">
        <h1>budget calculator</h1>
        {/* import component name's first letter has to start Uppercase */}
        <div style={{width:'100%', background:'white', padding:'1rem'}}>
          <ExpenseForm />
        </div>
        <div style={{width:'100%', background:'white', padding:'1rem'}}>
          <ExpenseList initialExpenses={this.state.expenses}
            handleDelete={this.handleDelete}
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
}

export default App;