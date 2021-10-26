import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogout, isAuth }) => {
    return isAuth ? (
        <button className="btn btn-primary mx-2" onClick={onLogout}>
            Выйти из системы
        </button>
    ) : (
        <button className="btn btn-danger mx-2" onClick={onLogin}>
            Войти в систему
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
