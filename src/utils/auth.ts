import * as SecureStore from "expo-secure-store"

const isAuthRequired = async () => {
  const authRequired = await SecureStore.getItemAsync("authRequired")
  if (authRequired === "true") return true
  return false
}

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

export { isAuthRequired, toggleAuthRequired }
