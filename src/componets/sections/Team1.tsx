
import Link from "next/link"

export default function Team1() {
	return (
		<>

			<section className="section-team-1 py-96 background-body">
				<div className="container">
					<div className="success-section">
					<img src="/assets/imgs/seo-img/shep-1.png" alt="Blue Shape" className="success-shape-left" />
					<img src="/assets/imgs/seo-img/shep-2.png" alt="Pink Shape" className="success-shape-right" />
						<div className="success-background">
							<span className="badge">Selected Projects</span>
							<h2>We Believe In Our Success</h2>
						</div>
					</div>
					<div className="stats-wrapper container">
							<div className="stat-card">
								<p className="stat-title">Keywords</p>
								<h3 className="stat-number"><span style={{fontSize: "60px"}}>4</span>.628.319.632</h3>
								<div className="stat-meta">
									<span>🌍 62 Countries</span>
									<span>🌐 28 Languages</span>
								</div>
							</div>
							<div className="stat-card-1">
								<p className="stat-title">Search Volume</p>
								<h3 className="stat-number"><span style={{fontSize: "60px"}}>106</span>,9 Billion</h3>
								<div className="stat-meta">
									<span>🔎 4+ Billion Keywords</span>
									<span>💾 36TB Data</span>
								</div>
							</div>
						</div>
				</div>
			</section>
		</>
	)
}
