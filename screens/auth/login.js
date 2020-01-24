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


class Login extends React.Component {
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
                <Text style={[styles.h0, styles.whiteText, styles.bold, styles.commonMargin]}>Welcome back</Text>
                <Text style={[styles.whiteText, ]}>Sign in to your account.</Text>


                <View>
                        <View style={{marginTop: 16}}>
                                    <SvgXml xml={Svg.whiteEmail} style={[styles.formicon]}/>
                                    <Textbox title="Email" width="0.85" theme="light"></Textbox>
                        </View>
                        <View style={{marginTop: 16}}>
                                    <SvgXml xml={Svg.whitePassword} style={[styles.formicon]}/>
                                    <Textbox title="Password" width="0.85" theme="light"></Textbox>
                                    <SvgXml xml={Svg.whiteSecured} style={[styles.formiconRight]}/>

                        </View>

                        <View style={Inlinestyles.checkbox}>
                            <CheckBox
                                    style={Inlinestyles.checkBox}
                                    checked={this.state.checked}
                                    checkedColor='#222222'
                                    containerStyle={[styles.noPadding]}
                                    checkedIcon={<SvgXml xml={Svg.whitecheckbox}/> }
                                    onPress={() => this.setState({checked: !this.state.checked})}/>
                                <View style={[styles.center, styles.row]}>
                                    <Text style={[styles.regular, styles.whiteText, styles.checkboxText,styles.textCenter]}>Keep me signed in</Text>
                                 </View>
                        </View>

                        <View style={[styles.center, styles.mv5]}>
                            <Button style={[styles.whiteBg, styles.center, styles.Btnwidth,styles.commonMargin]} onPress={()=> navigate('Signup')}>
                                        <Text style={[styles.primaryText, styles.meduim]}>SIGN IN</Text>
                             </Button>
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
       
      },
    
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
  
  });


export default Login;