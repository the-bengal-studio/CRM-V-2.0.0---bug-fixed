import React from "react";
import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Timeline = () => {
	return (
		<div>
			<PageHeader currentpage="Timeline" activepage="Pages" mainpage="Timeline" />
			<div className= "grid grid-cols-12 gap-6">
				<div className= "col-span-12">
					<div className= "box">
						<div className= "box-header">
							<h5 className= "box-title">Timeline -01</h5>
						</div>
						<div className= "box-body">
							<div className= "flex flex-row">
								<div className= "mx-auto relative">
									<div className= "h-full w-6 flex items-center justify-center">
										<div className= "h-full w-[3px] bg-gray-100 dark:bg-black/20 pointer-events-none"></div>
									</div>
									<div
										className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px]">
										<img src= {ALLImages('jpg57')} className= "rounded-full" alt="timeline-img"/>
									</div>
								</div>
								<div className= "flex w-full pb-8">
									<div className= "ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
										<div className= "sm:flex">
											<h3 className= "my-auto text-gray-500 dark:text-white/70"><span className= "text-dark dark:text-white">Elida
                            Distefa</span> added a comment to <span className= "text-dark dark:text-white">Anderson
                            Itumay</span> post</h3>
											<p className= "my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                          Today, 04:30 PM
											</p>
										</div>
										<div className= "flex -space-x-2 rtl:space-x-reverse">
											<img className= "avatar avatar-xs rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
											<img className= "avatar avatar-xs rounded-full" src= {ALLImages('jpg60')}
												alt="Image Description"/>
											<img className= "avatar avatar-xs rounded-full" src= {ALLImages('jpg58')}
												alt="Image Description"/>
											<img className= "avatar avatar-xs rounded-full" src= {ALLImages('jpg59')}
												alt="Image Description"/>
										</div>
									</div>
								</div>
							</div>
							<div className= "flex flex-row">
								<div className= "mx-auto relative">
									<div className= "h-full w-6 flex items-center justify-center">
										<div className= "h-full w-[3px] bg-gray-100 dark:bg-black/20 pointer-events-none"></div>
									</div>
									<div
										className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px]">
										<img src= {ALLImages('jpg59')} className= "rounded-full" alt="timeline-img"/>
									</div>
								</div>
								<div className= "flex w-full pb-8">
									<div className= "ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
										<div className= "sm:flex">
											<h3 className= "my-auto text-gray-500 dark:text-white/70"><span className= "text-dark dark:text-white">Samantha
                            Melon</span> added a 😎 reaction to <span className= "text-dark dark:text-white">Anderson
                            Itumay</span> post</h3>
											<p className= "my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                          Today, 04:30 PM
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className= "flex flex-row">
								<div className= "mx-auto relative">
									<div className= "h-full w-6 flex items-center justify-center">
										<div className= "h-full w-[3px] bg-gray-100 dark:bg-black/20 pointer-events-none"></div>
									</div>
									<div
										className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px]">
										<img src= {ALLImages('jpg58')} className= "rounded-full" alt="timeline-img"/>
									</div>
								</div>
								<div className= "flex w-full pb-8">
									<div className= "ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
										<div className= "sm:flex">
											<h3 className= "my-auto text-gray-500 dark:text-white/70"><span className= "text-dark dark:text-white">Samantha
                            Melon</span> like an Image</h3>
											<p className= "my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                          Today, 05:45 PM
											</p>
										</div>
										<div><img src= {ALLImages('jpg11')} className= "avatar avatar-lg rounded-sm" alt="profile-img"/>
										</div>
									</div>
								</div>
							</div>
							<div className= "flex flex-row">
								<div className= "mx-auto relative">
									<div className= "h-full w-6 flex items-center justify-center">
										<div className= "h-full w-[3px] bg-gray-100 dark:bg-black/20 pointer-events-none"></div>
									</div>
									<div
										className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px]">
										<img src= {ALLImages('jpg71')} className= "rounded-full" alt="timeline-img"/>
									</div>
								</div>
								<div className= "flex w-full pb-8">
									<div className= "ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
										<div className= "sm:flex">
											<h3 className= "my-auto text-gray-500 dark:text-white/70"><span className= "text-dark dark:text-white">Dennis
                            Trexy</span> Shared an image</h3>
											<p className= "my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                          yesterday, 10:20 am
											</p>
										</div>
										<div className= "space-y-3">
											<p className= "text-xs text-gray-500 dark:text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Nostrum sit consequuntur quia aperiam quibusdam rerum ut! Id ducimus nobis rerum modi
                          veniam odit totam rem asperiores adipisci, sed quia voluptas?</p>
											<img src= {ALLImages('jpg14')} className= "avatar avatar-lg rounded-sm" alt="profile-img"/>
										</div>
									</div>
								</div>
							</div>
							<div className= "flex flex-row">
								<div className= "mx-auto relative">
									<div className= "h-full w-6 flex items-center justify-center">
										<div className= "h-full w-[3px] bg-gray-100 dark:bg-black/20 pointer-events-none"></div>
									</div>
									<div
										className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px]">
										<img src= {ALLImages('jpg77')} className= "rounded-full" alt="timeline-img"/>
									</div>
								</div>
								<div className= "flex w-full pb-8">
									<div className= "ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
										<div className= "sm:flex">
											<h3 className= "my-auto text-gray-500 dark:text-white/70"><span className= "text-dark dark:text-white">Anesthesia</span>
                          commented on today's meeting</h3>
											<p className= "my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                          yesterday, 05:06 pm
											</p>
										</div>
										<div
											className="border border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10 p-4 rounded-sm">
											<p className= "text-xs text-gray-500 dark:text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Nostrum sit consequuntur quia aperiam quibusdam rerum ut! Id ducimus nobis rerum modi
                          veniam odit totam rem asperiores adipisci, sed quia voluptas?</p>
										</div>
									</div>
								</div>
							</div>
							<div className= "flex flex-row">
								<div className= "mx-auto relative">
									<div className= "h-full w-6 flex items-center justify-center">
										<div className= "h-full w-[3px] bg-gray-100 dark:bg-black/20 pointer-events-none"></div>
									</div>
									<div className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px] leading-[2.3] text-gray-800 dark:text-gray-800">H</div>
								</div>
								<div className= "flex w-full pb-8">
									<div className= "ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
										<div className= "sm:flex">
											<h3 className= "my-auto text-gray-500 dark:text-white/70"><span className= "text-dark dark:text-white">Harvey
                            Mattos</span> Followed You</h3>
											<p className= "my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                          03-12-20222, 12:06 pm
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className= "flex flex-row">
								<div className= "mx-auto relative">
									<div className= "h-full w-6 flex items-center justify-center">
									</div>
									<div
										className="avatar avatar-xs absolute top-0 rounded-full bg-gray-200 shadow text-center ltr:-left-[4px] rtl:-right-[4px]">
										<img src= {ALLImages('jpg71')} className= "rounded-full" alt="timeline-img"/>
									</div>
								</div>
								<div className= "flex w-full">
									<div className= "ltr:ml-5 rtl:mr-5 rounded-sm ltr:mr-auto rtl:ml-auto my-auto w-full space-y-3">
										<div className= "sm:flex">
											<h3 className= "my-auto text-gray-500 dark:text-white/70"><span className= "text-dark dark:text-white">Anesthesia</span>
                          5 Days left for Montly submission of progress report </h3>
											<p className= "my-auto ltr:ml-auto rtl:mr-auto text-gray-500 dark:text-white/70 text-xs">
                          02-12-2022, 6:20 pm
											</p>
										</div>
										<div className= "border border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10 p-4 rounded-sm">
											<p className= "text-xs text-gray-500 dark:text-white/70 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit consequuntur quia aperiam quibusdam rerum ut! </p>
											<p className= "text-xs text-gray-500 dark:text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit.veniam odit totam rem asperiores adipisci, sed quia voluptas?</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "col-span-12">
					<div className= "box">
						<div className= "box-header">
							<h5 className= "box-title">Timeline -02</h5>
						</div>
						<div className= "box-body">
							<div className= "relative">
								<div className= "timeline-start"></div>
								<div className= "timeline-line"></div>
								<div className= "timeline">
									<div className= "timeline-main">
										<div className= "timeline-left">
											<div className= "timeline-body">
												<div className= "box">
													<div className= "box-body p-4">
														<h6 className= "font-semibold text-base mb-2">Marsha Mellow updated his status</h6>
														<p className= "text-xs text-gray-500 dark:text-white/70">Nonumy erat nonumy dolores duo ea sit, ipsum sed amet aliquyam magna kasd at. Dolor erat sit sed sea et dolor, justo dolor ipsum dolore voluptua. Sed ipsum sed.</p>
													</div>
													<div className= "box-footer bg-transparent p-4">
														<div className= "sm:space-y-0 space-y-2 sm:flex items-center justify-between">
															<div className= "sm:flex items-center sm:space-x-3 space-x-0 sm:space-y-0 space-y-2 rtl:space-x-reverse">
																<div className= "flex">
																	<img className= "avatar avatar-sm ring-0 rounded-full" src= {ALLImages('jpg58')} alt="avatar"/>
																</div>
																<div>
																	<p className= "text-slate-700 font-semibold text-sm dark:text-white">
                                      Json Taylor
																	</p>
																	<p className= "text-xs text-gray-500 dark:text-white/70">
                                      20 min ago
																	</p>
																</div>
															</div>
															<div className= "space-x-1 sm:space-y-2 space-y-1 sm:space-x-2 text-end">
																<a href="#" className= "text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark  rtl:ml-1"><i className= "text-xs ri ri-heart-line"></i><span>30</span></a>
																<a href="#" className= "text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className= "text-xs ri ri-thumb-up-line"></i><span>25k</span></a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className= "bg-warning text-white timeline-icon">
											<i className= "ri ri-mail-line text-lg leading-none"></i>
										</div>
									</div>
								</div>
								<div className= "timeline">
									<div className= "timeline-main">
										<div className= "timeline-right">
											<div className= "timeline-body">
												<div className= "box">
													<div className= "box-body p-4">
														<h6 className= "font-semibold text-base mb-2">Job Meeting</h6>
														<p className= "text-xs text-gray-500 dark:text-white/70">Invidunt dolor justo gubergren sit voluptua ipsum lorem sanctus, justo dolores dolor dolore stet justo dolor. Eos ipsum rebum diam..</p>
													</div>
													<div className= "box-footer bg-transparent p-4">
														<div className= "sm:space-y-0 space-y-2 sm:flex items-center justify-between">
															<div className= "sm:flex items-center sm:space-x-3 space-x-0 sm:space-y-0 space-y-2 rtl:space-x-reverse">
																<div className= "flex">
																	<img className= "avatar avatar-sm ring-0 rounded-full" src= {ALLImages('jpg57')} alt="avatar"/>
																</div>
																<div>
																	<p className= "text-slate-700 font-semibold text-sm dark:text-white">
                                      Anderson Itumay
																	</p>
																	<p className= "text-xs text-gray-500 dark:text-white/70">
                                      11 Dec 2022
																	</p>
																</div>
															</div>
															<div className= "space-x-1 sm:space-y-2 space-y-1 sm:space-x-2 text-end">
																<a href="#" className= "text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark rtl:ml-1"><i className= "text-xs ri ri-heart-line"></i><span>30</span></a>
																<a href="#" className= "text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className= "text-xs ri ri-thumb-up-line"></i><span>25k</span></a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className= "bg-secondary text-white timeline-icon">
											<i className= "ri-briefcase-4-line text-lg leading-none"></i>
										</div>
									</div>
								</div>
								<div className= "timeline">
									<div className= "timeline-main">
										<div className= "timeline-left">
											<div className= "timeline-body">
												<div className= "box">
													<div className= "box-body p-4">
														<h6 className= "font-semibold text-base mb-2">Clark Kent posted on timeline</h6>
														<p className= "text-xs text-gray-500 dark:text-white/70">Accusam et et stet invidunt at duo, ipsum no takimata est eos magna dolore sed, amet diam sea no diam.</p>
													</div>
													<div className= "box-footer bg-transparent p-4">
														<div className= "sm:space-y-0 space-y-2 sm:flex items-center justify-between">
															<div className= "sm:flex items-center sm:space-x-3 space-x-0 sm:space-y-0 space-y-2 rtl:space-x-reverse">
																<div className= "flex">
																	<img className= "avatar avatar-sm ring-0 rounded-full" src= {ALLImages('jpg77')} alt="avatar"/>
																</div>
																<div>
																	<p className= "text-slate-700 font-semibold text-sm dark:text-white">
                                      Harvey Mattos
																	</p>
																	<p className= "text-xs text-gray-500 dark:text-white/70">
                                      11 Dec 2022
																	</p>
																</div>
															</div>
															<div className= "space-x-1 sm:space-y-2 space-y-1 sm:space-x-2 text-end">
																<a href="#" className= "text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark rtl:ml-1"><i className= "text-xs ri ri-heart-line"></i><span>30</span></a>
																<a href="#" className= "text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className= "text-xs ri ri-thumb-up-line"></i><span>25k</span></a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className= "bg-danger text-white timeline-icon">
											<span className= "text-lg leading-none">HM</span>
										</div>
									</div>
								</div>
								<div className= "timeline">
									<div className= "timeline-main">
										<div className= "timeline-right">
											<div className= "timeline-body">
												<div className= "box">
													<div className= "box-body p-4">
														<h6 className= "font-semibold text-base mb-2">Shady Tree send you a post</h6>
														<p className= "text-xs text-gray-500 dark:text-white/70">Dolore justo lorem vero sed et takimata sit no dolore dolores, elitr eos et dolor consetetur sed sanctus. Ipsum amet elitr lorem clita et dolor. Kasd diam ea dolor sit accusam gubergren no kasd. Ea amet et sed takimata kasd,.</p>
													</div>
													<div className= "box-footer bg-transparent p-4">
														<div className= "sm:space-y-0 space-y-2 sm:flex items-center justify-between">
															<div className= "sm:flex items-center sm:space-x-3 space-x-0 sm:space-y-0 space-y-2 rtl:space-x-reverse">
																<div className= "flex">
																	<img className= "avatar ring-0 rounded-full" src= {ALLImages('jpg71')} alt="avatar"/>
																</div>
																<div>
																	<p className= "text-slate-700 font-semibold text-sm dark:text-white">
                                      Anesthesia
																	</p>
																	<p className= "text-xs text-gray-500 dark:text-white/70">
                                      9 Dec 2022
																	</p>
																</div>
															</div>
															<div className= "space-x-1 sm:space-y-2 space-y-1 sm:space-x-2 text-end">
																<a href="#" className= "text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark rtl:ml-1"><i className= "text-xs ri ri-heart-line"></i><span>30</span></a>
																<a href="#" className= "text-xs leading-[0] inline-flex items-center text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full bg-gray-100 px-3 py-1 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i className= "text-xs ri ri-thumb-up-line"></i><span>25k</span></a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className= "bg-danger text-white timeline-icon">
											<img className= "avatar ring-0 rounded-full" src= {ALLImages('jpg71')} alt="avatar"/>
										</div>
									</div>
								</div>
								<div className= "timeline-end"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Timeline;
