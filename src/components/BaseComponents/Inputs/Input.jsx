'use client'

import style from "./style/Input.module.css"
import React, { useState } from "react"

const Input = (props) => {
    const { type, name, placeholer } = props;

    const [value, setValue] = useState("")

    return (
        <input
            className={style.base_input}
            type={type || "text"}
            name={name}
            placeholer={placeholer}
            value={value}
            onInput={(event) => setValue(event.target.value)}
        />
    )
}

export default Input