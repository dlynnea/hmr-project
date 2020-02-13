import React from 'react'

export default function Logout() {

    const userLogout = () => {
        localStorage.clear()
        clearUser()
    }

    return(
        <div className="user-logout">
            <button onClick={userLogout}>Log Out</button>
        </div>
    )
}