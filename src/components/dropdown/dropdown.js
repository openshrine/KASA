
import React, { useState } from 'react';
import '../dropdown/dropdown.scss';

function Dropdown({ title, content, customClass }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown ${customClass}`}>
            <button className="dropdown__button" onClick={toggleDropdown}>
                {title}
                <span className={`dropdown__arrow ${isOpen ? 'open' : ''}`}>
                    {isOpen ? <i className="fa-solid fa-chevron-up" style={{ color: '#ffffff' }}></i> : <i className="fa-solid fa-chevron-down" style={{ color: '#ffffff' }}></i>}
                </span>
            </button>
            {isOpen && <div className="dropdown__content">{content}</div>}
        </div>
    );
}

export default Dropdown;
