import { useEffect, useState } from "react"
import { StyleSheet, Image } from "react-native"
import { ScreenWrapper, Picker, TextInput } from "../../components/"
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
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  input: {
    marginTop: 20,
    width: "100%",
  },
  image: {
    width: 250,
    height: 250,
  },
})
