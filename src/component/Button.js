import React from "react";
import {Text, TouchableOpacity} from "react-native";

const Button = (props)=>{
    return(
        <TouchableOpacity style={styles.buttonStyle} onPress={props.buttonPress}>
        <Text style={styles.textStyle}>click me</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:6,
        paddingBottom:6,
        color:"white",
        textAlign:"center",
    },
    buttonStyle:{
        flex:1,
        alignSelf:"stretch",
        backgroundColor:"lightblue",
        botderWidth:1,
        borderColor:"gainsboro",
        marginLeft:5,
        marginRight:5,
    }
}

export default Button;