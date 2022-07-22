import React from 'react';
import './App.scss';
import {Search} from "./component/search/Search";
import {Cards} from "./component/cards/Cards";

function App() {
  return (
    <div className="App">
      <div className={"over"}>
          <Search/>
          <div className={"wrapper"}>
              <Cards/>
          </div>

      </div>
    </div>
  );
}

export default App;
