import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ImageStyle,
} from "react-native";
import Svg, { SvgProps, Path, G, ClipPath, Defs, Rect } from "react-native-svg";
import Trs from "./assets/punch-hole-frame-vector-svg-trans.svg";

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

interface InsetRoundedCircleViewProps {
  children: ReactNode;
}
const InsetRoundedCircleView: React.FC<InsetRoundedCircleViewProps> = ({
  children,
}) => {
  return (
    <View style={styles2.wrapper}>
      <View style={styles2.childWrapper}>{children}</View>
      <View style={styles2.circle} />
    </View>
  );
};
const styles2 = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    overflow: "hidden", // Ensures that the child content does not spill over the rounded circle

    alignSelf: "flex-start",
  },
  childWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "navy",
  },
  circle: {
    position: "absolute",
    bottom: 0,
    right: -50,
    width: 100, // Width of the circle
    height: 100, // Height of the circle
    borderRadius: 50, // Half the width/height to make it a circle
    backgroundColor: "transparent", // Transparent background to see through the circle
  },
});

interface SvgBackgroundProps extends SvgProps {
  backgroundColor?: ImageStyle["backgroundColor"];
  children: ReactNode;
}
const SvgBackground = (props: SvgBackgroundProps) => {
  const { backgroundColor = "#000000", children, ...svgProps } = props;
  return (
    <View
      style={{
        flex: 1,
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        alignSelf: "flex-start",
        // alignItems: "center",
        // backgroundColor: "red",
        // zIndex: -1,
        // elevation: -1,
      }}
    >
      <Svg
        // xmlns="http://www.w3.org/2000/svg"
        // width="402.000000pt"
        // height="926.000000pt"
        // preserveAspectRatio="xMidYMid meet"
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        viewBox="0 0 402.000000 926.000000"
        preserveAspectRatio="none"
        color={backgroundColor}
        style={{ position: "absolute" }}
        {...svgProps}
      >
        <G
          transform="translate(0.000000,926.000000) scale(0.100000,-0.100000)"
          fill="currentColor"
          stroke="none"
        >
          <Path d="M0 4630 l0 -4630 2010 0 2010 0 0 376 c0 428 3 412 -85 499 -27 28 -80 68 -117 88 -125 69 -197 166 -219 295 -30 168 59 331 229 422 81 43 153 121 175 190 16 49 17 300 17 3721 l0 3669 -2010 0 -2010 0 0 -4630z" />
        </G>
      </Svg>
      {props.children}
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <SvgBackground backgroundColor={"orange"}>
        <Image
          style={{
            width: "100%",
            height: "60%",
            backgroundColor: "black",
            zIndex: 10,
          }}
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
            zIndex: 2,
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
          Amazon just inked a deal with chief competitor and Elon Musk-helmed
          SpaceX to launch internet-beaming satellites — a move that comes even
          as Amazon founder Jeff Bezos pursues his own space dreams with his own
          rocket company, Blue Origin, and as SpaceX builds its own internet
          constellation. While Musk and Bezos have notoriously been publicly
          competitive and have a history of openly sparring on social media,
          with Musk regularly making crude jokes about Bezos and Blue Origin, it
          is not uncommon for business rivals to team up in the world of rocket
          launches. Some Amazon satellites will still ride on a large rocket
          Amazon just inked a deal with chief competitor and Elon Musk-helmed
          SpaceX to launch internet-beaming satellites — a move that comes even
          as Amazon founder Jeff Bezos pursues his own space dreams with his own
          rocket company, Blue Origin, and as SpaceX builds its own internet
          constellation. While Musk and Bezos have notoriously been publicly
          competitive and have a history of openly sparring on social media,
          with Musk regularly making crude jokes about Bezos and Blue Origin, it
          is not uncommon for business rivals to team up in the world of rocket
          launches. Some Amazon satellites will still ride on a large rocket
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
      </SvgBackground>
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
