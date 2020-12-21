import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';

export default class Lab1Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {a: 0, b: 0, c: 0, result: '123'};
  }
  Submit = () => {
    let Delta = this.state.b * this.state.b - 4 * this.state.a * this.state.c;
    if (Delta > 0) {
      let x1 =
        (-1 * this.state.b + Math.sqrt(Delta).toFixed(0)) / (2 * this.state.a);
      let x2 =
        (-1 * this.state.b - Math.sqrt(Delta).toFixed(0)) / (2 * this.state.a);
      let rs =
        'Phương trình có 2 nghiệm phân biệt ' +
        x1.toString() +
        ' và ' +
        x2.toString();
      Alert.alert(
        '',
        rs,
        [
          {
            text: 'OK',
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
        },
      );
    }
    if (Delta == 0) {
      let x = (-1 * this.state.b) / (2 * this.state.a);
      let rs = 'Phương trình có nghiệm kép ' + x.toString();
      Alert.alert(
        '',
        rs,
        [
          {
            text: 'OK',
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
        },
      );
    }
    if (Delta < 0) {
      let rs = 'Delta = ' + Delta.toString() + ' nên phương trình vô nghiệm';
      Alert.alert(
        '',
        rs,
        [
          {
            text: 'OK',
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
        },
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.txtInput}
          placeholder="Nhập a"
          onChangeText={(text) => this.setState({a: text})}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Nhập b"
          onChangeText={(text) => this.setState({b: text})}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Nhập c"
          onChangeText={(text) => this.setState({c: text})}
        />
        <Text>a: {this.state.a}</Text>
        <TouchableOpacity onPress={() => this.Submit()}>
          <View style={styles.btn}>
            <Text style={{color: 'white'}}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
Lab1Screen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  txtInput: {height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 7},
  btn: {
    marginTop: 10,
    height: 35,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
