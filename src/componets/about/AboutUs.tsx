"use client"
import Link from 'next/link'
import React from 'react'
import CounterUp from '../elements/CounterUp'
import WhyUs1 from '../sections/WhyUs1'
import Team1 from '../sections/Team1'
import AwardAria from '../sections/AwardAria'

const AboutUs = () => {

  return (
    <div>
      <div className="page-header pt-30 background-body">
        <div className="custom-container position-relative mx-auto">
          <div className="bg-overlay rounded-12 overflow-hidden">
            <img className="w-100 h-100 img-banner" src="/assets/imgs/page-header/banner.png" alt="Carento" />
          </div>
          <div className="container position-absolute z-1 top-50 start-50 translate-middle">
            <h2 className="text-white">About Us</h2>
            <span className="text-white text-xl-medium">Working Hard to Make SEO Easy. Together</span>
          </div>
          <div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3 @@navigation-page">
            <Link href="/" className="neutral-700 text-md-medium">Home</Link>
            <span>
              <img src="/assets/imgs/template/icons/arrow-right.svg" alt="Carento" />
            </span>
            <Link href="#" className="neutral-1000 text-md-bold">About Us</Link>
          </div>
        </div>
      </div>
      {/* section-1 */}
      <WhyUs1 />
      {/* section-1 end */}
      {/* section-2 */}
      <section className="section-cta-7 background-body py-96">
        <div className="box-cta-6">
          <div className="container">
            <div style={{ justifyContent: "space-between" }} className="row align-items-center">
              <div className="col-lg-3">
                <Link className="btn btn-signin bg-2 text-dark mb-4" href="#">Our Mission</Link>
                <p className="text-lg-medium neutral-500 mb-4">e are in business to develop an SEO software that allows anyone to independently optimize and promote a website on the web, regardless of the level of expertise.</p>
                <div className="row">
                  <div className="col">
                    <div className="d-flex gap-4">
                      <div className="position-relative">
                        <img className="bdrd8 w-100" src="/assets/imgs/seo-img/mission-2.png" alt="Carento" />
                      </div>
                      <div className="mt-auto">
                        <img className="bdrd8 w-100" src="/assets/imgs/seo-img/mission-1.png" alt="Carento" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 position-relative z-1 mt-lg-0 mt-4">
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex gap-4">
                    <div className="position-relative">
                      <img className="bdrd8 w-100" src="/assets/imgs/cta/cta-8/img-1.png" alt="Carento" />
                    </div>
                    <div className="mt-auto">
                      <img className="bdrd8 w-100" src="/assets/imgs/cta/cta-8/img-2.png" alt="Carento" />
                    </div>
                  </div>
                  <div className="d-flex gap-4">
                    <div className="position-relative">
                      <img className="bdrd8 w-100" src="/assets/imgs/cta/cta-8/img-3.png" alt="Carento" />
                    </div>
                    <div className="position-relative">
                      <img className="bdrd8 w-100" src="/assets/imgs/cta/cta-8/img-4.png" alt="Carento" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex gap-4">
                  <div className="position-relative">
                    <img className="bdrd8 w-100" src="/assets/imgs/seo-img/mission-2.png" alt="Carento" />
                  </div>
                  <div className="mt-auto">
                    <img className="bdrd8 w-100" src="/assets/imgs/seo-img/mission-1.png" alt="Carento" />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <Link className="btn btn-signin bg-2 text-dark mb-4" href="#">Our Purpose</Link>
                    <p className="text-lg-medium neutral-500 mb-4">We aim to constantly improve the user experience, functionality, and support to provide the best possible options for search engine optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-overlay position-absolute bottom-0 end-0 h-75 background-brand-2 opacity-25 z-0 rounded-start-pill" />
        </div>
      </section>
      {/* section-2 end */}

      {/* section-3 */}
      <section className="section-static-1 background-body background-2 pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div>
              <div className="wow fadeIn">
                <div className="d-flex align-items-center justify-content-around flex-wrap">
                  <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                    <div className="d-flex justify-content-center justify-content-md-start">
                      <h3 className="count neutral-1000"><CounterUp count={45} /></h3>
                      <h3 className="neutral-1000">+</h3>
                    </div>
                    <div className="text-md-start text-center">
                      <p className="text-lg-bold neutral-1000">Global</p>
                      <p className="text-lg-bold neutral-1000">Branches</p>
                    </div>
                  </div>
                  <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                    <div className="d-flex justify-content-center justify-content-md-start">
                      <h3 className="count neutral-1000"><CounterUp count={29} /></h3>
                      <h3 className="neutral-1000">K</h3>
                    </div>
                    <div className="text-md-start text-center">
                      <p className="text-lg-bold neutral-1000">Destinations</p>
                      <p className="text-lg-bold neutral-1000">Collaboration</p>
                    </div>
                  </div>
                  <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                    <div className="d-flex justify-content-center justify-content-md-start">
                      <h3 className="count neutral-1000"><CounterUp count={20} /></h3>
                      <h3 className="neutral-1000">+</h3>
                    </div>
                    <div className="text-md-start text-center">
                      <p className="text-lg-bold neutral-1000">Years</p>
                      <p className="text-lg-bold neutral-1000">Experience</p>
                    </div>
                  </div>
                  <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                    <div className="d-flex justify-content-center justify-content-md-start">
                      <h3 className="count neutral-1000"><CounterUp count={168} /></h3>
                      <h3 className="neutral-1000">K</h3>
                    </div>
                    <div className="text-md-start text-center">
                      <p className="text-lg-bold neutral-1000">Happy</p>
                      <p className="text-lg-bold neutral-1000">Customers</p>
                    </div>
                  </div>
                  <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                    <div className="d-flex justify-content-center justify-content-md-start">
                      <h3 className="count neutral-1000"><CounterUp count={15} /></h3>
                      <h3 className="neutral-1000">M</h3>
                    </div>
                    <div className="text-md-start text-center">
                      <p className="text-lg-bold neutral-1000">User</p>
                      <p className="text-lg-bold neutral-1000">Account</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-3 end */}

      {/* section-4 */}
      <section className="section-1 py-96 background-body">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-12">
              <div className="d-flex flex-column gap-4 align-self-stretch h-100">
                <h3 className="neutral-1000">
                  Discovery our<br />
                  <span className="text-primary">culture </span>
                  is Here
                </h3>
                <p className="text-lg-medium neutral-500">More 15,000 Companies & partners
                  trusted & choice SEOMY.</p>
                <img className="rounded-12" src="/assets/imgs/section-1/img-3.png" alt="Carento" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="box-image rounded-12 position-relative overflow-hidden">
                <img className="rounded-12" src="/assets/imgs/section-1/img-1.png" alt="Carento" />
                <div className="box-tag bg-white p-3 d-flex position-absolute bottom-0 end-0 rounded-12 m-3">
                  <span className="text-dark fs-72 me-3">86</span>
                  <h6>
                    Industry <br />
                    Experts
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="box-image rounded-12 position-relative overflow-hidden">
                <img className="rounded-12" src="/assets/imgs/section-1/img-2.png" alt="Carento" />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* section-4 end */}
      <AwardAria />
      {/* section-5 */}
      <Team1 />
      {/* team 1 */}
      <section className="section-team-1 py-96 background-body border-top border-bottom">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9 col-sm-11">
              <div className="text-center mb-5">
                <span className="text-xl-medium neutral-500">Awesome Teams</span>
                <h3 className="section-title neutral-1000">Meet Our Agents</h3>
              </div>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="card-news background-card hover-up shadow-2 mb-4 mb-lg-0">
                <div className="card-image">
                  <Link href="/dealer-details">
                    <img src="/assets/imgs/team/team-1/portrait-1.png" alt="Carento" />
                  </Link>
                </div>
                <div className="card-info p-4">
                  <div className="card-title">
                    <Link className="text-xl-bold neutral-1000" href="/dealer-details">
                      <h6>Cody Fisher</h6>
                    </Link>
                    <span className="text-sm-medium neutral-500">CFO (Chief Financial Officer)</span>
                  </div>
                  <div className="card-program">
                    <div className="endtime">
                      <div className="card-author d-flex align-items-center gap-2">
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-1.svg" alt="Carento" />
                        </Link>
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-2.svg" alt="Carento" />
                        </Link>
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-3.svg" alt="Carento" />
                        </Link>
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-4.svg" alt="Carento" />
                        </Link>
                      </div>
                      <Link href="/dealer-details" className="rounded-circle background-100 icon-shape icon icon-sm hover-up border icon-shape-arrow">
                        <img className="m-0" src="/assets/imgs/team/team-1/arrow-up-right.svg" alt="Carento" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="card-news background-card hover-up shadow-2 mb-4 mb-lg-0">
                <div className="card-image">
                  <Link href="/dealer-details">
                    <img src="/assets/imgs/team/team-1/portrait-2.png" alt="Carento" />
                  </Link>
                </div>
                <div className="card-info p-4">
                  <div className="card-title">
                    <Link className="text-xl-bold neutral-1000" href="/dealer-details">
                      <h6>Darrell Steward</h6>
                    </Link>
                    <span className="text-sm-medium neutral-500">CEO (Chief Financial Officer)</span>
                  </div>
                  <div className="card-program">
                    <div className="endtime">
                      <div className="card-author d-flex align-items-center gap-2">
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-1.svg" alt="Carento" />
                        </Link>
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-2.svg" alt="Carento" />
                        </Link>
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-3.svg" alt="Carento" />
                        </Link>
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-4.svg" alt="Carento" />
                        </Link>
                      </div>
                      <Link href="/dealer-details" className="rounded-circle background-100 icon-shape icon icon-sm hover-up border icon-shape-arrow">
                        <img className="m-0" src="/assets/imgs/team/team-1/arrow-up-right.svg" alt="Carento" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="card-news background-card hover-up shadow-2 mb-4 mb-lg-0">
                <div className="card-image">
                  <Link href="/dealer-details">
                    <img src="/assets/imgs/team/team-1/portrait-3.png" alt="Carento" />
                  </Link>
                </div>
                <div className="card-info p-4">
                  <div className="card-title">
                    <Link className="text-xl-bold neutral-1000" href="/dealer-details">
                      <h6>Ronald Richards</h6>
                    </Link>
                    <span className="text-sm-medium neutral-500">COO (Chief Financial Officer)</span>
                  </div>
                  <div className="card-program">
                    <div className="endtime">
                      <div className="card-author d-flex align-items-center gap-2">
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-1.svg" alt="Carento" />
                        </Link>
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-2.svg" alt="Carento" />
                        </Link>
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-3.svg" alt="Carento" />
                        </Link>
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-4.svg" alt="Carento" />
                        </Link>
                      </div>
                      <Link href="/dealer-details" className="rounded-circle background-100 icon-shape icon icon-sm hover-up border icon-shape-arrow">
                        <img className="m-0" src="/assets/imgs/team/team-1/arrow-up-right.svg" alt="Carento" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="card-news background-card hover-up shadow-2 mb-4 mb-lg-0">
                <div className="card-image">
                  <Link href="/dealer-details">
                    <img src="/assets/imgs/team/team-1/portrait-4.png" alt="Carento" />
                  </Link>
                </div>
                <div className="card-info p-4">
                  <div className="card-title">
                    <Link className="text-xl-bold neutral-1000" href="/dealer-details">
                      <h6>Jerome Bell</h6>
                    </Link>
                    <span className="text-sm-medium neutral-500">CMO (Chief Financial Officer)</span>
                  </div>
                  <div className="card-program">
                    <div className="endtime">
                      <div className="card-author d-flex align-items-center gap-2">
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-1.svg" alt="Carento" />
                        </Link>
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-2.svg" alt="Carento" />
                        </Link>
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-3.svg" alt="Carento" />
                        </Link>
                        <Link href="#" className="rounded-circle background-100 icon-shape icon icon-sm hover-up">
                          <img className="m-0" src="/assets/imgs/team/team-1/icon-4.svg" alt="Carento" />
                        </Link>
                      </div>
                      <Link href="/dealer-details" className="rounded-circle background-100 icon-shape icon icon-sm hover-up border icon-shape-arrow">
                        <img className="m-0" src="/assets/imgs/team/team-1/arrow-up-right.svg" alt="Carento" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-5 end */}
    </div>
  )
}

export default AboutUs
