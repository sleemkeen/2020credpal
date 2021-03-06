import React from 'react';
import { View, Image,StyleSheet,Dimensions,Text,TouchableOpacity} from 'react-native';
import { Button } from 'native-base';
import {SvgXml} from 'react-native-svg';
import styles from '../../styles';
import {Svg} from "../../controllers/svg";
import { SafeAreaProvider } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');

class Onboardingb extends React.Component {
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
                    <SvgXml xml={Svg.calm} width={'80%'}  />
                </View>

                <View>
                    <Text style={[styles.primaryText, styles.h1, styles.bold,styles.textMarginXm]}>An Easier and </Text>
                    <Text style={[styles.primaryText, styles.h1, styles.bold]}>Smoother Lifestyle.</Text>
                    <Text style={[styles.textMarginSm, styles.secondaryText, styles.regular]}>
                        A lifestyle that accommodates all your purchases no matter how the case may be. We all got you covered.
                    </Text>

                </View>
            </View>
          
            <View style={[styles.end, styles.row]}>
                <View style={[styles.center]}>
                  <SvgXml xml={Svg.secondIndicator} />
                </View>
                <View style={[styles.right]}>
                  <TouchableOpacity style={[styles.btn, styles.primaryBg]} onPress={()=> navigate('Onboardingc')}>
                    <Text style={[styles.whiteText, styles.meduim, styles.customBtn]}>NEXT ></Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        </SafeAreaProvider>

      )
      
    }
   
}


export default Onboardingb;