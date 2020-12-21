import React, {Component, useRef} from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.scrollRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.indexScroll !== this.props.indexScroll &&
      this.props.index !== this.props.indexScroll
    ) {
      this.scrollRef.current.scrollTo({x: 0, y: 0, animation: true});
    }
  }

  render() {
    const {index, indexScroll, onSetIndexScroll} = this.props;

    return (
      <ScrollView
        horizontal
        snapToInterval={width}
        scrollEventThrottle={16}
        snapToAlignment={'center'}
        pagingEnabled
        ref={this.scrollRef}
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={() => onSetIndexScroll(index)}
        style={{margin: 10}}>
        <View
          style={{
            width: width - 20,
            height: 200,
            backgroundColor: '#333',
          }}
        />
        <View
          style={{width: width - 20, height: 200, backgroundColor: '#655'}}
        />
      </ScrollView>
    );
  }
}
