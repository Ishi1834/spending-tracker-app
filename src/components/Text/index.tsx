import { Text as RNText } from "react-native-paper"

export type TextProps = Pick<
  React.ComponentProps<typeof RNText>,
  "variant" | "children"
>

export const Text = ({ variant, children }: TextProps) => {
  return <RNText variant={variant}>{children}</RNText>
}
