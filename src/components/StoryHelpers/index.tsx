/* eslint-disable react-native/no-inline-styles */
import { View as RNView } from "react-native"

export type ViewProps = Pick<React.ComponentProps<typeof RNView>, "children">

/**
 * A helper component that adds some margin and centers its children.
 * To be used as a decorator for stories.
 */
export const View = ({ children }: ViewProps) => {
  return (
    <RNView
      style={{
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      {children}
    </RNView>
  )
}
