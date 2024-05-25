import React, { useEffect, useState, memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import Backyard from './backyard';


const ClassPage = () => {

    module.exports = {
        assets: ['./assets/fonts'],
    };

    const [fontLoaded, setFontLoaded] = useState(false);
    const [showBackyard, setShowBackyard] = useState(false);

    const handlePress = () => {
        setShowBackyard(!showBackyard);
    };


    useEffect(() => {
        async function loadFont() {
        await Font.loadAsync({
            'pixelfont': require('../assets/fonts/PressStart2P-Regular.ttf'),
        });
        setFontLoaded(true);
        }

        loadFont();
    }, []);

    if (!fontLoaded) {
        return null;
    }

    return (
    <View style={[styles.clapyResets, styles.root]}>
    
      {showBackyard &&
      <TouchableOpacity style={styles.backicon} onPress={handlePress}>
      </TouchableOpacity>}

      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator2}></View>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.visitYourBuddies}>Visit Your Buddies</Text>
      </TouchableOpacity>

      {showBackyard && <Backyard />}

      <View style={styles.ellipse1}>
      </View>
      <View style={styles.rectangle1}></View>
      <View style={styles.rectangle2}></View>
      <View style={styles.rectangle28}></View>
      <View style={styles.newClass}>
        <Text style={styles.textBlock}>New Class</Text>
      </View>
      <View style={styles.rectangle282}></View>
      <Text style={styles.eCE369}>ECE 369</Text>
      <View style={styles.pixilFrame31}></View>
      <View style={styles.drMihaiSima}>
        <Text style={styles.textBlock3}>Dr. Mihai Sima</Text>
        <Text style={styles.textBlock4}></Text>
      </View>
      <View style={styles.rectangle283}></View>
      <Text style={styles.cHEM101}>CHEM 101</Text>
      <View style={styles.pixilFrame11}></View>
      <Text style={styles.drAlexBrolo}>Dr. Alex Brolo</Text>
      <View style={styles.rectangle284}></View>
      <Text style={styles.mATH100}>MATH 100</Text>
      <View style={styles.pixilFrame1}></View>
      <Text style={styles.drTreforBazett}>Dr. Trefor Bazett</Text>
      <Text style={styles.classes}>Classes</Text>
      <TouchableOpacity style={styles.back}>
      </TouchableOpacity>
      <TouchableOpacity style={styles.back2}>
      </TouchableOpacity>
      <View style={styles.statusBar}>
        <View style={styles.iPhoneXOrNewer}>
          <View style={styles.rightSide}>
          </View>
          <View style={styles.time}>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle3}></View>
        <View style={styles.rectangle4}></View>
        <View style={styles.rectangle5}></View>
      </TouchableOpacity>
    </View>
  );
};
  

const styles = StyleSheet.create({

    root: {
      position: 'relative',
      width: 390,
      height: 844,
      flexDirection: 'column',
      alignItems: 'flex-start',
      borderRadius: 32,
      backgroundColor: '#d7d7d7',
      overflow: 'hidden',
    },
    statusBar: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 390,
      height: 44,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    time: {
      position: 'absolute',
      left: 21,
      top: 12,
      width: 54,
      height: 21,
      overflow: 'visible',
    },
    icon5: {
      width: '100%',
      height: '100%',
    },
    rightSide: {
      position: 'absolute',
      left: 308.6667,
      top: 17.3307,
      width: 66.6614,
      height: 11.336,
      overflow: 'visible',
    },
    icon4: {
      width: '100%',
      height: '100%',
    },
    iPhoneXOrNewer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      flexDirection: 'column',
      alignItems: 'flex-start',
      overflow: 'hidden',
    },
    menuButton: {
      position: 'absolute',
      left: 23,
      top: 53,
      width: 48,
      height: 48,
      flexDirection: 'column',
      alignItems: 'flex-start',
      borderRadius: 4,
      backgroundColor: '#8acb88b2',
      overflow: 'hidden',
    },
    rectangle: {
      position: 'absolute',
      left: '50%',
      top: 34.4,
      width: 28,
      height: 3.2,
      backgroundColor: '#000',
      transform: [{ translateX: -50 }],
    },
    rectangle3: {
      position: 'absolute',
      left: '50%',
      top: 26.4,
      width: 28,
      height: 3.2,
      backgroundColor: '#000',
      transform: [{ translateX: -50 }],
    },
    rectangle4: {
      position: 'absolute',
      left: '50%',
      top: 18.4,
      width: 28,
      height: 3.2,
      backgroundColor: '#000',
      transform: [{ translateX: -50 }],
    },
    rectangle5: {
      position: 'absolute',
      left: '50%',
      top: 10.4,
      width: 28,
      height: 3.2,
      backgroundColor: '#000',
      transform: [{ translateX: -50 }],
    },
    classes: {
      color: '#2a2b2a',
      fontSize: 40,
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: 55,
      top: 130,
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    rectangle284: {
      position: 'absolute',
      left: 20,
      top: 194,
      width: 169,
      height: 186,
      outline: 'solid 1px #282424',
      outlineOffset: '-1px',
      borderRadius: 24,
      backgroundColor: '#e4e4e4',
    },
    mATH100: {
      color: '#000',
      fontSize: 13,
      lineHeight: 24,
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: 53,
      top: 317,
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    pixilFrame: {
      position: 'absolute',
      width: 68,
      height: 68,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    drTreforBazett: {
      opacity: 0.6,
      position: 'absolute',
      left: 60,
      top: 341,
      flexDirection: 'column',
    },
    textBlock3: {
      color: '#000',
      fontSize: 12,
      fontWeight: 500,
      fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    },
    rectangle283: {
      position: 'absolute',
      left: 201,
      top: 194,
      width: 169,
      height: 186,
      outline: 'solid 1px #282424',
      outlineOffset: '-1px',
      borderRadius: 24,
      backgroundColor: '#e4e4e4',
    },
    cHEM101: {
      color: '#000',
      fontSize: 13,
      lineHeight: 24,
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: 234,
      top: 317,
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    drAlexBrolo: {
      opacity: 0.6,
      color: '#000',
      fontSize: 12,
      fontWeight: 500,
      fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: 249,
      top: 341,
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    rectangle282: {
      position: 'absolute',
      left: 20,
      top: 401,
      width: 169,
      height: 186,
      outline: 'solid 1px #282424',
      outlineOffset: '-1px',
      borderRadius: 24,
      backgroundColor: '#e4e4e4',
    },
    eCE369: {
      color: '#000',
      fontSize: 13,
      lineHeight: 24,
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: 53,
      top: 524,
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    drMihaiSima: {
      opacity: 0.6,
      color: '#000',
      fontSize: 12,
      fontWeight: 500,
      fontFamily: 'Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
      position: 'absolute',
      left: 59,
      top: 548,
      whiteSpace: 'nowrap',
      flexDirection: 'column',
    },
    rectangle28: {
      position: 'absolute',
      left: 201,
      top: 401,
      width: 169,
      height: 186,
      outline: 'solid 1px #282424',
      outlineOffset: '-1px',
      borderRadius: 24,
      backgroundColor: '#e4e4e4',
    },
    newClass: {
      position: 'absolute',
      left: 230,
      top: 525,
      flexDirection: 'column',
    },
    textBlock: {
      color: '#000',
      fontSize: 13,
      lineHeight: 24,
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    },
    
    ellipse1: {
      position: 'absolute',
      left: 293,
      top: 553,
      width: 48,
      height: 48,
      borderRadius: 24,
      zIndex: 10,
      backgroundColor: '#8acb88b2',
    },
    rectangle1: {
      position: 'absolute',
      left: 21,
      top: 10,
      width: 6,
      height: 28,
      backgroundColor: '#000',
    },
    rectangle2: {
      position: 'absolute',
      left: 29,
      top: 10,
      width: 6,
      height: 28,
      backgroundColor: '#000',
    },
    btn: {
      position: 'absolute',
      left: 17,
      top: 744,
      width: 356,
      height: 44,
      borderRadius: 100,
      backgroundColor: '#4caf50',
      justifyContent: 'center',
      alignItems: 'center',
    },

    backicon: {
        position: 'absolute',
        zIndex: '10000',
        left: '20px',
        top: '80px',
        width: '16px',
        height: '16px',
        backgroundImage: 'url("assets/backicon.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    visitYourBuddies: {
      color: '#2a2b2a',
      fontSize: 15,
      fontWeight: '500',
      fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',

    },
    homeIndicator: {
      position: 'absolute',
      left: 120,
      top: 824,
      width: 134,
      height: 5,
      backgroundColor: '#000',
      borderRadius: 2.5,
    },
    homeIndicator2: {
      width: '100%',
      height: '100%',
    },
    back: {
      position: 'absolute',
      left: 63,
      top: 52,
      width: 48,
      height: 48,
    },
    icon2: {
      width: '100%',
      height: '100%',
    },
    back2: {
      position: 'absolute',
      left: 122,
      top: 52,
      width: 48,
      height: 48,
    },
    icon3: {
      width: '100%',
      height: '100%',
    },
  });
  
export default ClassPage;