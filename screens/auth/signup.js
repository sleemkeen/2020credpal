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


class Signup extends React.Component {
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
                   <Text style={[styles.primaryText, styles.bold, styles.h0, styles.clearFix]}>Sign Up</Text>
                   <Text style={[styles.formText, styles.regular,styles.customMargin]}>Tell us about yourself.</Text>
               </View>
                    
               <View>

                <View style={[styles.smallhight]}></View>


                <View style={[styles.row]}>
                        
                    <View style={styles.textInput}>
                            <SvgXml xml={Svg.user} style={[styles.formicon]}/>
                            <Textbox title="First Name" width="0.4"></Textbox>
                        </View>
                        <View style={styles.textInput}>
                            <SvgXml xml={Svg.user} style={[styles.formicon]}/>
                            <Textbox title="Last Name" width="0.4"></Textbox>
                      </View>
                    
                </View>
                <View style={{marginTop: 16}}>
                      <SvgXml xml={Svg.email} style={[styles.formicon]}/>
                      <Textbox title="Email" width="0.85"></Textbox>
                </View>
                <View style={{marginTop: 16}}>
                      <SvgXml xml={Svg.phone} style={[styles.formicon]}/>
                      <Textbox title="Phone Number" width="0.85"></Textbox>
                </View>
                <View style={{marginTop: 16}}>
                      <SvgXml xml={Svg.password} style={[styles.formicon]}/>
                      <Textbox title="Password" width="0.85"></Textbox>
                      <SvgXml xml={Svg.unsecure} style={[styles.formiconRight]}/>

                </View>

                <View style={{marginTop: 16}}>
                      <SvgXml xml={Svg.ref} style={[styles.formicon]}/>
                      <Textbox title="Invite code (Optional)" width="0.85"></Textbox>
                </View>

               <View style={Inlinestyles.checkbox}>
               <CheckBox
                    style={Inlinestyles.checkBox}
                    checked={this.state.checked}
                    checkedColor='#222222'
                    containerStyle={[styles.noPadding]}
                    checkedIcon={<SvgXml xml={Svg.checked}/> }
                    onPress={() => this.setState({checked: !this.state.checked})}/>
                  <View style={[styles.center, styles.row]}>
                    <Text style={[styles.regular, styles.secondaryText, styles.checkboxText,styles.textCenter]}>I agree to the</Text>
                    <Text style={[styles.bold, styles.secondaryText, styles.checkboxText,styles.textCenter, styles.underline]}> Terms of Use</Text>
                    <Text style={[styles.regular, styles.secondaryText, styles.checkboxText,styles.textCenter]}> and </Text>
                    <Text style={[styles.bold, styles.secondaryText, styles.checkboxText,styles.textCenter, styles.underline]}> Privacy Policy</Text>

                  </View>
               </View>

               </View>
                

           </View>
           <View style={Inlinestyles.button}>
                    <Button style={[styles.primaryBg, styles.center, styles.Btnwidth,styles.commonMargin]} onPress={()=> navigate('Verify')}>
                        <Text style={[styles.whiteText, styles.meduim]}>SIGN UP</Text>
                    </Button>
                    <View style={[styles.row]}>
                      <Text style={[styles.textCenter, styles.secondaryText, styles.regular, styles.smallText]}>Already have an account? </Text>
                      <Text style={[styles.secondaryText, styles.bold, styles.smallFont]}> Sign In</Text>
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
    button: {
      marginTop:'20%', 
      alignItems:'center'
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
    }
  
  });


export default Signup;