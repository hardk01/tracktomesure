
import Link from "next/link"

export default function Cta6() {
	return (
		<>
			<section className="section-cta-6 background-body py-96">
				<div className="box-cta-6">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5">
								<span className="btn btn-signin bg-2 text-dark mb-4 wow fadeInUp">Why Choose us</span>
								<h4 className="mb-4 neutral-1000 wow fadeInUp">What makes Us <br />Different from Others</h4>
								<p className="text-lg-medium neutral-500 mb-4 wow fadeInUp">Migrating your rank tracking tool is like migrating from Google Analytics to another solution.</p>
								<div className="row">
									<div className="col">
										<ul style={{gap : "15px" }} className="list-ticks-green list-ticks-green-2 wow fadeInUp">
											<li className="neutral-1000 pe-0">Experts Consulting</li>
											<li className="neutral-1000 pe-0">Competitor Analysis</li>
											<li className="neutral-1000 pe-0">Responsive Support</li>
										</ul>
									</div>
								</div>
								<Link className="btn btn-primary mt-2 wow fadeInUp" href="#">
									Get Started Now
									<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div>
							<div className="col-lg-6 offset-lg-1 position-relative z-1 mt-lg-0 mt-4">
								<div className="position-relative">
									<div className="row align-items-center">
										<div className="col-sm-6">
											<img className="bdrd8 w-100 mb-15 wow fadeInUp" src="/assets/imgs/team/team-1/portrait-1.png" alt="Carento" />
											<img className="bdrd8 w-100 mb-15 wow fadeInUp" src="/assets/imgs/team/team-1/portrait-8.png" alt="Carento" />
										</div>
										<div className="col-sm-6 mt-md-50">
											<img className="bdrd8 w-100 mb-15 wow fadeInUp" src="/assets/imgs/team/team-1/portrait-3.png" alt="Carento" />
											<img className="bdrd8 w-100 wow fadeInUp" src="/assets/imgs/team/team-1/portrait-7.png" alt="Carento" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-overlay position-absolute bottom-0 end-0 h-75 background-brand-2 opacity-25 z-0 rounded-start-pill" />
				</div>
			</section>
		</>
	)
}
