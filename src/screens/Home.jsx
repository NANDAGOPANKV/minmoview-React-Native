import { StatusBar } from "expo-status-bar";
import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, View, FlatList } from "react-native";
import GenersCard from "../components/GenersCards/GenersCard";
import ItemSeperate from "../components/ItemSeperateComponent/ItemSeperate";
import MovieCard from "../components/movieCards/MovieCard";
import Color from "../constants/colors/Color";
import Fonts from "../constants/fontTypes/Fonts";
// movies api
import { getNowPlayingMovies } from "../services/MovieServices";

// Dummy Generes
const geners = [
  "All",
  "Action",
  "Comedy",
  "Horror",
  "Adventure",
  "Sci-Fi",
  "Drama",
  "Romantic",
];
// Completed - Dummy Genere

export default function Home() {
  const [generClick, setGenerClick] = useState("All");
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  useLayoutEffect(() => {
    getNowPlayingMovies()
      .then((res) => setNowPlayingMovies(res.data))
      .then(() => {
        console.log(nowPlayingMovies.results);
      });
    return () => {};
  }, []);
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor={Color.BASIC_BACKGROUND}
        //  // scroll set to vertical < | >
        translucent={false}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.subHeaderTitle}>VIEW ALL</Text>
      </View>
      {/* Generes container start*/}
      <View style={styles.genersListContainer}>
        <FlatList
          data={nowPlayingMovies.results}
          // scroll set to horizontal <--->
          horizontal
          // key to identify
          keyExtractor={(items) => items.results.id.toString()}
          // margin equaly in geners or button or box
          ItemSeparatorComponent={() => <ItemSeperate width={20} />}
          // margin in first geners or button or box
          ListHeaderComponent={() => <ItemSeperate width={15} />}
          // margin in last geners or button or box
          ListFooterComponent={() => <ItemSeperate width={10} />}
          // scroll null
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <GenersCard
              generesNames={item}
              active={item === generClick ? true : false}
              onPress={(genreNames) => setGenerClick(genreNames)}
            />
          )}
        />
      </View>
      {/* Generes container  end*/}
      {/* movie card start*/}
      <View>
        <FlatList
          data={geners}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(items) => items}
          ListHeaderComponent={() => <ItemSeperate width={20} />}
          ItemSeparatorComponent={() => <ItemSeperate width={20} />}
          ListFooterComponent={() => <ItemSeperate width={20} />}
          renderItem={({ item }) => <MovieCard />}
        />
      </View>
      {/* movie card end */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BASIC_BACKGROUND,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: Fonts.REGULAR,
  },
  subHeaderTitle: {
    fontSize: 18,
    color: Color.ACTIVE,
    fontFamily: Fonts.BOLD,
  },
  genersListContainer: {
    marginVertical: 14,
  },
});
