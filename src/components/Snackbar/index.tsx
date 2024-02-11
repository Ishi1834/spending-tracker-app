import { Snackbar as RNSnackbar } from "react-native-paper"

export type SnackbarProps = Pick<
  React.ComponentProps<typeof RNSnackbar>,
  "visible" | "onDismiss" | "style" | "children"
>

export const Snackbar = ({
  visible,
  onDismiss,
  children,
  style,
}: SnackbarProps) => {
  return (
    <RNSnackbar visible={visible} onDismiss={onDismiss} style={style}>
      {children}
    </RNSnackbar>
  )
}
