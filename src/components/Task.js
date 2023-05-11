import React from 'react'

const Task = ({task,style,onDelete,onToggle}) => {
  return (
    <div className='card' style={style}
     onDoubleClick={()=>onToggle(task.id)}
    >

      <div style={{display:'flex',justifyContent:'space-between',marginTop:'1px',alignItems:'center'}}>
      <h4 style={{paddingTop:'10px'}}>{task.activity}</h4>
      <button className='cancel' onClick={()=>onDelete(task.id)}>X</button>
      </div>
      <p>{task.date}</p>
    </div>
  )
}

export default Task
