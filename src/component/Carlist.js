import React, {Component} from "react";
import { ScrollView} from "react-native";
import axios from "axios";
import CarDetails from "./CarDetails"


class Carlist extends Component {
    constructor(){
        super();
        this.state = { carlist:[] };
    } 

    componentDidMount(){
        axios.get("https://givecars.herokuapp.com").then((response)=>{
            this.setState({carlist:response.data});
        });
    }
    
    renderLIst(){
        return this.state.carlist.map((car)=>{
            return(
               <CarDetails car={car} key={ car.model[0].name }/>
            )
        })
    }
    render(){
        console.log(this.state.carlist,"fddsfsdf");
        return(
            <ScrollView>
              {this.renderLIst()}
            </ScrollView>
        )
    }
}

export default Carlist;