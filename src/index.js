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
            <Route path='/testusers/:id' loader={loader} element={<TestUserPage/>} errorElement={<ErrorPage />}></Route>
            <Route path='/users/:id' loader={loader} element={<UserPage/>} errorElement={<ErrorPage />}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

function loader({params}) {
    //  const users = usersData.filter(el => el.id === params.id);
    const users = JSON.parse(localStorage.getItem('users')).filter((el) => el.username === params.id);
   
    return users[0];
}

