import AsyncStorage from "@react-native-async-storage/async-storage"
import * as SecureStore from "expo-secure-store"
import { setupDatabaseTables } from "./database"

const setupSecureStore = async () => {
  const authRequired = await SecureStore.getItemAsync("authRequired")
  if (authRequired === null) {
    await SecureStore.setItemAsync("authRequired", "false")
  }
}

const setupAsyncStorage = async () => {
  try {
    const savingGoal = await AsyncStorage.getItem("savingGoal")
    if (savingGoal === null) {
      AsyncStorage.setItem("savingGoal", "0")
    }
  } catch (error) {
    console.log("Error async storage", error)
  }
}

const setupApplication = () => {
  setupSecureStore()
  setupAsyncStorage()
  setupDatabaseTables()
}

export { setupApplication }
