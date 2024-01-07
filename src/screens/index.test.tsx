import { render, screen } from "@testing-library/react-native"
import Main from "./"

describe("<Main />", () => {
  it("renders correctly", () => {
    render(<Main />)

    expect(
      screen.getByText("Open up App.tsx to start working on your app!"),
    ).toBeOnTheScreen()
  })
})
