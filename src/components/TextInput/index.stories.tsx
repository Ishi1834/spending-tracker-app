import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "../StoryHelpers"
import { TextInput } from "./"

const meta = {
  title: "TextInput",
  component: TextInput,
  decorators: [
    (Story) => (
      <View>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
  },
}
