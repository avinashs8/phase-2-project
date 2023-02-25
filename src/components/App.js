import Home from "./Home";
import NavBar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import RandomTask from "./RandomTask";
import "../index.css"
import NewTask from "./NewTask";
import PendingTasks from "./PendingTasks";
import { useState, useEffect } from "react";

function App() {
  const [incompleteTasks, setIncompleteTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/incomplete')
    .then(resp => resp.json())
    .then(data => setIncompleteTasks(data))
  }, [])

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      <NewTask />
      <PendingTasks incompleteTasks={incompleteTasks} setIncompleteTasks={setIncompleteTasks}/>
      <RandomTask />
    </>
  )
}
  


export default App;
