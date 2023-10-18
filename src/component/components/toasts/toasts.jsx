import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Toasts = () => {
	return (
		<div>
			<PageHeader currentpage="Toast" activepage="Components" mainpage="Toast" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-9">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Toasts</h5>
						</div>
						<div className="box-body">
							<div className="lg:flex lg:space-x-3 rtl:space-x-reverse space-y-4 lg:space-y-0">
								<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
									<div className="flex p-4">
										<div className="flex-shrink-0">
											<svg className="h-4 w-4 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg"
												width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
											</svg>
										</div>
										<div className="ltr:ml-3 rtl:mr-3">
											<p className="text-sm text-gray-700 dark:text-white/70">
                                                    This is a normal message.
											</p>
										</div>
									</div>
								</div>

								<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
									<div className="flex p-4">
										<div className="flex-shrink-0">
											<svg className="h-4 w-4 text-green-500 mt-0.5"
												xmlns="http://www.w3.org/2000/svg" width="16" height="16"
												fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
											</svg>
										</div>
										<div className="ltr:ml-3 rtl:mr-3">
											<p className="text-sm text-gray-700 dark:text-white/70">
                                                    This is a success message.
											</p>
										</div>
									</div>
								</div>

								<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
									<div className="flex p-4">
										<div className="flex-shrink-0">
											<svg className="h-4 w-4 text-red-500 mt-0.5" xmlns="http://www.w3.org/2000/svg"
												width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
											</svg>
										</div>
										<div className="ltr:ml-3 rtl:mr-3">
											<p className="text-sm text-gray-700 dark:text-white/70">
                                                    This is an error message.
											</p>
										</div>
									</div>
								</div>

								<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
									<div className="flex p-4">
										<div className="flex-shrink-0">
											<svg className="h-4 w-4 text-orange-500 mt-0.5"
												xmlns="http://www.w3.org/2000/svg" width="16" height="16"
												fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
											</svg>
										</div>
										<div className="ltr:ml-3 rtl:mr-3">
											<p className="text-sm text-gray-700 dark:text-white/70">
                                                    This is a warning message.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Condensed Toasts</h5>
						</div>
						<div className="box-body">
							<div className="ti-toast hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-white  dark:bg-bgdark dark:border-white/10" role="alert">
								<div className="flex p-4">
									<p className="text-sm text-gray-700 dark:text-white/70">
                                        Your email has been sent
									</p>

									<div className="ltr:ml-auto rtl:mr-auto flex items-center space-x-3 rtl:space-x-reverse">
										<button type="button" className="inline-flex justify-center items-center gap-2 rounded-sm border-transparent font-medium text-primary hover:underline focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm">
                                          Undo
										</button>
										<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-sm dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
											<span className="sr-only">Close</span>
											<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Solid Colored Toasts</h5>
						</div>
						<div className="box-body">
							<div className="space-y-3">
								<div>
									<div className="ti-toast bg-black/20 text-sm text-white dark:bg-gray-900" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5] hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white/10 focus:ring-gray-600 transition-all text-sm dark:focus:ring-offset-white/10 dark:focus:ring-white/10">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-gray-500 text-sm text-white dark:bg-black/20" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5] hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-600 focus:ring-gray-500 transition-all text-sm dark:focus:ring-offset-white/10 dark:focus:ring-gray-500">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-red-500 text-sm text-white" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5] hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-red-800 focus:ring-red-500 transition-all text-sm dark:focus:ring-offset-red-500 dark:focus:ring-red-700">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-yellow-500 text-sm text-white" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5] hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-yellow-800 focus:ring-yellow-500 transition-all text-sm dark:focus:ring-offset-yellow-500 dark:focus:ring-yellow-700">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-green-500 text-sm text-white" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5] hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-green-800 focus:ring-green-500 transition-all text-sm dark:focus:ring-offset-green-500 dark:focus:ring-green-700">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-primary text-sm text-white" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5] hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-primary focus:ring-primary transition-all text-sm dark:focus:ring-offset-primary dark:focus:ring-primary">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-indigo-500 text-sm text-white" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5] hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-indigo-800 focus:ring-indigo-500 transition-all text-sm dark:focus:ring-offset-indigo-500 dark:focus:ring-indigo-700">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-purple-500 text-sm text-white" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5] hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-purple-800 focus:ring-purple-500 transition-all text-sm dark:focus:ring-offset-purple-500 dark:focus:ring-purple-700">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-pink-500 text-sm text-white" role="alert">
										<div className="flex p-4">
                                        Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5] hover:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-pink-800 focus:ring-pink-500 transition-all text-sm dark:focus:ring-offset-pink-500 dark:focus:ring-pink-700">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Soft Colored Toasts</h5>
						</div>
						<div className="box-body">
							<div className="space-y-3">
								<div>
									<div className="ti-toast bg-gray-100 border-gray-200 text-sm text-gray-800 shadow-md dark:bg-gray-900 dark:border-white/10 dark:text-white" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-100 focus:ring-gray-400 transition-all text-sm dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-gray-100 border-gray-200 text-sm text-gray-500 shadow-md dark:bg-black/20 dark:border-white/10 dark:text-white/70" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-100 focus:ring-gray-400 transition-all text-sm dark:hover:text-white dark:focus:ring-gray-500 dark:focus:ring-offset-white/10">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-red-500/30 border-red-200 text-sm text-red-500 shadow-md" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-red-400 hover:text-red-600 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-red-100 focus:ring-red-400 transition-all text-sm">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-yellow-500/30 border-yellow-200 text-sm text-yellow-500 shadow-md" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-yellow-400 hover:text-yellow-600 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-yellow-100 focus:ring-yellow-400 transition-all text-sm">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-green-500/30 border-green-200 text-sm text-green-500 shadow-md" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-green-400 hover:text-green-600 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-green-100 focus:ring-green-400 transition-all text-sm">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-primary/30 border-primary/30 text-sm text-primary shadow-md" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-primary hover:text-primary focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-primary focus:ring-primary transition-all text-sm">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-indigo-500/30 border-indigo-200 text-sm text-indigo-500 shadow-md" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-indigo-400 hover:text-indigo-600 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-indigo-100 focus:ring-indigo-400 transition-all text-sm">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-purple-500/30 border-purple-200 text-sm text-purple-500 shadow-md" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-purple-400 hover:text-purple-600 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-purple-100 focus:ring-purple-400 transition-all text-sm">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div>
									<div className="ti-toast bg-pink-500/30 border-pink-200 text-sm text-pink-500 shadow-md" role="alert">
										<div className="flex p-4">
                                      Hello, world! This is a toast message.

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-pink-400 hover:text-pink-600 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-pink-100 focus:ring-pink-400 transition-all text-sm">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Toast Stack</h5>
						</div>
						<div className="box-body">
							<div className="relative min-h-[15rem]">
								<div className="absolute top-0 ltr:left-0 rtl:right-0">
									<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
										<div className="p-2 sm:p-4">
											<h3 className="text-xs text-gray-800 font-semibold sm:text-base dark:text-white">
                                        Top left
											</h3>
										</div>
									</div>
								</div>

								<div className="absolute top-0 ltr:left-1/2 rtl:right-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2">
									<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
										<div className="p-2 sm:p-4">
											<h3 className="text-xs text-gray-800 font-semibold sm:text-base dark:text-white">
                                        Top center
											</h3>
										</div>
									</div>
								</div>

								<div className="absolute top-0 ltr:right-0 rtl:left-0">
									<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
										<div className="p-2 sm:p-4">
											<h3 className="text-xs text-gray-800 font-semibold sm:text-base dark:text-white">
                                        Top right
											</h3>
										</div>
									</div>
								</div>

								<div className="absolute top-1/2 ltr:left-1/2 rtl:right-1/2 transform -translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2">
									<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
										<div className="p-2 sm:p-4">
											<h3 className="text-xs text-gray-800 font-semibold sm:text-base dark:text-white">
                                        Center
											</h3>
										</div>
									</div>
								</div>

								<div className="absolute bottom-0 ltr:left-0 rtl:right-0">
									<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
										<div className="p-2 sm:p-4">
											<h3 className="text-xs text-gray-800 font-semibold sm:text-base dark:text-white">
                                        Bottom left
											</h3>
										</div>
									</div>
								</div>

								<div className="absolute bottom-0 ltr:left-1/2 rtl:right-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2">
									<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
										<div className="p-2 sm:p-4">
											<h3 className="text-xs text-gray-800 font-semibold sm:text-base dark:text-white">
                                        Bottom center
											</h3>
										</div>
									</div>
								</div>

								<div className="absolute bottom-0 ltr:right-0 rtl:left-0">
									<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
										<div className="p-2 sm:p-4">
											<h3 className="text-xs text-gray-800 font-semibold sm:text-base dark:text-white">
                                        Bottom right
											</h3>
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
									<h5 className="box-title">Toast Message with loading indicator</h5>
								</div>
								<div className="box-body">
									<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
										<div className="flex items-center p-4">
											<div className="ti-spinner w-4 h-4 text-primary" role="status" aria-label="loading">
												<span className="sr-only">Loading...</span>
											</div>
											<p className="ltr:ml-3 rtl:mr-3 text-sm text-gray-700 dark:text-white/70">
                                      Action in progress
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 lg:col-span-6">
							<div className="box">
								<div className="box-header">
									<h5 className="box-title">Toast with Dismiss button</h5>
								</div>
								<div className="box-body">
									<div id="dismiss-toast" className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
										<div className="flex p-4">
											<p className="text-sm text-gray-700 dark:text-white/70">
                                      Your email has been sent
											</p>

											<div className="ltr:ml-auto rtl:mr-auto">
												<button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white text-sm dark:focus:ring-white/10 dark:focus:ring-offset-white/10" data-hs-remove-element="#dismiss-toast">
													<span className="sr-only">Close</span>
													<svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Toast With actions</h5>
						</div>
						<div className="box-body">
							<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
								<div className="flex p-4">
									<div className="flex-shrink-0">
										<svg className="h-5 w-5 text-gray-600 mt-1 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
											<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
										</svg>
									</div>
									<div className="ltr:ml-4 rtl:mr-4">
										<h3 className="text-gray-800 font-semibold dark:text-white">
                                      App notifications
										</h3>
										<div className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                      Notifications may include alerts, sounds and icon badges.
										</div>
										<div className="mt-4">
											<div className="flex space-x-3 rtl:space-x-reverse">
												<button type="button" className="ti-btn ti-btn-primary px-2 py-1">
                                          Don't allow
												</button>
												<button type="button" className="ti-btn ti-btn-primary px-2 py-1">
                                          Allow
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Toast Stack</h5>
						</div>
						<div className="box-body">
							<div className="space-y-3">
								<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
									<div className="flex p-4">
										<div className="flex-shrink-0">
											<svg className="h-5 w-5 text-gray-600 mt-1 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
												<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
											</svg>
										</div>
										<div className="ltr:ml-4 rtl:mr-4">
											<h3 className="text-gray-800 font-semibold dark:text-white">
                                        App notifications
											</h3>
											<div className="mt-1 text-sm text-gray-600 dark:text-white/70">
                                        Notifications may include alerts, sounds and icon badges.
											</div>
											<div className="mt-4">
												<div className="flex space-x-3 rtl:space-x-reverse">
													<button type="button" className="ti-btn font-medium text-primary underline focus:ring-primary focus:ring-offset-transparent m-0 p-0">
                                            Don't allow
													</button>
													<button type="button" className="ti-btn font-medium text-primary underline focus:ring-primary focus:ring-offset-transparent m-0 p-0">
                                            Allow
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="ti-toast bg-white dark:bg-bgdark dark:border-white/10" role="alert">
									<div className="flex p-4">
										<div className="flex-shrink-0">
											<svg className="h-4 w-4 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
											</svg>
										</div>
										<div className="ltr:ml-3 rtl:mr-3">
											<p className="text-sm text-gray-700 dark:text-white/70">
                                        Successfully updated!
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
	);
};
export default Toasts;
