/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style = {[styles.item , styles.itemOne]}>
            <Text style = {styles.itemText}>
                1
            </Text>
        </View>
          <View style = {[styles.item , styles.itemOne]}>
              <Text style = {styles.itemText}>
                  2
              </Text>
          </View>
          <View style = {[styles.item , styles.itemOne]}>
              <Text style = {styles.itemText}>
                  3
              </Text>
          </View>


      </View>
    );
  }
}

let styles = StyleSheet.create({
    item:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#6435c9',
        margin:6,
    },
    itemOne:{

    },
    itemTwo:{

    },
    itemThree:{

    },
    itemText:{
        fontSize:33,
        fontFamily:'Helvetica Neue',
        fontWeight:'200',
        color:'#6435c9',
        padding:30,
    },
    container:{
      backgroundColor:'#eae7ff',
        flex:1,
        paddingTop:23,
    },
});

