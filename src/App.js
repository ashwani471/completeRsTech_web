import React, { useState } from "react";
import Region from "./components/AddRegions/Home";

import SignUp from "./components/SignUp/SignUp";
import { useSetRecoilState } from "recoil";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard/Home";
import { makeStyles } from "@material-ui/core";
import Login from "./components/Login/Login";
import Load from "./components/AddLoads/Home";
import Truck from "./components/AddTrucks/Home";
import Onboarding from "./components/Onboarding/Home";
import Architecture from "./components/AddArchitecture/Home";
import Warehouse from "./components/AddWarehouse/Home";
import { companyId } from "./components/GlobalComp/globalstates";

const useStyles = makeStyles({
  topcontain: {
    backgroundColor: "#80808014",
    padding: "30px 30px 0px 30px",
    height: "95vh",
  },
});

function App() {
  const classes = useStyles();
  const [isSignedin, setIsSignedin] = useState(false);
  const [loggedUser, setLoggedUser] = useState({});
  const setCompanyId = useSetRecoilState(companyId);

  const handlesignin = () => {
    setIsSignedin(true);
    // setLoggedUser(res.data);
  };
  const handleUser = (dat) => {
    setCompanyId(dat.CompanyID);
    setLoggedUser(dat);
  };
  return (
    // <div className={classes.topcontain}>
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUp} />

        <Route path="/region">
          {isSignedin ? (
            <Region loggedUser={loggedUser} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/load">
          {isSignedin ? (
            <Load loggedUser={loggedUser} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/truck">
          {isSignedin ? (
            <Truck loggedUser={loggedUser} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/architecture">
          {isSignedin ? (
            <Architecture loggedUser={loggedUser} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/warehouse">
          {isSignedin ? (
            <Warehouse loggedUser={loggedUser} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>

        <Route path="/dashboard">
          {isSignedin ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/onboarding">
          {isSignedin ? <Onboarding /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login handlesignin={handlesignin} handleUser={handleUser} />
        </Route>

        {/* <SignUp /> */}
      </Switch>
    </BrowserRouter>
    // </div>
  );
}

export default App;
