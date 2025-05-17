import Link from 'next/link'
import React from 'react'

const Services = () => {
    return (
        <section className={`section-box background-body mt-40`}>
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <p className="neutral-1000 px-4 py-2 bg-2 text-sm-bold rounded-12 d-inline-flex align-items-center">Our Services</p>
                    <h3 className="neutral-1000 wow fadeInUp">From your SEO Agency</h3>
                    <p style={{ margin: "20px 0px" }} className="text-md-medium neutral-500">Our strategy includes consistently evolving, to ensure we’re producing <br />
                        exceptional SEO for business.</p>
                </div>
                <div className="row text-center">
                    <div style={{padding: "0px"}} className="col-12 col-sm-6 col-md-4">
                        <div className="feature-box feature-card p-4 h-100">
                            <div style={{backgroundColor : "#e4f7ff"}} className="tpservices-img position-relative mx-auto mb-3">
                                <img src="/assets/imgs/seo-img/services-1.png" alt="Social Marketing" className="feature-icon position-relative" />
                            </div>
                            <p className="text-xl-medium neutral-500 py-2">Social Marketing</p>
                            <h6 className="text-xl-bold neutral-900">Instant account activation <br/>
                            if instant access.</h6>
                        </div>
                    </div>

                    <div style={{padding: "0px"}} className="col-12 col-sm-6 col-md-4">
                        <div className="feature-box feature-card p-4 h-100">
                            <div style={{backgroundColor : "#fff2d6"}} className="tpservices-img position-relative mx-auto mb-3">
                                <img src="/assets/imgs/seo-img/services-5.png" alt="Social Marketing" className="feature-icon position-relative" />
                            </div>
                            <p className="text-xl-medium neutral-500 py-2">SEO Optimization</p>
                            <h6 className="text-xl-bold neutral-900">Services activation <br/>
                            if need access.</h6>
                        </div>
                    </div>
                    <div style={{padding: "0px"}} className="col-12 col-sm-6 col-md-4">
                        <div style={{borderRight: "none"}} className="feature-box feature-card p-4 h-100">
                            <div style={{backgroundColor : "#e3e8ff"}} className="tpservices-img position-relative mx-auto mb-3">
                                <img src="/assets/imgs/seo-img/services.png" alt="Social Marketing" className="feature-icon position-relative" />
                            </div>
                            <p className="text-xl-medium neutral-500 py-2">One Page SEO</p>
                            <h6 className="text-xl-bold neutral-900">Account activation<br/>
                            if instant access.</h6>
                        </div>
                    </div>

                    <div style={{padding: "0px"}} className="col-12 col-sm-6 col-md-4">
                        <div style={{borderBottom: "none"}} className="feature-box feature-card p-4 h-100">
                            <div style={{backgroundColor : "#ffe4e4"}} className="tpservices-img position-relative mx-auto mb-3">
                                <img src="/assets/imgs/seo-img/services-4.png" alt="Social Marketing" className="feature-icon position-relative" />
                            </div>
                            <p className="text-xl-medium neutral-500 py-2">Content Marketing</p>
                            <h6 className="text-xl-bold neutral-900">SEO account activation<br/>
                            if instant access.</h6>
                            
                        </div>
                    </div>

                    <div style={{padding: "0px"}} className="col-12 col-sm-6 col-md-4">
                        <div style={{borderBottom: "none"}} className="feature-box feature-card p-4 h-100">
                            <div style={{backgroundColor : "#d2f8ec"}} className="tpservices-img position-relative mx-auto mb-3">
                                <img src="/assets/imgs/seo-img/services-3.png" alt="Social Marketing" className="feature-icon position-relative" />
                            </div>
                            <p className="text-xl-medium neutral-500 py-2">Email Marketing</p>
                            <h6 className="text-xl-bold neutral-900">Email Marketing activation<br/>
                            if instant access.</h6>
                        </div>
                    </div>

                    <div style={{padding: "0px"}} className="col-12 col-sm-6 col-md-4">
                        <div style={{borderRight: "none", borderBottom: "none"}} className="feature-box feature-card p-4 h-100">
                            <div style={{backgroundColor : "#ffe4f3"}} className="tpservices-img position-relative mx-auto mb-3">
                                <img src="/assets/imgs/seo-img/services-2.png" alt="Social Marketing" className="feature-icon position-relative" />
                            </div>
                            <p className="text-xl-medium neutral-500 py-2">Keyword Research</p>
                            <h6 className="text-xl-bold neutral-900">Keyword Research activation<br/>
                            if instant access.</h6>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services
