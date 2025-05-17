"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Register = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fs: "",
        ls: "",
        email: "",
        password: "",
        phone: "",
        postcode: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const userData: any = { ...formData };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}v1/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const result = await response.json();
            console.log(result);
            
            localStorage.setItem("userDataObj", JSON.stringify(result));
            router.push("/");

            setFormData({
                fs: "",
                ls: "",
                email: "",
                password: "",
                phone: "",
                postcode: "",
            });

        } catch (error) {
            console.error("Registration Error:", error);
        }
    };

    return (
        <>
            <div className="container pt-140 pb-170">
                <div className="row">
                    <div className="col-lg-5 mx-auto">
                        <div className="register-content border rounded-3 px-md-5 px-3 ptb-50">
                            <div className="text-center">
                                <p className="neutral-1000 px-4 py-2 bg-2 text-sm-bold rounded-12 d-inline-flex align-items-center">Register</p>
                                <h4 className="neutral-1000">Create an Account</h4>
                            </div>
                            <div className="form-login mt-30">
                                <form onSubmit={handleSubmit} action="#">
                                    <div className="form-group">
                                        <input
                                            name="fs"
                                            value={formData.fs}
                                            onChange={handleChange}
                                            className="form-control username"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="ls"
                                            value={formData.ls}
                                            onChange={handleChange}
                                            className="form-control username"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control email"
                                            type="text"
                                            placeholder="Email / Username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="form-control password"
                                            type="password"
                                            placeholder="***********"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-control phone"
                                            type="text"
                                            placeholder="Phone number"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="postcode"
                                            value={formData.postcode}
                                            onChange={handleChange}
                                            className="form-control"
                                            type="text"
                                            placeholder="PostCode"
                                        />
                                    </div>
                                    <div className="form-group mb-30">
                                        <button type="submit" className="btn btn-primary w-100">
                                            Sign up
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 15L15 8L8 1M15 8L1 8"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <p className="text-md-medium neutral-500 text-center">
                                        Or connect with your social account
                                    </p>
                                    <div className="box-button-logins">
                                        <Link className="btn btn-login btn-google mr-10" href="#">
                                            <img
                                                src="/assets/imgs/template/popup/google.svg"
                                                alt="Carento"
                                            />
                                            <span className="text-sm-bold">Sign up with Google</span>
                                        </Link>
                                        <Link className="btn btn-login mr-10" href="#">
                                            <img
                                                src="/assets/imgs/template/popup/facebook.svg"
                                                alt="Carento"
                                            />
                                        </Link>
                                        <Link className="btn btn-login" href="#">
                                            <img
                                                src="/assets/imgs/template/popup/apple.svg"
                                                alt="Carento"
                                            />
                                        </Link>
                                    </div>
                                    <p className="text-sm-medium neutral-500 text-center mt-70">
                                        Already have an account?{" "}
                                        <Link className="neutral-1000" href="/login">
                                            Login Here !
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
