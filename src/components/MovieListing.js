import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import commonStyles from './common/styles'
import { fetchMovieListing } from '../actions'
import MovieListingItem from './MovieListingItem'

class MovieListing extends Component {

    static navigationOptions = {
        drawerLabel: 'Movies',
        title: 'Movie Listing',
    }

    componentWillMount() {
        this.props.fetchMovieListing()
    }

    render() {
        console.log(this.props.moviesList)
        return (
            <FlatList
                numColumns={2}
                style={commonStyles.container}
                data={this.props.moviesList}
                renderItem={({ item }) => {
                    return (
                        <MovieListingItem
                            movie={item}
                            style={styles.movieListingItem}
                            onItemPress={() => {
                                this.props.navigation.navigate('MovieDetails', {
                                movie: item,
                                title: 'Movie Details'
                            })
                        }}
                        />
                    )
                }}
                onEndReached={() => this.props.fetchMovieListing(this.props.page + 1)}
                refreshing={false}
                onRefresh={() => this.props.fetchMovieListing(1)}
            />
        )
    }
}

const styles = {
    movieListingItem: {
        width: '50%',
        aspectRatio: 2 / 3,
    }
}

const mapStateToProps = (state) => {
    const { moviesList, page } = state.movieListing
    return { moviesList, page }
}

export default connect(mapStateToProps, { fetchMovieListing })(MovieListing)
