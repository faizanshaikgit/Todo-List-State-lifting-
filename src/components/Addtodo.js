//import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Addtodo({formdataaa}) {

  const {register,handleSubmit,formState:{errors}}=useForm()
  return (
    <div className='row row-11 row-sm-10 row-md-7'>
    <form onSubmit={handleSubmit(formdataaa)}>
    <div className='mb-3'>
    <p className='display-3 bg-white' style={{fontStyle:'oblique',color:'black'}}>Add Todo</p>
    <label htmlFor="todo">Enter a task :</label>
    <input type="text"  id="todo" className='form-control bg-secondary' {...register("todo",{required:true})}/>
    {errors.todo?.type==='required' && <p className='text-danger'>Must enter a task</p>}
    </div>
    <button className='btn btn-success mb-5 mt-3 form-control' type='submit'>Add</button>
    </form>
    </div>
  )
}

export default Addtodo