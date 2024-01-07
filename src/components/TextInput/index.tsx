import React from "react"
import { TextInput as RNPTextInput } from "react-native-paper"

export type TextInputProps = React.ComponentProps<typeof RNPTextInput>

const TextInput = ({ mode = "outlined", ...props }: TextInputProps) => {
  return <RNPTextInput mode={mode} {...props} />
}

export default TextInput
