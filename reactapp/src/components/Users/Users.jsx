import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import './Users.css'
import UsersContext from '../../contexts/UserContext';

export default function Users() {

    const users = useContext(UsersContext);
   
    const [search, setSearch] = useSearchParams();
    const [textSearch, setTextSearch] = useState(search.get('q') ?? '')
    
    const searchHandler = (e) => {
        setTextSearch(e.target.value)
        setSearch({q: e.target.value})
    }
    
    return (
        <div className='users'>
            <div className="users-list">
                <input type="text" value={textSearch} onChange={searchHandler}/>

                {users.map(user => <NavLink to={`/users/${user.id}`} >{user.name}</NavLink>)}
            </div>
            <Outlet />
        </div>
    )
}
