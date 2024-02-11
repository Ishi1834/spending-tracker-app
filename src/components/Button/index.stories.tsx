import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "../StoryHelpers"
import { Button } from "./"

const meta = {
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <View>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "Default",
  },
}

export const Outlined: Story = {
  args: {
    children: "Outlined",
    mode: "outlined",
  },
}

export const ContainedTonal: Story = {
  args: {
    children: "Contained tonal",
    mode: "contained-tonal",
  },
}

export const Contained: Story = {
  args: {
    children: "Contained",
    mode: "contained",
  },
}

export const Elevated: Story = {
  args: {
    children: "Elevated",
    mode: "elevated",
  },
}
