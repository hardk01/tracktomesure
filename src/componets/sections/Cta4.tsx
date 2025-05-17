
import Link from "next/link"

export default function Cta4() {
	return (
		<>
			<section className="section-cta-4 position-relative overflow-hidden py-60">
				<div className="bg-shape" />
				<div className="container position-relative z-1">
					<div className="text-center">
						<span className="text-sm-bold bg-white p-3 rounded-12 wow fadeInDown">Selected Projects</span>
						<h4 className="mt-4 wow fadeInUp">
							We Believe In Our Success
						</h4>
					</div>
					<div className="row mt-60">
						<div className="col-lg-4">
							<div className="bg-white rounded-12 p-5 d-flex flex-column gap-4">
								<span className="icon-shape icon_70 background-2 rounded-circle wow fadeIn">
									<img style={{ width: "80%" }} className="dark-invert" src="/assets/imgs/seo-img/services.png" alt="Carento" />
								</span>
								<p className="text-md-medium neutral-500">Keywords</p>
								<h6 className=" wow fadeInUp">4.628.319.632</h6>
								<p className="text-md-medium neutral-500"><span>62 Countries</span>  <span>28 Languages</span></p>
								<Link className="btn btn-primary wow fadeInUp" href="/cars-list-1">
									Get Started Now
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path d="M12 19L19 12L12 5M19 12L5 12" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div>
						</div>
						<div className="col-lg-4 text-center wow fadeInUp">
							{/* <img src="/assets/imgs/cta/cta-4/car-center.png" alt="Carento" /> */}
						</div>
						<div className="col-lg-4">
							<div className="bg-white rounded-12 p-5 d-flex flex-column gap-4">
								<span className="icon-shape icon_70 background-2 rounded-circle wow fadeIn">
									<img style={{ width: "80%" }} className="dark-invert" src="/assets/imgs/seo-img/services.png" alt="Carento" />

								</span>
								<p className="text-md-medium neutral-500">Keywords</p>
								<h6 className=" wow fadeInUp">4.628.319.632</h6>
								<p className="text-md-medium neutral-500"><span>62 Countries</span>  <span>28 Languages</span></p>
								<Link className="btn btn-primary wow fadeInUp" href="/cars-list-1">
									Get Started Now
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path d="M12 19L19 12L12 5M19 12L5 12" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
