import React from "react";
import { FlatList, Modal, StyleSheet, View } from "react-native";
import GoalItem from "./GoalItem";
function Completed({ completed, completedModal, completedModalHandler }) {
  return (
    <Modal
      visible={completedModal}
      animationType="slide"
      onRequestClose={() => {
        completedModalHandler();
      }}
      presentationStyle="pageSheet"
    >
      <FlatList
        style={styles.modalContainer}
        data={completed}
        renderItem={(itemData) => {
          return <GoalItem itemData={itemData} color={"#60c689"} />;
        }}
        keyExtractor={(item) => item.id}
        alwaysBounceVertical={false}
      />
    </Modal>
  );
}

export default Completed;

const styles = StyleSheet.create({
  modalContainer: {
    paddingTop: 30,
    paddingHorizontal: 16,
    flex: 1,
  },
});
