import React from "react";
import { Link } from "react-router-dom";
import { NFTsalesOverview } from "../../../common/chartData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ALLImages from "../../../common/imagesdata";

const Nft = () => {
	return (
		<div>
			<PageHeader currentpage="NFT Dashboard" activepage="Home" mainpage="NFT Dashboard" />


			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-9">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-span-12">
							<div className="mb-6 flex items-center justify-between">
								<h5 className="box-title">Hot Autions :</h5>
								<div>
									<button type="button" className="ti-btn ti-btn-soft-primary m-0 py-1">View
										All</button>
								</div>
							</div>
							<div className="grid grid-cols-12 gap-x-6">
								<div className="md:!col-span-4 col-span-12">
									<div className="box">
										<img src={ALLImages('png78')} className="box-img-top rounded-sm h-[380px]"
											alt="..." />
										<div className="flex align-center justify-between nft-like-section w-full px-4">
											<div className="flex-auto">
												<button type="button"
													className="ti-btn ti-btn-success rounded-full m-0 px-2 py-1"
													aria-label="button">
													<i className="ri-heart-fill"></i>
												</button>
											</div>
											<div>
												<span className="badge rounded-sm nft-like-badge text-white"><i
													className="ri-heart-fill ltr:mr-1 rtl:ml-1 text-danger align-middle"></i>1.32k</span>
											</div>
										</div>
										<div className="box-body nft-auction-time text-white p-4">
											<h5 className="text-base font-semibold mb-4">Color Abstract - NFT</h5>
											<div className="flex items-center mb-4">
												<div className="ltr:mr-2 rtl:ml-2 leading-none">
													<img src={ALLImages('jpg66')} alt=""
														className="avatar avatar-sm rounded-full ring-transparent" />
												</div>
												<div>
													<p className="mb-0 font-semibold">Bloom NFT</p>
													<p className="text-xs text-white/70 mb-0">@bloom116</p>
												</div>
											</div>
											<div className="flex flex-wrap items-center justify-between">
												<div>
													<div className="text-sm font-semibold mb-2 text-white/70">
														Highest Bid
													</div>
													<div className="flex flex-wrap items-center leading-none">
														<img src={ALLImages('svg16')}
															alt=""
															className="avatar ring-transparent w-5 h-5 ltr:mr-1 rtl:ml-1" />0.19
														BTC
													</div>
												</div>
												<div className="sm:text-end">
													<div className="text-sm font-semibold mb-2 text-white/70">Ending -In
													</div>
													<div className="flex flex-wrap items-center leading-none">
														04 Days 02 : 27 : 32</div>
												</div>
											</div>
											<button type="button"
												className="ti-btn ti-btn-light py-1 m-0 mt-4 w-full">Place Bid</button>
										</div>
									</div>
								</div>
								<div className="md:!col-span-4 col-span-12">
									<div className="box">
										<img src={ALLImages('png79')} className="box-img-top rounded-sm h-[380px]"
											alt="..." />
										<div className="flex align-center justify-between nft-like-section w-full px-4">
											<div className="flex-auto">
												<button type="button"
													className="ti-btn ti-btn-success rounded-full m-0 px-2 py-1"
													aria-label="button">
													<i className="ri-heart-fill"></i>
												</button>
											</div>
											<div>
												<span className="badge rounded-sm nft-like-badge text-white"><i
													className="ri-heart-fill ltr:mr-1 rtl:ml-1 text-danger align-middle"></i>1.26k</span>
											</div>
										</div>
										<div className="box-body nft-auction-time text-white p-4">
											<h5 className="text-base font-semibold mb-4">Fluid Abstract - NFT</h5>
											<div className="flex items-center mb-4">
												<div className="ltr:mr-2 rtl:ml-2 leading-none">
													<img src={ALLImages('jpg61')} alt=""
														className="avatar avatar-sm ring-transparent rounded-full" />
												</div>
												<div>
													<p className="mb-0 font-semibold">Ergos NFT</p>
													<p className="text-xs text-white/70 mb-0">@ergos900</p>
												</div>
											</div>
											<div className="flex flex-wrap items-center justify-between">
												<div>
													<div className="text-sm font-semibold mb-2 text-white/70">
														Highest Bid
													</div>
													<div className="flex flex-wrap items-center leading-none">
														<img src={ALLImages('svg16')}
															alt=""
															className="avatar ring-transparent w-5 h-5 ltr:mr-1 rtl:ml-1" />0.35
														BTC
													</div>
												</div>
												<div className="sm:text-end">
													<div className="text-sm font-semibold mb-2 text-white/70">Ending -In
													</div>
													<div className="flex flex-wrap items-center leading-none">
														04 Days 02 : 27 : 32</div>
												</div>
											</div>
											<button type="button"
												className="ti-btn ti-btn-light py-1 m-0 mt-4 w-full">Place Bid</button>
										</div>
									</div>
								</div>
								<div className="md:!col-span-4 col-span-12">
									<div className="box">
										<img src={ALLImages('png80')} className="box-img-top rounded-sm h-[380px]"
											alt="..." />
										<div className="flex align-center justify-between nft-like-section w-full px-4">
											<div className="flex-auto">
												<button type="button"
													className="ti-btn ti-btn-success rounded-full m-0 px-2 py-1"
													aria-label="button">
													<i className="ri-heart-fill"></i>
												</button>
											</div>
											<div>
												<span className="badge rounded-sm nft-like-badge text-white"><i
													className="ri-heart-fill ltr:mr-1 rtl:ml-1 text-danger align-middle"></i>2.45k</span>
											</div>
										</div>
										<div className="box-body nft-auction-time text-white p-4">
											<h5 className="text-base font-semibold mb-4">Space Fluid - NFT</h5>
											<div className="flex items-center mb-4">
												<div className="ltr:mr-2 rtl:ml-2 leading-none">
													<img src={ALLImages('jpg63')} alt=""
														className="avatar avatar-sm ring-transparent rounded-full" />
												</div>
												<div>
													<p className="mb-0 font-semibold">Caros NFT</p>
													<p className="text-xs text-white/70 mb-0">@caros002</p>
												</div>
											</div>
											<div className="flex flex-wrap items-center justify-between">
												<div>
													<div className="text-sm font-semibold mb-2 text-white/70">
														Highest Bid
													</div>
													<div className="flex flex-wrap items-center leading-none">
														<img src={ALLImages('svg16')}
															alt=""
															className="avatar ring-transparent w-5 h-5 ltr:mr-1 rtl:ml-1" />0.19
														BTC
													</div>
												</div>
												<div className="sm:text-end">
													<div className="text-sm font-semibold mb-2 text-white/70">Ending -In
													</div>
													<div className="flex flex-wrap items-center leading-none">
														04 Days 02 : 27 : 32</div>
												</div>
											</div>
											<button type="button"
												className="ti-btn ti-btn-light py-1 m-0 mt-4 w-full">Place Bid</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 xxl:col-span-4">
							<div className="box">
								<div className="box-header">
									<div className="flex justify-between relative z-10">
										<h5 className="box-title my-auto">Personal Listings</h5>
										<div className=" block ltr:ml-auto rtl:mr-auto my-auto">
											<button type="button" className="ti-btn m-0 rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
												View All</button>
										</div>
									</div>
								</div>
								<div className="box-body p-0">
									<ul className="flex flex-col">
										<li className="ti-list-group py-4 border-t-0 border-x-0 text-gray-800 dark:text-white dark:border-white/10">
											<Link to="#" className="w-full">
												<div className="flex items-center justify-between">
													<div className="flex items-center">
														<img src={ALLImages('png85')} alt="" className="avatar avatar-sm rounded-sm ltr:mr-2 rtl:ml-2 leading-none nft-img" />
														<div>
															<p className="text-sm font-semibold mb-0">Kakasha Si</p>
															<span
																className="text-gray-500 dark:text-white/70 text-xs">@sensei011<span
																	className="ltr:ml-2 rtl:mr-2 text-success text-xs"><i
																		className="ri-arrow-up-s-line align-middle ltr:mr-1 rtl:ml-1"></i>0.45%</span></span>
														</div>
													</div>
													<div className="text-end">
														<span
															className="text-xs text-gray-500 dark:text-white/70 ltr:pl-6 rtl:pr-6">PRICE</span>
														<p className="mb-0 font-semibold flex items-center"><span
															className="avatar w-6 h-6 p-1 !ring-transparent"><img
																src={ALLImages('svg8')}
																alt="" /></span>1.75BTC</p>
													</div>
												</div>
											</Link>
										</li>
										<li className="ti-list-group py-4 border-t-0 border-x-0 text-gray-800 dark:text-white dark:border-white/10">
											<Link to="#" className="w-full">
												<div className="flex items-center justify-between">
													<div className="flex items-center">
														<img src={ALLImages('png92')} alt="" className="avatar avatar-sm rounded-sm ltr:mr-2 rtl:ml-2 leading-none nft-img" />
														<div>
															<p className="text-sm font-semibold mb-0">Naruto Uzumaki</p>
															<span
																className="text-gray-500 dark:text-white/70 text-xs">@naruto111<span
																	className="ltr:ml-2 rtl:mr-2 text-success  text-xs"><i
																		className="ri-arrow-up-s-line align-middle ltr:mr-1 rtl:ml-1"></i>1.70%</span></span>
														</div>
													</div>
													<div className="text-end">
														<span
															className="text-xs text-gray-500 dark:text-white/70 ltr:pl-6 rtl:pr-6">PRICE</span>
														<p className="mb-0 font-semibold flex items-center"><span
															className="avatar w-6 h-6 p-1 !ring-transparent"><img
																src={ALLImages('svg8')}
																alt="" /></span>2.45BTC</p>
													</div>
												</div>
											</Link>
										</li>
										<li className="ti-list-group py-4 border-t-0 border-x-0 text-gray-800 dark:text-white dark:border-white/10">
											<Link to="#" className="w-full">
												<div className="flex items-center justify-between">
													<div className="flex items-center">
														<img src={ALLImages('png91')} alt="" className="avatar avatar-sm rounded-sm ltr:mr-2 rtl:ml-2 leading-none nft-img" />
														<div>
															<p className="text-sm font-semibold mb-0">Kazimo Aruke</p>
															<span
																className="text-gray-500 dark:text-white/70 text-xs">@kazimo900<span
																	className="ltr:ml-2 rtl:mr-2 text-danger text-xs"><i
																		className="ri-arrow-down-s-line align-middle ltr:mr-1 rtl:ml-1"></i>1.21%</span></span>
														</div>
													</div>
													<div className="text-end">
														<span
															className="text-xs text-gray-500 dark:text-white/70 ltr:pl-6 rtl:pr-6">PRICE</span>
														<p className="mb-0 font-semibold flex items-center"><span
															className="avatar w-6 h-6 p-1 !ring-transparent"><img
																src={ALLImages('svg8')}
																alt="" /></span>1.95BTC</p>
													</div>
												</div>
											</Link>
										</li>
										<li className="ti-list-group py-4 border-t-0 border-x-0 text-gray-800 dark:text-white dark:border-white/10">
											<Link to="#" className="w-full">
												<div className="flex items-center justify-between">
													<div className="flex items-center">
														<img src={ALLImages('png79')} alt="" className="avatar avatar-sm rounded-sm ltr:mr-2 rtl:ml-2 leading-none nft-img" />
														<div>
															<p className="text-sm font-semibold mb-0">Oorichimaru lo</p>
															<span
																className="text-gray-500 dark:text-white/70 text-xs">@ooro001<span
																	className="ltr:ml-2 rtl:mr-2 text-danger text-xs"><i
																		className="ri-arrow-down-s-line align-middle ltr:mr-1 rtl:ml-1"></i>0.35%</span></span>
														</div>
													</div>
													<div className="text-end">
														<span
															className="text-xs text-gray-500 dark:text-white/70 ltr:pl-6 rtl:pr-6">PRICE</span>
														<p className="mb-0 font-semibold flex items-center"><span
															className="avatar w-6 h-6 p-1 !ring-transparent"><img
																src={ALLImages('svg8')}
																alt="" /></span>1.65BTC</p>
													</div>
												</div>
											</Link>
										</li>
										<li className="ti-list-group py-4 border-t-0 border-x-0 text-gray-800 dark:text-white dark:border-white/10">
											<Link to="#" className="w-full">
												<div className="flex items-center justify-between">
													<div className="flex items-center">
														<img src={ALLImages('png87')} alt="" className="avatar avatar-sm rounded-sm ltr:mr-2 rtl:ml-2 leading-none nft-img" />
														<div>
															<p className="text-sm font-semibold mb-0">Sasuke Uchiha</p>
															<span
																className="text-gray-500 dark:text-white/70 text-xs">@sasuke777<span
																	className="ltr:ml-2 rtl:mr-2 text-danger text-xs"><i
																		className="ri-arrow-down-s-line align-middle ltr:mr-1 rtl:ml-1"></i>1.52%</span></span>
														</div>
													</div>
													<div className="text-end">
														<span
															className="text-xs text-gray-500 dark:text-white/70 ltr:pl-6 rtl:pr-6">PRICE</span>
														<p className="mb-0 font-semibold flex items-center"><span
															className="avatar w-6 h-6 p-1 !ring-transparent"><img
																src={ALLImages('svg8')}
																alt="" /></span>1.15BTC</p>
													</div>
												</div>
											</Link>
										</li>
										<li className="ti-list-group py-4 border-t-0 border-x-0 text-gray-800 dark:text-white dark:border-white/10">
											<Link to="#" className="w-full">
												<div className="flex items-center justify-between">
													<div className="flex items-center">
														<img src={ALLImages('png89')} alt="" className="avatar avatar-sm rounded-sm ltr:mr-2 rtl:ml-2 leading-none nft-img" />
														<div>
															<p className="text-sm font-semibold mb-0">Lorem Ipsum Uch</p>
															<span
																className="text-gray-500 dark:text-white/70 text-xs">@kakashi092<span
																	className="ltr:ml-2 rtl:mr-2 text-danger text-xs"><i
																		className="ri-arrow-down-s-line align-middle ltr:mr-1 rtl:ml-1"></i>2.32%</span></span>
														</div>
													</div>
													<div className="text-end">
														<span
															className="text-xs text-gray-500 dark:text-white/70 ltr:pl-6 rtl:pr-6">PRICE</span>
														<p className="mb-0 font-semibold flex items-center"><span
															className="avatar w-6 h-6 p-1 !ring-transparent"><img
																src={ALLImages('svg8')}
																alt="" /></span>1.25BTC</p>
													</div>
												</div>
											</Link>
										</li>
										<li className="ti-list-group py-4 border-0 text-gray-800 dark:text-white">
											<Link to="#" className="w-full">
												<div className="flex items-center justify-between">
													<div className="flex items-center">
														<img src={ALLImages('png81')} alt="" className="avatar avatar-sm rounded-sm ltr:mr-2 rtl:ml-2 leading-none nft-img" />
														<div>
															<p className="text-sm font-semibold mb-0">Nagiro Ohinavo</p>
															<span
																className="text-gray-500 dark:text-white/70 text-xs">@nagiro096<span
																	className="ltr:ml-2 rtl:mr-2 text-success text-xs"><i
																		className="ri-arrow-up-s-line align-middle ltr:mr-1 rtl:ml-1"></i>0.99%</span></span>
														</div>
													</div>
													<div className="text-end">
														<span
															className="text-xs text-gray-500 dark:text-white/70 ltr:pl-6 rtl:pr-6">PRICE</span>
														<p className="mb-0 font-semibold flex items-center"><span
															className="avatar w-6 h-6 p-1 !ring-transparent"><img
																src={ALLImages('svg8')}
																alt="" /></span>1.12BTC</p>
													</div>
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-span-12 xxl:col-span-8">
							<NFTsalesOverview />
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box overflow-hidden">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Top Creators</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button id="hs-dropdown-custom-icon-trigger" type="button" aria-label="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-white !border border-gray-200 text-gray-500 hover:bg-gray-100  focus:ring-gray-200 dark:bg-black/20 dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
										<i className="text-sm leading-none ti ti-dots-vertical"></i> </button>
									<div className="hs-dropdown-menu ti-dropdown-menu"
										aria-labelledby="hs-dropdown-custom-icon-trigger">
										<Link className="ti-dropdown-item" to="#">Action</Link>
										<Link className="ti-dropdown-item" to="#">Another Action</Link>
										<Link className="ti-dropdown-item" to="#">SomBTCing else
											here</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto creators-table">
								<table className="ti-custom-table ti-custom-table-head whitespace-nowrap">
									<tbody>
										<tr>
											<td>
												<div className="flex items-center min-w-[180px]">
													<img src={ALLImages('jpg60')} alt=""
														className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2" />
													<div className="items-center">
														<p className="text-sm mb-0 flex font-semibold">Amanda Nanes<svg
															className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z">
															</path>
														</svg></p>
														<span
															className="text-xs text-gray-500 dark:text-white/70">amandananes@</span>
													</div>
												</div>
											</td>
											<td>
												<div className="items-center">
													<span className="text-xs text-gray-500 dark:text-white/70">Total
														Sold</span>
													<p className="text-sm mb-0 font-semibold">18</p>
												</div>
											</td>
											<td>
												<div className="items-center">
													<span className="text-xs text-gray-500 dark:text-white/70">Sale
														Value</span>
													<p className="text-sm mb-0 font-semibold">$1,982</p>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center min-w-[180px]">
													<img src={ALLImages('jpg71')} alt=""
														className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2" />
													<div className="items-center">
														<p className="text-sm mb-0 flex font-semibold">
															Charles Achilles<svg
																className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
																xmlns="http://www.w3.org/2000/svg" width="100"
																height="100" enableBackground="new 0 0 100 100"
																viewBox="0 0 100 100">
																<path
																	d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z">
																</path>
															</svg></p>
														<span
															className="text-xs text-gray-500 dark:text-white/70">@charlesachilles</span>
													</div>
												</div>
											</td>
											<td>
												<div className="items-center">
													<span className="text-xs text-gray-500 dark:text-white/70">Total
														Sold</span>
													<p className="text-sm mb-0 font-semibold">126</p>
												</div>
											</td>
											<td>
												<div className="items-center">
													<span className="text-xs text-gray-500 dark:text-white/70">Sale
														Value</span>
													<p className="text-sm mb-0 font-semibold">$16,982</p>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center min-w-[180px]">
													<img src={ALLImages('jpg61')} alt=""
														className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2" />
													<div className="items-center">
														<p className="text-sm mb-0 flex font-semibold">
															Julia Camo<svg
																className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
																xmlns="http://www.w3.org/2000/svg" width="100"
																height="100" enableBackground="new 0 0 100 100"
																viewBox="0 0 100 100">
																<path
																	d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z">
																</path>
															</svg></p>
														<span
															className="text-xs text-gray-500 dark:text-white/70">@juliacamo</span>
													</div>
												</div>
											</td>
											<td>
												<div className="items-center">
													<span className="text-xs text-gray-500 dark:text-white/70">Total
														Sold</span>
													<p className="text-sm mb-0 font-semibold">42</p>
												</div>
											</td>
											<td>
												<div className="items-center">
													<span className="text-xs text-gray-500 dark:text-white/70">Sale
														Value</span>
													<p className="text-sm mb-0 font-semibold">$3,432</p>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center min-w-[180px]">
													<img src={ALLImages('jpg68')} alt=""
														className="avatar avatar-sm rounded-full ltr:mr-2 rtl:ml-2" />
													<div className="items-center">
														<p className="text-sm mb-0 flex font-semibold">Json Taylor<svg
															className="fill-primary w-4 h-4 ltr:ml-2 rtl:mr-2"
															xmlns="http://www.w3.org/2000/svg" width="100"
															height="100" enableBackground="new 0 0 100 100"
															viewBox="0 0 100 100">
															<path
																d="M88.057,45.286l-5.456-5.455c-1.295-1.295-2.356-3.854-2.356-5.689v-7.715c0-3.67-2.998-6.668-6.667-6.67h-7.718  c-1.833,0-4.395-1.063-5.69-2.357l-5.455-5.455c-2.592-2.592-6.836-2.592-9.428,0l-5.455,5.459c-1.296,1.295-3.861,2.355-5.69,2.355  h-7.715c-3.665,0-6.667,2.998-6.667,6.668v7.715c0,1.828-1.061,4.395-2.356,5.689l-5.456,5.455c-2.594,2.592-2.594,6.836,0,9.432  l5.456,5.455c1.296,1.295,2.356,3.861,2.356,5.689v7.715c0,3.666,3.002,6.668,6.667,6.668h7.715c1.833,0,4.395,1.061,5.69,2.355  l5.455,5.457c2.592,2.59,6.836,2.59,9.428,0l5.455-5.457c1.296-1.295,3.857-2.355,5.69-2.355h7.718c3.669,0,6.667-3.002,6.667-6.668  v-7.715c0-1.836,1.062-4.395,2.356-5.689l5.456-5.455C90.647,52.122,90.647,47.878,88.057,45.286z M44.709,65.001L30,50.29  l4.714-4.713l9.996,9.996l20.577-20.572L70,39.714L44.709,65.001z">
															</path>
														</svg></p>
														<span
															className="text-xs text-gray-500 dark:text-white/70">@jsontaylor</span>
													</div>
												</div>
											</td>
											<td>
												<div className="items-center">
													<span className="text-xs text-gray-500 dark:text-white/70">Total
														Sold</span>
													<p className="text-sm mb-0 font-semibold">63</p>
												</div>
											</td>
											<td>
												<div className="items-center">
													<span className="text-xs text-gray-500 dark:text-white/70">Sale
														Value</span>
													<p className="text-sm mb-0 font-semibold">$9,236</p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="mb-6 flex items-center justify-between">
						<h5 className="box-title">Featured Collections :</h5>
						<div>
							<button type="button" className="ti-btn ti-btn-soft-primary m-0 py-1">View All</button>
						</div>
					</div>
					<Swiper className="swiper pagination-dynamic text-start !h-auto" spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Autoplay]} >
						<SwiperSlide>
							<div className="box">
								<div className="box-body">
									<div className="grid grid-cols-12 gap-2">
										<div className="col-span-6">
											<img src={ALLImages('png81')} alt=""
												className="nft-featuredcollect-image" />
										</div>
										<div className="col-span-6">
											<img src={ALLImages('png82')} alt=""
												className="nft-featuredcollect-image" />
										</div>
										<div className="col-span-6">
											<img src={ALLImages('png83')} alt=""
												className="nft-featuredcollect-image" />
										</div>
										<div className="col-span-6">
											<img src={ALLImages('png84')} alt=""
												className="nft-featuredcollect-image" />
										</div>
									</div>
								</div>
								<div className="box-footer">
									<div className="flex items-center">
										<div className="flex items-center flex-auto">
											<div className="ltr:mr-2 rtl:ml-2 leading-none">
												<div className="relative inline-block">
													<img className="avatar avatar-xs !rounded-full"
														src={ALLImages('jpg57')} alt="Image Description" />
													<span
														className="absolute top-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-primary text-white"><i
															className="ri-check-line"></i></span>
												</div>
											</div>
											<div className="ltr:mr-2 rtl:ml-2">
												<p className="mb-0 font-semibold"><Link
													to="#">Simon Cowell</Link></p>
												<p className="text-gray-500 dark:text-white/70 text-xs mb-0">@simon
												</p>
											</div>
										</div>
										<div
											className="hs-dropdown ti-dropdown ltr:ml-auto rtl:mr-auto [--placement:top-left]">
											<button id="hs-dropup11" type="button" aria-label="button"
												className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-primary/10 !border border-primary/10 text-primary hover:text-white hover:bg-primary hover:border-primary focus:ring-primary dark:bg-primary/10 dark:hover:bg-primary dark:border-primary/10 dark:hover:border-primary dark:focus:ring-primary dark:focus:ring-offset-primary">
												<i className="text-sm leading-none ti ti-dots-vertical"></i>
											</button>
											<div className="hs-dropdown-menu ti-dropdown-menu hidden"
												aria-labelledby="hs-dropup11">
												<Link className="ti-dropdown-item" to="#">Action</Link>
												<Link className="ti-dropdown-item" to="#">Another
													Action</Link>
												<Link className="ti-dropdown-item" to="#">SomBTCing
													else
													here</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="box">
								<div className="box-body">
									<div className="grid grid-cols-12 gap-2">
										<div className="col-span-6">
											<img src={ALLImages('png85')} alt=""
												className="nft-featuredcollect-image" />
										</div>
										<div className="col-span-6">
											<img src={ALLImages('png86')} alt=""
												className="nft-featuredcollect-image" />
										</div>
										<div className="col-span-6">
											<img src={ALLImages('png87')} alt=""
												className="nft-featuredcollect-image" />
										</div>
										<div className="col-span-6">
											<img src={ALLImages('png88')} alt=""
												className="nft-featuredcollect-image" />
										</div>
									</div>
								</div>
								<div className="box-footer">
									<div className="flex items-center">
										<div className="flex items-center flex-auto">
											<div className="ltr:mr-2 rtl:ml-2 leading-none">
												<div className="relative inline-block">
													<img className="avatar avatar-xs !rounded-full"
														src={ALLImages('jpg61')} alt="Image Description" />
													<span
														className="absolute top-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-primary text-white"><i
															className="ri-check-line"></i></span>
												</div>
											</div>
											<div className="ltr:mr-2 rtl:ml-2">
												<p className="mb-0 font-semibold"><Link
													to="#">Melissa Smith</Link></p>
												<p className="text-gray-500 dark:text-white/70 text-xs mb-0">
													@melissa </p>
											</div>
										</div>
										<div
											className="hs-dropdown ti-dropdown ltr:ml-auto rtl:mr-auto [--placement:top-left]">
											<button id="hs-dropup12" type="button" aria-label="button"
												className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-primary/10 !border border-primary/10 text-primary hover:text-white hover:bg-primary hover:border-primary focus:ring-primary dark:bg-primary/10 dark:hover:bg-primary dark:border-primary/10 dark:hover:border-primary dark:focus:ring-primary dark:focus:ring-offset-primary">
												<i className="text-sm leading-none ti ti-dots-vertical"></i>
											</button>
											<div className="hs-dropdown-menu ti-dropdown-menu hidden"
												aria-labelledby="hs-dropup12">
												<Link className="ti-dropdown-item" to="#">Action</Link>
												<Link className="ti-dropdown-item" to="#">Another
													Action</Link>
												<Link className="ti-dropdown-item" to="#">SomBTCing
													else
													here</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="box">
								<div className="box-body">
									<div className="grid grid-cols-12 gap-2">
										<div className="col-span-6">
											<img src={ALLImages('png85')} alt=""
												className="nft-featuredcollect-image" />
										</div>
										<div className="col-span-6">
											<img src={ALLImages('png92')} alt=""
												className="nft-featuredcollect-image" />
										</div>
										<div className="col-span-6">
											<img src={ALLImages('png92')} alt=""
												className="nft-featuredcollect-image" />
										</div>
										<div className="col-span-6">
											<img src={ALLImages('png91')} alt=""
												className="nft-featuredcollect-image" />
										</div>
									</div>
								</div>
								<div className="box-footer">
									<div className="flex items-center">
										<div className="flex items-center flex-auto">
											<div className="ltr:mr-2 rtl:ml-2 leading-none">
												<div className="relative inline-block">
													<img className="avatar avatar-xs !rounded-full"
														src={ALLImages('jpg66')}
														alt="Image Description" />
													<span
														className="absolute top-0 ltr:right-0 rtl:left-0 block h-3 w-3 rounded-full transform -translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-primary text-white"><i
															className="ri-check-line"></i></span>
												</div>
											</div>
											<div className="ltr:mr-2 rtl:ml-2">
												<p className="mb-0 font-semibold"><Link to="#">Json
													Talor</Link></p>
												<p className="text-gray-500 dark:text-white/70 text-xs mb-0">@taylor
												</p>
											</div>
										</div>
										<div
											className="hs-dropdown ti-dropdown ltr:ml-auto rtl:mr-auto [--placement:top-left]">
											<button id="hs-dropup1" type="button" aria-label="button"
												className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-2 bg-primary/10 !border border-primary/10 text-primary hover:text-white hover:bg-primary hover:border-primary focus:ring-primary dark:bg-primary/10 dark:hover:bg-primary dark:border-primary/10 dark:hover:border-primary dark:focus:ring-primary dark:focus:ring-offset-primary">
												<i className="text-sm leading-none ti ti-dots-vertical"></i>
											</button>
											<div className="hs-dropdown-menu ti-dropdown-menu hidden"
												aria-labelledby="hs-dropup1">
												<Link className="ti-dropdown-item" to="#">Action</Link>
												<Link className="ti-dropdown-item" to="#">Another
													Action</Link>
												<Link className="ti-dropdown-item" to="#">SomBTCing
													else
													here</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className="col-span-12 xxl:col-span-4">
						<div className="box overflow-hidden">
							<div className="box-body">
								<div className="flex items-start justify-between mb-3">
									<div className="flex-grow">
										<p className="text-sm mb-0 text-gray-500 dark:text-white/70">Your Balance
										</p>
										<h6 className="text-2xl mb-4 text-gray-800 dark:text-white">$23,773.09</h6>
									</div>
									<span
										className="bg-primary/20 text-primary avatar rounded-sm text-3xl leading-none p-2"><i
											className="ri-refund-2-line"></i></span>
								</div>
								<p className="text-gray-500 dark:text-white/70 mb-0 text-sm">Transactions</p>
								<div className="flex items-center justify-between mb-4">
									<h6 className="text-lg mb-0 text-gray-800 dark:text-white">1,107</h6>
									<span className="text-xs text-gray-500 dark:text-white/70">Last activity
										07-08-22</span>
								</div>
								<div className="flex items-center space-x-2 rtl:space-x-reverse">
									<Link to="#" className="ti-btn ti-btn-primary m-0"><i
										className="ti ti-wallet text-xl leading-none"></i>Withdraw Money</Link>
									<Link to="#" className="ti-btn ti-btn-outline-primary m-0"><i
										className="ti ti-circle-plus text-xl leading-none"></i>Top Up Wallet</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>



			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex justify-between">
								<h5 className="box-title my-auto">Trending NFTs</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button id="hs-dropdown-custom-icon-trigger2" type="button"
										className="hs-dropdown-toggle px-2 py-1 ti-btn ti-btn-primary">Sort
										By<i className="ri-arrow-down-s-line align-middle"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu"
										aria-labelledby="hs-dropdown-custom-icon-trigger2">
										<Link className="ti-dropdown-item" to="#">New</Link>
										<Link className="ti-dropdown-item" to="#">popular</Link>
										<Link className="ti-dropdown-item" to="#">Relevant</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-sm overflow-auto crypto-table">
								<table className="ti-custom-table ti-custom-table-head whitespace-nowrap">
									<thead className="">
										<tr>
											<th scope="col" className="min-w-[200px]">Collection</th>
											<th scope="col">Rank</th>
											<th scope="col" className="min-w-[200px]">Volume</th>
											<th scope="col">24h %</th>
											<th scope="col">7d %</th>
											<th scope="col" className="min-w-[200px]">Floor Price</th>
											<th scope="col">Items</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('png81')} alt=""
															className="avatar avatar-sm rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#" title="nft_name">Starter
															Sense NFT</Link></p>
														<Link to="javscript:void(0);"
															className="text-xs text-gray-500 dark:text-white/70 font-normal"
															title="creator_name">@irukasensei229</Link>
													</div>
												</div>
											</td>
											<td><span className="text-sm font-semibold">#1</span></td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('svg8')}
															alt="" className="avatar w-5 h-5 rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#"
															title="nft_name">2.56BTC</Link></p>
													</div>
												</div>
											</td>
											<td>
												<span className="text-sm text-success"><i
													className="ti ti-trending-up ltr:mr-1 rtl:ml-1 align-middle"></i>15.2%</span>
											</td>
											<td><span className="text-sm text-success"><i
												className="ti ti-trending-up ltr:mr-1 rtl:ml-1 align-middle"></i>3.1%</span>
											</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('svg8')}
															alt="" className="avatar w-5 h-5 rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#"
															title="nft_name">2.31BTC</Link></p>
													</div>
												</div>
											</td>
											<td>12.4K</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('png82')} alt=""
															className="avatar avatar-sm rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#" title="nft_name">Lorem
															Kekkei</Link></p>
														<Link to="javscript:void(0);"
															className="text-xs text-gray-500 dark:text-white/70 font-normal"
															title="creator_name">@clansound209</Link>
													</div>
												</div>
											</td>
											<td><span className="text-sm font-semibold">#2</span></td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('svg8')}
															alt="" className="avatar w-5 h-5 rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#"
															title="nft_name">1.25BTC</Link></p>
													</div>
												</div>
											</td>
											<td>
												<span className="text-sm text-success"><i
													className="ti ti-trending-up ltr:mr-1 rtl:ml-1 align-middle"></i>3.7%</span>
											</td>
											<td><span className="text-sm text-danger"><i
												className="ti ti-trending-down ltr:mr-1 rtl:ml-1 align-middle"></i>0.5%</span>
											</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('svg8')}
															alt="" className="avatar w-5 h-5 rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#"
															title="nft_name">0.25BTC</Link></p>
													</div>
												</div>
											</td>
											<td>10.1K</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('png83')} alt=""
															className="avatar avatar-sm rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#" title="nft_name"> NFT
															Uchiha</Link></p>
														<Link to="javscript:void(0);"
															className="text-xs text-gray-500 dark:text-white/70 font-normal"
															title="creator_name">@sasukeuhi990</Link>
													</div>
												</div>
											</td>
											<td><span className="text-sm font-semibold">#3</span></td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('svg8')}
															alt="" className="avatar w-5 h-5 rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#"
															title="nft_name">2,092BTC</Link></p>
													</div>
												</div>
											</td>
											<td>
												<span className="text-sm text-danger"><i
													className="ti ti-trending-down ltr:mr-1 rtl:ml-1 align-middle"></i>23.1%</span>
											</td>
											<td><span className="text-sm text-success"><i
												className="ti ti-trending-up ltr:mr-1 rtl:ml-1 align-middle"></i>9.12%</span>
											</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('svg8')}
															alt="" className="avatar w-5 h-5 rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#"
															title="nft_name">2,000BTC</Link></p>
													</div>
												</div>
											</td>
											<td>52.7K</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('png84')} alt=""
															className="avatar avatar-sm rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#" title="nft_name"> Lorem
															Ipsum Uch</Link></p>
														<Link to="javscript:void(0);"
															className="text-xs text-gray-500 dark:text-white/70 font-normal"
															title="creator_name">@kakashi092</Link>
													</div>
												</div>
											</td>
											<td><span className="text-sm font-semibold">#4</span></td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('svg8')}
															alt="" className="avatar w-5 h-5 rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#"
															title="nft_name">36.25BTC</Link></p>
													</div>
												</div>
											</td>
											<td>
												<span className="text-sm text-danger"><i
													className="ti ti-trending-down ltr:mr-1 rtl:ml-1 align-middle"></i>5.2%</span>
											</td>
											<td><span className="text-sm text-danger"><i
												className="ti ti-trending-down ltr:mr-1 rtl:ml-1 align-middle"></i>4.1%</span>
											</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('svg8')}
															alt="" className="avatar w-5 h-5 rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#"
															title="nft_name">30.12BTC</Link></p>
													</div>
												</div>
											</td>
											<td>31.4K</td>
										</tr>
										<tr>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('png85')} alt=""
															className="avatar avatar-sm rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#" title="nft_name">Ivan
															Shomer Har</Link></p>
														<Link to="javscript:void(0);"
															className="text-xs text-gray-500 dark:text-white/70 font-normal"
															title="creator_name">narutouze025</Link>
													</div>
												</div>
											</td>
											<td><span className="text-sm font-semibold">#5</span></td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('svg8')}
															alt="" className="avatar w-5 h-5 rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#" title="nft_name">
															12.52BTC</Link></p>
													</div>
												</div>
											</td>
											<td>
												<span className="text-sm text-success"><i
													className="ti ti-trending-up ltr:mr-1 rtl:ml-1 align-middle"></i>7.0%</span>
											</td>
											<td><span className="text-sm text-success"><i
												className="ti ti-trending-up ltr:mr-1 rtl:ml-1 align-middle"></i>12.5%</span>
											</td>
											<td>
												<div className="flex items-center">
													<div className="ltr:mr-2 rtl:ml-2 leading-none">
														<img src={ALLImages('svg8')}
															alt="" className="avatar w-5 h-5 rounded-full" />
													</div>
													<div>
														<p className="mb-0 font-semibold text-sm"><Link
															to="#" title="nft_name">
															12.50BTC</Link></p>
													</div>
												</div>
											</td>
											<td>121.5K</td>
										</tr>
									</tbody>
								</table>
							</div>

						</div>
						<div className="box-footer">
							<div className="flex items-center">
								<div className="">
									showing 5 Entries <i
										className="ri-arrow-right-line ltr:ml-2 rtl:mr-2 font-semibold"></i>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<nav className="flex justify-center items-center space-x-2 rtl:space-x-reverse">
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm"
											to="#">
											<span aria-hidden="true">Prev</span>
											<span className="sr-only">Previous</span>
										</Link>
										<Link className="bg-primary text-white py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
											to="#" aria-current="page">1</Link>
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
											to="#">2</Link>
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
											to="#">3</Link>
										<Link className="text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm"
											to="#">
											<span className="sr-only">Next</span>
											<span aria-hidden="true">Next</span>
										</Link>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Nft;
