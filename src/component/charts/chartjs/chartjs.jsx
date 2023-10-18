import React from "react";
import { BarChartJS, BubbleChart, ChartPie, ChartPolar, DoughnutChart, LineChartJS, MixedChartJS, RadarChartJS, ScatterChartJS } from "../../../common/chartData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Chartjs = () => {
	return (
		<div>
           <PageHeader currentpage="ChartJS" activepage="Basic Ui" mainpage="ChartJS" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Chartjs Line Chart
							</h5>
						</div>
						<div className="box-body">
						<LineChartJS/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Chartjs Bar Chart
							</h5>
						</div>
						<div className="box-body">
						<BarChartJS/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Chartjs Radial Chart
							</h5>
						</div>
						<div className="box-body">
						<RadarChartJS/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Chartjs Scatter Chart
							</h5>
						</div>
						<div className="box-body">
						<ScatterChartJS/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Chartjs Mixed Chart
							</h5>
						</div>
						<div className="box-body">
						<MixedChartJS/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Chartjs Bubble Chart
							</h5>
						</div>
						<div className="box-body">
						<BubbleChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Chartjs Pie Chart
							</h5>
						</div>
						<div className="box-body">
						<ChartPie/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Chartjs Doughnut Chart
							</h5>
						</div>
						<div className="box-body">
						<DoughnutChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Chartjs Polar Chart
							</h5>
						</div>
						<div className="box-body">
						<ChartPolar/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Chartjs;
