import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import { ScreenWrapper, Text } from "../../components/"
import { Category } from "../../types"
import { getCategories } from "../../utils/database"

export const AddTransactionScreen = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res))
      .catch(() => {})
  }, [])

  return (
    <ScreenWrapper styleExtension={styles.container}>
      <Text>Add transaction screen</Text>
      {categories.map((category) => (
        <Text key={category.category_id}>{category.category_name}</Text>
      ))}
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
