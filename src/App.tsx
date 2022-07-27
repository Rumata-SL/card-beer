import "./App.scss";
import React from "react";
import {Card} from "./component/card/Card";
import {Cards} from "./component/cards/Cards";
import {Header} from "./component/header/Header";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className={"wrapper"}>
                <Header/>
                <div className={"container"}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/cards/"}/>}/>
                        <Route path={"/cards/"} element={<Cards/>}></Route>
                        <Route path={"/card/:id"} element={<Card/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
