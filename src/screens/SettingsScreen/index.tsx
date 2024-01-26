/* eslint-disable react-native/no-inline-styles */
import { useState, useEffect } from "react"
import { View, Text, SwitchInput } from "../../components"
import { isAuthRequired, toggleAuthRequired } from "../../utils/auth"

export const SettingsScreen = () => {
  const [isAuthEnabled, setIsAuthEnabled] = useState(false)

  useEffect(() => {
    isAuthRequired().then((val) => setIsAuthEnabled(val))
  }, [])

  return (
    <View>
      <Text variant="titleMedium">Permissions</Text>
      <View styleExtension={{ marginHorizontal: 0 }}>
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
  )
}
