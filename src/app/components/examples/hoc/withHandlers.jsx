import React, { useState } from "react";

const withHandlers = (Component) => (props) => {
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));

    const handleLogin = () => {
        localStorage.setItem("user", true);
        setAuth(true);
    };

    const handleLogout = () => {
        localStorage.setItem("user", false);
        setAuth(false);
    };

    return (
        <Component
            {...props}
            isAuth={auth}
            onLogin={handleLogin}
            onLogout={handleLogout}
        />
    );
};

export default withHandlers;
