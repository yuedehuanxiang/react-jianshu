import React, { PureComponent } from "react";
import { connect } from "react-redux";

class Login extends PureComponent {
  render() {
    return <div>login</div>;
  }
}

const mapDispatch = dispatch => ({});

const mapState = state => ({});

export default connect(
  mapState,
  mapDispatch
)(Login);
