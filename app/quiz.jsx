import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native-web';

const Quiz = () => {
  return (
    <View style={[styles.root, props.className]}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator2}></View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <View style={styles.submit}>Submit</View>
      </TouchableOpacity>
      <View style={styles.findTheDerivativeOfTheFunction}>
        <Text style={styles.textBlock}>Find the derivative of </Text>
        <Text style={styles.textBlock2}>the function </Text>
        <Text style={styles.textBlock3}>f(x)=3x^2 + 2x + 1.</Text>
      </View>
      <View style={styles.pixilFrame1}></View>
      <Text style={styles.mATH100}>MATH 100</Text>
      <Text style={styles.q1}>Q1</Text>
      <View style={styles.back}></View>
      <View style={styles.statusBar}>
        <View style={styles.iPhoneXOrNewer}>
          <View style={styles.rightSide}>
            <RightSideIcon style={styles.icon} />
          </View>
          <View style={styles.time}>
            <TimeIcon style={styles.icon2} />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle2}></View>
        <View style={styles.rectangle3}></View>
        <View style={styles.rectangle4}></View>
      </TouchableOpacity>
      <View style={styles.rectangle28}></View>
      <Text style={styles.typeHere}>Type here...</Text>
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
    fontFamily: 'Press Start 2P, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
    width: 'min-content',
    height: 'min-content',
    whiteSpace: 'nowrap',
    flexDirection: 'column',
  },
  findTheDerivativeOfTheFunction: {
    position: 'absolute',
    left: 24,
    top: 357,
    width: 347,
    height: 65,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textBlock: {
    color: '#2a2b2a',
    fontSize: 15,
    fontFamily: 'Press Start 2P, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
  },
  textBlock2: {
    marginTop: 10,
    color: '#2a2b2a',
    fontSize: 15,
    fontFamily: 'Press Start 2P, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
  },
  textBlock3: {
    marginTop: 10,
    color: '#2a2b2a',
    fontSize: 15,
    fontFamily: 'Press Start 2P, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
  },
  pixilFrame1: {
    position: 'absolute',
    left: 163,
    top: 128,
    width: 64,
    height: 64,
    backgroundImage: { uri: 'assets/pixilFrame1.png' },
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  mATH100: {
    color: '#2a2b2a',
    fontSize: 40,
    fontFamily: 'Press Start 2P, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
    position: 'absolute',
    left: 36,
    top: 219,
    width: 'min-content',
    height: 'min-content',
    whiteSpace: 'nowrap',
    flexDirection: 'column',
  },
  q1: {
    color: '#2a2b2a',
    fontSize: 20,
    fontFamily: 'Press Start 2P, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
    position: 'absolute',
    left: -75,
    top: 302,
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
  rectangle28: {
    position: 'absolute',
    left: 33,
    top: 465,
    width: 322,
    height: 120,
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
    left: 61,
    top: 483.4615,
    width: 80,
    height: 30.7692,
    flexDirection: 'column',
  },
});

export default Quiz;