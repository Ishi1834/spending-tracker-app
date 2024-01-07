import { NavigationContainer } from "@react-navigation/native"
import { render, RenderOptions } from "@testing-library/react-native"
import React, { ReactElement } from "react"
import { PaperProvider } from "react-native-paper"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <PaperProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </PaperProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react-native"
export { customRender as render }
