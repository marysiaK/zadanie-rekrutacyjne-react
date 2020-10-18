import React from 'react';

const ContentFrame = ({ children }) => {
    return (
        <div className="shadow p-5 bg-white rounded w-100">
            {children}
        </div>
    );
}
export default ContentFrame;