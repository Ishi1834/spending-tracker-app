import { createStackNavigator } from "@react-navigation/stack"
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
    // loading state isn't set, but we will need to set it if loading takes longer due api requests
  }, [])

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
