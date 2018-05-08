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
  View,
    Image,
    ListView,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        let movies = [
            {title:'1111'},
            {title:'2222'},
            {title:'3333'},
            {title:'4444'},
            {title:'5555'},
        ];

        let dataSource = new ListView.DataSource({
            rowHasChanged:(row1, row2) => row1 !== row2
        });

        this.state = {
            movies:dataSource.cloneWithRows(movies)
        };
    }


  render() {
    return (
      <View style={styles.container}>
        <ListView
            dataSource={this.state.movies}
            renderRow={
                aaa => <Text style={styles.itemText}>{aaa.title}</Text>
            }
        />
      </View>
    );
  }
}

class HeaderText extends React.Component{
    render() {
        return(
            <Text style = {styles.itemText}>
                {this.props.children}
            </Text>
        );
    }
}




let styles = StyleSheet.create({
    overlay:{
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems:'center',
    },
    overlayHeader:{
        fontSize:33,
        fontFamily:'Helvetica Neue',
        fontWeight:'200',
        color:'#eae7ff',
        padding:10,
    },
    overlaySubHead:{
        fontSize: 16,
        fontFamily:'Helvetica Neue',
        fontWeight:'200',
        color:'#eae7ff',
        padding:10,
        paddingTop:0,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    image:{
        width:99,
        height:138,
        margin:6
    },
    item:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#6435c9',
        margin:6,
        flex: 1,
    },
    itemOne:{
        // alignSelf: 'flex-start',
    },
    itemTwo:{
        alignSelf: 'flex-end',
    },
    itemThree:{
        // flex: 2,
    },
    itemText:{
        fontSize:33,
        fontFamily:'Helvetica Neue',
        fontWeight:'200',
        color:'#6435c9',
        padding:30,
    },
    container:{
        // justifyContent: 'center',
        // alignItems: 'flex-end',
        flexDirection: 'row',
      backgroundColor:'#eae7ff',
        flex:1,
        paddingTop:23,
    },
});

