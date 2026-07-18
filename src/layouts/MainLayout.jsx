import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster position="bottom-right"
                toastOptions={{
                    style: {
                        background: "#ffffff",
                        color: "#1c1917",
                        borderRadius: "12px",
                        border: "1px solid #e5e5e5",
                        padding: "12px 16px",
                        fontSize: "14px",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
                        maxWidth: "360px",
                    },
                    success: {
                        iconTheme: {
                            primary: "#10b981",
                            secondary: "#ffffff",
                        },
                    },
                }}></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;