
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" aria-label="outlined button group" size='large'>
        <NavLink
          to="/"
          exact
        >
          <Button>Home</Button>
        </NavLink>
        <NavLink to="/newtask">
          <Button>Create New Task</Button>
        </NavLink>
        <NavLink to="/pendingtasks">
          <Button>Pending Tasks</Button>
        </NavLink>
        <NavLink to="/completedtasks">
          <Button>Completed Tasks</Button>
        </NavLink>
      </ButtonGroup>
    </Box>
  );
}