import React, { useState } from "react";
import {
  Text,
  LayoutAnimation,
  TouchableWithoutFeedback,
  UIManager,
  StyleSheet,
  Platform,
  View
} from "react-native";

import { Card } from "react-native-elements";

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  

const Panel = ({ content, title, expanded ,num,line1}) => {
  const [height, setHeight] = useState(expanded ? 0 : null);
  const onToggle = () => {
    LayoutAnimation.spring();
    setHeight(height === null ? 0 : null);
    setline(line === null ? 0 : null);
  };
  const [line,setline ]=useState(expanded ? 0 :null);
  const online = () => {
    LayoutAnimation.spring();
    setline(line === null ? 0 : null);
  };

  return (
    <TouchableWithoutFeedback onPress={() => onToggle()}>
      
      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.content, { height }]}>{content}</Text>
        <Text style={[styles.num, {height  }]}>{num}</Text>
        <View style={[styles.line1,{height}]}>{line1}</View>
      </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    overflow: "hidden",
    margin: 25,
    marginTop:13,
    borderRadius:25,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 15,
    textAlign: "left",
    marginLeft:30,
     marginBottom: 10,
  },
  content: {
    
    paddingRight: 10,
    marginBottom: 10,
    color:'#000',
    fontSize:25,
    marginLeft:250,

    fontWeight:'500' 
  },
  num:{
    marginBottom: 10,
    color:'#000',
    fontSize:20,
    marginLeft:275,
    marginTop:-33,
    fontWeight:'500' 
  },
  line1:{
    backgroundColor:'#DAD7D7',
    height:3,
    width:200,
    marginTop:-15,
    marginLeft:25,
    padding: 1.8,
    marginBottom:20,
    
},
});

export default Panel;
