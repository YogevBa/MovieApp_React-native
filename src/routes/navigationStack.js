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
            headerTitle: () => <Header title={'Movie List'}/>
        }
    },
    MovieScreen: {
        screen: MovieScreen,
        navigationOptions: {
            headerTitle: () => <Header title={'Movie Details'}/>
        }
    }
}

const NavigationStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'beige' }
    }
});


export default createAppContainer(NavigationStack);