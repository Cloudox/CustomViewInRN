/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PropTypes,
  requireNativeComponent
} from 'react-native';

var NativeMyCustomView = requireNativeComponent('MyCustomView', MyCustomView);

export default class MyCustomView extends Component {
  static propTypes = {
    isRed: true,
  };
  render() {
    return <NativeMyCustomView {...this.props} />;
  }
}

var customViewInRN = React.createClass ({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Red one
        </Text>
        <MyCustomView style={styles.customView} isRed={true} />
        <Text style={styles.welcome}>
          Not red one
        </Text>
        <MyCustomView style={styles.customView} isRed={false} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  customView: {
    width: 20,
    height: 20,
  },
});

AppRegistry.registerComponent('customViewInRN', () => customViewInRN);
