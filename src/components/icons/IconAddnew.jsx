import React from 'react';

const IconAddnew = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="c-sidebar-actions__icon c-sidebar-actions__icon--plus"
            viewBox="0 0 24 24"
            fill='#777'
            {...props}
        >
            <path d="M23 11H13V1.001A.982.982 0 0012.021 0c-.553 0-1 .447-1 .999L11.012 11H1a1 1 0 100 2h10.01L11 22.999A1 1 0 0011.998 24h.001c.552 0 1-.447 1.001-.999V13h10a1 1 0 000-2z"></path>
        </svg>
    );
};

export default IconAddnew;