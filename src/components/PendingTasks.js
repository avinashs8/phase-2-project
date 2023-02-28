import TasksLists from "./TasksLists"

function PendingTasks({ incompleteTasks }){
    const pendingTasks = incompleteTasks.map(incompleteTask => {
        return(
           <TasksLists key={incompleteTask.id} incompleteTask={incompleteTask}/> 
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