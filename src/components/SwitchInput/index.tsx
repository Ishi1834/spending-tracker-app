import { View, StyleSheet } from "react-native"
import { Switch, Icon } from "react-native-paper"
import { Text } from "../Text"

export type SwitchProps = React.ComponentProps<typeof Switch>

interface SwitchInputProps {
  label: string
  icon: string
  isSwitchOn: boolean
  onSwitchToggle: () => void
}

export const SwitchInput = ({
  label,
  icon,
  isSwitchOn,
  onSwitchToggle,
}: SwitchInputProps) => {
  return (
    <View style={styles.container}>
      <Icon source={icon} size={20} />
      <Text variant="labelLarge">{label}</Text>
      <Switch value={isSwitchOn} onValueChange={onSwitchToggle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    // vertically center items
    alignItems: "center",
    // space items evenly
    justifyContent: "space-between",
    marginTop: 10,
  },
})
