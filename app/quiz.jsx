import { React, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native-web";
import Answer from "./answer.jsx";
import { getQuestions } from "./index.js";

const Quiz = ({ variable, stylesheet }) => {
  const [showCorrect, setShowCorrect] = useState(false);
  const [showInCorrect, setShowInCorrect] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [questionNum, setQuestionNum] = useState(0); // Define questionNum state
  const [right, setRight] = useState(0);

  const correct = (num) => {
    if (variable.questions[questionNum].correct_answer === num) {
      setShowCorrect(true);
      setRight((prevNum) => prevNum + 1);
    } else {
      setShowInCorrect(true);
    }
    setQuestionNum((prevNum) => {
      // Check if the incremented value is greater than or equal to 3
      if (prevNum + 1 >= 3) {
        setShowNext(true);
        return prevNum;
      } else {
        // Return the updated value of questionNum
        return prevNum + 1;
      }
    });
  };

  return (
    <View style={{ zIndex: 4 }}>
      <div
        style={{
          height: 1000,
          width: 844,
          position: "absolute",
          backgroundColor: "#d7d7d7",
        }}
      >
        <View style={styles.box}>
          <Text style={styles.textBlock}>
            {variable.questions[questionNum].question}
          </Text>
        </View>
        <Text style={[stylesheet.titletext, {left:40, top: 200}]}>MATH 100</Text>
        <Text style={styles.q1}>Q1</Text>

        {showCorrect && showNext && (
          <Answer word="correct" score={(right / 3.0) * 100.0} stylesheet={stylesheet} />
        )}

        {showInCorrect && showNext && (
          <Answer word="incorrect" score={(right / 3.0) * 100.0} stylesheet={stylesheet}/>
        )}

        <TouchableOpacity
          style={[styles.btn, { left: 10, top: 494 }]}
          onPress={() => correct(0)}
        >
          <Text style={styles.answertext}>
            {variable.questions[questionNum].options[0]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { left: 210, top: 494 }]}
          onPress={() => correct(1)}
        >
          <Text style={styles.answertext}>
            {variable.questions[questionNum].options[1]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { left: 10, top: 594 }]}
          onPress={() => correct(2)}
        >
          <Text style={styles.answertext}>
            {variable.questions[questionNum].options[2]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { left: 210, top: 594 }]}
          onPress={() => correct(3)}
        >
          <Text style={styles.answertext}>
            {variable.questions[questionNum].options[3]}
          </Text>
        </TouchableOpacity>
      </div>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: 390,
    height: 844,
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 32,
    backgroundColor: "#d7d7d7",
    overflow: "hidden",
  },

  btn: {
    position: "absolute",
    width: 170,
    height: 63,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
    backgroundColor: "#e7e7e7",
    fontWeight: "bold",
    fontFamily:
      "pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif",
  },

  answertext: {
    fontWeight: "bold",
    fontFamily:
      "pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif",
  },
  
  box: {
    position: "absolute",
    left: 50,
    top: 357,
    width: 300,
    height: 65,
    justifyContent: "center",
    flexDirection: "column",
  },
  textBlock: {
    color: "#2a2b2a",
    fontSize: 15,
    fontFamily:
      "pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif",
  },
  
  q1: {
    color: "#2a2b2a",
    fontSize: 20,
    fontFamily:
      "pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif",
    position: "absolute",
    left: -75,
    top: 302,
    width: 284,
    height: "auto",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  
});

export default Quiz;
