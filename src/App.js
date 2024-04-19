import React, { useState } from 'react';
import './App.css';

function App() {
  let day = new Date().getDay()
  let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let weekDay = weekDays[day]

  const [AllToDo, setAllToDo] = useState([])
  const [toDo, setToDo] = useState('')

  return (
    <div className="app">
      <div className="tasks">
        
        <h1>ToDo List</h1>
        <h2>Whoop, it's {weekDay} 🌝 ☕</h2>

        <div className="inputDiv">
          <i className='fas fa-pen'></i>
          <input className='one' value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="Add item..." />
          <i className="fas fa-plus" onClick={() => setAllToDo([...AllToDo, toDo])}></i>
        </div>

        {AllToDo.map((obj) => {
          return (
            <div className="todos">
              <input type="checkbox" />
              <p>{obj}</p>
              <i className="fas fa-times"></i>
            </div>
          )
        })}

      </div>

      <div className="finished">
        <h3>Finished Tasks</h3>
        <div className="items">
          <i class="fa-solid fa-circle-check"></i>
          <p>Item</p>
          <i className='fas fa-times'></i>
        </div>
      </div>

    </div>
  )
}

export default App;