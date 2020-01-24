import React, { Component } from 'react';
import {Dimensions,StyleSheet, View,Picker,TouchableOpacity,Text } from 'react-native';
const { width } = Dimensions.get('window');
import {SvgXml, inlineStyles} from 'react-native-svg';
import {Svg} from "../../controllers/svg";
import styles from '../../styles';
import Modal from "react-native-modal";



export default class Select extends Component {
  constructor(props) {
    super(props);
      this.state = {
        language : '',
        isModalVisible: false
      }
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });  
  };

  renderSmall() {
    
    return (
      <TouchableOpacity style={[pickerSelectStyles.borderless]}>
          <View>
            <SvgXml xml={this.props.icon} style={[pickerSelectStyles.formicon]}/>
              <Text style={[pickerSelectStyles.placeholder]}>{this.props.placeholder}</Text>
            <SvgXml xml={Svg.dropdown} style={[pickerSelectStyles.dropdown]}/>            
          </View>
      </TouchableOpacity>
    );
  }

  renderLarge(){

    return (
      
      <TouchableOpacity style={[pickerSelectStyles.borderless]}>
      <View>
        <SvgXml xml={this.props.icon} style={[pickerSelectStyles.formicon]}/>
          <Text style={[pickerSelectStyles.placeholder]}>{this.props.placeholder}</Text>
        <SvgXml xml={Svg.dropdown} style={[pickerSelectStyles.dropdown]}/>            
      </View>
    </TouchableOpacity>

    );

  }

  render() {

    return (
        <View style={pickerSelectStyles.position}>
          {this.props.size == 'sm' ? this.renderSmall() :  this.renderLarge()}
        </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderBottomColor:'rgba(158, 150, 150, .2)',
      borderBottomWidth: 1,
      borderColor: '#222222',
      color: 'black',
      width: 153
    },
 
    borderless:{
      borderBottomColor:'rgba(158, 150, 150, .2)',
      borderBottomWidth:1,
      width:160,
      // position: 'absolute',
      // top: 50,
      
    },
    position:{
        position: 'relative'
    },
    formicon:{
      position: 'absolute',
      bottom: 8,
    },
    dropdown:{
      position: 'absolute',
      left: 150,
      bottom: 10
    },
    placeholder:{
      position: 'absolute',
      bottom: 7,
      left:20,
      color:'#222222',
      opacity:0.4
    }
  });
  

