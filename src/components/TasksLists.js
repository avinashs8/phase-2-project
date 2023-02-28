import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function TasksLists({ incompleteTask }) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        
      
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={incompleteTask.activity}/><button>X</button>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )}

  export default TasksLists