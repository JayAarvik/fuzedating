import { View, Text, Image, ImageBackground, StyleSheet} from 'react-native'
import React, {useState, useEffect} from 'react';
import { CBG, BGI } from '../Utils/Import';
import { Tcho, Txt } from '../Utils/general';
import {Header} from '../Utils/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput, RadioButton } from 'react-native-paper';

export default function IdentifyScreen({navigation}) {

  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState('Straight');

  const submit = () => {
    navigation.navigate("LookingForScreen");
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
        <Txt c="g"><Txt>4</Txt> of 10</Txt>
      </View>
      
      <View style={{}}>
        <Txt s={22} w="300" mt={30} a="c" pt={5} pb={5} mb={20}>
          you identify as...
        </Txt>
            
        <View>
      <RadioButton.Group 
        onValueChange={newValue => setValue(newValue)} 
        value={value} color={"#888"}>
      <View style={styles.radioGrp}>
        <Txt c="b" s={17} w="400">Straight</Txt>
        <RadioButton value="Straight" uncheckedColor={"gray"} color={'#000'} />
      </View>
      <View style={styles.radioGrp}>
        <Txt c="b" s={17} w="400">Gay</Txt>
        <RadioButton value="Gay" uncheckedColor={"gray"} color={'#000'}  />
      </View>
      <View style={styles.radioGrp}>
        <Txt c="b" s={17} w="400">Lesbian</Txt>
        <RadioButton value="Lesbian" uncheckedColor={"gray"} color={'#000'}  />
      </View>
      <View style={styles.radioGrp}>
        <Txt c="b" s={17} w="400">Bisexual</Txt>
        <RadioButton value="Bisexual" uncheckedColor={"gray"} color={'#000'}  />
      </View>
      <View style={styles.radioGrp}>
        <Txt c="b" s={17} w="400">Pansexual</Txt>
        <RadioButton value="Pansexual" uncheckedColor={"gray"} color={'#000'}  />
      </View>
      <View style={styles.radioGrp}>
        <Txt c="b" s={17} w="400">Polysexual</Txt>
        <RadioButton value="Polysexual" uncheckedColor={"gray"} color={'#000'}  />
      </View>
      <View style={styles.radioGrp}>
        <Txt c="b" s={17} w="400">Queer</Txt>
        <RadioButton value="Queer" uncheckedColor={"gray"} color={'#000'}  />
      </View>
      <View style={styles.radioGrp}>
        <Txt c="b" s={17} w="400">Androgynosexual</Txt>
        <RadioButton value="Androgynosexual" uncheckedColor={"gray"} color={'#000'}  />
      </View>
    </RadioButton.Group>
    </View>
    
      </View>
      
        <Tcho bg="#000" ht={48} wd={311} br={44} cntr="cntr" mt={50}
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
        radioGrp:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            marginHorizontal:20,
            marginVertical:8,
            borderBottomWidth:1,
            borderBottomColor:"#f1f1f1"
        }
})