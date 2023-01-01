import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
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

export default function ImproveScreen({navigation}) {

  const submit = () => {
    navigation.navigate("EditProfileScreen");
  }
  const goToBack = () => {
    navigation.goBack();
  } 
  const closeBtn = () => {
    console.log("Cut Cut Cut");
  }
  return (
    <View style={{backgroundColor:CBG, flex:1}}>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Header onPress={() => goToBack()} mr={10} bg="#fff" />
        <Txt c="g"><Txt>10</Txt> of 10</Txt>
      </View>
      
      <View>
            <Image source={GirlImage} style={styles.bgImage} />
      </View>
      
      <View style={{}}>
        <Txt s={22} w="300" mt={30} a="c" pt={5} pb={5} mb={5}>
          Help us improve Feeld
        </Txt>
        <View style={styles.borderLine}></View>
        <Txt c="g" a="c">
          We use external services to track how Feeld is
        </Txt>
        <Txt c="g" a="c">
        performing for you. We don't sell your data 
        </Txt>
        <Txt c="g" a="c">
        for advertising purposes.
        </Txt>
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

    </View>
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
            position:"absolute",
            bottom:20,
            alignSelf:"center"
        },
        borderLine:{
          borderWidth:0.5,
          width:"80%",
          alignSelf:"center",
          marginBottom:20
        }
})