import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import Toast from "react-native-toast-message";
import { useState } from "react";
function GoalInput({ onAddGoal, modalIsVısıble, modalHandler }) {
  const [input, setInput] = useState("");
  const goalInputHandler = (enteredText) => {
    setInput(enteredText);
  };
  const addGoalHandler = () => {
    if (input) {
      onAddGoal(input);
      setInput("");
      modalHandler();
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Task cannot be empty",
      });
    }
  };
  return (
    <Modal
      visible={modalIsVısıble}
      animationType="slide"
      onRequestClose={() => {
        modalHandler();
      }}
      presentationStyle="pageSheet"
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/react.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Task"
          onChangeText={goalInputHandler}
          value={input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Task" color="#57acdc" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#c21b5b" onPress={modalHandler} />
          </View>
        </View>
      </View>
      <Toast />
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "25%",
    margin: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  image: {
    width: 150,
    height: 132,
    margin: 20,
  },
});
