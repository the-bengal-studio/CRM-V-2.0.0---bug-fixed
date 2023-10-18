import React, { useState } from "react";
import ALLImages from "../../../common/imagesData";
import Select from 'react-select';
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from "react-router-dom";
import { TeamCategory } from "../../../common/select2data";
import { TeammemberData } from "../../../common/commondata";

const Team = () => {
	const [allData, setAllData] = useState(TeammemberData)

	let allElement2 = [];
	let myfunction = (InputData) => {
		let allElement
		for (allElement of TeammemberData) {
			if (allElement.name[0] == " ") {
				allElement.name = allElement.name.trim()
			}
			if (allElement.name.toLowerCase().includes(InputData.toLowerCase())) {
				if (allElement.name.toLowerCase().startsWith(InputData.toLowerCase())) {
					allElement2.push(allElement);
				}
			}
		}
		setAllData(allElement2);
	};
	function handleRemove(id) {
		const newList = allData.filter((idx) => idx.id !== id);
		setAllData(newList);
	  }
	return (
		<div>
			<PageHeader currentpage="Team Members" activepage="Pages" mainpage="Team Members" />
			<div className= "grid grid-cols-12 gap-6">
				<div className= "col-span-12">
					<div className= "box">
						<div className= "box-body">
							<div className= "lg:grid grid-cols-12 gap-6 space-y-6 lg:space-y-0">
								<div className= "col-span-12 lg:col-span-4">
									<div className= "relative  max-w-xs">
										<label htmlFor="hs-table-search" className= "sr-only">Search</label>
										<div className= "absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-4 rtl:pl-4">
											<i className= "ti ti-search"></i>
										</div>
										<input type="text" name="hs-table-search" id="hs-table-search" className= "p-2 ltr:pr-10 rtl:pl-10 ti-form-input" onChange={(ele) => { myfunction(ele.target.value) }}
											placeholder="Enter Your Text"/>
									</div>
								</div>
								<div className= "col-span-12 lg:col-span-4">
									<div className= "text-center max-w-xs lg:mx-auto">
										<nav className= "flex justify-center space-x-3 rtl:space-x-reverse" aria-label="Tabs" role="tablist">
											<button type="button"
												className="w-full hs-tab-active:!bg-primary hs-tab-active:!text-white dark:hs-tab-active:border-b-white/10 -mr-px p-2 items-center bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 active"
												id="tab-1" data-hs-tab="#tab-style-1" aria-controls="tab-style-1" role="tab">
                          All Team Members
											</button>
											<button type="button"
												className="w-full hs-tab-active:!bg-primary hs-tab-active:!text-white dark:hs-tab-active:border-b-white/10 ltr:-ml-px rtl:-mr-px p-2 items-center bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300"
												id="tab-2" data-hs-tab="#tab-style-2" aria-controls="tab-style-2" role="tab">
                          My Team Members
											</button>
										</nav>
									</div>
								</div>
								<div className= "col-span-12 lg:col-span-4">
									<div className= "flex space-x-3 rtl:space-x-reverse lg:justify-end team-right team-members">
									<Select  className="ti-form-select" classNamePrefix="react-select" options={TeamCategory} placeholder='Select Color' />
										<div className= "hs-tooltip ti-main-tooltip">
											<Link to="#" className= "team-add-btn m-0 hs-tooltip-toggle ti-btn ti-btn-primary">
												<i className= "ti ti-circle-plus text-xl leading-none"></i>
												<span
													className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
													role="tooltip">
                            Add New Team Member
												</span>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className= "grid grid-cols-12 gap-6">
				<div className= "col-span-12">
					<div className= "ti-tab-content">
						<div id="tab-style-1" role="tabpanel" aria-labelledby="tab-1">
							<section className= "mb-6">
								<div className= "flex flex-wrap">
									<div className= "w-full px-4">
										<div className= "mx-auto max-w-lg text-center">
											<h2 className= "text-2xl font-bold">
                          Team Members
											</h2>
											<p className= "text-gray-500 dark:text-white/70 text-xs">
                          Quod itaque fuga amet, id fugiat ratione assumenda saepe magni quae voluptatibus inventore
                          ullam excepturi possimus eligendi minus labore.
											</p>
										</div>
									</div>
								</div>
							</section>
							<div className= "grid grid-cols-12 gap-6">
								{allData.map((idx)=>(
								<div className= "col-span-12 md:col-span-6 xxl:col-span-3 team-box" key={Math.random()}>
									<div className= "box overflow-hidden mb-0">
										<div className= "block relative -mb-32 before:bg-primary/70 before:absolute before:w-full before:h-full">
											<img src= {ALLImages('png106')} alt="" className= "w-full h-32"/>
										</div>
										<div className= "box-body">
											<div className= "justify-center text-center relative ">
												<Link className= "relative inline-block mt-8" to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`}>
													<img src= {idx.pic} className="w-24 h-24 rounded-full ring-4 ring-gray-100 mx-auto dark:ring-white/10" alt="user-img"/>
													<span className="absolute bottom-0 ltr:right-0 rtl:left-0 block p-1 rounded-full ring-2 ring-white dark:ring-white/10 text-gray-500 dark:text-white/70 bg-gray-100 dark:bg-bgdark leading-none"><i className="ri ri-pencil-line"></i></span>
												</Link>
												<div className= "space-y-2">
													<div className= "mt-4">
														<h2 className= "text-base font-semibold">{idx.name}</h2>
														<p className= "text-xs text-gray-500 dark:text-white/70">{idx.mail}</p>
													</div>
													<span className= {`max-w-[10rem] truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-sm text-xs font-medium bg-${idx.color}/20 text-${idx.color}`}>{idx.role}</span>
													<div className= "flex space-x-1 rtl:space-x-reverse justify-center text-center">
														<div className= "hs-tooltip ti-main-tooltip">
															<button type="button" className= "hs-tooltip-toggle m-0 rounded-full p-2 ti-btn ti-btn-outline  border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/70 ring-transparent">
																<i className= "ri ri-github-line text-lg leading-none"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip"> Github </span>
															</button>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<button type="button" className= "hs-tooltip-toggle m-0 rounded-full p-2 ti-btn ti-btn-outline  border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/70 ring-transparent">
																<i className= "ri ri-instagram-line text-lg leading-none"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip"> Instagram </span>
															</button>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<button type="button" className= "hs-tooltip-toggle m-0 rounded-full p-2 ti-btn ti-btn-outline  border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/70 ring-transparent">
																<i className= "ri ri-twitter-line text-lg leading-none"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip"> Twitter </span>
															</button>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<button type="button" className= "hs-tooltip-toggle m-0 rounded-full p-2 ti-btn ti-btn-outline  border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/70 ring-transparent">
																<i className= "ri ri-linkedin-line text-lg leading-none"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip"> Linkedin </span>
															</button>
														</div>
													</div>
												</div>
												<Link aria-label="anchor" to="#" className= {idx.favoriteclass}><i className= "ri-star-fill"></i></Link>
												<div
													className="hs-dropdown ti-dropdown z-40 absolute top-0 ltr:right-0 rtl:left-0 block text-gray-100 dark:text-white/70 text-base">
													<button aria-label="button" type="button"
														className="hs-dropdown-toggle p-0 !bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0 ti-dropdown-toggle">
														<i className= "ri-more-2-line leading-none text-base text-gray-100"></i>
													</button>
													<div className= "hs-dropdown-menu ti-dropdown-menu">
														<Link className= "ti-dropdown-item" to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`}><i className="ri ri-edit-2-line text-lg"></i>Edit</Link>
														<Link className= "team-remove ti-dropdown-item" to="#" onClick={() => handleRemove(idx.id)}><i className="ri ri-delete-bin-6-line text-lg"></i>Delete</Link>
													</div>
												</div>
											</div>
										</div>
										<div className= "box-footer bg-gray-100 dark:bg-bgdark p-0 text-center">
											<div className= "grid grid-cols-12 gap-6">
												<div className= "col-span-6 ltr:border-r rtl:border-l p-3 border-gray-200 dark:border-white/10">
													<Link to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`} className= "space-x-3"><i className= "ri-user-line"></i><span>Profile</span></Link>
												</div>
												<div className= "col-span-6 p-3">
													<Link to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className= "space-x-3"><i
														className="ri-message-3-line"></i><span>Chat</span></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								))}
							</div>
						</div>
						<div id="tab-style-2" className= "hidden" role="tabpanel" aria-labelledby="tab-2">
							<section className= "mb-6">
								<div className= "-mx-4 flex flex-wrap">
									<div className= "w-full px-4">
										<div className= "mx-auto max-w-lg text-center">
											<h2 className= "text-2xl font-bold"> Our Team Members </h2>
											<p className= "text-gray-500 dark:text-white/70 text-xs"> Quod itaque fuga amet, id fugiat ratione assumenda saepe magni quae voluptatibus inventore ullam excepturi possimus eligendi minus labore.</p>
										</div>
									</div>
								</div>
							</section>
							<div className= "grid grid-cols-12 gap-6">
							{allData.map((idx)=>(
								<div className= "col-span-12 md:col-span-6 xxl:col-span-3 team-box" key={Math.random()}>
									<div className= "box overflow-hidden mb-0">
										<div className= "block relative -mb-32 before:bg-primary/70 before:absolute before:w-full before:h-full">
											<img src= {ALLImages('png106')} alt="" className= "w-full h-32"/>
										</div>
										<div className= "box-body">
											<div className= "justify-center text-center relative ">
												<Link className= "relative inline-block mt-8" to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`}>
													<img src= {idx.pic} className="w-24 h-24 rounded-full ring-4 ring-gray-100 mx-auto dark:ring-white/10" alt="user-img"/>
													<span className="absolute bottom-0 ltr:right-0 rtl:left-0 block p-1 rounded-full ring-2 ring-white dark:ring-white/10 text-gray-500 dark:text-white/70 bg-gray-100 dark:bg-bgdark leading-none"><i className="ri ri-pencil-line"></i></span>
												</Link>
												<div className= "space-y-2">
													<div className= "mt-4">
														<h2 className= "text-base font-semibold">{idx.name}</h2>
														<p className= "text-xs text-gray-500 dark:text-white/70">{idx.mail}</p>
													</div>
													<span className= {`max-w-[10rem] truncate whitespace-nowrap inline-block py-1.5 px-3 rounded-sm text-xs font-medium bg-${idx.color}/20 text-${idx.color}`}>{idx.role}</span>
													<div className= "flex space-x-1 rtl:space-x-reverse justify-center text-center">
														<div className= "hs-tooltip ti-main-tooltip">
															<button type="button" className= "hs-tooltip-toggle m-0 rounded-full p-2 ti-btn ti-btn-outline  border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/70 ring-transparent">
																<i className= "ri ri-github-line text-lg leading-none"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip"> Github</span>
															</button>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<button type="button" className= "hs-tooltip-toggle m-0 rounded-full p-2 ti-btn ti-btn-outline  border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/70 ring-transparent">
																<i className= "ri ri-instagram-line text-lg leading-none"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">Instagram</span>
															</button>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<button type="button" className= "hs-tooltip-toggle m-0 rounded-full p-2 ti-btn ti-btn-outline  border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/70 ring-transparent">
																<i className= "ri ri-twitter-line text-lg leading-none"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">Twitter</span>
															</button>
														</div>
														<div className= "hs-tooltip ti-main-tooltip">
															<button type="button" className= "hs-tooltip-toggle m-0 rounded-full p-2 ti-btn ti-btn-outline  border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/70 ring-transparent">
																<i className= "ri ri-linkedin-line text-lg leading-none"></i>
																<span className= "hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip">Linkedin</span>
															</button>
														</div>
													</div>
												</div>
												<Link aria-label="anchor" to="#" className= {idx.favoriteclass}><i className= "ri-star-fill"></i></Link>
												<div
													className="hs-dropdown ti-dropdown z-40 absolute top-0 ltr:right-0 rtl:left-0 block text-gray-100 dark:text-white/70 text-base">
													<button aria-label="button" type="button"
														className="hs-dropdown-toggle p-0 !bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0 ti-dropdown-toggle">
														<i className= "ri-more-2-line leading-none text-base text-gray-100"></i>
													</button>
													<div className= "hs-dropdown-menu ti-dropdown-menu">
														<Link className= "ti-dropdown-item" to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`}><i
															className="ri ri-edit-2-line text-lg"></i>Edit</Link>
														<Link className= "team-remove ti-dropdown-item" to="#"><i
															className="ri ri-delete-bin-6-line text-lg"></i>Delete</Link>
													</div>
												</div>
											</div>
										</div>
										<div className= "box-footer bg-gray-100 dark:bg-bgdark p-0 text-center">
											<div className= "grid grid-cols-12 gap-6">
												<div className= "col-span-6 ltr:border-r rtl:border-l p-3 border-gray-200 dark:border-white/10">
													<Link to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`} className= "space-x-3"><i className= "ri-user-line"></i><span>Profile</span></Link>
												</div>
												<div className= "col-span-6 p-3">
													<Link to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className= "space-x-3"><i
														className="ri-message-3-line"></i><span>Chat</span></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								))}
							</div>
						</div>
					</div>
					<nav className= "flex justify-end items-center space-x-2 rtl:space-x-reverse my-4">
						<Link className= "w-10 h-10 text-gray-500 dark:text-white/70 bg-gray-200 dark:bg-bgdark hover:text-primary p-4 inline-flex items-center gap-2 rounded-full" to="#">
							<span aria-hidden="true">«</span>
							<span className= "sr-only">Previous</span>
						</Link>
						<Link className= "w-10 h-10 bg-primary text-white p-4 inline-flex items-center text-sm font-medium rounded-full" to="#" aria-current="page">1</Link>
						<Link className= "w-10 h-10  bg-gray-200 dark:bg-bgdark text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" to="#">2</Link>
						<Link className= "w-10 h-10  bg-gray-200 dark:bg-bgdark text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" to="#">3</Link>
						<Link className= "w-10 h-10 text-gray-500 dark:text-white/70 bg-gray-200 dark:bg-bgdark hover:text-primary p-4 inline-flex items-center gap-2 rounded-full" to="#">
							<span className= "sr-only">Next</span>
							<span aria-hidden="true">»</span>
						</Link>
					</nav>
				</div>
			</div>
		</div>
	);
};
export default Team;
