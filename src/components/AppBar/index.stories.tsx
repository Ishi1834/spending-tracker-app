/* eslint-disable react-native/no-inline-styles */
import { Meta } from "@storybook/react-native"
import { View } from "react-native"
import Appbar from "./"

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

export const Tab = {
  args: {
    screenMode: "Tab",
    title: "Tab screen",
  },
}

export const Drawer = {
  args: {
    screenMode: "Drawer",
    title: "Drawer screen",
  },
}

export const Stack = {
  args: {
    screenMode: "Stack",
    title: "Stack screen",
  },
}
