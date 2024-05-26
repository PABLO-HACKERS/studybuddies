import {React, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native-web';
import Answer from './answer.jsx'
import { getQuestions } from './index.js';

const Quiz = ({diff, topic}) => {

    const [showCorrect, setShowCorrect] = useState(false);
    const [showInCorrect, setShowInCorrect] = useState(false);


  const correct = (num) => {
    if(variable[0].correctAnswer == variable[0].choices[num]) {
        setShowCorrect(true);
    }
    else {
        setShowInCorrect(true)
    }
  }


  {let variable = getQuestions(diff,topic);}

  return (
    <View style={{zIndex:"15000"}}>
    <div style={{height:1000, width:844, position: 'absolute', backgroundColor: '#d7d7d7'}}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator2}></View>
      </View>
      <View style={styles.findTheDerivativeOfTheFunction}>
        <Text style={styles.textBlock}></Text>
        <Text style={styles.textBlock3}>variable[0].question</Text>
      </View>
      <View style={styles.pixilFrame1}></View>
      <Text style={styles.mATH100}>MATH 100</Text>
      <Text style={styles.q1}>Q1</Text>
      <View style={styles.back}></View>
      <View style={styles.statusBar}>

        {showCorrect && <Answer word="correct" />}

        {showInCorrect && <Answer word="incorrect" />}



      <TouchableOpacity style={styles.btn1} onPress={correct(0)}>
        <Text style={styles.hard}>variable[0].choices[0]</Text>
      </TouchableOpacity>       
      <TouchableOpacity style={styles.btn2} onPress={correct(1)}>
        <Text style={styles.hard}>variable[0].choices[1]</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn3} onPress={correct(2)}>
        <Text style={styles.hard}>variable[0].choices[2]</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn4} onPress={correct(3)}>
        <Text style={styles.hard}>variable[0].choices[3]</Text>
      </TouchableOpacity>
      </View>
      </div>
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
  hard: {
    fontWeight: 'bold',
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
  },
  quizstyle: {
    zIndex: 30000
  },

  btn1: {
    position: 'absolute',
    left: 70,
    top: 494,
    width: 120,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#e7e7e7',
    fontWeight: 'bold',
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
  },
  btn2: {
    position: 'absolute',
    left: 210,
    top: 494,
    width: 120,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#e7e7e7',
    fontWeight: 'bold',
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
  },
  btn3: {
    position: 'absolute',
    left: 70,
    top: 594,
    width: 120,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#e7e7e7',
    fontWeight: 'bold',
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
  },
  btn4: {
    position: 'absolute',
    left: 210,
    top: 594,
    width: 120,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#e7e7e7',
    fontWeight: 'bold',
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif', 
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
    width: 'min-content',
    height: 'min-content',
    whiteSpace: 'nowrap',
    flexDirection: 'column',
  },
  findTheDerivativeOfTheFunction: {
    position: 'absolute',
    left: 50,
    top: 357,
    width: 300,
    height: 65,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textBlock: {
    color: '#2a2b2a',
    fontSize: 15,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
},
  textBlock2: {
    marginTop: 10,
    color: '#2a2b2a',
    fontSize: 15,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
},
  textBlock3: {
    marginTop: 10,
    color: '#2a2b2a',
    fontSize: 15,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
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
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
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
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
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