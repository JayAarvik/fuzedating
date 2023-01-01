import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
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

export default function PermissionScreen({ navigation }) {

    const submit = () => {
        navigation.navigate("ImproveScreen");
    }
    const goToBack = () => {
        navigation.goBack();
    }
    const closeBtn = () => {
        console.log("Cut Cut Cut");
    }
    return (
        <View style={{ backgroundColor: CBG, flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Header onPress={() => goToBack()} mr={10} bg="#fff" />
                <Txt c="g"><Txt>9</Txt> of 10</Txt>
            </View>

            <View style={{ marginHorizontal: 15 }}>
                <View style={{}}>
                    <Txt s={22} w="300" mt={30} pt={5} pb={5} mb={20}>
                        Permissions
                    </Txt>
                    <Txt c="g">
                        A few things we need your permission to access before you begin.
                    </Txt>
                    {/* <Txt c="g" a="c">
          No connections or chat histories will be shared.
        </Txt> */}
                </View>
                <View style={{ flexDirection: "row", marginTop: 30 }}>
                    <MaterialIcons size={22} color={"#000"} name="notifications-none" />
                    <View style={{marginHorizontal:10}}>
                        <Txt s={22} w="300" pt={5} pb={5} mb={5}>
                            Notifications
                        </Txt>
                        <Txt c="g">
                            We notify you when you have a new Conneciton or receive a message.
                        </Txt>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 30 }}>
                    <MaterialIcons size={22} color={"#000"} name="location-on" />
                    <View style={{marginHorizontal:10}}>
                        <Txt s={22} w="300" pt={5} pb={5} mb={5}>
                            Location
                        </Txt>
                        <Txt c="g">
                            A few things we need your permission to access before you begin.
                        </Txt>
                    </View>
                </View>
            </View>

            <View style={styles.nextButton}>
                <Tcho bg="#000" ht={48} wd={311} br={44} cntr="cntr" mt={10}
                    onPress={() => submit()}
                >
                    <Txt c="w">
                        Next
                    </Txt>
                </Tcho>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        height: 350,
        width: "100%",
        alignSelf: "center",
        marginTop: 15
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
        position: "absolute",
        bottom: 20,
        alignSelf: "center"
    }
})