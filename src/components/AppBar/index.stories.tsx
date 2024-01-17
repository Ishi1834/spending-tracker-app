import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { Appbar } from "./"

const meta = {
  title: "Appbar",
  component: Appbar,
  decorators: [
    (Story) => (
      <View>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Appbar>

export default meta

type Story = StoryObj<typeof Appbar>

export const Tab: Story = {
  args: {
    screenMode: "Tab",
    title: "Tab screen",
  },
}

export const Drawer: Story = {
  args: {
    screenMode: "Drawer",
    title: "Drawer screen",
  },
}

export const Stack: Story = {
  args: {
    screenMode: "Stack",
    title: "Stack screen",
  },
}
