import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogoutButton = ({ onLogout }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogout}>
            Logout
        </button>
    );
};

function areEqual(prevProps, nextProps) {
    return prevProps.onLogout === nextProps.onLogout;
}

const MemoizedLogoutButton = React.memo(LogoutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogout = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary mx-2"
                onClick={() => setState(!state)}
            >
                Initiate rerender
            </button>
            <MemoizedLogoutButton onLogout={handleLogout} />;
        </>
    );
};

MemoWithUseCallbackExample.propTypes = {
    onLogout: PropTypes.func
};

LogoutButton.propTypes = {
    onLogout: PropTypes.func
};

export default MemoWithUseCallbackExample;
