import React, { Fragment } from 'react';
import { Text, Image, StyleSheet, View} from 'react-native';

export default function ListHeader({userName, hasStories, order}){
    return(
        <View style={styles.block }>
            <Image
                style={styles.pics}
                source={{
                    uri: `https://source.unsplash.com/50x50/?profile&i=${order}`
                }}
            />
            <Text style={styles.title}>{userName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 10,
        marginBottom: 20
    },

    pics: {
        width: 30,
        height: 30,
        marginRight: 10,
        borderRadius: 100
    },

    title: {
      fontSize: 21,
      fontWeight: "bold"
    },
});