import AsyncStorage from "@react-native-async-storage/async-storage"
import { AppSettings } from "../types"
import { getIsAuthRequired } from "./auth"

type AsyncStorageSetting = Pick<
  AppSettings,
  "isDarkModeEnabled" | "isNotificationsEnabled"
>

/**
 * A function to get the app settings from expo-secure-store and async-storage
 * @returns Promise that contains isDarkModeEnabled, isNotificationsEnabled and isAuthRequired
 */
const getAppSettings = async (): Promise<AppSettings> => {
  const appSettings = await AsyncStorage.getItem("appSettings")

  const isAuthRequired = await getIsAuthRequired()

  return {
    ...(JSON.parse(appSettings || "{}") as AsyncStorageSetting),
    isAuthRequired,
  }
}

/**
 * A function to toggle notification setting in async-storage
 * @returns Promise containing isNotificationEnabled
 */
const toggleNotificationSetting = async () => {
  const existingAppSettings = JSON.parse(
    (await AsyncStorage.getItem("appSettings")) || "{}",
  ) as AsyncStorageSetting

  const isNotificationsEnabled = existingAppSettings.isNotificationsEnabled

  const updatedAppSettings: AsyncStorageSetting = {
    ...existingAppSettings,
    isNotificationsEnabled: !isNotificationsEnabled,
  }

  await AsyncStorage.setItem("appSettings", JSON.stringify(updatedAppSettings))

  return !isNotificationsEnabled
}

/**
 * A function to toggle dark mode setting in async-storage
 * @returns Promise containing isDarkModeEnabled
 */
const toggleDarkModeSetting = async () => {
  const existingAppSettings = JSON.parse(
    (await AsyncStorage.getItem("appSettings")) || "{}",
  ) as AsyncStorageSetting

  const isDarkModeEnabled = existingAppSettings.isDarkModeEnabled

  const updatedAppSettings: AsyncStorageSetting = {
    ...existingAppSettings,
    isDarkModeEnabled: !isDarkModeEnabled,
  }

  await AsyncStorage.setItem("appSettings", JSON.stringify(updatedAppSettings))

  return !isDarkModeEnabled
}

export { getAppSettings, toggleNotificationSetting, toggleDarkModeSetting }
