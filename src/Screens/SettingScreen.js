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

export default function SettingsScreen({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const submit = () => {
        navigation.navigate("PermissionScreen");
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
                    <Header onPress={() => goToBack()} mr={10} bg="#fff" />
                    <Txt c="b" w="500">App Settings</Txt>
                </View>
            </View>

            <View style={{ padding: 15, marginTop:35 }}>
                <View style={styles.group}>
                    <Txt s={17} w="400">Show distances in miles</Txt>
                    <Switch
                        trackColor={{ false: "gray", true: "gray" }}
                        thumbColor={isEnabled ? "green" : "#f9f9f9"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.borderLine}></View>
                <View style={styles.group}>
                    <View>
                    <Txt s={17} w="400">Marketing notifications</Txt>
                    <Txt c="g">Receive notifications from Feeld</Txt>
                    </View>
                    <Switch
                        trackColor={{ false: "gray", true: "gray" }}
                        thumbColor={isEnabled ? "green" : "#f9f9f9"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.borderLine}></View>
                <View style={styles.group}>
                    <View>
                    <Txt s={17} w="400">Dawn theme</Txt>
                    <Txt c="g">Great for low-light conditions and lovers{'\n'}of the night.</Txt>
                    </View>
                    <Switch
                        trackColor={{ false: "gray", true: "gray" }}
                        thumbColor={isEnabled ? "green" : "#f9f9f9"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.borderLine}></View>
                <View style={styles.group}>
                    <Txt s={17} w="400">App icon</Txt>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Txt c="g">Feeld Orange</Txt>
                        <MaterialIcons size={22} color={"#000"} name="chevron-right" />
                    </View>
                </View>
                <View style={styles.borderLine}></View>

                
                <Txt c="g" mt={40} mb={20}>Your login methods</Txt>
                <View style={styles.group}>
                    <Txt s={17} w="400">Email</Txt>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Txt c="g">Add Email</Txt>
                        <MaterialIcons size={22} color={"#000"} name="chevron-right" />
                    </View>
                </View>
                <View style={styles.borderLine}></View>
                <View style={styles.group}>
                    <Txt s={17} w="400">Sign in with Apple</Txt>
                    <Txt c="g">On</Txt>
                </View>
                <View style={styles.borderLine}></View>
                <View style={styles.group}>
                    <Txt s={17} w="400">Facebook</Txt>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Txt c="g">Not linked</Txt>
                        <MaterialIcons size={22} color={"#000"} name="chevron-right" />
                    </View>
                </View>
                <View style={styles.borderLine}></View>

            </View>

            

            <View style={styles.nextButton}>
                <Tcho bg="#000" ht={48} wd={311} br={44} cntr="cntr" mt={10}
                    onPress={() => submit()}
                >
                    <Txt c="w">
                        Update
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
    }
})