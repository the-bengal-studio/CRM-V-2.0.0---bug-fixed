import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Progress = () => {
	return (
		<div>

			<PageHeader currentpage="Progress" activepage="Components" mainpage="Progress" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Progress</h5>
						</div>
						<div className="box-body space-y-4">
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary" role="progressbar" style={{width: "0%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Different Colored Progress</h5>
						</div>
						<div className="box-body space-y-4">
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary" role="progressbar" style={{width: "0%" }}aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-secondary" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-warning" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-info" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-danger" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-success" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Progress With Label</h5>
						</div>
						<div className="box-body space-y-4">
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "0%" }}aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0</div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-secondary text-xs text-white text-center" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">10%</div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-warning text-xs text-white text-center" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">15%</div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-info text-xs text-white text-center" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-danger text-xs text-white text-center" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-success text-xs text-white text-center" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Progress Bar Sizes</h5>
						</div>
						<div className="box-body space-y-4">
							<div className="ti-main-progress  h-1 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-secondary text-xs text-white text-center" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress  h-2 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-warning text-xs text-white text-center" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">sm</div>
							</div>
							<div className="ti-main-progress  h-3 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-info text-xs text-white text-center" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">md</div>
							</div>
							<div className="ti-main-progress  h-4 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-danger text-xs text-white text-center" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">lg</div>
							</div>
							<div className="ti-main-progress  h-6 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-success text-xs text-white text-center" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">xl</div>
							</div>
							<div className="ti-main-progress  h-8 bg-gray-200 dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">xxl</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Multiple bars Progress</h5>
						</div>
						<div className="box-body space-y-4">
							<div className="ti-main-progress h-1 bg-gray-200 rounded-full overflow-hidden dark:bg-black/20">
								<div className="ti-main-progress-bar bg-primary" role="progressbar" style={{width: "5%" }}aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
								<div className="ti-main-progress-bar bg-secondary" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
								<div className="ti-main-progress-bar bg-warning" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-black/20">
								<div className="ti-main-progress-bar bg-info" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
								<div className="ti-main-progress-bar bg-danger" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
								<div className="ti-main-progress-bar bg-success" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-black/20">
								<div className="ti-main-progress-bar bg-secondary" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
								<div className="ti-main-progress-bar bg-info" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
								<div className="ti-main-progress-bar bg-pink-500" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-black/20">
								<div className="ti-main-progress-bar bg-green-500" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
								<div className="ti-main-progress-bar bg-red-500" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
								<div className="ti-main-progress-bar bg-amber-500" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress h-6 bg-gray-200 rounded-full overflow-hidden dark:bg-black/20">
								<div className="ti-main-progress-bar bg-yellow-500" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
								<div className="ti-main-progress-bar bg-lime-500" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								<div className="ti-main-progress-bar bg-orange-500" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div className="ti-main-progress h-8 bg-gray-200 rounded-full overflow-hidden dark:bg-black/20">
								<div className="ti-main-progress-bar bg-sky-500" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								<div className="ti-main-progress-bar bg-fuchsia-500" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
								<div className="ti-main-progress-bar bg-rose-500" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Vertical Progress</h5>
						</div>
						<div className="box-body">
							<div className="flex space-x-8 rtl:space-x-reverse">
								<div className="ti-main-progress flex-col flex-nowrap justify-end w-2 h-40 bg-gray-200 dark:bg-black/20">
									<div className="bg-primary ti-main-progress-bar" role="progressbar" style={{height: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="ti-main-progress flex-col flex-nowrap justify-end w-3 h-40 bg-gray-200 dark:bg-black/20">
									<div className="bg-secondary ti-main-progress-bar" role="progressbar" style={{height: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="ti-main-progress flex-col flex-nowrap justify-end w-4 h-40 bg-gray-200 dark:bg-black/20">
									<div className="bg-warning ti-main-progress-bar" role="progressbar" style={{height: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="ti-main-progress flex-col flex-nowrap justify-end w-5 h-40 bg-gray-200 dark:bg-black/20">
									<div className="bg-info ti-main-progress-bar" role="progressbar" style={{height: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<div className="ti-main-progress flex-col flex-nowrap justify-end w-6 h-40 bg-gray-200 dark:bg-black/20">
									<div className="bg-danger ti-main-progress-bar" role="progressbar" style={{height: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Progress;
