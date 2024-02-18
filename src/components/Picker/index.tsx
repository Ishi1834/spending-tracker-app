import DropDownPicker from "react-native-dropdown-picker"
import { useTheme, Icon } from "react-native-paper"

export type PickerProps<T> = React.ComponentProps<typeof DropDownPicker> & {
  items: T[]
}

export const Picker = <T,>({ ...props }: PickerProps<T>) => {
  const theme = useTheme()
  return (
    <DropDownPicker
      style={{
        backgroundColor: theme.colors.surface, // background color of the picker
        borderColor: theme.colors.primary, // border color of the picker
      }}
      textStyle={{
        color: props?.disabled
          ? theme.colors.onSurfaceDisabled
          : theme.colors.onSurface, // text color of the items
      }}
      labelStyle={{
        color: props?.disabled
          ? theme.colors.onSurfaceDisabled
          : theme.colors.primary, // color of the label
      }}
      disabledStyle={{
        backgroundColor: theme.colors.surfaceDisabled, // background color when disabled
        borderColor: theme.colors.onSurfaceDisabled, // border color when disabled
      }}
      dropDownContainerStyle={{
        backgroundColor: theme.colors.surface, // background color of the dropdown container
        borderColor: theme.colors.primary, // border color of the dropdown container
      }}
      placeholderStyle={{
        color: theme.colors.secondary, // color of the placeholder text
      }}
      listParentContainerStyle={{
        backgroundColor: theme.colors.surface, // background color of the parent list container
        borderColor: theme.colors.primary, // border color of the parent list container
      }}
      listParentLabelStyle={{
        color: theme.colors.onSurface, // color of the parent list label
      }}
      listItemLabelStyle={{
        color: theme.colors.onSurface, // color of the list item label
      }}
      selectedItemContainerStyle={{
        backgroundColor: theme.colors.primary, // background color of the selected item container
        borderColor: theme.colors.primary, // border color of the selected item container
      }}
      selectedItemLabelStyle={{
        color: theme.colors.onPrimary, // color of the selected item label
      }}
      TickIconComponent={() => (
        <Icon source="check" color={theme.colors.onPrimary} size={25} />
      )}
      ArrowUpIconComponent={() => <Icon source="chevron-up" size={25} />}
      ArrowDownIconComponent={() => <Icon source="chevron-down" size={25} />}
      {...props}
    />
  )
}
