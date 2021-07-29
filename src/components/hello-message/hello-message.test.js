import { expect, test } from "@jest/globals"
import React from "react"
import { render } from "@testing-library/react"
import { HelloMessage } from "./hello-message"

test("displays the right text", () => {
    const result = render(<HelloMessage name="Cornelia" />)
    const someText = result.container.querySelector("div")
    expect(someText.textContent).toBe("hello, Cornelia")
})