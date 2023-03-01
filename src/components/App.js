import Home from "./Home";
import NavBar from "./Navbar";
import { Route, Switch } from "react-router-dom";
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
        <Route path="/newtask" >
          <NewTask incompleteTasks={incompleteTasks} setIncompleteTasks={setIncompleteTasks}/>
        </Route>
        <Route path="/pendingtasks">
          <PendingTasks incompleteTasks={incompleteTasks} setOldTasks={setOldTasks} oldTasks={oldTasks} setIncompleteTasks={setIncompleteTasks}/>
        </Route>
        <Route path="/completedtasks">
          <CompletedTasks oldTasks={oldTasks}/>
        </Route>
      </Switch>
</>
  )
}
  


export default App;
