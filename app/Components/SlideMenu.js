import React from 'react';
import {
    ScrollView,
    StyleSheet,
} from 'react-native';

import moment from 'moment';
import BoxCalendar from './BoxCalendar';

var days = [
  {
    exercise: 'BODY STRONG',
    day: '2016-06-01',
    hour: '8:15 AM'
  },
  {
    exercise: 'BEGGINING YOGA',
    day: '2016-06-02',
    hour: '8:15 AM'
  },
  {
    exercise: 'ADVANCED YOGA',
    day: '2016-06-03',
    hour: '8:15 AM'
  },
  {
    exercise: 'INSANITY 60',
    day: '2016-06-04',
    hour: '8:15 AM'
  },
];

class SlideMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        contentInset={{ top: -50 }}
        style={styles.horizontalScrollView}>
        { days.map((data, i) => <BoxCalendar key={i} data={data} />) }
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