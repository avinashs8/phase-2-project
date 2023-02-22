import Home from "./Home";
import NavBar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import RandomTask from "./RandomTask";
import "../index.css"

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      <RandomTask />
    </>
  )
}
  


export default App;
