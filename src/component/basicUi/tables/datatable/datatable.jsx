import React, { useEffect, useState } from "react";
import { ReactTabulator } from 'react-tabulator';
import { columns, data } from "../../../../common/TableData";
import Home from "./responsivetable";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";

const Datatable = () => {

	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [totalPages, setTotalPages] = useState(1);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<div>
<PageHeader currentpage="Data Table" activepage="Basic Ui" mainpage="Data Table" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box basic-data-table">
						<div className="box-header">
							<h5 className="box-title">Basic DataTable</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered">
								<ReactTabulator className="ti-custom-table ti-striped-table ti-custom-table-hover"
									data={data}
									columns={columns}options={{pagination: 'local',
										paginationSize: pageSize,
										paginationSizeSelector: [10, 20, 50, 100], // Define available page sizes
										paginationInitialPage: currentPage,
										paginationButtonCount: 5, // Number of pagination buttons to display
										paginationDataReceived: { last_page: totalPages },
										paginationDataSent: { page: currentPage, size: pageSize }}} onPageChange={(data) => handlePageChange(data.page)} />
                            </div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box basic-data-table">
						<div className="box-header">
							<h5 className="box-title">Sortable DataTable</h5>
						</div>
						<div className="box-body space-y-3">
							<div className="overflow-hidden table-bordered">
								<Home/>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
export default Datatable;
