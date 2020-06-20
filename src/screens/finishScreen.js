import React ,{useState}from "react";
import { StyleSheet,ScrollView, Linking,View,Image} from 'react-native';
import { Button, Card, Text, PricingCard, Tile, withTheme,CheckBox } from 'react-native-elements';
import { BorderlessButton } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';

const finishScreen = ({ route }) => {
  const [isSelected, setSelection] = useState(false);
  
  return (
    <View style={style.allback}>
    <ScrollView >
    
    <Text style={style.word1}>腹部痙攣</Text>
    <View style={style.container}>
      <View style={style.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onPress={() => setSelection(!isSelected)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected}
        />
       
      </View>
      
    </View>
    <Text style={style.word}>食慾異常</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected}
          onPress={() => setSelection(!isSelected)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected}
        />
        
      </View>
    <Text style={style.word}>便祕</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected}
          onPress={() => setSelection(!isSelected)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected}
        />
        
      </View>
    <Text style={style.word}>乳房脹痛</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected}
          onPress={() => setSelection(!isSelected)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected}
        />
        
      </View>
    <Text style={style.word}>頭頸背痛</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected}
          onPress={() => setSelection(!isSelected)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected}
        />
        
      </View>
    <Text style={style.word}>脹氣</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected}
          onPress={() => setSelection(!isSelected)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected}
        />
        
      </View>
    <Text style={style.word}>疲倦</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected}
          onPress={() => setSelection(!isSelected)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected}
        />
        
      </View>
    <Text style={style.word}>腹瀉</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected}
          onPress={() => setSelection(!isSelected)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected}
        />
        
      </View>
    <Text style={style.word}>排卵痛</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected}
          onPress={() => setSelection(!isSelected)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected}
        />
        
      </View>
      
    <Text style={style.word}>其他</Text>
    <Image
                        style={style.pic}
                        source={{uri:'https://github.com/lg30assqwedrf/11111111111111111/blob/master/191997.png?raw=true'}}/>
    <View style={style.finish}></View>
    <Text style={style.word2}>完成</Text>
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
      marginTop:35,
      fontSize:20,
      
    },
    checkboxContainer: {
      flexDirection: "row",
      marginTop: -36,
      marginLeft:50
    },
    checkbox: {
      alignSelf: "center",
      marginLeft:-20
    },
    finish:{
      backgroundColor:'#2B475D',
      height:35,
      width:100,
      shadowColor: "#000",
      shadowOffset:{width:5,height:5},
      shadowOpacity:0.1,
      borderWidth:1,
      borderColor:'#d1d1d1',
      borderRadius:20,
      marginLeft:138,
      marginTop:50
    },
    word2:{
      fontSize:20,
      color:'white',
      marginTop:-27,
      marginLeft:168
    },
    pic:{
height:20,
width:20,
marginTop:-19,
marginLeft:71
    },
  
});

export default finishScreen;
