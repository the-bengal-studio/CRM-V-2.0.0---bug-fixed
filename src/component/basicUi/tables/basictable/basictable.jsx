import React from "react";
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import { Link } from "react-router-dom";

const Basictable = () => {
	return (
		<div>
<PageHeader currentpage="Tables" activepage="Basic Ui" mainpage="Tables" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Default Table</h5>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="!text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="!text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="!text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Edward King</td>
											<td>16</td>
											<td>LA No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Red</td>
											<td>45</td>
											<td>Melbourne No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Striped Table</h5>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head ti-striped-table">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Edward King</td>
											<td>16</td>
											<td>LA No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Red</td>
											<td>45</td>
											<td>Melbourne No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Hovarable Table</h5>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head ti-custom-table-hover">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Edward King</td>
											<td>16</td>
											<td>LA No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Red</td>
											<td>45</td>
											<td>Melbourne No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Hoverable with Striped Table</h5>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head ti-striped-table ti-custom-table-hover">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Edward King</td>
											<td>16</td>
											<td>LA No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Red</td>
											<td>45</td>
											<td>Melbourne No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box overflow-hidden">
						<div className="box-header">
							<h5 className="box-title">Higlighted Table</h5>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="bg-primary font-medium dark:!text-white !text-white">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td className="bg-orange-500 dark:!text-white !text-white">27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="bg-red-500 font-medium dark:!text-white !text-white">Joe Black</td>
											<td className="bg-primary dark:!text-white !text-white">31</td>
											<td className="bg-primary dark:!text-white !text-white">Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bordered Table</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-bordered rounded-md ">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Tables Without Borders</h5>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Rounded Tables</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Table Thead Horizontally Divided</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md shadow overflow-auto dark:shadow-white/10">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr className="">
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Header In Gray Color</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead className="bg-gray-100 dark:bg-black/20">
										<tr>
											<th scope="col" className="dark:text-white/70">Name</th>
											<th scope="col" className="dark:text-white/70">Age</th>
											<th scope="col" className="dark:text-white/70">Address</th>
											<th scope="col" className="!text-end dark:text-white/70">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Tables Without Borders With Shadow</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md shadow overflow-auto dark:shadow-white/10">
								<table className="ti-custom-table ti-custom-table-head">
									<thead className="bg-gray-100 dark:bg-black/20">
										<tr>
											<th scope="col" className="dark:text-white/70">Name</th>
											<th scope="col" className="dark:text-white/70">Age</th>
											<th scope="col" className="dark:text-white/70">Address</th>
											<th scope="col" className="!text-end dark:text-white/70">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Headless Tables</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md shadow overflow-auto dark:shadow-white/10">
								<table className="ti-custom-table ti-custom-table-head">
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Tables with Footer</h5>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>

									<tfoot>
										<tr>
											<td className="font-medium">Footer</td>
											<td>Footer</td>
											<td>Footer</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Footer</Link>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Tables With Captions</h5>
						</div>
						<div className="box-body p-0">
							<div className="overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<caption className="py-2 px-4 text-start text-sm text-gray-600 dark:text-white/70">List of users</caption>
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Overflow Tables</h5>
						</div>
						<div className="box-body">
							<div className="flex flex-col">
								<div className="-m-1.5 overflow-x-auto">
									<div className="p-1.5 min-w-full inline-block align-middle">
										<div className="overflow-auto table-bordered">
											<table className="ti-custom-table ti-custom-table-head">
												<thead>
													<tr>
														<th scope="col">Name</th>
														<th scope="col">Title</th>
														<th scope="col">Age</th>
														<th scope="col">Email</th>
														<th scope="col">Address</th>
														<th scope="col" className="!text-end">Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="font-medium">John Brown</td>
														<td>Regional Paradigm Technician</td>
														<td>john@site.com</td>
														<td>45</td>
														<td>New York No. 1 Lake Park</td>
														<td className="text-end font-medium">
															<Link className="text-primary hover:text-primary" to="#">Delete</Link>
														</td>
													</tr>

													<tr>
														<td className="font-medium">Jim Green</td>
														<td>Forward Response Developer</td>
														<td>jim@site.com</td>
														<td>27</td>
														<td>London No. 1 Lake Park</td>
														<td className="text-end font-medium">
															<Link className="text-primary hover:text-primary" to="#">Delete</Link>
														</td>
													</tr>

													<tr>
														<td className="font-medium">Joe Black</td>
														<td>Product Directives Officer</td>
														<td>joe@site.com</td>
														<td>31</td>
														<td>Sidney No. 1 Lake Park</td>
														<td className="text-end font-medium">
															<Link className="text-primary hover:text-primary" to="#">Delete</Link>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Tables With Selection</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<thead className="bg-gray-50 dark:bg-black/20">
										<tr>
											<th scope="col" className="py-3 ltr:pl-4 rtl:pr-4">
												<div className="flex items-center h-5">
													<input id="hs-table-checkbox-all" type="checkbox" className="ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-all" className="sr-only">Checkbox</label>
												</div>
											</th>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="py-3 ltr:pl-4 rtl:pr-4">
												<div className="flex items-center h-5">
													<input id="hs-table-checkbox-1" type="checkbox" className="ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-1" className="sr-only">Checkbox</label>
												</div>
											</td>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="py-3 ltr:pl-4 rtl:pr-4">
												<div className="flex items-center h-5">
													<input id="hs-table-checkbox-2" type="checkbox" className="ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-2" className="sr-only">Checkbox</label>
												</div>
											</td>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="py-3 ltr:pl-4 rtl:pr-4">
												<div className="flex items-center h-5">
													<input id="hs-table-checkbox-3" type="checkbox" className="ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-3" className="sr-only">Checkbox</label>
												</div>
											</td>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="py-3 ltr:pl-4 rtl:pr-4">
												<div className="flex items-center h-5">
													<input id="hs-table-checkbox-4" type="checkbox" className="ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-4" className="sr-only">Checkbox</label>
												</div>
											</td>
											<td className="font-medium">Edward King</td>
											<td>16</td>
											<td>LA No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="py-3 ltr:pl-4 rtl:pr-4">
												<div className="flex items-center h-5">
													<input id="hs-table-checkbox-5" type="checkbox" className="ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-5" className="sr-only">Checkbox</label>
												</div>
											</td>
											<td className="font-medium">Jim Red</td>
											<td>45</td>
											<td>Melbourne No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Tables With Search Input</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md ti-custom-table-head">
								<div className="py-2 px-3">
									<div className="relative max-w-xs">
										<label htmlFor="hs-table-search1" className="sr-only">Search</label>
										<input type="text" name="hs-table-search1" id="hs-table-search1" className="p-3 ltr:pl-10 rtl:pr-10 ti-form-input" placeholder="Search for items"/>
										<div className="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center pointer-events-none ltr:pl-4 rtl:pr-4">
											<svg className="h-3.5 w-3.5 text-gray-400 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
												<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
											</svg>
										</div>
									</div>
								</div>
								<div className="overflow-auto">
									<table className="ti-custom-table ti-custom-table-head">
										<thead className="bg-gray-50 dark:bg-black/20">
											<tr>
												<th scope="col" className="py-2 px-3 ltr:pr-0 rtl:pl-0">
													<div className="flex items-center h-5">
														<input id="hs-table-search-checkbox-all1" type="checkbox" className="ti-form-checkbox"/>
														<label htmlFor="hs-table-search-checkbox-all1" className="sr-only">Checkbox</label>
													</div>
												</th>
												<th scope="col" className="">Name</th>
												<th scope="col" className="">Age</th>
												<th scope="col" className="">Address</th>
												<th scope="col" className="!text-end">Action</th>
											</tr>
										</thead>
										<tbody className="">
											<tr>
												<td className="py-3 ltr:pl-4 rtl:pr-4">
													<div className="flex items-center justify-center h-5">
														<input id="hs-table-search-checkbox-1" type="checkbox" className="ti-form-checkbox"/>
														<label htmlFor="hs-table-search-checkbox-1" className="sr-only">Checkbox</label>
													</div>
												</td>
												<td className="font-medium">John Brown</td>
												<td>45</td>
												<td>New York No. 1 Lake Park</td>
												<td className="text-end font-medium">
													<Link className="text-primary hover:text-primary" to="#">Delete</Link>
												</td>
											</tr>

											<tr>
												<td className="py-3 ltr:pl-4 rtl:pr-4">
													<div className="flex items-center justify-center h-5">
														<input id="hs-table-search-checkbox-2" type="checkbox" className="ti-form-checkbox"/>
														<label htmlFor="hs-table-search-checkbox-2" className="sr-only">Checkbox</label>
													</div>
												</td>
												<td className="font-medium">Jim Green</td>
												<td>27</td>
												<td>London No. 1 Lake Park</td>
												<td className="text-end font-medium">
													<Link className="text-primary hover:text-primary" to="#">Delete</Link>
												</td>
											</tr>

											<tr>
												<td className="py-3 ltr:pl-4 rtl:pr-4">
													<div className="flex items-center justify-center h-5">
														<input id="hs-table-search-checkbox-3" type="checkbox" className="ti-form-checkbox"/>
														<label htmlFor="hs-table-search-checkbox-3" className="sr-only">Checkbox</label>
													</div>
												</td>
												<td className="font-medium">Joe Black</td>
												<td>31</td>
												<td>Sidney No. 1 Lake Park</td>
												<td className="text-end font-medium">
													<Link className="text-primary hover:text-primary" to="#">Delete</Link>
												</td>
											</tr>

											<tr>
												<td className="py-3 ltr:pl-4 rtl:pr-4">
													<div className="flex items-center justify-center h-5">
														<input id="hs-table-search-checkbox-4" type="checkbox" className="ti-form-checkbox"/>
														<label htmlFor="hs-table-search-checkbox-4" className="sr-only">Checkbox</label>
													</div>
												</td>
												<td className="font-medium">Edward King</td>
												<td>16</td>
												<td>LA No. 1 Lake Park</td>
												<td className="text-end font-medium">
													<Link className="text-primary hover:text-primary" to="#">Delete</Link>
												</td>
											</tr>

											<tr>
												<td className="py-3 ltr:pl-4 rtl:pr-4">
													<div className="flex items-center justify-center h-5">
														<input id="hs-table-search-checkbox-5" type="checkbox" className="ti-form-checkbox"/>
														<label htmlFor="hs-table-search-checkbox-5" className="sr-only">Checkbox</label>
													</div>
												</td>
												<td className="font-medium">Jim Red</td>
												<td>45</td>
												<td>Melbourne No. 1 Lake Park</td>
												<td className="text-end font-medium">
													<Link className="text-primary hover:text-primary" to="#">Delete</Link>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Tables With Search Input</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md ti-custom-table-head">
								<div className="py-2 px-3">
									<div className="relative max-w-xs">
										<label htmlFor="hs-table-search2" className="sr-only">Search</label>
										<input type="text" name="hs-table-search2" id="hs-table-search2" className="p-3 ltr:pl-10 rtl:pr-10 ti-form-input" placeholder="Search for items"/>
										<div className="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center pointer-events-none ltr:pl-4 rtl:pr-4">
											<svg className="h-3.5 w-3.5 text-gray-400 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
												<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
											</svg>
										</div>
									</div>
								</div>
								<div className="overflow-auto">
									<table className="ti-custom-table ti-custom-table-head">
										<thead className="bg-gray-50 dark:bg-black/20">
											<tr>
												<th scope="col" className="py-2 px-3 ltr:pr-0 rtl:pl-0">
													<div className="flex items-center h-5">
														<input id="hs-table-search-checkbox-all" type="checkbox" className="ti-form-checkbox"/>
														<label htmlFor="hs-table-search-checkbox-all" className="sr-only">Checkbox</label>
													</div>
												</th>
												<th scope="col" className="">Name</th>
												<th scope="col" className="">Age</th>
												<th scope="col" className="">Address</th>
												<th scope="col" className="!text-end">Action</th>
											</tr>
										</thead>
										<tbody className="">
											<tr>
												<td className="py-3 ltr:pl-4 rtl:pr-4">
													<div className="flex items-center h-5 justify-center">
														<input id="hs-table-search-checkbox-11" type="checkbox" className="ti-form-checkbox"/>
														<label htmlFor="hs-table-search-checkbox-11" className="sr-only">Checkbox</label>
													</div>
												</td>
												<td className="font-medium">John Brown</td>
												<td>45</td>
												<td>New York No. 1 Lake Park</td>
												<td className="text-end font-medium">
													<Link className="text-primary hover:text-primary" to="#">Delete</Link>
												</td>
											</tr>

											<tr>
												<td className="py-3 ltr:pl-4 rtl:pr-4">
													<div className="flex items-center h-5 justify-center">
														<input id="hs-table-search-checkbox-12" type="checkbox" className="ti-form-checkbox"/>
														<label htmlFor="hs-table-search-checkbox-12" className="sr-only">Checkbox</label>
													</div>
												</td>
												<td className="font-medium">Jim Green</td>
												<td>27</td>
												<td>London No. 1 Lake Park</td>
												<td className="text-end font-medium">
													<Link className="text-primary hover:text-primary" to="#">Delete</Link>
												</td>
											</tr>

											<tr>
												<td className="py-3 ltr:pl-4 rtl:pr-4">
													<div className="flex items-center h-5 justify-center">
														<input id="hs-table-search-checkbox-13" type="checkbox" className="ti-form-checkbox"/>
														<label htmlFor="hs-table-search-checkbox-13" className="sr-only">Checkbox</label>
													</div>
												</td>
												<td className="font-medium">Joe Black</td>
												<td>31</td>
												<td>Sidney No. 1 Lake Park</td>
												<td className="text-end font-medium">
													<Link className="text-primary hover:text-primary" to="#">Delete</Link>
												</td>
											</tr>

											<tr>
												<td className="py-3 ltr:pl-4 rtl:pr-4">
													<div className="flex items-center h-5 justify-center">
														<input id="hs-table-search-checkbox-14" type="checkbox" className="ti-form-checkbox"/>
														<label htmlFor="hs-table-search-checkbox-14" className="sr-only">Checkbox</label>
													</div>
												</td>
												<td className="font-medium">Edward King</td>
												<td>16</td>
												<td>LA No. 1 Lake Park</td>
												<td className="text-end font-medium">
													<Link className="text-primary hover:text-primary" to="#">Delete</Link>
												</td>
											</tr>

											<tr>
												<td className="py-3 ltr:pl-4 rtl:pr-4">
													<div className="flex items-center h-5 justify-center">
														<input id="hs-table-search-checkbox-15" type="checkbox" className="ti-form-checkbox"/>
														<label htmlFor="hs-table-search-checkbox-15" className="sr-only">Checkbox</label>
													</div>
												</td>
												<td className="font-medium">Jim Red</td>
												<td>45</td>
												<td>Melbourne No. 1 Lake Park</td>
												<td className="text-end font-medium">
													<Link className="text-primary hover:text-primary" to="#">Delete</Link>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="py-1 px-4">
									<nav className="flex items-center space-x-0 rtl:space-x-reverse">
										<Link className="text-gray-400 dark:text-white/70 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-md" to="#">
											<span aria-hidden="true">«</span>
											<span className="sr-only">Previous</span>
										</Link>
										<Link className="w-10 h-10 bg-primary text-white p-4 inline-flex items-center text-sm font-medium rounded-full" to="#" aria-current="page">1</Link>
										<Link className="w-10 h-10 text-gray-400 dark:text-white/70 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" to="#">2</Link>
										<Link className="w-10 h-10 text-gray-400 dark:text-white/70 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" to="#">3</Link>
										<Link className="text-gray-400 dark:text-white/70 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-md" to="#">
											<span className="sr-only">Next</span>
											<span aria-hidden="true">»</span>
										</Link>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box overflow-hidden tabel-widthdiv">
						<div className="box-header">
							<h5 className="box-title">Tables With Div</h5>
						</div>
						<div className="box-body p-0">
							<div className="-m-1.5 overflow-auto">
								<div className="p-1.5 min-w-full inline-block align-middle">
									<div className="overflow-auto">
										<div className="table border-collapse table-auto w-full divide-y divide-gray-200 dark:divide-white/10">
											<div className="table-header-group">
												<div className="table-row">
													<div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</div>
													<div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Age</div>
													<div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Address</div>
													<div className="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</div>
												</div>
											</div>
											<div className="table-row-group divide-y divide-gray-200 bg-white dark:divide-white/10 dark:bg-black/20">
												<div className="table-row">
													<div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</div>
													<div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</div>
													<div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</div>
													<div className="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
														<Link className="text-primary hover:text-primary" to="#">Delete</Link>
													</div>
												</div>
												<div className="table-row">
													<div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Jim Green</div>
													<div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">27</div>
													<div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">London No. 1 Lake Park</div>
													<div className="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
														<Link className="text-primary hover:text-primary" to="#">Delete</Link>
													</div>
												</div>
												<div className="table-row">
													<div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Joe Black</div>
													<div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">31</div>
													<div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Sidney No. 1 Lake Park</div>
													<div className="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
														<Link className="text-primary hover:text-primary" to="#">Delete</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Table Head Primary</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md overflow-auto">
								<table className="ti-custom-table ti-custom-table-head ti-head-primary">
									<thead className="">
										<tr className="!divide-primary/10 dark:!divide-primary/10 ">
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Name</th>
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Age</th>
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Address</th>
											<th scope="col" className="!text-end !text-gray-800  dark:!text-white/70">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Table Head Secondary</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md overflow-auto">
								<table className="ti-custom-table ti-custom-table-head ti-head-secondary">
									<thead className="">
										<tr className="!divide-secondary/10 dark:!divide-secondary/10 ">
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Name</th>
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Age</th>
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Address</th>
											<th scope="col" className="!text-end !text-gray-800  dark:!text-white/70">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-secondary hover:text-secondary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-secondary hover:text-secondary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-secondary hover:text-secondary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Table Head Warning</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md overflow-auto">
								<table className="ti-custom-table ti-custom-table-head ti-head-warning">
									<thead className="">
										<tr className="!divide-warning/10 dark:!divide-warning/10 ">
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Name</th>
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Age</th>
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Address</th>
											<th scope="col" className="!text-end !text-gray-800  dark:!text-white/70">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-warning hover:text-warning" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-warning hover:text-warning" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-warning hover:text-warning" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Table Head Info</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md overflow-auto">
								<table className="ti-custom-table ti-custom-table-head ti-head-info">
									<thead className="">
										<tr className="!divide-info/10 dark:!divide-info/10 ">
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Name</th>
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Age</th>
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Address</th>
											<th scope="col" className="!text-end !text-gray-800  dark:!text-white/70">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-info hover:text-info" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-info hover:text-info" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-info hover:text-info" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Table Head Danger</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md overflow-auto">
								<table className="ti-custom-table ti-custom-table-head ti-head-danger">
									<thead className="bg-danger/20 dark:bg-danger/20">
										<tr className="!divide-danger/10 dark:!divide-danger/10 ">
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Name</th>
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Age</th>
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Address</th>
											<th scope="col" className="!text-end !text-gray-800  dark:!text-white/70">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-danger hover:text-danger" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-danger hover:text-danger" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-danger hover:text-danger" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Table Head Success</h5>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-md overflow-auto">
								<table className="ti-custom-table ti-custom-table-head ti-head-success">
									<thead className="">
										<tr className="!divide-success/10 dark:!divide-success/10 ">
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Name</th>
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Age</th>
											<th scope="col" className="!text-gray-800  dark:!text-white/70">Address</th>
											<th scope="col" className="!text-end !text-gray-800  dark:!text-white/70">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-success hover:text-success" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-success hover:text-success" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-success hover:text-success" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bordered Primary</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-bordered-primary rounded-md">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bordered Secondary</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-bordered-secondary rounded-md">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-secondary hover:text-secondary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-secondary hover:text-secondary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-secondary hover:text-secondary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bordered Warning</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-bordered-warning rounded-md">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-warning hover:text-warning" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-warning hover:text-warning" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-warning hover:text-warning" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bordered Info</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-bordered-info rounded-md">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-info hover:text-info" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-info hover:text-info" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-info hover:text-info" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bordered Danger</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-bordered-danger rounded-md">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-danger hover:text-danger" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-danger hover:text-danger" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-danger hover:text-danger" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bordered Success</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-bordered-success rounded-md">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-success hover:text-success" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-success hover:text-success" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-success hover:text-success" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Primary Table</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-primary rounded-md border border-gray-200 dark:border-white/10">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-primary hover:text-primary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Secondary Table</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-secondary rounded-md border border-gray-200 dark:border-white/10">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-secondary hover:text-secondary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-secondary hover:text-secondary" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-secondary hover:text-secondary" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Warning Table</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-warning rounded-md border border-gray-200 dark:border-white/10">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-warning hover:text-warning" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-warning hover:text-warning" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-warning hover:text-warning" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Info Table</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-info rounded-md border border-gray-200 dark:border-white/10">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-info hover:text-info" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-info hover:text-info" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-info hover:text-info" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Danger Table</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-danger rounded-md border border-gray-200 dark:border-white/10">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-danger hover:text-danger" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-danger hover:text-danger" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-danger hover:text-danger" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Success Table</h5>
						</div>
						<div className="box-body">
							<div className="overflow-auto table-success rounded-md border border-gray-200 dark:border-white/10">
								<table className="ti-custom-table ti-custom-table-head">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Age</th>
											<th scope="col">Address</th>
											<th scope="col" className="!text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="font-medium">John Brown</td>
											<td>45</td>
											<td>New York No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-success hover:text-success" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Jim Green</td>
											<td>27</td>
											<td>London No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-success hover:text-success" to="#">Delete</Link>
											</td>
										</tr>

										<tr>
											<td className="font-medium">Joe Black</td>
											<td>31</td>
											<td>Sidney No. 1 Lake Park</td>
											<td className="text-end font-medium">
												<Link className="text-success hover:text-success" to="#">Delete</Link>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Basictable;