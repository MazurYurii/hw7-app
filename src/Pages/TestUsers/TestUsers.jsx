import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function TestUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);

    localStorage.setItem('users', JSON.stringify(users));

    return(
        <div className="Main">
            <h2>Test users</h2>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>
                        <Link to={`/testusers/${item.username}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TestUsers;