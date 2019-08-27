import React, { Component, PropTypes } from 'react';
import { Redirect } from 'react-router';
import { Header } from './Header';
//import { Product } from './Product';

export default class Test extends Component {

  handleOnClick = () => {
    // some action...
    // then redirect
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/product" />;
    }
    return <header onClick={this.handleOnClick()} />
  }
}