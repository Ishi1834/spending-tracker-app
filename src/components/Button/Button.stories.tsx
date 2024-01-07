import { View } from "react-native"
import { MyButton } from "./Button"
import { Meta } from "@storybook/react-native"

const MyButtonMeta: Meta = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
}

export default MyButtonMeta

export const Basic = {}

export const AnotherExample = {
  args: {
    text: "Another example",
  },
}
