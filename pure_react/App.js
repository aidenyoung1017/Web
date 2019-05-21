/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  TextInput, 
  Dimensions,
  Platfrom,
  ScrollView
} from 'react-native';
//import { SplashScreen } from 'react-native-splash-screen';
import uuidv1 from 'uuid/v1';
import ToDo from './ToDo';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const { height, width } = Dimensions.get("window");

//type Props = {};
export default class App extends React.Component{ //<Props> {
  
  state = {
    newToDo: "",
    loadedToDos: false,
    toDos: {}
  };

  componentDidMount = () => {
    this._loadToDos();
  }
  render() {
    const {newToDo, loadedToDos, toDos} = this.state;
    
    if(!loadedToDos) {
      
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}> Kawai To Do </Text>
        <View style={styles.card}>
          <TextInput 
            style={styles.input} 
            placeholder={"New To Do"}
            placeholderTextColor={"#999"}
            value={newToDo}
            onChangeText={this._controlNewToDo}
            returnKeyType={"done"}
            autoCorrect={false}
            onSubmitEditing={this._addToDo}
          />

          <ScrollView contentContainerStyle={styles.toDos}>
            {Object.values(toDos).map(toDo => 
            <ToDo 
              key={toDo.id} 
              deleteToDo={this._deleteToDo}
              uncompleteToDo={this._uncompleteToDo}
              completeToDo={this._completeToDo}
              {...toDo} 
              />
              )}
          </ScrollView>
        </View>
        
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
  _controlNewToDo = text => {
    this.setState({
      newToDo: text
    });
  };
  _loadToDos = () => {
    this.setState({
      loadedToDos: true
    })
  };
  _addToDo = () => {
    const { newToDo } = this.state;
    if(newToDo !== "") 
    {
      this.setState(prevState => {
        const ID = uuidv1();
        const newToDoObject = {
          [ID]: {
            id: ID,
            isCompleted: false,
            text : newToDo,
            createdAt: Date.now()
          }
        };
        const newState = {
          ...prevState,
          newToDo: "",
          toDos: {
            ...prevState.toDos,
            ...newToDoObject
          }
        }
        return { ...newState };
      });
      
    }
  };
  _deleteToDo = (id) => {
    this.setState(prevState => {
      const toDos = prevState.toDos;
      delete toDos[id];
      const newState = {
        ...prevState,
        ...toDos
      }
      return {...newState}
    })
  };
  _uncompleteToDo = (id) => {
    this.setState(prevState => {
        const newState = {
            ...prevState,
            toDos: {
                ...prevState.toDos,
                [id]: {
                    ...prevState.toDos[id],
                    isCompleted: false
                }
            }
        };
        return {...newState};
    });
  };
  _completeToDo = (id) => {
      this.setState(prevState => {
          const newState = {
              ...prevState,
              toDos: {
                  ...prevState.toDos,
                  [id]: {
                      ...prevState.toDos[id],
                      isCompleted: true
                  }
              }
          };
          return {...newState};
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F23657',
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop : 50,
    fontWeight : "400",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation:5
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 25
  },
  toDos:{
    alignItems: "center"
  },

  instructions: {
    textAlign: 'center',
    //justifyContent: 'end',
    color: '#333333',
    marginTop: 10,
    marginBottom: 10,
  },
});
