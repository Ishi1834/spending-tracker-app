import { createStackNavigator } from "@react-navigation/stack"
import * as SplashScreen from "expo-splash-screen"
import { useContext, useEffect } from "react"
import { Appbar } from "../components"
import { AppContext } from "../utils"
import { setupApplication } from "../utils/setup"
import { AddTransactionScreen } from "./AddTransactionScreen"
import { DrawerNavigator } from "./components/DrawerNavigator"
import { SignInScreen } from "./SingInScreen"

const Stack = createStackNavigator()

const Main = () => {
  const { appState } = useContext(AppContext)

  useEffect(() => {
    setupApplication()
  }, [])

  useEffect(() => {
    if (appState.isLoading) {
      // We hide the splash screen once the state is ready
      const hideSplashScreen = async () => await SplashScreen.hideAsync()
      hideSplashScreen()
    }
  }, [appState.isLoading])

  if (appState.isLoading) return null

  return (
    <Stack.Navigator>
      {appState.isAuthRequired && !appState.isAuthenticated ? (
        <Stack.Screen
          name="SignInScreen"
          options={{ headerShown: false, title: "Login screen" }}
          component={SignInScreen}
        />
      ) : (
        <>
          <Stack.Screen
            name="DrawerScreens"
            options={{ headerShown: false }}
            component={DrawerNavigator}
          />
          <Stack.Screen
            name="AddATransaction"
            options={{
              header: ({ navigation }) => (
                <Appbar
                  screenMode="Stack"
                  title="Add a transaction"
                  handleBackAction={() => navigation.goBack()}
                />
              ),
            }}
            component={AddTransactionScreen}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export default Main
