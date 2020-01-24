import React from 'react';
import { View, Image,StyleSheet,Dimensions,Text,TouchableOpacity,StatusBar} from 'react-native';
import { Button } from 'native-base';
import {SvgXml} from 'react-native-svg';
import styles from '../../styles';
import {Svg} from "../../controllers/svg";
import { SafeAreaProvider } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');

class Landing extends React.Component {
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
           <View style={[styles.primaryBg, styles.flex]}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View>
                <SvgXml xml={Svg.bg} height={'80%'} />
                <SvgXml xml={Svg.logo} style={[styles.logoPosition]}/>
            </View>

            <View style={[styles.container, styles.landingfooter]}>
                <Text style={[styles.whiteText, styles.bold, styles.h0, styles.commonMargin]}>Welcome</Text>
                <Text style={[styles.whiteText, styles.regular, styles.p]}>CredPal is a modern finance platform that provides consumer credit solution for individuals and companies across Africa.</Text>
            </View>

            <View style={[styles.center]}>
              <Button style={[styles.whiteBg, styles.center, styles.Btnwidth,styles.commonMargin]} onPress={()=> navigate('Signup')}>
                  <Text style={[styles.primaryText, styles.meduim]}>GET STARTED</Text>
              </Button>
              <View style={[styles.row]}>
                <Text style={[styles.textCenter, styles.whiteText, styles.regular, styles.smallText]}>Already have an account? </Text>
                <Text style={[styles.whiteText, styles.bold, styles.smallFont]}> Sign In</Text>
              </View>
          </View>
          <View style={{height:30}}>
          </View>

          </View>
         
        </SafeAreaProvider>

      )
      
    }
   
}


export default Landing;