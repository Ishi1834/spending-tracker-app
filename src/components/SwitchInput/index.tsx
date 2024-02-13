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
      <View style={styles.startContent}>
        <Icon source={icon} size={20} />
        <Text style={styles.text} variant="labelLarge">
          {label}
        </Text>
      </View>
      <Switch value={isSwitchOn} onValueChange={onSwitchToggle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: "100%",
    flexDirection: "row",
    // vertically center items
    alignItems: "center",
    // space items evenly
    justifyContent: "space-between",
    marginTop: 10,
  },
  startContent: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 20,
  },
})
