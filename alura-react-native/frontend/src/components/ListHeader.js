import React from 'react';
import { Text, Image, StyleSheet, View} from 'react-native';

export default function ListHeader({userName, userPhoto}){
    return(
        <View style={styles.block}>
            <Image
                style={styles.pics}
                source={{ uri: userPhoto }}
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

    stories: {
        borderColor: "orange",
        borderWidth: 3
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