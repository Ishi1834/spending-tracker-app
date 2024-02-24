import {
  DatePickerInput,
  enGB,
  registerTranslation,
} from "react-native-paper-dates"

registerTranslation("en-GB", enGB)

export type DatePickerProps = Omit<
  React.ComponentProps<typeof DatePickerInput>,
  "locale"
>

export const DatePicker = ({ ...props }: DatePickerProps) => {
  return <DatePickerInput {...props} locale={"en-GB"} />
}
