import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

const HelpAndSupport = () => {
  return (
    <View style={styles.container}>
      <Text>Help & Support screen</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default HelpAndSupport

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
