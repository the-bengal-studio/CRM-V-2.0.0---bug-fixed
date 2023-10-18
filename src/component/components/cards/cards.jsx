
import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import ALLImages from "../../../common/imagesdata";
import { CardSelect } from "../../../common/select2data";
import Select from 'react-select';

const Cards = () => {
	const [Show, setShow] = useState(true);

	const [isFullscreen, setIsFullscreen] = useState(false);

	useEffect(() => {
	  const handleBodyClick = () => {
		if (isFullscreen) {
		  setIsFullscreen(false);
		}
	  };
  
	  document.querySelector('body').addEventListener('click', handleBodyClick);
  
	  return () => {
		document.querySelector('body').removeEventListener('click', handleBodyClick);
	  };
	}, [isFullscreen]);
  
	const handleFullscreenClick = (e) => {
	  e.stopPropagation();
	  setIsFullscreen(!isFullscreen);
	};
  
	const handleBoxClick = (e) => {
	  e.stopPropagation();
	};

	return (
		<div>
			<PageHeader currentpage="Cards" activepage="Components" mainpage="Cards" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="xxl:col-span-3 md:col-span-6 col-span-12">
					<div className="box">
						<img src={ALLImages('jpg21')} className="box-img-top rounded-t-sm" alt="..." />
						<div className="box-body">
							<h6 className="text-base box-title font-semibold mb-2">box title</h6>
							<p className="text-[0.813rem] text-gray-500 dark:text-white/70 mb-4">when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
								also the leap into electronic typesetting, remaining essentially unchanged.</p>
							<Link to="#" className="ti-btn ti-btn-primary">Read More</Link>
						</div>
						<div className="box-footer">
							<span className="text-sm">Last updated 3 mins ago</span>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 md:col-span-6 col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="box-title">Featured</div>
						</div>
						<div className="box-body">
							<h6 className="text-base box-title font-semibold mb-2">Special title treatment</h6>
							<p className="text-[0.813rem] mb-4">Richard McClintock, a Latin professor at Hampden-Sydney College in
								Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage</p>
							<Link to="#" className="ti-btn ti-btn-primary">Read More</Link>
						</div>
					</div>
					<div className="box">
						<div className="box-body">
							<h6 className="text-base box-title font-semibold mb-2">box title</h6>
							<p className="box-subtitle text-sm mb-4 text-gray-500 dark:text-white/70">box subtitle</p>
							<p className="text-[0.813rem]">There are many variations of passages of Lorem Ipsum available, but the
								majority have suffered alteration many variations of passages of Lorem Ipsum available there are so
								many ways to solve but the majority have suffered.</p>
						</div>
						<div className="box-footer space-x-4">
							<Link to="#" className="text-sm text-danger">Buy Now</Link>
							<Link to="#" className="text-sm text-success"><u>Review</u></Link>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 md:col-span-6 col-span-12">
					<div className="box">
						<img src={ALLImages('jpg22')} className="box-img-top rounded-t-sm" alt="..." />
						<div className="box-body">
							<p className="text-[0.813rem]">Some quick example text to build on the box title and
								make up the bulk of the box's content.</p>
						</div>
					</div>
					<h6 className="text-base mb-4 font-semibold text-gray-800 dark:text-white">Only box Body:</h6>
					<div className="box">
						<div className="box-body">
							<div className="text-[0.813rem]">
								<p className="mb-0 text-[0.813rem]">It is a long established fact that a reader will be distracted by the
									readable content.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 md:col-span-6 col-span-12">
					<div className="box">
						<img src={ALLImages('jpg23')} className="box-img-top rounded-t-sm" alt="..." />
						<div className="box-body pb-0">
							<h6 className="text-base box-title font-semibold mb-2">box title</h6>
							<p className="mb-4 text-[0.813rem]">Some quick example text to build on the box title and
								make up the bulk of the box's content.</p>
						</div>
						<ul className="flex flex-col divide-y divide-gray-200 dark:divide-white/10">
							<li className="ti-list-group border-0 text-gray-800 dark:text-white">An item</li>
							<li className="ti-list-group border-0 text-gray-800 dark:text-white">A second item</li>
						</ul>
						<div className="box-body space-x-4">
							<Link to="#" className="text-sm text-primary">Box link</Link>
							<Link to="#" className="text-sm text-secondary">Another link</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="xxl:col-span-6 col-span-12">
					<div className="grid grid-cols-12 gap-x-6">
						<h6 className="text-base mb-4">Quote:</h6>
						<div className="col-span-12">
							<div className="box">
								<div className="box-body">
									<blockquote className="blockquote mb-0 text-center">
										<h6 className="text-base mb-2">The greatest glory in living lies not in never falling, but in rising
											every time we fall.</h6>
										<footer
											className="blockquote-footer before:content-['_'] text-gray-500 dark:text-white/70 mt-2 text-sm">
											Someone famous in <cite title="Source Title">Source Title</cite></footer>
									</blockquote>
								</div>
							</div>
						</div>
						<div className="col-span-12">
							<h6 className="text-base mb-4">List Group:</h6>
							<div className="grid grid-cols-12 gap-x-6">
								<div className="xxl:col-span-4 col-span-12">
									<div className="box">
										<ul className="flex flex-col divide-y divide-gray-200 dark:divide-white/10">
											<li className="ti-list-group border-0 text-gray-800 dark:text-white">An item</li>
											<li className="ti-list-group border-0 text-gray-800 dark:text-white">A second item</li>
											<li className="ti-list-group border-0 text-gray-800 dark:text-white">A third item</li>
											<li className="ti-list-group border-0 text-gray-800 dark:text-white">A fourth item</li>
										</ul>
									</div>
								</div>
								<div className="xxl:col-span-4 col-span-12">
									<div className="box">
										<div className="box-header">
											Featured
										</div>
										<ul className="flex flex-col divide-y divide-gray-200 dark:divide-white/10">
											<li className="ti-list-group border-0 text-gray-800 dark:text-white">An item</li>
											<li className="ti-list-group border-0 text-gray-800 dark:text-white">A second item</li>
											<li className="ti-list-group border-0 text-gray-800 dark:text-white">A third item</li>
										</ul>
									</div>
								</div>
								<div className="xxl:col-span-4 col-span-12">
									<div className="box">
										<ul className="flex flex-col divide-y divide-gray-200 dark:divide-white/10">
											<li className="ti-list-group border-0 text-gray-800 dark:text-white">An item</li>
											<li className="ti-list-group border-0 text-gray-800 dark:text-white">A second item</li>
											<li className="ti-list-group border-0 text-gray-800 dark:text-white">A third item</li>
										</ul>
										<div className="box-footer">
											Box footer
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-6 col-span-12">
					<h6 className="text-base mb-4">Using Grid Markups:</h6>
					<div className="grid sm:grid-cols-3 gap-x-6">
						<div className="box">
							<div className="box-body">
								<img src={ALLImages('jpg24')} className="rounded-sm mb-4" alt="..." />
								<h6 className="text-base box-title font-semibold mb-2">Product A</h6>
								<p className="text-[0.813rem] mb-4">With supporting text below as a natural
									lead-in to additional content.</p>
								<Link to="#" className="ti-btn ti-btn-primary">Purchase</Link>
							</div>
						</div>
						<div className="box">
							<div className="box-body">
								<img src={ALLImages('jpg25')} className="rounded-sm mb-4" alt="..." />
								<h6 className="text-base box-title font-semibold mb-2">Product B</h6>
								<p className="text-[0.813rem] mb-4">With supporting text below as a natural
									lead-in to additional content.</p>
								<Link to="#" className="ti-btn ti-btn-secondary">Purchase</Link>
							</div>
						</div>
						<div className="box">
							<div className="box-body">
								<img src={ALLImages('jpg26')} className="rounded-sm mb-4" alt="..." />
								<h6 className="text-base box-title font-semibold mb-2">Product-C</h6>
								<p className="text-[0.813rem] mb-4">With supporting text below as a natural
									lead-in to additional content.</p>
								<Link to="#" className="ti-btn ti-btn-light">Purchase</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="xxl:col-span-9 col-span-12">
					<h6 className="text-base mb-4">Text Alignment:</h6>
					<div className="grid grid-cols-12 gap-x-6">
						<div className="xxl:col-span-4 col-span-12">
							<div className="box">
								<div className="box-body">
									<div className="mb-2">
										<img src={ALLImages('jpg71')} className="avatar avatar-sm rounded-md" alt="Image Description" />
									</div>
									<h6 className="text-base box-title font-semibold mb-2">Where it come from</h6>
									<p className="text-[0.813rem] mb-4">Contrary to popular belief, Lorem Ipsum is not simply random text.
										It has
										roots in a piece of classical Latin literature.</p>
									<Link to="#" className="ti-btn ti-btn-primary">Go somewhere</Link>
								</div>
							</div>
						</div>
						<div className="xxl:col-span-4 col-span-12">
							<div className="box text-center">
								<div className="box-body">
									<div className="mb-2">
										<img src={ALLImages('jpg59')} className="avatar avatar-sm rounded-md" alt="Image Description" />
									</div>
									<h6 className="text-base box-title font-semibold mb-2">Why do we use it?</h6>
									<p className="text-[0.813rem] mb-4">Many desktop publishing packages and web page editors now use Lorem
										Ipsum as
										their default model text.</p>
									<Link to="#" className="ti-btn ti-btn-primary">Go somewhere</Link>
								</div>
							</div>
						</div>
						<div className="xxl:col-span-4 col-span-12">
							<div className="box text-end">
								<div className="box-body">
									<div className="mb-2">
										<img src={ALLImages('jpg67')} className="avatar avatar-sm rounded-md" alt="Image Description" />
									</div>
									<h6 className="text-base box-title font-semibold mb-2">What is special?</h6>
									<p className="text-[0.813rem] mb-4">There are many variations of passages of Lorem Ipsum available, but
										the
										majority have suffered alteration in some form.</p>
									<Link to="#" className="ti-btn ti-btn-primary">Go somewhere</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="grid grid-cols-12 gap-x-6">
						<h6 className="text-base mb-4 whitespace-nowrap">Mixins utilities:</h6>
						<div className="col-span-12">
							<div className="box">
								<div className="box-header px-4 py-3">Header</div>
								<div className="box-body text-success">
									<h6 className="text-base box-title font-semibold mb-2">Looking For Success?</h6>
									<p className="text-[0.813rem]">If you are going to use a passage of Lorem Ipsum, you need to be sure
										there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
										generators on the Internet tend to repeat predefined chunks as necessary.</p>
								</div>
								<div className="box-footer px-4 py-3">Footer</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<h6 className="text-base mb-4">Box Header &amp; Footer:</h6>
			<div className="grid grid-cols-12 gap-x-6">
				<div className="xxl:col-span-3 col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex items-center w-full">
								<div className="ltr:mr-2 rtl:ml-2">
									<img src={ALLImages('jpg67')} className="avatar rounded-full" alt="Image Description" />
								</div>
								<div className="">
									<div className="text-base font-semibold">Adam Smith</div>
									<p className="mb-0 text-gray-500 dark:text-white/70 text-[0.813rem]">28 Years, Male</p>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<div className="hs-dropdown ti-dropdown">
										<button aria-label="button" id="hs-dropdown-custom-icon-trigger1" type="button"
											className="hs-dropdown-toggle p-0 !bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0  ti-dropdown-toggle">
											<svg className="ti-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="16"
												height="16" fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
												</path>
											</svg>
										</button>
										<div className="hs-dropdown-menu ti-dropdown-menu" aria-labelledby="hs-dropdown-custom-icon-trigger1">
											<Link className="ti-dropdown-item" to="#">Edit</Link>
											<Link className="ti-dropdown-item" to="#">Download</Link>
											<Link className="ti-dropdown-item" to="#">Delete</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							If you are going to use, you need to be sure there isn't anything embarrassing hidden in the middle of
							text. All the Lorem Ipsum generators.
						</div>
						<div className="box-footer">
							<div className="flex justify-between">
								<div className="font-semibold text-sm">28,Nov 2022</div>
								<div className="font-semibold text-sm text-success">Assistant Professor</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box">
						<div className="box-header border-b-0 pb-0">
							<div>
								<span className="text-warning text-base leading-none ltr:mr-1 rtl:ml-1"><i className="ri-star-s-fill"></i></span>
								<span className="text-warning text-base leading-none ltr:mr-1 rtl:ml-1"><i className="ri-star-s-fill"></i></span>
								<span className="text-warning text-base leading-none ltr:mr-1 rtl:ml-1"><i className="ri-star-s-fill"></i></span>
								<span className="text-warning text-base leading-none ltr:mr-1 rtl:ml-1"><i className="ri-star-s-fill"></i></span>
								<span className="text-gray-200 dark:text-gray-200 text-base leading-none"><i
									className="ri-star-s-fill"></i></span>
								<p className="block text-gray-500 dark:text-white/70 mb-0 text-[0.813rem] font-semibold">1 year ago</p>
							</div>
						</div>
						<div className="box-body py-3">
							<div className="font-semibold text-base mb-2">Very Great!</div>
							There are many variations of passages of Lorem Ipsum available, but the majority have suffered
							alteration in some form, by injected humour
						</div>
						<div className="box-footer">
							<div className="flex items-center">
								<img src={ALLImages('jpg68')} className="avatar w-6 h-6 rounded-full ltr:mr-2 rtl:ml-2" alt="Image Description" />
								<div className="font-semibold text-sm">Corey Anderson</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box text-center">
						<div className="box-header border-b-0 pb-0">
							<span className="ltr:float-right rtl:float-left text-lg"><i className="ri-heart-fill text-danger"></i></span>
						</div>
						<div className="box-body pt-1">
							<img src={ALLImages('jpg61')} className="avatar avatar-lg rounded-full ltr:mr-2 rtl:ml-2 mb-2" alt="Image Description" />
							<div className="font-semibold text-base">Sasha Max</div>
							<p className="mb-4 text-gray-500 dark:text-white/70 text-[0.813rem]">Web Developer</p>
							<div className="">
								<button type="button" aria-label="button"
									className="ti-btn p-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] bg-[#3b5998] text-white hover:bg-[#3b5998] focus:ring-0 focus:ring-[#3b5998] dark:focus:ring-offset-white/10 ti-btn-facebook">
									<i className="ri-facebook-line"></i>
								</button>
								<button type="button" aria-label="button"
									className="ti-btn p-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] bg-[#00acee] text-white hover:bg-[#00acee] focus:ring-0 focus:ring-[#00acee] dark:focus:ring-offset-white/10 ti-btn-twitter">
									<i className="ri-twitter-line"></i>
								</button>
								<button type="button" aria-label="button"
									className="ti-btn p-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] bg-instagram text-white hover:bg-instagram focus:ring-0 focus:ring-instagram dark:focus:ring-offset-white/10 ti-btn-instagram">
									<i className="ri-instagram-line"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box">
						<div className="box-body">
							<svg className="w-16 h-16 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path fill="#C6CDD1" d="M19 21H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z" />
								<path fill="#C6CDD1" d="M11 1H3a2 2 0 0 0-2 2v8h10V1z" />
								<path fill="#A1ABB2" d="M21 11V3a2 2 0 0 0-2-2h-8v10h10z" />
								<path fill="#878A8F" d="M1 11v8a2 2 0 0 0 2 2h8V11H1z" />
								<path fill="#797D82" d="M11 11v10h8a2 2 0 0 0 2-2v-8H11z" />
								<path fill="#FFF" d="M14 6h5v1h-5z" />
								<path d="M19 20.75H3a2 2 0 0 1-2-2V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-.25a2 2 0 0 1-2 2z"
									opacity=".1" />
								<circle cx="16" cy="16" r="7" fill="#136ad0" />
								<path
									d="M16 22.75c-3.08 0-5.704-1.97-6.696-4.713C10.18 20.907 12.85 23 16 23s5.82-2.094 6.696-4.963C21.704 20.781 19.08 22.75 16 22.75z"
									opacity=".1" />
								<path fill="#FFF"
									d="M16 9.25c3.08 0 5.704 1.97 6.696 4.713C21.82 11.093 19.15 9 16 9s-5.82 2.094-6.696 4.963C10.296 11.219 12.92 9.25 16 9.25z"
									opacity=".2" />
								<path fill="#FFF" d="M4 6h5v1H4z" />
								<path fill="#FFF"
									d="M6 4h1v5H6zM13 14h6v1h-6zM13 17h6v1h-6zM4.379 15.086l.707-.707 3.535 3.535-.707.707z" />
								<path fill="#FFF" d="m4.379 17.914 3.535-3.535.707.707-3.535 3.535z" />
								<path fill="#FFF" d="M19 1H3a2 2 0 0 0-2 2v.25a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2V3a2 2 0 0 0-2-2z"
									opacity=".2" />
								<linearGradient id="a" x1="14.367" x2="19.862" y1="14.367" y2="19.862" gradientUnits="userSpaceOnUse">
									<stop offset="0" stopColor="#3E2723" stopOpacity=".2" />
									<stop offset="1" stopColor="#3E2723" stopOpacity=".02" />
								</linearGradient>
								<path fill="url(#a)" d="M19 14v1h-6l2 2h4v1h-6l4.766 4.766a7.014 7.014 0 0 0 5-5L19 14z" />
								<linearGradient id="b" x1="-.448" x2="23.366" y1="5.662" y2="16.766" gradientUnits="userSpaceOnUse">
									<stop offset="0" stopColor="#FFF" stopOpacity=".2" />
									<stop offset="1" stopColor="#FFF" stopOpacity="0" />
								</linearGradient>
								<path fill="url(#b)"
									d="M21 11.11V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.11A6.974 6.974 0 0 0 16 23c3.86 0 7-3.14 7-7a6.974 6.974 0 0 0-2-4.89z" />
							</svg>
							<p className="mb-0 mt-4 text-sm font-semibold leading-none">
								Calculations
							</p>
						</div>
						<div className="box-footer">
							Lorem Ipsum is therefore always free from repetition, injected humour.
						</div>
					</div>
				</div>
				<div className="xxl:col-span-2 col-span-12">
					<div className="box">
						<div className="box-body">
							<img src={ALLImages('jpg27')} className="rounded-sm mb-4 w-full" alt="..." />
							<h6 className="text-base box-title font-semibold mb-4">Mountains<span
								className="badge rounded-md bg-primary text-white ltr:float-right rtl:float-left text-[0.813rem] leading-none py-1">New</span></h6>
							<p className="text-[0.813rem]">With supporting text below as a natural
								lead-in.</p>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-2 col-span-12">
					<div className="box">
						<div className="box-body">
							<img src={ALLImages('jpg28')} className="rounded-sm mb-4 w-full" alt="..." />
							<h6 className="text-base box-title font-semibold mb-4">Hills<span
								className="badge rounded-md bg-secondary text-white ltr:float-right rtl:float-left text-[0.813rem] leading-none py-1">Hot</span>
							</h6>
							<p className="text-[0.813rem]">With supporting text below as a natural
								lead-in.</p>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-2 col-span-12">
					<div className="box">
						<div className="box-body">
							<img src={ALLImages('jpg29')} className="rounded-sm mb-4 w-full" alt="..." />
							<h6 className="text-base box-title font-semibold mb-4">Nature<span
								className="badge rounded-md bg-gray-100 text-gray-500 ltr:float-right rtl:float-left text-[0.813rem] leading-none py-1">Offer</span>
							</h6>
							<p className="text-[0.813rem]">With supporting text below as a natural
								lead-in.</p>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box text-center">
						<div className="box-header">
							<div className="box-title">Featured</div>
						</div>
						<div className="box-body">
							<h6 className="text-base box-title font-semibold mb-2">Breaking News !</h6>
							<p className="text-[0.813rem] mb-4">With supporting text below as a natural lead-in to
								additional content.</p>
							<Link to="#" className="ti-btn ti-btn-primary mt-2">Read More</Link>
							<Link to="#" className="ti-btn ti-btn-outline ti-btn-outline-secondary mt-2">Close</Link>
						</div>
						<div className="box-footer text-gray-500 dark:text-white/70">
							11.32pm
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="xxxl:flex w-full">
								<img src={ALLImages('jpg68')} className="avatar rounded-full ltr:mr-6 rtl:ml-6" alt="Image Description" />
								<div className="flex items-center justify-between w-full">
									<div className="">
										<p className="text-sm text-gray-500 dark:text-white/70 mb-0">Posts</p>
										<p className="font-semibold text-base mb-0">25</p>
									</div>
									<div className="">
										<p className="text-sm text-gray-500 dark:text-white/70 mb-0">Followers</p>
										<p className="font-semibold text-base mb-0">1253</p>
									</div>
									<div className="">
										<p className="text-sm text-gray-500 dark:text-white/70 mb-0">Following</p>
										<p className="font-semibold text-base mb-0">367</p>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="font-semibold text-base">Angelina Caprio</div>
							<div className="text-gray-500 dark:text-white/70 text-[0.813rem] mb-4">Angular Developer</div>
							<p className="text-sm font-semibold mb-1">About:</p>
							<p className="mb-0 text-[0.813rem]">Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
								original form, accompanied by English versions </p>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-4 col-span-12">
					<div className="box">
						<div className="box-header flex justify-between">
							<div className="box-title my-auto">
								box With Collapse Button
							</div>
							<Link aria-label="anchor" className="hs-collapse-toggle inline-flex items-center gap-x-2" to="#"
								id="hs-show-hide-collapse" data-hs-collapse="#collapseExample">
								<i className="hs-collapse-open:rotate-180 ri-arrow-up-s-line text-lg"></i>
							</Link>
						</div>
						<div className="hs-collapse w-full overflow-hidden transition-[height] duration-300" id="collapseExample"
							aria-labelledby="hs-show-hide-collapse">
							<div className="box-body">
								<h6 className="text-base font-semibold">Collapsible box</h6>
								<p className="text-[0.813rem] mb-0">There are many variations of passages of Lorem Ipsum available, but
									the
									majority have suffered alteration in some form, by injected humour, or randomised words</p>
							</div>
							<div className="box-footer">
								<button type="button" className="ti-btn ti-btn-primary">Read More</button>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-4 col-span-12">
					{Show ? (
						<div className="box">
							<div className="box-header flex justify-between">
								<div className="box-title my-auto">
									box With Close Button
								</div>
								<Link aria-label="anchor" to="#" className="box-remove" onClick={() => setShow(false)}>
									<i className="ri-close-line text-lg"></i>
								</Link>
							</div>
							<div className="box-body">
								<h6 className="text-base font-semibold">Closed box</h6>
								<p className="text-[0.813rem] mb-0">There are many variations of passages of Lorem Ipsum available, but the
									majority
									have suffered alteration in some form, by injected humour, or randomised words</p>
							</div>
							<div className="box-footer">
								<button type="button" className="ti-btn ti-btn-primary">Read More</button>
							</div>
						</div>
					) : null}
				</div>


				<div className="xxl:col-span-4 col-span-12">
					<div className={`box ${isFullscreen ? 'box-fullscreen' : ''}`}>
						<div className="box-header flex justify-between">
							<div className="box-title my-auto"> box With Fullscreen Button </div>
							<Link aria-label="anchor" to="#" className="box-fullscreen" onClick={handleFullscreenClick} ><i className="ri-fullscreen-line"></i> </Link>
						</div>

						<div className="box-body" onClick={handleBoxClick}>
							<h6 className="text-base font-semibold">FullScreen box</h6>
							<p className="text-[0.813rem] mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
						</div>
						<div className="box-footer">
							<button type="button" className="ti-btn ti-btn-primary">Read More</button>
						</div>

					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<h6 className="text-base mb-4">Using Utilities:</h6>
					<div className="grid grid-cols-12 gap-x-6">
						<div className="xxl:col-span-6 col-span-12">
							<div className="box w-3/4">
								<div className="box-header">
									<div className="box-title">Using Width 75%</div>
								</div>
								<div className="box-body">
									<div className="text-[0.813rem]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum omnis excepturi
										consequatur molestiae
									</div>
								</div>
								<div className="box-footer">
									<Link to="#" className="ti-btn ti-btn-primary w-full">Button</Link>
								</div>
							</div>
						</div>
						<div className="xxl:col-span-6 col-span-12">
							<div className="box w-1/2">
								<div className="box-header">
									<div className="box-title">Using Width 50%</div>
								</div>
								<div className="box-body">
									<div className="text-[0.813rem]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit
									</div>
								</div>
								<div className="box-footer">
									<Link to="#" className="ti-btn ti-btn-primary w-full">Button</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<h6 className="text-base mb-4">Navigation:</h6>
					<div className="grid grid-cols-12 gap-x-6">
						<div className="xxl:col-span-6 col-span-12">
							<div className="box text-center">
								<div className=" p-6 dark:bg-black/20 ">
									<div
										className="flex flex-col overflow-hidden bg-white border shadow-sm rounded-sm dark:bg-black/20 dark:border-gray-700 dark:shadow-black/[0.05]">
										<div
											className="bg-gray-100 border-b rounded-t-sm pt-3 px-4 md:pt-4 md:px-5 dark:bg-black/20 dark:border-gray-700">
											<nav className="flex space-x-2 rtl:space-x-reverse" aria-label="Tabs">
												<Link className="-mb-px py-3 px-4 bg-white text-sm font-medium text-center border border-b-transparent text-gray-500 rounded-t-sm hover:text-gray-700 focus:z-10 dark:bg-black/20 dark:border-gray-700 dark:border-b-white/10 dark:hover:text-white/80"
													to="#">
													Active
												</Link>

												<Link className="-mb-px py-3 px-4 text-sm font-medium text-center border-b text-gray-500 rounded-t-sm hover:text-gray-700 focus:z-10 dark:border-gray-700 dark:hover:text-white/80"
													to="#">
													Link
												</Link>

												<Link className="-mb-px py-3 px-4 text-sm font-medium text-center border-b text-gray-500 rounded-t-sm hover:text-gray-700 focus:z-10 dark:border-gray-700 dark:hover:text-white/80"
													to="#">
													Link
												</Link>
											</nav>
										</div>
										<div className="p-4 text-center md:py-7 md:px-5">
											<h3 className="text-lg font-bold text-gray-800 dark:text-white">
												Box title
											</h3>
											<p className="mt-2 text-gray-800 dark:text-white/70">
												With supporting text below as a natural lead-in to additional content.
											</p>
											<Link className="mt-3 ti-btn ti-btn-primary" to="#">
												Go somewhere
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="xxl:col-span-6 col-span-12">
							<div className="box text-center box-nav-tabs">
								<div
									className="flex flex-col bg-white dark:bg-black/20  dark:shadow-black/[0.05]">
								
									<div className="sm:hidden">
										<label htmlFor="hs-box-nav-tabs" className="sr-only">Select a nav</label>
										<Select classNamePrefix='react-select' options={CardSelect} value={CardSelect[0]} placeholder='' />
									</div>

									<div className="hidden sm:block">
										<nav
											className="relative z-0 flex border-b rounded-sm divide-x rtl:divide-x-reverse divide-gray-200 dark:border-gray-700 dark:divide-white/10"
											aria-label="Tabs">
											<Link className="group relative min-w-0 flex-1 bg-white py-4 px-4 border-b-2 border-b-primary text-gray-900 rounded-tl-sm text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-black/20 dark:text-gray-300"
												aria-current="page" to="#">
												My Account
											</Link>

											<Link className="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-black/20 dark:hover:text-white/80"
												to="#">
												Company
											</Link>

											<Link className="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-black/20 dark:hover:text-white/80"
												to="#">
												Team Members
											</Link>

											<Link className="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 ltr:rounded-tr-sm rtl:rounded-tl-sm text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-black/20 dark:hover:text-white/80"
												to="#">
												Billing
											</Link>
										</nav>
									</div>

									<div className="p-4 text-center md:py-7 md:px-5">
										<h3 className="text-lg font-bold text-gray-800 dark:text-white">
											Box title
										</h3>
										<p className="mt-2 text-gray-800 dark:text-white/70">
											With supporting text below as a natural lead-in to additional content.
										</p>
										<Link className="mt-3 ti-btn ti-btn-primary" to="#">
											Go somewhere
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<h6 className="text-base mb-4">Image Caps:</h6>
			<div className="grid grid-cols-12 gap-x-6">
				<div className="xxl:col-span-4 col-span-12">
					<div className="box">
						<img src={ALLImages('jpg30')} className="box-img-top rounded-t-sm" alt="..." />
						<div className="box-body">
							<h6 className="text-base box-title font-semibold">Image caps are widely used in Blog's</h6>
							<p className="text-[0.813rem] mb-4 text-gray-500 dark:text-white/70">But I must explain to you how all this mistaken
								idea of denouncing pleasure and praising pain was born and I will give you a complete account of the
								system, and expound the actual teachings.</p>
							<p className="text-[0.813rem] mb-0"><small className="text-sm">Last updated 3 mins
								ago</small></p>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-4 col-span-12">
					<div className="box">
						<div className="box-body">
							<h6 className="text-base box-title font-semibold">Image caps are widely used in Blog's</h6>
							<p className="text-[0.813rem] mb-4 text-gray-500 dark:text-white/70">But I must explain to you how all this mistaken
								idea of denouncing pleasure and praising pain was born and I will give you a complete account of the
								system, and expound.</p>
							<p className="text-[0.813rem] mb-0"><small className="text-sm">Last updated 3 mins
								ago</small></p>
						</div>
						<img src={ALLImages('jpg31')} className="box-img-bottom rounded-b-sm" alt="..." />
					</div>
				</div>
				<div className="xxl:col-span-4 col-span-12">
					<div className="box">
						<div className="box-body">
							<h6 className="text-base box-title font-semibold mb-1">Image caps are widely used in Blog's</h6>
							<p className="text-[0.813rem] mb-1 text-gray-500 dark:text-white/70">This is a wider box with supporting text below
								as
								a natural lead-in to additional content. This content is a
								little
								bit longer.</p>
						</div>
						<img src={ALLImages('jpg32')} className="" alt="..." />
						<div className="box-body">
							<p className="text-[0.813rem] mb-0"><small className="text-sm">Last updated 3 mins
								ago</small></p>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-4 col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="box-title">Image caps are widely used in Blog's</div>
						</div>
						<div className="box-body">
							<p className="text-[0.813rem] mb-1 text-gray-500 dark:text-white/70">This is a wider box with supporting text below
								as
								a natural lead-in to additional content. This content is a
								little
								bit longer.</p>
						</div>
						<img src={ALLImages('jpg33')} className="" alt="..." />
						<div className="box-footer">
							<p className="text-[0.813rem] mb-0"><small className="text-sm">Last updated 3 mins
								ago</small></p>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-4 col-span-12">
					<div className="box">
						<img src={ALLImages('jpg34')} className="box-img-top rounded-t-sm" alt="..." />
						<div className="box-header">
							<div className="box-title">Image caps are widely used in Blog's</div>
						</div>
						<div className="box-body">
							<p className="text-[0.813rem] mb-1 text-gray-500 dark:text-white/70">This is a wider box with supporting text below
								as
								a natural lead-in to additional content. This content is a
								little
								bit longer.</p>
						</div>
						<div className="box-footer">
							<p className="text-[0.813rem] mb-0"><small className="text-sm">Last updated 3 mins
								ago</small></p>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-4 col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="box-title">Image caps are widely used in Blog's</div>
						</div>
						<div className="box-body">
							<p className="text-[0.813rem] mb-1 text-gray-500 dark:text-white/70">This is a wider box with supporting text below
								as
								a natural lead-in to additional content. This content is a
								little
								bit longer.</p>
						</div>
						<div className="box-footer">
							<p className="text-[0.813rem] mb-0"><small className="text-sm">Last updated 3 mins
								ago</small></p>
						</div>
						<img src={ALLImages('jpg35')} className="box-img-bottom rounded-b-sm" alt="..." />
					</div>
				</div>
			</div>

			<h6 className="text-base mb-4">Image Overlays:</h6>
			<div className="grid grid-cols-12 gap-x-6">
				<div className="xxl:col-span-4 col-span-12">
					<div className="box overlay-box">
						<img src={ALLImages('jpg36')} className="box-img" alt="..." />
						<div className="box-img-overlay flex flex-col p-0">
							<div className="box-header">
								<div className="box-title text-white">
									Image Overlays Are Awesome!
								</div>
							</div>
							<div className="box-body">
								<div className="text-[0.813rem] mb-2">There are many variations of passages of Lorem Ipsum available, but the
									majority have suffered alteration in some form, by injected humour, or randomised words which
									don't look even.</div>
								<div className="text-[0.813rem]">Last updated 3 mins ago</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-4 col-span-12">
					<div className="box overlay-box">
						<img src={ALLImages('jpg37')} className="box-img" alt="..." />
						<div className="box-img-overlay flex flex-col p-0 over-content-bottom">
							<div className="box-body">
								<div className="box-title text-white mb-4">
									Image Overlays Are Awesome!
								</div>
								<div className="text-[0.813rem] mb-2">There are many variations of passages of Lorem Ipsum available, but the
									majority have suffered alteration in some form, by injected humour, or randomised words which
									don't look even.</div>
							</div>
							<div className="box-footer">Last updated 3 mins ago</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-4 col-span-12">
					<div className="box bg-dark overlay-box">
						<img src={ALLImages('jpg38')} className="box-img" alt="..." />
						<div className="box-img-overlay flex flex-col p-0">
							<div className="box-header">
								<div className="box-title text-white">
									Image Overlays Are Awesome!
								</div>
							</div>
							<div className="box-body h-full">
								<div className="text-[0.813rem]">There are many variations of passages of Lorem Ipsum available, but the
									majority have suffered alteration in some form, by injected humour, or randomised words which
									don't look even.</div>
							</div>
							<div className="box-footer">Last updated 3 mins ago</div>
						</div>
					</div>
				</div>
			</div>

			<h6 className="text-base mb-4">Horizontal box:</h6>
			<div className="grid grid-cols-12 gap-x-6">
				<div className="xxl:col-span-4 col-span-12">
					<div className="box">
						<div className="grid grid-cols-12 gap-0">
							<div className="col-span-12 md:col-span-4">
								<img src={ALLImages('jpg40')} className="img-fluid ltr:rounded-l-sm rtl:rounded-r-sm h-full w-full" alt="..." />
							</div>
							<div className="col-span-12 md:col-span-8">
								<div className="box-header">
									<div className="box-title">Horizontal box</div>
								</div>
								<div className="box-body">
									<h6 className="text-base box-title font-semibold">Horizontal box are awesome!</h6>
									<p className="text-[0.813rem]">This is a wider box with supporting text below as a natural .</p>
								</div>
								<div className="box-footer">
									<p className="text-[0.813rem]">Last updated 3 mins
										ago</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-4 col-span-12">
					<div className="box">
						<div className="grid grid-cols-12 gap-0">
							<div className="col-span-12 md:col-span-8">
								<div className="box-header">
									<div className="box-title">Horizontal box</div>
								</div>
								<div className="box-body">
									<h6 className="text-base box-title font-semibold">Horizontal box are awesome!</h6>
									<p className="text-[0.813rem] mb-4">This is a wider box with suppo rting text below as a natural lead-in to
										additional content. This content is a little bit longer.</p>

									<p className="text-[0.813rem]">Last updated 3 mins
										ago</p>
								</div>
							</div>
							<div className="col-span-12 md:col-span-4">
								<img src={ALLImages('jpg41')} className="img-fluid ltr:rounded-r-sm rtl:rounded-l-sm h-full w-full" alt="..." />
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-4 col-span-12">
					<div className="box">
						<div className="grid grid-cols-12 gap-0">
							<div className="col-span-12 md:col-span-8">
								<div className="box-body">
									<h6 className="text-base box-title font-semibold mb-2">Horizontal box</h6>
									<div className="mb-4">Horizontal box are awesome!</div>
									<p className="text-[0.813rem]">This is a wider box with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.</p>
								</div>
								<div className="box-footer">

									<p className="text-[0.813rem]">Last updated 3 mins
										ago</p>
								</div>
							</div>
							<div className="col-span-12 md:col-span-4">
								<img src={ALLImages('jpg42')} className="img-fluid ltr:rounded-r-sm rtl:rounded-l-sm h-full w-full" alt="..." />
							</div>
						</div>
					</div>
				</div>
			</div>

			<h6 className="text-base mb-4">Background Colored box:</h6>
			<div className="grid grid-cols-12 gap-x-6">
				<div className="xxl:col-span-3 col-span-12">
					<div className="box !bg-primary text-white">
						<div className="box-body">
							<div className="flex items-center w-full">
								<div className="ltr:mr-2 rtl:ml-2">
									<img src={ALLImages('jpg67')} className="avatar rounded-full ring-0" alt="Image Description" />
								</div>
								<div className="">
									<div className="text-base font-semibold">Adam Smith</div>
									<p className="mb-0 text-white opacity-70 text-xs">Finished by today</p>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<div className="hs-dropdown ti-dropdown">
										<button aria-label="button" id="hs-dropdown-custom-icon-trigger11" type="button" className="hs-dropdown-toggle p-0 !bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0  ti-dropdown-toggle">
											<i className="ri-more-2-line ti-dropdown-icon text-white"></i>
										</button>
										<div className="hs-dropdown-menu ti-dropdown-menu" aria-labelledby="hs-dropdown-custom-icon-trigger11">
											<Link className="ti-dropdown-item" to="#">Edit</Link>
											<Link className="ti-dropdown-item" to="#">Download</Link>
											<Link className="ti-dropdown-item" to="#">Delete</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box !bg-secondary text-white">
						<div className="box-body">
							<div className="flex items-center w-full">
								<div className="ltr:mr-2 rtl:ml-2">
									<img src={ALLImages('jpg68')} className="avatar rounded-full ring-0" alt="Image Description" />
								</div>
								<div className="">
									<div className="text-base font-semibold">Elisha Corner</div>
									<p className="mb-0 text-white opacity-70 text-xs">Completed 24 days back</p>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<div className="hs-dropdown ti-dropdown">
										<button aria-label="button" id="hs-dropdown-custom-icon-trigger12" type="button" className="hs-dropdown-toggle p-0 !bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0  ti-dropdown-toggle">
											<i className="ri-more-2-line ti-dropdown-icon text-white"></i>
										</button>
										<div className="hs-dropdown-menu ti-dropdown-menu" aria-labelledby="hs-dropdown-custom-icon-trigger12">
											<Link className="ti-dropdown-item" to="#">Edit</Link>
											<Link className="ti-dropdown-item" to="#">Download</Link>
											<Link className="ti-dropdown-item" to="#">Delete</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box !bg-warning text-white">
						<div className="box-body">
							<div className="flex items-center w-full">
								<div className="ltr:mr-2 rtl:ml-2">
									<img src={ALLImages('jpg57')} className="avatar rounded-full ring-0" alt="Image Description" />
								</div>
								<div className="">
									<div className="text-base font-semibold">Sarah Alina</div>
									<p className="mb-0 text-white opacity-70 text-xs">Completed today</p>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<div className="hs-dropdown ti-dropdown">
										<button aria-label="button" id="hs-dropdown-custom-icon-trigger13" type="button" className="hs-dropdown-toggle p-0 !bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0  ti-dropdown-toggle">
											<i className="ri-more-2-line ti-dropdown-icon text-white"></i>
										</button>
										<div className="hs-dropdown-menu ti-dropdown-menu" aria-labelledby="hs-dropdown-custom-icon-trigger13">
											<Link className="ti-dropdown-item" to="#">Edit</Link>
											<Link className="ti-dropdown-item" to="#">Download</Link>
											<Link className="ti-dropdown-item" to="#">Delete</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box !bg-info text-white">
						<div className="box-body">
							<div className="flex items-center w-full">
								<div className="ltr:mr-2 rtl:ml-2">
									<img src={ALLImages('jpg57')} className="avatar rounded-full ring-0" alt="Image Description" />
								</div>
								<div className="">
									<div className="text-base font-semibold">Monica Karen</div>
									<p className="mb-0 text-white opacity-70 text-xs">Pending from 4 days</p>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<div className="hs-dropdown ti-dropdown">
										<button aria-label="button" id="hs-dropdown-custom-icon-trigger14" type="button" className="hs-dropdown-toggle p-0 !bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0  ti-dropdown-toggle">
											<i className="ri-more-2-line ti-dropdown-icon text-white"></i>
										</button>
										<div className="hs-dropdown-menu ti-dropdown-menu" aria-labelledby="hs-dropdown-custom-icon-trigger14">
											<Link className="ti-dropdown-item" to="#">Edit</Link>
											<Link className="ti-dropdown-item" to="#">Download</Link>
											<Link className="ti-dropdown-item" to="#">Delete</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box !bg-success text-white">
						<div className="box-body">
							<div className="flex items-center w-full">
								<div className="ltr:mr-2 rtl:ml-2">
									<img src={ALLImages('jpg61')} className="avatar rounded-full ring-0" alt="Image Description" />
								</div>
								<div className="">
									<div className="text-base font-semibold">Samantha sid</div>
									<p className="mb-0 text-white opacity-70 text-xs">In leave for 1 month</p>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<div className="hs-dropdown ti-dropdown">
										<button aria-label="button" id="hs-dropdown-custom-icon-trigger15" type="button" className="hs-dropdown-toggle p-0 !bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0  ti-dropdown-toggle">
											<i className="ri-more-2-line ti-dropdown-icon text-white"></i>
										</button>
										<div className="hs-dropdown-menu ti-dropdown-menu" aria-labelledby="hs-dropdown-custom-icon-trigger15">
											<Link className="ti-dropdown-item" to="#">Edit</Link>
											<Link className="ti-dropdown-item" to="#">Download</Link>
											<Link className="ti-dropdown-item" to="#">Delete</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box !bg-danger text-white">
						<div className="box-body">
							<div className="flex items-center w-full">
								<div className="ltr:mr-2 rtl:ml-2">
									<img src={ALLImages('jpg70')} className="avatar rounded-full ring-0" alt="Image Description" />
								</div>
								<div className="">
									<div className="text-base font-semibold">Sebastien steyn</div>
									<p className="mb-0 text-white opacity-70 text-xs">Completed by Tomorrow</p>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<div className="hs-dropdown ti-dropdown">
										<button aria-label="button" id="hs-dropdown-custom-icon-trigger16" type="button" className="hs-dropdown-toggle p-0 !bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0  ti-dropdown-toggle">
											<i className="ri-more-2-line ti-dropdown-icon text-white"></i>
										</button>
										<div className="hs-dropdown-menu ti-dropdown-menu" aria-labelledby="hs-dropdown-custom-icon-trigger16">
											<Link className="ti-dropdown-item" to="#">Edit</Link>
											<Link className="ti-dropdown-item" to="#">Download</Link>
											<Link className="ti-dropdown-item" to="#">Delete</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box !bg-light">
						<div className="box-body">
							<div className="flex items-center w-full">
								<div className="ltr:mr-2 rtl:ml-2">
									<img src={ALLImages('jpg69')} className="avatar rounded-full ring-0" alt="Image Description" />
								</div>
								<div className="">
									<div className="text-base font-semibold">Jacob Smith</div>
									<p className="mb-0 text-gray-500 dark:text-white/70 opacity-70 text-xs">Finished by 24,Nov</p>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<div className="hs-dropdown ti-dropdown">
										<button aria-label="button" id="hs-dropdown-custom-icon-trigger17" type="button" className="hs-dropdown-toggle p-0 !bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0  ti-dropdown-toggle">
											<i className="ri-more-2-line ti-dropdown-icon text-dark"></i>
										</button>
										<div className="hs-dropdown-menu ti-dropdown-menu" aria-labelledby="hs-dropdown-custom-icon-trigger17">
											<Link className="ti-dropdown-item" to="#">Edit</Link>
											<Link className="ti-dropdown-item" to="#">Download</Link>
											<Link className="ti-dropdown-item" to="#">Delete</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box !bg-dark text-white">
						<div className="box-body">
							<div className="flex items-center w-full">
								<div className="ltr:mr-2 rtl:ml-2">
									<img src={ALLImages('jpg72')} className="avatar rounded-full ring-0" alt="Image Description" />
								</div>
								<div className="">
									<div className="text-base font-semibold">Pope Adam</div>
									<p className="mb-0 text-white opacity-70 text-xs">Completed on 24,may</p>
								</div>
								<div className="ltr:ml-auto rtl:mr-auto">
									<div className="hs-dropdown ti-dropdown">
										<button aria-label="button" id="hs-dropdown-custom-icon-trigger" type="button" className="hs-dropdown-toggle p-0 !bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0  ti-dropdown-toggle">
											<i className="ri-more-2-line ti-dropdown-icon text-white"></i>
										</button>
										<div className="hs-dropdown-menu ti-dropdown-menu" aria-labelledby="hs-dropdown-custom-icon-trigger">
											<Link className="ti-dropdown-item" to="#">Edit</Link>
											<Link className="ti-dropdown-item" to="#">Download</Link>
											<Link className="ti-dropdown-item" to="#">Delete</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<h6 className="text-base mb-4">Colored Border box:</h6>
			<div className="grid grid-cols-12 gap-x-6">
				<div className="xxl:col-span-3 col-span-12">
					<div className="box border !border-primary">
						<div className="box-body">
							<p className="text-sm font-semibold mb-2 leading-none">Home Page Design
								<Link aria-label="anchor" to="#"><i className="ri ri-add-box-line my-auto leading-none ltr:float-right rtl:float-left text-primary text-lg font-normal"></i></Link>
							</p>
							<div className="mb-6 space-x-1 rtl:space-x-reverse">
								<span className="badge m-0 py-1 rounded-md bg-primary/10 text-primary">Framework</span>
								<span className="badge m-0 py-1 rounded-md bg-secondary/10 text-secondary">Angular</span>
								<span className="badge m-0 py-1 rounded-md bg-info/10 text-info">Php</span>
							</div>
							<div className="flex -space-x-2 rtl:space-x-reverse">
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg57')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg60')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg58')} alt="Image Description" />
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box border !border-secondary">
						<div className="box-body">
							<p className="text-sm font-semibold mb-2 leading-none">Landing Page Design
								<Link aria-label="anchor" to="#"><i className="ri ri-add-box-line my-auto leading-none ltr:float-right rtl:float-left text-secondary text-lg font-normal"></i></Link>
							</p>
							<div className="mb-6 space-x-1 rtl:space-x-reverse">
								<span className="badge m-0 py-1 rounded-md bg-danger/10 text-danger">Laravel</span>
								<span className="badge m-0 py-1 rounded-md bg-teal-500/10 text-teal-500">Codeignitor</span>
								<span className="badge m-0 py-1 rounded-md bg-success/10 text-success">Php</span>
							</div>
							<div className="flex -space-x-2 rtl:space-x-reverse">
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg57')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg60')} alt="Image Description" />
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box border !border-warning">
						<div className="box-body">
							<p className="text-sm font-semibold mb-2 leading-none">Update New Project
								<Link aria-label="anchor" to="#"><i className="ri ri-add-box-line my-auto leading-none ltr:float-right rtl:float-left text-warning text-lg font-normal"></i></Link>
							</p>
							<div className="mb-6 space-x-1 rtl:space-x-reverse">
								<span className="badge m-0 py-1 rounded-md bg-warning/10 text-warning">Laravel</span>
								<span className="badge m-0 py-1 rounded-md bg-secondary/10 text-secondary">Codeignitor</span>
								<span className="badge m-0 py-1 rounded-md bg-info/10 text-info">Php</span>
							</div>
							<div className="flex -space-x-2 rtl:space-x-reverse">
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg57')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg60')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg68')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg66')} alt="Image Description" />
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box border !border-info">
						<div className="box-body">
							<p className="text-sm font-semibold mb-2 leading-none">New Project Discussion
								<Link aria-label="anchor" to="#"><i className="ri ri-add-box-line my-auto leading-none ltr:float-right rtl:float-left text-info text-lg font-normal"></i></Link>
							</p>
							<div className="mb-6 space-x-1 rtl:space-x-reverse">
								<span className="badge m-0 py-1 rounded-md bg-info/10 text-info">React</span>
								<span className="badge m-0 py-1 rounded-md bg-primary/10 text-primary">Typescript</span>
							</div>
							<div className="flex -space-x-2 rtl:space-x-reverse">
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg57')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg60')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg68')} alt="Image Description" />
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box border !border-danger">
						<div className="box-body">
							<p className="text-sm font-semibold mb-2 leading-none">Recent Projects Testing
								<Link aria-label="anchor" to="#"><i className="ri ri-add-box-line my-auto leading-none ltr:float-right rtl:float-left text-danger text-lg font-normal"></i></Link>
							</p>
							<div className="mb-6 space-x-1 rtl:space-x-reverse">
								<span className="badge m-0 py-1 rounded-md bg-primary/10 text-primary">Ui</span>
								<span className="badge m-0 py-1 rounded-md bg-secondary/10 text-secondary">Angular</span>
								<span className="badge m-0 py-1 rounded-md bg-info/10 text-info">Java</span>
							</div>
							<div className="flex -space-x-2 rtl:space-x-reverse">
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg57')} alt="Image Description" />
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box border !border-success">
						<div className="box-body">
							<p className="text-sm font-semibold mb-2 leading-none">About Us Page redesign
								<Link aria-label="anchor" to="#"><i className="ri ri-add-box-line my-auto leading-none ltr:float-right rtl:float-left text-success text-lg font-normal"></i></Link>
							</p>
							<div className="mb-6 space-x-1 rtl:space-x-reverse">
								<span className="badge m-0 py-1 rounded-md bg-danger/10 text-danger">Html</span>
								<span className="badge m-0 py-1 rounded-md bg-warning/10 text-warning">Symphony</span>
								<span className="badge m-0 py-1 rounded-md bg-success/10 text-success">Php</span>
							</div>
							<div className="flex -space-x-2 rtl:space-x-reverse">
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg62')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg65')} alt="Image Description" />
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box border border-gray-200 dark:border-white/10">
						<div className="box-body">
							<p className="text-sm font-semibold mb-2 leading-none">New Employees
								<Link aria-label="anchor" to="#"><i className="ri ri-add-box-line my-auto leading-none ltr:float-right rtl:float-left dark:text-white text-lg font-normal"></i></Link>
							</p>
							<div className="mb-6 space-x-1 rtl:space-x-reverse">
								<span className="badge m-0 py-1 rounded-md bg-warning/10 text-warning">Html</span>
								<span className="badge m-0 py-1 rounded-md bg-info/10 text-info">Cake Php</span>
								<span className="badge m-0 py-1 rounded-md bg-success/10 text-success">React</span>
							</div>
							<div className="flex -space-x-2 rtl:space-x-reverse">
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg62')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg61')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg65')} alt="Image Description" />
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box border border-dark">
						<div className="box-body">
							<p className="text-sm font-semibold mb-2 leading-none">Terminated Employees
								<Link aria-label="anchor" to="#"><i className="ri ri-add-box-line my-auto leading-none ltr:float-right rtl:float-left text-dark dark:text-white text-lg font-normal"></i></Link>
							</p>
							<div className="mb-6">
								<span className="badge m-0 py-1 rounded-md bg-primary/10 text-primary">Angular</span>
							</div>
							<div className="flex -space-x-2 rtl:space-x-reverse">
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg62')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg61')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg65')} alt="Image Description" />
								<img className="avatar avatar-xs rounded-full" src={ALLImages('jpg71')} alt="Image Description" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<h6 className="text-base mb-4">Box Groups With Footer:</h6>
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="grid border rounded-sm shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x dark:border-gray-700 dark:shadow-black/[0.05]">
						<div className="mb-0 box rounded-none border-0 rtl:border-l flex flex-col flex-[1_0_0%]">
							<img className="w-full h-auto rounded-t-sm ltr:sm:rounded-tr-none rtl:sm:rounded-tl-none" src={ALLImages('jpg43')} alt="Image Description" />
							<div className="box-body flex-1">
								<h6 className="box-title fw-semibold">Delecious food is a blessing!</h6>
								<p className="text-[0.813rem]">This is a wider box with supporting text below as
									a
									natural lead-in to additional content. This content is a little bit
									longer.</p>
							</div>
							<div className="box-footer">
								<small className="text-gray-500 dark:text-white/70">Last updated 3 mins ago</small>
							</div>
						</div>
						<div className="mb-0 box rounded-none border-0 flex flex-col flex-[1_0_0%]">
							<img className="w-full h-auto" src={ALLImages('jpg44')} alt="Image Description" />
							<div className="box-body flex-1">
								<h6 className="box-title fw-semibold">Is office the best place to earn knowledge?</h6>
								<p className="text-[0.813rem]">This box has supporting text below as a natural lead-in to additional content.</p>
							</div>
							<div className="box-footer">
								<small className="text-gray-500 dark:text-white/70">Last updated 3 mins ago</small>
							</div>
						</div>
						<div className="mb-0 box rounded-none border-0 rtl:border-l-0 flex flex-col flex-[1_0_0%]">
							<img className="w-full h-auto ltr:sm:rounded-tr-sm rtl:sm:rounded-tl-sm" src={ALLImages('jpg45')} alt="Image Description" />
							<div className="box-body flex-1">
								<h6 className="box-title fw-semibold">Writing is an art.</h6>
								<p className="text-[0.813rem]">This is a wider box with supporting text below as a natural lead-in to additional content. This box has even longer content than the first to show that equal height action.</p>
							</div>
							<div className="box-footer">
								<small className="text-gray-500 dark:text-white/70">Last updated 3 mins ago</small>
							</div>
						</div>
					</div>
				</div>
			</div>

			<h6 className="text-base my-4">Box With Link:</h6>
			<div className="grid grid-cols-12 gap-x-6">
				<div className="xxl:col-span-3 col-span-12">
					<div className="box">
						<Link aria-label="anchor" to="#" className="box-anchor"></Link>
						<img src={ALLImages('jpg22')} className="box-img-top rounded-t-sm" alt="..." />
						<div className="box-body">
							<h6 className="text-base box-title font-semibold mb-0">Forests are Awesome.</h6>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-6 col-span-12">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-span-12">
							<div className="box !bg-primary text-white">
								<Link aria-label="anchor" to="#" className="box-anchor"></Link>
								<div className="box-body">
									<blockquote className="blockquote mb-0 text-center">
										<h6>The best and most beautiful things in the world cannot be seen or even touched — they
											must be felt with the heart..</h6>
										<footer className="blockquote-footer mt-3 text-sm text-white opacity-70">Someone famous as <cite
											title="Source Title">-Helen Keller</cite></footer>
									</blockquote>
								</div>
							</div>
						</div>
						<div className="xxl:col-span-5 col-span-12">
							<div className="box">
								<Link aria-label="anchor" to="#" className="box-anchor"></Link>
								<div className="box-body">
									<div className="flex items-center">
										<div className="ltr:mr-3 rtl:ml-3">
											<img src={ALLImages('jpg71')} className="avatar avatar-sm rounded-md" alt="Image Description" />
										</div>
										<div>
											<p className="text-[0.813rem] mb-0 text-sm font-semibold">Atharva Simon.</p>
											<div className="box-title text-gray-500 dark:text-white/70 text-xs mb-0">Correspondent
												Professor</div>
										</div>
									</div>
								</div>
							</div>
							<div className="box border !border-info">
								<Link aria-label="anchor" to="#" className="box-anchor"></Link>
								<div className="box-body">
									<div className="flex items-center">
										<div className="ltr:mr-3 rtl:ml-3">
											<img src={ALLImages('jpg64')} className="avatar avatar-lg  rounded-md" alt="Image Description" />
										</div>
										<div>
											<p className="text-[0.813rem] text-info mb-1 text-sm font-semibold">Alicia Keys.</p>
											<div className="box-title text-xs mb-1">Department Of Commerce</div>
											<div className="box-title text-gray-500 dark:text-white/70 text-xs mb-0">24 Years, Female
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="xxl:col-span-7 col-span-12">
							<div className="box">
								<Link aria-label="anchor" to="#" className="box-anchor"></Link>
								<div className="grid grid-cols-12 gap-0">
									<div className="col-span-12 md:col-span-8">
										<div className="box-body">
											<h6 className="text-base box-title mb-2 font-semibold">Fox is Beautiful ?</h6>
											<p className="text-[0.813rem] text-sm mb-0">This is a wild animal with supporting tactics and are
												very efficient at kill,they are very Dangerous.</p>
											<p className="mb-0 text-[0.813rem]">
												Fox lives mainly in forests and are well known for their hunting skills.
											</p>
										</div>
										<div className="box-footer">
											<p className="text-[0.813rem]"><small className="text-gray-500 dark:text-white/70">Last updated 3 mins
												ago</small></p>
										</div>
									</div>
									<div className="col-span-12 md:col-span-4">
										<img src={ALLImages('jpg42')} className="img-fluid ltr:rounded-r-sm rtl:rounded-l-sm h-full" alt="..." />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xxl:col-span-3 col-span-12">
					<div className="box">
						<Link aria-label="anchor" to="#" className="box-anchor"></Link>
						<img src={ALLImages('jpg46')} className="box-img-top rounded-t-sm" alt="..." />
						<div className="box-body">
							<h6 className="text-base box-title font-semibold">Most tropical areas are suitable</h6>
							<p className="text-[0.813rem]"> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
								anything embarrassing hidden in the middle of text.</p>
						</div>
					</div>
				</div>
			</div>

			<h6 className="text-base mb-4">Grid box:</h6>
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="grid md:grid-cols-4 grid-cols-1 gap-x-6">
						<div className="box">
							<img src={ALLImages('jpg47')} className="box-img-top rounded-t-sm" alt="..." />
							<div className="box-body">
								<h6 className="text-base box-title font-semibold">Morphology of a typical fruit.</h6>
								<p className="text-[0.813rem]"> If you are going to use a passage of Lorem Ipsum, you need to be sure there
									isn't anything embarrassing hidden in the middle of text.</p>
							</div>
						</div>
						<div className="box">
							<img src={ALLImages('jpg48')} className="box-img-top rounded-t-sm" alt="..." />
							<div className="box-body">
								<h6 className="text-base box-title font-semibold">Research improves ability &amp; agility !</h6>
								<p className="text-[0.813rem]"> If you are going to use a passage of Lorem Ipsum, you need to be sure there
									isn't anything embarrassing hidden in the middle of text.</p>
							</div>
						</div>
						<div className="box">
							<img src={ALLImages('jpg49')} className="box-img-top rounded-t-sm" alt="..." />
							<div className="box-body">
								<h6 className="text-base box-title font-semibold">Most tropical areas are suitable</h6>
								<p className="text-[0.813rem]"> If you are going to use a passage of Lorem Ipsum, you need to be sure there
									isn't anything embarrassing hidden in the middle of text.</p>
							</div>
						</div>
						<div className="box">
							<img src={ALLImages('jpg50')} className="box-img-top rounded-t-sm" alt="..." />
							<div className="box-body">
								<h6 className="text-base box-title font-semibold">Are They seasonal fruits ?</h6>
								<p className="text-[0.813rem]"> If you are going to use a passage of Lorem Ipsum, you need to be sure there
									isn't anything embarrassing hidden in the middle of text.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
export default Cards;
