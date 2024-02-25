import { setupCategoriesTable, getCategories } from "./categories"
import {
  setupTransactionsTable,
  addTransaction,
  getTransactions,
} from "./transactions"

// need to use 1(true) or 0(false) for boolean type

const setupDatabaseTables = () => {
  setupCategoriesTable()
  setupTransactionsTable()
}

export { setupDatabaseTables, getCategories, addTransaction, getTransactions }
