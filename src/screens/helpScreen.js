import React ,{useState}from "react";
import { StyleSheet,ScrollView, Linking,View,Image } from 'react-native';
import { Button, Card, Text, PricingCard, Tile,CheckBox } from 'react-native-elements';
import { BorderlessButton } from "react-native-gesture-handler";


const targetScreen = ({ route }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={style.allback}>
    <ScrollView >
    
    <Text style={style.word1}>腹部痙攣</Text>
    <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        
      </View>
    <Text style={style.word}>食慾異常</Text>
    <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        
      </View>
    <Text style={style.word}>便祕</Text>
    <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        
      </View>
    <Text style={style.word}>乳房脹痛</Text>
    <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        
      </View>
    <Text style={style.word}>頭頸背痛</Text>
    <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        
      </View>
    <Text style={style.word}>脹氣</Text>
    <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        
      </View>
    <Text style={style.word}>疲倦</Text>
    <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        
      </View>
    <Text style={style.word}>腹瀉</Text>
    <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        
      </View>
    <Text style={style.word}>排卵痛</Text>
    <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={style.checkbox}
        />
        
      </View>
    <Text style={style.word}>其他</Text>
    
  </ScrollView>
  </View>
  );
}
const style = StyleSheet.create({
  allback:{
 height:580,
backgroundColor:'#DAD7D7'
  },
  
 word:{
  marginLeft:130,
  marginTop:3,
  fontSize:20
 },
 word1:{
      marginLeft:130,
      marginTop:40,
      fontSize:20,
      
    },
    checkboxContainer: {
      flexDirection: "row",
      marginTop: -36,
      marginLeft:80
    },
    checkbox: {
      alignSelf: "center",
      
    },

  
});

export default targetScreen;
