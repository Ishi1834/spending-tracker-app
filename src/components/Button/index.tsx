import { Button as RNButton } from "react-native-paper"

export type ButtonProps = Pick<
  React.ComponentProps<typeof RNButton>,
  "mode" | "children" | "style"
>

export const Button = ({ mode, children, style }: ButtonProps) => {
  return (
    <RNButton style={style} mode={mode}>
      {children}
    </RNButton>
  )
}
