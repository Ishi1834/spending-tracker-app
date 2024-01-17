import { createStackNavigator } from "@react-navigation/stack"
import { Appbar } from "../components/AppBar"
import { AddTransactionScreen } from "./AddTransactionScreen"
import { DrawerNavigator } from "./components/DrawerNavigator"

const Stack = createStackNavigator()

const Main = () => {
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
