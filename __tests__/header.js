import React from "react"
import renderer from "react-test-renderer"

import Header from "../src/components/header/header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="The Portal Tool" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})