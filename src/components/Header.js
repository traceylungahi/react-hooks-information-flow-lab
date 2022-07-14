import React from "react";

function Header({onDarkModeClick, onDarkMode}) {
    return (
        <button onClick={onDarkModeClick}>
            {onDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
    )
}

export default Header; 