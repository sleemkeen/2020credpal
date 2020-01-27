import React, { PureComponent } from 'react';
import {  View, Text,StyleSheet, TouchableWithoutFeedback,ScrollView,Dimensions, TouchableOpacity,Image} from 'react-native';
import styles from '../../styles';
import Header from './header'
import {Svg} from "../../controllers/svg";
import {SvgXml, inlineStyles} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { normalize } from 'react-native-elements';
import { Button } from 'native-base';
import Carousel from 'react-native-snap-carousel';




const horizontalMargin = 10;
const slideWidth = 300;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;



export default class dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

      entries:[
        {
            title:'Samsung A10', 
            description: 'Pay In 4 Installments',
            price: '11,000.00'
        },
        {
          title:'Samsung A10s', 
          description: 'Pay In 4 Installments',
          price: '24,000.00'


        }, {

          title:'Iphone X', 
          description: 'Pay In 4 Installments',
          price: '100,000.00'

        }]


    };
  }


  _renderItem = ({item, index}) => {
    return (
        <View style={inline.slide}>

          <View style={[styles.row]}>
             <View style={{marginRight:10}}>
              <Image
                    source={require('../../assets/img/phone.png')}
                  />
             </View>
             <View>
                 <Text style={inline.carouselTitle}>{ item.title }</Text>
                 <Text style={inline.carousePrice}>₦{ item.price }</Text>
                 <Text style={inline.carouseDescription}>{ item.description }</Text>

                 <TouchableOpacity style={[styles.btn, styles.primaryBg]} onPress={()=> navigate('Onboardingb')}>
                    <Text style={[styles.whiteText, styles.customBtn, styles.textCenter, styles.regular, styles.p]}>Get this deal</Text>
                  </TouchableOpacity>

             </View>
          </View>

        </View>
    );
}

  render() {
    return (
      <ScrollView>
        
      <View style={[styles.bgMaster, styles.containerFlex, styles.sectionraduis]}>
          <Header />
          <View style={[styles.center]}>
          <LinearGradient colors={['#274FED', '#1439CA']} style={inline.card}>
            <Text style={inline.title}>Amount Due</Text>
            <Text style={inline.amount}>₦ 37,500.00</Text>

            <View style={[styles.row, styles.mt2]}>

                <Button style={inline.btn}>
                  <View style={[styles.row]}>
                    <SvgXml xml={Svg.summary} style={inline.icons}  />
                    <Text style={[styles.whiteText]}>Summary</Text>
                  </View>
                </Button>

                <Button style={inline.btnbg}>
                  <View style={[styles.row]}>
                    <SvgXml xml={Svg.paynow} style={inline.icons} />
                    <Text style={[styles.whiteText]}>Pay Now</Text>
                  </View>
                </Button>
            </View>

          </LinearGradient>
          </View>

          <View style={{marginTop:20}}>

          <View style={inline.creditlimit}>
              <SvgXml xml={Svg.borderGreen} style={{position: 'absolute', left: 0, top:23}} />
              <View style={[styles.row]}>
                <SvgXml xml={Svg.creditLimit} style={{marginRight:14}} />
                <Text style={inline.credit}>Available Credit Limit</Text>
              </View>
              <Text style={inline.creditAmount}>₦ 112,500.00</Text>
          </View>

        </View>
      </View>

      <View style={inline.section}>
        <View style={[styles.row, styles.mv3]}>
             <Text style={inline.h1}>Transactions</Text>
             <View style={[styles.right]}>
                <Button style={inline.viewmore}>
                  <Text style={inline.textblue}>View All</Text>
                </Button>
             </View>
        </View>

        <View style={inline.shadow}>

          <View style={[styles.row, styles.mb2]}>
            <View style={[styles.flex]}>
               <Text style={[styles.meduim, styles.secondaryText,styles.p]}>iPhone 11 Pro </Text>
               <Text style={[styles.secondaryText, styles.regular1, styles.opacity]}>Just now</Text>
            </View>
            <View style={[styles.flex]}>
              <Text style={[styles.right, styles.TomatoText, styles.p, styles.meduim]}>-₦ 19,790</Text>
            </View>
          </View>

          <View style={[styles.row, styles.mb2]}>
            <View style={[styles.flex]}>
               <Text style={[styles.meduim, styles.secondaryText,styles.p]}>iPhone 11 Pro </Text>
               <Text style={[styles.secondaryText, styles.regular1, styles.opacity]}>Just now</Text>
            </View>
            <View style={[styles.flex]}>
              <Text style={[styles.right, styles.TomatoText, styles.p, styles.meduim]}>-₦ 19,790</Text>
            </View>
          </View>

          <View style={[styles.row, styles.mb2]}>
            <View style={[styles.flex]}>
               <Text style={[styles.meduim, styles.secondaryText,styles.p]}>iPhone 11 Pro </Text>
               <Text style={[styles.secondaryText, styles.regular1, styles.opacity]}>Just now</Text>
            </View>
            <View style={[styles.flex]}>
              <Text style={[styles.right, styles.TomatoText, styles.p, styles.meduim]}>-₦ 19,790</Text>
            </View>
          </View>

      
        </View>
          <View style={styles.flex}>

                <View style={[styles.row, styles.mv3]}>
                      <Text style={inline.h1}>Splash Deals</Text>
                      <View style={[styles.right]}>
                          <Button style={inline.viewmore}>
                            <Text style={inline.textblue}>View All</Text>
                          </Button>
                      </View>
                  </View>
                  
                  <View style={inline.carousel}>
                      <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.entries}
                            renderItem={this._renderItem}
                            sliderWidth={sliderWidth}
                            containerCustomStyle={inline.slider}
                            itemWidth={itemWidth}
                            contentContainerCustomStyle={inline.sliderContentContainer}
                          />
                  </View> 

                  <View>
                      <Text>{"\n"}</Text>
                  </View>   

          </View>

         

            <View style={inline.share}>
                <View>
                    <SvgXml xml={Svg.shareIcon} />
                </View>
                <View style={[styles.flex]}>
                  <Text style={inline.shareTitle}>Share & Earn</Text>
                  <Text style={inline.shareDesc}>With your CredPal unique link, you can refer a 
                    friend and get <Text style={[styles.bold]}>₦1,000</Text> for each referal.</Text>
                    <Button style={inline.sharebutton}>
                      <Text style={inline.buttonCenter}>Share Now</Text>
                  </Button>
                </View>
                

            </View>

            <View style={[styles.flex, styles.center, styles.mv5]}>
                <SvgXml xml={Svg.idle} />
            </View>

          
      </View>
     

      </ScrollView>
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
        icons:{
          marginRight:10,
          marginTop:2
        },
        amount:{
          fontSize:36,
          color:'#fff',
          fontFamily: 'SFUIText-Bold'
        },
        h1:{
          fontFamily: 'SFUIText-Bold',
          fontSize:20,
          marginTop:10

        },
        title:{
          fontFamily: 'SFUIText-Regular',
          color:'#fff',
          marginBottom:8
        },
        btn:{
          marginRight:10,
          padding:20,
          borderColor:'rgba(255, 255, 255, 0.1)',
          backgroundColor:'transparent',
          borderWidth:1,
        },
        btnbg:{
          marginRight:10,
          padding:20,
          backgroundColor:'rgba(40, 75, 213, 1)',
          borderWidth:0,
          elevation:0
        },
        btnBg:{
          marginVertical:20,
          padding:20,
          backgroundColor:'#FFFFFF',
          borderWidth:1,
          elevation:0
        },
        summary:{
          marginHorizontal:10
        },
        creditlimit:{
          borderRadius: 20,
          backgroundColor:'#fff',
          width: '100%',
          paddingHorizontal:20,
          paddingVertical:25,
          position:'absolute',
          justifyContent:'center'
        },
        credit:{
          fontSize:10,
          fontFamily: 'SFUIText-Medium',
          color:'#222222',
          marginTop:4

        },
        creditAmount:{
          fontSize:24,
          fontFamily: 'SFUIText-Bold',
          color:'#222222',
          marginTop:5
        },
        section:{
          backgroundColor:'#fff',
          flex:1,
          paddingHorizontal:30,
        },
        viewmore:{
          backgroundColor:'rgba(244, 246, 254, 1)',
        },
        textblue:{
          color:'#274FED',
          marginHorizontal:20,
          marginVertical:10,
          fontFamily: 'SFUIText-Medium',
          fontSize:14

        },
        shadow:{
          backgroundColor:'#fff',
          padding:20,
          borderRadius:14,
          shadowColor: "#274FED",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
          
        },
        slide:{
          backgroundColor:'#fff',
          shadowColor: "#274FED",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,

        },
       
        carousel:{
        },
        carouselTitle:{
          fontFamily: 'SFUIText-Bold',
          fontSize:12,
          marginBottom:5
        },
        carousePrice:{
            fontFamily: 'SFUIText-Heavy',
            fontSize:22,
            color:'#274FED',
            marginBottom:5
        },
        carouseDescription:{
          fontFamily: 'SFUIText-Regular',
          marginBottom:10,
          color:'#222222'


        },
        sliderContentContainer:{
          marginLeft:-50
        },
        share:{
          backgroundColor:'rgba(246, 246, 253, 1)',
          flexDirection:'row',
          borderRadius:20,
          paddingRight:20

        },
        sharebutton:{
          backgroundColor:'#544BD8',
          alignItems:'center'
        },
        buttonCenter:{
          color:'#fff',
          textAlign:'center',
          fontFamily: 'SFUIText-Regular',
          flex:1

        },
        shareTitle:{
          fontFamily: 'SFUIText-Bold',
          marginVertical:20

        },
        shareDesc:{
          fontSize:12,
          fontFamily: 'SFUIText-Regular',
          marginBottom:10


        }

       

  });
  

