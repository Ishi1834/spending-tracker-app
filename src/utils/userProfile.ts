import AsyncStorage from "@react-native-async-storage/async-storage"
import { UserProfile } from "../types"

/**
 * A function to get the user profile from async storage
 * @returns the user profile from async storage
 */
const getUserProfile = async () => {
  // get profile from async storage
  const userProfile = await AsyncStorage.getItem("userProfile")
  // Error handling in component
  if (!userProfile) throw new Error("No user profile found")

  return JSON.parse(userProfile) as UserProfile
}

/**
 * A function to update the user profile in async storage
 * @param userProfile - a partial of userProfile being updated
 * @returns the updated user profile
 */
const updateUserProfile = async (userProfile: Partial<UserProfile>) => {
  const existingUserProfile = await AsyncStorage.getItem("userProfile")

  const updatedUserProfile: UserProfile = {
    ...JSON.parse(existingUserProfile || "{}"),
    ...userProfile,
  }

  await AsyncStorage.setItem("userProfile", JSON.stringify(updatedUserProfile))
  return updatedUserProfile
}

export { getUserProfile, updateUserProfile }
