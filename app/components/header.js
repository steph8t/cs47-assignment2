import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Icons from "../../assets/Icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
    return (
        <View style={[styles.container, styles.height]}>
            <View style={styles.header}>
                <Image source={Icons.menu.light} style={styles.headerIcons} />
                <Text style={styles.title}>ensom</Text>
                <Image source={Icons.sun} style={styles.headerIcons} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  height: {
    ...Platform.select({
      ios: {
        height: 41,
      },
      android: {
        height: 54,
      },
    })
  },
    container: {
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    headerIcons: {
        height: windowWidth * 0.1,
        width: windowWidth * 0.1,
    },
    title: {
        fontFamily: 'Sydney-Bold',
        fontSize: 32,
    },
    header: {
        flexDirection: "row",
        width: windowWidth * 0.85,
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default Header;