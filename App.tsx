import "react-native-gesture-handler"
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native"
import merge from "deepmerge"
import Constants from "expo-constants"
import * as SplashScreen from "expo-splash-screen"
import { PaperProvider, adaptNavigationTheme } from "react-native-paper"
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper"
import Storybook from "./.storybook"
import Main from "./src/screens"
import { AppContext, useAppContext } from "./src/utils"

const isStorybookMode = Constants.expoConfig?.extra?.storybookEnabled

/* Keep the splash screen while app state is being setup, unless in storybook mode */
!isStorybookMode && SplashScreen.preventAutoHideAsync()

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme)
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme)

const App = () => {
  const { appState, updateAppState } = useAppContext()

  return (
    <AppContext.Provider value={{ appState, updateAppState }}>
      <PaperProvider
        theme={
          appState.isDarkModeEnabled ? CombinedDarkTheme : CombinedDefaultTheme
        }
      >
        <NavigationContainer
          theme={
            appState.isDarkModeEnabled
              ? CombinedDarkTheme
              : CombinedDefaultTheme
          }
        >
          <Main />
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  )
}

export default isStorybookMode ? Storybook : App
