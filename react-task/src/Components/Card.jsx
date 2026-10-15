import { useState } from "react"


function Card() {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTaskToTheList = () => {

        setTodoList([...todoList, newTask])
       
        setNewTask('')
    }
   
   
  return (
    <div
    style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:'20px',
        border:'2px solid black',
        borderRadius:'5px'
    }}
    
    >
      <h1>Todo list</h1>
        <div
            style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                gap:'5px'
            }}

        >
            <input type="text" placeholder='Your task' 
                onChange={(e) => setNewTask(e.target.value)} 
                value={newTask}
            />
            <button
                onClick={addTaskToTheList}
                style={{
                  backgroundColor:"green",
                  color:"white"
                }}
            >Add</button>
        </div>
        <ul
            style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                gap:'4px'
            }}
        >

            {
                todoList.map((task) => (
                    <li
                        style={{
                            display:'flex',
                            padding:'3px',
                            border:'1px solid black',
                            borderRadius:'3px',
                            width:'100%'
                        }}
                        >{task}</li>

                ))
            }
           
        </ul>
        
    </div>
  )
}

export default Card