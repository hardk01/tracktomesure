"use client"
import React, { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}v1/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                const data = await res.json();
                // console.log(data,data._id, "iddd");

                if (data && data.data && data.data._id) {
                    localStorage.setItem("contectId", data.data._id);
                }
                alert("Message sent successfully!");
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                alert("Failed to send message.");
            }
        } catch (err) {
            alert("Error sending message.");
        }
        setLoading(false);
    };
    return (
        <>
            <section className="box-section box-contact-form background-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <h2 className="neutral-1000 mb-25">Get in Touch</h2>
                            <form className="form-contact" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="text-sm-medium neutral-1000">First Name</label>
                                            <input
                                                className="form-control username"
                                                type="text"
                                                placeholder="Your Name"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="text-sm-medium neutral-1000">Email Address</label>
                                            <input
                                                className="form-control email"
                                                type="email"
                                                placeholder="email@domain.com"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="text-sm-medium neutral-1000">Subject</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Your Reason"
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="text-sm-medium neutral-1000">Your Message</label>
                                            <textarea
                                                className="form-control"
                                                rows={6}
                                                placeholder="Leave us a message..."
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="btn btn-book" type="submit" disabled={loading}>
                                            {loading ? "Sending..." : "Send message"}
                                            <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="ps-lg-5">
                                <h4 className="neutral-1000">Our location</h4>
                                <p className="neutral-500 mb-30">12560 Rental Rd, Memphis, TN 38118, United States</p>
                                <iframe className="h-520 rounded-3" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d283661.3575233618!2d2.2296777857951824!3d47.16509219592609!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1712486491620!5m2!1svi!2s" width="100%" height={650} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
