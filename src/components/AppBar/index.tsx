import { Appbar as RNPAppbar } from "react-native-paper"

interface StackScreenProps {
  screenMode: "Stack"
  title: string
  backAction: () => void
}

interface DrawerScreenProps {
  screenMode: "Drawer"
  title: string
  menuAction: () => void
}

interface TabScreenProps {
  screenMode: "Tab"
  title: string
  addAction: () => void
}

export type AppBarProps = StackScreenProps | DrawerScreenProps | TabScreenProps

const Appbar = ({ screenMode, title }: AppBarProps) => {
  return (
    <RNPAppbar.Header mode="center-aligned">
      {screenMode === "Stack" ? (
        <RNPAppbar.BackAction onPress={() => {}} />
      ) : (
        <RNPAppbar.Action icon="menu" onPress={() => {}} />
      )}
      <RNPAppbar.Content title={title} />
      {screenMode === "Tab" && (
        <RNPAppbar.Action icon="plus" onPress={() => {}} />
      )}
    </RNPAppbar.Header>
  )
}

export default Appbar
