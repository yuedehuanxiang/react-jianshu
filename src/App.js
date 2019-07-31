import React, { Component, Fragment } from "react";
import { GlobalStyle } from "./style.js";
import GlobalIcons from "./statics/iconfont/iconfont.js";
import Header from "./common/header/index";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <GlobalIcons />
          <Router>
            <div>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/detail/:id" exact component={Detail} />
            </div>
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
