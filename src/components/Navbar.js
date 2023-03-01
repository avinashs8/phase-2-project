
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

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
        <Button>Home</Button>
        <Button>Create New Task</Button>
        <Button>Pending Tasks</Button>
        <Button>Completed Tasks</Button>
      </ButtonGroup>
    </Box>
  );
}