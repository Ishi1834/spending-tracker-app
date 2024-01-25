/* eslint-disable react-native/no-inline-styles */
import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { Text } from "./"

const meta = {
  title: "Text",
  component: Text,
  decorators: [
    (Story) => (
      <View
        style={{
          margin: 20,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: "Default",
  },
}

export const DisplayMedium: Story = {
  args: {
    variant: "displayMedium",
    children: "Display medium",
  },
}

export const HeadlineMedium: Story = {
  args: {
    variant: "headlineMedium",
    children: "Headline medium",
  },
}

export const TitleMedium: Story = {
  args: {
    variant: "titleMedium",
    children: "Title medium",
  },
}

export const BodyMedium: Story = {
  args: {
    variant: "bodyMedium",
    children: "Body medium",
  },
}

export const LabelMedium: Story = {
  args: {
    variant: "labelMedium",
    children: "Label medium",
  },
}
