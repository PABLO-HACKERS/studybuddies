import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native-web';

const Answer = ({word, score, stylesheet}) => {

  return (
    <View style={{zIndex:6}}>
    <div style={{height:1000, width:844, position: 'absolute', backgroundColor: '#d7d7d7'}}>

      <View style={styles.box}>
        <Text style={styles.textBlock}>Answer is {word}!</Text>
        <Text style={[styles.textBlock, {top: 100}]}>Quiz score is {score}%</Text>

      </View>
      <Text style={styles.classtitle}>MATH 100</Text>
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
  
  box: {
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
  
  classtitle: {
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
});

export default Answer;