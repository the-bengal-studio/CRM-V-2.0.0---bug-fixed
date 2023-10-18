import React from "react";
import {
	FileSystemNavigator1,
	BasicTreeviewexample1,
	BasicTreeviewexample2,
	FileSystemNavigator2,
	BasicTreeviewexample3,
	BasicTreeviewexample4,
} from "./treeviewdata";

import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
const Treeview = () => {

	return (
		<div>
           <PageHeader currentpage="Treeview" activepage="Basic Ui" mainpage="Treeview" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Treeview</h5>
						</div>
						<div className="box-body">
							<div id="tree" className="text-base font-semibold text-gray-600 dark:text-white/70">

								<FileSystemNavigator1 />
								<FileSystemNavigator2 />
							</div>

						</div>
					</div>
				</div>

				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Treeview</h5>
						</div>
						<div className="box-body">
							<div id="tree" className="text-base font-semibold text-gray-600 dark:text-white/70">

								<BasicTreeviewexample1 />
								<BasicTreeviewexample2 />
								<BasicTreeviewexample3 />
								<BasicTreeviewexample4 />
							</div>

						</div>
					</div>
				</div>



			</div>

		</div>
	);
};

export default Treeview;
