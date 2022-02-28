import React from "react";
import { View, Text, Image,Linking } from "react-native";
import Item from "./Item";
import ItemSection from "./ItemSection";
import Button from "./Button";
const CarDetails = (props) => {
    return (
        <Item>
            <ItemSection>
                <View style={styles.HeaderStyle}>
                    <Text style={styles.HeaderText}>{props.car.brand}</Text>
                    <Text style={styles.HeaderText}>{props.car.model[1].name}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Image style={styles.ImageStyle} source={{ uri: props.car.model[1].image }} />
            </ItemSection>
            <ItemSection>
                <Button buttonPress={()=>{
                    Linking.openURL(props.car.model[1].url)
                }}/>
            </ItemSection>
        </Item>
    )
}

const styles = {
    HeaderStyle: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    HeaderText: {
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    ImageStyle: {
        flex: 1,
        height: 300,
        width: null,
    }

}

export default CarDetails;