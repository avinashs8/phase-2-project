import CompleteTasksLists from "./CompleteTaskList"
import React, { useState } from "react"

function CompletedTasks({ oldTasks }){
    const [search, setSearch] = useState('')
    
    function handleSearch (e){
        setSearch(e.target.value)
    }

    const filteredTasks = oldTasks.filter(oldTask => {
        return(
            oldTask.activity.toLowerCase().includes(search.toLowerCase())
        )
    })


    const completedTasks = filteredTasks.map(oldTask => {
        return(
           <CompleteTasksLists key={oldTask.id} oldTask={oldTask}/> 
        )
    })
    return(
        <div className="header">
            <input value={search} onChange={handleSearch}></input>
            <h1>Completed Tasks:</h1>
            <ul>{completedTasks}</ul>
            
        </div>
    )
}

export default CompletedTasks