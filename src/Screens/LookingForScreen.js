import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react';
import { CBG, BGI } from '../Utils/Import';
import { Tcho, Txt } from '../Utils/general';
import {Header} from '../Utils/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';

export default function LookingForScreen({navigation}) {

    const [checked, setChecked] = useState([]);
    const [data1, setData1] = useState([
        {"id":0, "name":"Woman", "value":"Woman", "checked":false},
        {"id":1, "name":"Man", "value":"Man", "checked":false},
        {"id":2, "name":"Man + Woman couple", "value":"ManWomanCouple", "checked":false},
        {"id":3, "name":"Man + Man couple", "value":"ManManCouple", "checked":false},
        {"id":4, "name":"Woman + Woman couple", "value":"WomanWomanCouple", "checked":false},
        {"id":5, "name":"Agender", "value":"Agender", "checked":false},       
        {"id":6, "name":"Androgynous", "value":"Androgynous", "checked":false},
        {"id":7, "name":"Bigender", "value":"Bigender", "checked":false},       
    ]);
    const [cond, setCond] = useState(true);

  const submit = () => {
    navigation.navigate("DesireScreen");
  }
  const goToBack = () => {
    navigation.goBack();
  } 
  const checkPress = (id) => {
    let arr = [];
    setCond(!cond);
    const data = data1;
    const index = data.findIndex(x => x.id === id);
    data1[index].checked = !data1[index].checked;
    setData1(data); 
    data1.map((i) => i.checked == true ? arr.push(i) : null);
    // console.log("D is:", arr);
    setChecked(arr);
  }
  // console.log("Final data is:", checked);
  const renderItem = (i) => {
    return(
                    <TouchableOpacity key={i.index} onPress={() => checkPress(i.item.id)} style={styles.tcStyle}>
                      <Txt s={17} w="400">{i.item.name}</Txt>
                        <CheckBox value={i.item.checked}  onValueChange={() => checkPress(i.item.id)}/>
                    </TouchableOpacity>
    )
  }
  return (
    <View style={{backgroundColor:CBG, flex:1}}>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Header onPress={() => goToBack()} mr={10} bg="#fff" />
        <Txt c="g"><Txt>5</Txt> of 10</Txt>
      </View>
      
      <View style={{}}>
        <Txt s={22} w="300" mt={30} a="c" pt={5} pb={5} mb={20}>
          Who are you looking for?
        </Txt>
          
      {/* <RenderData /> */}
      <FlatList
        data={data1}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
        },
        tcStyle:{
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between",
          marginHorizontal:15,
          marginVertical:5
        }
})