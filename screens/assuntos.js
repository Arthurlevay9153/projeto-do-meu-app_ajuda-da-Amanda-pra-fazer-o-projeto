//telas dos assuntos = equilvale a tela incial = olha na aba assets no FICADICA+...

import { Component } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  StyleSheet,
} from "react-native";
//import * as SplashScreen from "expo-splash-screen";
//SplashScreen.preventAutoHideAsync();
//import * as Font from "expo-font";

export default class Assuntos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image style={styles.image}></Image>
          <Text style={styles.text}>Tela dos assuntos</Text>{" "}
          {/*nome temporário*/}
        </View>

        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 30,
    fontFamily: "Bubbegum-Sans",
  },
  titleContainer: {
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

//constructor(props) {
//  super(props);
//  this.state = {
//   fontsLoaded: false,
//  }
//}

//async_loadFontAsync(){
//  await Font.loadAsync(customFonts);
//  this.setState({ fontsLoaded: true});
//}

//componentDidMount(){
//  this._loadFOntsAsync();
//}

//if (this.state,fontsLoaded){
//  SplashScreen.hideAsync();
//}
