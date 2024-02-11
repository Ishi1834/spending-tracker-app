import * as LocalAuthentication from "expo-local-authentication"
import * as SecureStore from "expo-secure-store"

/**
 * A function to get the authRequired value from secure store
 * @returns true if auth is required, false if not
 */
const getIsAuthRequired = async () => {
  const authRequired = await SecureStore.getItemAsync("authRequired")
  if (authRequired === "true") return true
  return false
}

/**
 * A function to toggle the authRequired value in secure store
 * @returns true if auth is required, false if not
 */
const toggleAuthRequired = async () => {
  const authRequired = await SecureStore.getItemAsync("authRequired")
  if (authRequired === "true") {
    await SecureStore.setItemAsync("authRequired", "false")
    return false
  } else {
    await SecureStore.setItemAsync("authRequired", "true")
    return true
  }
}

/**
 * A function to authenticate locally
 */
const authenticate = async () => {
  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: "Authenticate using your device credentials",
  })
  return result
}

export { getIsAuthRequired, toggleAuthRequired, authenticate }
