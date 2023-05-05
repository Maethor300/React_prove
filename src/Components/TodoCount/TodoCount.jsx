import React from 'react'
import "./TodoCount.css"
function TodoCount({total, completed}) {
  return (
     <h1 className='TodoCounter'>Completado <span>{completed}</span> de <span>{total}</span> todos</h1> 
  )
}

export default TodoCount