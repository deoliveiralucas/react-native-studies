import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import moment from 'moment';
import Main from './Main';

class BoxCalendar extends React.Component {
  constructor(props) {
    super(props);
  }

  loadExercises(slide, day, exercises) {
    slide.setState({
      dataSource: slide.state.dataSource.cloneWithRows(exercises),
      dateSelected: day
    });
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this.loadExercises(this.props.slide, this.props.data.day, this.props.data.exercises) }>
        <View style={styles.calendarView}>
          <Text style={styles.weekDayText}>{ moment(this.props.data.day, "YYYY-MM-DD").format('ddd').toString().toUpperCase() }</Text>
          <Text style={styles.dayText}>{ moment(this.props.data.day, "YYYY-MM-DD").format('D') }</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  calendarView: {
    margin: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 0,
    width: 64,
    height: 64,
  },
  weekDayText: {
    marginTop: 10,
    fontSize: 9,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

module.exports = BoxCalendar;