// src/components/Loading.jsx
import React from 'react';

const Loading = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>
        </div>
    );
};

export default Loading;
