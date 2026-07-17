import React from 'react';
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const Modal = ({
    isOpen,
    onClose,
    title,
    children
}) => {
    return (
        <AnimatePresence>
            {isOpen && <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
                {
                    /* Backdrop */
                }
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                />

                {
                    /* Modal Card */
                }
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", duration: 0.4 }}
                    className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 md:p-8 m-4 z-10 max-h-[90vh] overflow-y-auto border border-slate-100"
                >
                    {
                        /* Header */
                    }
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                        {title && <h3 className="text-xl font-sans font-medium text-slate-900 tracking-tight">
                            {title}
                        </h3>}
                        <button
                            onClick={onClose}
                            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {
                        /* Content */
                    }
                    <div>{children}</div>
                </motion.div>
            </div>}
        </AnimatePresence>
    );
};

export default Modal;