import React from 'react'
import './ExpenseList.css' 
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = (initialExpenses , handleDelete) => {
    console.log(initialExpenses); 
    return (
      <>
        {/* if you don't have to use div tag, you can choose
            React.Fragment or abrebiate */}
        <ul className='list'>
            {/* Expense Item */}
            {initialExpenses.map(expense => {
                return (
                    <ExpenseItem expense={expense}
                        key={expense.id}
                        handleDelete={handleDelete}
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

export default ExpenseList