import { createDrawerNavigator } from "@react-navigation/drawer"
import HelpAndSupport from "./HelpAndSupport"
import Home from "./Home"
import Profile from "./Profile"
import Security from "./Security"
import Settings from "./Settings"

const Drawer = createDrawerNavigator()

const Main = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Security" component={Security} />
      <Drawer.Screen name="Help & Support" component={HelpAndSupport} />
    </Drawer.Navigator>
  )
}

export default Main
