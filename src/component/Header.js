import React from "react";
import {Text, View} from "react-native";


const Header = (props)=>{
    const {textStyle,viewStyle} = styles;
    return(
        <View style={viewStyle} >
        <Text style={textStyle} >{props.titile}</Text>
        </View>
    )
}

// styling
const styles = {
    textStyle:{
        fontSize:22,
        fontWeight:'bold'   
    },
    viewStyle:{
        backgroundColor:"gainsboro",
        height:70,
        justifyContent:"center", 
        alignItems:"center",
        paddingTop:20,  
    }
}

export default Header;