import React, { useState } from "react";
import { Link } from "react-router-dom";
import ALLImages from "../../../../common/imagesData";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import { Swiper, SwiperSlide } from "swiper/react";

const Chat = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
	  setIsActive(!isActive);
	};
	return (
		<div>
			<PageHeader currentpage="Chat" activepage="Mail" mainpage="Chat" />
			<div className="main-chart-wrapper px-5 gap-2 lg:flex">
				<div className="chat-info">
					<div className="box">
						<div className="box-header">
							<div className="relative">
								<label htmlFor="hs-table-search" className="sr-only">Search</label>
								<div className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-4 rtl:pl-4">
									<svg className="h-3.5 w-3.5 text-gray-400 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
										<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
									</svg>
								</div>
								<input type="text" name="hs-table-search" id="hs-table-search" className="p-3 ltr:pr-10 rtl:pl-10 ti-form-input" placeholder="Enter Your Text" />
							</div>
						</div>
						<div className="box-body px-0">
							<div className="main-chat-content space-y-5">
								<div className="chat-active space-y-3 pb-6 px-6 border-b border-gray-200 dark:border-white/10">
									<h3 className="text-gray-800 dark:text-gray-200 font-semibold">Active</h3>
									<Swiper slidesPerView={6} spaceBetween={20} className="active-chat">
									<div className= "swiper-wrapper">
										<SwiperSlide>
											<Link className="relative inline-block" to="#">
												<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg58')} alt="Image Description" />
												<span className="online"></span>
											</Link>
										</SwiperSlide>
										<SwiperSlide>
											<Link className="relative inline-block" to="#">
												<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg59')} alt="Image Description" />
												<span className="online"></span>
											</Link>
										</SwiperSlide>
										<SwiperSlide>
											<Link className="relative inline-block" to="#">
												<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg60')} alt="Image Description" />
												<span className="online"></span>
											</Link>
										</SwiperSlide>
										<SwiperSlide>
											<Link className="relative inline-block" to="#">
												<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg75')} alt="Image Description" />
												<span className="online"></span>
											</Link>
										</SwiperSlide>
										<SwiperSlide>
											<Link className="relative inline-block" to="#">
												<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg74')} alt="Image Description" />
												<span className="online"></span>
											</Link>
										</SwiperSlide>
										<SwiperSlide>
											<Link className="relative inline-block" to="#">
												<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg73')} alt="Image Description" />
												<span className="online"></span>
											</Link>
										</SwiperSlide>
										<SwiperSlide>
											<Link className="relative inline-block" to="#">
												<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg72')} alt="Image Description" />
												<span className="online"></span>
											</Link>
										</SwiperSlide>
										<SwiperSlide>
											<Link className="relative inline-block" to="#">
												<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg71')} alt="Image Description" />
												<span className="online"></span>
											</Link>
										</SwiperSlide>
										<SwiperSlide>
											<Link className="relative inline-block" to="#">
												<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg70')} alt="Image Description" />
												<span className="online"></span>
											</Link>
										</SwiperSlide>
										<SwiperSlide>
											<Link className="relative inline-block" to="#">
												<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg69')} alt="Image Description" />
												<span className="online"></span>
											</Link>
										</SwiperSlide>
										<SwiperSlide>
											<Link className="relative inline-block" to="#">
												<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg68')} alt="Image Description" />
												<span className="online"></span>
											</Link>
										</SwiperSlide>
										</div>
									</Swiper>
								</div>
								<div className="chat-message">
									<div className=" space-y-3 px-6">
										<h3 className="text-gray-800 dark:text-gray-200 font-semibold">Messages</h3>
										<div className="text-center">
											<nav
												className="flex justify-center bg-gray-100 dark:bg-black/20 p-2 mx-auto w-full rounded-sm gap-2"
												aria-label="Tabs" role="tablist">
												<button type="button"
													className="w-full hs-tab-active:!bg-primary hs-tab-active:!text-white dark:hs-tab-active:border-b-white/10 -mb-px p-2 items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 active"
													id="messages-1" data-hs-tab="#messages-style-1" aria-controls="messages-style-1" role="tab">
													<i className="ti ti-mail"></i> Chat
												</button>
												<button type="button"
													className="w-full hs-tab-active:!bg-primary hs-tab-active:!text-white dark:hs-tab-active:border-b-white/10 -mb-px p-2 items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300"
													id="messages-2" data-hs-tab="#messages-style-2" aria-controls="messages-style-2" role="tab">
													<i className="ti ti-message"></i> Contacts
												</button>
												<button type="button"
													className="w-full hs-tab-active:!bg-primary hs-tab-active:!text-white dark:hs-tab-active:border-b-white/10 -mb-px p-2 items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300"
													id="messages-3" data-hs-tab="#messages-style-3" aria-controls="messages-style-3" role="tab">
													<i className="ti ti-phone-call"></i> Calls
												</button>
											</nav>
										</div>
									</div>
									<div className="ti-tab-content mt-3" id="messagelist">
										<div id="messages-style-1" role="tabpanel" aria-labelledby="messages-1">
											<ul className="flex flex-col divide-y divide-gray-200 dark:divide-white/10">
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Socrates Itumay😎','2','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<Link className="relative inline-block avatar avatar-sm rounded-full" to="#">
																<img className="rounded-full" src={ALLImages('jpg58')}
																	alt="Image Description" />
																<span className="online"></span>
															</Link>
														</div>
														<div className="w-full">
															<div className="flex items-center justify-between">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Socrates Itumay😎
																</p>
																<p className="text-gray-500 font-normal text-xs dark:text-white/70">5mins ago</p>
															</div>
															<div className="flex items-center justify-between">
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="ti ti-check text-sm ltr:mr-1 rtl:ml-1"></i>Consetetur sanctus.
																</p>
																<span className="badge py-0.5 px-1.5 bg-primary text-white">5</span>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Eos Tempor','20','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<Link className="relative inline-block avatar avatar-sm rounded-full" to="#">
																<img className="rounded-full" src={ALLImages('jpg76')}
																	alt="Image Description" />
																<span className="online"></span>
															</Link>
														</div>
														<div className="w-full">
															<div className="flex items-center justify-between">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Eos Tempor
																</p>
																<p className="text-gray-500 font-normal text-xs dark:text-white/70">30mins ago</p>
															</div>
															<div className="flex items-center justify-between">
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="ti ti-checks text-sm ltr:mr-1 rtl:ml-1"></i>Ipsum lorem kasd sed elitr....
																</p>
																<span className="badge py-0.5 px-1.5 bg-primary text-white">2</span>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Et Kasd','15','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<Link className="relative inline-block avatar avatar-sm rounded-full" to="#">
																<img className="rounded-full" src={ALLImages('jpg71')} alt="Image Description" />
																<span className="online"></span>
															</Link>
														</div>
														<div className="w-full">
															<div className="flex items-center justify-between">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Et Kasd
																</p>
																<p className="text-gray-500 font-normal text-xs dark:text-white/70">45mins ago</p>
															</div>
															<div className="flex items-center justify-between">
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="ti ti-checks text-green-500 text-sm ltr:mr-1 rtl:ml-1"></i>Sit takimata
																	sanctus
																	takimata takimata et ipsum no. Eos duo elitr.
																</p>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,' Ipsum Et','18','offline')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<Link className="relative inline-block avatar avatar-sm rounded-full" to="#">
																<img className="rounded-full" src={ALLImages('jpg74')} alt="Image Description" />
																<span className="offline"></span>
															</Link>
														</div>
														<div className="w-full">
															<div className="flex items-center justify-between">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Ipsum Et
																</p>
																<p className="text-gray-500 font-normal text-xs dark:text-white/70">1hr ago</p>
															</div>
															<div className="flex items-center justify-between">
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="ti ti-checks text-sm ltr:mr-1 rtl:ml-1"></i>Aliquyam justo diam eirmod
																	rebum diam.
																	Dolores dolores dolor justo.
																</p>
																<span className="badge py-0.5 px-2 bg-primary text-white">1</span>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,' Ut Nonumy','19','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<Link className="relative inline-block avatar avatar-sm rounded-full" to="#">
																<img className="rounded-full" src={ALLImages('jpg75')} alt="Image Description" />
																<span className="online"></span>
															</Link>
														</div>
														<div className="w-full">
															<div className="flex items-center justify-between">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Ut Nonumy
																</p>
																<p className="text-gray-500 font-normal text-xs dark:text-white/70">2hr ago</p>
															</div>
															<div className="flex items-center justify-between">
																<p className="text-xs text-green-500 chat-msg-text">
																	Typing.......
																</p>
																<span className="badge py-0.5 px-2 bg-primary text-white">1</span>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Dolor Dlita 😒','16','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<Link className="relative inline-block avatar avatar-sm rounded-full" to="#">
																<img className="rounded-full" src={ALLImages('jpg72')} alt="Image Description" />
																<span className="online"></span>
															</Link>
														</div>
														<div className="w-full">
															<div className="flex items-center justify-between">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Dolor Dlita 😒
																</p>
																<p className="text-gray-500 font-normal text-xs dark:text-white/70">5hr ago</p>
															</div>
															<div className="flex items-center justify-between">
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="ti ti-checks text-sm ltr:mr-1 rtl:ml-1"></i>Erat clita gubergren sit
																	labore. Dolor
																	labore eirmod takimata diam.
																</p>
																<span className="badge py-0.5 px-1.5 bg-primary text-white">2</span>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Voluptua Ipsum','13','offline')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<Link className="relative inline-block avatar avatar-sm rounded-full" to="#">
																<img className="rounded-full" src={ALLImages('jpg69')} alt="Image Description" />
																<span className="offline"></span>
															</Link>
														</div>
														<div className="w-full">
															<div className="flex items-center justify-between">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Voluptua Ipsum
																</p>
																<p className="text-gray-500 font-normal text-xs dark:text-white/70">1day ago</p>
															</div>
															<div className="flex items-center justify-between">
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="ti ti-checks text-sm ltr:mr-1 rtl:ml-1"></i>Stet erat diam lorem ut ea ut
																	ut at. At
																	dolor dolore.
																</p>
																<span className="badge py-0.5 px-2 bg-primary text-white">1</span>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,' Joan Powell😊','14','offline')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<Link className="relative inline-block avatar avatar-sm rounded-full" to="#">
																<img className="rounded-full" src={ALLImages('jpg70')} alt="Image Description" />
																<span className="offline"></span>
															</Link>
														</div>
														<div className="w-full">
															<div className="flex items-center justify-between">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Joan Powell 😊
																</p>
																<p className="text-gray-500 font-normal text-xs dark:text-white/70">2day ago</p>
															</div>
															<div className="flex items-center justify-between">
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="ti ti-checks text-green-500 text-sm ltr:mr-1 rtl:ml-1"></i>Stet erat diam
																	lorem ut ea
																	ut ut at. At dolor dolore.
																</p>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
										<div id="messages-style-2" className="hidden" role="tabpanel" aria-labelledby="messages-2">
											<ul className="flex flex-col divide-y divide-gray-200 dark:divide-white/10">
												<li className="ti-list-group border-0 text-gray-800 dark:text-white">
													<div className="fw-bold">A</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Anna Sthesia','2','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg58')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Anna Sthesia
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	+123(45)-678-90.
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse inline-flex">
																<i className="text-base text-primary ti ti-message-circle-2"></i>
																<i className="text-base text-secondary ti ti-phone-call"></i>
																<i className="text-base text-danger ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Abraham Clark','20','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg76')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Abraham Clark
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	+123(45)-158-90.
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse inline-flex">
																<i className="text-base text-primary ti ti-message-circle-2"></i>
																<i className="text-base text-secondary ti ti-phone-call"></i>
																<i className="text-base text-danger ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Anderson','3','offline')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg59')} alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Anderson
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	+123(45)-258-80.
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse inline-flex">
																<i className="text-base text-primary ti ti-message-circle-2"></i>
																<i className="text-base text-secondary ti ti-phone-call"></i>
																<i className="text-base text-danger ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,' Andern Vanhron','4','offline')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg60')} alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Andern Vanhron
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	+123(45)-258-80.
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse inline-flex">
																<i className="text-base text-primary ti ti-message-circle-2"></i>
																<i className="text-base text-secondary ti ti-phone-call"></i>
																<i className="text-base text-danger ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Albert silver','16','offline')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg72')} alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Albert silver
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	+123(45)-258-80.
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse inline-flex">
																<i className="text-base text-primary ti ti-message-circle-2"></i>
																<i className="text-base text-secondary ti ti-phone-call"></i>
																<i className="text-base text-danger ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white">
													<div className="fw-bold">B</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,' Bernadette','5','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg61')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Bernadette
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	+123(45)-678-90.
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse inline-flex">
																<i className="text-base text-primary ti ti-message-circle-2"></i>
																<i className="text-base text-secondary ti ti-phone-call"></i>
																<i className="text-base text-danger ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Brenden Wagner','18','offline')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg74')} alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Brenden Wagner
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	+123(45)-158-90.
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse inline-flex">
																<i className="text-base text-primary ti ti-message-circle-2"></i>
																<i className="text-base text-secondary ti ti-phone-call"></i>
																<i className="text-base text-danger ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Bradley Greer','9','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg65')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Bradley Greer
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	+123(45)-258-80.
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse inline-flex">
																<i className="text-base text-primary ti ti-message-circle-2"></i>
																<i className="text-base text-secondary ti ti-phone-call"></i>
																<i className="text-base text-danger ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Bruno Nash','10','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg66')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Bruno Nash
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	+123(45)-258-80.
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse inline-flex">
																<i className="text-base text-primary ti ti-message-circle-2"></i>
																<i className="text-base text-secondary ti ti-phone-call"></i>
																<i className="text-base text-danger ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white">
													<div className="fw-bold">C</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Caesar Vance 🎉','6','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg62')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Caesar Vance🎉
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	+123(45)-678-90.
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse inline-flex">
																<i className="text-base text-primary ti ti-message-circle-2"></i>
																<i className="text-base text-secondary ti ti-phone-call"></i>
																<i className="text-base text-danger ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Cara Stevens','8','offline')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg64')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Cara Stevens
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	+123(45)-678-90.
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse inline-flex">
																<i className="text-base text-primary ti ti-message-circle-2"></i>
																<i className="text-base text-secondary ti ti-phone-call"></i>
																<i className="text-base text-danger ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,' Cedric Kelly','4','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg60')} alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Cedric Kelly
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	+123(45)-678-90.
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse inline-flex">
																<i className="text-base text-primary ti ti-message-circle-2"></i>
																<i className="text-base text-secondary ti ti-phone-call"></i>
																<i className="text-base text-danger ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
										<div id="messages-style-3" className="hidden" role="tabpanel" aria-labelledby="messages-3">
											<ul className="flex flex-col divide-y divide-gray-200 dark:divide-white/10">
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Anna Sthesia 😂','2','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg58')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Anna Sthesia😂
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="text-base text-success ti ti-phone-incoming"></i>
																	<span className="">oct 18 2022 ,10:50Am</span>
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse">
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-phone-call"></i>
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Socrates Itumay 😍','5','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg61')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Socrates Itumay😍
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="text-base text-success ti ti-phone-outgoing"></i>
																	<span className="">oct 17 2022 ,5:50Pm</span>
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse">
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-phone-call"></i>
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Cedric Kelly','20','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg76')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Cedric Kelly
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="text-base text-danger ti ti-phone-x"></i>
																	<span className="">oct 16 2022 ,03:50Pm</span>
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse">
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-phone-call"></i>
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,' Tiger Nixon','5','offline')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg61')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Tiger Nixon
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="text-base text-danger ti ti-phone-x"></i>
																	<span className="">oct 16 2022 ,02:20Pm</span>
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse">
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-phone-call"></i>
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Tatyana Fitzpatrick','9','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg65')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Tatyana Fitzpatrick
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="text-base text-success ti ti-phone-outgoing"></i>
																	<span className="">oct 14 2022 ,5:50Pm</span>
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse">
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-phone-call"></i>
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Unity Butler','10','online')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg66')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Unity Butler
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="text-base text-success ti ti-phone-incoming"></i>
																	<span className="">oct 14 2022 ,5:50Pm</span>
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse">
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-phone-call"></i>
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Thor Walton','11','offline')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg67')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Thor Walton
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="text-base text-success ti ti-phone-incoming"></i>
																	<span className="">oct 13 2022 ,5:50Pm</span>
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse">
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-phone-call"></i>
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
												<li className="ti-list-group border-0 text-gray-800 dark:text-white relative checkforactive">
													<Link aria-label="anchor" className="before:absolute before:inset-0 before:z-1" to="#"
														onClick="changeTheInfo(this,'Abraham Clark','6','offline')"></Link>
													<div className="flex items-center space-x-3 rtl:space-x-reverse w-full">
														<div className="flex">
															<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg62')}
																alt="Image Description" />
														</div>
														<div className="flex items-center justify-between w-full">
															<div className="items-center">
																<p className="text-slate-700 font-semibold text-sm dark:text-white">
																	Abraham Clark
																</p>
																<p className="text-xs text-gray-500 dark:text-white/70 chat-msg-text">
																	<i className="text-base text-danger ti ti-phone-x"></i>
																	<span className="">oct 12 2022 ,03:50Pm</span>
																</p>
															</div>
															<div className="my-auto space-x-3 rtl:space-x-reverse">
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-phone-call"></i>
																<i className="text-base text-gray-500 dark:text-white/70 ti ti-video"></i>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="main-chat-area">
					<div className="box">
						<div className="box-header bg-transparent">
							<div className="sm:flex justify-between">
								<div className="flex items-center space-x-4 rtl:space-x-reverse">
									<div className="flex">
										<Link className="relative inline-block" to="#">
											<img className="avatar avatar-sm rounded-full chatimageperson" src={ALLImages('jpg58')}
												alt="Image Description" />
											<span className="chatstatusperson online"></span>
										</Link>
									</div>
									<div>
										<p className="text-base">
											<Link to="#" className="chatnameperson responsive-userinfo-open">Airi Satou</Link>
										</p>
										<p className="text-xs text-gray-500 dark:text-white/70 chatpersonstatus">
											online
										</p>
									</div>
								</div>
								<div className="flex my-auto main-chat-right-icons mt-5 sm:mt-auto">
									<div className="flex justify-center items-center rounded-sm relative">
										<div className="cursor-pointer search-chat-icon sm:absolute sm:ltr:right-0 sm:rtl:left-0 ti-btn ti-btn-outline rounded-full p-2 border-gray-200 text-gray-500 dark:text-white/70  focus:ring-gray-200   dark:border-white/10  dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
										>
											<input type="search" className={`search-chat-input focus-visible:outline-0 border-0 focus:border-0 focus:shadow-none focus:ring-0 bg-transparent py-0 leading-[0] ${isActive ? 'active' : ''}`} placeholder="Search" />
											<i className="text-base leading-none ti ti-search" onClick={toggleActive}></i>
										</div>
									</div>
									<Link aria-label="anchor" className="ti-btn ti-btn-outline rounded-full p-2 border-gray-200 text-gray-500 dark:text-white/70 hover:text-gray-700 hover:bg-gray-100 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
										to="#"><i className="text-base leading-none ti ti-phone-call"></i></Link>
									<Link aria-label="anchor" className="ti-btn ti-btn-outline rounded-full p-2 border-gray-200 text-gray-500 dark:text-white/70 hover:text-gray-700 hover:bg-gray-100 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
										to="#"><i className="text-base leading-none ti ti-video"></i></Link>
									<Link aria-label="anchor" className="ti-btn ti-btn-outline rounded-full p-2 border-gray-200 text-gray-500 dark:text-white/70 hover:text-gray-700 hover:bg-gray-100 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
										to="#"><i className="text-base leading-none ti ti-user-plus"></i></Link>
									<Link aria-label="anchor" className="ti-btn ti-btn-outline rounded-full p-2 border-gray-200 text-gray-500 dark:text-white/70 hover:text-gray-700 hover:bg-gray-100 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10 responsive-userinfo-open"
										to="#"><i className="text-base leading-none ti ti-user-circle"
											id="responsive-chat-close"></i></Link>
									<div className="hs-dropdown ti-dropdown block ltr:mr-1 rtl:ml-1 my-auto">
										<button aria-label="button" id="hs-dropdown-custom-icon-trigger" type="button"
											className="hs-dropdown-toggle ti-dropdown-toggle rounded-full p-2 !border border-gray-200 text-gray-500 dark:text-white/70 hover:text-gray-700 hover:bg-gray-100 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
											<i className="text-base leading-none ti ti-dots-vertical"></i> </button>
										<div className="hs-dropdown-menu ti-dropdown-menu" aria-labelledby="hs-dropdown-custom-icon-trigger">
											<Link className="ti-dropdown-item" to="#"><i
												className="ri ri-edit-2-line ltr:mr-1 rtl:ml-1"></i>Edit</Link>
											<Link className="ti-dropdown-item" to="#"><i
												className="ri ri-share-forward-line ltr:mr-1 rtl:ml-1"></i>Share</Link>
											<Link className="ti-dropdown-item" to="#"><i
												className="ri ri-delete-bin-5-line ltr:mr-1 rtl:ml-1"></i>Delete</Link>
										</div>
									</div>
									<Link aria-label="anchor" className="responsive-chat-close ti-btn ti-btn-outline rounded-full p-2 border-gray-200 text-gray-400 dark:text-white/70 hover:text-white hover:bg-gray-500 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
										to="#"><i className="text-base leading-none ti ti-x"></i></Link>
								</div>
							</div>
						</div>
						<div className="main-chat-content2 chat-content">
							<img className="w-full h-full rounded-sm opacity-10" src={ALLImages('png105')}
								alt="Image Description" />
							<div className="absolute top-0 inset-x-0">
								<div id="chatlist">
									<div className="box-body p-8">
										<div className="chat-lable">
											<span className="badge bg-gray-100 dark:bg-black/20 text-gray-800 dark:text-white">Yesterday</span>
										</div>
										<div className="chat-left">
											<div>
												<img src={ALLImages('jpg58')} className="chatimageperson avatar rounded-full"
													alt="Image Description" />
											</div>
											<div className="flex flex-col items-start space-y-2">
												<div className="chat-inner-msg space-y-1">
													<span
														className="p-2 rounded-sm inline-block border border-gray-200 bg-primary/20 text-primary dark:text-white dark:border-white/10">
														Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
													</span>
													<div>
														<p className="text-start text-xs text-gray-500 dark:text-white/70">
															08:10 AM
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="chat-right">
											<div className="flex flex-col items-end space-y-2">
												<div className="chat-inner-msg">
													<span
														className="p-2 rounded-sm inline-block  border border-gray-200 bg-primary text-white dark:border-white/10">
														Nulla consequat massa quis enim. Donec pede justo, fringilla vel... </span>
												</div>
												<div className="chat-inner-msg space-y-1">
													<span
														className="p-2 rounded-sm inline-block  border border-gray-200 bg-primary text-white dark:border-white/10">
														rhoncus ut, imperdiet a, venenatis vitae, justo... </span>

												</div>
												<p className="text-end text-xs text-gray-500 dark:text-white/70">
													08:35 AM
												</p>
											</div>
											<div>
												<img src={ALLImages('jpg57')} className="avatar rounded-full" alt="Image Description" />
											</div>
										</div>
										<div className="chat-left">
											<div>
												<img src={ALLImages('jpg58')} className="chatimageperson avatar rounded-full"
													alt="Image Description" />
											</div>
											<div className="flex flex-col items-start space-y-2">
												<div className="chat-inner-msg space-y-1">
													<span
														className="p-2 rounded-sm inline-block border border-gray-200 bg-primary/20 text-primary dark:text-white dark:border-white/10">
														Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
													</span>
												</div>
												<div className="chat-inner-msg space-y-1">
													<div
														className="p-2 rounded-sm border border-gray-200 bg-primary/20 text-primary dark:border-white/10 flex flex-row items-center dark:text-white">
														<Link aria-label="anchor" to="#" className="ti-btn p-0"><i className="ri ri-play-circle-line"></i></Link>
														<span className="mx-2 flex">
															<svg width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
														</span>
														<Link aria-label="anchor" to="#" className="ti-btn p-0"><i className="ri ri-download-2-line"></i></Link>
													</div>
													<p className="text-start text-xs text-gray-500 dark:text-white/70">
														08:50 AM
													</p>
												</div>
											</div>
										</div>
										<div className="chat-right">
											<div className="flex flex-col items-end space-y-2">
												<div className="chat-inner-msg">
													<span
														className="p-2 rounded-sm inline-block  border border-gray-200 bg-primary text-white dark:border-white/10">
														Nulla consequat massa quis enim. Donec pede justo, fringilla vel... </span>
												</div>
												<div className="chat-inner-msg flex space-y-1 space-x-3 rtl:space-x-reverse">
													<img src={ALLImages('jpg12')} className="w-1/4 rounded-sm ltr:ml-auto rtl:mr-auto"
														alt="Image Description" />
													<img src={ALLImages('jpg10')} className="w-1/4 rounded-sm ltr:ml-auto rtl:mr-auto"
														alt="Image Description" />
													<img src={ALLImages('jpg13')} className="w-1/4 rounded-sm ltr:ml-auto rtl:mr-auto"
														alt="Image Description" />
												</div>
												<p className="text-end text-xs text-gray-500 dark:text-white/70">
													10:35 AM
												</p>
											</div>
											<div>
												<img src={ALLImages('jpg57')} className="avatar rounded-full" alt="Image Description" />
											</div>
										</div>
										<div className="chat-lable">
											<span className="badge bg-gray-100 dark:bg-black/20 text-gray-800 dark:text-white">Today</span>
										</div>
										<div className="chat-right">
											<div className="flex flex-col items-end space-y-2">
												<div className="chat-inner-msg">
													<span
														className="p-2 rounded-sm inline-block  border border-gray-200 bg-primary text-white dark:border-white/10">
														Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
													</span>
													<p className="text-end text-xs text-gray-500 dark:text-white/70">
														08:50 AM
													</p>
												</div>
												<div className="chat-inner-msg">
													<span
														className="p-2 rounded-sm inline-block  border border-gray-200 bg-primary text-white dark:border-white/10">
														Nulla consequat massa quis enim. Donec pede justo, fringilla vel... </span>
												</div>
												<div className="chat-inner-msg space-y-1">
													<div
														className="p-2 rounded-sm border border-gray-200 bg-primary/20 text-primary dark:border-white/10 flex flex-row items-center dark:text-white">
														<Link aria-label="anchor" to="#" className="ti-btn p-0"><i className="ri ri-play-circle-line"></i></Link>
														<span className="mx-2 flex">
															<svg width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
															<svg className="chat_audio" width="20" height="20">
																<defs></defs>
																<g transform="matrix(1,0,0,1,0,0)"><svg xmlns="http://www.w3.org/2000/svg"
																	data-name="Layer 3" viewBox="0 0 24 24" width="20" height="20">
																	<path
																		d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
																		fill="rgba(255, 255, 255, 0.5)" className="fill-primary dark:fill-white"></path>
																</svg></g>
															</svg>
														</span>
														<Link aria-label="anchor" to="#" className="ti-btn p-0"><i className="ri ri-download-2-line"></i></Link>
													</div>
												</div>
												<p className="text-end text-xs text-gray-500 dark:text-white/70">
													10:35 AM
												</p>
											</div>
											<div>
												<img src={ALLImages('jpg57')} className="avatar rounded-full" alt="Image Description" />
											</div>
										</div>
										<div className="chat-left">
											<div>
												<img src={ALLImages('jpg58')} className="chatimageperson avatar rounded-full"
													alt="Image Description" />
											</div>
											<div className="flex flex-col items-start space-y-2">
												<div className="chat-inner-msg space-y-1">
													<span
														className="p-2 rounded-sm inline-block border border-gray-200 bg-primary/20 text-primary dark:text-white dark:border-white/10">
														Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
													</span>
													<p className="text-start text-xs text-gray-500 dark:text-white/70">
														1:10 PM
													</p>
												</div>
											</div>
										</div>
										<div className="chat-left">
											<div>
												<img src={ALLImages('jpg58')} className="chatimageperson avatar rounded-full"
													alt="Image Description" />
											</div>
											<div className="flex flex-col items-start space-y-2">
												<div className="chat-inner-msg space-y-1">
													<span
														className="p-2 rounded-sm inline-block border border-gray-200 bg-primary/20 text-primary dark:text-white dark:border-white/10">
														<i className="text-base text-danger ti ti-phone-x"></i> Missed Call </span>
													<p className="text-start text-xs text-gray-500 dark:text-white/70">
														3:10 PM
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="box-footer">
							<div className="flex items-center space-x-3 rtl:space-x-reverse">
								<div className="hidden sm:flex">
									<Link aria-label="anchor" className="ti-btn px-2 py-1 text-gray-500 bg-gray-100 focus:ring-gray-500 dark:text-white/70 dark:bg-dark dark:hover:bg-black/20 dark:hover:text-gray-300 dark:focus:ring-offset-white/10"
										to="#"><i className="text-xl ti ti-paperclip"></i></Link>
									<Link aria-label="anchor" className="ti-btn px-2 py-1 text-gray-500 bg-gray-100 focus:ring-gray-500 dark:text-white/70 dark:bg-dark dark:hover:bg-black/20 dark:hover:text-gray-300 dark:focus:ring-offset-white/10"
										to="#"><i className="text-xl ti ti-mood-smile"></i></Link>
								</div>
								<div className="relative w-full">
									<input type="text" name="hs-table-search1" id="hs-table-search1" className="p-3 ti-form-input"
										placeholder="Type Your Text Here................." />
								</div>
								<div className="flex">
									<Link aria-label="anchor" className="hidden sm:block ti-btn px-2 py-1 text-gray-500 bg-gray-100 focus:ring-gray-500 dark:bg-dark dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300 dark:focus:ring-offset-white/10"
										to="#"><i className="text-xl ti ti-microphone"></i></Link>
									<Link aria-label="anchor" className="ti-btn px-2 py-1 ti-btn-primary" to="#"><i
										className="text-xl ti ti-send"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="chat-user-details" id="chat-user-details">
					<div className="box">
						<Link aria-label="anchor" to="#"
							className="user-close z-40 absolute top-2 ltr:right-2 rtl:left-2 block lg:hidden bg-white dark:bg-black/20 p-2 leading-none rounded-full text-gray-500 dark:text-white text-base"><i
								className="ti ti-x"></i></Link>
						<div className="main-chat-content3">
							<div className="chat-profile" id="profile-list">
								<div className="box-body">
									<div className="space-y-4">
										<div className="text-center space-y-2">
											<div className="flex justify-center">
												<Link className="relative inline-block" to="#">
													<img className="w-24 h-24 rounded-full chatimageperson" src={ALLImages('jpg58')}
														alt="Image Description" />
													<span className="chatstatusperson bottom-2 ltr:right-2 rtl:left-2 online"></span>
												</Link>
											</div>
											<div>
												<Link to="#">
													<h5 className="text-slate-700 font-semibold text-base dark:text-white chatnameperson">Airi Satou
													</h5>
												</Link>
												<p className="text-xs text-gray-500 dark:text-white/70 mb-1">UI/UX Designer</p>
												<p className="text-xs text-gray-500 dark:text-white/70">+123(45)-158-90.</p>
											</div>
										</div>
										<div className="flex sm:space-x-3 justify-center text-center rtl:space-x-reverse space-x-1 rtl:space-x-reverse">
											<div className="block">
												<button aria-label="button" type="button"
													className="ti-btn ti-btn-outline p-2 border-gray-200 text-gray-500 dark:text-white/70 hover:text-white hover:bg-gray-500 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
													<i className="ti ti-message-dots text-lg leading-none"></i>
												</button>
											</div>
											<div className="block">
												<button aria-label="button" type="button"
													className="ti-btn ti-btn-outline p-2 border-gray-200 text-gray-500 dark:text-white/70 hover:text-white hover:bg-gray-500 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
													<i className="ti ti-phone text-lg leading-none"></i>
												</button>
											</div>
											<div className="block">
												<button aria-label="button" type="button"
													className="ti-btn ti-btn-outline p-2 border-gray-200 text-gray-500 dark:text-white/70 hover:text-white hover:bg-gray-500 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
													<i className="ti ti-video text-lg leading-none"></i>
												</button>
											</div>
											<div className="block">
												<button aria-label="button" type="button"
													className="ti-btn ti-btn-outline p-2 border-gray-200 text-gray-500 dark:text-white/70 hover:text-white hover:bg-gray-500 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
													<i className="ti ti-search text-lg leading-none"></i>
												</button>
											</div>
											<div className="block hs-dropdown ti-dropdown">
												<button aria-label="button" id="chat-options" type="button"
													className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-outline p-2 border-gray-200 text-gray-500 dark:text-white/70 hover:text-white hover:bg-gray-500 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
													<i className="ti ti-dots text-lg leading-none"></i>
												</button>
												<div className="hs-dropdown-menu ti-dropdown-menu" aria-labelledby="chat-options">
													<Link className="ti-dropdown-item" to="#"><i
														className="ri ri-edit-2-line ltr:mr-1 rtl:ml-1"></i>Edit</Link>
													<Link className="ti-dropdown-item" to="#"><i
														className="ri ri-share-forward-line ltr:mr-1 rtl:ml-1"></i>
														Share</Link>
													<Link className="ti-dropdown-item" to="#"><i
														className="ri ri-delete-bin-5-line ltr:mr-1 rtl:ml-1"></i>
														Delete</Link>
												</div>
											</div>
										</div>
										<div className="border p-3 rounded-sm border-gray-200 dark:border-white/10">
											<h1 className="font-semibold">About Me</h1>
											<p className="mt-2 text-gray-500 dark:text-white/70 text-sm">Lorem ipsum dolor sit amet,
												consectetuer adipiscing elit.
												Aenean commodo ligula eget dolor. </p>
										</div>
										<div className="border p-3 rounded-sm border-gray-200 dark:border-white/10 space-y-3">
											<div className="">
												<nav className="sm:flex sm:space-x-4" aria-label="Tabs" role="tablist">
													<button type="button"
														className="hs-tab-active:border-primary hs-tab-active:text-primary border-b-[3px] border-transparent py-2 px-1 inline-flex items-center sm:gap-2 text-sm font-medium text-center whitespace-nowrap text-gray-500 dark:text-white/70 hover:text-primary  active"
														id="chat-gallery-item-1" data-hs-tab="#chat-gallery-1" aria-controls="chat-gallery-1"
														role="tab">
														<i className="ti ti-photo text-lg leading-none"></i> Media
													</button>
													<button type="button"
														className="hs-tab-active:border-primary hs-tab-active:text-primary border-b-[3px] border-transparent py-2 px-1 inline-flex items-center sm:gap-2 text-sm font-medium text-center whitespace-nowrap text-gray-500 dark:text-white/70 hover:text-primary"
														id="chat-gallery-item-2" data-hs-tab="#chat-gallery-2" aria-controls="chat-gallery-2"
														role="tab">
														<i className="ti ti-files text-lg leading-none"></i> Docs
													</button>
													<button type="button"
														className="hs-tab-active:border-primary hs-tab-active:text-primary border-b-[3px] border-transparent py-2 px-1 inline-flex items-center sm:gap-2 text-sm font-medium text-center whitespace-nowrap text-gray-500 dark:text-white/70 hover:text-primary"
														id="chat-gallery-item-3" data-hs-tab="#chat-gallery-3" aria-controls="chat-gallery-3"
														role="tab">
														<i className="ti ti-info-circle text-lg leading-none"></i> Info
													</button>
												</nav>
											</div>
											<div className="border p-3 rounded-sm border-gray-200 dark:border-white/10">
												<div id="chat-gallery-1" role="tabpanel" aria-labelledby="chat-gallery-item-1">
													<div className="grid grid-cols-3 gap-6">
														<Link to="#" className="inner">
															<img className="w-full object-cover rounded-sm" src={ALLImages('jpg10')}
																alt="Image Description" />
															<div className="image-overlay justify-center !items-center">
																<p className="image-caption"><i className="ti ti-cloud-download"></i></p>
															</div>
														</Link>
														<Link to="#" className="inner">
															<img className="w-full object-cover rounded-sm" src={ALLImages('jpg11')}
																alt="Image Description" />
															<div className="image-overlay justify-center !items-center">
																<p className="image-caption"><i className="ti ti-cloud-download"></i></p>
															</div>
														</Link>
														<Link to="#" className="inner">
															<img className="w-full object-cover rounded-sm" src={ALLImages('jpg13')}
																alt="Image Description" />
															<div className="image-overlay justify-center !items-center">
																<p className="image-caption"><i className="ti ti-cloud-download"></i></p>
															</div>
														</Link>
														<Link to="#" className="inner">
															<img className="w-full object-cover rounded-sm" src={ALLImages('jpg18')}
																alt="Image Description" />
															<div className="image-overlay justify-center !items-center">
																<p className="image-caption"><i className="ti ti-cloud-download"></i></p>
															</div>
														</Link>
														<Link to="#" className="inner">
															<img className="w-full object-cover rounded-sm" src={ALLImages('jpg17')}
																alt="Image Description" />
															<div className="image-overlay justify-center !items-center">
																<p className="image-caption"><i className="ti ti-cloud-download"></i></p>
															</div>
														</Link>
														<Link to="#" className="inner">
															<img className="w-full object-cover rounded-sm" src={ALLImages('jpg16')}
																alt="Image Description" />
															<div className="image-overlay justify-center !items-center">
																<p className="image-caption"><i className="ti ti-cloud-download"></i></p>
															</div>
														</Link>
														<Link to="#" className="inner">
															<img className="w-full object-cover rounded-sm" src={ALLImages('jpg14')}
																alt="Image Description" />
															<div className="image-overlay justify-center !items-center">
																<p className="image-caption"><i className="ti ti-cloud-download"></i></p>
															</div>
														</Link>
														<Link to="#" className="inner">
															<img className="w-full object-cover rounded-sm" src={ALLImages('jpg15')}
																alt="Image Description" />
															<div className="image-overlay justify-center !items-center">
																<p className="image-caption"><i className="ti ti-cloud-download"></i></p>
															</div>
														</Link>
														<Link to="#" className="inner">
															<img className="w-full object-cover rounded-sm" src={ALLImages('jpg10')}
																alt="Image Description" />
															<div className="image-overlay justify-center !items-center">
																<p className="image-caption"><i className="ti ti-cloud-download"></i></p>
															</div>
														</Link>
													</div>
												</div>
												<div id="chat-gallery-2" className="hidden" role="tabpanel" aria-labelledby="chat-gallery-item-2">
													<ul className="flex flex-col space-y-4">
														<li
															className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:text-white py-1 rounded-sm">
															<div className="flex items-center justify-between">
																<div className="flex items-center space-x-3 rtl:space-x-reverse">
																	<div className="">
																		<span className="font-medium">
																			<i
																				className="ri ri-smartphone-line text-secondary text-base p-2 bg-secondary/20 rounded-sm"></i>
																		</span>
																	</div>
																	<div className="ltr:ml-3 rtl:mr-3">
																		<h3 className="text-sm font-semibold">
																			My-Document.pdf
																		</h3>
																		<p className="text-xs text-gray-500 dark:text-white/70">20MB</p>
																	</div>
																</div>
																<div className="space-x-2">
																	<Link aria-label="anchor" to="#"><span><i
																		className="ti ti-cloud-download text-gray-500 dark:text-white/70 text-lg"></i></span></Link>
																	<div className="hs-dropdown ti-dropdown">
																		<button aria-label="button" type="button"
																			className="hs-dropdown-toggle p-0 ti-dropdown-toggle border-0 shadow-none focus:ring-0 focus:ring-transparent focus:shadow-none">
																			<i className="text-lg text-gray-500 dark:text-white/70 ti ti-dots-vertical"></i>
																		</button>
																		<div className="hs-dropdown-menu ti-dropdown-menu">
																			<Link className="ti-dropdown-item" to="#"><i
																				className="ri ri-edit-2-line ltr:mr-1 rtl:ml-1"></i>Edit</Link>
																			<Link className="ti-dropdown-item" to="#"><i
																				className="ri ri-share-forward-line ltr:mr-1 rtl:ml-1"></i> Share</Link>
																			<Link className="ti-dropdown-item" to="#"><i
																				className="ri ri-delete-bin-5-line ltr:mr-1 rtl:ml-1"></i> Delete</Link>
																		</div>
																	</div>
																</div>
															</div>
														</li>
														<li
															className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:text-white py-1 rounded-sm">
															<div className="flex items-center justify-between">
																<div className="flex items-center space-x-3 rtl:space-x-reverse">
																	<div className="">
																		<span className="font-medium">
																			<i
																				className="ri ri-vidicon-line text-primary text-base p-2 bg-primary/20 rounded-sm"></i>
																		</span>
																	</div>
																	<div className="ltr:ml-3 rtl:mr-3">
																		<h3 className="text-sm font-semibold">
																			project.mp4
																		</h3>
																		<p className="text-xs text-gray-500 dark:text-white/70">20MB</p>
																	</div>
																</div>
																<div className="space-x-2">
																	<Link aria-label="anchor" to="#"><span><i
																		className="ti ti-cloud-download text-gray-500 dark:text-white/70 text-lg"></i></span></Link>
																	<div className="hs-dropdown ti-dropdown">
																		<button aria-label="button" type="button"
																			className="hs-dropdown-toggle p-0 ti-dropdown-toggle border-0 shadow-none focus:ring-0 focus:ring-transparent focus:shadow-none">
																			<i className="text-lg text-gray-500 dark:text-white/70 ti ti-dots-vertical"></i>
																		</button>
																		<div className="hs-dropdown-menu ti-dropdown-menu">
																			<Link className="ti-dropdown-item" to="#"><i
																				className="ri ri-edit-2-line ltr:mr-1 rtl:ml-1"></i>Edit</Link>
																			<Link className="ti-dropdown-item" to="#"><i
																				className="ri ri-share-forward-line ltr:mr-1 rtl:ml-1"></i> Share</Link>
																			<Link className="ti-dropdown-item" to="#"><i
																				className="ri ri-delete-bin-5-line ltr:mr-1 rtl:ml-1"></i> Delete</Link>
																		</div>
																	</div>
																</div>
															</div>
														</li>
														<li
															className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:text-white py-1 rounded-sm">
															<div className="flex items-center justify-between">
																<div className="flex items-center space-x-3 rtl:space-x-reverse">
																	<div className="">
																		<span className="font-medium">
																			<i
																				className="ri ri-music-2-line text-base text-danger p-3 bg-danger/20 rounded-sm"></i>
																		</span>
																	</div>
																	<div className="ltr:ml-3 rtl:mr-3">
																		<h3 className="text-sm font-semibold">
																			songs.mp3
																		</h3>
																		<p className="text-xs text-gray-500 dark:text-white/70">20MB</p>
																	</div>
																</div>
																<div className="space-x-2">
																	<Link aria-label="anchor" to="#"><span><i
																		className="ti ti-cloud-download text-gray-500 dark:text-white/70 text-lg"></i></span></Link>
																	<div className="hs-dropdown ti-dropdown">
																		<button aria-label="button" type="button"
																			className="hs-dropdown-toggle p-0 ti-dropdown-toggle border-0 shadow-none focus:ring-0 focus:ring-transparent focus:shadow-none">
																			<i className="text-lg text-gray-500 dark:text-white/70 ti ti-dots-vertical"></i>
																		</button>
																		<div className="hs-dropdown-menu ti-dropdown-menu">
																			<Link className="ti-dropdown-item" to="#"><i
																				className="ri ri-edit-2-line ltr:mr-1 rtl:ml-1"></i>Edit</Link>
																			<Link className="ti-dropdown-item" to="#"><i
																				className="ri ri-share-forward-line ltr:mr-1 rtl:ml-1"></i> Share</Link>
																			<Link className="ti-dropdown-item" to="#"><i
																				className="ri ri-delete-bin-5-line ltr:mr-1 rtl:ml-1"></i> Delete</Link>
																		</div>
																	</div>
																</div>
															</div>
														</li>
														<li
															className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:text-white py-1 rounded-sm">
															<div className="flex items-center justify-between">
																<div className="flex items-center space-x-3 rtl:space-x-reverse">
																	<div className="">
																		<span className="font-medium">
																			<i
																				className="ri ri-file-line text-base text-warning p-3 bg-warning/20 rounded-sm"></i>
																		</span>
																	</div>
																	<div className="ltr:ml-3 rtl:mr-3">
																		<h3 className="text-sm font-semibold">
																			Document.txt
																		</h3>
																		<p className="text-xs text-gray-500 dark:text-white/70">20MB</p>
																	</div>
																</div>
																<div className="space-x-2">
																	<Link aria-label="anchor" to="#"><span><i
																		className="ti ti-cloud-download text-gray-500 dark:text-white/70 text-lg"></i></span></Link>
																	<div className="hs-dropdown ti-dropdown">
																		<button aria-label="button" type="button"
																			className="hs-dropdown-toggle p-0 ti-dropdown-toggle border-0 shadow-none focus:ring-0 focus:ring-transparent focus:shadow-none">
																			<i className="text-lg text-gray-500 dark:text-white/70 ti ti-dots-vertical"></i>
																		</button>
																		<div className="hs-dropdown-menu ti-dropdown-menu">
																			<Link className="ti-dropdown-item" to="#"><i
																				className="ri ri-edit-2-line ltr:mr-1 rtl:ml-1"></i>Edit</Link>
																			<Link className="ti-dropdown-item" to="#"><i
																				className="ri ri-share-forward-line ltr:mr-1 rtl:ml-1"></i> Share</Link>
																			<Link className="ti-dropdown-item" to="#"><i
																				className="ri ri-delete-bin-5-line ltr:mr-1 rtl:ml-1"></i> Delete</Link>
																		</div>
																	</div>
																</div>
															</div>
														</li>
													</ul>
												</div>
												<div id="chat-gallery-3" className="hidden" role="tabpanel" aria-labelledby="chat-gallery-item-3">
													<div className="space-y-3">
														<div className="flex p-1 space-x-2 rtl:space-x-reverse">
															<div className="flex-shrink-0 my-auto">
																<span
																	className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-danger/20">
																	<span className="font-medium text-danger leading-none">
																		<i className="ti ti-mail"></i>
																	</span>
																</span>
															</div>
															<div className="">
																<h3 className="font-bold">Email</h3>
																<p className="text-gray-500 dark:text-white/70 text-sm">Airisatou@youremail.com</p>
															</div>
														</div>
														<div className="flex p-1 space-x-2 rtl:space-x-reverse">
															<div className="flex-shrink-0 my-auto">
																<span
																	className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-warning/20">
																	<span className="font-medium text-warning leading-none">
																		<i className="ti ti-phone"></i>
																	</span>
																</span>
															</div>
															<div className="">
																<h3 className="font-bold">Phone</h3>
																<p className="text-gray-500 dark:text-white/70 text-sm">+123(45)-158-90.</p>
															</div>
														</div>
														<div className="flex p-1 space-x-2 rtl:space-x-reverse">
															<div className="flex-shrink-0 my-auto">
																<span
																	className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-success/20">
																	<span className="font-medium text-success leading-none">
																		<i className="ti ti-map-pin"></i>
																	</span>
																</span>
															</div>
															<div className="">
																<h3 className="font-bold">Address</h3>
																<p className="text-gray-500 dark:text-white/70 text-sm">2nd street,houston texas,united
																	states.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div>
											<button type="button" className="w-full ti-btn ti-btn-primary">
												<i className="ti ti-report"></i>Report
											</button>
											<button type="button"
												className="w-full ti-btn font-medium border-gray-200 bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10">
												<i className="ti ti-ban"></i>Block
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Chat;
