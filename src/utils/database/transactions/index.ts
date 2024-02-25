import { TransactionFormData } from "../../../types"
import { db } from "../db"

const setupTransactionsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT NOT NULL, amount INTEGER NOT NULL, date TEXT NOT NULL, expense BOOLEAN NOT NULL, category_id INTEGER NOT NULL,FOREIGN KEY(category_id) REFERENCES categories (category_id) )",
    )
  })
}

const getTransactions = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM transactions",
        undefined,
        (_, res) => {
          resolve(res.rows._array)
        },
        (_, error) => {
          reject(error)
          return false
        },
      )
    })
  })
}

const addTransaction = (data: TransactionFormData) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO transactions (description, amount, date, expense, category_id) VALUES (?, ?, ?, ?, ?)",
        [
          data.description,
          data.amount,
          data.date?.toISOString(),
          data.expense,
          data.category,
        ],
        (_, result) => resolve(result.insertId),
        (_, error) => {
          reject(error)
          return false
        },
      )
    })
  })
}
export { setupTransactionsTable, addTransaction, getTransactions }
