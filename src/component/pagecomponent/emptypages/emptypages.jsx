import React from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Emptypages = () => {
	return (
		<div>
			<PageHeader currentpage="Empty Page" activepage="Pages" mainpage="Empty Page" />

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-body">
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Emptypages;
