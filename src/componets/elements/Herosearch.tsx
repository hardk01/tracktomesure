'use client'
import React, { useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

export interface AuthTokenPayload {
	userId: string;
	iat?: number;
	exp?: number;
}

const Herosearch = () => {
	const [url, setUrl] = useState("");
	const router = useRouter();



	const handleAnalyze = async () => {
		const token = localStorage.getItem("token");
		let userId: string | undefined;

		if (token) {
			const decoded: AuthTokenPayload = jwtDecode(token);
			userId = decoded.userId;
		}

		if (!userId) {
			alert("User ID not found in token");
			return;
		}
		router.push(
			`http://localhost:3000/?userId=${encodeURIComponent(userId)}&url=${encodeURIComponent(url)}`
		);
	}


	// const handleanalyze = async () => {
	// 	if (!url) {
	// 		alert("Please enter a domain to analyze.");
	// 		return;
	// 	}

	// 	try {
	// 		const token = localStorage.getItem("token");
	// 		let userId: string | undefined;

	// 		if (token) {
	// 			const decoded: AuthTokenPayload = jwtDecode(token);
	// 			userId = decoded.userId;
	// 		}

	// 		if (!userId) {
	// 			alert("User ID not found in token");
	// 			return;
	// 		}

	// 		// Call the scanning API
	// 		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}v1/scan/`, {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify({ url, userId }),
	// 		});

	// 		const rawResult = await response.json();
	// 		const result = sanitizeScanResult(rawResult);

	// 		console.log("Sanitized API Response:", result);

	// 		// Optionally: send the cleaned data to your DB or use it in state

	// 	} catch (error) {
	// 		console.error("Error calling the API:", error);
	// 		alert("Failed to analyze the domain. Please try again.");
	// 	}
	// };

	// const sanitizeScanResult = (data: any) => {
	// 	const safeBoolean = (val: any): boolean | null => {
	// 		if (typeof val === "boolean") return val;
	// 		if (val === "true") return true;
	// 		if (val === "false") return false;
	// 		return null;
	// 	};

	// 	const safeNumber = (val: any): number | null => {
	// 		const num = Number(val);
	// 		return !isNaN(num) ? num : null;
	// 	};

	// 	return {
	// 		...data,
	// 		domainInfo: {
	// 			...data.domainInfo,
	// 			security: {
	// 				...data.domainInfo?.security,
	// 				ssl: {
	// 					...data.domainInfo?.security?.ssl,
	// 					status: safeBoolean(data.domainInfo?.security?.ssl?.status),
	// 				},
	// 			},
	// 		},
	// 		rankings: {
	// 			...data.rankings,
	// 			category: {
	// 				...data.rankings?.category,
	// 				globalCategoryRank: safeNumber(data.rankings?.category?.globalCategoryRank?.Rank),
	// 			},
	// 		},
	// 	};
	// };
	return (
		<>
			<div style={{ justifyContent: "space-between", padding: "0", marginTop: "0", border: "none" }} className="box-bottom-search background-card">
				<div className="form-contact">
					<div className="row">
						<div className="col-lg-6">
							<div className="form-group">
								<input style={{ border: "none" }}
									name="domain"
									value={url}
									onChange={(e) => setUrl(e.target.value)}
									className="form-control email"
									type="email"
									placeholder="https:// yoursite@domain.com" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="form-group">
								<input style={{ borderTop: "none", borderRight: "none", borderBottom: "none", borderRadius: "none" }} className="form-control email" type="text" placeholder="email@domain.com" />
							</div>
						</div>
					</div>
				</div>
				<div style={{ bottom: "10px" }} className="item-search bd-none d-flex justify-content-end">
					<button onClick={handleAnalyze} className="btn btn-brand-2 text-nowrap">
						<svg className="me-2" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						Analyze Now
					</button>
				</div>
			</div>
		</>
	)
}

export default Herosearch
