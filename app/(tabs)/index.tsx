import { FlatList, StyleSheet, View } from "react-native";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";

const index = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      {/* <Tweet tweet={tweets[0]} /> */}
    </View>
  );
};
export default index;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
});
