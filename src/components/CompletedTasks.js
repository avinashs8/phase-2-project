import CompleteTasksLists from "./CompleteTaskList"

function CompletedTasks({ oldTasks }){

    const completedTasks = oldTasks.map(oldTask => {
        return(
           <CompleteTasksLists key={oldTask.id} oldTask={oldTask}/> 
        )
    })
    return(
        <div className="header">
            <h1>Completed Tasks:</h1>
            <ul>{completedTasks}</ul>
        </div>
    )
}

export default CompletedTasks