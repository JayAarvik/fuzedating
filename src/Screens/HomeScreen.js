import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react';
import { CBG, BGI } from '../Utils/Import';
import { Tcho, Txt } from '../Utils/general';

export default function HomeScreen({navigation}) {

  const submit = () => {
    navigation.navigate("Login");
  }

  return (
    <View style={{backgroundColor:CBG}}>
        <ImageBackground source={BGI} resizeMode="cover" style={styles.bgImage}>
          <Txt c="w" pos="ab" bt={5} rt={10} lft={20} s={15} w="600"> 
            Fuze is a dating app for humans who are looking for dates and finding someone new. 
          </Txt>
        </ImageBackground>
        <Tcho bg="#000" ht={48} wd={311} br={44} cntr="cntr" mt={30}
              onPress={() => submit()}
        >
          <Txt c="w">
            Enter Feeld
          </Txt>
        </Tcho>
        <Txt c="g" a="c" mt={25} w="400" s={13}>
          By entering you agree to the 
           <Txt> Terms</Txt> and 
           <Txt> Privacy Policy</Txt> 
        </Txt>
    </View>
  )
}

const styles = StyleSheet.create({
        bgImage : {
          height:550,
        }
})