import { StyleSheet } from "react-native"
import {
  DatePickerInput,
  enGB,
  registerTranslation,
} from "react-native-paper-dates"
import { View } from "../View"

registerTranslation("en-GB", enGB)

export type DatePickerProps = Omit<
  React.ComponentProps<typeof DatePickerInput>,
  "locale"
>

export const DatePicker = ({ ...props }: DatePickerProps) => {
  return (
    <View styleExtension={styles.inputWrapper}>
      <DatePickerInput {...props} locale={"en-GB"} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    /**
     * A temporary fix as the DatePickerInput component takes up the entire space available if the below style is not applied.
     */
    height: 80,
  },
})
