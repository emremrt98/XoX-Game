import { useEffect, useState } from "react"

export default function Xox({ state, setState }) {
    const [word, setWord] = useState("");
    const [color, setColor] = useState("");
    const update = () => {

        if (state) {
            setWord("X");
            setColor("x")
        }
        else {
            setWord("O");
            setColor("o")
        }
        setState(!state)

    }
    useEffect(() => console.log(state), [state]);

    return (
        <div>
            <button onClick={update} className={color} type="button">{word}</button>
        </div>
    )
}