import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function NewTask() {
  return (
    <div className='header'>
        <h4>Enter New Task</h4>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        
        >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
        <h4>Time</h4>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        
        >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
    </div>
  );
}

export default NewTask;