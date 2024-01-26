import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { DrawerNavigationProp } from "@react-navigation/drawer"
import {
  CommonActions,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native"
import { BottomNavigation, Icon } from "react-native-paper"
import { Appbar } from "../../../components"
import { GoalsScreen } from "../../GoalsScreen"
import { InsightsScreen } from "../../InsightsScreen"
import { TransactionsScreen } from "../../TransactionsScreen"

const Tab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()

  return (
    <Tab.Navigator
      initialRouteName="Transactions"
      screenOptions={{
        header: ({ route }) => {
          if (route.name !== "Home")
            return (
              <Appbar
                screenMode="Tab"
                title={route.name}
                handleAddAction={() => navigation.navigate("AddATransaction")}
                handleMenuAction={() => navigation.toggleDrawer()}
              />
            )
        },
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            })

            if (event.defaultPrevented) {
              preventDefault()
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              })
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key]
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 })
            }

            return null
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key]

            const label = options.tabBarLabel as string

            return label
          }}
        />
      )}
    >
      <Tab.Screen
        name="Insights"
        component={InsightsScreen}
        options={{
          tabBarLabel: "Insights",
          tabBarIcon: ({ color, size }) => {
            return <Icon source="chart-line" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarLabel: "Transactions",
          tabBarIcon: ({ color, size }) => {
            return <Icon source="cash-multiple" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Goals"
        component={GoalsScreen}
        options={{
          tabBarLabel: "Goals",
          tabBarIcon: ({ color, size }) => {
            return <Icon source="bullseye-arrow" size={size} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  )
}
