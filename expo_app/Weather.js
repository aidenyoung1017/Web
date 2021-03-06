import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from "expo";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

// export default class Weather extends Component{
//     render(){
//         return (
//             <LinearGradient 
//             colors={["#00C6FB", "#005BEA"]} 
//             style={styles.container}>
            
//             <View style={styles.upper}>
//                 <Ionicons color="white" size={144} name="ios-rainy"/>
//                 <Text style={styles.temp}>35'</Text>
//             </View>
//             <View style={styles.lower}>
//                 <Text style={styles.title}>Raining Like a MF!</Text>
//                 <Text style={styles.subtitle}>For more info look outside!</Text>
//             </View>

//             </LinearGradient>

//         );
//     }
// }

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: 'weather-rainy'
    },
    Clear:{
        colors:["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "Go get your ass burnt",
        icon: 'weather-sunny'
    },
    Thunderstorm:{
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: 'weather-lightning'
    },
    Clouds:{
        colors:["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I Know, fucking boring",
        icon: 'weather-cloudy'
    },
    Snow:{
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no.",
        icon: 'weather-snowy'
    },
    Drizzle:{
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay Rainbow",
        icon: 'weather-hail'
    },
    Haze:{
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Don't Know what that is",
        icon: 'weather-fog'
    },
    Mist:{
        colors:["#D7D2CC", "#304352"],
        title: "Mist",
        subtitle: "I Know, fucking boring",
        icon: 'weather-fog'
    }
}

function Weather( { weatherName, temp } ){
    console.log(weatherName);
    return(
        <LinearGradient 
            colors={weatherCases[weatherName].colors}
            style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons 
                    color="white" 
                    size={144} 
                    name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}> {temp}°C </Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}> {weatherCases[weatherName].title} </Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"transparent"
    },
    temp:{
        color:"white",
        fontSize:24,
        backgroundColor:"transparent",
        marginTop:10
    },

    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft:25
    },
    title:{
        color:"white",
        fontSize:38,
        backgroundColor:"transparent",
        marginBottom:10,
        fontWeight: "300"
    },
    subtitle:{
        color:"white",
        fontSize:24,
        backgroundColor:"transparent",
        marginBottom:24
    }

});