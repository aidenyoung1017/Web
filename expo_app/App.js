import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from "./Weather";
import { Ionicons } from "@expo/vector-icons";

const API_KEY = "4bf9fb002aa083a8918110bcf01999d0";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error:null,
    temperature:null,
    name:null
  };

  componentDidMount(){ 
    navigator.geolocation.getCurrentPosition(
      position => {
         this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error:error
        });
      }
    );  
  }

  _getWeather = (lat, lon) => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        isLoaded: true
      })
    })
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar style="light-content" hidden={true}>
        </StatusBar>
        {isLoaded ? (
          <Weather weatherName={name} temp={Math.ceil(temperature - 273.15)} />
          ) : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>
                Getting the fucking weather
              </Text> 
              <Text style={styles.errorText}> {error} </Text>
              {error ? <Text style={styles.errorText}> {error} </Text> : null}
            </View>
        )} 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  errorText:{
    color:"red",
    backgroundColor: "transparent",
    marginBottom:40
  },
  loading:{
    flex:1,
    backgroundColor: "#FDF6AA",
    justifyContent: 'flex-end',
    paddingLeft: 25,
    paddingRight: 25
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 24
  }
  
});
