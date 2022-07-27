import "./index.css";
import App from "./App";
import React from "react";
import {store} from "./redux/store"
import {Provider} from "react-redux";
import ReactDOM from "react-dom/client";
import {HashRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
);

reportWebVitals();
