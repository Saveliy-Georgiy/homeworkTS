import React, {useState} from 'react';
import './App.css';
import Monday from "./components/Monday/Monday";
import {HashRouter, Route} from "react-router-dom";
import Tuesday from "./components/Tuesday/Tuesday";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

    let [daysOfWeek, setDayOfWeek] = useState([
            {title: "monday", link: "/monday", style: "styles.activeLink"},
            {title: "tuesday", link: "/tuesday", style: "styles.activeLink"},
        ]);

  return (
      <HashRouter>
          <div className="App">
              <Navbar daysOfWeek={daysOfWeek}/>
              <Route path="/monday"
                     render={() => <Monday/>}/>
              <Route path="/tuesday"
                     render={() =>
                         <Tuesday />}/>
          </div>
      </HashRouter>
  );
}

export default App;
