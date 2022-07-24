import {Navigate, Route, Routes} from "react-router-dom";
import {Header} from "./component/header/Header";
import {Cards} from "./component/cards/Cards";
import {Card} from "./component/card/Card";
import React from "react";
import "./App.scss";

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
