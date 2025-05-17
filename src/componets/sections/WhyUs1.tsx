

export default function WhyUs1({ cls }: any) {
	return (
		<>
			<section className={`section-box pt-80 background-body ${cls}`}>
				<div className="container">
					<div className="text-center wow fadeInUp">
						<p className="neutral-1000 px-4 py-2 bg-2 text-sm-bold rounded-12 d-inline-flex align-items-center">HOW WE DO IT</p>
						<h3 className="neutral-1000 wow fadeInUp">Helping others Succeed</h3>
					</div>
					<div className="row mt-40">
						<div className="col-lg-3 col-sm-6">
							<div className="card-why wow fadeIn" data-wow-delay="0.1s">
								<div className="card-image">
									<span className="tpprocess__count mb-25">1</span>

								</div>
								<div className="card-info">
									<p className="text-xl-medium neutral-500">Brainstorming and Creative ideas & Research</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="card-why wow fadeIn" data-wow-delay="0.2s">
								<div className="card-image tpprocess__two">
									<span className="tpprocess__count mb-25">2</span>
								</div>
								<div className="card-info">
									<p className="text-xl-medium neutral-500">Fully-Automated Keyword Grouping</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="card-why wow fadeIn" data-wow-delay="0.3s">
								<div className="card-image tpprocess__three">	<span className="tpprocess__count mb-25">3</span></div>
								<div className="card-info">
									<p className="text-xl-medium neutral-500">Building the strategy to boost Your Sales</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6">
							<div className="card-why wow fadeIn" data-wow-delay="0.4s">
								<div className="card-image tpprocess__four"><span className="tpprocess__count mb-25">4</span></div>
								<div className="card-info">
									<p className="text-xl-medium neutral-500">Helping to achieve more <br /> People</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<hr className="my-5 border-top border-secondary" />
				</div>
			</section>
		</>
	)
};