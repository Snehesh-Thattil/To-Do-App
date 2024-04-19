import React from 'react';
import './App.css';

function App() {
  let day = new Date().getDay()
  let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let weekDay = weekDays[day]

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <h2>Whoop, it's {weekDay} 🌝 ☕ </h2>

      <div className="inputDiv">
        <i className='fas fa-pen'></i>
        <input type="text" placeholder="Add item..." />
        <i className="fas fa-plus"></i>
      </div>

      <div className="todos">
        <input type="checkbox" name="" id="" />
        <p>Rect tutorial</p>
        <i className="fas fa-times"></i>
      </div>
      
    </div>
  )
}

export default App;