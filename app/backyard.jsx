import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Backyard = ({balance, streak, stylesheet}) => {
  return (
    <View style={{zIndex: 20, position: 'relative'}}>

      <View style={[
        styles.background, 
        {left: '-64px',
        top: '-2px'}]}
      ></View>

      <View style={[
        styles.background, 
        {left: '-58px',
        top: '491px',}]}
      ></View>
      
      <View style={[styles.backyardtitle, {zIndex: 3}]}>
        <Text style={styles.titletext}>[Student's]</Text>
        <Text style={[styles.titletext, {marginTop: 0}]}>Backyard</Text>
      </View>

      <View style={styles.rectangle26}></View>
      <View style={styles.pixilFrame51}></View>
      <View style={styles.bestQuestionStreak}>
        <Text style={styles.textBlock}>Best Question Streak</Text>
        <Text style={styles.textBlock2}></Text>
      </View>
      <View style={styles._10x}>
        <Text style={styles.textBlock3}>{streak}x</Text>
        <View style={styles.textBlock4}></View>
      </View>
        <View style={styles.rectangle23}></View>
        <View style={styles.questionsAnsweredCorrectly}>
            <Text style={styles.textBlock5}>Questions</Text>
            <Text style={styles.textBlock6}>Answered</Text>
            <Text style={styles.textBlock7}>Correctly</Text>

        </View>
        <Text style={styles._73}>73%</Text>

      <View style={styles.rectangle232}></View>
      <View style={styles.buddycoinz}>
        <Text style={styles.textBlock8}>Buddycoinz</Text>
        <View style={styles.textBlock9}></View>
      </View>
      <Text style={styles._150x}>{balance}x</Text>
      <View style={styles.pixilFrame41}></View>
      <View style={styles.statusBar}>
        <View style={styles.iPhoneXOrNewer}>
          <View style={styles.rightSide}></View>
          <View style={styles.time}></View>
        </View>
      </View>


      <View style={styles.pixilFrame2}></View>
      <View style={styles.pixilFrame12}></View>
      <View style={styles.pixilFrame13}></View>
      <View style={styles.pixilFrame32}></View>
      <View style={styles.back}></View>
    </View>
  );
};



const styles = StyleSheet.create({

    background: {
        position: 'absolute',
        width: '493px',
        height: '493px',
        backgroundImage: 'url("assets/yard.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },

    backyardtitle: {
      position: 'absolute',
      left: '63px',
      top: '72px',
      width: 'min-content',
      height: 'min-content',
      textAlign: 'center',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      flexDirection: 'column',
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',

    },

    titletext: {

        color: '#2a2b2a',
        fontSize: '25px',
        lineHeight: '24px',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    },

    imagestyle: {
      width: 68,
        height: 68,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    
      questionsAnsweredCorrectly: {
        opacity: '1',
        position: 'absolute',
        left: '232px',
        top: '460px',
        width: 'min-content',
        height: 'min-content',
        whiteSpace: 'nowrap',
        flexDirection: 'column',
      },    
      _1431605648965_shop_thumb2: {
        position: 'absolute',
        
        width: '493px',
        height: '493px',
        backgroundImage: 'url("assets/yard.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
      homeIndicator: {
        position: 'absolute',
        left: '0',
        top: '814px',
        width: '390px',
        height: '30px',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      homeIndicator2: {
        position: 'absolute',
        left: '50%',
        bottom: '8px',
        width: '134px',
        height: '5px',
        borderRadius: '100px',
        backgroundColor: '#f8f8f8',
        transform: 'translateX(-50%)',
      },
      rectangle26: {
        position: 'absolute',
        left: '20px',
        top: '604px',
        width: '350px',
        height: '154px',
        outline: 'solid 1px #000',
        outlineOffset: '-1px',
        borderRadius: '24px',
        backgroundColor: '#e4e4e4',
      },
      pixilFrame51: {
        position: 'absolute',
        left: '221px',
        top: '681px',
        width: '48px',
        height: '48px',
        backgroundImage: 'url("assets/fire.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
      bestQuestionStreak: {
        position: 'absolute',
        left: '83px',
        top: '635px',
        width: 'min-content',
        height: 'min-content',
        textAlign: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        flexDirection: 'column',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',

      },
      textBlock: {
        color: '#2a2b2a',
        fontSize: '17px',
        width:'300px',
        textAlign: 'center',
        right: '40px',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        letterSpacing: '0.01em',
      },
      textBlock2: {
        marginTop: '0',
        color: '#2a2b2a',
        fontSize: '17px',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        letterSpacing: '0.01em',
      },
      _10x: {
        position: 'absolute',
        left: '119px',
        top: '697px',
        width: '108px',
        height: '32px',
        flexDirection: 'column',
      },
      textBlock3: {
        color: '#2a2b2a',
        fontSize: '30px',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        letterSpacing: '0.01em',
      },
      textBlock4: {
        marginTop: '0',
        color: '#2a2b2a',
        fontSize: '30px',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        letterSpacing: '0.01em',
      },
      rectangle23: {
        position: 'absolute',
        left: '201px',
        top: '394px',
        width: '169px',
        height: '198px',
        outline: 'solid 1px #000',
        outlineOffset: '-1px',
        borderRadius: '24px',
        backgroundColor: '#e4e4e4',
      },
      textBlock5: {
        color: '#2a2b2a',
        fontSize: '20px',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        letterSpacing: '0.01em',
      },
      textBlock6: {
        marginTop: '0',
        color: '#2a2b2a',
        fontSize: '20px',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        letterSpacing: '0.01em',
      },
      textBlock7: {
        marginTop: '0',
        color: '#2a2b2a',
        fontSize: '20px',
        fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        letterSpacing: '0.01em',
      },
      _73: {
        color: '#2a2b2a',
        fontSize: '25px',
        fontFamily: 'Press Start 2P, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        position: 'absolute',
        left: '245px',
        top: '429px',
        width: 'min-content',
        height: 'min-content',
        whiteSpace: 'nowrap',
        flexDirection: 'column',
      },    
      rectangle232: {
        position: 'absolute',
        left: '20px',
        top: '394px',
        width: '169px',
        height: '198px',
        outline: 'solid 1px #000',
        outlineOffset: '-1px',
        borderRadius: '24px',
        backgroundColor: '#e4e4e4',
      },
      buddycoinz: {
        opacity: '1',
        position: 'absolute',
        left: '45px',
        top: '460px',
        width: 'min-content',
        height: 'min-content',
        whiteSpace: 'nowrap',
        flexDirection: 'column',
      },
      textBlock8: {
        color: '#2a2b2a',
        fontSize: '20px',
        fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        letterSpacing: '0.01em',
      },
      textBlock9: {
        marginTop: '0',
        color: '#2a2b2a',
        fontSize: '20px',
        fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        letterSpacing: '0.01em',
      },
      _150x: {
        color: '#2a2b2a',
        fontSize: '25px',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        position: 'absolute',
        left: '33px',
        top: '429px',
        width: 'min-content',
        height: 'min-content',
        whiteSpace: 'nowrap',
        flexDirection: 'column',
      },
      pixilFrame41: {
        position: 'absolute',
        left: '140px',
        top: '420px',
        width: '33px',
        height: '40px',
        backgroundImage: 'url("assets/coin.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
      StudentSBackyard: {
        position: 'absolute',
        left: '63px',
        top: '72px',
        width: 'min-content',
        height: 'min-content',
        textAlign: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        flexDirection: 'column',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',

      },
      textBlock10: {
        color: '#2a2b2a',
        fontSize: '25px',
        lineHeight: '24px',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      },
      textBlock11: {
        marginTop: '0',
        color: '#2a2b2a',
        fontSize: '25px',
        lineHeight: '24px',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      },
      statusBar: {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '390px',
        height: '44px',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      iPhoneXOrNewer: {
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflow: 'hidden',
      },
      rightSide: {
        position: 'absolute',
        left: '308.6667px',
        top: '17.3307px',
        width: '66.6614px',
        height: '11.336px',
        overflow: 'visible',
      },
      icon: {
        width: '100%',
        height: '100%',
      },
      time: {
        position: 'absolute',
        left: '21px',
        top: '12px',
        width: '54px',
        height: '21px',
        overflow: 'visible',
      },
      icon2: {
        width: '100%',
        height: '100%',
      },
      pixilFrame2: {
        position: 'absolute',
        left: '146px',
        top: '187px',
        width: '64px',
        height: '64px',
        backgroundImage: 'url("assets/cat.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },

      pixilFrame290: {
        position: 'absolute',
        left: '176px',
        top: '207px',
        width: '64px',
        height: '64px',
        backgroundImage: 'url("assets/cat.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
      pixilFrame12: {
        position: 'absolute',
        left: '245px',
        top: '244px',
        width: '68px',
        height: '68px',
        backgroundImage: 'url("assets/dog.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
      pixilFrame13: {
        position: 'absolute',
        left: '51px',
        top: '233px',
        width: '68px',
        height: '68px',
        backgroundImage: 'url("assets/dog.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    
    },

    pixilFrame32: {
        position: 'absolute',
        left: '155px',
        top: '276px',
        width: '68px',
        height: '68px',
        backgroundImage: 'url("assets/monkey.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    
 textBlock5: {
    color: '#2a2b2a',
    fontSize: '20px',
    fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    letterSpacing: '0.01em',
  },
  textBlock6: {
    marginTop: '0',
    color: '#2a2b2a',
    fontSize: '20px',
    fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    letterSpacing: '0.01em',
  },
  textBlock7: {
    marginTop: '0',
    color: '#2a2b2a',
    fontSize: '20px',
    fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    letterSpacing: '0.01em',
  },
  _73: {
    color: '#2a2b2a',
    fontSize: '25px',
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    position: 'absolute',
    left: '245px',
    top: '429px',
    width: 'min-content',
    height: 'min-content',
    whiteSpace: 'nowrap',
    flexDirection: 'column',
  },



    
});

export default Backyard;
