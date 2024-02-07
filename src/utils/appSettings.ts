import AsyncStorage from "@react-native-async-storage/async-storage"
import { AppSettings, AppPreferences } from "../types"
import { getIsAuthRequired } from "./auth"

/**
 * A function to get the app settings from expo-secure-store and async-storage
 * @returns Promise that contains isDarkModeEnabled, isNotificationsEnabled and isAuthRequired
 */
const getAppSettings = async (): Promise<AppSettings> => {
  const appPreferences = await AsyncStorage.getItem("appPreferences")

  const isAuthRequired = await getIsAuthRequired()

  return {
    ...(JSON.parse(appPreferences || "{}") as AppPreferences),
    isAuthRequired,
  }
}

/**
 * A function to toggle notification setting in async-storage
 * @returns Promise containing isNotificationEnabled
 */
const toggleNotificationSetting = async () => {
  const appPreferences = JSON.parse(
    (await AsyncStorage.getItem("appPreferences")) || "{}",
  ) as AppPreferences

  const isNotificationsEnabled = appPreferences.isNotificationsEnabled

  const updatedAppPreferences: AppPreferences = {
    ...appPreferences,
    isNotificationsEnabled: !isNotificationsEnabled,
  }

  await AsyncStorage.setItem(
    "appPreferences",
    JSON.stringify(updatedAppPreferences),
  )

  return !isNotificationsEnabled
}

/**
 * A function to toggle dark mode setting in async-storage
 * @returns Promise containing isDarkModeEnabled
 */
const toggleDarkModeSetting = async () => {
  const existingAppPreferences = JSON.parse(
    (await AsyncStorage.getItem("appPreferences")) || "{}",
  ) as AppPreferences

  const isDarkModeEnabled = existingAppPreferences.isDarkModeEnabled

  const updatedAppPreferences: AppPreferences = {
    ...existingAppPreferences,
    isDarkModeEnabled: !isDarkModeEnabled,
  }

  await AsyncStorage.setItem(
    "appPreferences",
    JSON.stringify(updatedAppPreferences),
  )

  return !isDarkModeEnabled
}

export { getAppSettings, toggleNotificationSetting, toggleDarkModeSetting }
