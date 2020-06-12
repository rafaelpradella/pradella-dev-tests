/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react'
import {Dimensions, Text, Image, ScrollView, StyleSheet, FlatList, unstable_enableLogBox} from 'react-native'
import ListHeader from './src/components/ListHeader';

const windowWidth = Dimensions.get('screen').width;

const Infos = [
  { id: 1, user: "ricardo.123", hasStories: true },
  { id: 2, user: "paradis.3326"},
  { id: 3, user: "aninha_oficial"}
]


const BlockPhoto = ({order}) => {
  return (
    <Image
        style={styles.photo}
        source={{
          uri: `https://source.unsplash.com/random/300x300?i=${order}`,
        }}
    />
  )
}

const App =  () => {
  return (
    <ScrollView style={styles.block}>
      <FlatList
        data={Infos}
        keyExtractor= {item => item.id.toString()}
        renderItem={({item, index}) => (
          <Fragment>
            <ListHeader userName={item.user} order={index.toString()} hasStories={!!item.hasStories} />
            <BlockPhoto order={index.toString()} />
          </Fragment>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  block:{
    padding: 15,
    marginBottom: 5
  },
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 50
  },

  photo: {
    width: windowWidth,
    height: windowWidth,
    marginBottom: 40,
    borderRadius: 6
  },
});

export default App;
