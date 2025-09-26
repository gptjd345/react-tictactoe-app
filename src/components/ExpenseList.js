import React from 'react'
import './ExpenseList.css' 
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({handleDelete, handleEdit, expenses, clearItems}) => {
    console.log(expenses); 
    return (
      <>
        {/* if you don't have to use div tag, you can choose
            React.Fragment or abrebiate */}
        <ul className='list'>
            {/* Expense Item */}
            {
              expenses.map(expense => {
                return (
                    <ExpenseItem expense={expense}
                        key={expense.id}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                )
            })}
            
        </ul>
        {
          expenses.length > 0 && (
          <button className='btn' onClick={clearItems}>
              remove list
              <MdDelete className='btn-icon'/>
          </button>
        )}
      </>
    )
  
}

export default ExpenseList