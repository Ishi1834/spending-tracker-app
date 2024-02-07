import { createContext } from "react"
import { AppState } from "../../types"

interface AppContextType {
  appState: AppState
  updateAppState: (args: Partial<AppState>) => void
}

export const AppContext = createContext({} as AppContextType)
