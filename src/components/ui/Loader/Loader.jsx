import React from 'react';

const Loader = ({ size = "md" }) => {

    const sizes = {
        sm: "w-5 h-5 border-2",
        md: "w-8 h-8 border-3",
        lg: "w-12 h-12 border-4"
    };
    return (
        <div className="flex items-center justify-center p-8">
            <div
                className={`${sizes[size]} border-t-amber-600 border-slate-200 rounded-full animate-spin`}
                role="status"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;