import React from 'react'
import { View, Text } from 'react-native'

const MovieCreditsItem = (props) => {
    return (
        <View style={styles.container}>
            <View
                style={styles.titleContainer}
            >
                <Text style={styles.titleText}>
                    {props.title}
                </Text>
            </View>
            
            <Text style={styles.detailText}>
                {props.detail}
            </Text>
        </View>
    )
}

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'stretch',
        borderWidth: 0.5,
        borderColor: '#bbbbbb',
    },
    titleContainer: {
        flex: 4,
        backgroundColor: '#cccccc',
        flexDirection: 'row'
    },
    titleText: {
        padding: 10,
        alignSelf: 'center',
    },
    detailText: {
        flex: 6,
        padding: 10,
        alignSelf: 'center'
    }
}

export default MovieCreditsItem
