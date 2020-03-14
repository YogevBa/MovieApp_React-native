import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { setFavoriteReq } from '../components/redux/actions';
import { connect } from 'react-redux'


class MovieScreen extends Component {

    componentDidMount() {
        console.log(this.props.favorites);

    }

    setFavorites = (type, movie) => {
        let checkExisted = this.props.favorites.filter(itm => itm.id == movie.id)
        if (type === 'add' && checkExisted.length === 0) {
            this.props.setFavorite({ title: movie.title, id: movie.id }, 'add')

        }
        else {
            let newMovies = this.props.favorites.filter(itm => itm.id !== movie.id)
            if (type === 'remove') {
                console.log(newMovies);
                this.props.setFavorite(newMovies, 'remove')
            }
        }
    }

    renderBtnsCondition = (favorites, navigation) => {
        const checkFavorited = favorites.filter(movie => movie.id == navigation.state.params.id)
        if (checkFavorited.length > 0) {
            return (
                
                    <TouchableOpacity style={styles.removeBtn} onPress={() => this.setFavorites('remove', navigation.state.params)
                    }>
                        <Text style={{ fontSize: 18, color:'white' }}>Remove From Favorites ?
               </Text>
                    </TouchableOpacity>
               
            )
        } else {
            return (
              
                    <TouchableOpacity style={styles.addBtn} onPress={() => this.setFavorites('add', navigation.state.params)}>
                        <Text style={{ fontSize: 18,color:'white' }}>Add To Favorites ?</Text>
                    </TouchableOpacity>
              
            )
        }
    }

    render() {
        const { navigation, favorites } = this.props
        console.log(navigation.state.params);



        return (
            <View style={styles.movieScreenWrapper}>
                <View style={styles.btnsWrapper}>
                    {this.renderBtnsCondition(favorites, navigation)}
                </View>
                <View style={styles.movieContainer}>
                    <Text style={styles.movieTitle}>{navigation.getParam('title')}</Text>
                    <View>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{ uri: navigation.getParam('poster_path') }}
                        />
                    </View>
                    <Text style={styles.movieDesc}>{navigation.getParam('overview')}</Text>
                    <Text style={styles.movieRating}>Rating: {navigation.getParam('popularity')}</Text>
                </View>

            </View >
        )
    }
}




const styles = StyleSheet.create({
    movieScreenWrapper: {
        display: 'flex',
        width: '100%',
        alignItems: 'center'
    },
    btnsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '25%',

    },
    addBtn: {
        backgroundColor: '#3b5998',
        borderRadius: 10,
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    removeBtn: {
        backgroundColor: 'red',
        
        borderRadius: 10,
        width: '55%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    movieContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        height: '70%',
        elevation: 20,
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#00BCFF'
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 2,
        textAlign: 'center',
        color: '#5B4939',
        marginVertical: 5

    },
    movieDesc: {
        padding: 5,
        textAlign: 'center',
        color: '#5B4939',
        lineHeight: 20,
        marginVertical: 5
    },
    movieRating: {
        color: 'gold',
        fontWeight: 'bold',
        fontSize: 18
    }
});

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFavorite: (movie, actionType) => dispatch(setFavoriteReq(movie, actionType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);