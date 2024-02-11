import { Button as RNButton } from "react-native-paper"

export type ButtonProps = Pick<
  React.ComponentProps<typeof RNButton>,
  "mode" | "children" | "style" | "onPress" | "loading"
>

export const Button = ({
  mode,
  children,
  style,
  onPress,
  loading,
}: ButtonProps) => {
  return (
    <RNButton style={style} mode={mode} onPress={onPress} loading={loading}>
      {children}
    </RNButton>
  )
}
