import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "../StoryHelpers"
import { SwitchInput } from "./"

const meta = {
  title: "SwitchInput",
  component: SwitchInput,
  decorators: [
    (Story) => (
      <View>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SwitchInput>

export default meta

type Story = StoryObj<typeof SwitchInput>

export const Default: Story = {
  args: {
    label: "Notifications",
    icon: "camera",
  },
}
