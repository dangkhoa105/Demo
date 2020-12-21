import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DATA from '../Constaints/Data';

export default class AddInternScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {newName: '123', newYBirth: '111', newAddress: 'QQQ'};
  }

  AddNewSV = () => {
    let ObjNew = {
      Fullname: this.state.newName,
      YBirth: this.state.newYBirth,
      Address: this.state.newAddress,
    };
    const {navigation} = this.props;
    navigation.goBack();
    navigation.state.params.onSelect(ObjNew);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Điền Thông Tin Sinh Viên Mới </Text>
        <TextInput
          style={styles.txtInput}
          onChangeText={(text) => {
            this.setState({newName: text});
          }}
          placeholder="New Name"
        />
        <TextInput
          style={styles.txtInput}
          onChangeText={(text) => {
            this.setState({newYBirth: text});
          }}
          placeholder="New YBirth"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.txtInput}
          onChangeText={(text) => {
            this.setState({newAddress: text});
          }}
          placeholder="New Address"
        />
        <TouchableOpacity onPress={() => this.AddNewSV()}>
          <View
            style={{
              marginHorizontal: 60,
              alignItems: 'center',
              backgroundColor: 'aqua',
              borderWidth: 1,
              padding: 10,
              marginTop: 10,
              borderRadius: 30,
              borderColor: 'red',
            }}>
            <Text>Thêm Sinh Viên</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
AddInternScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  txtInput: {
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 10,
  },
});
