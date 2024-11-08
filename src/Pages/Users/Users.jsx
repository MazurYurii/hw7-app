import { Link } from "react-router-dom";
import data from '../../data/users.json';

export default function Users() {
    return(
        <div className="Main">
            {data.map(item => <li key={item.id}><Link to={`/users/${item.id}`}>{item.name}</Link></li>)}
        </div>
    )
}