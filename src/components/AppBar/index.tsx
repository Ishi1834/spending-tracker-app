import { Appbar as RNPAppbar } from "react-native-paper"

type StackScreenProps = {
  screenMode: "Stack"
  title: string
  handleBackAction: () => void
}

type DrawerScreenProps = {
  screenMode: "Drawer"
  title: string
  handleMenuAction: () => void
}

type TabScreenProps = {
  screenMode: "Tab"
  title: string
  handleAddAction: () => void
  handleMenuAction: () => void
}

export type AppBarProps = StackScreenProps | DrawerScreenProps | TabScreenProps

const Appbar = ({ screenMode, title, ...props }: AppBarProps) => {
  return (
    <RNPAppbar.Header mode="center-aligned">
      {screenMode === "Stack" ? (
        <RNPAppbar.BackAction
          onPress={
            "handleBackAction" in props ? props.handleBackAction : undefined
          }
        />
      ) : (
        <RNPAppbar.Action
          icon="menu"
          onPress={
            "handleMenuAction" in props ? props.handleMenuAction : undefined
          }
        />
      )}
      <RNPAppbar.Content title={title} />
      {screenMode === "Tab" && (
        <RNPAppbar.Action
          icon="plus"
          onPress={
            "handleAddAction" in props ? props.handleAddAction : undefined
          }
        />
      )}
    </RNPAppbar.Header>
  )
}

export default Appbar
