import { View, Text, Image, ImageBackground, StyleSheet} from 'react-native'
import React, {useState, useEffect} from 'react';
import { CBG, BGI } from '../Utils/Import';
import { Tcho, Txt } from '../Utils/general';
import {Header} from '../Utils/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-paper';

export default function CallmeScreen({navigation}) {

  const [date, setDate] = useState(new Date());

  const submit = () => {
    navigation.navigate("SelectGenderScreen");
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
        <Txt c="g"><Txt>2</Txt> of 10</Txt>
      </View>
      
      <View style={{marginBottom:50, marginTop:50}}>
        <Txt s={22} w="300" mt={50} a="c" pt={5} pb={5} mb={20}>
          Call me by...
        </Txt>
            <TextInput 
                maxLength={10}
                right={<TextInput.Icon onPress={() => closeBtn()} icon="close" size={20} iconColor="gray" />}
                style={{backgroundColor:"#fff", alignSelf:"center", width:"85%", padding:0}}
            />
        
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
        }
})