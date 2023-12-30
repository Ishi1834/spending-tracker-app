import App from "./App"
import { render, screen } from "@testing-library/react-native"

describe("<App />", () => {
  it("renders correctly", () => {
    render(<App />)

    expect(
      screen.getByText("Open up App.tsx to start working on your app!"),
    ).toBeOnTheScreen()
  })
})
