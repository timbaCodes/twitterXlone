import { StyleSheet, Text, View, Image } from "react-native";



const Tweet = (props) => {
  return (
    <View style={styles.container}>
      <Image src={props.tweet.user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{props.tweet.user.name}</Text>
        <Text style={styles.content}>{props.tweet.content}</Text>
      </View>
    </View>
  );
};
export default Tweet;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding:10,
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderColor:"lightgrey",
    backgroundColor:"white",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex:1,
  },
  name: {
    fontWeight: "600",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});
