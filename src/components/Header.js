import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import FavoritesModal from '../components/FavoritesModal'
import { connect } from 'react-redux'


const Header = (props) => {
    const {navigation,title} = props
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <FavoritesModal navigation={navigation}/>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 18,
        color: 'black',
        letterSpacing: 1,
        marginHorizontal: 70
    },
    favoriteBtn: {
        fontSize: 35,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        position: 'relative'
    },
    identifier: {
        position: 'absolute',
        top: 20,
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
        alignItems: 'center'
    }
});


const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}


export default connect(mapStateToProps)(Header);