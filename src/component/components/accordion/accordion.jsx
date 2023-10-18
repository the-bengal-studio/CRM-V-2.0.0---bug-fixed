/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Accordion = () => {
	return (
		<div>
          <PageHeader currentpage="Accordion" activepage="Components" mainpage="Accordion" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Basic Accordion</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group">
								<div className="hs-accordion active" id="hs-basic-heading-one">
									<button className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 group py-0 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-collapse-one" type="button">
                      Accordion #1
									</button>
									<div id="hs-basic-collapse-one"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-heading-one">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion" id="hs-basic-heading-two">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 group pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-collapse-two" type="button">
                      Accordion #2
									</button>
									<div id="hs-basic-collapse-two"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-heading-two">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion" id="hs-basic-heading-three">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 group pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-collapse-three" type="button">
                      Accordion #3
									</button>
									<div id="hs-basic-collapse-three"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-heading-three">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Basic Accordion With Icon</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group" data-hs-accordion-always-open>
								<div className="hs-accordion active" id="hs-basic-always-open-heading-one">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 py-0  inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-always-open-collapse-one" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
											<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
                      Accordion #1
									</button>
									<div id="hs-basic-always-open-collapse-one"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-always-open-heading-one">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion" id="hs-basic-always-open-heading-two">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-always-open-collapse-two" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
											<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
                      Accordion #2
									</button>
									<div id="hs-basic-always-open-collapse-two"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-always-open-heading-two">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the second item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion" id="hs-basic-always-open-heading-three">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-always-open-collapse-three" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
											<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
                      Accordion #3
									</button>
									<div id="hs-basic-always-open-collapse-three"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-always-open-heading-three">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the first item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Basic Accordion with Border</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group">
								<div className="hs-accordion active bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-heading-1">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary group py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-collapse-1" type="button">
                      Accordion #1
									</button>
									<div id="hs-basic-collapse-1"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-heading-1">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-heading-2">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary group py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-collapse-2" type="button">
                      Accordion #2
									</button>
									<div id="hs-basic-collapse-2"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-heading-2">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-heading-3">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary group py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-collapse-3" type="button">
                      Accordion #3
									</button>
									<div id="hs-basic-collapse-3"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-heading-3">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Basic Accordion With Icon and Border</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group" data-hs-accordion-always-open>
								<div className="hs-accordion active bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-always-open-heading-1">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-always-open-collapse-1" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
											<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
                      Accordion #1
									</button>
									<div id="hs-basic-always-open-collapse-1"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-always-open-heading-1">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-always-open-heading-2">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-always-open-collapse-2" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
											<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
                      Accordion #2
									</button>
									<div id="hs-basic-always-open-collapse-2"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-always-open-heading-2">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the second item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-always-open-heading-3">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-always-open-collapse-3" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
											<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
                      Accordion #3
									</button>
									<div id="hs-basic-always-open-collapse-3"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-always-open-heading-3">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the first item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Accordion With Title And Arrow Stretched </h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group">
								<div className="hs-accordion active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one" type="button">
                      Accordion #1
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-basic-with-title-and-arrow-stretched-collapse-one"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-two">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 group pb-0 pt-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two" type="button">
                      Accordion #2
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-basic-with-title-and-arrow-stretched-collapse-two"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-three">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 group pb-0 pt-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three" type="button">
                      Accordion #3
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-basic-with-title-and-arrow-stretched-collapse-three"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Accordion With Arrows</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group">
								<div className="hs-accordion active" id="hs-basic-with-arrow-heading-one">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 group py-0 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-with-arrow-collapse-one" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
                      Accordion #1
									</button>
									<div id="hs-basic-with-arrow-collapse-one"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-with-arrow-heading-one">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion" id="hs-basic-with-arrow-heading-two">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 group pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-with-arrow-collapse-two" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
                      Accordion #2
									</button>
									<div id="hs-basic-with-arrow-collapse-two"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-with-arrow-heading-two">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion" id="hs-basic-with-arrow-heading-three">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 group pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-with-arrow-collapse-three" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
                      Accordion #3
									</button>
									<div id="hs-basic-with-arrow-collapse-three"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-with-arrow-heading-three">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Accordion With Title, Arrow Stretched And Border</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group">
								<div className="hs-accordion active bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-with-title-and-arrow-stretched-heading-1">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-1" type="button">
                      Accordion #1
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-basic-with-title-and-arrow-stretched-collapse-1"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-1">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-with-title-and-arrow-stretched-heading-2">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-2" type="button">
                      Accordion #2
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-basic-with-title-and-arrow-stretched-collapse-2"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-2">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-with-title-and-arrow-stretched-heading-3">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-3" type="button">
                      Accordion #3
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-basic-with-title-and-arrow-stretched-collapse-3"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-3">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Accordion With Arrows and Borders</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group">
								<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10 active" id="hs-basic-with-arrow-heading-1">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary group py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-with-arrow-collapse-1" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
                      Accordion #1
									</button>
									<div id="hs-basic-with-arrow-collapse-1"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-with-arrow-heading-1">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-with-arrow-heading-2">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary group py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-with-arrow-collapse-2" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
                      Accordion #2
									</button>
									<div id="hs-basic-with-arrow-collapse-2"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-with-arrow-heading-2">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-with-arrow-heading-3">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary group py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-with-arrow-collapse-3" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
                      Accordion #3
									</button>
									<div id="hs-basic-with-arrow-collapse-3"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-with-arrow-heading-3">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Primary Accordion</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group">
								<div className="hs-accordion active overflow-hidden bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-primary-heading-1">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-primary-collapse-1" type="button">
                      Accordion #1
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-primary-collapse-1"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-primary-heading-1">
										<p className="text-gray-800 dark:text-gray-200 py-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion overflow-hidden bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-primary-heading-2">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-primary-collapse-2" type="button">
                      Accordion #2
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-primary-collapse-2"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-primary-heading-2">
										<p className="text-gray-800 dark:text-gray-200 py-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion overflow-hidden bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-primary-heading-3">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-primary-collapse-3" type="button">
                      Accordion #3
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-primary-collapse-3"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-primary-heading-3">
										<p className="text-gray-800 dark:text-gray-200 py-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">secondary Accordion</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group">
								<div className="hs-accordion active overflow-hidden bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-secondary-heading-1">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-secondary-collapse-1" type="button">
                      Accordion #1
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-secondary-collapse-1"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-secondary-heading-1">
										<p className="text-gray-800 dark:text-gray-200 py-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion overflow-hidden bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-secondary-heading-2">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-secondary-collapse-2" type="button">
                      Accordion #2
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-secondary-collapse-2"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-secondary-heading-2">
										<p className="text-gray-800 dark:text-gray-200 py-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion overflow-hidden bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-secondary-heading-3">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-secondary-collapse-3" type="button">
                      Accordion #3
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-secondary-collapse-3"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-secondary-heading-3">
										<p className="text-gray-800 dark:text-gray-200 py-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">primary Soft Colored Accordion</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group">
								<div className="hs-accordion active overflow-hidden bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-1">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-accordion-collapse-1" type="button">
                      Accordion #1
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-accordion-collapse-1"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-accordion-heading-1">
										<p className="text-gray-800 dark:text-gray-200 py-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion overflow-hidden bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-2">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-accordion-collapse-2" type="button">
                      Accordion #2
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-accordion-collapse-2"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-accordion-heading-2">
										<p className="text-gray-800 dark:text-gray-200 py-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion overflow-hidden bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-3">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-accordion-collapse-3" type="button">
                      Accordion #3
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-accordion-collapse-3"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-accordion-heading-3">
										<p className="text-gray-800 dark:text-gray-200 py-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Soft Colored Accordion</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group">
								<div className="hs-accordion active overflow-hidden bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-1-primary">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-accordion-collapse-1-primary" type="button">
                      Accordion #1
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-accordion-collapse-1-primary"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-accordion-heading-1-primary">
										<p className="text-gray-800 dark:text-gray-200 py-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion overflow-hidden bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-2-primary">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-accordion-collapse-1-primary" type="button">
                    Accordion #2
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-accordion-collapse-2-primary"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-accordion-heading-2-primary">
										<p className="text-gray-800 dark:text-gray-200 py-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion overflow-hidden bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-3-primary">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-accordion-collapse-1-primary" type="button">
                      Accordion #3
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
												stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
										</svg>
									</button>
									<div id="hs-accordion-collapse-3-primary"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-accordion-heading-3-primary">
										<p className="text-gray-800 dark:text-gray-200 py-4 px-5">
											<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Nested Accordion</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group">
								<div className="hs-accordion active" id="hs-basic-nested-heading-one">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 py-0 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-nested-collapse-one" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
											<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
                      Accordion #1
									</button>
									<div id="hs-basic-nested-collapse-one"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-nested-heading-one">
										<div className="hs-accordion-group ltr:pl-6 rtl:pr-6">
											<div className="hs-accordion active" id="hs-basic-nested-sub-heading-one">
												<button
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 pb-0 pt-0 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="hs-basic-nested-sub-collapse-one" type="button">
													<svg
														className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
														width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
														<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
													</svg>
													<svg
														className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
														width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
													</svg>
                            Sub accordion #1
												</button>
												<div id="hs-basic-nested-sub-collapse-one"
													className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby="hs-basic-nested-sub-heading-one">
													<p className="text-gray-800 dark:text-gray-200">
														<em>This is the third item's accordion body.</em> It is hidden by default, until the
                              collapse plugin adds the appropriate classes that we use to style each element. These
                              classes control the overall appearance, as well as the showing and hiding via CSS
                              transitions.
													</p>
												</div>
											</div>

											<div className="hs-accordion" id="hs-basic-nested-sub-heading-two">
												<button
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="hs-basic-nested-sub-collapse-two" type="button">
													<svg
														className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
														width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
														<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
													</svg>
													<svg
														className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
														width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
													</svg>
                            Sub accordion #2
												</button>
												<div id="hs-basic-nested-sub-collapse-two"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby="hs-basic-nested-sub-heading-two">
													<p className="text-gray-800 dark:text-gray-200">
														<em>This is the second item's accordion body.</em> It is hidden by default, until the
                              collapse plugin adds the appropriate classes that we use to style each element. These
                              classes control the overall appearance, as well as the showing and hiding via CSS
                              transitions.
													</p>
												</div>
											</div>

											<div className="hs-accordion" id="hs-basic-nested-sub-heading-three">
												<button
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="hs-basic-nested-sub-collapse-three" type="button">
													<svg
														className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
														width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
														<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
													</svg>
													<svg
														className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
														width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
													</svg>
                            Sub accordion #3
												</button>
												<div id="hs-basic-nested-sub-collapse-three"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby="hs-basic-nested-sub-heading-three">
													<p className="text-gray-800 dark:text-gray-200">
														<em>This is the first item's accordion body.</em> It is hidden by default, until the
                              collapse plugin adds the appropriate classes that we use to style each element. These
                              classes control the overall appearance, as well as the showing and hiding via CSS
                              transitions.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="hs-accordion" id="hs-basic-nested-heading-two">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-nested-collapse-two" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
											<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
                      Accordion #2
									</button>
									<div id="hs-basic-nested-collapse-two"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-nested-heading-two">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the second item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion" id="hs-basic-nested-heading-three">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-3 pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-nested-collapse-three" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
											<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
                      Accordion #3
									</button>
									<div id="hs-basic-nested-collapse-three"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-nested-heading-three">
										<p className="text-gray-800 dark:text-gray-200">
											<em>This is the first item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Nested Accordion With Borders</h5>
						</div>
						<div className="box-body">
							<div className="hs-accordion-group">
								<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10 active" id="hs-basic-nested-heading-1">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:pb-0 py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-nested-collapse-1" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
											<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
                      Accordion #1
									</button>
									<div id="hs-basic-nested-collapse-1"
										className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-nested-heading-1">
										<div className="hs-accordion-group px-6 py-3">
											<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10 active" id="hs-basic-nested-sub-heading-1">
												<button
													className="hs-accordion-toggle hs-accordion-active:text-primary py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="hs-basic-nested-sub-collapse-1" type="button">
													<svg
														className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
														width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
														<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
													</svg>
													<svg
														className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
														width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
													</svg>
                            Sub accordion #1
												</button>
												<div id="hs-basic-nested-sub-collapse-1"
													className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby="hs-basic-nested-sub-heading-1">
													<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
														<em>This is the third item's accordion body.</em> It is hidden by default, until the
                              collapse plugin adds the appropriate classes that we use to style each element. These
                              classes control the overall appearance, as well as the showing and hiding via CSS
                              transitions.
													</p>
												</div>
											</div>

											<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-nested-sub-heading-2">
												<button
													className="hs-accordion-toggle hs-accordion-active:text-primary py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="hs-basic-nested-sub-collapse-2" type="button">
													<svg
														className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
														width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
														<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
													</svg>
													<svg
														className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
														width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
													</svg>
                            Sub accordion #2
												</button>
												<div id="hs-basic-nested-sub-collapse-2"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby="hs-basic-nested-sub-heading-2">
													<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
														<em>This is the second item's accordion body.</em> It is hidden by default, until the
                              collapse plugin adds the appropriate classes that we use to style each element. These
                              classes control the overall appearance, as well as the showing and hiding via CSS
                              transitions.
													</p>
												</div>
											</div>

											<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-nested-sub-heading-3">
												<button
													className="hs-accordion-toggle hs-accordion-active:text-primary py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="hs-basic-nested-sub-collapse-3" type="button">
													<svg
														className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
														width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
														<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
													</svg>
													<svg
														className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
														width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
															strokeLinecap="round" />
													</svg>
                            Sub accordion #3
												</button>
												<div id="hs-basic-nested-sub-collapse-3"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby="hs-basic-nested-sub-heading-3">
													<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
														<em>This is the first item's accordion body.</em> It is hidden by default, until the
                              collapse plugin adds the appropriate classes that we use to style each element. These
                              classes control the overall appearance, as well as the showing and hiding via CSS
                              transitions.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-nested-heading-2">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-nested-collapse-2" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
											<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
                      Accordion #2
									</button>
									<div id="hs-basic-nested-collapse-2"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-nested-heading-2">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the second item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
									</div>
								</div>

								<div className="hs-accordion bg-white border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-basic-nested-heading-3">
									<button
										className="hs-accordion-toggle hs-accordion-active:text-primary py-4 px-5 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
										aria-controls="hs-basic-nested-collapse-3" type="button">
										<svg
											className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
											<path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
										<svg
											className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
											width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth={2}
												strokeLinecap="round" />
										</svg>
                      Accordion #3
									</button>
									<div id="hs-basic-nested-collapse-3"
										className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
										aria-labelledby="hs-basic-nested-heading-3">
										<p className="text-gray-800 dark:text-gray-200 pb-4 px-5">
											<em>This is the first item's accordion body.</em> It is hidden by default, until the collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions.
										</p>
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
export default Accordion;
