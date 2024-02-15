import * as SQLite from "expo-sqlite"

const defaultCategories = [
  "Rent or Mortgage",
  "Utilities",
  "Transportation",
  "Health",
  "Subscription",
  "Membership",
  "Entertainment",
  "Clothing",
  "Groceries",
  "Food & Drinks",
  "Gifts",
  "Travel",
]

const setupCategoriesTable = (db: SQLite.SQLiteDatabase) => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS categories (category_id INTEGER PRIMARY KEY AUTOINCREMENT, category_name TEXT NOT NULL)",
    )
  })
  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM categories", undefined, (_, res) => {
      // if no categories exist, insert default categories
      if (res.rows.length === 0) {
        defaultCategories.forEach((category) => {
          tx.executeSql("INSERT INTO categories (category_name) VALUES (?)", [
            category,
          ])
        })
      }
    })
  })
}

export { setupCategoriesTable }
