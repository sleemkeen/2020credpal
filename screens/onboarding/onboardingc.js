import React from 'react';
import { View, Image,StyleSheet,Dimensions,Text,TouchableOpacity} from 'react-native';
import { Button } from 'native-base';
import {SvgXml} from 'react-native-svg';
import styles from '../../styles';
import {Svg} from "../../controllers/svg";
import { SafeAreaProvider } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');

class Onboarding extends React.Component {
  constructor(props){
    super(props);
    this.state ={

    }
}

static navigationOptions = {
  header: null,
  swipeEnabled: true,
};
componentDidMount(){
}


render() {
      var {navigate} = this.props.navigation;
      return(
        <SafeAreaProvider style={{flex: 1}}>
        <View style={[styles.container]}>
            <View>
                <View style={[styles.row, styles.m2]}>
                  <View style={[styles.right]}>
                    <TouchableOpacity style={[styles.btn]}>
                        <Text style={[styles.darkText, styles.regular1, styles.smallBtn]}>SKIP</Text>
                    </TouchableOpacity>
                  </View>  
                </View>
                
                <View style={[styles.center, styles.bgMargin]}>
                    <SvgXml xml={Svg.cart} width={'80%'} />
                </View>

                <View>
                    <Text style={[styles.primaryText, styles.h1, styles.bold,styles.textMarginXm]}>A Much Better Way</Text>
                    <Text style={[styles.primaryText, styles.h1, styles.bold]}>to Buy Everything.</Text>
                    <Text style={[styles.textMarginSm, styles.secondaryText, styles.regular]}>
                        With you in mind, we give you the access to varieties of items from several notable stores in Nigeria.
                    </Text>

                </View>
            </View>
          
            <View style={[styles.end, styles.row]}>
                <View style={[styles.center]}>
                  <SvgXml xml={Svg.thirdIndicator} />
                </View>
                <View style={[styles.right]}>
                  <TouchableOpacity style={[styles.btn, styles.primaryBg]} onPress={()=> navigate('Landing')}>
                    <Text style={[styles.whiteText, styles.meduim, styles.customBtn]}>NEXT ></Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        </SafeAreaProvider>

      )
      
    }
   
}


export default Onboarding;