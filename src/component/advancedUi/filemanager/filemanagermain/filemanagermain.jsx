import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';
import ALLImages from "../../../../common/imagesData";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { RecentfileData } from "./reactfiledata";
import { FileChart } from "../../../../common/chartdata";

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
const Filemanagermain = () => {

	//React filepond

	const [files, setFiles] = useState([]);

	const [allData, setAllData] = useState(RecentfileData)

	let allElement2 = [];
	let myfunction = (InputData) => {
		let allElement
		for (allElement of RecentfileData) {
			if (allElement.name[0] == " ") {
				allElement.name = allElement.name.trim()
			}
			if (allElement.name.toLowerCase().includes(InputData.toLowerCase())) {
				if (allElement.name.toLowerCase().startsWith(InputData.toLowerCase())) {
					allElement2.push(allElement);
				}
			}
		}
		setAllData(allElement2);
	};
	return (
		<Fragment>
			<PageHeader currentpage="File Manager" activepage="Advance UI" mainpage="File Manager" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-body">
							<div>
								<div className="w-40 h-40 relative mx-auto mb-5">
									<div className="w-full h-10 absolute top-1/2 ltr:left-0 rtl:right-0 text-center -mt-5 leading-[28px]">
										80% <br />
										Used
									</div>
									<FileChart />
								</div>
								<div className="grid grid-cols-12 gap-6 overflow-auto">
									<div className="col-span-12 lg:col-span-6 text-center ltr:border-r dark:border-white/10 rtl:border-l">
										<h3 className="font-bold">512Mb</h3>
										<p className="text-gray-500 dark:text-white/70 text-sm">Total Space</p>
									</div>
									<div className="col-span-12 lg:col-span-6  text-center">
										<h3 className="font-bold">480Mb</h3>
										<p className="text-gray-500 dark:text-white/70 text-sm">Total Space Used</p>
									</div>
								</div>
							</div>
							<Link to="#" className="ti-btn w-full mt-5 mb-0 ti-btn-primary p-2"><i className="ri ri-upload-cloud-2-line"></i>Upgrade Your Plan</Link>
						</div>
					</div>
					<div className="box">
						<div className="box-body">
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-3 rtl:space-x-reverse">
									<div className="flex-shrink-0">
										<span
											className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-danger/20">
											<span className="font-medium text-danger leading-none">
												<i className="ri ri-alert-line"></i>
											</span>
										</span>
									</div>
									<div className="ltr:ml-4 rtl:mr-4">
										<h3 className="text-sm font-semibold">
											Junk Cleaner
										</h3>
										<div className="mt-1 text-sm">
											Clear 5Gb of Duplicate Files
										</div>
									</div>
								</div>
								<div className="space-x-2">
									<Link to="#" className="ti-btn ti-btn-secondary p-2 mb-0"><span>Clean</span></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="box-body">
							<ul className="flex flex-col">
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white py-1 rounded-md mb-3">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3 rtl:space-x-reverse">
											<div>
												<span className="font-medium">
													<i className="ri ri-image-line text-secondary text-xl"></i>
												</span>
											</div>
											<div className="ltr:ml-3 rtl:mr-3">
												<h3 className="text-sm font-semibold">
													Image
												</h3>
												<p className="text-xs text-gray-500 dark:text-white/70">20GB</p>
											</div>
										</div>
										<div className="space-x-2 rtl:rotate-180">
											<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
										</div>
									</div>
								</li>
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white py-1 rounded-md mb-3">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3 rtl:space-x-reverse">
											<div>
												<span className="font-medium">
													<i className="ri ri-file-line text-primary text-xl"></i>
												</span>
											</div>
											<div className="ltr:ml-3 rtl:mr-3">
												<h3 className="text-sm font-semibold">
													Documents
												</h3>
												<p className="text-xs text-gray-500 dark:text-white/70">1.5GB</p>
											</div>
										</div>
										<div className="space-x-2 rtl:rotate-180">
											<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
										</div>
									</div>
								</li>
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white py-1 rounded-md mb-3">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3 rtl:space-x-reverse">
											<div>
												<span className="font-medium">
													<i className="ri ri-vidicon-line text-warning text-xl"></i>
												</span>
											</div>
											<div className="ltr:ml-3 rtl:mr-3">
												<h3 className="text-sm font-semibold">
													Video
												</h3>
												<p className="text-xs text-gray-500 dark:text-white/70">1.25GB</p>
											</div>
										</div>
										<div className="space-x-2 rtl:rotate-180">
											<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
										</div>
									</div>
								</li>
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white py-1 rounded-md mb-3">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3 rtl:space-x-reverse">
											<div>
												<span className="font-medium">
													<i className="ri ri-music-2-line text-info text-xl"></i>
												</span>
											</div>
											<div className="ltr:ml-3 rtl:mr-3">
												<h3 className="text-sm font-semibold">
													Audio
												</h3>
												<p className="text-xs text-gray-500 dark:text-white/70">2GB</p>
											</div>
										</div>
										<div className="space-x-2 rtl:rotate-180">
											<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
										</div>
									</div>
								</li>
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white py-1 rounded-md mb-3">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3 rtl:space-x-reverse">
											<div>
												<span className="font-medium">
													<i className="ri ri-file-line text-danger text-xl"></i>
												</span>
											</div>
											<div className="ltr:ml-3 rtl:mr-3">
												<h3 className="text-sm font-semibold">
													Archive
												</h3>
												<p className="text-xs text-gray-500 dark:text-white/70">1.3GB</p>
											</div>
										</div>
										<div className="space-x-2 rtl:rotate-180">
											<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
										</div>
									</div>
								</li>
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white py-1 rounded-md mb-3">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3 rtl:space-x-reverse">
											<div>
												<span className="font-medium">
													<i className="ri ri-server-line text-success text-xl"></i>
												</span>
											</div>
											<div className="ltr:ml-3 rtl:mr-3">
												<h3 className="text-sm font-semibold">
													Zip
												</h3>
												<p className="text-xs text-gray-500 dark:text-white/70">1.5GB</p>
											</div>
										</div>
										<div className="space-x-2 rtl:rotate-180">
											<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
										</div>
									</div>
								</li>
								<li className="flex flex-col gap-x-3.5 bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white py-1 rounded-md">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3 rtl:space-x-reverse">
											<div>
												<span className="font-medium">
													<i className="ri ri-folder-line text-gray-400 dark:text-white text-xl"></i>
												</span>
											</div>
											<div className="ltr:ml-3 rtl:mr-3">
												<h3 className="text-sm font-semibold">
													Others
												</h3>
												<p className="text-xs text-gray-500 dark:text-white/70">5GB</p>
											</div>
										</div>
										<div className="space-x-2 rtl:rotate-180">
											<i className="ri ri-arrow-right-s-line text-gray-500 dark:text-white/70 text-lg"></i>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="box">
						<div className="box-body">
							<FilePond className="file-manager filepond multiple-filepond !mb-0" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
								server="/api" allowReorder={true} files={files} onupdatefiles={setFiles} allowMultiple={false} allowImagePreview={true} maxFiles={10} name="filepond"
								labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-9">
					<div className="box !bg-transparent border-0 shadow-none">
						<div className="grid grid-cols-12 gap-6">
							<div className="col-span-12 xxl:col-span-8">
								<div className="box py-5">
									<div className="grid grid-cols-12 gap-6 text-center">
										<div className="col-span-6 sm:col-span-3 mt-3 mx-auto">
											<div className="space-y-3">
												<span><i className="ri ri-image-line text-xl text-primary p-3 bg-primary/20 rounded-md"></i></span>
												<h3 className="text-sm text-center text-gray-500 dark:text-white/70">Image</h3>
											</div>
										</div>
										<div className="col-span-6 sm:col-span-3 mt-3 mx-auto">
											<div className="space-y-3">
												<span><i className="ri ri-vidicon-line text-xl text-secondary p-3 bg-secondary/20 rounded-md"></i></span>
												<h3 className="text-sm text-center text-gray-500 dark:text-white/70">Video</h3>
											</div>
										</div>
										<div className="col-span-6 sm:col-span-3 mt-3 mx-auto">
											<div className="space-y-3">
												<span><i className="ri ri-music-2-line text-xl text-danger p-3 bg-danger/20 rounded-md"></i></span>
												<h3 className="text-sm text-center text-gray-500 dark:text-white/70">Audio</h3>
											</div>
										</div>
										<div className="col-span-6 sm:col-span-3 mt-3 mx-auto">
											<div className="space-y-3">
												<span><i className="ri ri-file-line text-xl text-info p-3 bg-info/20 rounded-md"></i></span>
												<h3 className="text-sm text-center text-gray-500 dark:text-white/70">Document</h3>
											</div>
										</div>
										<div className="col-span-6 sm:col-span-3 mt-3 mx-auto">
											<div className="space-y-3">
												<span><i className="ri ri-smartphone-line text-xl text-warning p-3 bg-warning/20 rounded-md"></i></span>
												<h3 className="text-sm text-center text-gray-500 dark:text-white/70">Pdfs</h3>
											</div>
										</div>
										<div className="col-span-6 sm:col-span-3 mt-3 mx-auto">
											<div className="space-y-3">
												<span><i className="ri ri-file-line text-xl text-pink-800 p-3 bg-pink-800/20 rounded-md"></i></span>
												<h3 className="text-sm text-center text-gray-500 dark:text-white/70">Archive</h3>
											</div>
										</div>
										<div className="col-span-6 sm:col-span-3 mt-3 mx-auto">
											<div className="space-y-3">
												<span><i className="ri ri-download-2-line text-xl text-blue-800 p-3 bg-blue-800/20 rounded-md"></i></span>
												<h3 className="text-sm text-center text-gray-500 dark:text-white/70">Downloads</h3>
											</div>
										</div>
										<div className="col-span-6 sm:col-span-3 mt-3 mx-auto">
											<div className="space-y-3">
												<span><i className="ri ri-folder-line text-xl text-rose-800 p-3 bg-rose-800/20 rounded-md"></i></span>
												<h3 className="text-sm text-center text-gray-500 dark:text-white/70">All Files</h3>
											</div>
										</div>
									</div>
								</div>
								<h3 className="font-semibold text-lg my-4">Quick Access</h3>
								<div className="grid grid-cols-12 gap-6">
									<div className="col-span-12 sm:col-span-6 lg:!col-span-3">
										<div className="box mb-0 overflow-hidden">
											<div className="box-body">
												<Link to={`${import.meta.env.BASE_URL}advancedUi/filemanager/filedetails/`} className="mx-auto my-3"><img className="mx-auto" src={ALLImages('png46')} alt="img" /></Link>
											</div>
											<div className="box-footer bg-transparent">
												<div className="flex justify-between">
													<div><p className="text-sm">File.pdf</p></div>
													<div><p className="text-sm">20MB</p></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-span-12 sm:col-span-6 lg:!col-span-3">
										<div className="box mb-0 overflow-hidden">
											<div className="box-body">
												<Link to={`${import.meta.env.BASE_URL}advancedUi/filemanager/filedetails/`} className="mx-auto my-3"><img className="mx-auto" src={ALLImages('png53')} alt="img" /></Link>
											</div>
											<div className="box-footer bg-transparent">
												<div className="flex justify-between">
													<div><p className="text-sm">projects.doc</p></div>
													<div><p className="text-sm">30MB</p></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-span-12 sm:col-span-6 lg:!col-span-3">
										<div className="box mb-0 overflow-hidden">
											<div className="box-body">
												<Link to={`${import.meta.env.BASE_URL}advancedUi/filemanager/filedetails/`} className="mx-auto my-3"><img className="mx-auto" src={ALLImages('png47')} alt="img" /></Link>
											</div>
											<div className="box-footer bg-transparent">
												<div className="flex justify-between">
													<div><p className="text-sm">6.png</p></div>
													<div><p className="text-sm">25MB</p></div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-span-12 sm:col-span-6 lg:!col-span-3">
										<div className="box mb-0 overflow-hidden">
											<div className="box-body">
												<Link to={`${import.meta.env.BASE_URL}advancedUi/filemanager/filedetails/`} className="mx-auto my-3"><img className="mx-auto" src={ALLImages('png49')} alt="img" /></Link>
											</div>
											<div className="box-footer bg-transparent">
												<div className="flex justify-between">
													<div><p className="text-sm">Documents</p></div>
													<div><p className="text-sm">350MB</p></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-span-12 xxl:col-span-4">
								<div className="box">
									<div className="box-body space-y-3">
										<p className="text-base font-semibold py-2 inline-flex"><i className="ri ri-smartphone-line ltr:mr-2 rtl:ml-2 p-2.5 bg-primary/20 text-primary rounded-full avatar avatar-sm leading-none"></i><span>Internal Storage</span></p>
										<div className="ti-main-progress bg-gray-200 dark:bg-black/20 h-2">
											<div className="ti-main-progress-bar bg-primary" role="progressbar"
												style={{ width: '85%' }}
												aria-valuenow="80"
												aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="flex items-center justify-between text-xs">
											<span className="text-gray-500 dark:text-white/70">480.24 Gb / 512 GB</span>
											<Link to="#" className="text-primary">Manage Files</Link>
										</div>
									</div>
								</div>
								<div className="box">
									<div className="box-body space-y-3">
										<p className="text-base font-semibold py-2 inline-flex"><i className="ri ri-cpu-line ltr:mr-2 rtl:ml-2 p-2.5 bg-danger/20 text-danger rounded-full avatar avatar-sm leading-none"></i><span>External Storage</span></p>
										<div className="ti-main-progress bg-gray-200 dark:bg-black/20 h-2">
											<div className="ti-main-progress-bar bg-danger" role="progressbar"
												style={{ width: '70%' }}
												aria-valuenow="60"
												aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="flex items-center justify-between text-xs"> <span
											className="text-gray-500 dark:text-white/70">10Gb / 16GB</span> <Link
												to="#" className="text-danger">Manage Files</Link>
										</div>
									</div>
								</div>
								<div className="box">
									<div className="box-body space-y-3">
										<p className="text-base font-semibold py-2 inline-flex"><i className="ri ri-cloud-line ltr:mr-2 rtl:ml-2 p-2.5 bg-secondary/20 text-secondary rounded-full avatar avatar-sm leading-none"></i><span>CLoud Storage</span></p>
										<div className="ti-main-progress bg-gray-200 dark:bg-black/20 h-2">
											<div className="ti-main-progress-bar bg-secondary" role="progressbar"
												style={{ width: '50%' }}
												aria-valuenow="40"
												aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="flex items-center justify-between text-xs"> <span
											className="text-gray-500 dark:text-white/70">3Gb / 8 GB</span> <Link
												to="#" className="text-secondary">Manage Files</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Recent Files</h5>
						</div>
						<div className="box-body">
							<div className="pb-5">
								<div className="md:flex justify-between space-y-2 md:space-y-0">
									<div className="relative max-w-xs">
										<label htmlFor="hs-table-search" className="sr-only">Search</label>
										<input type="text" onChange={(ele) => { myfunction(ele.target.value) }} name="hs-table-search" id="hs-table-search" className="p-2 ltr:pr-10 rtl:pl-10 ti-form-input" placeholder="Search for items" />
										<div className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-4 rtl:pl-4">
											<svg className="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
												<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
											</svg>
										</div>
									</div>
									<div className="md:ltr:ml-auto md:rtl:mr-auto">
										<Link to="#" className="ti-btn text-xs m-0 ti-btn-soft-success p-2"><i className="ri ri-add-circle-line"></i>Create New File</Link>
									</div>
								</div>
							</div>
							<div className="overflow-auto">
								<table className="ti-custom-table  table-bordered ti-custom-table-head">
									<thead className="bg-gray-50 dark:bg-black/20">
										<tr>
											<th scope="col" className="!min-w-[13rem]">Name</th>
											<th scope="col">Files</th>
											<th scope="col">Size</th>
											<th scope="col">Type</th>
											<th scope="col">Modified Date</th>
											<th scope="col" className="!min-w-[13rem]">Members</th>
											<th scope="col" className="!text-end">options</th>
										</tr>
									</thead>
									<tbody>
										{allData.map((idx) => (
											<tr key={Math.random()}>
												<td className="font-medium">
													<Link className="flex items-center space-x-2 rtl:space-x-reverse" to={`${import.meta.env.BASE_URL}advancedUi/filemanager/filemanagerlist`}>
														<img src={ALLImages('png49')} alt="img" className="w-10" />
														<span>{idx.name}</span>
													</Link>
												</td>
												<td>{idx.File}</td>
												<td>{idx.Size}</td>
												<td>{idx.Type}</td>
												<td>{idx.Date}</td>
												<td>
													<div className="flex -space-x-2 rtl:space-x-reverse">
														<img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={ALLImages('jpg64')} alt="Image Description" />
														<img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={ALLImages('jpg60')} alt="Image Description" />
														<img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={ALLImages('jpg62')} alt="Image Description" />
														<img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={ALLImages('jpg63')} alt="Image Description" />
														<img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={ALLImages('jpg58')} alt="Image Description" />
													</div>
												</td>
												<td className="!text-end">
													<div className="hs-dropdown ti-dropdown">
														<button aria-label="button" id="hs-dropdown-custom-icon-trigger1" type="button" className="hs-dropdown-toggle p-3 ti-dropdown-toggle">
															<svg className="ti-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
																<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
																</path>
															</svg>
														</button>
														<div className="hs-dropdown-menu ti-dropdown-menu hidden" aria-labelledby="hs-dropdown-custom-icon-trigger1" >
															<Link className="ti-dropdown-item" to="#">
																Action
															</Link>
															<Link className="ti-dropdown-item" to="#">
																Another Action
															</Link>
															<Link className="ti-dropdown-item" to="#">
																Something Else Here
															</Link>
														</div>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div className="py-1 ltr:float-right rtl:float-left">
								<nav className="flex items-center space-x-2 rtl:space-x-reverse">
									<Link className="text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-md" to="#">
										<span aria-hidden="true">«</span>
										<span className="sr-only">Previous</span>
									</Link>
									<Link className="w-10 h-10 bg-primary text-white p-4 inline-flex items-center text-sm font-medium rounded-full" to="#" aria-current="page">1</Link>
									<Link className="w-10 h-10 text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" to="#">2</Link>
									<Link className="w-10 h-10 text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" to="#">3</Link>
									<Link className="text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-md" to="#">
										<span className="sr-only">Next</span>
										<span aria-hidden="true">»</span>
									</Link>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>

		</Fragment>
	);
};

export default Filemanagermain;
