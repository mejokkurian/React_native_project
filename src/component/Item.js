import React from "react";
import {View} from "react-native";

const Item = (props)=>{
    return(
        <View style={style.viewStyle}>
          {props.children}
        </View>
    )
}

const style = {
    viewStyle:{
        borderWidth:1,
        borderColor:"gainsboro",
        shadowColor:"black",
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.2,
        marginLeft  :5,
        marginRight :5,
        marginTop   :10,
    }
}

export default Item;

