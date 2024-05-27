import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { getQuestions } from './index.js';
import Quiz from './quiz.jsx';

const Splash = ({ diff, topic }) => {
  const progress = useRef(new Animated.Value(0)).current;
  const [response, setResponse] = useState(null); // state to hold the API response
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    // Fetch questions from the API
    getQuestions(diff, topic).then((data) => {
      setResponse(data);
    });
  }, [diff, topic]);

  useEffect(() => {
    if (response !== null) {
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000, // 5 seconds
        useNativeDriver: false,
      }).start(() => {
        setShowQuiz(true);
      });
    } else {
      progress.setValue(0); // Reset progress if response becomes null
    }
  }, [response, progress]);

  const progressBarWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={{ zIndex: 15000 }}>
      <div style={{ height: 1000, width: 844, position: 'absolute', backgroundColor: '#d7d7d7' }}></div>
      {showQuiz && <Quiz variable={response} />}
      <View style={styles.container}>
        <View style={styles.splashContainer}>
          <Text style={styles.textBlock}>Generating Quiz...</Text>
          <View style={styles.progressBarBackground}>
            <Animated.View style={[styles.progressBarFill, { width: progressBarWidth }]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d7d7d7',
  },
  splashContainer: {
    width: 390,
    height: 844,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d7d7d7',
  },
  textBlock: {
    color: '#2a2b2a',
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
  },
  progressBarBackground: {
    width: '80%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e4e4e4',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#8acb88b2',
  },
});

export default Splash;
