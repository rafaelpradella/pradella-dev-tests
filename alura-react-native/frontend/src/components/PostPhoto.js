import React from "react"
import { Image, StyleSheet, Dimensions } from "react-native"

export default function PostPhoto({ photoURL }){
    return (
        <Image style={styles.photo} source={{ uri: photoURL }} />
    )
}

const windowWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    photo: {
        backgroundColor: "#eeeeee",
        width: windowWidth - 30,
        height: windowWidth - 30,
        marginBottom: 40,
        borderRadius: 6  
    },
})