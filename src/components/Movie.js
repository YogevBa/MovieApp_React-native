import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';


class Movie extends Component {
    render() {
        const { itemData, navigation } = this.props
        console.log(this.props);

        return (
            <TouchableOpacity style={styles.container} onPress={() => navigation ? navigation.navigate('MovieScreen', itemData) : itemData}>
                <Text style={styles.movieName}>{itemData.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '95%',
        marginVertical: 10,
        borderColor: 'black',
        borderRadius: 10,
        borderColor: 'transparent',
        padding: 10,
        elevation: 5,
        backgroundColor: '#00BCFF'
    },
    movieName: {
        color: 'black',
        letterSpacing: 0.8
    }

});


export default Movie;