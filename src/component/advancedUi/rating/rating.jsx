import React from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import HoverRating from "./hoverfeeback";
import Customizable from "./custominbusyrating";
import RadioGroupRating from "./Radio group";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
const Ratings = () => {
	const [value, setValue] = React.useState(5);
	const [value0, setValue0] = React.useState();
	const [value2, setValue2] = React.useState();
	// Hover Feedback


	return (
		<div>
			<PageHeader currentpage="Rating" activepage="Advanced Ui"  mainpage ="Rating"/>
			<div className="grid grid-cols-12 xxl:gap-x-5">
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Rater</h5>
						</div>
						<div className="box-body">
							<div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-md">
								<div className="sm:flex items-center justify-between">
									<p className="text-sm mb-0 font-semibold">Show Some <span className="text-danger">❤</span> with rating :</p>
									<div id="rater-basic">

										<Box
											sx={{
												'& > legend': { mt: 2 },
											}}
										>
											<Rating name="read-only" value={value} readOnly />
										</Box>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">5 Star Rater With Steps</h5>
						</div>
						<div className="box-body">
							<div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-md">
								<div className="sm:flex items-center justify-between">
									<p className="text-sm mb-0 font-semibold">Dont forget to rate the product :</p>
									<div id="rater-steps">



										<Box
											sx={{
												'& > legend': { mt: 2 },
											}}
										>

											<Rating
												name="simple-controlled"
												value={value2}
												onChange={(event, newValue) => {
													setValue2(newValue);
												}}
											/>
										</Box>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Hover feedback</h5>
						</div>
						<div className="box-body text-center">
							<div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-md">
								<div className="sm:flex items-center justify-between">
									<p className="text-sm mb-0 font-semibold">Your rating is much 👏 :</p>
									<div id="custom-messages">
										<HoverRating />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 xxl:gap-x-5">
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Unlimited number of stars readOnly</h5>
						</div>
						<div className="box-body">
							<div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-md overflow-hidden">
								<div className="sm:flex items-center justify-between">
									<p className="text-sm mb-0 font-semibold">Your rating is much appreciated👏 :</p>
									<div id="stars-unlimited" className="overflow-auto">

										<Box
											sx={{
												'& > legend': { mt: 2 },
											}}
										>
											<Rating name="customized-10" defaultValue={6} max={10} readOnly />
										</Box>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">5 Star rater with custom isBusyText and simulated backend</h5>
						</div>
						<div className="box-body">
							<div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-md">
								<div className="sm:flex items-center justify-between">
									<p className="text-sm mb-0 font-semibold">Thanks for rating :</p>
									<div id="stars-busytext">
										<Customizable />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 xxl:gap-x-5">
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Disabled</h5>
						</div>
						<div className="box-body">
							<div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-md">
								<div className="sm:flex items-center justify-between">
									<p className="text-sm mb-0 font-semibold"> Disabled Rating :</p>
									<div className="flex items-center">
										<div id="rater-reset">
											<Rating name="disabled" defaultValue={value0} disabled />
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Radio group</h5>
						</div>
						<div className="box-body">
							<div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-md">
								<div className="sm:flex items-center justify-between">
									<p className="text-sm mb-0 font-semibold">Please give your valuable rating :</p>
									<div className="flex items-center">
										<div id="stars-hover">
											<RadioGroupRating />
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
export default Ratings;
