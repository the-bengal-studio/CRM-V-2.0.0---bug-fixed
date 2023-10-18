import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Spinners = () => {
	return (
		<div>
			<PageHeader currentpage="Spinners" activepage="Components" mainpage="Spinners" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Spinner</h5>
						</div>
						<div className="box-body">
							<div className="ti-spinner text-primary" role="status" aria-label="loading">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Spinner Sizes</h5>
						</div>
						<div className="box-body">
							<div className="space-x-6 rtl:space-x-reverse">
								<div className="ti-spinner w-4 h-4 text-primary" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner text-primary" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner w-8 h-8 text-primary" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Color variants Spinner</h5>
						</div>
						<div className="box-body">
							<div className="space-x-6 rtl:space-x-reverse">
								<div className="ti-spinner text-primary" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								<div className="ti-spinner text-secondary" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								<div className="ti-spinner text-warning" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								<div className="ti-spinner text-danger" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								<div className="ti-spinner text-success" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								<div className="ti-spinner text-info" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								<div className="ti-spinner text-gray-800 dark:text-white" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner text-gray-400" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner text-green-600" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner text-indigo-600" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner text-purple-600" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner text-pink-600" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner text-orange-600" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Growing Spinner</h5>
						</div>
						<div className="box-body">
							<div className="ti-spinner bg-primary animate-ping border-transparent " role="status"
								aria-label="loading">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Growing Spinner Sizes</h5>
						</div>
						<div className="box-body">
							<div className="space-x-6 rtl:space-x-reverse space-y-4">
								<div className="ti-spinner w-4 h-4 bg-primary animate-ping border-transparent "
									role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner bg-primary animate-ping border-transparent " role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner w-8 h-8 bg-primary animate-ping border-transparent "
									role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Colored Growing Spinner</h5>
						</div>
						<div className="box-body">
							<div className="space-x-6 space-y-4 rtl:space-x-reverse">
								<div className="ti-spinner animate-ping border-transparent  bg-primary" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								<div className="ti-spinner animate-ping border-transparent  bg-secondary" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								<div className="ti-spinner animate-ping border-transparent  bg-warning" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								<div className="ti-spinner animate-ping border-transparent  bg-danger" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								<div className="ti-spinner animate-ping border-transparent  bg-success" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								<div className="ti-spinner animate-ping border-transparent  bg-info" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								<div className="ti-spinner animate-ping border-transparent  bg-black/20 dark:animate-ping "
									role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner animate-ping border-transparent  bg-gray-400" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner animate-ping border-transparent  bg-green-600" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner animate-ping border-transparent  bg-indigo-600" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner animate-ping border-transparent  bg-purple-600" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner animate-ping border-transparent  bg-pink-600" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>

								<div className="ti-spinner animate-ping border-transparent  bg-orange-600" role="status"
									aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Loading Buttons</h5>
						</div>
						<div className="box-body">
							<div className="space-x-2">
								<button type="button" className="ti-btn ti-btn-disabled ti-btn-primary" disabled>
									<span className="ti-spinner text-white" role="status" aria-label="loading">
										<span className="sr-only">Loading...</span>
									</span>
								</button>
								<button type="button" className="ti-btn ti-btn-disabled ti-btn-primary" disabled>
									<span className="ti-spinner text-white" role="status" aria-label="loading"></span>
									<span>Loading...</span>
								</button>
								<button type="button" className="ti-btn ti-btn-disabled ti-btn-secondary" disabled>
									<span className="ti-spinner text-white" role="status" aria-label="loading">
										<span className="sr-only">Loading...</span>
									</span>
								</button>
								<button type="button" className="ti-btn ti-btn-disabled ti-btn-secondary" disabled>
									<span className="ti-spinner text-white" role="status" aria-label="loading"></span>
									<span>Loading...</span>
								</button>
								<button type="button" className="ti-btn ti-btn-disabled ti-btn-warning" disabled>
									<span className="ti-spinner text-white" role="status" aria-label="loading">
										<span className="sr-only">Loading...</span>
									</span>
								</button>
								<button type="button" className="ti-btn ti-btn-disabled ti-btn-warning" disabled>
									<span className="ti-spinner text-white" role="status" aria-label="loading"></span>
									<span>Loading...</span>
								</button>
								<button type="button" className="ti-btn ti-btn-disabled ti-btn-danger" disabled>
									<span className="ti-spinner text-white" role="status" aria-label="loading">
										<span className="sr-only">Loading...</span>
									</span>
								</button>
								<button type="button" className="ti-btn ti-btn-disabled ti-btn-danger" disabled>
									<span className="ti-spinner text-white" role="status" aria-label="loading"></span>
									<span>Loading...</span>
								</button>
								<button type="button" className="ti-btn ti-btn-disabled ti-btn-info" disabled>
									<span className="ti-spinner text-white" role="status" aria-label="loading">
										<span className="sr-only">Loading...</span>
									</span>
								</button>
								<button type="button" className="ti-btn ti-btn-disabled ti-btn-info" disabled>
									<span className="ti-spinner text-white" role="status" aria-label="loading"></span>
									<span>Loading...</span>
								</button>
								<button type="button" className="ti-btn ti-btn-disabled ti-btn-success" disabled>
									<span className="ti-spinner text-white" role="status" aria-label="loading">
										<span className="sr-only">Loading...</span>
									</span>
								</button>
								<button type="button" className="ti-btn ti-btn-disabled ti-btn-success" disabled>
									<span className="ti-spinner text-white" role="status" aria-label="loading"></span>
									<span>Loading...</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Customized description Spinner</h5>
						</div>
						<div className="box-body">
							<div className="relative">
								<div className="bg-primary/30 border border-primary alert mb-0">
									<div className="flex">
										<div className="flex-shrink-0">
											<svg className="h-4 w-4 text-primary mt-0.5"
												xmlns="http://www.w3.org/2000/svg" width="16" height="16"
												fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
												</path>
											</svg>
										</div>
										<div className="ltr:ml-3 rtl:mr-3">
											<h3 className="text-sm text-primary font-medium">
                                                    Attention needed
											</h3>
											<div className="text-sm text-primary mt-2">
												<span className="font-semibold">Holy guacamole!</span> You should check
                                                    in on some of those fields below.
											</div>
										</div>
									</div>
								</div>
								<div
									className="absolute top-0 ltr:left-0 rtl:right-0 w-full h-full bg-white/[.5] rounded-sm dark:bg-bgdark/[.4]">
								</div>
								<div className="absolute top-1/2 ltr:left-1/2 rtl:right-1/2 transform -translate-x-1/2 -translate-y-1/2">
									<div className="ti-spinner text-primary" role="status" aria-label="loading">
										<span className="sr-only">Loading...</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Alignment Flex</h5>
						</div>
						<div className="box-body">
							<div className="flex justify-start">
								<div className="ti-spinner text-primary" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
							<div className="flex justify-center">
								<div className="ti-spinner text-warning" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
							<div className="flex justify-end">
								<div className="ti-spinner text-secondary" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Alignment Float</h5>
						</div>
						<div className="box-body">
							<div className="ti-spinner text-primary ltr:float-left rtl:float-right" role="status" aria-label="loading">
								<span className="sr-only">Loading...</span>
							</div>
							<div className="ti-spinner text-secondary ltr:float-right rtl:float-left" role="status" aria-label="loading">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Alignment Text Center</h5>
						</div>
						<div className="box-body">
							<div className="text-center">
								<div className="ti-spinner text-primary" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Alignment Margin</h5>
						</div>
						<div className="box-body">
							<div className="m-12 ti-spinner text-primary" role="status" aria-label="loading">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Spinners;
