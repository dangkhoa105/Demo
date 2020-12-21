import React from 'react';
import {
   View,
   SafeAreaView,
   StyleSheet,
   TouchableOpacity,
   Image,
   StatusBar,
   Dimensions,
   FlatList,
   Alert,
} from 'react-native';
import { Sizes } from '@dungdang/react-native-basic';
import Images from '../../res/images';
import { colors, sizes } from '../../res/values/styles/baseTheme';
import TopTabbar from '../custom/TopTabBar';
import ItemNotification from './ItemNotification';
import ButtonCall from '../custom/ButtonCall';
import OptionModal from './custom/OptionModal';

const screenWidth = Dimensions.get('window').width;

const data = [
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
   {
      date: '10/09/2020',
      title: 'Đây là tiêu đề của thông báo',
      content: 'Nội dung tóm tắt của thông báo sẽ hiển thị tối đa 2 dòng như thế này',
   },
];

export default class Notification extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         refreshingNoti: false,
         refreshingMess: false,
         isShowOption: false,
         openedIndex: '',
      };
   }

   showHideOption = () => {
      this.setState({ isShowOption: !this.state.isShowOption });
   };
   //render item notification
   renderItem = ({ item, index }) => (
      <ItemNotification
         index={index}
         onPress={() => this.props.navigation.navigate('DetailNotification')}
         onPressDelete={() => alert('Xóa')}
         onOpen={(index) => {
            this.state.openedIndex !== index && this.setState({ openedIndex: index });
         }}
         openedIndex={this.state.openedIndex}
         date={item.date}
         title={item.title}
         content={item.content}
      />
   );

   //refresh list Thông báo
   handleRefreshNoti() {
      this.setState({ refreshingNoti: true });
      this.setState({ refreshingNoti: false });
   }

   //refresh list Hộp thư
   handleRefreshMess() {
      this.setState({ refreshingMess: true });
      this.setState({ refreshingMess: false });
   }
   render() {
      const dataOptions = [
         {
            label: 'Đánh dấu đã đọc',
            onPress: () => {
               Alert.alert('Thông báo', 'Đánh đấu đã đọc');
            },
         },
         {
            label: 'Cài đặt Thông báo',
            onPress: () => {
               Alert.alert('Thông báo', 'Cài đặt Thông báo');
            },
         },
         { label: 'Đóng', onPress: () => this.showHideOption() },
      ];
      return (
         <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* /////////////////Header///////////// */}
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <SafeAreaView style={{ backgroundColor: colors.white }} />

            <View style={styles.header_container}>
               {/* ////Icon back//// */}
               <TouchableOpacity
                  style={styles.ic_back_container}
                  onPress={() => this.props.navigation.goBack()}>
                  <Image style={styles.img_back} source={Images.ic_back} />
               </TouchableOpacity>

               {/* /////Logo//// */}
               <Image style={styles.img_logo} source={Images.hanwha_logo} />

               {/* ////Icon more//// */}
               <TouchableOpacity
                  style={styles.ic_more_container}
                  onPress={() => this.showHideOption()}>
                  <Image style={styles.img_more} source={Images.ic_more2} />
               </TouchableOpacity>
            </View>
            {/* ///////options//////////// */}
            <OptionModal visible={this.state.isShowOption} data={dataOptions} />
            {/* \\\\\\\\\\\\\\\\\\\\\\Content/////////////////////////// */}
            <TopTabbar
               tabBarStyle={{ borderBottomWidth: 0 }}
               labelLeft={`Thông báo (${data.length})`}
               labelRight={`Hộp thư (${data.length})`}>
               {/* ///////Thông báo//////////// */}
               <View style={{ width: screenWidth }}>
                  <FlatList
                     onScroll={() => this.setState({ openedIndex: '' })}
                     showsVerticalScrollIndicator={false}
                     onRefresh={() => this.handleRefreshNoti()}
                     refreshing={this.state.refreshingNoti}
                     data={data}
                     keyExtractor={(item, index) => String(index)}
                     renderItem={this.renderItem}
                  />
               </View>

               {/* ///////Hộp thư//////////// */}
               <View style={{ width: screenWidth }}>
                  <FlatList
                     onScroll={() => this.setState({ openedIndex: '' })}
                     showsVerticalScrollIndicator={false}
                     onRefresh={() => this.handleRefreshMess()}
                     refreshing={this.state.refreshingMess}
                     data={data}
                     keyExtractor={(item, index) => String(index)}
                     renderItem={this.renderItem}
                  />
               </View>
            </TopTabbar>
            <View style={{ backgroundColor: '#FFF9F3', paddingTop: Sizes.s20 }} />
            <ButtonCall />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   header_container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: Sizes.h48 * 2,
      borderColor: colors.gray3,
      borderBottomWidth: 1,
   },

   ic_back_container: {
      position: 'absolute',
      left: Sizes.h32,
   },

   img_back: {
      resizeMode: 'contain',
      width: Sizes.h48,
      height: Sizes.h48,
   },

   img_logo: {
      resizeMode: 'contain',
      width: '60%',
      height: '70%',
   },

   ic_more_container: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      right: Sizes.h10,
      padding: Sizes.s10,
   },

   img_more: {
      resizeMode: 'contain',
      width: Sizes.h48,
      height: Sizes.h48,
   },
});
