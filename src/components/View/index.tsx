import { View as RNView, StyleSheet } from "react-native"
import { useTheme } from "react-native-paper"

export type ViewProps = {
  children: React.ReactNode
}

/**
 * A View component with margin, padding and react-native-paper's theme applied.
 */
export const View = ({ children }: ViewProps) => {
  const theme = useTheme()
  return (
    <RNView
      style={{
        ...styles.container,
        backgroundColor: theme.colors.background,
      }}
    >
      {children}
    </RNView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 15,
  },
})
