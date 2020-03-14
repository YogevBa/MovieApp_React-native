import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Modal,
    FlatList
} from 'react-native';
import { connect } from 'react-redux'
import { TouchableOpacity } from "react-native-gesture-handler";
import Movie from '../components/Movie'
import Icon from 'react-native-vector-icons/FontAwesome';


const FavoritesModal = (props) => {
    const [modalState, setModalState] = useState(false)
    const { navigation, favorites } = props
    console.log(props);

    return (
        <View>
            <TouchableOpacity
                name="openModal"
                onPress={() => setModalState(true)}

            >
                <View style={styles.favoriteBtn}>
                    <Text style={{ fontSize: 40 }}>⭐</Text>
                    <Text style={styles.identifier}>{props.favorites.length}
                    </Text>
                </View>
            </TouchableOpacity>

            <Modal visible={modalState} animationType='slide'>
                <Icon.Button
                    name='closeModal'
                    size={5}
                    backgroundColor={'transparent'}
                    onPress={() => setModalState(false)}

                >
                    <Text style={{ fontSize: 30 }}>X</Text>
                </Icon.Button>
                <View style={styles.container}>

                    <Text style={styles.headerText}>Favorite Movies</Text>

                    <FlatList
                        data={favorites}
                        renderItem={({ item }) => <Movie itemData={item} navigation={navigation} />}
                        keyExtractor={item => item.id}
                    />
                </View>

            </Modal>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginLeft: 5
    },

    headerText: {
        fontSize: 25,
        color: 'black',
        letterSpacing: 1,
        marginBottom: 30,
        textAlign: 'center'
    },
    favoriteBtn: {
        fontSize: 35,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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


export default connect(mapStateToProps)(FavoritesModal);