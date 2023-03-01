import IncompleteTasksLists from "./IncompleteTasksLists"

function PendingTasks({ incompleteTasks, setOldTasks, oldTasks, setIncompleteTasks }){

    function handleDeleteTask(id){
        const updatedTasks = incompleteTasks.filter(task => task.id !== id)
        setIncompleteTasks(updatedTasks)
    }

    const pendingTasks = incompleteTasks.map(incompleteTask => {
        return(
           <IncompleteTasksLists key={incompleteTask.id} incompleteTask={incompleteTask} setOldTasks={setOldTasks} oldTasks={oldTasks} handleDeleteTask={handleDeleteTask}/> 
        )
    })

    return(
        <div className="header">
            <h1>Pending Tasks:</h1>
            <ul>{pendingTasks}</ul>
        </div>
    )
}

export default PendingTasks