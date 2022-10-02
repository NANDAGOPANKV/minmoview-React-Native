import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React, { useState } from "react";
import Color from "../../constants/colors/Color";
import { TouchableOpacity } from "react-native-gesture-handler";
// icon
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
// fonts
import Fonts from "../../constants/fontTypes/Fonts";
import images from "../../constants/images/images";

export default function MovieCard() {
  const [liked, setLiked] = useState(false);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imdbContainer}>
          <Image
            source={images.IMDB}
            resizeMode="cover"
            style={styles.imdbImage}
          />
          <Text style={styles.imdbRating}>9.4</Text>
        </View>
        <TouchableNativeFeedback onPress={() => setLiked(!liked)}>
          <Entypo
            name={liked ? "heart" : "heart-outlined"}
            size={35}
            color={liked ? Color.HEART : Color.WHITE}
            style={{ position: "absolute", bottom: 10, left: 10 }}
          />
        </TouchableNativeFeedback>
      </View>
      <View>
        <Text style={styles.movieTitle} numberOfLines={3}>
          URI - Surgical Strike
        </Text>
        <View style={styles.movieSubTitleContainer}>
          <Text style={styles.movieSubTitle}>Hindi | (U/A)</Text>
          <View style={styles.rowAndCenter}>
            <AntDesign
              name="heart"
              size={17}
              color={Color.HEART}
              style={{ marginRight: 5 }}
            />
            <Text>90%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.ACTIVE,
    width: 230,
    height: 340,
    borderRadius: 5,
    elevation: 3,
    marginVertical: 3,
  },
  movieTitle: {
    fontFamily: Fonts.EXTRABOLD,
    color: Color.GRAY,
    marginTop: 4,
    paddingVertical: 2,
    width: 230,
  },
  movieSubTitle: {
    fontSize: 12,
    fontFamily: Fonts.REGULAR,
  },
  movieSubTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imdbContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: Color.YELLOW,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 15,
    paddingVertical: 3,
  },
  imdbImage: {
    height: 30,
    width: 40,
    borderBottomLeftRadius: 5,
  },
  imdbRating: {
    marginRight: 5,
    color: Color.HEART,
    fontFamily: Fonts.EXTRABOLD,
  },
});
