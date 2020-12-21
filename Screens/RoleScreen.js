import React from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function RoleScreen() {
  const renderItem = ({item, index}) => {
    let isMiddle = width / (width / 3) !== index;

    let stylesItem = isMiddle ? styles.itemTwoSide : styles.itemMiddle;

    return (
      <View style={stylesItem}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={nums}
      snapToInterval={width / 3}
      scrollEventThrottle={16}
      decelerationRate={0.1}
      snapToAlignment={'center'}
      horizontal
      onScroll={(e) => console.log(e.nativeEvent.contentOffset.x)}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  itemMiddle: {
    backgroundColor: '#333',
    width: width / 3,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTwoSide: {
    backgroundColor: '#999',
    width: width / 3,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
