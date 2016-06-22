import React from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

var Main = require('./app/Components/Main.js');

var GroupFitness = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={{ name: 'Group Fitness', index: 0 }}
        renderScene={(route, navigator) => <Main /> }
      />
    );
  }
});

AppRegistry.registerComponent('GroupFitness', () => GroupFitness);