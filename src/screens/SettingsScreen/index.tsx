import { useContext } from "react"
import { StyleSheet } from "react-native"
import { Divider } from "react-native-paper"
import { View, Text, SwitchInput } from "../../components"
import { AppContext } from "../../utils"

export const SettingsScreen = () => {
  const {
    appState,
    updateAppState: { toggleAuth, toggleDarkMode, toggleNotifications },
  } = useContext(AppContext)

  return (
    <View>
      <View styleExtension={styles.groupWrapper}>
        <Text variant="titleMedium">Security</Text>
        <View styleExtension={styles.inputWrapper}>
          <SwitchInput
            icon="lock"
            label="Enable device authentication"
            isSwitchOn={appState.isAuthRequired}
            onSwitchToggle={toggleAuth}
          />
        </View>
      </View>
      <Divider style={styles.divider} />
      <View styleExtension={styles.groupWrapper}>
        <Text variant="titleMedium">Preferences</Text>
        <View styleExtension={styles.inputWrapper}>
          <SwitchInput
            icon="bell"
            label="Allow notifications"
            isSwitchOn={appState.isNotificationsEnabled}
            onSwitchToggle={toggleNotifications}
          />
        </View>
        <View styleExtension={styles.inputWrapper}>
          <SwitchInput
            icon="theme-light-dark"
            label="Toggle dark mode"
            isSwitchOn={appState.isDarkModeEnabled}
            onSwitchToggle={toggleDarkMode}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  groupWrapper: {
    marginHorizontal: 0,
    flex: 0,
    marginVertical: 0,
  },
  inputWrapper: {
    marginHorizontal: 0,
    marginVertical: 0,
    marginTop: 8,
    flex: 0,
  },
  divider: {
    marginVertical: 15,
  },
})
