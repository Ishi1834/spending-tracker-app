interface UserProfile {
  savingGoalAmount: number | null
  savingGoalTargetDate: Date | null
}

// state
interface AppSettings {
  isDarkModeEnabled: boolean
  isNotificationsEnabled: boolean
  isAuthRequired: boolean
}

type AppPreferences = Pick<
  AppSettings,
  "isDarkModeEnabled" | "isNotificationsEnabled"
>

interface AppState extends AppSettings {
  isLoading: boolean
  isAuthenticated: boolean
}

// database
type Category = {
  category_id: number
  category_name: string
}

// Transactions
type TransactionFormData = {
  category: number
  description: string
  amount: number
  date: Date
  expense: "True" | "False"
}

export type {
  UserProfile,
  AppSettings,
  AppState,
  AppPreferences,
  Category,
  TransactionFormData,
}
