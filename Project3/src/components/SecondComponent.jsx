import { useRef, useState } from "react"

const SecondComponent = () => {
    const inputRef = useRef(null)
    const [tasks, setTasks] = useState([])
    const addNewTaskHandler = () => {
        let newTask = inputRef.current.value.trim();
        console.log(newTask);
        // setTasks([...tasks, newTask]);
        if (newTask) {
            setTasks((prev) => {
                return [...prev, newTask]
            })
            console.log(newTask)
        }
        inputRef.current.value = "";
    }
    return (
        <>
            <div>Exapmle of useRef</div>
            Enter your Task
            <input ref={inputRef} />
            <button onClick={addNewTaskHandler}> ADD</button>
            {tasks.length == 0 ? (
                <p>No task are available</p>
            ) : (
                <div>
                    {tasks.map((task,index) => {
                        return <li key={index}>{task}</li>
                    })}
                </div>
            )}
        </>
    )
}

export default SecondComponent