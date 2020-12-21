import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class DSTTFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  GoDetail = (item, index) => {
    this.props.navigation.navigate('Detail', {Detail: item, ID: index});
  };
  renderItem = ({item, index}) => {
    const {onDeleteItem, navigation} = this.props;
    return (
      <TouchableOpacity
        onLongPress={() => onDeleteItem(index)}
        onPress={() => {
          this.props.onChangeIsUpdated(), this.GoDetail(item, index);
        }}>
        <View style={styles.itemContainer}>
          <View
            style={{
              flex: 0.3,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Image
              source={require('../Constaints/Images/avatar2.png')}
              style={{height: 90, width: 90, borderRadius: 40}}
              resizeMode="cover"
            />
          </View>
          <View style={{flex: 0.7, justifyContent: 'space-around', padding: 5}}>
            <Text style={{fontSize: 25}}>{item.Fullname}</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.5}}>
                <Text>Năm sinh : {item.YBirth}</Text>
              </View>
              <View style={{flex: 0.5}}>
                <Text>Đ/c : {item.Address}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.listData}
        extraData={this.props}
        keyExtractor={(item, index) => index}
        renderItem={this.renderItem}
      />
    );
  }
}
const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'pink',
    flexDirection: 'row',
  },
});
