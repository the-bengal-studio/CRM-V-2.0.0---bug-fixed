import React from "react";
import ALLImages from "../../../common/imagesData";
import { Link } from "react-router-dom";

const Faqs = () => {
	return (
		<div>
				<div className= "flex relative before:bg-primary/80 before:absolute before:w-full before:h-full">
					<img src={ALLImages('png118')} alt="" className= "h-[400px] w-full rounded-sm" id="profile-img2"/>
				</div>
				<div className= "absolute top-24 bannertext-center text-center space-y-3">
					<div className= "text-white space-y-3">
						<p className= "text-xl text-white/70">FAQ's</p>
						<h1 className= "text-4xl sm:text-5xl font-bold "> Frequently Asked Questions</h1>
						<p className= "text-sm text-white/50">How Can We Help You ...!</p>
					</div>
					<Link to={`${import.meta.env.BASE_URL}pagecomponent/Contactus/`} className= "ti-btn ti-btn-secondary">
						<i className= "ri-phone-line"></i> Contact Us
					</Link>
				</div>

				<div className= "main-content mt-12">
					<div className= "grid grid-cols-12 gap-6" >
						<div className= "col-span-12 lg:col-span-3">
							<div className= "box">
								<div className= "box-body p-0">
									<nav className= "flex flex-col space-y-3 p-4" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
										<Link to="#" id="faq-item-1" data-hs-tab="#faq-1" aria-controls="faq-1" role="tab"
											className="w-full hs-tab-active:border-secondary hs-tab-active:text-white hs-tab-active:bg-secondary dark:hs-tab-active:border-secondary dark:hs-tab-active:text-white dark:hs-tab-active:bg-secondary text-base leading-none rounded-sm p-3 bg-gray-100 dark:bg-black/20 active">
              General Faq's
										</Link>
										<Link to="#" id="faq-item-2" data-hs-tab="#faq-2" aria-controls="faq-2" role="tab"
											className="w-full hs-tab-active:border-secondary hs-tab-active:text-white hs-tab-active:bg-secondary dark:hs-tab-active:border-secondary dark:hs-tab-active:text-white dark:hs-tab-active:bg-secondary text-base leading-none rounded-sm p-3 bg-gray-100 dark:bg-black/20">
                Basic Faq's
										</Link>
										<Link to="#" id="faq-item-3" data-hs-tab="#faq-3" aria-controls="faq-3" role="tab"
											className="w-full hs-tab-active:border-secondary hs-tab-active:text-white hs-tab-active:bg-secondary dark:hs-tab-active:border-secondary dark:hs-tab-active:text-white dark:hs-tab-active:bg-secondary text-base leading-none rounded-sm p-3 bg-gray-100 dark:bg-black/20">
                Common Faq's
										</Link>
										<Link to="#" id="faq-item-4" data-hs-tab="#faq-4" aria-controls="faq-4" role="tab"
											className="w-full hs-tab-active:border-secondary hs-tab-active:text-white hs-tab-active:bg-secondary dark:hs-tab-active:border-secondary dark:hs-tab-active:text-white dark:hs-tab-active:bg-secondary text-base leading-none rounded-sm p-3 bg-gray-100 dark:bg-black/20">
                Advanced Faq's
										</Link>
									</nav>
									<div className= "p-4 space-y-3 border-t border-gray-200 dark:border-white/10">
										<textarea className= "ti-form-input" rows="4" placeholder="Drop Your Question Here...."></textarea>
										<button type="submit" className= "w-full ti-btn ti-btn-primary">Submit</button>
									</div>
								</div>
							</div>
						</div>
						<div className= "col-span-12 lg:col-span-9">
							<div className= "box">
								<div className= "box-body">
									<div id="faq-1" role="tabpanel" aria-labelledby="faq-item-1">
										<div className= "hs-accordion-group space-y-3">

											<div className= "hs-accordion active bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-one">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-one">
                    How To Insert All The Plugins?
													<svg className= "hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
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
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>
											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-two">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
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
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>
											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-three">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
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
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-four">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-four">  Does it Easy to Customizable?
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
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-five">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-five">   How Can I Add another page in Template?
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
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-five">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-six">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-six">    How can I download This template?
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
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-seven">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-seven">    How To Add additional plugins?
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
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

										</div>
									</div>
									<div className= "hidden" id="faq-2" role="tabpanel" aria-labelledby="faq-item-2">
										<div className= "hs-accordion-group space-y-3">

											<div className= "hs-accordion active bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-21">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-21">
                    How To Insert All The Plugins?
													<svg className= "hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
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
												<div id="faq-collapse-21"
													className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby="faq-21">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>
											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-22">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-22">
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
												<div id="faq-collapse-22"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby="faq-22">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>
											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-23">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-23"> Can I use this Plugins in Another Template?
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
												<div id="faq-collapse-23"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-23">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-24">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-24">  Does it Easy to Customizable?
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
												<div id="faq-collapse-24"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-24">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-25">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-25">   How Can I Add another page in Template?
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
												<div id="faq-collapse-25"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-25">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-26">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-26">    How can I download This template?
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
												<div id="faq-collapse-26"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-26">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-27">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-27">    How To Add additional plugins?
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
												<div id="faq-collapse-27"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-27">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

										</div>
									</div>
									<div className= "hidden" id="faq-3" role="tabpanel" aria-labelledby="faq-item-3">
										<div className= "hs-accordion-group space-y-3">

											<div className= "hs-accordion active bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-31">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-31">
                    How To Insert All The Plugins?
													<svg className= "hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
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
												<div id="faq-collapse-31"
													className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby="faq-31">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>
											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-32">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-32">
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
												<div id="faq-collapse-32"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby="faq-32">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>
											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-33">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-33"> Can I use this Plugins in Another Template?
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
												<div id="faq-collapse-33"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-33">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-34">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-34">  Does it Easy to Customizable?
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
												<div id="faq-collapse-34"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-34">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-35">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-35">   How Can I Add another page in Template?
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
												<div id="faq-collapse-35"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-35">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-36">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-36">    How can I download This template?
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
												<div id="faq-collapse-36"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-36">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-37">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-37">    How To Add additional plugins?
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
												<div id="faq-collapse-37"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-37">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

										</div>
									</div>
									<div className= "hidden" id="faq-4" role="tabpanel" aria-labelledby="faq-item-4">
										<div className= "hs-accordion-group space-y-3">

											<div className= "hs-accordion active bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-41">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-41">
                    How To Insert All The Plugins?
													<svg className= "hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-white/70"
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
												<div id="faq-collapse-41"
													className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby="faq-41">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>
											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-42">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-42">
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
												<div id="faq-collapse-42"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby="faq-42">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>
											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-43">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-43"> Can I use this Plugins in Another Template?
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
												<div id="faq-collapse-43"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-43">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-44">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-44">  Does it Easy to Customizable?
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
												<div id="faq-collapse-44"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-44">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-45">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-45">   How Can I Add another page in Template?
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
												<div id="faq-collapse-45"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-45">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-46">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-46">    How can I download This template?
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
												<div id="faq-collapse-46"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-46">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>

											</div>

											<div className= "hs-accordion bg-white border -mt-px rounded-sm dark:bg-bgdark dark:border-white/10"
												id="faq-47">
												<button type="button"
													className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:border-b hs-accordion-active:border-gray-200 dark:hs-accordion-active:border-white/10 justify-between inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
													aria-controls="faq-collapse-47">    How To Add additional plugins?
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
												<div id="faq-collapse-47"
													className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
													aria-labelledby=" faq-47">
													<div className= "p-5">
														<p className= "text-gray-800 dark:text-gray-200">
                        I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences.
														</p>
													</div>
												</div>
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
export default Faqs;
