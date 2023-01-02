import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { CBG, GirlImage } from '../Utils/Import';
import { Tcho, Txt } from '../Utils/general';
import { Header } from '../Utils/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput, RadioButton } from 'react-native-paper';
import CircularProgressScreen from '../Components/CircularProgressScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const randomTop = getRandomNumber(0, windowHeight);
// const randomLeft = getRandomNumber(0, windowWidth);

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

export default function FullProfileScreen({ navigation }) {

    const submit = () => {
        navigation.navigate("PermissionScreen");
    }
    const goToBack = () => {
        navigation.goBack();
    }
    const closeBtn = () => {
        console.log("Cut Cut Cut");
    }
    const OpenSettings = () => {
        navigation.navigate("SettingsScreen");
    }
    return (
        <ScrollView style={{ backgroundColor: CBG, flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <ImageBackground source={GirlImage} style={styles.bgImage}>
                    <Header onPress={() => goToBack()} mr={10} bg="transparent" />
                    {/* <TouchableOpacity style={styles.previewStyle} onPress={() => OpenSettings()}>
                        <MaterialIcons size={30} color={"#000"} name="settings" />
                    </TouchableOpacity> */}
                </ImageBackground>
            </View>

            <View style={{padding:15, flexDirection:"row", justifyContent:"space-between"}}>
                <View>
                <Txt s={20}>Ollie</Txt>
                <Txt c="g" mt={10}>
                    30 woman Bisexual
                </Txt>
                <Txt c="g">
                    Browsing from your current location
                </Txt>
                <Txt c="g">
                    Basic Member
                </Txt>
                </View>
                <TouchableOpacity>
                  <MaterialIcons size={30} color={"#000"} name="edit" style={styles.editStyle} />
                </TouchableOpacity>
            </View>
            <View style={styles.progressViewStyle}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <CircularProgressScreen />
                <View style={{marginLeft:10}}>
                    <Txt c="g">Profile 50% complete</Txt>
                    <Txt>Next: Add 2 more photos</Txt>
                </View>
                </View>
                <MaterialIcons size={30} color={"gray"} name="chevron-right" />
            </View>

            <View style={styles.borderLine}></View>

            <View style={styles.nextButton}>
                <Tcho bg="#fff" ht={48} wd={311} br={44} cntr="cntr" mt={10}
                    onPress={() => submit()}
                    style={{flexDirection:"row", alignItems:"center"}}
                >
                    <MaterialIcons size={30} color={"#000"} name="outlined-flag" />
                    <Txt c="b">
                        Report this profile
                    </Txt>
                </Tcho>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        height: 200,
        width: "70%",
        alignSelf: "center",
        flexDirection: "row",
        //   alignItems:"center",
        justifyContent: "space-between"
    },
    radioGrp: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#f1f1f1"
    },
    nextButton: {
        // position:"absolute",
        marginVertical: 10,
        alignSelf: "center"
    },
    borderLine: {
        borderWidth: 0.5,
        width: "80%",
        alignSelf: "center",
        marginTop:20,
        borderColor:"gray"
    },
    previewStyle: {
        // backgroundColor: "red",
        marginTop: 5,
        marginRight: 5,
        height: 40,
        padding:5
    },
    editBtnStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        marginVertical: 15
    },
    lineFirst: {
        borderWidth: 0.4,
        width: "85%",
        borderColor: "gray",
        alignSelf: "center"
    },
    textInputStyle: {
        backgroundColor: "#fff",
        marginVertical: 5
    },
    editStyle:{
        backgroundColor:"#D1D1D1",
        padding:4,
        borderRadius:50
    },
    progressViewStyle:{
        margin:15,
        padding:15,
        backgroundColor:"#f1f1f1",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:15
    }
})