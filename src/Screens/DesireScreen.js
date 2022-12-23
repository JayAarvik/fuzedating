import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react';
import { CBG, BGI } from '../Utils/Import';
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

export default function DesireScreen({navigation}) {

    const [data, setData] = useState([
        {"id":0, "tag":"singles", "size":120},
        {"id":1, "tag":"group", "size":90},
        {"id":2, "tag":"dominant", "size":95},
        {"id":3, "tag":"sensual", "size":100},
        {"id":4, "tag":"threeway", "size":80},
        {"id":5, "tag":"foreplay", "size":110},
        {"id":6, "tag":"friendship", "size":105},
        {"id":7, "tag":"submissive", "size":125},
    ])

  const submit = () => {
    navigation.navigate("AddPhotoScreen");
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
        <Txt c="g"><Txt>6</Txt> of 10</Txt>
      </View>
      
      <View style={{}}>
        <Txt s={22} w="300" mt={30} a="c" pt={5} pb={5} mb={20}>
          What are your desires and fantasies?
        </Txt>
        <Txt c="g" a="c">
          Selected tags will appear publicity on your profile.
        </Txt>
        <Txt c="g" a="c">
          You can edit them in Settings.
        </Txt>
      </View>
        
        <View style={{flexDirection:"row", flexWrap:"wrap-reverse"}}>
            {
                data.map((i,v) => {
                    // const randomTop = getRandomNumber(0, 250);
                    // const randomLeft = getRandomNumber(10, 250);
                    // const randomBottom = getRandomNumber(100, 250);
                    // const randomRight = getRandomNumber(10, 250);
                    return(
                        <TouchableOpacity 
                            style={{
                                height:i.size, 
                                width:i.size, 
                                borderRadius:500,
                                alignItems:"center",
                                justifyContent:"center",
                                backgroundColor:"#f1f1f1",
                                // position:"relative",
                                // top:randomTop,
                                // left:randomLeft,
                                // bottom:randomBottom,
                                // right:randomRight
                                }}>
                            <Txt>{i.tag}</Txt>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    <View style={styles.nextButton}>
      <Txt c="g" a="c" s={12} mt={20}>
          Choose up to 10 more tags.
        </Txt>
        <Tcho bg="#f3f3f3" ht={48} wd={311} br={44} cntr="cntr" mt={10}
              onPress={() => submit()}
        >
          <Txt c="b">
            Skip
          </Txt>
        </Tcho>
    </View>

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
        }, 
        nextButton:{
            position:"absolute",
            bottom:20,
            alignSelf:"center"
        }
})