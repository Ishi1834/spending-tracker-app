import * as SQLite from "expo-sqlite"
import { setupCategoriesTable } from "./categories"
import { setupTransactionsTable } from "./transactions"

const db = SQLite.openDatabase("test.db")

// need to use 1(true) or 0(false) for boolean type

const setupDatabaseTables = () => {
  setupCategoriesTable(db)
  setupTransactionsTable(db)
}

export { setupDatabaseTables }
