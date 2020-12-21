import React, { useEffect, useRef } from 'react';
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   Image,
   Dimensions,
   ScrollView,
} from 'react-native';
import Images from '../../res/images';
import { colors, fonts, sizes } from '../../res/values/styles/baseTheme';

const screenWidth = Dimensions.get('window').width;
const deleteWidth = screenWidth * 0.2; // độ rộng button delete

const ItemNotification = (props) => {
   const scrollRef = useRef();
   const index = props.index; //index của item
   const openedIndex = props.openedIndex; //index của item đã được open
   //tự động đóng khi item khác được mở
   useEffect(() => {
      if (index !== openedIndex) {
         scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
      }
   }, [openedIndex]);

   return (
      <ScrollView
         ref={scrollRef}
         snapToInterval={deleteWidth}
         scrollEventThrottle={16}
         decelerationRate={0.7}
         snapToAlignment={'center'}
         pagingEnabled={true}
         horizontal
         onScroll={(event) => {
            //set index open khi scroll
            console.log(event.nativeEvent.contentOffset.x, index);
            if (event.nativeEvent.contentOffset.x > deleteWidth / 4) {
               props.onOpen(index);
            }
         }}
         showsHorizontalScrollIndicator={false}>
         <TouchableOpacity
            style={styles.container}
            onPress={() => {
               props.onPress();
            }}>
            {/* \\\\\Icon Hanwha///// */}
            <Image style={styles.hanwha_logo} source={Images.ic_hanwha} />

            {/* \\\\\Content///// */}
            <View style={styles.content}>
               <Text style={styles.txt_date}>{props.date}</Text>
               <Text style={styles.txt_title}>{props.title}</Text>
               <Text style={styles.txt_content} numberOfLines={2}>
                  {props.content}
               </Text>
            </View>
         </TouchableOpacity>

         {/* Button Delete */}
         <TouchableOpacity style={styles.delete} onPress={() => props.onPressDelete()}>
            <Image style={styles.ic_delete} source={Images.ic_delete2} />
            <Text style={styles.txt_delete}>Xóa</Text>
         </TouchableOpacity>
      </ScrollView>
   );
};

export default ItemNotification;

const styles = StyleSheet.create({
   container: {
      width: screenWidth,
      backgroundColor: colors.orange1,
      flexDirection: 'row',
      paddingLeft: sizes.size32,
      paddingRight: sizes.size48,
      paddingVertical: sizes.size16,
      alignItems: 'center',
   },
   hanwha_logo: {
      resizeMode: 'contain',
      width: sizes.size96,
      height: sizes.size96,
   },
   content: {
      paddingLeft: sizes.size24,
      flex: 1,
   },
   txt_date: {
      color: colors.gray,
      fontSize: sizes.size28,
      fontFamily: fonts.regular,
   },
   txt_title: {
      color: colors.black1,
      fontSize: sizes.size32,
      fontWeight: 'bold',
      lineHeight: sizes.size48,
      fontFamily: fonts.bold,
   },
   txt_content: {
      color: colors.gray,
      fontSize: sizes.size26,
      lineHeight: sizes.size21,
      fontFamily: fonts.medium,
   },
   delete: {
      width: deleteWidth,
      backgroundColor: colors.red2,
      justifyContent: 'center',
      alignItems: 'center',
   },

   ic_delete: {
      resizeMode: 'contain',
      width: sizes.size48,
      height: sizes.size48,
   },

   txt_delete: {
      color: colors.white,
      fontSize: sizes.size26,
   },
});
