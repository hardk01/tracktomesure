"use client"
import React, { useState } from 'react'
import CounterUp from '../elements/CounterUp';

const SeoAgency = () => {
    const [isAfter, setIsAfter] = useState(false);
    return (
        <>
            <section className="position-relative overflow-hidden">
                <div className="container position-relative z-1">
                    <div className="text-center wow fadeInUp">
                        <p className="neutral-1000 px-4 py-2 bg-2 text-sm-bold rounded-12 d-inline-flex align-items-center">SEO Agency of the Year</p>

                        <h3 style={{ marginTop: "20px" }} className="neutral-1000 wow fadeInUp">
                            <span className='' style={{ fontSize: "48px", fontWeight: "300" }}>Expect great things</span> <br/>
                            from your SEO Agency</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="d-flex flex-column gap-4">
                                <img alt="theme-pure" loading="lazy" width="266" height="227" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="/assets/imgs/seo-img/seo.png" />
                            </div>
                        </div>
                        <div className="col-lg-6 text-center wow fadeInUp">
                            <p style={{ margin: "50px 0px" }} className="text-md-medium neutral-500">Believe it because you've seen it. Here are real numbers from just one
                                successful Victorious partner.</p>
                            <div className="seo-toggle-wrapper">
                                <label className={`seo-label ${!isAfter ? 'active' : ''}`} onClick={() => setIsAfter(false)}>
                                    BEFORE SEO
                                </label>

                                <div className="seo-toggle" onClick={() => setIsAfter(!isAfter)}>
                                    <div className={`seo-slider ${isAfter ? 'active' : ''}`}></div>
                                </div>

                                <label className={`seo-label ${isAfter ? 'active' : ''}`} onClick={() => setIsAfter(true)}>
                                    AFTER SEO
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex flex-column gap-4">
                                <img alt="theme-pure" loading="lazy" width="266" height="227" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="/assets/imgs/seo-img/chart.png" />
                            </div>
                        </div>
                    </div>
                    <div style={{ justifyContent: "center" }} className="row">
                        <div className="col-md-2 col-6 mb-md-0 mb-4 d-flex flex-column align-items-center">
                            <div className="d-flex justify-content-center justify-content-md-start">
                                <h3 className="count text-black display-6"><CounterUp count={10265} /></h3>
                                <h3 className="text-black display-6">+</h3>
                            </div>
                            <div className="position-relative">
                                <p className="text-md-medium neutral-500 text-center">Annual Organic Traffic</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-md-0 mb-4 d-flex flex-column align-items-center">
                            <div className="d-flex justify-content-center justify-content-md-start">
                                <h3 className="count text-black display-6"><CounterUp count={8426} /></h3>
                                <h3 className="text-black display-6">+</h3>
                            </div>
                            <div className="position-relative">
                                <p className="text-md-medium neutral-500 text-center">Ranking Keywords</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-6 mb-md-0 mb-4 d-flex flex-column align-items-center">
                            <div className="d-flex justify-content-center justify-content-md-start">
                                <h3 className="count text-black display-6"><CounterUp count={726} /></h3>
                                <h3 className="text-black display-6">+</h3>
                            </div>
                            <div className="position-relative">
                                <p className="text-md-medium neutral-500 text-center">Return on Investment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SeoAgency
