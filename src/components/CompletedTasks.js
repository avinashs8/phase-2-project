function CompletedTasks({ oldTasks }){

    const completedTasks = oldTasks.map(oldTask => {
        return(
           <li key={oldTask.id}>{oldTask.activity}</li> 
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