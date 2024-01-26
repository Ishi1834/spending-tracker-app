import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "../StoryHelpers"
import { Text } from "./"

const meta = {
  title: "Text",
  component: Text,
  decorators: [
    (Story) => (
      <View>
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
