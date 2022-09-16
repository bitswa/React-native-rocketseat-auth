import React from "react";
import { useAuth } from "../../contexts/auth";
import { View, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const Dashboard = () => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <Button title="Sign out" onPress={handleSignOut}>
        Log out
      </Button>
    </View>
  );
};

export default Dashboard;
