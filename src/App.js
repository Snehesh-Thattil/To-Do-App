import React, { useState } from 'react';
import './App.css';

function App() {
  let day = new Date().getDay()
  let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let weekDay = weekDays[day]

  const [AllToDo, setAllToDo] = useState([])
  const [toDo, setToDo] = useState('')
  const [prrty, setPrrty] = useState('')

  function removeTask(e) {
    let task = e.target.parentElement
    if (task.classList[0] === 'todo') {
      task.classList.add('fade')
      task.addEventListener('transitionend', () => {
        task.remove()
      })
    } else {
      task.parentElement.classList.add('fade')
      task.parentElement.addEventListener('transitionend', () => {
        task.parentElement.remove()
      })
    }
  }

  // XML Starts Here //
  return (
    <div className="app">
      <div className="tasks">

        <h1>ToDo List</h1>
        <h2>Whoop, it's {weekDay} 🌝 ☕</h2>

        <div className="inputDiv">
          <i className='fas fa-pen'></i>
          <input className='one' value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="Add item..." />
          <select name="Priority" onChange={(e) => setPrrty(e.target.value)}>
            <option value="0" defaultValue hidden>Priority</option>
            <option value="1">Concentrate</option>
            <option value="2">Delegate</option>
            <option value="3">Schedule</option>
            <option value="4">Ignorable</option>
          </select>
          <i className="fas fa-plus" onClick={() => setAllToDo([...AllToDo, { id: Date.now(), task: toDo, priority: prrty, check: false }])}></i>
        </div>

        <div className="todos">

          {/* Concentrate Tasks */}
          <div className="concentrate">
            <p className="typeHeading">CONCENTRATE TASKS</p>
            {AllToDo.map((obj) => {
              if (obj.priority === '1') {
                return (
                  <div className="todo">

                    <input value={obj.checked} onChange={(e) => {
                      setAllToDo(AllToDo.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.check = e.target.checked
                        }
                        return obj2
                      }))
                    }} type="checkbox" />

                    {obj.check ? <p><s>{obj.task}</s></p> : <p>{obj.task}</p>}

                    <div className="icon" onClick={removeTask}>
                      <i className="fas fa-times"></i>
                    </div>

                  </div>
                )
              }
            })}
          </div>

          {/* Delegate Tasks */}
          <div className="delegate">
            <p className="typeHeading">DELEGATE TASKS</p>
            {AllToDo.map((obj) => {
              if (obj.priority === '2') {
                return (
                  <div className="todo">

                    <input value={obj.checked} onChange={(e) => {
                      setAllToDo(AllToDo.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.check = e.target.checked
                        }
                        return obj2
                      }))
                    }} type="checkbox" />

                    {obj.check ? <p><s>{obj.task}</s></p> : <p>{obj.task}</p>}

                    <div className="icon" onClick={removeTask}>
                      <i className="fas fa-times"></i>
                    </div>

                  </div>
                )
              }
            })}
          </div>

          {/* Schedule Tasks */}
          <div className="schedule">
            <p className="typeHeading">SCHEDULE TASKS</p>
            {AllToDo.map((obj) => {
              if (obj.priority === '3') {
                return (
                  <div className="todo">

                    <input value={obj.checked} onChange={(e) => {
                      setAllToDo(AllToDo.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.check = e.target.checked
                        }
                        return obj2
                      }))
                    }} type="checkbox" />

                    {obj.check ? <p><s>{obj.task}</s></p> : <p>{obj.task}</p>}

                    <div className="icon" onClick={removeTask}>
                      <i className="fas fa-times"></i>
                    </div>

                  </div>
                )
              }
            })}
          </div>

          {/* Ignorable Tasks */}
          <div className="ignorable">
            <p className="typeHeading">IGNORABLE TASKS</p>
            {AllToDo.map((obj) => {
              if (obj.priority === '4') {
                return (
                  <div className="todo">

                    <input value={obj.checked} onChange={(e) => {
                      setAllToDo(AllToDo.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.check = e.target.checked
                        }
                        return obj2
                      }))
                    }} type="checkbox" />

                    {obj.check ? <p><s>{obj.task}</s></p> : <p>{obj.task}</p>}

                    <div className="icon" onClick={removeTask}>
                      <i className="fas fa-times"></i>
                    </div>

                  </div>
                )
              }
            })}
          </div>

          {/* Unselected */}
          <div id="unselected" >
            {AllToDo.map((obj) => {
              if (obj.priority < '1') {
                alert('priority not selected')
                return null
              }
            })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;