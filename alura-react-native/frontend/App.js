/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment, useState, useEffect } from 'react'
import {StyleSheet, FlatList, Text} from 'react-native'
import ListHeader from './src/components/ListHeader';
import PostPhoto from './src/components/PostPhoto';

const App =  () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async() => {
      const postsRequest = await fetch("http://10.0.2.2:3030/feed")
      const postsObject = await postsRequest.json()
      setPosts(postsObject)
    }
    getPosts()
  }, [])

  return (
    <Fragment>
        <FlatList
          style={styles.block}
          data={posts}
          keyExtractor= {item => item.id.toString()}
          renderItem={( {item} ) => (
            <Fragment>
              <ListHeader userName={item.userName} userPhoto={item.userURL} />
              <PostPhoto photoURL={item.url} />
            </Fragment>
          )}
        />
    </Fragment>
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
});

export default App
