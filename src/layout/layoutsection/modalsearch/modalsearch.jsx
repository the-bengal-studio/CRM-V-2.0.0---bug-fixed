import React from "react";
import { Link } from 'react-router-dom';

const Modalsearch = () => {

return (

	<div id="search-modal" className="hs-overlay ti-modal hidden">
		<div className="ti-modal-box">
			<div className="ti-modal-content">
				<div className="ti-modal-body">
					<div className="header-search">
						<label htmlFor="icon" className="sr-only">Search</label>
						<div className="relative">
							<div className="search-btn">
								<i className="ri ri-search-2-line search-btn-icon"></i>
							</div>
							<input id="icon" name="icon" className="py-2 ltr:pl-11 rtl:pr-11 ti-form-input focus:z-10" type="search"
								placeholder="Search" />
							<div className="voice-search">
								<i className="ri ri-mic-2-line voice-btn-icon"></i>
							</div>
							<div className="search-dropdown">
								<i className="ri ri-more-2-line search-dropdown-btn-icon"></i>
							</div>
						</div>
					</div>
					<div className="mt-5 space-x-3">
						<p className="font-semibold text-[13px] text-gray-400 dark:text-gray-200 mb-2">Are You Looking For...</p>
						<div className="badge rounded-sm bg-secondary/20 text-secondary relative header-box">
							<Link to={`${import.meta.env.BASE_URL}pagecomponent/team/`} className="w-full my-auto items-center flex space-x-2 rtl:space-x-reverse">
								<span className="inline-block text-secondary mr-1"><i className="ri ri-user-line text-sm"></i></span>
								Team
							</Link>
							<Link to="#"
								className="header-remove-btn flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-secondary hover:bg-secondary hover:text-secondary focus:outline-none focus:bg-secondary focus:text-white">
								<span className="sr-only">Remove badge</span>
								<svg className="h-4 w-4 hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
									fill="currentColor" viewBox="0 0 16 16">
									<path
										d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
									</path>
								</svg>
							</Link>
						</div>
						<div className="badge rounded-sm bg-secondary/20 text-secondary relative header-box">
							<Link to={`${import.meta.env.BASE_URL}forms/formelements/`} className="w-full my-auto items-center flex space-x-2 rtl:space-x-reverse">
								<span className="inline-block text-secondary mr-1"><i className="ri ri-file-text-line text-sm"></i></span>
								Forms
							</Link>
							<Link to="#"
								className="header-remove-btn flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-secondary hover:bg-secondary hover:text-secondary focus:outline-none focus:bg-secondary focus:text-white">
								<span className="sr-only">Remove badge</span>
								<svg className="h-4 w-4 hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
									fill="currentColor" viewBox="0 0 16 16">
									<path
										d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
									</path>
								</svg>
							</Link>
						</div>
						<div className="badge rounded-sm bg-secondary/20 text-secondary relative header-box">
							<Link to={`${import.meta.env.BASE_URL}maps/vectormap/`} className="w-full my-auto items-center flex space-x-2 rtl:space-x-reverse">
								<span className="inline-block text-secondary mr-1"><i className="ri ri-map-pin-line text-sm"></i></span>
								Maps
							</Link>
							<Link to="#"
								className="header-remove-btn flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-secondary hover:bg-secondary hover:text-secondary focus:outline-none focus:bg-secondary focus:text-white">
								<span className="sr-only">Remove badge</span>
								<svg className="h-4 w-4 hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
									fill="currentColor" viewBox="0 0 16 16">
									<path
										d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
									</path>
								</svg>
							</Link>
						</div>
						<div className="badge rounded-sm bg-secondary/20 text-secondary relative header-box">
							<Link to={`${import.meta.env.BASE_URL}widgets/`} className="w-full my-auto items-center flex space-x-2 rtl:space-x-reverse">
								<span className="inline-block text-secondary mr-1"><i className="ri ri-server-line text-sm"></i></span>
								Widgets
							</Link>
							<Link to="#"
								className="header-remove-btn flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-secondary hover:bg-secondary hover:text-secondary focus:outline-none focus:bg-secondary focus:text-white">
								<span className="sr-only">Remove badge</span>
								<svg className="h-4 w-4 hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
									fill="currentColor" viewBox="0 0 16 16">
									<path
										d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
									</path>
								</svg>
							</Link>
						</div>
					</div>
					
					<div className="mt-5">
						<p className="font-semibold text-sm text-gray-500 mb-2">Recent Search :</p>
						<div className="p-2 border dark:border-white/10 rounded-sm flex items-center text-gray-500 mb-1 relative header-box">
							<Link to={`${import.meta.env.BASE_URL}advancedUi/notification/`} className="w-full my-auto items-center flex">
								<span className="text-sm">Notifications</span>
							</Link>
							<a aria-label="anchor" href="#"
								className="ltr:ml-auto rtl:mr-auto flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 focus:outline-none header-remove-btn">
								<i className="ri-close-line"></i>
							</a>
						</div>
						<div className="p-2 border dark:border-white/10 rounded-sm flex items-center text-gray-500 mb-1 relative header-box">
							<Link to={`${import.meta.env.BASE_URL}components/alerts/`} className="w-full my-auto items-center flex">
								<span className="text-sm">Alerts</span>
							</Link>
							<a aria-label="anchor" href="#"
								className="ltr:ml-auto rtl:mr-auto flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 focus:outline-none header-remove-btn">
								<i className="ri-close-line"></i>
							</a>
						</div>
						<div className="p-2 border dark:border-white/10 rounded-sm flex items-center text-gray-500 relative header-box">
							<Link to={`${import.meta.env.BASE_URL}basicUi/tables/basictable/`} className="w-full my-auto items-center flex">
								<span className="text-sm">Tables</span>
							</Link>
							<a aria-label="anchor" href="#"
								className="ltr:ml-auto rtl:mr-auto flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 focus:outline-none header-remove-btn">
								<i className="ri-close-line"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="ti-modal-footer">
					<div className="inline-flex rounded-md shadow-sm">
						<button type="button" className="ti-btn-group py-1 ti-btn-soft-primary dark:border-white/10">
							Search
						</button>
						<button type="button" className="ti-btn-group py-1 ti-btn-primary dark:border-white/10">
							Clear Recents
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

);
};

export default Modalsearch;
