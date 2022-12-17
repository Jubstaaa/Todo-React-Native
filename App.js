import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Completed from "./components/Completed";
export default function App() {
  const [modalIsVısıble, setModalIsVisible] = useState(false);
  const [completedModal, setCompletedModal] = useState(false);
  const [goals, setGoals] = useState([]);
  const [completed, setCompleted] = useState([]);

  const modalHandler = () => {
    setModalIsVisible((currentModalIsVisible) => !currentModalIsVisible);
  };

  const completedModalHandler = () => {
    setCompletedModal((currentCompletedModal) => !currentCompletedModal);
  };

  const addGoalHandler = (input) => {
    setGoals((currentGoals) => [...currentGoals, { text: input, id: input }]);
  };
  const deleteGoalHandler = (task) => {
    setGoals((currentGoals) =>
      currentGoals.filter((item) => item.id !== task.id)
    );
    setCompleted((currentCompleted) => [...currentCompleted, task]);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add New Task" onPress={modalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="Completed Tasks"
              color={"#60c689"}
              onPress={completedModalHandler}
            />
          </View>
        </View>

        <GoalInput
          onAddGoal={addGoalHandler}
          modalIsVısıble={modalIsVısıble}
          modalHandler={modalHandler}
        />

        <View style={styles.goalsContainer}>
          <View style={styles.goalsList}>
            <Text style={styles.goalsListText}>List of tasks...</Text>
          </View>

          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  onDeleteGoal={deleteGoalHandler}
                  color={"#57acdc"}
                />
              );
            }}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
          />
          <Completed
            completed={completed}
            completedModalHandler={completedModalHandler}
            completedModal={completedModal}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "40%",
  },
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsList: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  goalsListText: {
    color: "white",
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#57acdc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
