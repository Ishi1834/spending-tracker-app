import { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { Divider } from "react-native-paper"
import { View, Text, SwitchInput } from "../../components"
import { isAuthRequired, toggleAuthRequired } from "../../utils/auth"

export const SettingsScreen = () => {
  const [isAuthEnabled, setIsAuthEnabled] = useState(false)

  useEffect(() => {
    isAuthRequired().then((val) => setIsAuthEnabled(val))
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
        <Text variant="titleMedium">Permissions</Text>
        <View styleExtension={styles.inputWrapper}>
          <SwitchInput
            icon="bell"
            label="Allow notifications"
            isSwitchOn={false}
            onSwitchToggle={() =>
              console.log("Allow notifications switch toggled")
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
    marginTop: 5,
    flex: 0,
  },
  divider: {
    marginVertical: 15,
  },
})
