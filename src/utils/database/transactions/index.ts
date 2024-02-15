import * as SQLite from "expo-sqlite"

const setupTransactionsTable = (db: SQLite.SQLiteDatabase) => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT NOT NULL, amount INTEGER NOT NULL, date TEXT NOT NULL, expense BOOLEAN NOT NULL, category_id INTEGER NOT NULL,FOREIGN KEY(category_id) REFERENCES categories (category_id) )",
    )
  })
}

export { setupTransactionsTable }
