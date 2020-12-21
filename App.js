import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <AppNavigation/>
    );
  }
}

