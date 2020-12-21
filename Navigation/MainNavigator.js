import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen';
import Lab1Screen from '../Screens/Lab1Screen';
import Lab2Screen from '../Screens/Lab2Screen';
import AddInternScreen from '../Screens/AddInternScreen';
import DetailScreen from '../Screens/DetailScreen';
import RoleScreen from '../Screens/RoleScreen';
import SwipeFlatListScreen from '../Screens/SwipeFlatListScreen';
import PanButton from '../Screens/PanButton';
import FirebaseScreen from '../Screens/FirebaseScreen';

const AppStackNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Lab1: {
    screen: Lab1Screen,
  },
  Lab2: {
    screen: Lab2Screen,
  },
  AddIntern: {
    screen: AddInternScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
  Role: {
    screen: RoleScreen,
  },
  SwipeFlatList: {
    screen: SwipeFlatListScreen,
  },
  PanButtons: {
    screen: PanButton,
  },
  FirebaseScreen: {
    screen: FirebaseScreen,
  },
});

export default AppStackNavigation;
