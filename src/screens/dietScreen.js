import React, { useState, useEffect } from "react";
import { Video } from 'expo-av';
import { StyleSheet,ScrollView, Linking,View,Image,TextInput } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';
import { VictoryPie,VictoryChart,VictoryTheme,VictoryAxis,VictoryBar } from "victory-native";
import everyScreen from "./everyScreen";
const defaultData = [
    { x: "碳水", y: 0 },
    { x: "蛋白質", y: 0 },
    { x: "脂肪", y: 100 },
  ];
  
  const sampleData = [
    { x: "碳水", y: 35 },
    { x: "蛋白質", y: 40 },
    { x: "脂肪", y: 55 },
  ];

  const dataColor = ["#388087", "#6fb3b8", "#badfe7"];
const heartScreen = ({ route }) => {
  const [graphicData, setGraphicData] = useState(defaultData);
  useEffect(() => {
    setGraphicData(sampleData);
  }, []);
  const [value, onChangeText] = useState('Useless Placeholder');


  return (
    <View style={style.allback}>
     
    <ScrollView >
    <View style={style.box}>
        <Text style={style.word1}>本日飲食紀錄</Text>
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    </View>
    <Video
  source={{ uri: 'https://github.com/lg30assqwedrf/11111111111111111/blob/master/Healthy%20Eating-%20An%20introduction%20for%20children%20aged%205-11%20(1).mp4?raw=true' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 340, height: 300 ,borderRadius:30,marginLeft:18                                                          ,marginTop:20}}
/>

  
    
   

     <View style={style.picback}>
       <Text style={style.word}>記錄圖</Text>
       <View style={style.pic}>
       <VictoryPie
        animate={{ easing: "exp" }}
        data={graphicData}
        height={280}
        width={300}
        colorScale={dataColor}
        innerRadius={50}
        labelRadius={60}
        cornerRadius={({ datum }) => datum.y * 5}
      />
     
     </View>
     
    </View>
    
    

    <View style={style.down}>
    <Text style={style.today}>顯示每天記錄</Text>
    <Image
                        style={style.pic1}
                        source={{uri:'https://github.com/lg30assqwedrf/image-test/blob/master/right.png?raw=true'}}/>
   </View>
   <TouchableOpacity 
            onPress={() => navigation.navigate('every', everyScreen)}
          >
   <View style={style.box1}>
      <Text style={style.contact}>Contact Us : (02)1234-5678</Text>
   </View>
   </TouchableOpacity>
  </ScrollView>
  </View>
  );
}
const style = StyleSheet.create({
  allback:{
 
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
  today:{
    fontSize:18,
    marginLeft:20,
    marginTop:13,
    
  },
  num:{
    fontSize:43,
    color:'#BF2828',
    marginLeft:100,
    fontWeight:'600'
  
  },
  average:{
    marginLeft:270,
    color:'#939393',

  },
  line1:{
  width:200,
  height:3,
  backgroundColor:'#AD3A3A',
  marginLeft:20,
  marginTop:5
  },
  line2:{
    width:100,
  height:3,
  backgroundColor:'#C5C4C4',
  marginLeft:200,
  marginTop:-3
  },

 picback:{
   height:330,
   width:330,
   backgroundColor:'#FFFFFF',
   marginLeft:25,
   marginTop:25,
   borderRadius:30,
 },
 pic:{
  height:289,
  width:300,
  marginLeft:-7,
  marginTop:5
 },
 word:{
    color:'#000',
    fontSize:19,
    marginLeft:20,
    marginTop:23,
 },
 box:{
marginTop:25,
marginLeft:25,
height:100,
width:330,
backgroundColor:'#FFFFFF',
borderRadius:22,

 },
 word1:{
fontSize:18,
marginLeft:20,
    marginTop:13,
 },
 stair:{
  fontSize:37,
  fontWeight:'600',
  marginLeft:200,
    marginTop:0,
 },
 down:{
  marginTop:25,
marginLeft:25,
height:45,
width:330,
backgroundColor:'#FFFFFF',
borderRadius:22,
 },
 pic1:{
    height:25,
    width:25,
    marginTop:-23,
    marginLeft:290

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
});

export default heartScreen;
