import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const UserComponent = () => {
    let [users, setUsers] = useState([]);
    const fetchDataHandler = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        let data = await response.json();
        setUsers(data);
        console.log("user info", users);
    };

    useEffect(() => {
        fetchDataHandler();
    }, []);

    const deleteHandler = (id) => {
        const user = users.filter((user) => user.id !== id);
        setUsers(user);
    }

    return (
        <>
            <table>
                {users.length == 0 ? (
                    <p>No user available</p>
                ) : (
                    <>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </>
                )}
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button onClick={() => {
                                        deleteHandler(user.id)
                                    }}>Delete</button>
                                    <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        onClick={() => {
                                            deleteHandler(user.id)
                                        }}
                                        style={{ cursor: "pointer", color: "red" }}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default UserComponent