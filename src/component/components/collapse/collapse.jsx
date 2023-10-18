import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Collapse = () => {
	return (
		<div>
         <PageHeader currentpage="Collapse" activepage="Components" mainpage="Collapse" />

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Collapse</h5>
						</div>
						<div className="box-body">
							<button type="button"
								className="hs-collapse-toggle py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10"
								id="hs-basic-collapse" data-hs-collapse="#hs-basic-collapse-heading">
                                    Collapse
							</button>
							<div id="hs-basic-collapse-heading"
								className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
								aria-labelledby="hs-basic-collapse">
								<div className="mt-5">
									<p className="text-gray-500 dark:text-white/70">
                                            This is a collapse body. It is hidden by default, until the collapse plugin
                                            adds the appropriate classes that we use to style each element. These
                                            classes control the overall appearance, as well as the showing and hiding
                                            via CSS transitions.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Show/Hide</h5>
						</div>
						<div className="box-body">
							<p className="text-gray-500 dark:text-white/70">
                                Preline UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework.
							</p>
							<p className="mt-2">
								<Link className="hs-collapse-toggle inline-flex items-center gap-x-2 text-primary" to="#" id="hs-show-hide-collapse" data-hs-collapse="#hs-show-hide-collapse-heading">
									<span className="hs-collapse-open:hidden">Read more</span>
									<span className="hs-collapse-open:block hidden">Read less</span>
									<svg className="hs-collapse-open:rotate-180 w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
									</svg>
								</Link>
							</p>
							<div id="hs-show-hide-collapse-heading" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-show-hide-collapse">
								<p className="text-gray-500 dark:text-white/70 mt-5">
                                    This is a collapse body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
export default Collapse;
