import React, {Component, useRef} from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Item from './Item';

const {width, height} = Dimensions.get('window');
const data = new Array(5);

export default class SwipeFlatListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexScroll: '',
    };
  }

  renderItem = ({item, index}) => {
    return (
      <Item
        index={index}
        onSetIndexScroll={(value) => this.setState({indexScroll: value})}
        indexScroll={this.state.indexScroll}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={data}
        onScroll={() => this.setState({indexScroll: ''})}
        keyExtractor={(_, index) => index.toString()}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: width,
    height: 100,
  },
});
