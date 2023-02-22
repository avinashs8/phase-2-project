import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        <h4>Time (in minutes)</h4>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        
        >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <br></br>
        <Button variant="contained" type='submit'>Submit</Button>
        </Box>
    </div>
  );
}

export default NewTask;