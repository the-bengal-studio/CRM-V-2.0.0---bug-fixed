import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Indicators = () => {
	return (
		<div>
         <PageHeader currentpage="Indicators" activepage="Components" mainpage="Indicators" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Legend Indicator</h5>
						</div>
						<div className="box-body">
							<div className="inline-flex items-center">
								<span className="w-2 h-2 inline-block bg-gray-500 dark:bg-white/80 rounded-full ltr:mr-2 rtl:ml-2"></span>
								<span className="text-gray-600 dark:text-white/70">Legend indicator</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Color variations Legend Indicator</h5>
						</div>
						<div className="box-body">
							<div className="grid gap-y-2">
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-black/20 rounded-full ltr:mr-2 rtl:ml-2 dark:bg-white"></span>
									<span className="text-gray-600 dark:text-white/70">Dark</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-gray-500 rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Gray</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-red-500 rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Red</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-yellow-500 rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Yellow</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-green-500 rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Green</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-blue-500 rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Blue</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-indigo-500 rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Indigo</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-purple-500 rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Purple</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-pink-500 rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Pink</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-gray-100 rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Light</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Template Color variations Legend Indicator</h5>
						</div>
						<div className="box-body">
							<div className="grid gap-y-2">
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-primary rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Primary</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-secondary rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Secondary</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-warning rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Warning</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-success rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Success</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-info rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Info</span>
								</div>
								<div className="inline-flex items-center">
									<span className="w-2 h-2 inline-block bg-danger rounded-full ltr:mr-2 rtl:ml-2"></span>
									<span className="text-gray-600 dark:text-white/70">Danger</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Indicators;
