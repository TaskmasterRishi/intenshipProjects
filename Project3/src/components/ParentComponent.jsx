import { useState } from "react"
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
    const [name,setName] = useState("username");
    const ChangeNameHandler = () => {
        setName("Rishi Patodiya")
    }
    return(
        <>
            <div>Inside the parent component</div>
            <h1>Name : {name}</h1>
            {/* <button onClick={ChangeNameHandler}>Change the Name (Parent)</button> */}
            <ChildComponent onNameChange={ChangeNameHandler}/>
        </>
    )
}
export default ParentComponent