import { StyleSheet, Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

type iconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
};

const IconButton = ({ icon, text }: iconButtonProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* icon */}
      <EvilIcons name={icon} size={22} color="gray" />
      {/* number */}
      <Text style={{ fontSize: 12, color: "gray" }}>{text}</Text>
    </View>
  );
};
export default IconButton;
const styles = StyleSheet.create({});
