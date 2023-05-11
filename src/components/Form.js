import React, { useState } from 'react'

const Form = ({setShow,onAddTask}) => {
  const [activity,setActivity]=useState('')
  const [date,setDate]=useState('')
  const [reminder,setReminder]=useState(false)
  const handleSubmit=(e)=>{
      e.preventDefault()
      onAddTask({activity,date,reminder})
      //setShow(false)
      setActivity('')
      setDate('')
      setReminder(false)
    }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='task-field'>Task</label>
      <input 
      type='text'
      id='task-field' 
      value={activity}
      onChange={(e)=>setActivity(e.target.value)}
      required/>
      <label htmlFor='date-field'>Day & Time</label>
      <input  
      type='datetime-local'
      id='date-field' 
      value={date} 
      onChange={(e)=>setDate(e.target.value)}
      required/>
      <div style={{display:'flex',gap:'10rem',alignItems:'center'}}>
      <label htmlFor='reminder'>Set Reminder</label>
      <input type='checkbox' 
      id='reminder' 
      checked={reminder} 
      style={{width:'70px',height:'25px'}}
      onChange={(e)=>setReminder(e.target.checked)}
      />
      </div>
      
      <button type='submit'style={{width:'585px',height:'50px',marginBottom:'20px',marginLeft:'94px',marginRight:'89px'}}>
        Save Task
      </button>
      
    </form>
  )
}

export default Form
