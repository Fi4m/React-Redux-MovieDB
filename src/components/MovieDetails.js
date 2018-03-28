import React, { Component } from 'react'
import { View, ScrollView, Image, Text } from 'react-native'
import StarRating from 'react-native-stars'
import { connect } from 'react-redux'
import commonStyles from './common/styles'
import { fetchMovieCredits } from '../actions'
import MovieCreditsItem from './MovieCreditsItem'

class MovieDetails extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    })

    // constructor(props) {
    //     super(props)
    // }

    componentWillMount() {
        const { id } = this.props.navigation.state.params.movie
        this.props.fetchMovieCredits(id)
    }

    renderCast() {
        return (
            this.props.cast.map(crewMember => {
                return (
                    <MovieCreditsItem//
                        title={crewMember.character}
                        detail={crewMember.name}
                    />
                )
            })
        )
    }

    renderCrew() {
        return (
            this.props.crew.map(crewMember => {
                return (
                    <MovieCreditsItem//
                        title={crewMember.job}
                        detail={crewMember.name}
                    />
                )
            })
        )
    }

    render() {
        // this.navigationOptions.title = 'i am here'
        const { movie } = this.props.navigation.state.params
        return (
            <View style={commonStyles.container}>

            <Image 
                resizeMode='stretch'
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={[commonStyles.imageStyle, styles.backgroundImage]}
            />

            <ScrollView
                style={styles.scrollView}
            >
                <Image
                    resizeMode='stretch'
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
                    style={styles.headerImage}

                />

                <Text style={styles.headerText}>
                    {movie.original_title || movie.original_name}
                    <Text style={styles.releaseDateText}>
                        {'\n'}{movie.release_date || movie.first_air_date}
                    </Text>
                </Text>

                <View style={styles.starRatingContainer}>
                    <StarRating
                        half
                        rating={movie.vote_average}
                // update={(val)=>{this.setState({stars: val})}}
                        spacing={4}
                        starSize={20}
                        count={10}
                        // fullStar={require('../Images/')}
                        // emptyStar={require('../Images/')}
                        // halfStar={require('../Images/')}
                    />
                    <Text>{movie.vote_average}</Text>
                </View>
                <Text style={styles.overviewText}>{movie.overview}</Text>

                <Text style={styles.tableHeaderText}>Cast</Text>
                <View style={{ margin: 20, marginTop: 0 }}>
                    {this.renderCast()}
                </View>

                <Text style={styles.tableHeaderText}>Crew</Text>
                <View style={{ margin: 20, marginTop: 0 }}>
                    {this.renderCrew()}
                </View>

            </ScrollView>

            </View>
        )
    }
}

const styles = {
    scrollView: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
    },
    backgroundImage: {
        opacity: 0.1
    },
    headerImage: {
        width: '100%',
        aspectRatio: 16 / 9
    },
    headerText: {
        padding: 12,
        fontSize: 20,
        fontWeight: 'bold'
    },
    releaseDateText: {
        padding: 12,
        fontSize: 14,
        fontWeight: 'normal'
    },
    starRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12
    },
    overviewText: {
        padding: 12,
    },
    tableHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 30
    }
}

const mapStateToProps = (state) => {
    const { cast, crew } = state.movieDetails
    return {
        cast,
        crew
    }
}

export default connect(mapStateToProps, { fetchMovieCredits })(MovieDetails)
