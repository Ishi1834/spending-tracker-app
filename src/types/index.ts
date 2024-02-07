interface UserProfile {
  savingGoalAmount: number | null
  savingGoalTargetDate: Date | null
}

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

export type { UserProfile, AppSettings, AppState, AppPreferences }
