import { useContext } from "react"
import { StyleSheet } from "react-native"
import {
  View,
  Text,
  SwitchInput,
  Divider,
  ScreenWrapper,
} from "../../components"
import { AppContext } from "../../utils"

export const SettingsScreen = () => {
  const {
    appState,
    updateAppState: { toggleAuth, toggleDarkMode, toggleNotifications },
  } = useContext(AppContext)

  return (
    <ScreenWrapper>
      <View>
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
      <View>
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
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 8,
  },
  divider: {
    marginVertical: 15,
  },
})
