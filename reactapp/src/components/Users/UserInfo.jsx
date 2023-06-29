import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UsersContext from '../../contexts/UserContext';

export default function UserInfo() {
    const { id } = useParams(); // повертає id з ссилки

    const users = useContext(UsersContext);

    const [user, setUser] = useState({});

    const getUser = async () => {
        setUser(users.find(user=>user.id.toString() === id));
    }

    useEffect(()=>{
        getUser();
    }, [id, users]);

    return (
        <div>
            <div>{user?.name}</div>
            <div>{user?.email}</div>
        </div>
    )
}
