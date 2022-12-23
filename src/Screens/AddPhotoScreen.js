import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react';
import { CBG, BGI } from '../Utils/Import';
import { Tcho, Txt } from '../Utils/general';
import {Header} from '../Utils/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';

export default function AddPhotoScreen({navigation}) {

  const [date, setDate] = useState(new Date());

  const submit = () => {
    navigation.navigate("TogetherScreen");
  }
  const goToBack = () => {
    navigation.goBack();
  }
  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }
  return (
    <View style={{backgroundColor:CBG, flex:1}}>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Header onPress={() => goToBack()} mr={10} bg="#fff" />
        <Txt c="g"><Txt>7</Txt> of 10</Txt>
      </View>
      
      <View style={{marginBottom:50}}>
        <Txt s={22} w="300" mt={50} a="c" pt={5} pb={5} mb={20}>
          Tap + to add a photo
        </Txt>
        <View style={styles.imageView}>
        <TouchableOpacity style={styles.imageStyle} onPress={() => selectImage()}><Txt c="g" s={25} pt={5} pb={5}>+</Txt></TouchableOpacity>
        <TouchableOpacity style={styles.imageStyle}><Txt c="g" s={25} pt={5} pb={5}>+</Txt></TouchableOpacity>
        <TouchableOpacity style={styles.imageStyle}><Txt c="g" s={25} pt={5} pb={5}>+</Txt></TouchableOpacity>
        <TouchableOpacity style={styles.imageStyle}><Txt c="g" s={25} pt={5} pb={5}>+</Txt></TouchableOpacity>
        <TouchableOpacity style={styles.imageStyle}><Txt c="g" s={25} pt={5} pb={5}>+</Txt></TouchableOpacity>
        <TouchableOpacity style={styles.imageStyle}><Txt c="g" s={25} pt={5} pb={5}>+</Txt></TouchableOpacity>
        </View>
      </View>
      
        <Tcho bg="#000" ht={48} wd={311} br={44} cntr="cntr" mt={100}
              onPress={() => submit()}
        >
          <Txt c="w">
            Next
          </Txt>
        </Tcho>

    </View>
  )
}

const styles = StyleSheet.create({
        bgImage : {
          height:300,
          width:300,
          borderRadius:200,
          alignSelf:"center",
          marginTop:100
        },
        imageStyle:{
            borderWidth:1,
            height:100,
            width:100,
            justifyContent:"center",
            alignItems:"center",
            margin:5,
            borderColor:"#888"
        },
        imageView:{
            marginHorizontal:10,
            flexDirection:"row",
            justifyContent:"space-between",
            flexWrap:"wrap"
        }
})