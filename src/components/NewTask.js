
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewTask() {

    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
    }

  return (
    <div className='header'>
        <form onSubmit={handleSubmit}>
          <h4>Enter New Task</h4>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <h4>Time (in minutes)</h4>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <div className='button'></div>

            <Button variant="contained" type='submit'>Submit</Button>
        </form>
    </div>
  );
}

export default NewTask;

{/*  */}