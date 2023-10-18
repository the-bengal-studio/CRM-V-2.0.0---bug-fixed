import React from "react";
import Slider from 'rc-slider';
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import RangeSlider from "react-range-slider-input";
import { connect } from "react-redux"
import { LabeledTwoThumbs, Marks, ProgrameticSlider, UpdatingMarks } from "./reactrangeSlider";

const Rangeslider = ({local_varaiable}) => {

	return ( 
		<div>
<PageHeader currentpage="Rangeslider" activepage="Advanced UI" mainpage="Rangeslider" />
			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Basic Rangeslider Options with Html</h5>
						</div>
						<div className="box-body">
							<Slider min={0} max={20} defaultValue={3} />
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Basic Rangeslider With Reverse value </h5>
						</div>
						<div className="box-body">
							<Slider min={0} max={20} reverse defaultValue={3} />
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Multiple Rangesliders with fixed value</h5>
						</div>
						<div className="box-body">
						<Slider min={20} defaultValue={20} marks={{ 20: 20, 40: 40, 100: 100 }} step={null} />
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Programmatic change</h5>
						</div>
						<div className="box-body">
						<ProgrameticSlider/>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic </h5>
						</div>
						<div className="box-body">
						<RangeSlider />
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Fit Handles</h5>
						</div>
						<div className="box-body">
						<RangeSlider />
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Rounded Styling</h5>
						</div>
						<div className="box-body">
							<RangeSlider id="range-slider-yellow" />
						</div>
					</div>
				</div>
				<div className="col-span-12 md:col-span-6 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Square Styling</h5>
						</div>
						<div className="box-body">
							<RangeSlider id="range-slider-ab" className="margin-lg" step={"any"} rangeSlideDisabled={true} />
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Labeled with Two thumbs</h5>
						</div>
						<div className="box-body">
							<LabeledTwoThumbs rtl={local_varaiable.dir == 'rtl'}/>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">With Multiple Marks</h5>
						</div>
						<div className="box-body">
							<Marks rtl={local_varaiable.dir == 'rtl'}/>
						</div>
					</div>
				</div>
				
			</div>

			 <div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Dynamic Range Slider</h5>
						</div>
						<div className="box-body">
							<UpdatingMarks rtl={local_varaiable.dir == 'rtl'}/>
						</div>
					</div>
				</div>
			</div> 

		</div> );
};
 
const mapStateToProps = (state) => ({
	local_varaiable: state
  })

export default connect(mapStateToProps,{})(Rangeslider);

