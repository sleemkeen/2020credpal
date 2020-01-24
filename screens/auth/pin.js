import React from 'react';
import { View, Image,StyleSheet,Dimensions,Text,TouchableOpacity,StatusBar, ScrollView} from 'react-native';
import { Button } from 'native-base';
import {SvgXml, inlineStyles} from 'react-native-svg';
import styles from '../../styles';
import {Svg} from "../../controllers/svg";
import { SafeAreaProvider } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');
var FloatingLabel = require('react-native-floating-labels');
import Textbox from '../../controllers/input/Textbox'

import { CheckBox } from 'react-native-elements';
import OTPInputView from '@twotalltotems/react-native-otp-input'


class Pin extends React.Component {
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
        <ScrollView style={[styles.primaryBg]}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />

          <View style={[styles.container, styles.loginMargin]}>
                <Text style={[styles.h0, styles.whiteText, styles.bold, styles.commonMargin]}>Hello Daniel</Text>
                <Text style={[styles.whiteText, ]}>Enter your PIN to sign in.</Text>


                <View style={{marginTop: '30%',}}>
                        <View>
                                <OTPInputView
                                    style={{width: '80%', height: 100, alignSelf: 'center'}}
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
                        </View>
                     
                    

                        <View style={[styles.center, styles.mv5]}>
                            
                             <View style={[styles.row]}>
                                <Text style={[styles.textCenter, styles.whiteText, styles.regular, styles.smallText]}>Forgot password? </Text>
                                <Text style={[styles.whiteText, styles.bold, styles.smallFont]}>Reset now</Text>
                            </View>
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
        color:'#fff',
        padding:0,
        fontSize:45,
        fontFamily: 'SFUIText-Regular'

       
      },
    
      underlineStyleHighLighted: {
        borderColor: "#fff",
      },
  
  });


export default Pin;