import React from 'react'

function Todocount(props) {
  console.log("Length :",props.info.length)
  return (
    
    <div className='containter text-center '>
    <p className='display-3 bg-white'style={{fontStyle:'oblique',color:'black'}}>Todo Count</p>
      <h2 className='bg-secondary'>{props.info.length}</h2>
    </div>
  )
}

export default Todocount