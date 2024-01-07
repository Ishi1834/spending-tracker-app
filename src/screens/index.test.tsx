import { render, screen } from "../utils/testHelpers"
import Main from "./"

describe("<Main />", () => {
  it("renders correctly", () => {
    render(<Main />)

    expect(screen.getByText("Home screen")).toBeOnTheScreen()
  })
})
