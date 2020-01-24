import React from 'react';
import { View, Image,StyleSheet,Dimensions,Text,TouchableOpacity} from 'react-native';
import { Button } from 'native-base';
import {SvgXml} from 'react-native-svg';
import styles from '../../styles';
import {Svg} from "../../controllers/svg";

class splashScreen extends React.Component {
  constructor(props){
    super(props);
    this.state ={

    }
}

static navigationOptions = {
  header: null,
  swipeEnabled: true,
};


render() {
      var {navigate} = this.props.navigation;
      return(
        <View style={[styles.flex, styles.primaryBg, styles.center]}>
            <SvgXml xml={Svg.logo} />
        </View>

      )
      
    }
   
}


export default splashScreen;