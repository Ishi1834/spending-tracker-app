import { useState, useEffect } from "react"
import { AppState } from "../../types"
import { getAppSettings } from "../appSettings"

const defaultAppState: AppState = {
  isLoading: true,
  isDarkModeEnabled: false,
  isAuthRequired: false,
  isAuthenticated: false,
  isNotificationsEnabled: false,
}

export const useAppContext = () => {
  const [appState, setAppState] = useState(defaultAppState)

  useEffect(() => {
    getAppSettings().then((appSettings) => {
      setAppState({
        ...appState,
        ...appSettings,
      })
    })
  }, [])

  const updateAppState = (args: Partial<AppState>) => {
    console.log("update these args", args)
  }

  console.log("app state", appState)

  return {
    appState,
    updateAppState,
  }
}
