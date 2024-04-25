import React from 'react'

function SortTasks({ title, AllToDo, toDos, parentState }) {

    // Remove Icon Action
    function removeTask(e) {
        e.preventDefault()
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

    // Checkbox Change Action
    function handleCheckboxChange(obj, checked) {
        const handleCheckboxChange = AllToDo.map((item) => {
            obj.id == item.id ? { ...item, check: checked } : item
        })
        parentState(handleCheckboxChange)
    }

    // XML Starts here
    return (
        <div className="task__wrapper">

            <p className="typeHeading">{title}</p>
            {toDos.map((obj) => {
                return (
                    <div className="todo">

                        <input value={obj.checked}
                            onChange={(e) => handleCheckboxChange(obj, e.target.checked)}
                            type="checkbox" />

                        {obj.check ? <p><s>{obj.task}</s></p> : <p>{obj.task}</p>}

                        <div className="icon" onClick={removeTask}>
                            <i className="fas fa-times"></i>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default SortTasks
