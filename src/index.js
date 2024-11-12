import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import './global.css';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet} from 'react-router-dom';
import StateHook from './Pages/StateHookPage/StateHook';
import Community from './Pages/Community/Community';
import Resources from './Pages/Resources/Resources';
import About from './Pages/About/About';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Users from './Pages/Users/Users';
import {UserPage} from './Pages/Users/UserPage';
// import usersData from './data/users.json';
import {ThinkingInReact} from './Pages/ThinkingInReact/ThinkingInReact';
import {ReactCompiler} from './Pages/ReactCompiler/ReactCompiler';
import TestUsers from './Pages/TestUsers/TestUsers';
import TestUserPage  from './Pages/TestUsers/TestUsersPage';


const Root = () => {
    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <Outlet />
    </div>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root/>}>
            <Route index element={<Welcome />}/>
            <Route path='/statehooks' element={<StateHook />}/>
            <Route path='/community' element={<Community/>}/>
            <Route path='/resources' element={<Resources/>}/>
            <Route path='/thinking' element={<ThinkingInReact/>}/>
            <Route path='/compiler' element={<ReactCompiler/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/testusers' element={<TestUsers/>}/>
            <Route path='/testusers/:username' loader={loader} element={<TestUserPage/>} errorElement={<ErrorPage />}></Route>
            <Route path='/users/:id' loader={loader} element={<UserPage/>} errorElement={<ErrorPage />}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

async function loader({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/?username=${params.username}`);
    const json = await response.json();
    const user = json;
    return user[0];
}

// async function loader({params}) {
//     //  const users = usersData.filter(el => el.id === params.id);
//     const user = await fetch('https://jsonplaceholder.typicode.com/users') 
//         .then(res => res.json())
//         .then(users => users.filter(user => user.username === params.username))
   
//     return user[0];
// }



