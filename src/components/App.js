import Home from "./Home";
import NavBar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import RandomTask from "./RandomTask";
import "../index.css"
import NewTask from "./NewTask";
import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";
import { useState, useEffect } from "react";

function App() {
  const [incompleteTasks, setIncompleteTasks] = useState([])
  const [oldTasks, setOldTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/incomplete')
    .then(resp => resp.json())
    .then(data => setIncompleteTasks(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/completed')
    .then(resp => resp.json())
    .then(data => setOldTasks(data))
  }, [])

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      <NewTask incompleteTasks={incompleteTasks} setIncompleteTasks={setIncompleteTasks}/>
      <PendingTasks incompleteTasks={incompleteTasks}/>
      <CompletedTasks oldTasks={oldTasks}/>
      <RandomTask />
    </>
  )
}
  


export default App;
