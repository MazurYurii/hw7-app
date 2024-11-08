import {Link, useLoaderData} from 'react-router-dom';

function TestUsersPage() {
    const user = useLoaderData();

    return(
        <div className="Main">
            <div>
                <Link to='/testusers'>Back</Link>
            </div>
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
            <h3>{user.address.city}</h3>
            <h4>{user.phone}</h4>
            <h4>{user.website}</h4>
            <h4>{user.company.name}</h4>
        </div>
    )
}

export default TestUsersPage;