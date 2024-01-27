import { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { Divider } from "react-native-paper"
import { View, Text, SwitchInput } from "../../components"
import { getIsAuthRequired, toggleAuthRequired } from "../../utils/auth"
import { getUserProfile, updateUserProfile } from "../../utils/userProfile"

export const SettingsScreen = () => {
  const [isAuthEnabled, setIsAuthEnabled] = useState(false)
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false)
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false)

  useEffect(() => {
    getIsAuthRequired().then((val) => setIsAuthEnabled(val))
    getUserProfile().then((userProfile) => {
      setIsDarkModeEnabled(userProfile.isDarkModeEnabled)
      setIsNotificationsEnabled(userProfile.isNotificationsEnabled)
    })
  }, [])

  return (
    <View>
      <View styleExtension={styles.groupWrapper}>
        <Text variant="titleMedium">Security</Text>
        <View styleExtension={styles.inputWrapper}>
          <SwitchInput
            icon="lock"
            label="Enable device authentication"
            isSwitchOn={isAuthEnabled}
            onSwitchToggle={() =>
              toggleAuthRequired().then((val) => setIsAuthEnabled(val))
            }
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
            isSwitchOn={isNotificationsEnabled}
            onSwitchToggle={() =>
              updateUserProfile({
                isNotificationsEnabled: !isNotificationsEnabled,
              }).then((userProfile) =>
                setIsNotificationsEnabled(userProfile.isNotificationsEnabled),
              )
            }
          />
        </View>
        <View styleExtension={styles.inputWrapper}>
          <SwitchInput
            icon="theme-light-dark"
            label="Toggle dark mode"
            isSwitchOn={isDarkModeEnabled}
            onSwitchToggle={() =>
              updateUserProfile({
                isDarkModeEnabled: !isDarkModeEnabled,
              }).then((userProfile) =>
                setIsDarkModeEnabled(userProfile.isDarkModeEnabled),
              )
            }
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
