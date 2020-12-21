import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Lab1"
          onPress={() => this.props.navigation.navigate('Lab1')}
        />
        <Button
          title="Lab2"
          onPress={() => this.props.navigation.navigate('Lab2')}
        />
        <Button
          title="Role"
          onPress={() => this.props.navigation.navigate('Role')}
        />
        <Button
          title="Swipe FlatList"
          onPress={() => this.props.navigation.navigate('SwipeFlatList')}
        />
        <Button
          title="PanButtons"
          onPress={() => this.props.navigation.navigate('PanButtons')}
        />
        <Button
          title="FirebaseScreen"
          onPress={() => this.props.navigation.navigate('FirebaseScreen')}
        />
      </View>
    );
  }
}
HomeScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
