import React, { PureComponent } from 'react';
import {  View, Text,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import styles from '../../styles';
import Header from './header'
import {Svg} from "../../controllers/svg";
import {SvgXml, inlineStyles} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { normalize } from 'react-native-elements';


export default class dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[styles.bgMaster, styles.container]}>
          <Header />
          <View style={[styles.center]}>
          <LinearGradient colors={['#274FED', '#1439CA']} style={inline.card}>
            <Text style={inline.title}>Amount Due</Text>
            <Text style={inline.amount}>₦ 37,500.00</Text>

            <View style={[styles.row]}>
                <TouchableWithoutFeedback style={inline.btn}>
                  <View style={[styles.row]}>
                    <SvgXml xml={Svg.summary}  />
                    <Text>Summary</Text>
                  </View>
                </TouchableWithoutFeedback>
                
            </View>

          </LinearGradient>
          </View>
      </View>
    );
  }
}

const inline = StyleSheet.create({
        card:{
          width: '100%',
          borderRadius:20,
          height:193,
          shadowColor: "rgba(39, 79, 237, 0.2)",
          shadowOffset: {
            width: 8,
            height: 8,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,
          elevation: 3,
          padding:30

        },
        description:{
            fontSize:10,
            color:'#222222',
            opacity:0.5,
            
        },
        amount:{
          fontSize:36,
          color:'#fff',
          fontFamily: 'SFUIText-Bold'
        },
        title:{
          fontFamily: 'SFUIText-Regular',
          color:'#fff',
          marginBottom:8
        },
        btn:{
          marginVertical:20,
          padding:20,
          borderColor:'rgba(255, 255, 255, 0.1)'
        },
        summary:{
          marginHorizontal:10
        }
  });
  

