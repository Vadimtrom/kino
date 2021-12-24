import React, {useContext, useState} from 'react';
import {users} from "../databases1/users";

import {AuthContext} from "../context1/context";
import {useHistory} from "react-router-dom";

const Contacts = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const history = useHistory()
    if (isAuth) {
        history.push('/')
    }
    const submit = (e) => {
        e.preventDefault()
        const getName = users.find((item) => item.name === name)
        if (getName) {
            if (getName.password === password) {
                localStorage.setItem('isAuth', 'true')
                setIsAuth(true)
                alert('login')
            } else {
                alert('password mismatch')
            }
        } else {
            alert('no such user')
        }
    }
    return (
        <a href="https://github.com/Vadimtrom"></a>
    );
};


export default Contacts;