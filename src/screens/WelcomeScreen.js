import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
