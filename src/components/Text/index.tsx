import { Text as RNText } from "react-native-paper"

export type TextProps = Pick<
  React.ComponentProps<typeof RNText>,
  "variant" | "children" | "style"
>

export const Text = ({ variant, children, style }: TextProps) => {
  return (
    <RNText style={style} variant={variant}>
      {children}
    </RNText>
  )
}
