import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';
import { connect } from 'react-redux'


const Header = (props) => {

    const showModal = () => {
        return <Modal><Text>hello</Text></Modal>
    }

    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>{props.title}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => showModal}>
                <View style={styles.favoriteBtn}>
                    <Text style={{ fontSize: 40 }}>⭐</Text>
                    <Text style={styles.identifier}>{props.favorites.length}
                    </Text>
                </View>

            </TouchableOpacity>
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
        marginHorizontal:70
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