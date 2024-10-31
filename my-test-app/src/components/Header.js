import React from "react";


function Header({ onToggleForm, showForm }) {
    return (
        <header className = "header">
            <h1>My Test App</h1>
            <button onClick = {onToggleForm} className = "btn">
                {showForm ? 'Close' : 'Add Task'}
            </button>
        </header>
    )
}

export default Header;