import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import DSTTFlatList from '../Components/DSTTFlatList';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DATA from '../Constaints/Data';
export default class Lab2Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      IsUpdate: false,
      IsUpdated: false,
    };
  }
  componentDidMount() {
    this.setState({data: DATA}, () => {});
  }
  onSelect = (data) => {
    let listNew = [...this.state.data, data];
    this.setState({data: listNew});
  };
  componentDidUpdate(prevState, prevProps) {
    // this.handlingAddAndUpdate();
  }

  handlingAddAndUpdate = () => {
    if (this.state.IsUpdated == true) {
      let IDUpdate = this.props.navigation.getParam('IDSV', -1);
      if (IDUpdate !== -1) {
        let ObjWillBeUpdated = this.props.navigation.getParam('ObjUpdate', {});
        let newList = this.state.data;
        newList[IDUpdate].Fullname = ObjWillBeUpdated.Fullname;
        newList[IDUpdate].YBirth = ObjWillBeUpdated.YBirth;
        newList[IDUpdate].Address = ObjWillBeUpdated.Address;
        this.setState({data: newList, IsUpdated: false});
      }
    }
    if (this.state.IsUpdate == true) {
      let IsAdd = this.props.navigation.getParam('IsAddObj', false);
      if (IsAdd === true) {
        let newData = this.props.navigation.getParam('ObjNew', {});
        let newListData = [...DATA, newData];
        this.setState({data: newListData, IsUpdate: false});
      }
    }
  };

  onDeleteItem = (index) => {
    let newList = this.state.data.filter((item, i) => i != index);
    this.setState({data: newList});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <View
            style={{flex: 0.9, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
              {' '}
              DANH SÁCH THỰC TẬP SINH {}
            </Text>
            {/* {this.state.IsUpdated == true ? <Text>Y</Text> : <Text>N</Text>} */}
          </View>
          <View style={{flex: 0.1}}>
            <TouchableOpacity
              style={{
                padding: 8,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
              }}
              onPress={() => {
                this.props.navigation.navigate('AddIntern', {
                  onSelect: this.onSelect,
                });
              }}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Content}>
          <DSTTFlatList
            onChangeIsUpdated={() => {
              this.setState({
                IsUpdated: true,
              });
            }}
            listData={this.state.data}
            onDeleteItem={this.onDeleteItem}
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }
}
Lab2Screen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Content: {
    flex: 0.9,
  },
});
