import React, {useState} from 'react';
import './App.css';
import PreJunior from "./components/MainComponents/PreJunior/PreJunior";
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Junior from './components/MainComponents/Junior/Junior';
import JuniorPlus from './components/MainComponents/JuniorPlus/JuniorPlus';

const App = () => {

    let [pages, setPages] = useState([
            {title: "preJunior", link: "/preJunior", style: "styles.activeLink"},
            {title: "Junior", link: "/junior", style: "styles.activeLink"},
            {title: "JuniorPlus+", link: "/junior+", style: "styles.activeLink"},
        ]);

  return (
      <HashRouter>
          <div className="App">
              <Navbar pages={pages}/>
              <Route path="/preJunior"
                     render={() => <PreJunior/>}/>
              <Route path="/junior"
                     render={() =>
                         <Junior />}/>
                         <Route path="/junior+"
                     render={() =>
                         <JuniorPlus />}/>
          </div>
      </HashRouter>
  );
}

export default App;
