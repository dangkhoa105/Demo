import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      yBirth: '',
      address: '',
      newName: '',
      newYBirth: '',
      newAddress: '',
      ID: null,
    };
  }
  componentDidMount() {
    let Detail = this.props.navigation.getParam('Detail', false);
    let IDSV = this.props.navigation.getParam('ID', -1);
    if (Detail != false) {
      this.setState({
        name: Detail.Fullname,
        yBirth: Detail.YBirth,
        address: Detail.Address,
        newName: Detail.Fullname,
        newYBirth: Detail.YBirth,
        newAddress: Detail.Address,
        ID: IDSV,
      });
      //   alert(IDSV);
    }
  }
  UpdateSV = () => {
    let ObjUpdate = {
      Fullname: this.state.newName,
      YBirth: this.state.newYBirth,
      Address: this.state.newAddress,
    };
    this.props.navigation.navigate('Lab2', {
      IDSV: this.state.ID,
      ObjUpdate: ObjUpdate,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{justifyContent: 'center', alignItems: 'center', flex: 0.1}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {' '}
            THÔNG TIN THỰC TẬP SINH{' '}
          </Text>
        </View>
        <View style={{flex: 0.9, marginHorizontal: 15}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.txtText}>Name : </Text>
            </View>
            <View style={{flex: 0.8}}>
              <TextInput
                defaultValue={this.state.name}
                style={styles.txtInput}
                onChangeText={(text) => this.setState({newName: text})}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.txtText}>YBirth : </Text>
            </View>
            <View style={{flex: 0.8}}>
              <TextInput
                defaultValue={this.state.yBirth}
                style={styles.txtInput}
                onChangeText={(text) => this.setState({newYBirth: text})}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.txtText}>Address : </Text>
            </View>
            <View style={{flex: 0.8}}>
              <TextInput
                defaultValue={this.state.address}
                style={styles.txtInput}
                onChangeText={(text) => this.setState({newAddress: text})}
              />
            </View>
          </View>
          <View style={{marginHorizontal: 60, marginTop: 10}}>
            <TouchableOpacity
              style={{
                padding: 12,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
              }}
              onPress={() => {
                this.UpdateSV();
              }}>
              <Text style={{color: 'white'}}>SAVE</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 60, marginTop: 10}}>
            <TouchableOpacity
              style={{
                padding: 12,
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
              }}
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Text style={{color: 'white'}}>BACK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
DetailScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtText: {marginTop: 5, fontSize: 17},
  txtInput: {
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 10,
    paddingLeft: 14,
  },
});
