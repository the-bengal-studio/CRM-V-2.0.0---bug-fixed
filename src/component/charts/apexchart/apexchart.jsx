import React from "react";
import { AreaChart, BarChart, BasicHeatMap, Boxplot, Bubble3D, CandleStick, ColumnChart, DonutChart, LineAndColumnChart, LineChart, PieChart, PolarAreaChart, RaderChart, RadialChart, ScatterChart, StrokedCircularGauge, TimelineBasic, TreeMap } from "../../../common/chartData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Apexchart = () => {
	return (
		<div>
           <PageHeader currentpage="Apex Chart" activepage="Basic Ui" mainpage="Apex Chart" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                    Line Chart
							</h5>
						</div>
						<div className="box-body">
						<LineChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Area Chart
							</h5>
						</div>
						<div className="box-body">
							<AreaChart/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Column Chart	
							</h5>
						</div>
						<div className="box-body">
						<ColumnChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Bar Chart
							</h5>
						</div>
						<div className="box-body">
							<BarChart/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Line &amp; Column Chart
							</h5>
						</div>
						<div className="box-body">
							<LineAndColumnChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                Timeline Chart
							</h5>
						</div>
						<div className="box-body">
							<TimelineBasic/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Candlestick Chart
							</h5>
						</div>
						<div className="box-body">
							<CandleStick/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Boxplot Chart
							</h5>
						</div>
						<div className="box-body">
							<Boxplot/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  3D Bubble Chart
							</h5>
						</div>
						<div className="box-body">
							<Bubble3D/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Datetime Scatter Chart
							</h5>
						</div>
						<div className="box-body">
						<ScatterChart/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Heatmap Chart
							</h5>
						</div>
						<div className="box-body">
							<BasicHeatMap/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Treemap Chart
							</h5>
						</div>
						<div className="box-body">
							<TreeMap/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Pie Chart
							</h5>
						</div>
						<div className="box-body">
							<PieChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Donut Chart
							</h5>
						</div>
						<div className="box-body">
							<DonutChart/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Radial Chart
							</h5>
						</div>
						<div className="box-body">
							<RadialChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Stroked Circular Gauge
							</h5>
						</div>
						<div className="box-body">
							<StrokedCircularGauge/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Radar Chart-Multiple Series
							</h5>
						</div>
						<div className="box-body">
							<RaderChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Polar Chart
							</h5>
						</div>
						<div className="box-body">
						<PolarAreaChart />
							
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
export default  Apexchart;
