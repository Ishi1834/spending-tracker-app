import { StyleSheet } from "react-native"
import { ScreenWrapper, Text } from "../../components/"

export const ProfileScreen = () => {
  return (
    <ScreenWrapper styleExtension={styles.container}>
      <Text>Profile screen</Text>
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
