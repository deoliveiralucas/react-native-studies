import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  ListView,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import moment from 'moment';
import SlideMenu from './SlideMenu';

var api = require('../Api/api');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
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
          dataSource: this.state.dataSource.cloneWithRows(responseData[0].exercises),
          dateSelected: responseData[0].day
        });
      })
      .done();
  }

  render() {
    return (
      <View>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>GROUP FITNESS</Text>
        </View>
        <SlideMenu list={this} />
        <Text style={styles.dayTitleText}>{ moment(this.state.dateSelected, "YYYY-MM-DD").format('MMMM D, YYYY') }</Text>
        <ScrollView
          contentInset={{ top: -50 }}
          scrollEventThrottle={200}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          style={styles.scrollView}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderSchedules}
              style={styles.listView}
            />
        </ScrollView>
      </View>
    );
  }

  renderSchedules(exercise) {
    return (
      <View style={styles.container}>
        <View style={styles.dateView}>
          <Text style={styles.dateText}>{ moment(exercise.hour, "HH:mm").format('h:mm A') }</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.nameText}>{ exercise.name }</Text>
          <Text style={styles.roomText}>{ exercise.room }</Text>
        </View>
        <View style={styles.arrowView}>
          <Image
            source={{ uri: 'http://www.clker.com/cliparts/V/1/Z/A/h/U/left-arrow-right-hi.png' }}
            style={styles.arrowImage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  rightContainer: {
    flex: 1,
  },
  dayTitleText: {
    marginLeft: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 5,
  },
  dateView: {
    width: 100,
    height: 50,
  },
  dateText: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#eb0000',
    textAlign: 'center',
  },
  arrowView: {
    width: 25,
    height: 50,
    justifyContent: 'center',
  },
  arrowImage: {
    marginTop: 2,
    width: 10,
    height: 15,
  },
  nameText: {
    marginTop: 11,
    fontSize: 13,
    marginBottom: 3,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  roomText: {
    textAlign: 'left',
    fontSize: 11,
    marginBottom: 10,
  },
  listView: {
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    backgroundColor: '#6A85B1',
    height: windowSize.height - 205,
  },
  titleText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  titleView: {
    height: 70,
    backgroundColor: '#eb0000',
  },
});

module.exports = Main;