/* eslint-disable react-native/no-inline-styles */
import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { TextInput } from "./"

const meta = {
  title: "TextInput",
  component: TextInput,
  decorators: [
    (Story) => (
      <View
        style={{
          margin: 20,
          justifyContent: "center",
          flex: 1,
        }}
      >
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
