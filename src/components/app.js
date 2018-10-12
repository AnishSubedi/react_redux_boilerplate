import React, { Component } from "react";
import store from "../store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>test</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
