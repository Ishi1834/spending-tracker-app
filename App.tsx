import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import Constants from "expo-constants"
import { PaperProvider } from "react-native-paper"
import Storybook from "./.storybook"
import Main from "./src/screens"

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App
