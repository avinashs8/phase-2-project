import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';



function IncompleteTasksLists({ incompleteTask }) {

  function handleDelete(){
    
  }

  return (
    
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}>
      <nav aria-label="main mailbox folders">
        
      
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={incompleteTask.activity}/>
              <ListItemText primary={`Time: ${incompleteTask.time} minutes`}/>
              <button onClick={handleClick}>X</button>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    
  )}

  export default IncompleteTasksLists