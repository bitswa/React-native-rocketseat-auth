import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const SignIn = () => {
  const { signed, user, signIn } = useAuth();

  console.log(signed);
  console.log(user);

  const handleSignIn = () => {
    signIn();
  };

  return (
    <View style={styles.container}>
      <Button style={styles.button} title="Sign in" onPress={handleSignIn} />
    </View>
  );
};
export default SignIn;
