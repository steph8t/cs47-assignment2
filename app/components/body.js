import { View, StyleSheet, Text, ImageBackground, Image, Dimensions } from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Body = () => {
    return (
        <View style={styles.bodyContainer}>
            <View>
              <ImageBackground 
                source={Profiles.mtl.image} 
                style={[styles.profileImage, styles.dropShadow]} 
                imageStyle={styles.imageStyle}
              >
                <Text style={styles.bigText}>{Profiles.mtl.name}</Text>
                <Text style={styles.smallText}>{Profiles.mtl.caption}</Text>
              </ImageBackground>
            </View>
            <View style={[styles.radioContainer, styles.dropShadow]}>
              <Text style={styles.radioText}>My hottest take</Text>
                <View style={styles.radioImageContainer}>
                  <Image source={Icons.player.light} style={styles.radioPlayer} />
                  <Image source={Icons.audioWave.light} style={styles.radioWave} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    radioContainer: {
      flexDirection: 'column',
      width: windowWidth * 0.85,
      backgroundColor: Themes.light.bgSecondary,
      borderRadius: 24,
    },
    radioImageContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    radioWave: {
      resizeMode: 'contain',
      height: windowHeight * 0.06,
      width: windowWidth * 0.6,
      marginBottom: windowHeight * 0.025,
    },
    radioPlayer: {
        resizeMode: 'contain',
        height: windowHeight * 0.06,
        width: windowHeight * 0.06,
        marginRight: '3%',
        marginBottom: windowHeight * 0.025,
      },
    radioText: {
      color: 'black',
      fontFamily: 'Sydney',
      fontSize: 24,
      margin: windowHeight * 0.02,
    },
    bodyContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    profileImage: {
      width: windowWidth * 0.85,
      aspectRatio: 1 / 1.1,
      justifyContent: "space-between",
      margin: windowHeight * 0.02,
    },
    imageStyle: {
      borderRadius: 12,
    },
    smallText: {
        padding: 12,
        color: 'white',
        fontFamily: 'Sydney',
        fontSize: 18,
    },
    bigText: {
        padding: 12,
        color: 'white',
        fontFamily: 'Sydney',
        fontSize: 32,
    },
    dropShadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
    },
});

export default Body;