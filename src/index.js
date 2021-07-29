import ReactDOM from "react-dom"
import React from "react"
import { HelloMessage } from "./components/hello-message/hello-message"

ReactDOM.render(
    <HelloMessage name="Cornelia" />,
    document.getElementById("root")
)