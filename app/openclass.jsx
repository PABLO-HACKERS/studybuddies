import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const OpenClass = () => {
  return (
    <View style={{zIndex:"10000"}}>
      <div style={{height:1000, width:844, position: 'absolute', backgroundColor: '#d7d7d7'}}></div>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator2}></View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2}>
        <Text style={styles.medium}>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn3}>
        <Text style={styles.easy}>Easy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn4}>
        <Text style={styles.hard}>Hard</Text>
      </TouchableOpacity>
      <View style={styles.rectangle28}></View>
      <Text style={styles.typeHere}>Type here...</Text>
      <View style={styles.pixilFrame1}></View>
      <Text style={styles.mATH100}>MATH 100</Text>
      <View style={styles.whatWouldYouLikeToBeQuizzedOn}>
        <Text style={styles.textBlock}>What would you</Text>
        <Text style={styles.textBlock2}>like to be</Text>
        <Text style={styles.textBlock3}>quizzed on?</Text>
      </View>
      <Text style={styles.difficulty}>Difficulty</Text>
      <View style={styles.back}></View>
      <View style={styles.statusBar}>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle2}></View>
        <View style={styles.rectangle3}></View>
        <View style={styles.rectangle4}></View>
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
  homeIndicator: {
    position: 'absolute',
    left: 0,
    top: 814,
    width: 390,
    height: 30,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  homeIndicator2: {
    position: 'absolute',
    left: '50%',
    bottom: 8,
    width: 134,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#f8f8f8',
    transform: [{ translateX: '-50%' }],
  },
  btn: {
    position: 'absolute',
    left: 24,
    top: 728,
    width: 350,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#8acb88',
  },
  submit: {
    color: '#211d1d',
    fontSize: 13,
    lineHeight: 24,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    width: 'auto',
    height: 'auto',
    whiteSpace: 'nowrap',
    flexDirection: 'column',
  },
  btn2: {
    position: 'absolute',
    left: 145,
    top: 594,
    width: 100,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#e5b455',
  },
  medium: {
    color: '#211d1d',
    fontSize: 13,
    lineHeight: 24,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    width: 'auto',
    height: 'auto',
    whiteSpace: 'nowrap',
    flexDirection: 'column',
  },
  btn3: {
    position: 'absolute',
    left: 37,
    top: 594,
    width: 100,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#8acb88',
  },
  easy: {
    color: '#211d1d',
    fontSize: 13,
    lineHeight: 24,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    width: 'auto',
    height: 'auto',
    whiteSpace: 'nowrap',
    flexDirection: 'column',
  },
  btn4: {
    position: 'absolute',
    left: 253,
    top: 594,
    width: 100,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#cf474f',
  },
  hard: {
    color: '#211d1d',
    fontSize: 13,
    lineHeight: 24,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    width: 'auto',
    height: 'auto',
    whiteSpace: 'nowrap',
    flexDirection: 'column',
  },
  rectangle28: {
    position: 'absolute',
    left: 34,
    top: 437,
    width: 322,
    height: 78,
    outlineWidth: 1,
    outlineColor: '#282424',
    outlineStyle: 'solid',
    outlineOffset: -1,
    borderRadius: 24,
    backgroundColor: '#e4e4e4',
  },
  typeHere: {
    color: '#2a2b2a',
    fontSize: 15,
    fontFamily: 'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
    position: 'absolute',
    left: 62,
    top: 449,
    width: 'auto',
    height: 'auto',
    whiteSpace: 'nowrap',
    flexDirection: 'column',
  },
  pixilFrame1: {
    position: 'absolute',
    left: 163,
    top: 128,
    width: 64,
    height: 64,
    backgroundImage: 'url("assets/pixilFrame1.png")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  mATH100: {
    color: '#2a2b2a',
    fontSize: 40,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    position: 'absolute',
    left: 36,
    top: 219,
    width: 'auto',
    height: 'auto',
    whiteSpace: 'nowrap',
    flexDirection: 'column',
  },
  whatWouldYouLikeToBeQuizzedOn: {
    position: 'absolute',
    left: 53,
    top: 350,
    width: 284,
    height: 'auto',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textBlock: {
    color: '#2a2b2a',
    fontSize: 20,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
  },
  textBlock2: {
    color: '#2a2b2a',
    fontSize: 20,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
  },
  textBlock3: {
    color: '#2a2b2a',
    fontSize: 20,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
  },
  difficulty: {
    color: '#2a2b2a',
    fontSize: 20,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
    position: 'absolute',
    left: 53,
    top: 559,
    width: 284,
    height: 'auto',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  back: {
    position: 'absolute',
    left: 177,
    top: 633,
    width: 35,
    height: 34,
    flexDirection: 'column',
    alignItems: 'flex-start',
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
  rightSide: {
    position: 'absolute',
    left: 308.6667,
    top: 17.3307,
    width: 66.6614,
    height: 11.336,
    overflow: 'visible',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  time: {
    position: 'absolute',
    left: 21,
    top: 12,
    width: 54,
    height: 21,
    overflow: 'visible',
  },
  icon2: {
    width: '100%',
    height: '100%',
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
    transform: [{ translateX: '-50%' }],
  },
  rectangle2: {
    position: 'absolute',
    left: '50%',
    top: 26.4,
    width: 28,
    height: 3.2,
    backgroundColor: '#000',
    transform: [{ translateX: '-50%' }],
  },
  rectangle3: {
    position: 'absolute',
    left: '50%',
    top: 18.4,
    width: 28,
    height: 3.2,
    backgroundColor: '#000',
    transform: [{ translateX: '-50%' }],
  },
  rectangle4: {
    position: 'absolute',
    left: '50%',
    top: 10.4,
    width: 28,
    height: 3.2,
    backgroundColor: '#000',
    transform: [{ translateX: '-50%' }],
  },
});

export default OpenClass;



