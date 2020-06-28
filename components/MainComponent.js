import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
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
    defaultNavigationOptions:{
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
  defaultNavigationOptions: ({ navigation }) => ({
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

const ContactNavigator = createStackNavigator({
  Contact: { screen: Contact }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});

const AboutNavigator = createStackNavigator({
  About: { screen: About}
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8" 
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});

const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home'
      }
    },
   About: 
    { screen: AboutNavigator,
      navigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us'
      }, 
    },
  Menu: 
    { screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu'
      }, 
    },
    Contact: 
    { screen: ContactNavigator,
      navigationOptions: {
        title: 'Contact Us',
        drawerLabel: 'Contact Us'
      }, 
    },
    


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