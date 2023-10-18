import React, { useEffect, useRef, useState } from "react";



import { MapContainer, TileLayer, LayersControl, Popup, LayerGroup, Circle, Rectangle, FeatureGroup, Polygon, Pane, SVGOverlay } from "react-leaflet";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
const Leafletmap = () => {
	// pane
	const outer = [
		[50.505, -29.09],
		[52.505, 29.09],
	];
	const inner = [
		[49.505, -2.09],
		[53.505, 2.09],
	];

	function BlinkingPane() {
		const [render, setRender] = useState(true);
		const timerRef = useRef();
		useEffect(() => {
			timerRef.current = setInterval(() => {
				setRender((r) => !r);
			}, 5000);
			return () => {
				clearInterval(timerRef.current);
			};
		}, []);

		return render ? (
			<Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
				<Rectangle bounds={outer} pathOptions={{ color: "cyan" }} />
			</Pane>
		) : null;
	}
	// pane-end
	const position = [51.505, -0.09];
	const bounds = [
		[51.49, -0.08],
		[51.5, -0.06],
	];
	const center = [51.505, -0.09];
	const rectangle = [
		[51.49, -0.08],
		[51.5, -0.06],
	];
	const multiPolygon = [
		[
			[51.51, -0.05],
			[51.53, -0.07],
			[51.51, -0.07],
		],
	];

	const fillBlueOptions = { fillColor: "blue" };
	const fillRedOptions = { fillColor: "red" };
	const greenOptions = { color: "black", fillColor: "red" };
	const purpleOptions = { color: "black", fillColor: "red" };
	const purpleOptions1 = { color: "black", fillColor: "black" };

	function MapPlaceholder() {
		return (
			<p>
				Map of London.
				<noscript>You need to enable JavaScript to see this map.</noscript>
			</p>
		);
	}

	return (
		<div>
           <PageHeader currentpage="Leaflet Maps" activepage="Basic Ui" mainpage="Leaflet Maps" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Leaflet Map</h5>
						</div>
						<div className="box-body">
							<div id="map">
								<MapContainer
									center={[51.505, -0.09]}
									zoom={13}
									scrollWheelZoom={false}
									placeholder={<MapPlaceholder />}
								>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
								</MapContainer>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Map With Markers,Circes and Polygons</h5>
						</div>
						<div className="box-body">
							<div id="map1">
							<MapContainer
								center={center}
								zoom={13}
								scrollWheelZoom={true}
							>
								<TileLayer
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								<LayerGroup>
									<Circle
										center={center}
										pathOptions={fillBlueOptions}
										radius={200}
									/>
									<Circle
										center={center}
										pathOptions={fillRedOptions}
										radius={100}
										stroke={false}
									/>
									<LayerGroup>
										<Circle
											center={[51.51, -0.08]}
											pathOptions={greenOptions}
											radius={100}
										/>
									</LayerGroup>
								</LayerGroup>
								<FeatureGroup pathOptions={purpleOptions}>
									<Popup>Popup in FeatureGroup</Popup>
									<Circle center={[51.51, -0.06]} radius={200} />
									<Rectangle bounds={rectangle} />
								</FeatureGroup>
							</MapContainer>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Map With Popup</h5>
						</div>
						<div className="box-body">
							<div id="map-popup">
								<MapContainer
									center={center}
									zoom={13}
									scrollWheelZoom={true}
								>
									<LayersControl position="topright">
										<LayersControl.BaseLayer
											checked
											name="OpenStreetMap.Mapnik"
										>
											<TileLayer
												attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
												url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
											/>
										</LayersControl.BaseLayer>

										<LayersControl.Overlay name="Marker with popup"></LayersControl.Overlay>
										<LayersControl.Overlay
											checked
											name="Layer group with circles"
										>
											<LayerGroup>
												<Circle
													center={center}
													pathOptions={{ fillColor: "blue" }}
													radius={200}
												/>
											</LayerGroup>
										</LayersControl.Overlay>
										<LayersControl.Overlay name="Feature group">
											<FeatureGroup pathOptions={{ color: "black" }}>
												<Popup>Popup in FeatureGroup</Popup>
												<Rectangle bounds={rectangle} />
												<Polygon
													pathOptions={purpleOptions1}
													positions={multiPolygon}
												/>
											</FeatureGroup>
										</LayersControl.Overlay>
									</LayersControl>
								</MapContainer>
							</div>
							
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Map With Custom Icon</h5>
						</div>
						<div className="box-body">
							<div id="map-custom-icon">
								<MapContainer
									bounds={outer}
									scrollWheelZoom={false}
									className="panemap"
								>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<BlinkingPane />
									<Pane name="yellow-rectangle" style={{ zIndex: 499 }}>
										<Rectangle
											bounds={inner}
											pathOptions={{ color: "black" }}
										/>
										<Pane name="purple-rectangle">
											<Rectangle
												bounds={outer}
												pathOptions={{ color: "white" }}
											/>
										</Pane>
									</Pane>
								</MapContainer>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Interactive Choropleth Map</h5>
						</div>
						<div className="box-body">
							<div id="interactive-map">
								<MapContainer
									center={position}
									zoom={13}
									scrollWheelZoom={false}
								>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<SVGOverlay attributes={{ stroke: "red" }} bounds={bounds}>
										<rect
											x="0"
											y="0"
											width="100%"
											height="100%"
											fill="black"
										/>
										<circle r="10" cx="10" cy="10" fill="white" />
										<text x="40%" y="50%" stroke="white">
											text
										</text>
									</SVGOverlay>
								</MapContainer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Leafletmap;
