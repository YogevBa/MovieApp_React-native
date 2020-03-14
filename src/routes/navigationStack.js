import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LogInScreen from '../screens/LogInScreen';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen'
import Header from '../components/Header'
import React from 'react'

const screens = {
    LogIn: {
        screen: LogInScreen,
        navigationOptions: {
            title: 'Log In'
        }

    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: ({navigation}) => <Header title={'Movie List'} navigation={navigation}/>
        }
    },
    MovieScreen: {
        screen: MovieScreen,
        navigationOptions: {
            headerTitle: ({navigation}) => <Header title={'Movie Details'}  navigation={navigation}/>
        }
    }
}

const NavigationStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'beige' }
    }
});


export default createAppContainer(NavigationStack);