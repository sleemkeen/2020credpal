import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
import DeviceInfo from 'react-native-device-info';
const isIphoneX = DeviceInfo.hasNotch();

export default {

    primaryBg:{
        backgroundColor:'#274FED'
    },
    whiteBg:{
        backgroundColor:'#fff'
    },
    primaryText:{
       color: '#274FED'
    },
    secondaryText:{
        color:'#222222'
    },
    whiteText:{
        color:'#fff'
    },
    dangerText:{
        color:'#FE2B5E'
    },
    formText:{
        color:'#222222'
    },
    secondaryBg:{
        backgroundColor:'#F3F9FF'
    },
    warningBg:{
        backgroundColor:'#FFA927'
    },
    dangerBg:{
        backgroundColor:'#FE2B5E'
    },
    successBg:{
        backgroundColor:'#1CF1A1'
    },
    inactiveBg:{
        backgroundColor:'#FF5E00'
    },
    activeBg:{
        backgroundColor:'#17DC66'
    },
    flex:{
        flex:1
    },
    center:{
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    bold:{
        fontFamily: 'SFUIText-Bold'
    },
    regular:{
        fontFamily: 'SFUIText-Regular'
    },
    regular1:{
        fontFamily: 'SFUIText-RegularG1'
    },
    meduim:{
        fontFamily: 'SFUIText-Medium'
    },
    row:{
        flexDirection:'row'
    },
    m1:{
        marginVertical: 50,
    },
    m2:{
        marginTop: (isIphoneX) ? 60 : (Platform.OS == 'android') ? 30 : 40,
        marginBottom: (isIphoneX) ? '8%' : (Platform.OS == 'android') ? 0 : '2%',

    },

    Homem2:{
        marginTop: (isIphoneX) ? 80 : (Platform.OS == 'android') ? 40 : 60,
        marginBottom: (isIphoneX) ? '9%' : (Platform.OS == 'android') ? 20 : '4%',

    },

    loginMargin:{
        marginVertical:(isIphoneX) ? '35%' : '25%', 

    },
    custom2:{
        marginTop: (isIphoneX) ? 60 : (Platform.OS == 'android') ? 30 : 40,
    },
    customBottom:{
        marginBottom: (isIphoneX) ? '8%' : (Platform.OS == 'android') ? 30 : '2%',
    },
    bgMargin:{
        marginVertical:(height > 700) ? '20%' : '10%' ,
    },

    smallhight:{
        height:(height > 700) ? '15%' : '3%' ,
    },

    logoPosition:{
        position: "absolute", 
        top: height * 0.27,
        left: width * 0.37,
    },
    container: {
        paddingHorizontal: 30,
        flex:1
    },
    pdd:{
        paddingHorizontal: 30,

    },
    right:{
        flex:1,
        alignSelf: 'flex-end',
        alignItems:'flex-end',
    },
    left:{
        alignSelf:'flex-start',
        alignItems:'flex-start',
        flex:1
    },
    btn:{
        backgroundColor:'#F4F4F4',
        borderRadius:5,
    },
    darkText:{
        color:'#8B8B8B'
    },
    smallBtn:{
        marginVertical:5,
        marginHorizontal: 14,
        fontSize:14
        
    },
    customBtn:{
        marginVertical: 13,
        marginHorizontal:30
    },
    h1:{
        fontSize:28
    },
    h0:{
        fontSize:36
    },
    p:{
        fontSize: 14,
        lineHeight:20
    },
    textMarginSm:{
        marginTop: 21,
        fontSize:14
    },
    textMarginXm:{
        lineHeight: 30,
    },
    button:{
        paddingHorizontal:27,
        paddingVertical:15,
        borderRadius:5,

    },
    end:{
        marginTop:'auto',
        paddingBottom:(isIphoneX) ? 60 : 30,
    },
    commonMargin:{
        marginVertical: 14
    },
    landingfooter:{
        marginTop: -150,
    },
    Btnwidth:{
        width: '40%'
    },
    textCenter:{
        textAlign: 'center'
    },
    smallText:{
        fontSize: 12,
        opacity:0.5
    },
    smallFont:{
        fontSize: 12,
        textDecorationLine:'underline'
    },
    XsmallFont:{
        fontSize: 10,
    },
    fontSmall:{
        fontSize: 12,
    },
    mb:{
        marginBottom:6
    },
    mr1:{
        marginRight: 10,
    },
    mr2:{
        marginRight: 20,

    },
    mr3:{
        marginRight: 30,

    },
    mr4:{
        marginRight: 40,

    },
    ml1:{
        marginLeft: 10,
    },
    ml2:{
        marginLeft: 20,

    },
    ml3:{
        marginLeft: 30,

    },
    ml4:{
        marginLeft: 40,

    },

    mh1:{
        marginRight: 10,
        marginLeft: 10,
    },
    mh2:{
        marginRight: 20,
        marginLeft: 20,
    },
    mh3:{
        marginRight: 30,
        marginLeft: 30,
    },
    mh4:{
        marginRight: 40,
        marginLeft: 40,
    },
    mv1:{
        marginTop: 10,
        marginBottom: 10,
    },
    mv2:{
        marginTop: 20,
        marginBottom:20

    },
    mv3:{
        marginTop: 30,
        marginBottom:30

    },
    mv4:{
        marginTop: 40,
        marginBottom:40
    },
    mv5:{
        marginTop: 50,
        marginBottom:50
    },
    mv6:{
        marginTop: 80,
        marginBottom:60
    },

    mt1:{
        marginTop: 10,
    },
    mt2:{
        marginTop: 20,

    },
    mt3:{
        marginTop: 30,

    },
    mt4:{
        marginTop: 40,

    },

    mt5:{
        marginTop: '20%',

    },
    pl:{
        paddingLeft: 8,
    },
    clearFix:{
        marginTop:'10%',
    },
    customMargin:{
        marginTop:14,
    },
    width:{
        width:'40%'
    },
    formicon:{
        position:'absolute',
        bottom: 10,
    },
    formiconRight:{
        position:'absolute',
        right:10,
        top:30

    },
    checkboxText:{
        fontSize:10,
        opacity:0.5

    },
    noPadding:{
        padding:0,
        margin:0,
        marginLeft:0
    },
    underline:{
        textDecorationLine:'underline'
    },
    opacity:{
        opacity:0.5
    },
    ph3:{
        paddingHorizontal:'20%'
    },
    opacity2:{
        opacity:0.2
    },
    navText:{
        textAlign:'right',
        fontFamily: 'SFUIText-Regular',
        fontSize:14,
        color:'#555555'

    },
    headerText:{
        fontSize:24
    },

    bgMaster:{
        backgroundColor: '#F4F6FE'
    }



};