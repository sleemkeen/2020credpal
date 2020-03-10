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


class Success extends React.Component {
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
           <View style={[styles.container]}>
               <View style={[styles.m2, styles.row, styles.p5]}>
                    <SvgXml xml={Svg.back}/>
               </View>

               <View>
                   <Text style={[styles.whiteText, styles.bold, styles.h0, styles.clearFix, styles.textCenter]}>Success!</Text>
                    <Text style={[styles.whiteText, styles.regular,styles.customMargin, styles.p, styles.textCenter]}>
                        We have received and {'\n'}acknowledged your verification {'\n'}entry. You will be notified upon {'\n'}approval of you verification.
                    </Text>

               </View>
                    
               <View style={[styles.mv6, styles.flex, styles.center]}>
                    <SvgXml xml={Svg.check}/>
            
               </View>

               <View style={[styles.flex, styles.mt5, styles.ph3]}>
                   <Button style={[styles.whiteBg, styles.center,Inlinestyles.elevation ]} onPress={()=> navigate('Drawer')}>
                       <Text style={[styles.primaryText, styles.meduim]}>GO TO DASHBOARD</Text>
                   </Button>
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
    elevation: {
      elevation:0
    },
    
  
  });


export default Success;