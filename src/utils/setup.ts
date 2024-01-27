import AsyncStorage from "@react-native-async-storage/async-storage"
import * as LocalAuthentication from "expo-local-authentication"
import * as SecureStore from "expo-secure-store"
import { UserProfile } from "../types"
import { setupDatabaseTables } from "./database"

const setupSecureStore = async () => {
  const authRequired = await SecureStore.getItemAsync("authRequired")
  if (authRequired === null) {
    await SecureStore.setItemAsync("authRequired", "false")
  }
}

const setupAsyncStorage = async () => {
  const userProfile = await AsyncStorage.getItem("userProfile")
  if (userProfile === null) {
    await AsyncStorage.setItem(
      "userProfile",
      JSON.stringify({
        savingGoalAmount: null,
        savingGoalTargetDate: null,
        isDarkModeEnabled: false,
        isNotificationsEnabled: false,
      } as UserProfile),
    )
  }
}

const authenticate = async () => {
  // check if authentication is required
  const authRequired = await SecureStore.getItemAsync("authRequired")
  if (authRequired === "true") {
    LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate",
      fallbackLabel: "Use Backup",
    }).then((result) => {
      // handle authentication result here
      console.log("auth result", result)
    })
  }
}

const setupApplication = () => {
  setupSecureStore()
  setupAsyncStorage()
  setupDatabaseTables()
  authenticate()
}

export { setupApplication }
