import React from "react";
import { AreaEChart, BarEChart, BarWithBackgroundEChart, BarWithLabelsEChart, BarWithNegativeValuesEChart, BasicGaugeEChart, BasicScatterEChart, BubbleEChart, CandlestickEChart, DoughnutEChart, FunnelEChart, HeatmapEChart, HorizontalBarEChart, HorizontalStackedBarEChart, 
	     LineEChart, PieEChart, RadarEChart, SimpleGraphEChart, SmoothLineEChart, StackedAreaEChart, StackedLineEChart, StepLineEChart, StyleForASingleBarEChart, TreemapEChart, WaterFallEChart } from "../../../common/chartData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Echart = () => {
	return (
		<div> 
           <PageHeader currentpage="E chartJS" activepage="Basic Ui" mainpage="E chartJS" />

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Basic Line Chart
							</h5>
						</div>
						<div className="box-body">
							<LineEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Smoothed Line Chart
							</h5>
						</div>
						<div className="box-body">
							<SmoothLineEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Basic Area Chart
							</h5>
						</div>
						<div className="box-body">
							<AreaEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Stacked Line Chart
							</h5>
						</div>
						<div className="box-body">
							<StackedLineEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Stacked Area Chart
							</h5>
						</div>
						<div className="box-body">
							<StackedAreaEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Step Line Chart
							</h5>
						</div>
						<div className="box-body">
							<StepLineEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Basic Bar Chart
							</h5>
						</div>
						<div className="box-body">
							<BarEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Bar With Background Chart
							</h5>
						</div>
						<div className="box-body">
							<BarWithBackgroundEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Style For A Single Bar Chart
							</h5>
						</div>
						<div className="box-body">
							<StyleForASingleBarEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Water Fall Chart
							</h5>
						</div>
						<div className="box-body">
							<WaterFallEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Bar With Negative Values Chart
							</h5>
						</div>
						<div className="box-body">
							<BarWithNegativeValuesEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Bar With Labels Chart
							</h5>
						</div>
						<div className="box-body">
							<BarWithLabelsEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Horizontal Bar Chart
							</h5>
						</div>
						<div className="box-body">
							<HorizontalBarEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Horizontal Stacked Bar Chart
							</h5>
						</div>
						<div className="box-body">
							<HorizontalStackedBarEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Pie Chart
							</h5>
						</div>
						<div className="box-body">
							<PieEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Doughnut Chart
							</h5>
						</div>
						<div className="box-body">
							<DoughnutEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Candlestick Chart
							</h5>
						</div>
						<div className="box-body">
							<CandlestickEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Basic Radar Chart
							</h5>
						</div>
						<div className="box-body">
							<RadarEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Heatmap Chart
							</h5>
						</div>
						<div className="box-body">
							<HeatmapEChart/>
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
							<TreemapEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Funnel Chart
							</h5>
						</div>
						<div className="box-body">
							<FunnelEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Basic Gauge Chart
							</h5>
						</div>
						<div className="box-body">
							<BasicGaugeEChart/>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Simple Graph Chart
							</h5>
						</div>
						<div className="box-body">
							<SimpleGraphEChart/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Echart;
