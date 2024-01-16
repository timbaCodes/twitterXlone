import { FlatList, Pressable, StyleSheet, View, Text } from "react-native";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      {/* <Tweet tweet={tweets[0]} /> */}
      <Link href={"/new-tweet"} asChild>
        <Entypo
          name="plus"
          size={24}
          color="white"
          style={styles.floatingButton}
        />
      </Link>
    </View>
  );
};
export default index;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    backgroundColor: "#1D9BF0",
    borderRadius: 25,

    padding : 15,

    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    overflow: "hidden",
    elevation: 14,
  },
});
