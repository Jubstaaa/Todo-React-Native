import { Text, View, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function GoalItem({ itemData, onDeleteGoal = false, color }) {
  const deleteGoalHandler = () => {
    onDeleteGoal(itemData.item);
  };

  return (
    <View style={{ ...styles.goalItem, backgroundColor: color }}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
      <Pressable
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        {onDeleteGoal && <Icon name="checkcircleo" size={30} color="#fff" />}
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 6,
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});
