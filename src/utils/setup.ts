import AsyncStorage from "@react-native-async-storage/async-storage"
import * as SecureStore from "expo-secure-store"
import { UserProfile, AppPreferences } from "../types"
import { setupDatabaseTables } from "./database"

const setupSecureStore = async () => {
  const authRequired = await SecureStore.getItemAsync("authRequired")
  if (authRequired === null) {
    await SecureStore.setItemAsync("authRequired", "false")
  }
}

const setupAsyncStorage = async () => {
  // user profile
  const userProfile = await AsyncStorage.getItem("userProfile")
  if (userProfile === null) {
    const userProfile: UserProfile = {
      savingGoalAmount: null,
      savingGoalTargetDate: null,
    }
    await AsyncStorage.setItem("userProfile", JSON.stringify(userProfile))
  }
  // app preferences
  const appPreferences = await AsyncStorage.getItem("appPreferences")
  if (appPreferences === null) {
    const appPreferences: AppPreferences = {
      isDarkModeEnabled: false,
      isNotificationsEnabled: true,
    }
    await AsyncStorage.setItem("appPreferences", JSON.stringify(appPreferences))
  }
}

const setupApplication = () => {
  setupSecureStore()
  setupAsyncStorage()
  setupDatabaseTables()
}

export { setupApplication }
