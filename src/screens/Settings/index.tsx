import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings screen</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
