import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react';
import { CBG, BGI } from '../Utils/Import';
import { Tcho, Txt } from '../Utils/general';
import {Header} from '../Utils/Header';
import DatePicker from 'react-native-date-picker'

export default function DobScreen({navigation}) {

  const [date, setDate] = useState(new Date());

  const submit = () => {
    navigation.navigate("CallmeScreen");
  }
  const goToBack = () => {
    navigation.goBack();
  } 
  return (
    <View style={{backgroundColor:CBG, flex:1}}>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Header onPress={() => goToBack()} mr={10} bg="#fff" />
        <Txt c="g"><Txt>1</Txt> of 10</Txt>
      </View>
      
      <View style={{marginBottom:50, marginTop:50}}>
        <Txt s={22} w="300" mt={50} a="c" pt={5} pb={5}>
          What's your date of birth?
        </Txt>
        <Txt c="g" a="c">
          We need this to represent your age accurately. 
        </Txt>
        <Txt c="g" a="c">
          Your date of birth will not be visible.
        </Txt>
      </View>
      
        <DatePicker 
         style={{alignSelf:"center"}}
          date={date} 
          onDateChange={setDate} 
          mode="date"
          />
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