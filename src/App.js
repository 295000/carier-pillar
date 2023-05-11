import './App.css';
import Head from './components/Head';
import Form from './components/Form';
import { useState } from 'react';
import Task from './components/Task';

function App() {
  const [tasks,setTasks] = useState([
    {id:1,activity:'Go to work',date:'feb 5th at 2:30pm',reminder:true},
    {id:2,activity:'Travel to my hometown',date:'feb 5th at 2:30pm',reminder:true},
    {id:3,activity:'Do the laundry',date:'feb 5th at 2:30pm',reminder:false}
  ])

  const [show,setShow] = useState(false)
  const handleShow = ()=>{
    setShow(prevState=>!prevState) //toggle Add Task and close btn
  }

  //Add Task
  const addTask=(task)=>{
    const id = Math.floor(Math.random()*1000)+1
    const newTask ={id,...task}
    setTasks([newTask,...tasks])
  } 
  //Delete Task
  const handleDelete=(id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
   }
   //Double click on card to setReminder
   const toggleReminder = (id)=>{
    setTasks(tasks.map((task)=>task.id==id ? {...task,reminder:!task.reminder}:task))
   }
  
  return (
    <div className="App">
      <Head/>
      
      <div>
          <nav>
             <div style={{display:'flex', gap:'1rem'}}>
               <p>Total Task :</p>
               <p style={{backgroundColor:'#3E36B0',width:'30px',height:'24px',color:'#ffffff',borderRadius:'4px',paddingTop:'3px'}}>
               {tasks.length}
               </p>
              </div>
      
              <button type='button' onClick={handleShow} style={{backgroundColor:show?'#FE928F':''}} >
               {show?'Close':'Add Task'}
              </button>
          </nav>
      </div>
      
      <div>
        {/*To hide form when useState is set to false*/}
       {
        show && <Form setShow={setShow} onAddTask={addTask}/>     
       } 
      </div>
      <div className='container'>
        {
         tasks.length > 0? tasks.map(task=>(<Task task={task} key={task.id} onToggle={toggleReminder} onDelete={handleDelete} style={{borderLeft:task.reminder ?'solid 4px #7954B4':'none',width:task.reminder?'536px':'540px'}}/>
         )):(<h2>No task to display</h2>)
        }
      </div>
      
    </div> 
  );
}

export default App;
