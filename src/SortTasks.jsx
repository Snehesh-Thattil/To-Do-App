import React from 'react'

function SortTasks({ title, toDos, AllToDo, setAllToDo }) {
    // Remove Task Action
    function removeTask(e, obj) {
        e.preventDefault()

        const fadeInstalledList = AllToDo.map((item) => {
            return obj.id === item.id ? { ...item, fadeOut: true } : item
        })
        setAllToDo(fadeInstalledList)

        setTimeout(() => {
            const removedList = AllToDo.filter((item) => obj.id !== item.id)
            setAllToDo(removedList)
            localStorage.setItem("Tasks", JSON.stringify(removedList))
        }, 400)
    }

    // Checkbox Change Action
    function handleCheckboxChange(obj, checked) {
        const handleCheckboxChange = AllToDo.map((item) => obj.id === item.id ? { ...item, check: checked } : item)
        setAllToDo(handleCheckboxChange)
        localStorage.setItem("Tasks", JSON.stringify(handleCheckboxChange))
    }

    // Rendering
    return (
        <div className={title}>
            <div className="task__wrapper">

                <p className="typeHeading">{title}</p>

                {toDos.map((obj, index) => {
                    return (
                        <div key={index} className={`todo ${obj.fadeOut ? 'fade' : ''}`} >

                            <input checked={obj.check}
                                onChange={(e) => handleCheckboxChange(obj, e.target.checked)}
                                type="checkbox" />

                            {obj.check ? <p><s>{obj.task}</s></p> : <p>{obj.task}</p>}

                            <div className="icon">
                                <i className="fas fa-times" onClick={(e) => removeTask(e, obj)}></i>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SortTasks