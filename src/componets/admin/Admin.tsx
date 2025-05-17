"use client"
import React, { useState } from 'react'
import AddBlog from './components/AddBlog'
import User from './components/User';
import Contect from './components/Contect';

const Admin = () => {
    const [selectedOption, setSelectedOption] = useState("blog");

    return (
        <div className="d-flex">
            <div className="sidebar bg-dark text-white vh-100 position-sticky top-0" style={{ width: '260px' }}>
                <div className="p-3">
                    <h4 className="mb-4 text-white">TailAdmin</h4>
                    <ul className="nav flex-column mb-4">
                        <li className="nav-item">
                            <button className="nav-link text-white">
                                <i className="bi bi-speedometer2 me-2"></i> Dashboard
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => setSelectedOption('user')} className="nav-link text-white">
                                <i className="bi bi-speedometer2 me-2"></i> User
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => setSelectedOption('blog')} className="nav-link text-white">
                                <i className="bi bi-speedometer2 me-2"></i> Blog
                            </button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => setSelectedOption('contect')} className="nav-link text-white">
                                <i className="bi bi-speedometer2 me-2"></i> Contect
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex-grow-1">
                <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3 border-bottom sticky-top">
                    <div className="container-fluid d-flex justify-content-between align-items-center">

                        {/* Left: Page Title */}
                        <h5 className="mb-0 fw-bold">Dashboard</h5>

                        {/* Center: Search bar */}
                        <form className="d-none d-md-flex mx-auto w-50">
                            <input
                                className="form-control form-control-sm"
                                type="search"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                        </form>

                        {/* Right: Icons */}
                        <div className="d-flex align-items-center gap-3">

                            {/* Notification bell */}

                            {/* User profile/avatar */}
                            <div className="dropdown">
                                <button
                                    className="btn btn-sm border-0 dropdown-toggle d-flex align-items-center"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="/avatar.jpg"
                                        alt="User Avatar"
                                        className="rounded-circle"
                                        width="32"
                                        height="32"
                                    />
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container-fluid p-4">
                    {selectedOption === 'user' && <User />}
                    {selectedOption === 'blog' && <AddBlog />}
                    {selectedOption === 'contect' && <Contect />}

                </div>
            </div>
        </div>
    )
}

export default Admin
