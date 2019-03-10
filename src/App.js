import React, { Component, Fragment } from "react";
import { GlobalStyle } from "./style.js";
import GlobalIcons from "./statics/iconfont/iconfont.js";
import Header from "./common/header/index";
import store from "./store/index";
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <GlobalIcons />
          <Header />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
