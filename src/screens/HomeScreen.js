import React, { Component } from "react";
import {
    FlatList,
    StyleSheet,
    View
} from 'react-native';
import { getMoviesReq } from '../components/redux/actions';
import Movie from '../components/Movie'
import { connect } from 'react-redux'

class HomeScreen extends Component {
    componentDidMount() {
        this.props.getMovies()
    }

    render() {
        const { movies, navigation } = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    data={movies}
                    renderItem={({ item }) => <Movie itemData={item} navigation={navigation} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%'
    }
});

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(getMoviesReq())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);