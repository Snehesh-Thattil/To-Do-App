import React, { useState } from 'react';
import './App.css';
import SortTasks from './SortTasks';
import QuotesGenerate from './QuotesGenerate';

function App() {
  const [AllToDo, setAllToDo] = useState([])
  const [toDo, setToDo] = useState('')
  const [prrty, setPrrty] = useState('')

  let day = new Date().getDay()
  let AllDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let Today = AllDays[day]

  function submitTask(e) {
    e.preventDefault()
    let inputBar = document.querySelector('.inputBar')

    if (prrty < '1') {
      alert('Choose a Valid Task Priority')
    }
    else if (toDo.length < 3) {
      alert('Enter a Valid Task Name')
    }
    else {
      let newTask = { id: Date.now(), task: toDo, priority: prrty, check: false }
      let updatedTasks = [...AllToDo, newTask]
      setAllToDo(updatedTasks)
      localStorage.setItem("Tasks", JSON.stringify(updatedTasks))

      inputBar.focus()
      setToDo("")
    }
  }

  // Rendering
  return (
    <div className="app">

      <div className="header">
        <h1>ToDo List</h1>
        <h2>Voilà, it's {Today} 🌝 ☕</h2>
      </div>

      <div className="inputDiv">
        <i className='fas fa-pen'></i>
        <input className='inputBar' value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="Add item..." />
        <select name="Priority" onChange={(e) => setPrrty(e.target.value)}>
          <option value="0" defaultValue hidden>Priority</option>
          <option value="1">Concentrate</option>
          <option value="2">Delegate</option>
          <option value="3">Schedule</option>
          <option value="4">Ignorable</option>
        </select>
        <i className="fas fa-plus" onClick={submitTask}></i>
      </div>

      <div className="todos">
        <SortTasks title={"Concentrate"} AllToDo={AllToDo} toDos={AllToDo.filter((item) => item.priority === '1')} setAllToDo={setAllToDo} />
        <SortTasks title={"Delegate"} AllToDo={AllToDo} toDos={AllToDo.filter((item) => item.priority === '2')} setAllToDo={setAllToDo} />
        <SortTasks title={"Schedule"} AllToDo={AllToDo} toDos={AllToDo.filter((item) => item.priority === '3')} setAllToDo={setAllToDo} />
        <SortTasks title={"Ignorable"} AllToDo={AllToDo} toDos={AllToDo.filter((item) => item.priority === '4')} setAllToDo={setAllToDo} />
      </div>

      <div className="quote">
        <QuotesGenerate />
      </div>

    </div>
  )
}

export default App;