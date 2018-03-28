import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import commonStyles from './common/styles'
import { fetchTvListing } from '../actions'
import TvListingItem from './MovieListingItem'

class TvListing extends Component {

    static navigationOptions = {
        drawerLabel: 'Tv Shows',
        title: 'Tv Listing',
    }

    componentWillMount() {
        this.props.fetchTvListing()
    }

    render() {
        return (
            <FlatList
                numColumns={2}
                style={commonStyles.container}
                data={this.props.tvList}
                renderItem={({ item }) => {
                    return (
                        <TvListingItem
                            movie={item}
                            style={styles.tvListingItem}
                            onItemPress={() => {
                                this.props.navigation.navigate('MovieDetails', {
                                movie: item,
                                title: 'Tv Show Details'
                            })
                        }}
                        />
                    )
                }}
                onEndReached={() => this.props.fetchTvListing(this.props.page + 1)}
                refreshing={false}
                onRefresh={() => this.props.fetchTvListing(1)}
            />
        )
    }
}

const styles = {
    tvListingItem: {
        width: '50%',
        aspectRatio: 2 / 3,
    }
}

const mapStateToProps = (state) => {
    const { tvList, page } = state.tvListing
    return { tvList, page }
}

export default connect(mapStateToProps, { fetchTvListing })(TvListing)
