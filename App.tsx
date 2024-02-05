import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

const image = require("./assets/punch_hole_view.png");
const GAP = 20;
const IMAGE_WIDTH = Dimensions.get("screen").width - GAP;
const IMAGE_HEIGHT = Dimensions.get("screen").height;
interface PunchHoleViewProps {
  children: ReactNode;
}
const PunchHoleView: React.FC<PunchHoleViewProps> = ({ children }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {children}
    </ImageBackground>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <PunchHoleView>
        <Text>Open up App.tsx to start working on your app!</Text>
      </PunchHoleView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // self
    flex: 1,
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    alignSelf: "flex-start",
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android

    // child
    justifyContent: "center",
    alignItems: "center",
  },
});
