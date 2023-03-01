import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import RandomTask from './RandomTask';

function NewTask({ incompleteTasks, setIncompleteTasks }) {
  const [activity, setActivity] = useState('')
  const [time, setTime ] = useState('')
  

  function handleSubmit(e){
        e.preventDefault()
        const formData = {
          activity: activity,
          time: time
        }
        const dataArray = [...incompleteTasks, formData]
        setIncompleteTasks(dataArray)
        fetch('http://localhost:3000/incomplete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
    }

  function handleNewActivity(e){
    setActivity(e.target.value)
  }

  function handleNewTime(e){
    setTime(e.target.value)
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

        <RandomTask />
    </div>
  );
}

export default NewTask;

