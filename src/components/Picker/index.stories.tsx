import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "../StoryHelpers"
import { Picker, PickerProps } from "./"

const meta = {
  title: "Picker",
  component: Picker,
  decorators: [
    (Story) => (
      <View>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Picker>

export default meta

type Story = StoryObj<typeof Picker>

export const Default: Story = {
  args: {
    open: true,
    selectedValue: "1",
    value: "1",
    items: [
      {
        label: "One",
        value: "1",
      },
      {
        label: "Two",
        value: "2",
      },
      {
        label: "Three",
        value: "3",
      },
    ],
    disabled: false,
    setOpen: action("setOpen"),
    setValue: action("setValue"),
    setItems: action("setItems"),
  } as PickerProps,
}
