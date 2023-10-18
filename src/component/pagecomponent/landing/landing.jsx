import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import ALLImages from "../../../common/imagesData";
import { SpacebetweenSwiper } from "./landingpagecarousel";
import CountUp from "react-countup";
import Navbar1 from "./navbar";
import { connect } from "react-redux"
import {ThemeChanger} from "../../../redux/Action"
import store from "../../../redux/store";

const Landing = ({local_varaiable,ThemeChanger}) => {

	useEffect(() => {
		function handleResize() {
		  if (window.innerWidth <= 992) {
			const theme = store.getState()
			ThemeChanger({...theme,"toggled":"close","dataNavLayout":"horizontal"})
		  } else {
			const theme = store.getState()
			ThemeChanger({...theme,"toggled":"open","dataNavLayout":"horizontal"})
		  }
		}
	  
		handleResize(); // Initial check
	  
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	  }, []);

	  function toggleNavigation () {
		if (window.innerWidth <= 992) {
			const theme = store.getState()
			ThemeChanger({...theme,"toggled":"open","dataNavLayout":"horizontal"})
		  }
	  }
	  
	  function handleClick() {
		const theme = store.getState()
		ThemeChanger({...theme,"toggled":"close","dataNavLayout":"horizontal"})
	  }
	  

	return (
		<div>
			<div className="landing-alert2 bg-secondary text-white fixed z-[100] w-full top-auto bottom-0">
				<div className="container mx-auto">
					<div id="dismiss-alert2"
						className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 alert mb-0" role="alert">
						<div className="flex">
							<div className="flex-shrink-0">
								<svg className="h-4 w-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
									viewBox="0 0 16 16">
									<path
										d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
									</path>
								</svg>
							</div>
							<div className="ltr:ml-3 rtl:mr-3">
								<div className="text-sm font-medium">
									Check Our Latest Projects <Link to="#" className="font-semibold">here</Link> !
								</div>
							</div>
							<div className="ltr:pl-3 rtl:pr-3 ltr:ml-auto rtl:mr-auto">
								<div className="mx-1 my-auto">
									<button type="button" className="inline-flexrounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0"
										data-hs-remove-element="#dismiss-alert2">
										<span className="sr-only">Dismiss</span>
										<svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none"
											xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
											<path
												d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
												fill="currentColor"></path>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="landing-page-wrapper relative">

				<header className="header custom-sticky !top-0 !w-full lg:hidden">
					<nav className="main-header" aria-label="Global">
						<div className="header-content justify-between">
							<div className="header-left">
								<div className="">
									<button type="button" className="sidebar-toggle" onClick={()=>toggleNavigation()}>
										<span className="sr-only">Toggle Navigation</span>
										<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-headerprime" viewBox="0 0 24 24">
											<path d="M24 0v24H0V0h24z" fill="none" opacity=".87"></path>
											<path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"></path>
										</svg>
									</button>
								</div>
							</div>
							<div className="header-center">
								<div className="responsive-logo my-auto">
									<Link className="responsive-logo-light" to={`${import.meta.env.BASE_URL}dashboards/sales/`} aria-label="Brand"><img
										src={ALLImages('logo')} alt="logo" className="mx-auto" /></Link>
									<Link className="responsive-logo-dark" to={`${import.meta.env.BASE_URL}dashboards/sales/`} aria-label="Brand"><img
										src={ALLImages('logo')} alt="logo" className="mx-auto" /></Link>
								</div>
							</div>
							<div className="header-right ltr:!ml-0 rtl:!mr-0">
								<button aria-label="button" type="button" className="hs-collapse-toggle ti-btn ti-btn-ghost-light m-0 py-1"
									id="headercollapse" data-hs-collapse="#headercollapse-heading">
									<i className="ri-more-2-line text-base"></i>
								</button>
								<div id="headercollapse-heading"
									className="hs-collapse w-full overflow-hidden transition-[height] duration-300 hidden absolute top-[4.45rem] inset-x-0 p-5 bg-white dark:bg-bgdark"
									aria-labelledby="headercollapse">
									<div className="flex space-x-3 rtl:space-x-reverse">
										<Link to={`${import.meta.env.BASE_URL}Authentication/signup/basic/`} className="ti-btn w-[6.375rem] ti-btn-dark m-0 p-2">Sign
											Up</Link>
										<Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="ti-btn w-[6.375rem] m-0 p-2 ti-btn-primary">Get Started</Link>
										<Link aria-label="anchor" to="#" className="ti-btn m-0 p-2 px-3 ti-btn-secondary"
											data-hs-overlay="#hs-overlay-switcher"><i className="ri-settings-2-line animate-spin">
											</i></Link>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</header>

				<aside className="app-sidebar" id="sidebar">
					<div className="container mx-auto lg:p-6 !p-0">

						<div className="main-sidebar">

							<nav className="main-menu-container nav nav-pills flex-column sub-open">
								<div className="landing-logo-container my-auto hidden lg:block">
									<div className="responsive-logo">
										<Link className="responsive-logo-light" to={`${import.meta.env.BASE_URL}dashboards/sales/`} aria-label="Brand"><img
											src={ALLImages('logo')} alt="logo" className="mx-auto" /></Link>
										<Link className="responsive-logo-dark" to={`${import.meta.env.BASE_URL}dashboards/sales/`} aria-label="Brand"><img
											src={ALLImages('dark')} alt="logo" className="mx-auto" /></Link>
									</div>
								</div>
								<div className="slide-left" id="slide-left">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
										<path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
									</svg>
								</div>
								<Navbar1 />
								<div className="slide-right" id="slide-right">
									<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
										<path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
									</svg>
								</div>
								<div className="lg:flex hidden space-x-2 rtl:space-x-reverse">
									<Link to={`${import.meta.env.BASE_URL}Authentication/signup/basic/`} className="ti-btn w-[6.375rem] ti-btn-dark m-0 p-2">Sign
										Up</Link>
									<Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="ti-btn w-[6.375rem] m-0 p-2 ti-btn-primary">Get Started</Link>
									<Link aria-label="anchor" to="#" className="ti-btn m-0 p-2 px-3 ti-btn-secondary"
										data-hs-overlay="#hs-overlay-switcher"><i className="ri-settings-2-line animate-spin"></i></Link>
								</div>
							</nav>


						</div>

					</div>
				</aside>


				<div className="main-content landing-main !p-0" onClick={handleClick}>


					<div className="landing-wrapper" id="home">
						<div className="container lg:pt-40 lg:pb-24 pt-28 pb-12 relative z-10 mx-auto">
							<div className="grid grid-cols-12 lg:gap-0 gap-6">
								<div className="col-span-12 xxl:col-span-7 my-auto">
									<div className="landing-content">
										<div className="space-y-6">
											<h1 className="leading-tight text-5xl font-semibold">Start Building Today With <span
												className="text-secondary">Synto...!</span></h1>
											<p className="text-lg  text-white/70 font-medium">Lorem ipsum dolor sit amet
												consectetur, adipisicing elit. Fuga
												aspernatur
												labore animi eum consequatur enim, quia delectus architecto, quasi rem molestiae autem cumque
												recusandae
												ratione saepe quo magni ea eligendi.Fuga aspernaturlabore animi eum consequatur enim, quia delectus
												architecto,
												quasi rem molestiae autem cumque recusandae
												ratione saepe quo magni ea eligendi.</p>
										</div>
										<div className="mt-10 sm:flex justify-start sm:space-x-2 sm:space-y-0 space-y-2 rtl:space-x-reverse">
											<Link to="#" className="py-3 px-3 ti-btn m-0 ti-btn-secondary">
												See How it Works <i className="ri-arrow-right-line rtl:rotate-180"></i>
											</Link>
											<Link to="#" className="py-3 px-3 ti-btn m-0 ti-btn-danger">
												Discover More <i className="ri-arrow-right-line rtl:rotate-180"></i>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-span-12 xxl:col-span-5">
									<img alt="landing-banner" src={ALLImages('landingbanner')} className="ltr:ml-auto rtl:mr-auto" />
								</div>
							</div>
						</div>
					</div>

					<div className="" id="services">
						<div className="section container mx-auto space-y-6">
							<div className="text-center max-w-[80rem] mx-auto mb-12">
								<h2
									className="justify-center section-title text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
									<span className="px-3">Our
										Services</span>
								</h2>
								<p className="text-center text-gray-500 dark:text-white/70 text-base mt-4">Lorem ipsum dolor sit, amet
									consectetur adipisicing
									elit. Pariatur quam saepe enim maxime! Eligendi quas itaque voluptatibus, aspernatur illo, natus cumque
									odio, molestiae obcaecati ducimus sit ratione recusandae perferendis culpa?</p>
							</div>
							<div className="grid md:grid-cols-2 lg:!grid-cols-4 gap-6">
								<div className="box landing-service text-center mb-0">
									<div className="box-body">
										<div className="landing-service-img mb-4 avatar avatar-lg rounded-full bg-primary p-3">
											<svg xmlns="http://www.w3.org/2000/svg" className="fill-transparent stroke-white" fill="none"
												viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round"
													d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
											</svg>
										</div>
										<div>
											<h3 className="text-gray-800 dark:text-white text-xl font-semibold my-auto mb-2">Design Quality</h3>
											<p className="text-gray-500 dark:text-white/70 text-base">Lorem ipsum dolor sit, amet consectetur
												adipisicing
												elit. Pariatur quam saepe enim maxime!</p>
										</div>
									</div>
								</div>
								<div className="box landing-service text-center mb-0">
									<div className="box-body">
										<div className="landing-service-img mb-4 avatar avatar-lg rounded-full bg-primary p-3">
											<svg xmlns="http://www.w3.org/2000/svg" className="fill-transparent stroke-white" fill="none"
												viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round"
													d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
											</svg>
										</div>
										<div className="">
											<h3 className="text-gray-800 dark:text-white text-xl font-semibold my-auto mb-2">Customization</h3>
											<p className="text-gray-500 dark:text-white/70 text-base">Lorem ipsum dolor sit, amet consectetur
												adipisicing
												elit. Pariatur quam saepe enim maxime! </p>
										</div>
									</div>
								</div>
								<div className="box landing-service text-center mb-0">
									<div className="box-body">
										<div className="landing-service-img mb-4 avatar avatar-lg rounded-full bg-primary p-3">
											<svg xmlns="http://www.w3.org/2000/svg" className="fill-transparent stroke-white" fill="none"
												viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round"
													d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
											</svg>
										</div>
										<div className="">
											<h3 className="text-gray-800 dark:text-white text-xl font-semibold my-auto mb-2">Documentation</h3>
											<p className="text-gray-500 dark:text-white/70 text-base">Lorem ipsum dolor sit, amet consectetur
												adipisicing
												elit. Pariatur quam saepe enim maxime!</p>
										</div>
									</div>
								</div>
								<div className="box landing-service text-center mb-0">
									<div className="box-body">
										<div className="landing-service-img mb-4 avatar avatar-lg rounded-full bg-primary p-3">
											<svg xmlns="http://www.w3.org/2000/svg" className="fill-transparent stroke-white" fill="none"
												viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round"
													d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
											</svg>
										</div>
										<div className="">
											<h3 className="text-gray-800 dark:text-white text-xl font-semibold my-auto mb-2">Regular Updates</h3>
											<p className="text-gray-500 dark:text-white/70 text-base">Lorem ipsum dolor sit, amet consectetur
												adipisicing
												elit. Pariatur quam saepe enim maxime! </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white dark:bg-bgdark" id="about">
						<div className="section container mx-auto">
							<div className="grid lg:grid-cols-2 gap-6">
								<div className="relative bg-gradient-radial from-gray-100 to-white dark:from-black/20 dark:to-bgdark">
									<div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
										<img src={ALLImages('png65')}
											className="mx-auto h-80 w-96 rounded-t-sm object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
											alt="" />
									</div>
								</div>
								<div className="my-auto">
									<div className="space-y-2">
										<h2
											className="section-title text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
											<span className="">Mobile Responsive View</span>
										</h2>
										<h5 className="font-medium text-2xl text-gray-800 dark:text-white">We Help to Build Your Dream Project.</h5>
										<h6 className="font-normal text-base">Meet our team who are experts in Web designing and Development.</h6>
										<p className="text-base text-gray-500 dark:text-white/70">
											It is a long established fact that a reader will be distracted by the readable content of a page
											when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
											distribution of letters, as opposed to using 'Content here, content here', making it look like
											readable English. .
										</p>
										<p className="text-base text-gray-500 dark:text-white/70">
											There are many variations of passages of Lorem Ipsum available, but the majority have suffered
											alteration in some form, by injected humour, or randomised words which don't look even slightly
											believable. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
											structures, to generate Lorem Ipsum which looks reasonable.
										</p>
									</div>
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/aboutus/`} className="py-2 px-3 ti-btn m-0 ti-btn-primary mt-6">
										Read More <i className="ri-arrow-right-line rtl:rotate-180"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="" id="our-mission">
						<div className="section container mx-auto">
							<div className="grid lg:grid-cols-2 gap-6">
								<div className="my-auto">
									<div className="space-y-2">
										<h2
											className="section-title text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
											<span className="">Responsive Template</span>
										</h2>
										<div className="space-y-3">
											<p className="text-base text-gray-500 dark:text-white/70">
												It is a long established fact that a reader will be distracted by the readable content of a page
												when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
												distribution of letters, as opposed to using 'Content here, content here', making it look like
												readable English. .
											</p>
										</div>
										<div className="space-y-3">
											<p className="text-base text-gray-500 dark:text-white/70">
												There are many variations of passages of Lorem Ipsum available, but the majority have suffered
												alteration in some form, by injected humour, or randomised words which don't look even slightly
												believable. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
												structures, to generate Lorem Ipsum which looks reasonable.
											</p>
										</div>
									</div>
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/aboutus/`} className="py-2 px-3 ti-btn m-0 ti-btn-primary mt-6">
										Read More <i className="ri-arrow-right-line rtl:rotate-180"></i>
									</Link>
								</div>
								<div className="relative bg-gradient-radial from-white to-gray-100 dark:from-bgdark dark:to-black/20">
									<div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
										<img src={ALLImages('png67')}
											className="mx-auto h-80 w-96 rounded-t-sm border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
											alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						className="section flex relative bg-[url('../img/landing/1.jpg')] bg-cover before:bg-primary/90 before:absolute before:w-full before:h-full before:top-0 before:inset-x-0">
						<div className="container mx-auto z-[0] text-center">
							<h2 className="section-title text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl justify-center">We
								Design and Develop For your business.</h2>
							<p className="w-2/3 mx-auto my-6 text-base text-white/70">We develop modern concepts to design and develop the
								interface design,
								web
								development to deliver them with eye-catching innovative ideas. We believe in effective, efficient and
								timely solutions for various types of businesses. Our team develops a long-term strategy to bring out spark
								conversation with clients, and visibility to your company.</p>
							<Link to={`${import.meta.env.BASE_URL}pagecomponent/Contactus/`} className="ti-btn m-0 py-3 px-6 ti-btn-danger">Contact Us</Link>
						</div>
					</div>

					<div className="bg-white dark:bg-bgdark" id="features">
						<div className="section container mx-auto space-y-6">
							<div className="text-center max-w-[80rem] mx-auto mb-12">
								<h2
									className="justify-center section-title text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
									<span className="px-3">Synto Advanced
										Features</span>
								</h2>
								<p className="text-center text-gray-500 dark:text-white/70 text-base mt-4">Most advanced features in Synto along
									with only
									javascript dependability and zeo jquery boosts the performance of your project.</p>
							</div>
							<div className="grid md:grid-cols-2 lg:!grid-cols-4">
								<div className="box mb-0 border-0 rounded-none shadow-none !bg-transparent">
									<div className="box-body">
										<div className="mb-3 space-y-3">
											<div
												className="p-2 w-14 h-14 ltr:mr-3 rtl:ml-3 inline-flex items-center justify-center rounded-sm flex-shrink-0">
												<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
													id="award">
													<circle cx="12" cy="9.25" r="6" fill="#b7bbc0"></circle>
													<path fill="#9399a1"
														d="m19.574 17.013-2.565-4.453-.01.004A5.992 5.992 0 0 1 12 15.25c-.129 0-.254-.011-.381-.02l.39.67 2.374 4.112a.5.5 0 0 0 .862.006L16.57 17.8l2.579-.038a.5.5 0 0 0 .426-.75z">
													</path>
													<path fill="#4b5563"
														d="M11.619 15.23a5.99 5.99 0 0 1-4.62-2.668l-2.564 4.45a.5.5 0 0 0 .426.75l2.579.038 1.324 2.218a.5.5 0 0 0 .862-.006L12 15.9l.004-.007-.385-.662z">
													</path>
												</svg>
											</div>
											<h2 className="text-gray-800 dark:text-white text-xl font-semibold my-auto mb-2">Quality &amp; Clean Code
											</h2>
										</div>
										<div className="flex-grow">
											<p className="mb-3 text-base text-gray-500 dark:text-white/70">In Synto code is maintained very cLearn and
												well-structured &amp; Properly Commented.</p>
											<Link className="p-0 font-semibold text-primary text-sm flex" to="#">
												Learn More<i
													className="ri ri-arrow-right-line rtl:rotate-180 ltr:ml-3 rtl:mr-3 leading-none my-auto"></i>
											</Link>
										</div>
									</div>
								</div>
								<div className="box mb-0 border-0 rounded-none shadow-none !bg-transparent">
									<div className="box-body">
										<div className="mb-3 space-y-3">
											<div
												className="p-2 w-14 h-14 ltr:mr-3 rtl:ml-3 inline-flex items-center justify-center rounded-sm flex-shrink-0">
												<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
													id="layer-group">
													<path fill="#b7bbc0"
														d="M12,14.19531c-0.17551-0.00004-0.34793-0.04618-0.5-0.13379l-9-5.19726C2.02161,8.58794,1.85779,7.97612,2.13411,7.49773C2.22187,7.34579,2.34806,7.2196,2.5,7.13184l9-5.19336c0.30964-0.17774,0.69036-0.17774,1,0l9,5.19336c0.4784,0.27632,0.64221,0.88814,0.36589,1.36653C21.77813,8.65031,21.65194,8.7765,21.5,8.86426l-9,5.19726C12.34793,14.14913,12.17551,14.19527,12,14.19531z">
													</path>
													<path fill="#9399a1"
														d="M21.5,11.13184l-1.96411-1.13337L12.5,14.06152c-0.30947,0.17839-0.69053,0.17839-1,0L4.46411,9.99847L2.5,11.13184c-0.47839,0.27632-0.64221,0.88814-0.36589,1.36653C2.22187,12.65031,2.34806,12.7765,2.5,12.86426l9,5.19726c0.30947,0.17838,0.69053,0.17838,1,0l9-5.19726c0.4784-0.27632,0.64221-0.88814,0.36589-1.36653C21.77813,11.34579,21.65194,11.2196,21.5,11.13184z">
													</path>
													<path fill="#4b5563"
														d="M21.5,15.13184l-1.96411-1.13337L12.5,18.06152c-0.30947,0.17838-0.69053,0.17838-1,0l-7.03589-4.06305L2.5,15.13184c-0.47839,0.27632-0.64221,0.88814-0.36589,1.36653C2.22187,16.65031,2.34806,16.7765,2.5,16.86426l9,5.19726c0.30947,0.17838,0.69053,0.17838,1,0l9-5.19726c0.4784-0.27632,0.64221-0.88814,0.36589-1.36653C21.77813,15.34579,21.65194,15.2196,21.5,15.13184z">
													</path>
												</svg>
											</div>
											<h2 className="text-gray-800 dark:text-white text-xl font-semibold my-auto mb-2">Multiple Demos</h2>
										</div>
										<div className="flex-grow">
											<p className=" mb-3 text-base text-gray-500 dark:text-white/70">We included multiple demos to give a quick
												overview of our Synto admin template.. </p>
											<Link className="p-0 font-semibold text-primary text-sm flex" to="#">
												Learn More<i
													className="ri ri-arrow-right-line rtl:rotate-180 ltr:ml-3 rtl:mr-3 leading-none my-auto"></i>
											</Link>
										</div>
									</div>
								</div>
								<div className="box mb-0 border-0 rounded-none shadow-none !bg-transparent">
									<div className="box-body">
										<div className="mb-3 space-y-3">
											<div
												className="p-2 w-14 h-14 ltr:mr-3 rtl:ml-3 inline-flex items-center justify-center rounded-sm flex-shrink-0">
												<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
													id="calculator">
													<path fill="#b7bbc0"
														d="M16 11H8a1 1 0 0 1-1-.999V6a1 1 0 0 1 .999-1H16a1 1 0 0 1 1 .999V10a1 1 0 0 1-.999 1H16z">
													</path>
													<path fill="#9399a1"
														d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 4v4a1 1 0 0 1-.999 1H8a1 1 0 0 1-1-.999V6a1 1 0 0 1 .999-1H16a1 1 0 0 1 1 .999V6z">
													</path>
													<circle cx="8" cy="14" r="1" fill="#4b5563"></circle>
													<circle cx="8" cy="18" r="1" fill="#4b5563"></circle>
													<circle cx="12" cy="18" r="1" fill="#4b5563"></circle>
													<circle cx="16" cy="18" r="1" fill="#4b5563"></circle>
													<circle cx="16" cy="14" r="1" fill="#4b5563"></circle>
													<circle cx="12" cy="14" r="1" fill="#4b5563"></circle>
												</svg>
											</div>
											<h2 className="text-gray-800 dark:text-white text-xl font-semibold my-auto mb-2">Tailwind Framework</h2>
										</div>
										<div className="flex-grow">
											<p className=" mb-3 text-base text-gray-500 dark:text-white/70">Thanks to the Tailwind framework, because
												it
												gives us the ability to create responsive designs. </p>
											<Link className="p-0 font-semibold text-primary text-sm flex" to="#">
												Learn More<i
													className="ri ri-arrow-right-line rtl:rotate-180 ltr:ml-3 rtl:mr-3 leading-none my-auto"></i>
											</Link>
										</div>
									</div>
								</div>
								<div className="box mb-0 border-0 rounded-none shadow-none !bg-transparent">
									<div className="box-body">
										<div className="mb-3 space-y-3">
											<div
												className="p-2 w-14 h-14 ltr:mr-3 rtl:ml-3 inline-flex items-center justify-center rounded-sm flex-shrink-0">
												<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
													id="processor">
													<path fill="#4b5563"
														d="M8 5h1V3c0-.55231-.44769-1-1-1S7 2.44769 7 3v2.18463C7.31421 5.07269 7.64746 5.00037 8 5zM3 9h2V8c.00037-.35254.07269-.68579.18463-1H3C2.44769 7 2 7.44769 2 8S2.44769 9 3 9zM16 5c.35254.00037.68579.07269 1 .18463V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v2H16zM19 8v1h2c.55231 0 1-.44769 1-1s-.44769-1-1-1h-2.18463C18.92731 7.31421 18.99963 7.64746 19 8zM3 13h2v-2H3c-.55231 0-1 .44769-1 1S2.44769 13 3 13zM13 5V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v2H13zM8 19c-.35254-.00037-.68579-.07269-1-.18463V21c0 .00018 0 .00037 0 .00055C7.00012 21.55267 7.44788 22.00012 8 22c.00018 0 .00037 0 .00055 0C8.55267 21.99988 9.00012 21.55212 9 21v-2H8zM21 15h-2v1c-.00037.35254-.07269.68579-.18463 1H21c.55231 0 1-.44769 1-1S21.55231 15 21 15zM5 16v-1H3c-.55231 0-1 .44769-1 1s.44769 1 1 1h2.18463C5.07269 16.68579 5.00037 16.35254 5 16zM21 11h-2v2h2c.55231 0 1-.44769 1-1S21.55231 11 21 11zM16 19h-1v2c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-2.18463C16.68579 18.92731 16.35254 18.99963 16 19zM11 19v2c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-2H11z">
													</path>
													<path fill="#b7bbc0"
														d="M14,15h-4c-0.55214,0.00014-0.99986-0.44734-1-0.99948C9,14.00035,9,14.00017,9,14v-4C8.99986,9.44786,9.44734,9.00014,9.99948,9C9.99965,9,9.99983,9,10,9h4c0.55214-0.00014,0.99986,0.44734,1,0.99948C15,9.99965,15,9.99983,15,10v4c0.00014,0.55214-0.44734,0.99986-0.99948,1C14.00035,15,14.00017,15,14,15z">
													</path>
													<path fill="#9399a1"
														d="M16,5H8C6.34387,5.00183,5.00183,6.34387,5,8v8c0.00183,1.65613,1.34387,2.99817,3,3h8c1.65613-0.00183,2.99817-1.34387,3-3V8C18.99817,6.34387,17.65613,5.00183,16,5z M15,10v4c0.00012,0.55212-0.44733,0.99988-0.99945,1C14.00037,15,14.00018,15,14,15h-4c-0.55212,0.00012-0.99988-0.44733-1-0.99945C9,14.00037,9,14.00018,9,14v-4C8.99988,9.44788,9.44733,9.00012,9.99945,9C9.99963,9,9.99982,9,10,9h4c0.55212-0.00012,0.99988,0.44733,1,0.99945C15,9.99963,15,9.99982,15,10z">
													</path>
												</svg>
											</div>
											<h2 className="text-gray-800 dark:text-white text-xl font-semibold my-auto mb-2">2 types of Icons</h2>
										</div>
										<div className="flex-grow">
											<p className=" mb-3 text-base text-gray-500 dark:text-white/70">More than 2 types of best Icons are
												included
												in this template to enhance design standards. </p>
											<Link className="p-0 font-semibold text-primary text-sm flex" to="#">
												Learn More<i
													className="ri ri-arrow-right-line rtl:rotate-180 ltr:ml-3 rtl:mr-3 leading-none my-auto"></i>
											</Link>
										</div>
									</div>
								</div>
								<div className="box mb-0 border-0 rounded-none shadow-none !bg-transparent">
									<div className="box-body">
										<div className="mb-3 space-y-3">
											<div
												className="p-2 w-14 h-14 ltr:mr-3 rtl:ml-3 inline-flex items-center justify-center rounded-sm flex-shrink-0">
												<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
													id="newspaper">
													<path fill="#b7bbc0"
														d="M8.444 3.111a2 2 0 0 0-2 2v13.556a2.222 2.222 0 0 1-2.222 2.222h14.445A3.333 3.333 0 0 0 22 17.556V5.11a2 2 0 0 0-2-2H8.444z">
													</path>
													<path fill="#9399a1"
														d="M6.444 18.667V7.556H4a2 2 0 0 0-2 2v9.333a2 2 0 0 0 2 2h.222a2.222 2.222 0 0 0 2.222-2.222z">
													</path>
													<path fill="#4b5563"
														d="M17 9h-6a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2zm0 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm-5 0h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm5 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm-5 0h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2z">
													</path>
												</svg>
											</div>
											<h2 className="text-gray-800 dark:text-white text-xl font-semibold my-auto mb-2">Advanced Pages</h2>
										</div>
										<div className="flex-grow">
											<p className=" mb-3 text-base text-gray-500 dark:text-white/70">More advanced pages are included in this
												template for easy development adn customization. </p>
											<Link className="p-0 font-semibold text-primary text-sm flex" to="#">
												Learn More<i
													className="ri ri-arrow-right-line rtl:rotate-180 ltr:ml-3 rtl:mr-3 leading-none my-auto"></i>
											</Link>
										</div>
									</div>
								</div>
								<div className="box mb-0 border-0 rounded-none shadow-none !bg-transparent">
									<div className="box-body">
										<div className="mb-3 space-y-3">
											<div
												className="p-2 w-14 h-14 ltr:mr-3 rtl:ml-3 inline-flex items-center justify-center rounded-sm flex-shrink-0">
												<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
													id="coins">
													<path fill="#4b5563" d="M5 4h6a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4z"></path>
													<path fill="#9399a1" d="M5 8h6a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4z"></path>
													<path fill="#4b5563" d="M5 12h6a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4z"></path>
													<path fill="#9399a1" d="M5 16h6a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4z"></path>
													<path fill="#4b5563"
														d="M19 16h-6a1.98 1.98 0 0 0-1 .277 1.984 1.984 0 0 1 0 3.446c.303.18.648.275 1 .277h6a2 2 0 1 0 0-4z">
													</path>
													<path fill="#9399a1"
														d="M19 12h-6a1.98 1.98 0 0 0-1 .277 1.984 1.984 0 0 1 0 3.446c.303.18.648.275 1 .277h6a2 2 0 1 0 0-4z">
													</path>
													<path fill="#4b5563"
														d="M19 8h-6a1.98 1.98 0 0 0-1 .277 1.984 1.984 0 0 1 0 3.446c.303.18.648.275 1 .277h6a2 2 0 1 0 0-4z">
													</path>
												</svg>
											</div>
											<h2 className="text-gray-800 dark:text-white text-xl font-semibold my-auto mb-2">Built for developers</h2>
										</div>
										<div className="flex-grow">
											<p className=" mb-3 text-base text-gray-500 dark:text-white/70">Variables, elements, documentation, and
												reusability are additional features.</p>
											<Link className="p-0 font-semibold text-primary text-sm flex" to="#">
												Learn More<i
													className="ri ri-arrow-right-line rtl:rotate-180 ltr:ml-3 rtl:mr-3 leading-none my-auto"></i>
											</Link>
										</div>
									</div>
								</div>
								<div className="box mb-0 border-0 rounded-none shadow-none !bg-transparent">
									<div className="box-body">
										<div className="mb-3 space-y-3">
											<div
												className="p-2 w-14 h-14 ltr:mr-3 rtl:ml-3 inline-flex items-center justify-center rounded-sm flex-shrink-0">
												<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
													id="server-alt">
													<path fill="#9399a1"
														d="M18,9H6C4.89543,9,4,8.10457,4,7V5c0-1.10457,0.89543-2,2-2h12c1.10457,0,2,0.89543,2,2v2C20,8.10457,19.10457,9,18,9z">
													</path>
													<path fill="#b7bbc0"
														d="M18,15H6c-1.10457,0-2-0.89543-2-2v-2c0-1.10457,0.89543-2,2-2h12c1.10457,0,2,0.89543,2,2v2C20,14.10457,19.10457,15,18,15z">
													</path>
													<path fill="#9399a1"
														d="M18,21H6c-1.10457,0-2-0.89543-2-2v-2c0-1.10457,0.89543-2,2-2h12c1.10457,0,2,0.89543,2,2v2C20,20.10457,19.10457,21,18,21z">
													</path>
													<circle cx="8" cy="6" r="1" fill="#4b5563"></circle>
													<circle cx="8" cy="12" r="1" fill="#4b5563"></circle>
													<circle cx="8" cy="18" r="1" fill="#4b5563"></circle>
												</svg>
											</div>
											<h2 className="text-gray-800 dark:text-white text-xl font-semibold my-auto mb-2">Documentation</h2>
										</div>
										<div className="flex-grow">
											<p className=" mb-3 text-base text-gray-500 dark:text-white/70">The documentation provides clear-cut
												material for the Synto admin template user can understand .</p>
											<Link className="p-0 font-semibold text-primary text-sm flex" to="#">
												Learn More<i
													className="ri ri-arrow-right-line rtl:rotate-180 ltr:ml-3 rtl:mr-3 leading-none my-auto"></i>
											</Link>
										</div>
									</div>
								</div>
								<div className="box mb-0 border-0 rounded-none shadow-none !bg-transparent">
									<div className="box-body">
										<div className="mb-3 space-y-3">
											<div
												className="p-2 w-14 h-14 ltr:mr-3 rtl:ml-3 inline-flex items-center justify-center rounded-sm flex-shrink-0">
												<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
													id="chart-pie">
													<path fill="#b7bbc0" d="M12 12V2c5.523 0 10 4.477 10 10H12z"></path>
													<path fill="#9399a1" d="m12 12 5 8.66A10.01 10.01 0 0 0 22 12H12z"></path>
													<path fill="#4b5563"
														d="M17 20.66 12 12V2c-5.523.002-9.999 4.48-9.997 10.003.002 5.523 4.48 9.999 10.004 9.997A10 10 0 0 0 17 20.662l.003-.005-.004.003z">
													</path>
												</svg>
											</div>
											<h2 className="text-gray-800 dark:text-white text-xl font-semibold my-auto mb-2">5 Types Of Charts</h2>
										</div>
										<div className="flex-grow">
											<p className=" mb-3 text-base text-gray-500 dark:text-white/70">We included five (5) types of the best
												possible chart options for your project..</p>
											<Link className="p-0 font-semibold text-primary text-sm flex" to="#">
												Learn More<i
													className="ri ri-arrow-right-line rtl:rotate-180 ltr:ml-3 rtl:mr-3 leading-none my-auto"></i>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div id="statistics"
						className="section flex relative bg-[url('../img/landing/1.jpg')] bg-cover before:bg-primary/90 before:absolute before:w-full before:h-full before:top-0 before:inset-x-0">
						<div className="container  mx-auto z-[0]">
							<div className="text-center max-w-[80rem] mx-auto mb-12">
								<h2 className="section-title text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl justify-center">
									<span className="px-3">Why Does
										People Love US ...!!</span>
								</h2>
								<p className="w-2/3 mx-auto my-4 text-base text-white/70">We are proud to have top class clients and
									customers,which motivates us to work more on projects.</p>
							</div>
							<div className="grid lg:grid-cols-4 gap-0  rounded-sm">
								<div className="">
									<div className="text-center space-y-3 p-4">
										<p className="text-4xl text-white mb-0 font-bold"><span className="count-up" data-count="137"><CountUp
											end={137}
											start={0}
											duration={4.94}
										/></span>+</p>
										<span className="text-lg font-semibold text-white/70">Total Projects</span>
									</div>
								</div>
								<div className="">
									<div className="text-center space-y-3 p-4">
										<p className=" text-4xl text-white mb-0 font-bold"><span className="count-up" data-count="200">
											<CountUp
												end={200}
												start={0}
												duration={4.94}
											/>
										</span>+</p>
										<span className="text-lg font-semibold text-white/70">Profesional Team</span>
									</div>
								</div>
								<div className="">
									<div className="text-center space-y-3 p-4">
										<p className=" text-4xl text-white mb-0 font-bold"><span className="count-up" data-count="1000">
											<CountUp
												end={1000}
												start={0}
												duration={4.94}
											/>
										</span>+</p>
										<span className="text-lg font-semibold text-white/70">Happy Customers</span>
									</div>
								</div>
								<div className="">
									<div className="text-center space-y-3 p-4">
										<p className=" text-4xl text-white mb-0 font-bold"><span className="count-up" data-count="5">5</span>+</p>
										<span className="text-lg font-semibold text-white/70">Years of Experience</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="" id="testimonials">
						<div className="section container mx-auto">
							<div className="text-center max-w-[80rem] mx-auto mb-12">
								<h2
									className="justify-center section-title text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
									<span className="px-3">What Our
										Clients Say ...!</span>
								</h2>
								<p className="text-center text-gray-500 dark:text-white/70 text-base mt-4">Lorem ipsum dolor sit, amet
									consectetur adipisicing
									elit. Pariatur quam saepe enim maxime! Eligendi quas itaque voluptatibus, aspernatur illo, natus cumque
									odio, molestiae obcaecati ducimus sit ratione recusandae perferendis culpa?</p>
							</div>
							<div className="swiper testimonials-swipe mb-6">
								<div className="swiper-wrapper">
								<SpacebetweenSwiper />
								</div>
							</div>

							<div className="swiper-pagination !relative !bottom-0"></div>
						</div>
					</div>

					<div className="bg-white dark:bg-bgdark" id="pricing">
						<div className="section container mx-auto">
							<div className="grid grid-cols-12 gap-6">
								<div className="col-span-12 lg:col-span-4 my-auto">
									<div className="space-y-3 my-auto">
										<h2
											className="section-title text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl mb-2">
											<span className="">Pricing
												Plans</span>
										</h2>
										<h6 className="font-medium text-xl mb-2">To Get All Access Select A plan</h6>
										<p className="text-base text-gray-500 dark:text-white/70">
											It is a long established fact that a reader will be distracted by the readable content of a page
											when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
											distribution of letters .
										</p>
										<Link className="ti-btn ti-btn-primary mt-3" to="#">Read More<i
											className="ri ri-arrow-right-s-line rtl:rotate-180"></i></Link>
									</div>
								</div>
								<div className="col-span-12 lg:col-span-8">
									<div className="grid grid-cols-12 gap-6 max-w-6xl mx-auto">
										<div className="lg:col-span-4 col-span-12">
											<div className="shadow border dark:border-white/10 rounded-sm ">
												<div className="p-6">
													<h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Basic</h3>
													<p className="text-gray-500 dark:text-white/70 text-xs">Sed duo rebum et et dolores sed amet rebum
														magna. Et sea elitr.</p>
													<div className="flex mt-4 items-baseline">
														<span className="ltr:mr-2 rtl:ml-2 text-5xl font-semibold text-gray-800 dark:text-white">$10</span>
														<span className="text-gray-500 dark:text-white/70 font-normal"> / Month</span>
													</div>
												</div>
												<div className="p-6 border-y border-gray-200 dark:border-white/10">
													<h6 className="font-medium text-base mb-4">What's Included</h6>
													<ul className="p-0 space-y-3">
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">2 Free Domain Name</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">3 One-Click Apps</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">1 Databases</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">24/7 support</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">Premium support: <span
																className="ltr:ml-2 rtl:mr-2 font-semibold text-black dark:text-white">3 Months</span></span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">Free Updates: <span
																className="ltr:ml-2 rtl:mr-2 font-semibold text-black dark:text-white">3 Months</span></span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-forbid-line text-danger text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">Money BackGuarantee</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-forbid-line text-danger text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">Unlimited Users</span>
														</li>
													</ul>
												</div>
												<div className="p-6 text-center">
													<button type="button" className="ti-btn w-full ti-btn-primary m-0">Get Started</button>
												</div>
											</div>
										</div>
										<div className="lg:col-span-4 col-span-12">
											<div className="shadow border dark:border-white/10 rounded-sm ">
												<div className="p-6">
													<h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Standard</h3>
													<p className="text-gray-500 dark:text-white/70 text-xs">Sed duo rebum et et dolores sed amet rebum
														magna. Et sea elitr.</p>
													<div className="flex mt-4 items-baseline">
														<span className="ltr:mr-2 rtl:ml-2 text-5xl font-semibold text-gray-800 dark:text-white">$25</span>
														<span className="text-gray-500 dark:text-white/70 font-normal"> / Month</span>
													</div>
												</div>
												<div className="p-6 border-y border-gray-200 dark:border-white/10">
													<h6 className="font-medium text-base mb-4">What's Included</h6>
													<ul className="p-0 space-y-3">
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">2 Free Domain Name</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">3 One-Click Apps</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">1 Databases</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">24/7 support</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">Premium support: <span
																className="ltr:ml-2 rtl:mr-2 font-semibold text-black dark:text-white">12 Months</span></span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">Free Updates: <span
																className="ltr:ml-2 rtl:mr-2 font-semibold text-black dark:text-white">12 Months</span></span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-forbid-line text-danger text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">Money BackGuarantee</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-forbid-line text-danger text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">Unlimited Users</span>
														</li>
													</ul>
												</div>
												<div className="p-6 text-center">
													<button type="button" className="ti-btn w-full ti-btn-primary m-0">Get Started</button>
												</div>
											</div>
										</div>
										<div className="lg:col-span-4 col-span-12">
											<div className="shadow border dark:border-white/10 rounded-sm ">
												<div className="p-6">
													<h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Premium</h3>
													<p className="text-gray-500 dark:text-white/70 text-xs">Sed duo rebum et et dolores sed amet rebum
														magna. Et sea elitr.</p>
													<div className="flex mt-4 items-baseline">
														<span className="ltr:mr-2 rtl:ml-2 text-5xl font-semibold text-gray-800 dark:text-white">$50</span>
														<span className="text-gray-500 dark:text-white/70 font-normal"> / Month</span>
													</div>
												</div>
												<div className="p-6 border-y border-gray-200 dark:border-white/10">
													<h6 className="font-medium text-base mb-4">What's Included</h6>
													<ul className="p-0 space-y-3">
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">2 Free Domain Name</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">3 One-Click Apps</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">1 Databases</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">24/7 support</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">Premium support: <span
																className="ltr:ml-2 rtl:mr-2 font-semibold text-black dark:text-white">6 Months</span></span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">Free Updates: <span
																className="ltr:ml-2 rtl:mr-2 font-semibold text-black dark:text-white">6 Months</span></span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">Unlimited Users</span>
														</li>
														<li className="flex space-x-4 rtl:space-x-reverse">
															<i className="ri ri-checkbox-circle-line text-success text-base leading-none"></i>
															<span className="my-auto text-gray-500 dark:text-white/70">Money BackGuarantee</span>
														</li>
													</ul>
												</div>
												<div className="p-6 text-center">
													<button type="button" className="ti-btn w-full ti-btn-primary m-0">Get Started</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="" id="team">
						<div className="section container mx-auto">
							<div className="text-center max-w-[80rem] mx-auto mb-12">
								<h2
									className="justify-center section-title text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
									<span className="px-3">Master
										Brains Behind The Project..!</span>
								</h2>
								<p className="text-center text-gray-500 dark:text-white/70 text-base mt-4">Lorem ipsum dolor sit, amet
									consectetur adipisicing
									elit. Pariatur quam saepe enim maxime! Eligendi quas itaque voluptatibus, aspernatur illo, natus cumque
									odio, molestiae obcaecati ducimus sit ratione recusandae perferendis culpa?</p>
							</div>
							<div className="grid sm:grid-cols-5 lg:!grid-cols-9 gap-6">
								<div className="space-y-2 text-center">
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/team/`}>
										<img src={ALLImages('jpg57')} alt="team" className="avatar rounded-full" />
										<div className="">
											<h6 className="font-semibold text-base text-gray-800 dark:text-white">Socrat Itumay</h6>
											<p className="text-sm text-gray-500 dark:text-white/70">Founder &amp; CEO</p>
										</div>
									</Link>
								</div>
								<div className="space-y-2 text-center">
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/team/`}>
										<img src={ALLImages('jpg66')} alt="team" className="avatar rounded-full" />
										<div className="">
											<h6 className="font-semibold text-base text-gray-800 dark:text-white">Eos Tempor</h6>
											<p className="text-sm text-gray-500 dark:text-white/70">Director</p>
										</div>
									</Link>
								</div>
								<div className="space-y-2 text-center">
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/team/`}>
										<img src={ALLImages('jpg58')} alt="team" className="avatar rounded-full" />
										<div className="">
											<h6 className="font-semibold text-base text-gray-800 dark:text-white">Airi Satou</h6>
											<p className="text-sm text-gray-500 dark:text-white/70">Hr</p>
										</div>
									</Link>
								</div>
								<div className="space-y-2 text-center">
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/team/`}>
										<img src={ALLImages('jpg68')} alt="team" className="avatar rounded-full" />
										<div className="">
											<h6 className="font-semibold text-base text-gray-800 dark:text-white">Et Kasd</h6>
											<p className="text-sm text-gray-500 dark:text-white/70">Manager</p>
										</div>
									</Link>
								</div>
								<div className="space-y-2 text-center">
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/team/`}>
										<img src={ALLImages('jpg59')} alt="team" className="avatar rounded-full" />
										<div className="">
											<h6 className="font-semibold text-base text-gray-800 dark:text-white">Aderson tumay</h6>
											<p className="text-sm text-gray-500 dark:text-white/70">Team Lead</p>
										</div>
									</Link>
								</div>
								<div className="space-y-2 text-center">
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/team/`}>
										<img src={ALLImages('jpg60')} alt="team" className="avatar rounded-full" />
										<div className="">
											<h6 className="font-semibold text-base text-gray-800 dark:text-white">Samantha Paul</h6>
											<p className="text-sm text-gray-500 dark:text-white/70">Sr.Ui Developer</p>
										</div>
									</Link>
								</div>
								<div className="space-y-2 text-center">
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/team/`}>
										<img src={ALLImages('jpg71')} alt="team" className="avatar rounded-full" />
										<div className="">
											<h6 className="font-semibold text-base text-gray-800 dark:text-white">Mc Greggor</h6>
											<p className="text-sm text-gray-500 dark:text-white/70">Java Developer</p>
										</div>
									</Link>
								</div>
								<div className="space-y-2 text-center">
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/team/`}>
										<img src={ALLImages('jpg62')} alt="team" className="avatar rounded-full" />
										<div className="">
											<h6 className="font-semibold text-base text-gray-800 dark:text-white">Emiley Jackson</h6>
											<p className="text-sm text-gray-500 dark:text-white/70">Full Stacker</p>
										</div>
									</Link>
								</div>
								<div className="space-y-2 text-center">
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/team/`}>
										<img src={ALLImages('jpg63')} alt="team" className="avatar rounded-full" />
										<div className="">
											<h6 className="font-semibold text-base text-gray-800 dark:text-white">Lilly Donovan</h6>
											<p className="text-sm text-gray-500 dark:text-white/70">javascript</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white dark:bg-bgdark" id="faq">
						<div className="section container mx-auto">
							<div className="text-center max-w-[80rem] mx-auto mb-12">
								<h2
									className="justify-center section-title text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
									<span className="px-3">Frequently
										Asked Questions..!</span>
								</h2>
								<p className="text-center text-gray-500 dark:text-white/70 text-base mt-4">Lorem ipsum dolor sit, amet
									consectetur adipisicing
									elit. Pariatur quam saepe enim maxime! Eligendi quas itaque voluptatibus, aspernatur illo, natus cumque
									odio, molestiae obcaecati ducimus sit ratione recusandae perferendis culpa?</p>
							</div>
							<div className="grid lg:grid-cols-2 gap-6 max-w-[80rem] mx-auto ">
								<div>
									<div className="hs-accordion-group space-y-3">
										<div className="hs-accordion active bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
											id="faq-one">
											<button type="button"
												className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80 text-lg"
												aria-controls="faq-collapse-one">
												How To Insert All The Plugins?
												<svg
													className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
													<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
												</svg>
												<svg
													className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
												</svg>
											</button>
											<div id="faq-collapse-one"
												className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
												aria-labelledby="faq-one">
												<div className="p-5">
													<p className="text-gray-500 dark:text-white/70 text-base">
														I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
														born and I will give you a complete account of the system, and expound the actual teachings of
														the great explorer of the truth, the master-builder of human happiness. No one rejects,
														dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
														how to pursue pleasure rationally encounter consequences.
													</p>
												</div>
											</div>
										</div>
										<div className="hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
											id="faq-two">
											<button type="button"
												className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80 text-lg"
												aria-controls="faq-collapse-two">
												How Can I contact?
												<svg
													className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
													<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
												</svg>
												<svg
													className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
												</svg>
											</button>
											<div id="faq-collapse-two"
												className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
												aria-labelledby="faq-two">
												<div className="p-5">
													<p className="text-gray-500 dark:text-white/70 text-base">
														I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
														born and I will give you a complete account of the system, and expound the actual teachings of
														the great explorer of the truth, the master-builder of human happiness. No one rejects,
														dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
														how to pursue pleasure rationally encounter consequences.
													</p>
												</div>
											</div>
										</div>
										<div className="hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
											id="faq-three">
											<button type="button"
												className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80 text-lg"
												aria-controls="faq-collapse-three"> Can I use this Plugins in Another Template?
												<svg
													className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
													<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
												</svg>
												<svg
													className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
												</svg>
											</button>
											<div id="faq-collapse-three"
												className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
												aria-labelledby=" faq-three">
												<div className="p-5">
													<p className="text-gray-500 dark:text-white/70 text-base">
														I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
														born and I will give you a complete account of the system, and expound the actual teachings of
														the great explorer of the truth, the master-builder of human happiness. No one rejects,
														dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
														how to pursue pleasure rationally encounter consequences.
													</p>
												</div>
											</div>
										</div>
										<div className="hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
											id="faq-four">
											<button type="button"
												className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80 text-lg"
												aria-controls="faq-collapse-four"> Does it Easy to Customizable?
												<svg
													className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
													<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
												</svg>
												<svg
													className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
												</svg>
											</button>
											<div id="faq-collapse-four"
												className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
												aria-labelledby=" faq-four">
												<div className="p-5">
													<p className="text-gray-500 dark:text-white/70 text-base">
														I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
														born and I will give you a complete account of the system, and expound the actual teachings of
														the great explorer of the truth, the master-builder of human happiness. No one rejects,
														dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
														how to pursue pleasure rationally encounter consequences.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="hs-accordion-group space-y-3">
										<div className="hs-accordion active bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
											id="faq-five">
											<button type="button"
												className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80 text-lg"
												aria-controls="faq-collapse-five"> How Can I Add another page in Template?
												<svg
													className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
													<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
												</svg>
												<svg
													className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
												</svg>
											</button>
											<div id="faq-collapse-five"
												className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
												aria-labelledby=" faq-five">
												<div className="p-5">
													<p className="text-gray-500 dark:text-white/70 text-base">
														I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
														born and I will give you a complete account of the system, and expound the actual teachings of
														the great explorer of the truth, the master-builder of human happiness. No one rejects,
														dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
														how to pursue pleasure rationally encounter consequences.
													</p>
												</div>
											</div>
										</div>
										<div className="hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
											id="faq-six">
											<button type="button"
												className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80 text-lg"
												aria-controls="faq-collapse-six"> How can I download This template?
												<svg
													className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
													<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
												</svg>
												<svg
													className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
												</svg>
											</button>
											<div id="faq-collapse-six"
												className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
												aria-labelledby=" faq-six">
												<div className="p-5">
													<p className="text-gray-500 dark:text-white/70 text-base">
														I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
														born and I will give you a complete account of the system, and expound the actual teachings of
														the great explorer of the truth, the master-builder of human happiness. No one rejects,
														dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
														how to pursue pleasure rationally encounter consequences.
													</p>
												</div>
											</div>
										</div>
										<div className="hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
											id="faq-seven">
											<button type="button"
												className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80 text-lg"
												aria-controls="faq-collapse-seven"> How To Add additional plugins?
												<svg
													className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
													<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
												</svg>
												<svg
													className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
												</svg>
											</button>
											<div id="faq-collapse-seven"
												className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
												aria-labelledby=" faq-seven">
												<div className="p-5">
													<p className="text-gray-500 dark:text-white/70 text-base">
														I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
														born and I will give you a complete account of the system, and expound the actual teachings of
														the great explorer of the truth, the master-builder of human happiness. No one rejects,
														dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
														how to pursue pleasure rationally encounter consequences.
													</p>
												</div>
											</div>
										</div>
										<div className="hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
											id="faq-eight">
											<button type="button"
												className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80 text-lg"
												aria-controls="faq-collapse-eight">
												How To Insert All The Plugins?
												<svg
													className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
													<path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
												</svg>
												<svg
													className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
													width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2"
														strokeLinecap="round" />
												</svg>
											</button>
											<div id="faq-collapse-eight"
												className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
												aria-labelledby="faq-eight">
												<div className="p-5">
													<p className="text-gray-500 dark:text-white/70 text-base">
														I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
														born and I will give you a complete account of the system, and expound the actual teachings of
														the great explorer of the truth, the master-builder of human happiness. No one rejects,
														dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
														how to pursue pleasure rationally encounter consequences.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div className="" id="blogs">
						<div className="section container mx-auto">
							<div className="text-center max-w-[80rem] mx-auto mb-12">
								<h2
									className="justify-center section-title text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
									<span className="px-3">Latest Blog
										news</span>
								</h2>
								<p className="text-center text-gray-500 dark:text-white/70 text-base mt-4">Lorem ipsum dolor sit, amet
									consectetur adipisicing
									elit. Pariatur quam saepe enim maxime! Eligendi quas itaque voluptatibus, aspernatur illo, natus cumque
									odio, molestiae obcaecati ducimus sit ratione recusandae perferendis culpa?</p>
							</div>
							<div className="grid grid-cols-12 gap-6 max-w-[80rem] mx-auto">
								<div className="col-span-12 lg:col-span-6">
									<div className="box mb-0">
										<div className="box-body p-0">
											<div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-sm">
												<img src={ALLImages('jpg11')} className="w-full" alt="blog-img" />
												<Link to={`${import.meta.env.BASE_URL}pagecomponent/blog/blogdetails/`}>
													<div
														className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
														<div className="flex justify-start items-end h-full">
															<div className="text-white m-6">
																<h5 className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
																<p className="text-gray-500 dark:text-white/70 text-sm">Published <span
																	className="text-white">12.04.2023</span> by <span className="text-white">Mark Equel</span></p>
															</div>
														</div>
													</div>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-span-12 lg:col-span-3">
									<div className="box">
										<div className="box-body p-0">
											<div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-sm">
												<img src={ALLImages('jpg12')} className="w-full" alt="blog-img" />
												<Link to={`${import.meta.env.BASE_URL}pagecomponent/blog/blogdetails/`}>
													<div
														className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
														<div className="flex justify-start items-end h-full">
															<div className="text-white m-6">
																<h5 className="font-bold text-xl">Ui Review Presentations</h5>
																<p className="text-gray-500 dark:text-white/70 text-sm">Published <span
																	className="text-white">12.04.2023</span> by <span className="text-white">Mark Equel</span></p>
															</div>
														</div>
													</div>
												</Link>
											</div>
										</div>
									</div>
									<div className="box mb-0">
										<div className="box-body p-0">
											<div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-sm">
												<img src={ALLImages('jpg18')} className="w-full" alt="blog-img" />
												<Link to={`${import.meta.env.BASE_URL}pagecomponent/blog/blogdetails/`}>
													<div
														className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
														<div className="flex justify-start items-end h-full">
															<div className="text-white m-6">
																<h5 className="font-bold text-xl">Bussines Of Design</h5>
																<p className="text-gray-500 dark:text-white/70 text-sm">Published <span
																	className="text-white">12.04.2023</span> by <span className="text-white">Mark Equel</span></p>
															</div>
														</div>
													</div>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-span-12 lg:col-span-3">
									<div className="box">
										<div className="box-body p-0">
											<div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-sm">
												<img src={ALLImages('jpg17')} className="w-full" alt="blog-img" />
												<Link to={`${import.meta.env.BASE_URL}pagecomponent/blog/blogdetails/`}>
													<div
														className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
														<div className="flex justify-start items-end h-full">
															<div className="text-white m-6">
																<h5 className="font-bold text-xl">Study In Nature</h5>
																<p className="text-gray-500 dark:text-white/70 text-sm">Published <span
																	className="text-white">12.04.2023</span> by <span className="text-white">Mark Equel</span></p>
															</div>
														</div>
													</div>
												</Link>
											</div>
										</div>
									</div>
									<div className="box mb-0">
										<div className="box-body p-0">
											<div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-sm">
												<img src={ALLImages('jpg19')} className="w-full" alt="blog-img" />
												<Link to={`${import.meta.env.BASE_URL}pagecomponent/blog/blogdetails/`}>
													<div
														className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/50">
														<div className="flex justify-start items-end h-full">
															<div className="text-white m-6">
																<h5 className="font-bold text-xl">Stories That Matters</h5>
																<p className="text-gray-500 dark:text-white/70 text-sm">Published <span
																	className="text-white">12.04.2023</span> by <span className="text-white">Mark Equel</span></p>
															</div>
														</div>
													</div>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white dark:bg-bgdark" id="contact">
						<div className="section container mx-auto space-y-6">
							<div className="text-center max-w-[80rem] mx-auto mb-12">
								<h2
									className="justify-center section-title text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-5xl">
									<span className="px-3">Feel Free To
										Contact Us..!</span>
								</h2>
								<p className="text-center text-gray-500 dark:text-white/70 text-base mt-4">Lorem ipsum dolor sit, amet
									consectetur adipisicing
									elit. Pariatur quam saepe enim maxime! Eligendi quas itaque voluptatibus, aspernatur illo, natus cumque
									odio, molestiae obcaecati ducimus sit ratione recusandae perferendis culpa?</p>
							</div>
							<div>
								<div className="grid sm:grid-cols-2 gap-0 max-w-xl mx-auto">
									<div className="p-6">
										<div className="space-x-3 flex rtl:space-x-reverse items-center">
											<div
												className="bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary p-2 rounded-full leading-none text-center avatar avatar-sm">
												<i className="ri-smartphone-line text-lg leading-tight"></i>
											</div>
											<div>
												<h5 className="font-semibold text-base text-gray-800 dark:text-white">Phone number</h5>
												<Link to="#" className="text-sm font-normal text-gray-500 dark:text-white/70"> +
													01-234-567-252-6</Link>
											</div>
										</div>
									</div>
									<div className="p-6">
										<div className="space-x-3 flex rtl:space-x-reverse items-center">
											<div
												className="bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary p-2 rounded-full leading-none text-center avatar avatar-sm">
												<i className="ri-mail-line text-lg leading-tight"></i>
											</div>
											<div>
												<h5 className="font-semibold text-base text-gray-800 dark:text-white">Email Address</h5>
												<Link to="#" className="text-sm font-normal text-gray-500 dark:text-white/70">
													info12323@example.com</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="sm:grid lg:grid-cols-12 gap-x-5 space-y-6 sm:space-y-0">
									<div className="col-span-3">
									</div>
									<div className="col-span-6">
										<div className="box shadow-none border-0">
											<div className="box-body">
												<div className="my-auto text-center">
													<div className="space-y-4 text-start">
														<input type="text" className="col-span-9 ti-form-input" placeholder="Enter Full Name" />
														<input type="email" className="col-span-9 ti-form-input" placeholder="Enter Email Id" />
														<input type="number" className="col-span-9 ti-form-input" placeholder="Enter Phone No" />
														<textarea className="col-span-9 ti-form-input" rows="4"
															placeholder="Enter Your Messaage"></textarea>
														<Link className="ti-btn ti-btn-primary mb-0 w-full" to="#">Send Message</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-span-3">
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						className="section flex relative bg-[url('../img/landing/1.jpg')] bg-cover before:bg-primary/90 before:absolute before:w-full before:h-full before:top-0 before:inset-x-0">
						<div className="container mx-auto z-[0] text-center space-y-5">
							<h2 className="section-title text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl justify-center">Get
								Notify When Project is Updated</h2>
							<p className="w-2/3 mx-auto my-4 text-base text-white/70">We develop modern concepts to design and develop the
								interface design, web
								development to deliver them with eye-catching innovative ideas. We believe in effective, efficient and
								timely solutions for various types of businesses. Our team develops a long-term strategy to bring out spark
								conversation with clients, and visibility to your company.</p>
							<div className="max-w-md space-x-3 rtl:space-x-reverse flex justify-center mx-auto">
								<input type="email" className="ti-form-input" placeholder="Enter Your Email" />
								<Link to="#" className="ti-btn m-0 p-2 px-5 ti-btn-danger whitespace-nowrap">Notify Me</Link>
							</div>
						</div>
					</div>

					<footer className="section !pb-0 bg-bgdark">
						<div className=" border-b border-white/10 dark:border-white/10 pb-8">
							<div className="container mx-auto">
								<div className="grid grid-cols-12 gap-6">
									<div className="col-span-12 lg:col-span-4">
										<div className="space-y-4 px-4">
											<div>
												<h6 className="text-white text-lg leading-none">About</h6>
												<hr className="w-10 border-t-4 border-primary inline-block mx-auto" />
											</div>
											<img src={ALLImages('dark')} className="w-auto" alt="img" />
											<p className="text-base text-gray-400 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur
												adipisicing
												elit. Magni reprehenderit tenetur sapiente, corrupti voluptatibus numquam asperiores temporibus id
												molestiae cum voluptate nam.</p>
											<div className="flex space-x-1 rtl:space-x-reverse">
												<button aria-label="button" type="button"
													className="m-0 rounded-full p-2 ti-btn ti-btn-outline !border-0 bg-white/5 dark:bg-white/5 text-gray-400 dark:text-gray-400">
													<i className="ri ri-github-line text-lg leading-none"></i>
												</button>
												<button aria-label="button" type="button"
													className="m-0 rounded-full p-2 ti-btn ti-btn-outline !border-0 bg-white/5 dark:bg-white/5 text-gray-400 dark:text-gray-400">
													<i className="ri ri-instagram-line text-lg leading-none"></i>
												</button>
												<button aria-label="button" type="button"
													className="m-0 rounded-full p-2 ti-btn ti-btn-outline !border-0 bg-white/5 dark:bg-white/5 text-gray-400 dark:text-gray-400">
													<i className="ri ri-twitter-line text-lg leading-none"></i>
												</button>
												<button aria-label="button" type="button"
													className="m-0 rounded-full p-2 ti-btn ti-btn-outline !border-0 bg-white/5 dark:bg-white/5 text-gray-400 dark:text-gray-400">
													<i className="ri ri-linkedin-line text-lg leading-none"></i>
												</button>
												<button aria-label="button" type="button"
													className="m-0 rounded-full p-2 ti-btn ti-btn-outline !border-0 bg-white/5 dark:bg-white/5 text-gray-400 dark:text-gray-400">
													<i className="ri ri-google-line text-lg leading-none"></i>
												</button>
											</div>
										</div>
									</div>
									<div className="col-span-12 lg:col-span-4">
										<div className="grid lg:grid-cols-2 gap-6">
											<div className="space-y-3 px-4">
												<div>
													<h6 className="text-white text-lg leading-none">Our Services</h6>
													<hr className="w-10 border-t-4 border-primary inline-block mx-auto" />
												</div>
												<ul className="space-y-3 text-gray-400 dark:text-gray-400">
													<li><Link to="#">Our Team</Link></li>
													<li><Link to="#">Contact US</Link></li>
													<li><Link to="#">About</Link></li>
													<li><Link to="#">Services</Link></li>
													<li><Link to="#">Blog</Link></li>
													<li><Link to="#">Terms and Services</Link></li>
												</ul>
											</div>
											<div className="space-y-3 px-4">
												<div>
													<h6 className="text-white text-lg leading-none">Our Pages</h6>
													<hr className="w-10 border-t-4 border-primary inline-block mx-auto" />
												</div>
												<ul className="space-y-3 text-gray-400 dark:text-gray-400">
													<li><Link to="#">Email</Link></li>
													<li><Link to="#">Profile</Link></li>
													<li><Link to="#">Timeline</Link></li>
													<li><Link to="#">Projects</Link></li>
													<li><Link to="#">Contacts</Link></li>
													<li><Link to="#">Protfolio</Link></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-span-12 lg:col-span-4">
										<div className="space-y-3 px-4">
											<div>
												<h6 className="text-white text-lg leading-none">Contact Us</h6>
												<hr className="w-10 border-t-4 border-primary inline-block mx-auto" />
											</div>
											<ul className="space-y-3 text-gray-400 dark:text-gray-400">
												<li> <Link to="#" className="inline-flex"><i
													className="text-white ri-home-8-line ltr:mr-2 rtl:ml-2"></i> New
													York, Weq
													Street, NY 10012, US</Link> </li>
												<li> <Link to="#" className="inline-flex"><i
													className="text-white ri-mail-line ltr:mr-2 rtl:ml-2"></i>info12323@example.com</Link></li>
												<li> <Link to="#" className="inline-flex"><i
													className="text-white ri-phone-line ltr:mr-2 rtl:ml-2"></i> + 01
													234 567 88</Link>
												</li>
												<li> <Link to="#" className="inline-flex"><i
													className="text-white ri-printer-line ltr:mr-2 rtl:ml-2"></i> + 01
													234 567
													89</Link> </li>
												<li> <Link to="#" className="inline-flex"><i
													className="text-white ri-global-line ltr:mr-2 rtl:ml-2"></i>
													https://Synto.com/</Link> </li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
							<p className="text-center text-white">Copyright © <span id="year">2023</span> <Link to="#"
								className="text-primary"> Synto</Link>. Designed with <span className="ri ri-heart-fill text-red-500"></span> by <Link
									className="text-primary" to="#"> Spruko </Link> All rights reserved </p>
						</div>
					</footer>


				</div>


			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
  })

export default connect(mapStateToProps,{ThemeChanger})(Landing);
