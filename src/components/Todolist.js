import React from 'react'

function Todolist({info}) {
  console.log("The list is :",info)
  return (
    <div>
    <p className='display-3 bg-white'style={{fontStyle:'oblique',color:'black'}}>List of Tasks</p>
      <div className='container text-center mx-auto bg-secondary'>
      {
        info.map((x,index)=><h3 key={index}>{x}</h3>)
      }
      </div>
    </div>
  )
}

export default Todolist