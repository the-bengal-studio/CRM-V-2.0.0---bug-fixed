import React from "react";
import { Basicmarkers, Custommarkers, Europemap, MapAnnotation, Shapeworldmap, WorldMap } from "./simplemapsdata";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Simplemap = () => {
	const [content, setContent] = React.useState("");

	return (
		<div>
           <PageHeader currentpage="Vector Map" activepage="Basic Ui" mainpage="Vector Map" />

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Vector Map: World</h5>
						</div>
						<div className="box-body">
							<div id="vector-map" className="ht-300">
								<WorldMap setTooltipContent={setContent} />
								{content}
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Graticule Map</h5>
						</div>
						<div className="box-body">
							<div id="marker-map">
								<Shapeworldmap />

							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Annotation Map</h5>
						</div>
						<div className="box-body">
							<div id="marker-image-map">
								<MapAnnotation />

							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Europe Map</h5>
						</div>
						<div className="box-body">
							<div id="lines-map">
								<Europemap />

							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basicmarkers Map</h5>
						</div>
						<div className="box-body">
							<div id="us-map">
								<Basicmarkers />

							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Custommarkers Map</h5>
						</div>
						<div className="box-body">
							<div id="russia-map">
								<Custommarkers />

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Simplemap;
