import React, { Component } from 'react'
import './ExpenseList.css' 
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

export class ExpenseList extends Component { 
  render() {
    console.log(this.props.initialExpenses); 
    return (
      <>
        {/* if you don't have to use div tag, you can choose
            React.Fragment or abrebiate */}
        <ul className='list'>
            {/* Expense Item */}
            {this.props.initialExpenses.map(expense => {
                return (
                    <ExpenseItem expense={expense}
                        key={expense.id}
                        handleDelete={this.props.handleDelete}
                    />
                )
            })}
            
        </ul>
        <button className='btn'>
            remove list
            <MdDelete className='btn-icon'/>
        </button>
      </>
    )
  }
}

export default ExpenseList