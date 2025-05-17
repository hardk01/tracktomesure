"use client"
import React, { useState } from 'react'

const Pricing = () => {
    const [isTab, setIsTab] = useState(1)
    const handleTab = (i: number) => {
        setIsTab(i)
    }
    return (
        <>
            <section className="section-pricing-1 pb-100 background-body border-bottom">
                <div className="container">
                    <div className="row pb-40 z-1 justify-content-center">
                        <div className="col-lg-auto align-self-end">
                            <h3 className="text-center neutral-1000">Membership Plans</h3>
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <ul className="list-unstyled d-flex align-items-center gap-3 change-price-plan">
                                    <li>
                                        <a onClick={() => handleTab(1)} className="active btn btn-primary monthly px-3 py-2" data-type="monthly">Monthly Price</a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleTab(2)} className="yearly btn btn-white px-3 py-2" data-type="yearly">Annual Price</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                            <div className="h-100 p-4 border rounded-12">
                                <h6 className="text-lg-bold neutral-1000">Basic</h6>
                                <div className="d-flex">
                                    <span className="heading-3 neutral-1000">$</span>
                                    <h3 className="neutral-1000 mb-0 text-price-standard">{isTab === 1 ? '19' : '49'}</h3>
                                    <span className="neutral-500 text-md-medium align-self-end text-type-standard">/{isTab === 1 ? 'month' : 'year'}</span>
                                </div>
                                <p className="text-sm-medium neutral-1000">For most businesses that want to optimize web queries</p>
                                <ul className="list-unstyled mb-0 py-4 border-top mt-4">
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Access to standard vehicles</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">24/7 customer support</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Basic insurance coverage</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2 text-400">Online booking</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2 text-400">Standard roadside assistance</p>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2 text-400">One free vehicle per month</p>
                                    </li>
                                </ul>
                                <button className="btn btn-primary2 w-100 d-flex justify-content-between">
                                    Get Started Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                            <div className="h-100 p-4 border rounded-12">
                                <h6 className="text-lg-bold neutral-1000">Standard</h6>
                                <div className="d-flex">
                                    <span className="heading-3 neutral-1000">$</span>
                                    <h3 className="neutral-1000 mb-0 text-price-standard">{isTab === 1 ? '39' : '99'}</h3>
                                    <span className="neutral-500 text-md-medium align-self-end text-type-standard">/{isTab === 1 ? 'month' : 'year'}</span>
                                </div>
                                <p className="text-sm-medium neutral-1000">For most businesses that want to optimize web queries</p>
                                <ul className="list-unstyled mb-0 py-4 border-top mt-4">
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">All Basic Plan features</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Access to premium vehicles</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Flexible rental terms</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">GPS included</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Free additional driver</p>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Unlimited vehicle swaps</p>
                                    </li>
                                </ul>
                                <button className="btn btn-primary2 w-100 d-flex justify-content-between">
                                    Get Started Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="dark" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                            <div className="h-100 p-4 border rounded-12">
                                <h6 className="text-lg-bold neutral-1000">Premium</h6>
                                <div className="d-flex">
                                    <span className="heading-3 neutral-1000">$</span>
                                    <h3 className="neutral-1000 mb-0 text-price-business">{isTab === 1 ? '59' : '199'}</h3>
                                    <span className="neutral-500 text-md-medium align-self-end text-type-business">/{isTab === 1 ? 'month' : 'year'}</span>
                                </div>
                                <p className="text-sm-medium neutral-1000">For most businesses that want to optimize web queries</p>
                                <ul className="list-unstyled mb-0 py-4 border-top mt-4">
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">All Standard Plan features</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Luxury vehicle options</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Complimentary upgrades</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Enhanced insurance coverage</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Free airport pickup, drop-off</p>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Exclusive deals and offers</p>
                                    </li>
                                </ul>
                                <button className="btn btn-primary2 w-100 d-flex justify-content-between">
                                    Get Started Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-lg-0 mb-4">
                            <div className="h-100 p-4 border rounded-12">
                                <h6 className="text-lg-bold neutral-1000">VIP</h6>
                                <div className="d-flex">
                                    <span className="heading-3 neutral-1000">$</span>
                                    <h3 className="neutral-1000 mb-0 text-price-enterprise">{isTab === 1 ? '79' : '299'}</h3>
                                    <span className="neutral-500 text-md-medium align-self-end text-type-enterprise">/{isTab === 1 ? 'month' : 'year'}</span>
                                </div>
                                <p className="text-sm-medium neutral-1000">For most businesses that want to optimize web queries</p>
                                <ul className="list-unstyled mb-0 py-4 border-top mt-4">
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">All Premium Plan features</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">VIP transfer service</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Personal concierge</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Unlimited mileage</p>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">Luxury vehicle upgrades</p>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <img src="/assets/imgs/pricing-1/check-primary.svg" alt="carento" />
                                        <p className="text-sm-medium neutral-1000 m-0 ms-2">24/7 account manager</p>
                                    </li>
                                </ul>
                                <button className="btn btn-primary2 w-100 d-flex justify-content-between">
                                    Get Started Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
                <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
            </section>
        </>
    )
}

export default Pricing
