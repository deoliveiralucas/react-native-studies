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
  TouchableHighlight,
} from 'react-native';

import SlideMenu from './SlideMenu';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
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
        <SlideMenu />
        <Text style={styles.dayTitleText}>JUNE 11, 2016</Text>
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

  renderSchedules(movie) {
    return (
      <View style={styles.container}>
        <View style={styles.dateView}>
          <Text style={styles.dateText}>6: 45 AM</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{ movie.title }</Text>
          <Text style={styles.year}>{ movie.year }</Text>
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
  title: {
    marginTop: 11,
    fontSize: 13,
    marginBottom: 3,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  year: {
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