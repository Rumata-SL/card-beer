import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "./redux/store"

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

reportWebVitals();
