import { StyleSheet } from "react-native"
import { ScreenWrapper, Text } from "../../components/"

export const HelpAndSupportScreen = () => {
  return (
    <ScreenWrapper styleExtension={styles.container}>
      <Text>Help & Support screen</Text>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
