/* eslint-disable react-native/no-inline-styles */
import { Meta, StoryObj } from "@storybook/react-native"
import { Text, View as RNView } from "react-native"
import { View } from "./"

const meta = {
  title: "View",
  component: View,
} satisfies Meta<typeof View>

export default meta

type Story = StoryObj<typeof View>

export const Default: Story = {
  args: {
    children: (
      <RNView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text>View</Text>
      </RNView>
    ),
  },
}
