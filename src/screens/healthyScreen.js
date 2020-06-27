import React, { useState, useEffect } from "react";

import { StyleSheet,ScrollView, Linking,View,Image,TouchableOpacity } from 'react-native';
import { Button, Card, Text, PricingCard, Tile ,CheckBox} from 'react-native-elements';
import { VictoryPie,VictoryChart,VictoryTheme,VictoryAxis,VictoryBar } from "victory-native";



const DetailScreen = ({ route }) => {
  const [isSelected1, setSelection1]=useState(false);
  const [isSelected2, setSelection2]=useState(false);
  const [isSelected3, setSelection3]=useState(false);
  const [isSelected4, setSelection4]=useState(false);
  const [isSelected5, setSelection5]=useState(false);
  const [isSelected11, setSelection11]=useState(false);
  const [isSelected22, setSelection22]=useState(false);
  const [isSelected33, setSelection33]=useState(false);
  const [isSelected44, setSelection44]=useState(false);
  const [isSelected55, setSelection55]=useState(false);
  const [isSelected111, setSelection111]=useState(false);
  const [isSelected222, setSelection222]=useState(false);
  const [isSelected333, setSelection333]=useState(false);
  const [isSelected444, setSelection444]=useState(false);
  const [isSelected555, setSelection555]=useState(false);
  const [score,setscore]=useState(0);

  return (
    <View style={style.allback}>
     
    <ScrollView >
    
    

    <View style={style.back}>
        
        <Text style={style.num}>健康自評</Text>
       
    </View>
   

     <View style={style.picback}>
       <Text style={style.word}>過去一週運動次數</Text>
       <Text style={style.word1}>一次</Text>
       <Text style={style.word1}>二次</Text>
       <Text style={style.word1}>三次</Text>
       <Text style={style.word1}>四次</Text>
       <Text style={style.word1}>五次以上</Text>
       <View style={style.checkboxContainer}>
       <CheckBox
          value={isSelected1}
          onPress={() => setSelection1(!isSelected1)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected1}
        />
        
         <CheckBox
          value={isSelected2}
          onPress={() => setSelection2(!isSelected2)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected2}
        />
         <CheckBox
          value={isSelected3}
          onPress={() => setSelection3(!isSelected3)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected3}
        />
         <CheckBox
          value={isSelected4}
          onPress={() => setSelection4(!isSelected4)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected4}
        />
      <CheckBox
          value={isSelected5}
          onPress={() => setSelection5(!isSelected5)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected5}
        />
        </View>
    </View>
    
    <View style={style.picback}>
       <Text style={style.word}>過去一週大號次數</Text>
       <Text style={style.word1}>一次</Text>
       <Text style={style.word1}>二次</Text>
       <Text style={style.word1}>三次</Text>
       <Text style={style.word1}>四次</Text>
       <Text style={style.word1}>五次以上</Text>
       <View style={style.checkboxContainer}>
       <CheckBox
          value={isSelected11}
          onPress={() => setSelection11(!isSelected11)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected11}
        />
        
         <CheckBox
          value={isSelected22}
          onPress={() => setSelection22(!isSelected22)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected22}
        />
         <CheckBox
          value={isSelected33}
          onPress={() => setSelection33(!isSelected33)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected33}
        />
         <CheckBox
          value={isSelected44}
          onPress={() => setSelection44(!isSelected44)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected44}
        />
      <CheckBox
          value={isSelected55}
          onPress={() => setSelection55(!isSelected55)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected55}
        />
        </View>
    </View>
    <View style={style.picback}>
       <Text style={style.word}>一天喝水量</Text>
       <Text style={style.word1}>不太喝水</Text>
       <Text style={style.word1}>五百毫升</Text>
       <Text style={style.word1}>一千毫升</Text>
       <Text style={style.word1}>一千五毫升</Text>
       <Text style={style.word1}>兩千毫升</Text>
       <View style={style.checkboxContainer}>
       <CheckBox
          value={isSelected111}
          onPress={() => setSelection111(!isSelected111)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected111}
        />
        
         <CheckBox
          value={isSelected222}
          onPress={() => setSelection222(!isSelected222)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected222}
        />
         <CheckBox
          value={isSelected333}
          onPress={() => setSelection333(!isSelected333)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected333}
        />
         <CheckBox
          value={isSelected444}
          onPress={() => setSelection444(!isSelected444)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected444}
        />
      <CheckBox
          value={isSelected555}
          onPress={() => setSelection555(!isSelected555)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected555}
        />
        </View>
    </View>
    <TouchableOpacity
    onPress={() => setscore(((isSelected1+isSelected2*2+isSelected3*3+isSelected4*4+isSelected5*5)+(isSelected11+isSelected22*2+isSelected33*3+isSelected44*4+isSelected55*5)+(isSelected111+isSelected222*2+isSelected333*3+isSelected444*4+isSelected555*5))*7-5)}>
   <View style={style.box5}>
    <Text style={style.word2}>提交</Text>
    </View>
</TouchableOpacity>
    <View style={style.back}>
        
  <Text style={style.num}>{score}</Text>
       
    </View>

    <View style={style.box1}>
      <Text style={style.contact}>Contact Us : (02)1234-5678</Text>
   </View>
  </ScrollView>
  </View>
  );
}
const style = StyleSheet.create({
  allback:{
 flex:1,
backgroundColor:'#DAD7D7'
  },
  back:{
    height:120,
    width:330,
    backgroundColor:'#FFFFFF',
    marginLeft:25,
    marginTop:25,
    borderRadius:25,
  },
 
  num:{
    fontSize:43,
    color:'#BF2828',
    marginTop:35,
    fontWeight:'600',
  textAlign:'center'
  },
 
  checkboxContainer: {
    flexDirection: "column",
    marginTop: -260,
    marginLeft:-250
  },
  checkbox: {
    alignSelf: "center",
    marginLeft:-20
  },
 picback:{
   height:340,
   width:330,
   backgroundColor:'#FFFFFF',
   marginLeft:25,
   marginTop:25,
   borderRadius:30,
 },

 word:{
    color:'#000',
    fontSize:19,
    marginLeft:20,
    marginTop:23,
 },
 
 word1:{
  marginLeft:100,
  marginTop:35,
  fontSize:20
 },
 
 box1:{
  height:30,
    width:600,
    marginTop:25,
    backgroundColor:'#2B475D',
 },
 contact:{
    color:'#fff',
    marginLeft:95,
    marginTop:7
 },
 box5:{
  marginTop:20,
  marginLeft:160,
  height:30,
  width:50,
  backgroundColor:'#FFBB66',
  borderRadius:20
 },
 word2:{
   textAlign:'center',
   marginTop:8
 }
});

export default DetailScreen;
