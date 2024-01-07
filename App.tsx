import "react-native-gesture-handler"
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native"
import merge from "deepmerge"
import Constants from "expo-constants"
import { PaperProvider, adaptNavigationTheme } from "react-native-paper"
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper"
import Storybook from "./.storybook"
import Main from "./src/screens"

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme)
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme)

const App = () => {
  const isDarkTheme = false

  return (
    <PaperProvider
      theme={isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme}
    >
      <NavigationContainer
        theme={isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme}
      >
        <Main />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App
