

import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginButton, AccessToken } from 'react-native-fbsdk'

const LogInScreen = ({ navigation }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const signIn = () => {
        navigation.navigate('Home')
    };

    return (
        <View style={styles.container}>
            <View style={{ height: '15%' }} />
            <View style={{ alignItems: 'center', height: '70%', width: '100%' }}>
                <Text style={{ fontSize: 30 }}>Welcome</Text>
                {isLoggedIn ? <Text>{user.profile.name}</Text> : <Text style={{ fontSize: 30 }}>Stranger</Text>}

                <View style={styles.circle}>
                    {/* <Image
                        style={{ width: '75%', height: '75%', resizeMode: 'stretch' }}
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    /> */}
                </View>
                <Text style={{color:'red'}}>facebook log in doesn't work</Text>
                <Text>Please use the free pass button to get into the App</Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={signIn}>
                    <Icon.Button
                        name="google"
                        backgroundColor="#ff0000"
                        onPress={signIn}
                        style={{height:30}}
                    >
                        Free pass to App
                        </Icon.Button>
                </TouchableOpacity>
                <LoginButton
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log('login failed: ' + result.error);

                            } else if (result.isCancelled) {
                                console.log('login cancelled.');

                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        console.log(data.accessToken.toString())

                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => console.log('logout.')
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%'
    },
    circle: {
        marginVertical: 30,
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        backgroundColor: 'transparent',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '15%',
        width: '100%'

    }
});

export default LogInScreen;
