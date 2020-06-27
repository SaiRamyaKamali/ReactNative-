import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


const MenuNavigator = createStackNavigator({
  Menu: {screen: Menu},
  Dishdetail: {screen: Dishdetail}
},{
    initialRouteName: 'Menu',
    navigationOptions:{
      headerStyle:{
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        color: '#fff'
      }
    }
})
//const Container = createAppContainer(MenuNavigator);

const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});
//const Container = createAppContainer(HomeNavigator);

const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home'
      }
    },
  Menu: 
    { screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu'
      }, 
    }
}, {
drawerBackgroundColor: '#D1C4E9'
});

const Container = createAppContainer(MainNavigator);




class Main extends Component {
  render() {
 
    return (
        
      <View style={{ flex:1, paddingTop: Platform.OS === 'ios' ? 0: Expo.Constants.statusBarHeight}}>
        <Container/>
      </View>
    
    );  
  }
}
  
export default  Main;