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

      <View style={[styles.boxstyle, style={
        left: '20px',
        top: '604px',
        width: '350px',
        height: '154px',}]}>
          <Text style={styles.textBlock}>Best Question Streak</Text>
          <View style={[styles.imagestyle, style={
            left: 45, 
            top:35, 
            backgroundImage: 'url("assets/fire.png")',
            width: 60,
            height: 60
            }]}></View>
          <Text style={[styles.textBlock, style={left: -35, top: -10, fontSize: 40}]}>{streak}x</Text>

      </View>

      <View style={[styles.boxstyle, style={
        left: '201px',
        top: '394px',
        width: '169px',
        height: '198px',}]}>
          <Text style={[styles.textBlock, style={padding:2, marginTop:10, fontSize: 30}]}>73%</Text>
          <Text style={[styles.textBlock, style={padding:2, marginTop:20, fontSize: 15, width: 150}]}>Questions Answered Correctly</Text>
      
      </View>

      <View style={[styles.boxstyle, style={
        left: '20px',
        top: '394px',
        width: '169px',
        height: '198px',}]}>
          <Text style={[styles.textBlock, style={padding:2, marginTop:10, fontSize: 30, left: -20}]}>{balance}x</Text>
          <Text style={[styles.textBlock, style={padding:2, marginTop:20, fontSize: 12, width: 150}]}>BuddyCoins</Text>
          <View style={[styles.imagestyle, style={
            position: 'absolute',
            left: 120,
            top:30,
            width: '33px',
            height: '40px',
            backgroundImage: 'url("assets/coin.png")'}]}>

        </View>
      </View>

      <View style={[styles.imagestyle, style={
            left: 120, 
            top:200, 
            backgroundImage: 'url("assets/cat.png")',
            }]}
      ></View>

      <View style={[styles.imagestyle, style={
            left:250, 
            top:135, 
            backgroundImage: 'url("assets/dog.png")',
            }]}
      ></View>

      <View style={[styles.imagestyle, style={
            left:200, 
            top:155, 
            backgroundImage: 'url("assets/dog.png")',
            }]}
      ></View>

      <View style={[styles.imagestyle, style={
            left:60, 
            top:75, 
            backgroundImage: 'url("assets/monkey.png")',
            }]}
      ></View>
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
  
    boxstyle: {
        position: 'absolute',
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#282424',
        borderStyle: 'solid',
        left: '20px',
        top: '604px',
        width: '350px',
        height: '154px',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        backgroundColor: '#e4e4e4', 
        borderRadius: 24,
      },
      textBlock: {
        color: '#2a2b2a',
        fontSize: '18px',
        width:'300px',
        top: 30,
        textAlign: 'center',
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        letterSpacing: '0.01em',
      },
});

export default Backyard;
