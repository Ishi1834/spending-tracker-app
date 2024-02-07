import { useState, useEffect } from "react"
import { AppState } from "../../types"
import {
  getAppSettings,
  toggleDarkModeSetting,
  toggleNotificationSetting,
} from "../appSettings"
import { toggleAuthRequired } from "../auth"
import { AppContext } from "./appContext"

const defaultAppState: AppState = {
  isLoading: true,
  isDarkModeEnabled: false,
  isAuthRequired: false,
  isAuthenticated: false,
  isNotificationsEnabled: false,
}

export const useAppContext = (): AppContext => {
  const [appState, setAppState] = useState(defaultAppState)

  useEffect(() => {
    getAppSettings().then((appSettings) => {
      setAppState({
        ...appState,
        ...appSettings,
      })
    })
  }, [])

  const toggleAuth = () => {
    toggleAuthRequired().then((isAuthRequired) =>
      setAppState({ ...appState, isAuthRequired }),
    )
  }

  const toggleNotifications = () => {
    toggleNotificationSetting().then((isNotificationsEnabled) =>
      setAppState({ ...appState, isNotificationsEnabled }),
    )
  }

  const toggleDarkMode = () => {
    toggleDarkModeSetting().then((isDarkModeEnabled) =>
      setAppState({ ...appState, isDarkModeEnabled }),
    )
  }

  return {
    appState,
    updateAppState: {
      toggleAuth,
      toggleNotifications,
      toggleDarkMode,
    },
  }
}
