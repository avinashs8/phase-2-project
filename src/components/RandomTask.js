import { useState } from "react"

import Button from '@mui/material/Button';

function RandomTask(){
    const [randomActivity, setRandomActivity] = useState('')
    const handleGenerateActivity = () => {
        fetch('https://www.boredapi.com/api/activity')
        .then(resp => resp.json())
        .then(data => setRandomActivity(data.activity))
    }
    return (
        <div className="header">
            <h1 style={{textAlign: "center"}}>Can't Think of an Activity?</h1>
            <h3>Click the button below to generate a random activity</h3>
            <Button variant="contained" onClick={handleGenerateActivity}>GENERATE RANDOM ACTIVITY</Button>
            <h1>{randomActivity}</h1>
        </div>
    )
}

export default RandomTask