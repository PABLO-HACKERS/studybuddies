import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const BuddyShop = ({balance}) => {
  return (

    <View style={{zIndex:"2"}}>
    <View style={{height:1000, width:844, position: 'absolute', backgroundColor: '#d7d7d7'}}></View>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator2}></View>
      </View>
      <View style={styles.rectangle28}></View>
      <Text style={styles.monkey}>Monkey</Text>
      <View style={styles.pixilFrame42}></View>
      <Text style={styles._50x}>50x</Text>
      <View style={styles.pixilFrame31}></View>
      <View style={styles.rectangle282}></View>
      <Text style={styles.dog}>Dog</Text>
      <View style={styles.pixilFrame43}></View>
      <View style={styles.pixilFrame11}></View>
      <Text style={styles._25x}>25x</Text>

      <TouchableOpacity>
        <View style={styles.rectangle283}></View>
    </TouchableOpacity>
      


      <Text style={styles.cat}>Cat</Text>
      <Text style={styles._10x}>10x</Text>
      <View style={styles.pixilFrame41}></View>
      <View style={styles.pixilFrame1}></View>
      <View style={styles.pixilFrame44}></View>
      <Text style={styles._25x2}>{balance}x</Text>
      <Text style={styles.buddyShop}>Buddy Shop</Text>
      <Text style={styles.currentBalance}>Current Balance:</Text>
    </View>
  );
};



const styles = {
    root: {
      position: 'relative',
      width: '390px',
      height: '844px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      borderRadius: '32px',
      backgroundColor: '#d7d7d7',
      overflow: 'hidden',
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
    btn: {
      position: 'absolute',
      left: '20px',
      top: '728px',
      width: '350px',
      height: '63px',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '8px',
      borderRadius: '16px',
      backgroundColor: '#8acb88',
    },
    visitYourBuddies: {
      color: '#211d1d',
      fontSize: '13px',
      lineHeight: '24px',
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      width: 'min-content',
      height: 'min-content',
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    rectangle28: {
      position: 'absolute',
      left: '23px',
      top: '428px',
      width: '169px',
      height: '186px',
      outline: 'solid 1px #282424',
      outlineOffset: '-1px',
      borderRadius: '24px',
      backgroundColor: '#e4e4e4',
    },
    monkey: {
      color: '#000',
      fontSize: '13px',
      lineHeight: '24px',
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: '66px',
      top: '443px',
      width: 'min-content',
      height: 'min-content',
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    pixilFrame42: {
      position: 'absolute',
      left: '120px',
      top: '541px',
      width: '33px',
      height: '40px',
      backgroundImage: "url('assets/coin.png')",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    _50x: {
      color: '#000',
      fontSize: '20px',
      lineHeight: '24px',
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: '51px',
      top: '556px',
      width: 'min-content',
      height: 'min-content',
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    pixilFrame31: {
      position: 'absolute',
      left: '71px',
      top: '473px',
      width: '68px',
      height: '68px',
      backgroundImage: "url('assets/monkey.png')",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    rectangle282: {
      position: 'absolute',
      left: '201px',
      top: '230px',
      width: '169px',
      height: '186px',
      outline: 'solid 1px #282424',
      outlineOffset: '-1px',
      borderRadius: '24px',
      backgroundColor: '#e4e4e4',
    },
    dog: {
      color: '#000',
      fontSize: '13px',
      lineHeight: '24px',
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: '266px',
      top: '250px',
      width: 'min-content',
      height: 'min-content',
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    pixilFrame43: {
      position: 'absolute',
      left: '305px',
      top: '352px',
      width: '33px',
      height: '40px',
      backgroundImage: "url('assets/coin.png')",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    pixilFrame11: {
      position: 'absolute',
      left: '254px',
      top: '274px',
      width: '68px',
      height: '68px',
      backgroundImage: "url('assets/dog.png')",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    _25x: {
      color: '#000',
      fontSize: '20px',
      lineHeight: '24px',
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: '234px',
      top: '364px',
      width: 'min-content',
      height: 'min-content',
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    rectangle283: {
      position: 'absolute',
      left: '20px',
      top: '230px',
      width: '169px',
      height: '186px',
      outline: 'solid 1px #282424',
      outlineOffset: '-1px',
      borderRadius: '24px',
      backgroundColor: '#e4e4e4',
    },
    cat: {
      color: '#000',
      fontSize: '13px',
      lineHeight: '24px',
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: '85px',
      top: '255px',
      width: 'min-content',
      height: 'min-content',
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
  _10x: {
      color: '#000',
      fontSize: '20px',
      lineHeight: '24px',
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: '55px',
      top: '364px',
      width: 'min-content',
      height: 'min-content',
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    pixilFrame41: {
      position: 'absolute',
      left: '127px',
      top: '352px',
      width: '33px',
      height: '40px',
      backgroundImage: "url('assets/coin.png')",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    pixilFrame1: {
      position: 'absolute',
      left: '73px',
      top: '274px',
      width: '64px',
      height: '64px',
      backgroundImage: "url('assets/cat.png')",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    pixilFrame44: {
      position: 'absolute',
      left: '314px',
      top: '180px',
      width: '24px',
      height: '29px',
      backgroundImage: "url('assets/coin.png')",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    _25x2: {
      color: '#000',
      fontSize: '15px',
      lineHeight: '24px',
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: '265px',
      top: '184px',
      width: 'min-content',
      height: 'min-content',
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    buddyShop: {
      color: '#2a2b2a',
      fontSize: '30px',
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: '55px',
      top: '130px',
      width: 'min-content',
      height: 'min-content',
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    currentBalance: {
      color: '#2a2b2a',
      fontSize: '15px',
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: '17px',
      top: '189px',
      width: 'min-content',
      height: 'min-content',
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
  };
  
  export default BuddyShop;