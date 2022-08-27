import { useState } from "react"

export default function Xox({ state, setState, value, setControl }) {
    const [word, setWord] = useState("");
    const [color, setColor] = useState("");
    const update = (value) => {

        if (state) {
            setWord("X");
            setColor("x");
            setControl(prevList => ({ ...prevList, [value]: "X" }))
        }
        else {
            setWord("O");
            setColor("o");
            setControl(prevList => ({ ...prevList, [value]: "O" }))
        }

        setState(!state)

    }


    return (
        <div>
            <button onClick={() => {
                update(value);

            }}
                className={color}
                type="button">
                {word}
            </button>
        </div>
    )
}