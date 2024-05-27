import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import Backyard from './backyard';
import OpenClass from './openclass';
import BuddyShop from './buddyshop';


const ClassPage = () => {

    let balance = 10;
    let streak = 2;
    let showPet = false;

    module.exports = {
        assets: ['./assets/fonts'],
    };

    const [fontLoaded, setFontLoaded] = useState(false);
    const [showBackyard, setShowBackyard] = useState(false);
    const [showClass, setShowClass] = useState(false);
    const [showShop, setShowShop] = useState(false);

    const openShop = () => {
        setShowShop(true);
    }

    const openBackyard = () => {
        setShowBackyard(!showBackyard);
    };

    const openClass = () => {
        setShowClass(true);
    };

    const homeScreen = () => {
        setShowClass(false);
        setShowBackyard(false);
        setShowShop(false);
    };


    useEffect(() => {
        async function loadFont() {
        await Font.loadAsync({
            'pixelfont': require('../assets/fonts/PressStart2P-Regular.ttf'),
            'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
            'RobotoMed': require('../assets/fonts/Roboto-Medium.ttf')
        });
        setFontLoaded(true);
        }

        loadFont();
    }, []);

    if (!fontLoaded) {
        return null;
    }

    return (

        <View style={[styles.root]}>

            <Text style={styles.classes}>Classes</Text>
            
            <TouchableOpacity 
                style={styles.shopbutton} onPress={openShop}> 
            </TouchableOpacity>

            {showShop && <BuddyShop 
                balance={balance}
            />}

            <TouchableOpacity style={styles.btn} onPress={openBackyard}>
                <Text style={styles.visitYourBuddies}>Visit Your Buddies</Text>
            </TouchableOpacity>

            {showBackyard && <Backyard 
                balance={balance}
                streak={streak}
                showPet={showPet}
            />}
            
            {showClass && <OpenClass />}

            
            {(showBackyard || showClass || showShop) &&
            <TouchableOpacity style={styles.backicon} onPress={homeScreen}></TouchableOpacity>}

            <View style={styles.logo}></View>

            


            <View style={
                [styles.class, {
                left: 20,
                top: 401,}]}
            >
                <Text style={styles.nameofclass}>SENG 440</Text>
                <Text style={styles.nameofteacher}>Dr. Mihai Sima</Text>
                <View style={[styles.classimage,, {backgroundImage: 'url("assets/monkey.png")',}]}></View>

            </View>

            <View style={
                [styles.class, {
                left: 201,
                top: 194,}]}
            >
                <Text style={styles.nameofclass}>CHEM 101</Text>
                <Text style={styles.nameofteacher}>Dr. Alex Brolo</Text>
                <View style={[styles.classimage,, {backgroundImage: 'url("assets/dog.png")',}]}></View>

            </View>

            <TouchableOpacity onPress={openClass}>
                <View style={
                    [styles.class, {
                    left: 20,
                    top: 194,}]}
                >
                    <Text style={styles.nameofclass}>MATH 100</Text>
                    <Text style={styles.nameofteacher}>Dr. Treffor Bazett</Text>
                    <View style={[styles.classimage,, {backgroundImage: 'url("assets/cat.png")',}]}></View>

                </View>
            </TouchableOpacity>
            
            

            <View style={styles.createclass}>
                <Text style={styles.nameofclass}>New Class</Text>
                <View style={[styles.classimage, {backgroundImage: 'url("assets/plus.png")', top: 35}]}></View>
        
            </View>

        
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

    logo: {
        zIndex: "20000",
        position: 'absolute',
        left: 300,
        top: 30,
        width: 64,
        height: 64,
        backgroundImage: 'url("assets/logo.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',    
    },

    shopbutton: {
        position: 'absolute',
        left: 30,
        top: 30,
        width: 64,
        height: 64,
        backgroundImage: 'url("assets/shop.png")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    nameofclass: {
        color: 'black',
        fontSize: 13,
        fontFamily: 'pixelfont, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif',
        whiteSpace: 'nowrap',
        top:125
    },

    nameofteacher: {
        color: '#2a2b2a',
        fontSize: 7,
        fontFamily: 'pixelfont',
        top:135,
    },

    classimage: {
        width: 68,
        height: 68,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 23
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

    class: {
      outline: 'solid 1px #282424',
      backgroundColor: '#e4e4e4',
      borderWidth: 2,
      borderRadius: 24,
      width: 169,
      height: 186,
      alignItems: 'center',
      position: 'absolute'    
    },
    
    createclass: {
      position: 'absolute',
      left: 201,
      top: 401,
      width: 169,
      height: 186,
      border: '2px dotted black',
      outlineOffset: '-1px',
      borderRadius: 24,
      alignItems: 'center',
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
        zIndex: '100000000',
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
    
  });
  
export default ClassPage;