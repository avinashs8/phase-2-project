import IncompleteTasksLists from "./IncompleteTasksLists"

function PendingTasks({ incompleteTasks, setOldTasks, oldTasks }){
    const pendingTasks = incompleteTasks.map(incompleteTask => {
        return(
           <IncompleteTasksLists key={incompleteTask.id} incompleteTask={incompleteTask} setOldTasks={setOldTasks} oldTasks={oldTasks}/> 
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