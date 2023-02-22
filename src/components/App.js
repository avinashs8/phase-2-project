import Home from "./Home";
import NavBar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import RandomTask from "./RandomTask";
import "../index.css"
import NewTask from "./NewTask";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      <NewTask />
      <RandomTask />
    </>
  )
}
  


export default App;
