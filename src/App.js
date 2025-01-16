import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import SortTasks from './SortTasks';
import QuotesGenerate from './QuotesGenerate';

function App() {
  const [AllToDo, setAllToDo] = useState([])
  const inputRef = useRef(null)
  const prrtyRef = useRef(null)

  // For setting and updating correct weekday
  let day = new Date().getDay()
  let AllDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let Today = AllDays[day]

  // Fetching from localStorage on loading
  useEffect(() => {
    const tasksFetch = JSON.parse(localStorage.getItem("Tasks"))
    if (tasksFetch) {
      setAllToDo(tasksFetch)
    }
  }, [setAllToDo])

  // Submition on pressing Enter key
  const HandleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitTask()
    }
  }

  // Submiting the task in the input
  function submitTask() {

    let toDo = inputRef.current.value
    let priority = prrtyRef.current.value

    if (toDo.trim().length < 1) {
      alert('Enter a Valid Task Name')
    }
    else if (priority < '1') {
      alert('Choose a Valid Task Priority')
    }
    else {
      let newToDo = {
        id: Date.now(),
        task: toDo,
        priority: priority,
        check: false
      }

      let updatedTasks = [...AllToDo, newToDo]

      setAllToDo(updatedTasks)
      localStorage.setItem("Tasks", JSON.stringify(updatedTasks))

      inputRef.current.value = ''
      inputRef.current.focus()
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

        <input className='inputBar'
          type="text"
          placeholder="Add item..."
          ref={inputRef}
          onKeyDown={HandleKeyDown} />

        <select name="Priority" ref={prrtyRef} onKeyDown={HandleKeyDown}>
          <option value="0" defaultValue hidden>Priority</option>
          <option value="1">Concentrate</option>
          <option value="2">Delegate</option>
          <option value="3">Schedule</option>
          <option value="4">Ignorable</option>
        </select>

        <button className='submitBtn' onClick={submitTask} onKeyDown={HandleKeyDown}>
          <i className="fas fa-plus"></i>
        </button>
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