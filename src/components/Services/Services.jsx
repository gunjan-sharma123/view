import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { Menuoptions } from "../../data/Menu";
import { getLinks, getTender, getReport, getwhatsnew, getMenuoptins } from "../../Api/ApiFunctions"; // Import Bootstrap JS
import HomeIcon from '@mui/icons-material/Home';


export const Services = () => {
	const [link, setLinkData] = useState([])
	const [report, setreportData] = useState([])
	const [tender, settenderData] = useState([])
	const [whatsnew, setwhatsnewData] = useState([])
	const [selectedLanguage, setSelectedLanguage] = useState(1);
	useEffect(() => {

		async function fetchwhatsnewData() {
			try {
				// const whatsnew = await getwhatsnew();
				// const link = await getLinks();
				const report = await getReport();
				// const tender = await getTender();

				// setwhatsnewData(whatsnew);
				// setLinkData(link)
				setreportData(report)
				// settenderData(tender)
			} catch (error) {
				console.error('Error fetching menu data:', error);
			}

		}

		fetchwhatsnewData();
		const newSelectedLanguage = localStorage.getItem('selectedLanguage');
    setSelectedLanguage(newSelectedLanguage || 1); 
	}, []);
	console.log(report)
	return (
		<>
		{parseInt(selectedLanguage) ===1? (
			<div>
			  <div>
			<section class="news-section">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<div class="news-box-lft">
								<div class="panel with-nav-tabs panel-default">
									<div class="panel-heading">
										<ul class="nav nav-tabs">
											<li class="active"><a href="#tab1default" data-toggle="tab">Reports</a></li>
											<li><a href="#tab2default" data-toggle="tab">Links</a></li>
											<li><a href="#tab3default" data-toggle="tab">Tenders</a></li>
										</ul>
									</div>
									<div class="panel-body">
										<div class="tab-content">
											<div class="tab-pane fade in active" id="tab1default">
											<div class="list-report">
										<div class="marquee-container marquee">
											<ul class="marquee-list report-sec ">
												<li>
													<div class="newsbox">
														<div class="latest-news-date">
															<p class="news-sec-datep">
																01 </p>
															<p class="news-sec-monthp">Sep </p>
															<p class="news-sec-yearp">2023 </p>
														</div>
														<div class="ml-10">
															<p class="news-p">
																<a href="#" target="_blank"
																	title="Title : MoM 29 Aug 2023 | Date : 10-Oct-2023 | Size : 2037kb | Format : .pdf">
																	Minutes of Meeting held on 29.08.2023 to discuss operational issues w.r.t. new STATCOMs at ISTS in
																	RE complexes </a>
															</p>
														</div>
													</div>
												</li>
												<li>
													<div class="newsbox">
														<div class="latest-news-date">
															<p class="news-sec-datep">
																02 </p>
															<p class="news-sec-monthp">Sep </p>
															<p class="news-sec-yearp">2023 </p>
														</div>
														<div class="ml-10">
															<p class="news-p">
																<a href="#" target="_blank"
																	title="Title : MoM 29 Aug 2023 | Date : 10-Oct-2023 | Size : 2037kb | Format : .pdf">
																	Minutes of Meeting held on 29.08.2023 to discuss operational issues w.r.t. new STATCOMs at ISTS in
																	RE complexes </a>
															</p>
														</div>
													</div>
												</li>
												<li>
													<div class="newsbox">
														<div class="latest-news-date">
															<p class="news-sec-datep">
																03 </p>
															<p class="news-sec-monthp">Sep </p>
															<p class="news-sec-yearp">2023 </p>
														</div>
														<div class="ml-10">
															<p class="news-p">
																<a href="#" target="_blank"
																	title="Title : MoM 29 Aug 2023 | Date : 10-Oct-2023 | Size : 2037kb | Format : .pdf">
																	Minutes of Meeting held on 29.08.2023 to discuss operational issues w.r.t. new STATCOMs at ISTS in
																	RE complexes </a>
															</p>
														</div>
													</div>
												</li>
												<li>
													<div class="newsbox">
														<div class="latest-news-date">
															<p class="news-sec-datep">
																04 </p>
															<p class="news-sec-monthp">Sep </p>
															<p class="news-sec-yearp">2023 </p>
														</div>
														<div class="ml-10">
															<p class="news-p">
																<a href="#" target="_blank"
																	title="Title : MoM 29 Aug 2023 | Date : 10-Oct-2023 | Size : 2037kb | Format : .pdf">
																	Minutes of Meeting held on 29.08.2023 to discuss operational issues w.r.t. new STATCOMs at ISTS in
																	RE complexes </a>
															</p>
														</div>
													</div>
												</li>
												<li>
													<div class="newsbox">
														<div class="latest-news-date">
															<p class="news-sec-datep">
																05 </p>
															<p class="news-sec-monthp">Sep </p>
															<p class="news-sec-yearp">2023 </p>
														</div>
														<div class="ml-10">
															<p class="news-p">
																<a href="#" target="_blank"
																	title="Title : MoM 29 Aug 2023 | Date : 10-Oct-2023 | Size : 2037kb | Format : .pdf">
																	Minutes of Meeting held on 29.08.2023 to discuss operational issues w.r.t. new STATCOMs at ISTS in
																	RE complexes </a>
															</p>
														</div>
													</div>
												</li>
												<li>
													<div class="newsbox">
														<div class="latest-news-date">
															<p class="news-sec-datep">
																06 </p>
															<p class="news-sec-monthp">Sep </p>
															<p class="news-sec-yearp">2023 </p>
														</div>
														<div class="ml-10">
															<p class="news-p">
																<a href="#" target="_blank"
																	title="Title : MoM 29 Aug 2023 | Date : 10-Oct-2023 | Size : 2037kb | Format : .pdf">
																	Minutes of Meeting held on 29.08.2023 to discuss operational issues w.r.t. new STATCOMs at ISTS in
																	RE complexes </a>
															</p>
														</div>
													</div>
												</li>
												
											</ul>
										  </div>
										  <div class="pagination">
											<button onclick="scrollItems(-1)">Previous</button>
											<button onclick="scrollItems(1)">Next</button>
										  </div>
									  </div>


											</div>
											<div class="tab-pane fade" id="tab2default">
												<div class="list-report">
													<div class="marquee-container marquee">
														<ul class="marquee-list report-sec ">
															<li>
																{report.map((i) => {
																	<li key={i.u_id}>
																		<div class="newsbox">
																			<div class="latest-news-date">
																				<p class="news-sec-datep">
																					{i.u_startdate} </p>

																			</div>
																			<div class="ml-10">
																				<p class="news-p">

																					{i.u_content_type === 2 && (
																						<Link className="nav-link" to={i.u_file} target="_blank" style={{ color: "white" }}>
																							{i. u_report_tittle}
																						</Link>
																					)}
																					{i.u_content_type === 3 && (
																						<Link className="nav-link" to={i.u_internal_link} style={{ color: "white" }}>
																							{i. u_report_tittle}
																						</Link>
																					)}
																					{i.u_content_type === 4 && (
																						<Link className="nav-link" to={i.u_external_link} target="_blank" style={{ color: "white" }}>
																							{i. u_report_tittle}
																						</Link>
																					)}
																					{i.u_content_type === 1 && (
																						<Link className="nav-link" to={`/menu/${i.u_menu_url}`} style={{ color: "white" }}>
																							{i. u_report_tittle}
																						</Link>
																					)}
																				</p>
																			</div>
																		</div>

																	</li>
																})}
															</li>

														</ul>
													</div>
													<div class="pagination">
														<button onclick="scrollis(-1)">Previous</button>
														<button onclick="scrollis(1)">Next</button>
													</div>
												</div>
											</div>
											<div class="tab-pane fade" id="tab3default"><div class="list-report">
												<div class="marquee-container marquee">
													<ul class="marquee-list report-sec ">
														<li>
															{report.map((i) => {
																<li key={i.u_id}>
																	<div class="newsbox">
																		<div class="latest-news-date">
																			<p class="news-sec-datep">
																				{i.u_startdate} </p>

																		</div>
																		<div class="ml-10">
																			<p class="news-p">

																				{i.u_content_type === 2 && (
																					<Link className="nav-link" to={i.u_file} target="_blank" style={{ color: "white" }}>
																						{i. u_report_tittle}
																					</Link>
																				)}
																				{i.u_content_type === 3 && (
																					<Link className="nav-link" to={i.u_internal_link} style={{ color: "white" }}>
																						{i. u_report_tittle}
																					</Link>
																				)}
																				{i.u_content_type === 4 && (
																					<Link className="nav-link" to={i.u_external_link} target="_blank" style={{ color: "white" }}>
																						{i. u_report_tittle}
																					</Link>
																				)}
																				{i.u_content_type === 1 && (
																					<Link className="nav-link" to={`/menu/${i.u_menu_url}`} style={{ color: "white" }}>
																						{i. u_report_tittle}
																					</Link>
																				)}
																			</p>
																		</div>
																	</div>

																</li>
															})}
														</li>

													</ul>
												</div>
												<div class="pagination">
													<button onclick="scrollis(-1)">Previous</button>
													<button onclick="scrollis(1)">Next</button>
												</div>
											</div></div>

										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="news-box-rgt">
								<div class="news-box meeting">
									<h4>Latest News</h4>
									<div class="news-list marquee-container marquee">
										<ul class="marquee-list ">

											
												{report.map((i) => {
													return (
														<li key={i.u_id} class="news-p">

															{i.u_contenttype === 2 && (
																
																<div class="newsbox">
																	<div class="latest-news-date">
																		<p class="news-sec-datep">
																			{i.u_startdate}</p>
																	</div>
																	<div class="ml-10">
																		<p class="news-p">
																			<Link className="nav-link" to={i.u_file} target="_blank" >
																				{i.u_report_tittle}
																			</Link>
																		</p>

																	</div>
																</div>
															)}
															{i.u_contenttype === 3 && (

																<div class="newsbox">
																	<div class="latest-news-date">
																		<p class="news-sec-datep">
																			{i.u_startdate}</p>
																	</div>
																	<div class="ml-10">
																		<p class="news-p">
																			<Link className="nav-link" to={i.u_internal_link} >
																				{i.u_report_tittle}
																			</Link>
																		</p>

																	</div>
																</div>
															)}
															{i.u_contenttype === 4 && (

																<div class="newsbox">
																	<div class="latest-news-date">
																		<p class="news-sec-datep">
																			{i.u_startdate}</p>
																	</div>
																	<div class="ml-10">
																		<p class="news-p">
																			<Link className="nav-link" to={i.u_external_link} target="_blank" >
																				{i.u_report_tittle}
																			</Link>
																		</p>

																	</div>
																</div>
															)}
															{i.u_content_type === 1 && (

																<div class="newsbox">
																	<div class="latest-news-date">
																		<p class="news-sec-datep">
																			{i.u_startdate}</p>
																	</div>
																	<div class="ml-10">
																		<p class="news-p">
																			<Link className="nav-link" to={`/menu/${i.u_menu_url}`} >
																				{i. u_report_tittle}
																			</Link>
																		</p>

																	</div>
																</div>
															)}
														</li>
													)

												})}
											
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
			</div>
		  ) : (
			<div>
			  {/* Render content for language 1 */}
			</div>
		  )}
		
		</>
	)
}
