import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("test.db")

// need to use 1(true) or 0(false) for boolean type

const setupDatabaseTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS categories (category_id INTEGER PRIMARY KEY AUTOINCREMENT, category_name TEXT NOT NULL)",
    )
  })
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT NOT NULL, amount INTEGER NOT NULL, date TEXT NOT NULL, expense BOOLEAN NOT NULL, category_id INTEGER NOT NULL,FOREIGN KEY(category_id) REFERENCES categories (category_id) )",
    )
  })
}

export { db, setupDatabaseTables }
