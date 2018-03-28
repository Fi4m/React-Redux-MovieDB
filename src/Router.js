// import React from 'react'
import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation'
import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import MovieListing from './components/MovieListing'
import TvListing from './components/TvListing'
import MovieDetails from './components/MovieDetails'

const menuButtonImage = require('./Images/menu.png')

const drawer = DrawerNavigator({      
    MovieListing: {
        screen: MovieListing
    },
    TvListing: {
        screen: TvListing
    }
}, {
    navigationOptions: ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                title='Menu'
                onPress={() => navigation.navigate('DrawerToggle')}
                style={{ marginLeft: 11 }}
            >
                <Image
                    source={menuButtonImage}
                    style={{
                        width: 22,
                        height: 22,
                    }}
                />
            </TouchableOpacity>
    })
})

export default StackNavigator({
    Root: {
      screen: drawer,
    },
    MovieDetails: {
        screen: MovieDetails,
    }
})
