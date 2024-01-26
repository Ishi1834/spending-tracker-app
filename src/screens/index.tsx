import { createStackNavigator } from "@react-navigation/stack"
import { useEffect } from "react"
import { Appbar } from "../components"
import { setupApplication } from "../utils/setup"
import { AddTransactionScreen } from "./AddTransactionScreen"
import { DrawerNavigator } from "./components/DrawerNavigator"

const Stack = createStackNavigator()

const Main = () => {
  useEffect(() => {
    setupApplication()
  }, [])

  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  )
}

export default Main
