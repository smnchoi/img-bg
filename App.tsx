import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

const images = {
  full: require("./assets/punch_hole_full_view.png"),
  partial: require("./assets/punch_hole_view.png"),
};
const GAP = 20;
const IMAGE_WIDTH = Dimensions.get("screen").width - GAP;
const IMAGE_HEIGHT = Dimensions.get("screen").height;
interface PunchHoleFullViewProps {
  children: ReactNode;
}
const PunchHoleFullView: React.FC<PunchHoleFullViewProps> = ({ children }) => {
  return (
    <ImageBackground
      source={images.full}
      resizeMode="cover"
      style={styles.fullImage}
    >
      {children}
    </ImageBackground>
  );
};

interface PunchHoleViewProps {
  children: ReactNode;
}
const PunchHoleView: React.FC<PunchHoleViewProps> = ({ children }) => {
  return (
    <ImageBackground
      source={images.partial}
      resizeMode="stretch"
      style={styles.partialImage}
    >
      {children}
    </ImageBackground>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <PunchHoleView>
        <Image
          style={{ width: "100%", height: 400, backgroundColor: "grey" }}
          resizeMode="cover"
          source={{
            uri: "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1",
          }}
        />
        <Text
          style={{
            color: "white",
            padding: 10,
            lineHeight: 20,
            fontWeight: "bold",
          }}
        >
          Amazon taps SpaceX for satellite launch even though Jeff Bezos is
          right there
        </Text>
        <Text
          style={{
            color: "white",
            padding: 10,
            paddingRight: 40,
            lineHeight: 20,
          }}
        >
          Amazon just inked a deal with chief competitor and Elon Musk-helmed
          SpaceX to launch internet-beaming satellites — a move that comes even
          as Amazon founder Jeff Bezos pursues his own space dreams with his own
          rocket company, Blue Origin, and as SpaceX builds its own internet
          constellation. While Musk and Bezos have notoriously been publicly
          competitive and have a history of openly sparring on social media,
          with Musk regularly making crude jokes about Bezos and Blue Origin, it
          is not uncommon for business rivals to team up in the world of rocket
          launches. Some Amazon satellites will still ride on a large rocket
        </Text>
      </PunchHoleView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  fullImage: {
    // self
    flex: 1,
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    alignSelf: "flex-start",
    // // shadow
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5, // For Android

    // child
    justifyContent: "center",
    alignItems: "center",
  },
  partialImage: {
    // self
    flex: 1,
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    alignSelf: "flex-start",
    // left: -2,

    // // shadow
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5, // For Android

    // child
    // justifyContent: "center",
    alignItems: "center",
  },
});
