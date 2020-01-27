import React from 'react';
import { View, Image,StyleSheet,Dimensions,Text,TouchableOpacity,StatusBar, ScrollView, Picker,TouchableWithoutFeedback,Keyboard} from 'react-native';
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


class Bvn extends React.Component {
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
           <View style={[styles.container]}>
            
            <ScrollView showsVerticalScrollIndicator={false}>
               <View style={[styles.custom2, styles.row]}>
                    <SvgXml xml={Svg.backNav}/>
                    <View style={{flex: 1}}>
                         <Text style={[styles.navText]}>Step 2 of 5</Text>
                    </View>
               </View>


               <View style={[styles.mt3]}>
                <SvgXml xml={Svg.step2}/>
             </View>

               <View>
                   <Text style={[styles.primaryText, styles.bold, styles.h0, styles.clearFix]}>Enter Bvn</Text>
                    <Text style={[styles.formText, styles.regular,styles.customMargin]}>Provide your bank verification{'\n'}number below.</Text>
               </View>
                    
               <View>

                <View style={[styles.mv1]}></View>


                <View style={[styles.mv1]}>
                      <SvgXml xml={Svg.lock} style={[styles.formicon]}/>
                      <Textbox title="Bvn" width="0.85" keyboardType = 'numeric'></Textbox>
                     
                </View>

                <Text style={[styles.XsmallFont, styles.opacity, styles.regular]}>
                            We’re mandated by CBN to keep your BVN and other vital information highly secured and confidential. Thus, you have nothing to worry about.
                      </Text>

            </View>
            </ScrollView>

            <View style={[styles.end,styles.center]}>
                    <Button style={[styles.primaryBg, styles.center, styles.Btnwidth,styles.commonMargin]} onPress={()=> navigate('Employment')}>
                        <Text style={[styles.whiteText, styles.meduim]}>NEXT</Text>
                    </Button>
                    <View style={[styles.row]}>
                    <Text style={[styles.center, styles.secondaryText, styles.mb, styles.opacity2, styles.fontSmall]}>Forgot BVN? </Text>
                    <Text style={[styles.center, styles.secondaryText, styles.mb, styles.fontSmall]}>Dial *565*0# </Text>

                    </View>
            </View>
                
           </View>

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


export default Bvn;