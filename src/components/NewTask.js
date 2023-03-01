import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

function NewTask() {
  const [activity, setActivity] = useState('')
  const [time, setTime ] = useState('')
  const [submittedData, setSubmittedData] = useState([])

  function handleSubmit(e){
        e.preventDefault()
        const formData = {
          activity: activity,
          time: time
        }
        console.log(formData)
    }

  function handleNewActivity(e){
    setActivity(e.target.value)
    console.log(activity)
  }

  function handleNewTime(e){
    setTime(e.target.value)
    console.log(time)
  }

  return (
    <div className='header'>
        <form onSubmit={handleSubmit}>
          <h4>Enter New Task</h4>
         <TextField id="outlined-basic" label="New Task" variant="outlined" onChange={handleNewActivity} value={activity}/> 
          <h4>Time (in minutes)</h4>
          <TextField id="outlined-basic" label="Time" variant="outlined" onChange={handleNewTime} value={time}/> 
          <div className='button'></div>

          <Button variant="contained" type='submit'>Submit</Button>
        </form>
    </div>
  );
}

export default NewTask;

{/*  */}