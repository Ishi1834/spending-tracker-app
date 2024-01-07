import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

const Security = () => {
  return (
    <View style={styles.container}>
      <Text>Security screen</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Security

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
