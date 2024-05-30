import { React, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Quiz from "./quiz";
import { TextInput } from "react-native-web";
import { getQuestions } from "./index.js";
import Splash from "./Splash";

const OpenClass = ({stylesheet}) => {
  let diff = 1;

  const [showQuestions, setShowQuestion] = useState(false);
  const [text, setText] = useState("");

  const startQuiz = () => {
    setShowQuestion(true);
  };
  const difficulty = (difficulty) => {
    diff = difficulty;
  };

  return (
    <View style={{ zIndex: 2 }}>
      <div
        style={{
          height: 1000,
          width: 844,
          position: "absolute",
          backgroundColor: "#d7d7d7",
        }}
      ></div>

      <TouchableOpacity style={stylesheet.btn} onPress={startQuiz}>
        <Text style={stylesheet.visitYourBuddies}>Submit</Text>
      </TouchableOpacity>

      {showQuestions && <Splash diff={diff} topic={text} stylesheet={stylesheet} />}

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "#e5b455", left: 145,
      }]}
        onClick={difficulty(2)}
      >
        <Text style={styles.text}>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "#8acb88", left: 20 }]}
        onClick={difficulty(2)}
      >
        <Text style={styles.text}>Easy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "#cf474f", left: 270 }]}
        onClick={difficulty(2)}
      >
        <Text style={styles.text}>Hard</Text>
      </TouchableOpacity>

      <TextInput
        className="prompt"
        style={styles.inputbox}
        placeholder="Type Here..."
        value={text}
        onChangeText={(newText) => setText(newText)} // Update state with new text input value
      ></TextInput>

      <ImageBackground
        source={{ uri: "assets/cat.png" }}
        style={[
          styles.imagestyle,
          { left: 160, top: 120, height: 64, width: 64 },
        ]}
      ></ImageBackground>

      <Text style={styles.title}>MATH 100</Text>
      <View style={styles.block}>
        <Text style={styles.textBlock}>What would you</Text>
        <Text style={styles.textBlock}>like to be</Text>
        <Text style={styles.textBlock}>quizzed on?</Text>
        <Text style={[styles.textBlock, { top: 140 }]}>Difficulty</Text>
      </View>

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

  classimage: {
    width: 68,
    height: 68,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    top: 23,
  },

  submitbtn: {
    position: "absolute",
    top: 784,
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
    backgroundColor: "#"
  },

  btn: {
    position: "absolute",
    left: 145,
    top: 594,
    width: 100,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
  },

  submit: {
    color: "#211d1d",
    fontSize: 13,
    lineHeight: 24,
    fontFamily:
      "pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif",
    width: "auto",
    height: "auto",
    whiteSpace: "nowrap",
    flexDirection: "column",
  },

  text: {
    color: "#211d1d",
    fontSize: 13,
    lineHeight: 24,
    fontFamily:
      "pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif",
    width: "auto",
    height: "auto",
    whiteSpace: "nowrap",
    flexDirection: "column",
  },
  inputbox: {
    position: "absolute",
    left: 34,
    top: 437,
    width: 322,
    height: 78,
    outlineWidth: 1,
    outlineColor: "#282424",
    outlineStyle: "solid",
    outlineOffset: -1,
    borderRadius: 24,
    backgroundColor: "#e4e4e4",
    fontFamily:
      'Manrope, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
    padding: 20,
  },

  title: {
    color: "#2a2b2a",
    fontSize: 40,
    fontFamily:
      "pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif",
    position: "absolute",
    left: 36,
    top: 219,
    width: "auto",
    height: "auto",
    whiteSpace: "nowrap",
    flexDirection: "column",
  },

  block: {
    position: "absolute",
    left: 53,
    top: 350,
    width: 284,
    height: "auto",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  textBlock: {
    color: "#2a2b2a",
    fontSize: 20,
    fontFamily:
      "pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif",
  },
  
});

export default OpenClass;
