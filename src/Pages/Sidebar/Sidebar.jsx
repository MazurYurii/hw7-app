import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar(){
    return(
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/statehooks">Built-in React Hooks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/community">Community</NavLink>
                    </li>
                    <li> 
                        <NavLink to="/resources">Resources</NavLink>
                    </li>
                    <li>
                        <NavLink to="/thinking">Thinking in React</NavLink>   
                    </li> 
                    <li>
                        <NavLink to='compiler'>React Compiler</NavLink>    
                    </li>  
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/testusers">Test users</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;