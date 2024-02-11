/* eslint-disable react-native/no-raw-text */
import { useContext, useState } from "react"
import { StyleSheet, Image } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { View, Text, Button, Snackbar } from "../../components"
import { AppContext } from "../../utils"
import { authenticate } from "../../utils/auth"

export const SignInScreen = () => {
  const [isLoading, setisLoading] = useState(false)
  const [isShowingError, setIsShowingError] = useState(false)
  const { updateAppState } = useContext(AppContext)
  const { top, right, left } = useSafeAreaInsets()

  const authenticateUser = async () => {
    setisLoading(true)

    const result = await authenticate()

    if (result.success) {
      updateAppState.loginUser()
    } else if (result.error) {
      setIsShowingError(true)
    }

    setisLoading(false)
  }

  return (
    <View
      styleExtension={{
        marginTop: top,
        marginLeft: left,
        marginRight: right,
        ...styles.container,
      }}
    >
      <Text variant="displaySmall" style={styles.text}>
        Welcome to SpenSavr!
      </Text>
      <Text variant="titleLarge" style={styles.text}>
        Start tracking your expenses and saving money today!
      </Text>
      <Image
        // does this image work with dark mode?
        source={require("../../../assets/adaptive-icon.png")}
        style={styles.image}
      />
      <Button
        mode="elevated"
        style={styles.button}
        loading={isLoading}
        onPress={authenticateUser}
      >
        Login
      </Button>
      <Snackbar
        visible={isShowingError}
        onDismiss={() => setIsShowingError(false)}
      >
        Login failed. You must authenticate to access this app. Once logged in,
        you can disable authentication.
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 0,
    marginHorizontal: 0,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 250,
  },
  button: {
    width: "60%",
  },
})
