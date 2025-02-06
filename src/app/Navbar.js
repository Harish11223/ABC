"use client";

import React from 'react';
import Image from "next/image";
import "./globals.css";
import { useState } from "react";
import { Avatar, AvatarGroup } from "@mui/material";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="border-gray-100 bg-gray-100">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse mx-2">
                        <Image
                            src="https://flowbite.com/docs/images/logo.svg"
                            alt="Flowbite Logo"
                            className="h-8"
                            width={32}
                            height={32}
                        />
                    </a>

                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <input
                                type="text"
                                id="search-navbar"
                                className="block w-full p-2 ps-8 rounded-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search"
                            />
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                        </div>

                        <button
                            data-collapse-toggle="navbar-hamburger"
                            type="button"
                            className="inline-flex items-center justify-center p-1 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
                            aria-controls="navbar-hamburger"
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className="ml-auto flex space-x-4 items-center">
                        <div className="flex items-center bg-slate-200 rounded-full px-2 py-1">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                    <img src="/images/profile.jpg" alt="Remy Sharp" />
                                </div>
                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                    <img src="/images/minee.jpg" alt="Travis Howard" />
                                </div>
                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                    <img src="/images/photo.jpg" alt="Agnes Walker" />
                                </div>
                            </div>

                            <span className="text-sm text-gray-700 ml-2 hidden lg:block font-medium">
                                1.2k+ Authors
                            </span>
                        </div>


                        <button
                            type="button"
                            className="text-[#4335A7] hover:text-white border border-[#4335A7] hover:bg-[#4335A7] focus:ring-4 focus:outline-none focus:ring-[#4335A7] rounded-full font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#4335A7] dark:text-[#4335A7] dark:hover:text-white dark:hover:bg-[#4335A7] dark:focus:ring-[#4335A7] hidden md:block"
                        >
                            Sign In
                        </button>

                        <button
                            type="button"
                            className="text-white bg-[#4335A7] hover:bg-[#3a2a88] focus:outline-none focus:ring-4 focus:ring-[#4335A7] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#4335A7] dark:hover:bg-[#3a2a88] dark:focus:ring-[#4335A7] hidden md:block"
                        >
                            Get Started
                        </button>
                    </div>

                    <div className={`${isOpen ? "block" : "hidden"} w-full`} id="navbar-hamburger">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm dark:bg-blue-600" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
