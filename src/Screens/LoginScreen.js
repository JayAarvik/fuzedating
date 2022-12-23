import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react';
import { CBG, BGI } from '../Utils/Import';
import { Tcho, Txt } from '../Utils/general';
import {Header} from '../Utils/Header';

export default function LoginScreen({navigation}) {

  const submit = () => {
    navigation.navigate("DobScreen");
  }
  const goToBack = () => {
    navigation.goBack();
  } 
  return (
    <View style={{backgroundColor:CBG}}>
        <Header onPress={() => goToBack()} mr={10} />
        <Image source={BGI} 
                style={styles.bgImage}
        />
        <Tcho bg="#000" ht={48} wd={311} br={44} cntr="cntr" mt={50}
              onPress={() => submit()}
        >
          <Txt c="w">
            Continue with Email
          </Txt>
        </Tcho>
        
        <Tcho bg="#000" ht={48} wd={311} br={44} cntr="cntr" mt={20}
              onPress={() => submit()}
        >
          <Txt c="w">
            Continue with Facebook
          </Txt>
        </Tcho>

        <Tcho bg="#000" ht={48} wd={311} br={44} cntr="cntr" mt={20}
              onPress={() => submit()}
        >
          <Txt c="w">
            Continue with Phone
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