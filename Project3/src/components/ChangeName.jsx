import { useState } from 'react'
const ChangeName = () => {
    const [text, setText] = useState("null");
    const inputChangeHandler = (event) => {
        // setText(document.getElementById('name').value);
        console.log(event.target.value);
        setText(event.target.value);
    }
    return (
        <>
            Enter your Name<input type="text" onChange={inputChangeHandler} />
            <br />
            <p>{text}</p>
        </>
    )
}

export default ChangeName