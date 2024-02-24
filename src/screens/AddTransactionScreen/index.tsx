import { useEffect, useState } from "react"
import { StyleSheet, Image } from "react-native"
import {
  ScreenWrapper,
  Picker,
  TextInput,
  DatePicker,
  RadioButton,
  View,
  Button,
} from "../../components/"
import { Category } from "../../types"
import { getCategories } from "../../utils/database"

export const AddTransactionScreen = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isCategoriesPickerOpen, setIsCategoriesPickerOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<
    Category["category_id"] | null
  >(null)

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res))
      .catch(() => {})
  }, [])

  return (
    <ScreenWrapper styleExtension={styles.container}>
      <Image
        source={require("../../../assets/adaptive-icon.png")}
        style={styles.image}
      />
      <Picker<Category>
        open={isCategoriesPickerOpen}
        setOpen={setIsCategoriesPickerOpen}
        schema={{
          label: "category_name",
          value: "category_id",
        }}
        items={categories}
        value={selectedCategory}
        setValue={setSelectedCategory}
        multiple={false}
        placeholder="Select a category"
      />
      <TextInput style={styles.input} mode="outlined" label="Description" />
      <TextInput style={styles.input} mode="outlined" label="Amount" />
      <DatePicker
        label="Transaction Date"
        mode="outlined"
        value={undefined}
        onChange={(val) => console.log(val)}
        inputMode="start"
        withDateFormatInLabel={false}
        style={styles.input}
      />
      <View styleExtension={styles.radioGroupWrapper}>
        <RadioButton.Group
          onValueChange={(val) => console.log(val)}
          value="expense"
        >
          <View styleExtension={styles.radioGroup}>
            <RadioButton.Item label="Expense" value="expense" />
            <RadioButton.Item label="Income" value="income" />
          </View>
        </RadioButton.Group>
      </View>
      <Button mode="contained" style={styles.button}>
        Save Transaction
      </Button>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  image: {
    width: 250,
    height: 250,
  },
  input: {
    marginTop: 20,
    width: "100%",
  },
  radioGroupWrapper: {
    marginTop: 20,
    width: "100%",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    marginTop: 40,
    width: "100%",
  },
})
