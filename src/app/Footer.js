"use client";

import React from 'react';
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
    return (
        <>
        <div className= "bg-gray-100 my-6">
            <div className="max-w-screen-xl mx-auto rounded-xl shadow-lg overflow-hidden">
                <footer className="bg-white">
                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className="ml-auto flex flex-col justify-center items-center space-y-4">
                            <span className="text-3xl font-medium mt-6">
                                Open the door to a{' '}
                                <span className="text-[#4335A7] font-bold">new world</span>
                                {' '}by<br />
                                <span className="font-bold w-full items-center">learning English</span>
                            </span>
                            <button
                                type="button"
                                className=" text-white bg-[#4335A7] hover:bg-[#3a2a88] focus:outline-none focus:ring-4 focus:ring-[#4335A7] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#4335A7] dark:hover:bg-[#3a2a88] dark:focus:ring-[#4335A7]"
                            >
                                Get Started
                            </button>
                        </div>

                        <div className="grid-cols-2 gap-8 px-4 py-4 lg:py-8 md:grid-cols-4 flex justify-center items-center">
                            <div className="text-center">
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Support</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4"><a href="#" className="hover:underline">Help Center</a></li>
                                    <li className="mb-4"><a href="#" className="hover:underline">Chat</a></li>
                                    <li className="mb-4"><a href="#" className="hover:underline">Report a Bug</a></li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Product</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4"><a href="#" className="hover:underline">Features</a></li>
                                    <li className="mb-4"><a href="#" className="hover:underline">Work</a></li>
                                    <li className="mb-4"><a href="#" className="hover:underline">Career</a></li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Get in Touch</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4"><a href="#" className="hover:underline">Contact</a></li>
                                    <li className="mb-4"><a href="#" className="hover:underline">Sales</a></li>
                                    <li className="mb-4"><a href="#" className="hover:underline">Prices</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© Copywriting | All Rights Reserved</span>
                            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                                <a href="#" className="fa-brands fa-facebook text-gray-400 hover:text-gray-900 dark:hover:text-white" style={{ color: '#4335A7' }}></a>
                                <a href="#" className="fa-brands fa-instagram text-gray-400 hover:text-gray-900 dark:hover:text-white" style={{ color: '#4335A7' }}></a>
                                <a href="#" className="fa-brands fa-linkedin text-gray-400 hover:text-gray-900 dark:hover:text-white" style={{ color: '#4335A7' }}></a>
                                <a href="#" className="fa-brands fa-telegram text-gray-400 hover:text-gray-900 dark:hover:text-white" style={{ color: '#4335A7' }}></a>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">Terms of Use | Privacy</span>
                        </div>
                    </div>
                </footer>
            </div>
            </div>
        </>
    );
}
