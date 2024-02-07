import AsyncStorage from "@react-native-async-storage/async-storage"
import { AppSettings } from "../types"
import { getIsAuthRequired } from "./auth"

const getAppSettings = async (): Promise<AppSettings> => {
  const appSettings = await AsyncStorage.getItem("appSettings")

  const isAuthRequired = await getIsAuthRequired()

  return {
    ...(JSON.parse(appSettings || "{}") as Pick<
      AppSettings,
      "isDarkModeEnabled" | "isNotificationsEnabled"
    >),
    isAuthRequired,
  }
}

export { getAppSettings }
