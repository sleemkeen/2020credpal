import React from 'react';
import { View, Image,StyleSheet,Dimensions,Text,TouchableOpacity,StatusBar,TouchableWithoutFeedback, ScrollView, Picker, Keyboard} from 'react-native';
import { Button } from 'native-base';
import {SvgXml, inlineStyles} from 'react-native-svg';
import styles from '../../styles';
import {Svg} from "../../controllers/svg";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Container, Header, Content, Form, Item, Label } from 'native-base';
const { width, height } = Dimensions.get('window');
var FloatingLabel = require('react-native-floating-labels');
import Textbox from '../../controllers/input/Textbox';
import Select from '../../controllers/input/Select';


class CompleteProfile extends React.Component {
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

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView style={{flex: 1}} alwaysBounceVertical={true} showsVerticalScrollIndicator={false}>
           <View style={[styles.container]}>
            
           <View style={[styles.custom2, styles.row]}>
                    <SvgXml xml={Svg.backNav}/>
                    <View style={{flex: 1}}>
                         <Text style={[styles.navText]}>Step 2 of 5</Text>
                    </View>
               </View>

               <View style={[styles.mt3]}>
                <SvgXml xml={Svg.step1}/>
             </View>

               <View>
                   <Text style={[styles.primaryText, styles.bold, styles.h0, styles.clearFix]}>Complete profile</Text>
                   <Text style={[styles.formText, styles.regular,styles.customMargin]}>Tell us even more about yourself and ensure that all details provided herein are valid and up to date.</Text>
               </View>
                    
               <View>

                <View style={[styles.mv4]}></View>


                <View style={[styles.row, styles.mv1]}>
                        
                    <View style={styles.textInput, styles.mr3}>
                            <Select placeholder="Date of Birth" icon={Svg.dob} size="sm"></Select>
                            
                        </View>
                        <View style={styles.textInput}>
                            <Select placeholder="Gender" icon={Svg.gender} size="sm"></Select>
                      </View>
                    
                </View>
                <View style={[styles.mv1]}>
                      <SvgXml xml={Svg.address} style={[styles.formicon]}/>
                      <Textbox title="Residential Address" width="0.85"></Textbox>
                </View>

                <View style={[styles.row, styles.mv1]}>
                        
                        <View style={styles.textInput}>
                                <SvgXml xml={Svg.education} style={[styles.formicon]}/>
                                <Textbox title="Educational Level" width="0.4"></Textbox>
                            </View>
                            <View style={styles.textInput}>
                                <SvgXml xml={Svg.nationality} style={[styles.formicon]}/>
                                <Textbox title="Nationality" width="0.4"></Textbox>
                          </View>
                        
                 </View>

                 <View style={[styles.row, styles.mv1]}>
                        
                        <View style={styles.textInput}>
                                <SvgXml xml={Svg.employed} style={[styles.formicon]}/>
                                <Textbox title="Employed" width="0.4"></Textbox>
                            </View>
                            <View style={styles.textInput}>
                                <SvgXml xml={Svg.maritalStatus} style={[styles.formicon]}/>
                                <Textbox title="Marital Status" width="0.4"></Textbox>
                          </View>
                        
                    </View>
               
                    <View style={[styles.row, styles.mv1]}>
                        
                        <View style={styles.textInput}>
                                <SvgXml xml={Svg.nextOfKin} style={[styles.formicon]}/>
                                <Textbox title="Next of Kin’s Name" width="0.4"></Textbox>
                            </View>
                            <View style={styles.textInput}>
                                <SvgXml xml={Svg.relationship} style={[styles.formicon]}/>
                                <Textbox title="Relationship" width="0.4"></Textbox>
                          </View>
                        
                    </View>

                    <View style={[styles.row, styles.mv1]}>
                        
                        <View style={styles.textInput}>
                                <SvgXml xml={Svg.address} style={[styles.formicon]}/>
                                <Textbox title="Next of Kin’s Address" width="0.4"></Textbox>
                            </View>
                            <View style={styles.textInput}>
                                <SvgXml xml={Svg.contact} style={[styles.formicon]}/>
                                <Textbox title="Contact Number" width="0.4"></Textbox>
                          </View>
                        
                    </View>


               </View>

           </View>
           <View style={Inlinestyles.button}>
                    <Button style={[styles.primaryBg, styles.center, styles.Btnwidth,styles.commonMargin]} onPress={()=> navigate('Bvn')}>
                        <Text style={[styles.whiteText, styles.meduim]}>NEXT</Text>
                    </Button>
                    <View style={[styles.row]}>
                    <SvgXml xml={Svg.lock} style={[styles.mh1]}/>
                    <Text style={[styles.center, styles.secondaryText, styles.mb, styles.opacity2]}>Your data is secure</Text>
                    </View>
                   
            </View>
        </ScrollView>

        </TouchableWithoutFeedback>
      )
      
    }
   
};
const Inlinestyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 65,
      backgroundColor: 'white',
    },

    borderless:{
      borderBottomColor:'rgba(158, 150, 150, .2)',
      borderBottomWidth:1,
      width:'40%',
      position: 'absolute',
      top: 50,
      
    },
    button: {
      marginTop:'15%', 
      alignItems:'center',
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


export default CompleteProfile;