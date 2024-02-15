import * as SQLite from "expo-sqlite"
import { db } from "../db"

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

const setupCategoriesTable = () => {
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

type Category = {
  category_id: number
  category_name: string
}

/**
 * A function that returns a promise that resolves to an array of categories
 */
const getCategories = () => {
  return new Promise(
    (
      resolve: (arg: Array<Category>) => void,
      reject: (args: SQLite.SQLError) => void,
    ) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM categories",
          undefined,
          (_, res) => {
            resolve(res.rows._array)
          },
          (_, error) => {
            reject(error)
            // returning true will roll back the transaction
            return false
          },
        )
      })
    },
  )
}

export { setupCategoriesTable, getCategories }
