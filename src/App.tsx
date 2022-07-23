import React from 'react';
import './App.scss';
import {Cards} from "./component/cards/Cards";
import {Header} from "./component/header/Header";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className={"over"}>
          <Header/>
          <div className={"wrapper"}>
              <Routes>
                  <Route path={"/"} element={<Navigate to={"/cards/"}/>}/>
                  <Route path={"/cards/"} element={<Cards/>}></Route>
              </Routes>
          </div>

      </div>
    </div>
  );
}

export default App;
