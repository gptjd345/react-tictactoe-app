import React from 'react'
import "./ExpenseForm.css";
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({handleCharge, charge, amount, handleAmount, handleSubmit, edit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-center' >
                <div className='form-group'>
                    <label htmlFor='charge'>지출 항목</label>
                    <input type='text' className='form-control' id="charge" 
                        name='charge' placeholder='ex) rent fee'
                        value={charge}
                        onChange={handleCharge}
                        />   
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>total</label>
                    <input type='number' className='form-control' id="amount" 
                        name='amount' placeholder='ex) 100' value={amount}
                        onChange={handleAmount}/>   

                </div>
                

            </div>
            <button type='submit' className='btn' >
                {edit ? "modify" : "submit" }
                <MdSend className='btn-icon'/>
            </button>

       </form>
    )
}


export default ExpenseForm