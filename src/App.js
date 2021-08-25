import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topnav from "./Components/Topnav";
import Sidenav from "./Components/Sidenav";
import Dashboard from "./Pages/Home";
import Allproducts from "./Pages/Allproducts";
import Updateproduct from "./Pages/Updateproduct";
import Newstaff from "./Pages/Newstaff";
import Allstaff from "./Pages/Allstaff";
import Newuser from "./Pages/Newuser";
import Allusers from "./Pages/Allusers";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

function App() {
  return (
    <div className="App">
      <Router>
        <Sidenav />
        <Topnav />
        <section class="pcoded-main-container">
          <div class="pcoded-wrapper">
            <div class="pcoded-content">
              <div class="pcoded-inner-content">
                <div class="main-body">
                  <Switch>
                    <Route exact path="/">
                      <Dashboard />
                    </Route>
                    <Route exact path="/allproducts">
                      <Allproducts />
                    </Route>
                    <Route exact path="/updateproduct">
                      <Updateproduct />
                    </Route>
                    <Route exact path="/newstaff">
                      <Newstaff />
                    </Route>
                    <Route exact path="/allstaff">
                      <Allstaff />
                    </Route>
                    <Route exact path="/newuser">
                      <Newuser />
                    </Route>
                    <Route exact path="/allusers">
                      <Allusers />
                    </Route>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Router>
    </div>
  );
}

export default App;
