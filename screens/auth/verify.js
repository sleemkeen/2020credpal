import React from 'react';
import { View, Image,StyleSheet,Dimensions,Text,TouchableOpacity,StatusBar, ScrollView} from 'react-native';
import { Button } from 'native-base';
import {SvgXml, inlineStyles} from 'react-native-svg';
import styles from '../../styles';
import {Svg} from "../../controllers/svg";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Container, Header, Content, Form, Item, Label } from 'native-base';
const { width, height } = Dimensions.get('window');
var FloatingLabel = require('react-native-floating-labels');
import Textbox from '../../controllers/input/Textbox'

import { CheckBox } from 'react-native-elements';
import OTPInputView from '@twotalltotems/react-native-otp-input'


class Verify extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        myDynamicColor: '#222222',
        DynamicOpacity: 0.5,
        DynamicLabel:'#222222',
        InputColor:'#222222',
        checked:true
    }
}

static navigationOptions = {
  header: null,
  swipeEnabled: true,
};
componentDidMount(){
}
onChangeCheck() {
  this.setState({ checked: !this.state.checked})
}


render() {
      var {navigate} = this.props.navigation;
      return(
        <ScrollView style={{flex: 1}}>
           <View style={[styles.container]}>
               <View style={[styles.m2, styles.row, styles.p5]}>
                    <SvgXml xml={Svg.back}/>
               </View>

               <View>
                   <Text style={[styles.primaryText, styles.bold, styles.h0, styles.clearFix]}>Verify Number </Text>
                   <Text style={[styles.formText, styles.regular,styles.customMargin, styles.p]}>Please enter the code sent to</Text>
                   <Text style={[styles.primaryText, styles.regular, styles.p]}>+234 708 188 8124</Text>
               </View>
                    
               <View style={[styles.mv2]}>

               <OTPInputView
                    style={{width: '80%', height: 100, alignSelf: 'center', fontSize:15}}
                    pinCount={4}
                    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    // onCodeChanged = {code => { this.setState({code})}}
                    autoFocusOnLoad
                    codeInputFieldStyle={Inlinestyles.underlineStyleBase}
                    codeInputHighlightStyle={Inlinestyles.underlineStyleHighLighted}
                    onCodeFilled = {(code => {
                      navigate('Account');
                    })}
                />

             <View style={[styles.row, styles.center, styles.mt2]}>
                <Text style={[styles.textCenter, styles.secondaryText, styles.regular, styles.smallText]}>Didn’t get the verification code? </Text>
                <Text style={[styles.secondaryText, styles.bold, styles.smallFont]}>Resend</Text>
              </View>



            
               </View>
         

           </View>
         
        </ScrollView>

      )
      
    }
   
};
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
      width: width * 0.4,
      
    },
    input: {
      borderWidth: 0,
      
    },
    textInput:{
        position: 'relative',
    },
    checkbox:{
      marginTop:35,
      flexDirection:'row',
      paddingLeft:0,
      margin:0
    },
    checkBox:{
      color:'red'
    },
    borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
         fontSize:45,
         padding:0,
        fontFamily: 'SFUIText-Regular'

       
      },
    
      underlineStyleHighLighted: {
        borderColor: "#274FED",
      },
  
  });


export default Verify;