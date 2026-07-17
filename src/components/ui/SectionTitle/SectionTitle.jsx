import React from 'react';

const SectionTitle = ({
    title,
    subtitle,
    align = "center"
}) => {
    return (
        <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
            <h2 className="text-3xl font-sans font-medium tracking-tight text-slate-900 md:text-4xl">
                {title}
            </h2>
            {subtitle && <p className="mt-3 text-sm text-slate-500 font-sans max-w-2xl mx-auto">
                {subtitle}
            </p>}
        </div>
    );
};

export default SectionTitle;