import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,StyleSheet, TouchableOpacity,Dimensions} from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from '../styles';
import {SvgXml, inlineStyles} from 'react-native-svg';
import {NavSvg} from '../controllers/svg/nav';
const { width, height } = Dimensions.get('window');
import DeviceInfo from 'react-native-device-info';
const isIphoneX = DeviceInfo.hasNotch();


class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={inline.container}>
        <ScrollView>
          <View>
           <View style={styles.center}>
                  <Avatar
                    size={115}
                      rounded
                      source={{
                        uri:
                          'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                      }}
                      containerStyle={{marginBottom:-10}}
                    />
                    <SvgXml xml={NavSvg.online} style={inline.icon}  />
                <View style={[styles.center]}> 
                    <Text style={[styles.bold, styles.textCenter, inline.name]}>Daniel Oshokoya</Text>

                    <SvgXml xml={NavSvg.star} style={[inline.customMargin]}  />

                    <TouchableOpacity style={[styles.btn, styles.primaryBg]} onPress={()=> navigate('Onboardingb')}>
                        <Text style={[styles.whiteText, styles.customBtn, styles.textCenter, styles.regular, styles.p]}>View Profile</Text>
                      </TouchableOpacity>
                </View>

                <SvgXml xml={NavSvg.line} style={[inline.customLineMargin]}  />


           </View>
           
            <View style={inline.navSectionStyle}>

              <TouchableOpacity style={inline.li}>
                <View style={inline.wrapNav}>
                  <View style={{paddingVertical:10}}>
                      <SvgXml xml={NavSvg.creditreport} style={inline.navicon} />
                  </View>
                  <View>
                  <Text style={inline.navItemStyle} onPress={this.navigateToScreen('Page1')}>Credit Report</Text>
                  </View>
                </View>
              </TouchableOpacity>

               <TouchableOpacity style={inline.li}>
                <View style={inline.wrapNav}>
                  <View style={{paddingVertical:10}}>
                      <SvgXml xml={NavSvg.deals} style={inline.navicon} />
                  </View>
                  <View>
                  <Text style={inline.navItemStyle} onPress={this.navigateToScreen('Page1')}>Deals</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={inline.li}>
                <View style={inline.wrapNav}>
                  <View style={{paddingVertical:10}}>
                      <SvgXml xml={NavSvg.share} style={inline.navicon} />
                  </View>
                  <View>
                  <Text style={inline.navItemStyle} onPress={this.navigateToScreen('Page1')}>Share & Earn</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={inline.li}>
                <View style={inline.wrapNav}>
                  <View style={{paddingVertical:10}}>
                      <SvgXml xml={NavSvg.support} style={inline.navicon} />
                  </View>
                  <View>
                  <Text style={inline.navItemStyle} onPress={this.navigateToScreen('Page1')}>Support</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={inline.li}>
                <View style={inline.wrapNav}>
                  <View style={{paddingVertical:10}}>
                      <SvgXml xml={NavSvg.privacyPolicy} style={inline.navicon} />
                  </View>
                  <View>
                  <Text style={inline.navItemStyle} onPress={this.navigateToScreen('Page1')}>Privacy Policies</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={inline.li}>
                <View style={inline.wrapNav}>
                  <View style={{paddingVertical:10}}>
                      <SvgXml xml={NavSvg.privacyPolicy} style={inline.navicon} />
                  </View>
                  <View>
                  <Text style={inline.navItemStyle} onPress={this.navigateToScreen('Page1')}>Terms of Use</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <SvgXml xml={NavSvg.line} style={[inline.customLineMargin]}  />

              <TouchableOpacity>
                <View style={inline.wrapNav}>
                  <View style={{paddingVertical:10}}>
                      <SvgXml xml={NavSvg.logout} style={inline.navicon} />
                  </View>
                  <View>
                  <Text style={inline.navItemStylelog} onPress={this.navigateToScreen('Page1')}>Logout</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <SvgXml xml={NavSvg.line} style={[inline.customLineMargin]}  />



            </View>
          </View>
          
        </ScrollView>
        <View style={inline.footerContainer}>
          <Text style={inline.small}>© Copyright 2020. All rights reserved.</Text>
          <Text style={[inline.small, inline.right]}>Version 1.0.4</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};


const inline = StyleSheet.create({

  container: {
    paddingTop: (isIphoneX) ? 60 :30,
    flex: 1,
    backgroundColor:'#F3F9FF'
  },
  navItemStyle: {
    padding: 10,
    marginLeft:10,
    fontSize:14,
    color:'#222222'
  },
  navItemStylelog: {
    padding: 10,
    marginLeft:10,
    fontSize:14,
    color:'#FE2B5E'
  },
  navSectionStyle: {
    // backgroundColor: 'lightgrey'
    paddingHorizontal:37
  },
  wrapNav:{
    flexDirection:'row',
    flex:1
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    flex:1,
    flexDirection:'row'
  },
  small:{
    fontSize:10,
    color:'#333333',
    opacity:0.5
  },
  icon:{
    position:'relative',
    bottom:5,
    left:30
  },
  name:{
    fontSize:18
  },
  customMargin:{
    marginVertical:8
  },
  customLineMargin:{
    marginVertical:20
       
  },
  li:{
      marginVertical:12
  },
  right:{
    marginLeft:20
  }

 


});
export default SideMenu;