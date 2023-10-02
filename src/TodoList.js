import React, { useState } from 'react'
import './App.css';


function TodoList() {
    const [activity, setActvity]= useState("")
     return (
    <>
    <div className='container'>
        <div className='header'>Todo List</div>
        <input type ='text' className='box' placeholder='add activity' value={activity} onChange={(e)=>{
      setActvity(e.target.value)}}/>
      <button>Add</button>

   </div>
    </>
  )
}

export default TodoList