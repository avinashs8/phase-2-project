import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';



function IncompleteTasksLists({ incompleteTask, setOldTasks, oldTasks, handleDeleteTask }) {

  function handleDelete(){
    const id = incompleteTask.id
    console.log(id)
    fetch(`http://localhost:3000/incomplete/${id}`, {
      method:'DELETE',
    })
    .then(resp => resp.json())
    .then(data => {
    const newCompleteTask = {
      activity: incompleteTask.activity,
      time: incompleteTask.time
    }
    setOldTasks([...oldTasks, newCompleteTask])
    fetch('http://localhost:3000/completed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCompleteTask)
    })
    .then(resp => resp.json())
    .then(() => {
      handleDeleteTask(id)
    })
    })
    }
  

  return (
    
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}>
      <nav aria-label="main mailbox folders">
        
      
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={incompleteTask.activity}/>
              <ListItemText primary={`Time: ${incompleteTask.time} minutes`}/>
              <button onClick={handleDelete}>X</button>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    
  )}

  export default IncompleteTasksLists