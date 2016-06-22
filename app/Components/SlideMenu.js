import React from 'react';
import {
  ScrollView,
  StyleSheet,
  ListView,
} from 'react-native';

import moment from 'moment';
import BoxCalendar from './BoxCalendar';

var api = require('../Api/api');

class SlideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(api.getUri())
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: responseData
        });
      })
      .done();
  }

  render() {
    return (
      <ScrollView
        horizontal={ true }
        contentInset={{ top: -50 }}
        style={ styles.horizontalScrollView }>
          { this.state.dataSource.map((data, i) => <BoxCalendar key={i} data={data} slide={this.props.list} />) }
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  horizontalScrollView: {
    height: 76,
  }
});

module.exports = SlideMenu;