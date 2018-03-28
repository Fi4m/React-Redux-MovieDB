import React from 'react'
import { TouchableWithoutFeedback, View, Image } from 'react-native'
import commonStyles from './common/styles'

const MovieListingItem = ({ movie, style, onItemPress }) => {
    // console.log(movie)
    return (
        <TouchableWithoutFeedback
            onPress={onItemPress}
        >
            <View style={style}>
                <Image
                    resizeMode='stretch'
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    }}
                    style={commonStyles.imageStyle}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

// const styles = {
    
// }

export default MovieListingItem
