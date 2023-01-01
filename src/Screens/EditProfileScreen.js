import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react';
import { CBG, GirlImage } from '../Utils/Import';
import { Tcho, Txt } from '../Utils/general';
import {Header} from '../Utils/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput, RadioButton } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const randomTop = getRandomNumber(0, windowHeight);
// const randomLeft = getRandomNumber(0, windowWidth);

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;   
  }

export default function EditProfileScreen({navigation}) {

  const submit = () => {
    navigation.navigate("SeeConnScreen");
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
    <ScrollView style={{backgroundColor:CBG, flex:1}}>    
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
        <Header onPress={() => goToBack()} mr={10} bg="#fff" />
        <Txt c="b" w="500">Edit Profile</Txt>
        </View>
        <TouchableOpacity style={styles.previewStyle} onPress={() => ShowProfile()}>
            <Txt w="500" mr={5}>Preview</Txt>
            <MaterialIcons size={20} color={"#000"} name="remove-red-eye" />
        </TouchableOpacity>
      </View>
      <View>
            <Image source={GirlImage} style={styles.bgImage} />
            <TouchableOpacity style={styles.editBtnStyle}>
                <Txt s={15} w="500">Edit photos</Txt>
                <MaterialIcons size={22} color={"#000"} name="chevron-right" />
            </TouchableOpacity>
            <View style={styles.lineFirst}></View>
      </View>

      <View style={{marginTop:25, paddingHorizontal:30}}>
        <TextInput
            label={"Imaginary name"}
            style={styles.textInputStyle}
        />
        <TextInput
            label={"Date of birth"}
            style={styles.textInputStyle}
        />
      </View>
      
      
    <View style={styles.nextButton}>
    <Tcho bg="#000" ht={48} wd={311} br={44} cntr="cntr" mt={10}
              onPress={() => submit()}
        >
          <Txt c="w">
            Continue
          </Txt>
        </Tcho>
    </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
        bgImage : {
          height:350,
          width:"100%",
          alignSelf:"center",
          marginTop:15
        },
        radioGrp:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            marginHorizontal:20,
            marginVertical:8,
            borderBottomWidth:1,
            borderBottomColor:"#f1f1f1"
        }, 
        nextButton:{
            // position:"absolute",
            marginVertical:10,
            alignSelf:"center"
        },
        borderLine:{
          borderWidth:0.5,
          width:"80%",
          alignSelf:"center",
          marginBottom:20
        },
        previewStyle:{
            backgroundColor:"#f1f1f1",
            paddingVertical:15,
            paddingHorizontal:15,
            borderRadius:50,
            flexDirection:"row",
            // alignItems:"center",
            justifyContent:"space-between",
            marginTop:5,
            marginRight:5
        },
        editBtnStyle:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            paddingHorizontal:30,
            marginVertical:15
        },
        lineFirst:{
            borderWidth:0.4,
            width:"85%",
            borderColor:"gray",
            alignSelf:"center"
        },
        textInputStyle:{
            backgroundColor:"#fff",
            marginVertical:5
        }
})