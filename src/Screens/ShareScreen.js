import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Switch } from 'react-native'
import React, { useState, useEffect } from 'react';
import { CBG, GirlImage } from '../Utils/Import';
import { Tcho, Txt } from '../Utils/general';
import { Header } from '../Utils/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput, RadioButton } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const randomTop = getRandomNumber(0, windowHeight);
// const randomLeft = getRandomNumber(0, windowWidth);

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

export default function ShareScreen({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const submit = () => {
        navigation.navigate("AppearScreen");
    }
    const goToBack = () => {
        navigation.goBack();
    }
    const closeBtn = () => {
        console.log("Cut Cut Cut");
    }
    const ShowProfile = () => {
        navigation.navigate("ProfileScreen");
    }
    return (
        <ScrollView style={{ backgroundColor: CBG, flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Header onPress={() => goToBack()} mr={10} bg="transparent" />
                    {/* <Txt c="b" w="500">App Settings</Txt> */}
                </View>
            </View>

            <View style={{ padding: 15, marginTop:5 }}>
                <View style={styles.group}>
                    <View style={styles.group1}>
                        <MaterialIcons size={22} color={"#000"} name="sync" />  
                        <Txt s={17} w="400"> Pair profile with my partner</Txt>
                    </View>
                        <MaterialIcons size={22} color={"#000"} name="chevron-right" />
                </View>
                <View style={styles.borderLine}></View>
                <View style={styles.group}>
                    <View style={styles.group1}>
                        <MaterialIcons size={22} color={"#000"} name="edit" />  
                        <Txt s={17} w="400"> Edit Profile</Txt>
                    </View>
                        <MaterialIcons size={22} color={"#000"} name="chevron-right" />
                </View>
                <View style={styles.borderLine}></View>
                <View style={styles.group}>
                    <View style={styles.group1}>
                        <MaterialIcons size={22} color={"#000"} name="search" />  
                        <Txt s={17} w="400"> Search Settings</Txt>
                    </View>
                        <MaterialIcons size={22} color={"#000"} name="chevron-right" />
                </View>
                <View style={styles.borderLine}></View>
                <View style={styles.group}>
                    <View style={styles.group1}>
                        <MaterialIcons size={22} color={"#000"} name="tune" />  
                        <Txt s={17} w="400"> App Settings</Txt>
                    </View>
                        <MaterialIcons size={22} color={"#000"} name="chevron-right" />
                </View>
                <View style={styles.borderLine}></View>
                <View style={styles.group}>
                    <View style={styles.group1}>
                        <MaterialIcons size={22} color={"#000"} name="ios-share" />  
                        <Txt s={17} w="400"> Share My Profile</Txt>
                    </View>
                        <MaterialIcons size={22} color={"#000"} name="chevron-right" />
                </View>
                <View style={styles.borderLine}></View>

                <Txt s={13} c="g" mt={20} mb={15} w="500">
                    Feeld
                </Txt>
                
                <View style={styles.group}>
                        <Txt s={17} w="400">Blog</Txt>
                        <MaterialIcons size={22} color={"#000"} name="chevron-right" />
                </View>
                <View style={styles.borderLine}></View>
                <View style={styles.group}>
                        <Txt s={17} w="400">Our Community</Txt>
                        <MaterialIcons size={22} color={"#000"} name="chevron-right" />
                </View>
                <View style={styles.borderLine}></View>
                <View style={styles.group}>
                        <Txt s={17} w="400">About</Txt>
                        <MaterialIcons size={22} color={"#000"} name="chevron-right" />
                </View>
                <View style={styles.borderLine}></View>
                <View style={styles.group}>
                        <Txt s={17} w="400">Help</Txt>
                        <MaterialIcons size={22} color={"#000"} name="chevron-right" />
                </View>

            </View>

            

            <View style={styles.nextButton}>
                <Tcho bg="#000" ht={48} wd={311} br={44} cntr="cntr" mt={10}
                    onPress={() => submit()}
                >
                    <Txt c="w">
                        Share
                    </Txt>
                </Tcho>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    nextButton: {
        // position:"absolute",
        marginVertical: 10,
        alignSelf: "center"
    },
    borderLine: {
        borderWidth: 0.5,
        width: "100%",
        alignSelf: "center",
        borderColor:"#D3D3D3",
        marginVertical:15
    },
    group:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    group1:{
        flexDirection:"row",
        alignItems:"center",
        // justifyContent:"space-between"
    }
})