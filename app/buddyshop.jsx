import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-web";

const BuddyShop = ({ balance, stylesheet }) => {
  return (
    <View style={{ zIndex: 2 }}>
      <View
        style={{
          height: 1000,
          width: 844,
          position: "absolute",
          backgroundColor: "#d7d7d7",
        }}
      ></View>      

      <Text style={[stylesheet.titletext, {left: 30, fontSize: 35}]}>Shop:</Text>
      <Text style={[stylesheet.titletext, {left: 200, fontSize: 35}]}>{balance}x</Text>
      
      

      <View
        style={[
          stylesheet.class,
          {
            left: 20,
            top: 401,
          },
        ]}
      >
        <Text style={[stylesheet.nameofclass, { left: -15 }]}>10x</Text>
        <ImageBackground
          source={{ uri: "assets/monkey.png" }}
          style={stylesheet.classimage}
        ></ImageBackground>

        <ImageBackground
          source={{ uri: "assets/coin.png" }}
          style={[styles.imagestyle, { left: 25, top: 35, height: 24, width: 24 }]}
        ></ImageBackground>
      </View>

      <View
        style={[
          stylesheet.class,
          {
            left: 201,
            top: 194,
          },
        ]}
      >
        <Text style={[stylesheet.nameofclass, { left: -15 }]}>25x</Text>
        <ImageBackground
          source={{ uri: "assets/dog.png" }}
          style={stylesheet.classimage}
        ></ImageBackground>

        <ImageBackground
          source={{ uri: "assets/coin.png" }}
          style={[styles.imagestyle, { left: 25, top: 35, height: 24, width: 24 }]}
        ></ImageBackground>
      </View>

      <TouchableOpacity>
        <View
          style={[
            stylesheet.class,
            {
              left: 20,
              top: 194,
            },
          ]}
        >
          <Text style={[stylesheet.nameofclass, { left: -15 }]}>50x</Text>
          <ImageBackground
            source={{ uri: "assets/cat.png" }}
            style={stylesheet.classimage}
          ></ImageBackground>

          <ImageBackground
            source={{ uri: "assets/coin.png" }}
            style={[styles.imagestyle, { left: 25, top: 35, height: 24, width: 24 }]}
          ></ImageBackground>
        </View>
      </TouchableOpacity>

      <ImageBackground
        source={{ uri: "assets/coin.png" }}
        style={[styles.imagestyle, { left: 320, top: 125, height: 40, width: 40  }]}
      ></ImageBackground>

    </View>
  );
};

const styles = {
  root: {
    position: "relative",
    width: "390px",
    height: "844px",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: "32px",
    backgroundColor: "#d7d7d7",
    overflow: "hidden",
  },

  titletext: {
    color: "#2a2b2a",
    fontSize: "25px",
    lineHeight: "24px",
    width:'100%',
    fontFamily:
      "pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif",
    marginBottom: 5,
  },

  imagestyle: {
    width: 64,
    height: 64,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  
};

export default BuddyShop;
