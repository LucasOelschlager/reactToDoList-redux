

import { useRef } from 'react'
import './App.css'
import { useState } from 'react'
import { setTaskDone, addTask, removeTask } from './store/taskSlice'
import { useSelector, useDispatch } from 'react-redux'
function App() {
  const [taskText, setTaskText] = useState('')
  const input = useRef();
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    dispatch(addTask({ id: Date.now(), task: taskText, completed: false }));
    setTaskText("");
    input.current.value = ''
  }


  return (
    <>
      <h1>To Do List React Redux</h1>
      <div className="card">
        <h4>Ingrese la tarea que desea añadir</h4>
        <input type="text" ref={input} onChange={() => setTaskText(input.current.value)} />
        <button onClick={() => handleAddTask()}>Añadir Tarea </button>
        <h4>Mi nueva tarea es: {taskText}</h4>
      </div>
      <div className='task-container'>
        <p>Mis tareas</p>
        <div></div>
        <ul className='taskList'>
          {tasks.map((task) => (
            <li key={task.id} className='taskItem'>
              <p>{task.task}</p>
              {!task.completed ? <span>La tarea no esta completada</span> : <span>La tarea se completo</span>}
              <button onClick={() =>
                dispatch(setTaskDone({ id: task.id, completed: true }))
              }>Tarea Completa</button>
              <button onClick={() => dispatch(removeTask({ id: task.id }))}>Eliminar tarea</button>
            </li>
          ))}

        </ul>

      </div>

    </>
  )
}

export default App
