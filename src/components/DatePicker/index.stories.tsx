import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "../StoryHelpers"
import { DatePicker, DatePickerProps } from "./"

const meta = {
  title: "DatePicker",
  component: DatePicker,
  decorators: [
    (Story) => (
      <View>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof DatePicker>

export const InputDatePicker: Story = {
  args: {
    inputMode: "start",
    value: new Date(),
    label: "Transaction Date",
    onChange: () => action("onChange"),
  } as DatePickerProps,
}
