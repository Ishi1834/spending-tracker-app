import { createDrawerNavigator } from "@react-navigation/drawer"
import Appbar from "../components/AppBar"
import { BottomTab } from "./BottomTab"
import { HelpAndSupportScreen } from "./HelpAndSupportScreen"
import { ProfileScreen } from "./ProfileScreen"
import { SecurityScreen } from "./SecurityScreen"
import { SettingsScreen } from "./SettingsScreen"

const Drawer = createDrawerNavigator()

const Main = () => {
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
      <Drawer.Screen name="Home" component={BottomTab} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Security" component={SecurityScreen} />
      <Drawer.Screen name="Help & Support" component={HelpAndSupportScreen} />
    </Drawer.Navigator>
  )
}

export default Main
