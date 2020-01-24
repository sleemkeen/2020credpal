import React, { Component } from 'react';
import {Dimensions,StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
var FloatingLabel = require('react-native-floating-labels');

export default class Textbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        myDynamicColor: '#222222',
        DynamicOpacity: 0.4,
        DynamicLabel:'#222222',
        InputColor:'#222222',
        whiteTheme: '#fff'
    };
  }


  onFocus = (e) => {
    // console.log('check');
    this.setState({myDynamicColor : '#274FED'});
    this.setState({DynamicOpacity : 1.0});
    this.setState({DynamicLabel : '#274FED'});


}

onBlur = (e) => {
  
    this.setState({myDynamicColor : '#222222'});
    this.setState({DynamicOpacity : 1.0});
    this.setState({DynamicLabel : '#222222'});

}


  render() {
    return (
        <FloatingLabel 
            labelStyle={{color: this.props.theme ? this.state.whiteTheme : this.state.DynamicLabel}}
            inputStyle={[Inlinestyles.input, {color: this.state.InputColor}]}
            style={[Inlinestyles.formInput, {borderColor: this.state.myDynamicColor, opacity: this.state.DynamicOpacity, width: this.props.width * width,}]}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            keyboardType={this.props.keyboardType}
            >{this.props.title}
        </FloatingLabel>
    );
  }
}

const Inlinestyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: 'white',
  },
  labelInput: {
    
  },
  formInput: {    
    borderBottomWidth: 1.0, 
    marginRight: 20,
    borderBottomWidth:0,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor:'rgba(158, 150, 150, .5)'
  },
  textInput:{
      position: 'relative',
      
  },

});

