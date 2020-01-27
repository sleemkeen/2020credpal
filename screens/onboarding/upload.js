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
import UploadCard from '../../controllers/common/uploadcard'


class Upload extends React.Component {
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
          <View style={[styles.flex]}>
        <ScrollView style={{flex: 1}} alwaysBounceVertical={true} showsVerticalScrollIndicator={false}>
           <View style={[styles.container]}>
            
           <View style={[styles.custom2, styles.row]}>
                    <SvgXml xml={Svg.backNav}/>
                    <View style={{flex: 1}}>
                         <Text style={[styles.navText]}>Step 3 of 5</Text>
                    </View>
               </View>

               <View style={[styles.mt3]}>
                <SvgXml xml={Svg.step4}/>
             </View>

               <View>
                   <Text style={[styles.primaryText, styles.bold, styles.h0, styles.clearFix]}>Documents upload</Text>
                    <Text style={[styles.formText, styles.regular,styles.customMargin]}>Kindly upload below the required documents {'\n'}for the verification process.</Text>
               </View>
                    
               <View>

                <View style={[styles.mv1]}></View>


                <View style={[styles.mv1]}>
                      <SvgXml xml={Svg.case} style={[styles.formicon]}/>
                      <Textbox title="Current Employer" width="0.85"></Textbox>
                </View>

                <View>
                    <View style={[styles.row, styles.mv2]}>
                      <SvgXml xml={Svg.case} style={{marginRight: 5,alignSelf: 'center',}}/>
                      <View style={[styles.flex]}>
                        <Text style={[styles.center]}>Upload ID Card</Text>
                      </View>
                    </View>

                    <UploadCard icon={Svg.uploadCard} title={`".jpg" and ".png" file \n formats are supported.`}></UploadCard>
                </View>

                 <View style={[styles.mt2]}>
                    <View style={[styles.row, styles.mv2]}>
                      <SvgXml xml={Svg.case} style={{marginRight: 5,alignSelf: 'center',}}/>
                      <View style={[styles.flex]}>
                        <Text style={[styles.center]}>Upload Bank Statement</Text>
                      </View>
                    </View>

                    <UploadCard icon={Svg.bank} title={`Only “.pdf” file formats\nare supported.`}></UploadCard>
                </View>



               
               </View>

           </View>
           
        </ScrollView>

        <View style={[styles.end, styles.center]}>
                    <Button style={[styles.primaryBg, styles.center, styles.Btnwidth,styles.commonMargin]} onPress={()=> navigate('Addcard')}>
                        <Text style={[styles.whiteText, styles.meduim]}>NEXT</Text>
                    </Button>
                    <View style={[styles.row]}>
                    <Text style={[styles.center, styles.secondaryText, styles.mb, styles.opacity2, styles.fontSmall]}>You’re almost there!</Text>

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
    label:{
      fontFamily: 'SFUIText-Regular',
      fontSize: 13,
      color:'#222222'
    }

   
  
  });


export default Upload;