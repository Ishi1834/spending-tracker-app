import { createDrawerNavigator } from "@react-navigation/drawer"
import { Appbar } from "../../../components/AppBar"
import { HelpAndSupportScreen } from "../../HelpAndSupportScreen"
import { ProfileScreen } from "../../ProfileScreen"
import { SecurityScreen } from "../../SecurityScreen"
import { SettingsScreen } from "../../SettingsScreen"
import { BottomTabNavigator } from "../BottomTabNavigator"

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ navigation, route }) => {
          if (route.name !== "Home")
            return (
              <Appbar
                screenMode="Drawer"
                title={route.name}
                handleMenuAction={() => navigation.toggleDrawer()}
              />
            )
        },
      }}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Security" component={SecurityScreen} />
      <Drawer.Screen name="Help & Support" component={HelpAndSupportScreen} />
    </Drawer.Navigator>
  )
}
