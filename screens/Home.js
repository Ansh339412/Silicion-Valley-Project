import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    

    render() {
        return (
            <View style={styles.container}>
                 <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker App</Text>
                    </View>
                  
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("IssLocation")
                    }>
                        <Text style={styles.routeText}>ISS Location</Text>
                        <Image source={require("../assets/iss_icon.png")} style={{ width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                  
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Meteors")
                    }>
                        <Text style={styles.routeText}>Meteors</Text>
                        <Image source={require("../assets/meteor_icon.png")} style={{ width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                  
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Updates")
                    }>
                        <Text style={styles.routeText}>Updates</Text>
                        <Image source={require("../assets/rocket_icon.png")} style={{ width: 80, height: 80 }}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    titleBar: {
        flex: 0.25,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    }
});