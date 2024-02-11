import { Meta, StoryObj } from "@storybook/react-native"
import { Snackbar } from "./"

const meta = {
  title: "Snackbar",
  component: Snackbar,
} satisfies Meta<typeof Snackbar>

export default meta

type Story = StoryObj<typeof Snackbar>

export const Default: Story = {
  args: {
    visible: true,
    children: "Some important information here",
    onDismiss: () => console.log("Dismiss"),
  },
}
