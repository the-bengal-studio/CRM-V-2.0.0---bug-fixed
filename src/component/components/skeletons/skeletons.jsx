import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Skeletons = () => {
	return (
		<div>

			<PageHeader currentpage="Skeleton" activepage="Components" mainpage="Skeleton" />

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Skeleton</h5>
						</div>
						<div className="box-body">
							<div className="border rounded-sm shadow-sm p-6 dark:bg-bgdark dark:border-white/10">
								<h3 className="h-4 bg-gray-200 rounded-sm dark:bg-black/20" style={{width: "40%"}}></h3>

								<ul className="mt-5 space-y-3">
									<li className="w-full h-4 bg-gray-200 rounded-sm dark:bg-black/20"></li>
									<li className="w-full h-4 bg-gray-200 rounded-sm dark:bg-black/20"></li>
									<li className="w-full h-4 bg-gray-200 rounded-sm dark:bg-black/20"></li>
									<li className="w-full h-4 bg-gray-200 rounded-sm dark:bg-black/20"></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Complex combination</h5>
						</div>
						<div className="box-body">
							<div className="border rounded-sm shadow-sm p-6 dark:bg-bgdark dark:border-white/10">
								<div className="flex">
									<div className="flex-shrink-0">
										<span className="w-12 h-12 block bg-gray-200 rounded-full dark:bg-black/20"></span>
									</div>

									<div className="ltr:ml-4 rtl:mr-4 mt-2 w-full">
										<h3 className="h-4 bg-gray-200 rounded-sm dark:bg-black/20" style={{width: "40%"}}></h3>

										<ul className="mt-5 space-y-3">
											<li className="w-full h-4 bg-gray-200 rounded-sm dark:bg-black/20"></li>
											<li className="w-full h-4 bg-gray-200 rounded-sm dark:bg-black/20"></li>
											<li className="w-full h-4 bg-gray-200 rounded-sm dark:bg-black/20"></li>
											<li className="w-full h-4 bg-gray-200 rounded-sm dark:bg-black/20"></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Active animation</h5>
						</div>
						<div className="box-body">
							<div className="border rounded-sm shadow-sm p-6 dark:bg-bgdark dark:border-white/10">
								<div className="flex animate-pulse">
									<div className="flex-shrink-0">
										<span className="w-12 h-12 block bg-gray-200 rounded-full dark:bg-black/20"></span>
									</div>
									<div className="ltr:ml-4 rtl:mr-4 mt-2 w-full">
										<h3 className="h-4 bg-gray-200 rounded-sm dark:bg-black/20" style={{width: "40%"}}></h3>

										<ul className="mt-5 space-y-3">
											<li className="w-full h-4 bg-gray-200 rounded-sm dark:bg-black/20"></li>
											<li className="w-full h-4 bg-gray-200 rounded-sm dark:bg-black/20"></li>
											<li className="w-full h-4 bg-gray-200 rounded-sm dark:bg-black/20"></li>
											<li className="w-full h-4 bg-gray-200 rounded-sm dark:bg-black/20"></li>
										</ul>
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
export default Skeletons;
