import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import { ScreenWrapper, Text, Picker } from "../../components/"
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
      <Text>Add transaction screen</Text>
      <Picker
        open={isCategoriesPickerOpen}
        setOpen={setIsCategoriesPickerOpen}
        items={categories.map((category) => ({
          label: category.category_name,
          value: category.category_id,
        }))}
        value={selectedCategory}
        setValue={setSelectedCategory}
        multiple={false}
      />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
