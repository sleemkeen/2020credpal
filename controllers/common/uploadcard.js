import React, { Component } from 'react';
import {Dimensions,StyleSheet, View,Picker,TouchableOpacity,Text } from 'react-native';
const { width } = Dimensions.get('window');
import {SvgXml, inlineStyles} from 'react-native-svg';
import {Svg} from "../svg";
import styles from '../../styles';
import Modal from "react-native-modal";



export default class Uploadcard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        language : '',
      }
  }

  render() {

    return (
        <View style={pickerSelectStyles.card}>
          <View>
            <SvgXml xml={this.props.icon}/>
          </View>
          <View style={{marginHorizontal: 20, alignSelf: 'center',}}>
             <Text style={pickerSelectStyles.description}>{this.props.title}</Text>
          </View>
          <View style={[styles.flex, styles.center]}>
             <SvgXml xml={Svg.uploadIcon} style={{alignSelf:'flex-end'}}/>
          </View>
        </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
        card:{
            backgroundColor: '#F4F6FE',
            padding:20,
            borderRadius:10,
            flexDirection:'row',
            flex:1
        },
        description:{
            fontSize:10,
            color:'#222222',
            opacity:0.5
            

        }
  });
  

