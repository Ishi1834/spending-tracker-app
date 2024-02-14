import { StyleSheet } from "react-native"
import { ScreenWrapper, Text } from "../../components/"

export const TransactionsScreen = () => {
  return (
    <ScreenWrapper styleExtension={styles.container}>
      <Text>Transactions screen</Text>
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
