
function PendingTasks({ incompleteTasks }){
    const pendingTasks = incompleteTasks.map(incompleteTask => {
        return(
           <li key={incompleteTask.id}>{incompleteTask.activity}</li> 
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