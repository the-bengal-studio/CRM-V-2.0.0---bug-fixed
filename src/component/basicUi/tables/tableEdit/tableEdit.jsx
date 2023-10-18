import React, { Fragment, useState } from "react";
import BasicEditTable from "./basiceditable";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";

const EditableRows = () => {
	return (
		<div>
<PageHeader currentpage="Edit Data Table" activepage="Basic Ui" mainpage="Edit Data Table" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box xl:overflow-auto">
						<div className="box-header">
							<h5 className="box-title">Edit DataTable</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-bordered">
								<BasicEditTable/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditableRows;