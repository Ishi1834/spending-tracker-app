import { createContext } from "react"
import { AppState } from "../../types"

export interface AppContext {
  appState: AppState
  updateAppState: {
    loginUser: () => void
    toggleAuth: () => void
    toggleNotifications: () => void
    toggleDarkMode: () => void
  }
}

export const AppContext = createContext({} as AppContext)
