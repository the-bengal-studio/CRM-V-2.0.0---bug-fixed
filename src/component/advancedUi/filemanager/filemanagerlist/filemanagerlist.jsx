import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import { Filemanagerlistdata } from "../filemanagermain/reactfiledata";
const Filemanagerlist = () => {
	const [allData, setAllData] = useState(Filemanagerlistdata)
	let allElement2 = [];
	let myfunction = (InputData) => {
		let allElement
		for (allElement of Filemanagerlistdata) {
			if (allElement.typeoffile[0] == " ") {
				allElement.typeoffile = allElement.typeoffile.trim()
			}
			if (allElement.typeoffile.toLowerCase().includes(InputData.toLowerCase())) {
				if (allElement.typeoffile.toLowerCase().startsWith(InputData.toLowerCase())) {
					allElement2.push(allElement);
				}
			}
		}
		setAllData(allElement2);
	};
	return (
		<Fragment>
			<PageHeader currentpage="File Manager List " activepage="Advance UI" mainpage="File Manager List" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box !bg-transparent border-0 shadow-none p-0">
						<div className="md:flex justify-between space-y-2 md:space-y-0">
							<div className="relative max-w-xs my-auto">
								<label className="sr-only">Search</label>
								<input type="text" className="p-3 ltr:pl-10 rtl:pr-10 ti-form-input" onChange={(ele) => { myfunction(ele.target.value) }} placeholder="Search for items" />
								<div className="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center pointer-events-none ltr:pl-4 rtl:pr-4">
									<svg className="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
										<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
									</svg>
								</div>
							</div>
							<div className="sm:space-x-3 space-x-0 sm:flex space-y-2 sm:space-y-0 items-center rtl:space-x-reverse">
								<button type="button" className="ti-btn ti-btn-primary m-0">Upload New Files</button>
								<div className="my-auto">
									<nav className="flex sm:justify-center" aria-label="Tabs" role="tablist">
										<button aria-label="button" type="button" className="hs-tab-active:!bg-primary hs-tab-active:!text-white dark:hs-tab-active:border-b-white/10 -mb-px py-2 px-3 inline-flex items-center bg-gray-50 text-sm font-medium text-center border text-gray-500 ltr:rounded-l-sm rtl:rounded-r-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 active" role="tab">
											<i className="ri ri-layout-grid-line"></i>
										</button>
										<button aria-label="button" type="button" className="hs-tab-active:!bg-primary hs-tab-active:!text-white dark:hs-tab-active:border-b-white/10 -mb-px py-2 px-3 inline-flex items-center bg-gray-50 text-sm font-medium text-center border ltr:border-l-0 rtl:border-r-0 text-gray-500 ltr:rounded-r-sm rtl:rounded-l-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" role="tab">
											<i className="ri ri-list-check"></i>
										</button>
									</nav>
								</div>
								<div className="hs-dropdown my-auto w-fit">
									<button aria-label="button" id="hs-dropdown-custom-icon-trigger" type="button" className="hs-dropdown-toggle py-2 px-3 ti-dropdown-toggle rounded-md dark:hover:bg-black/20">
										<i className="ri ri-time-line"></i>
										<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
										</svg>
									</button>
									<div className="hs-dropdown-menu ti-dropdown-menu hidden" aria-labelledby="hs-dropdown-custom-icon-trigger">
										<Link className="ti-dropdown-item" to="#">
											Date
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Name
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Type
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Size
										</Link>
										<Link className="ti-dropdown-item" to="#">
											Starred
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">

				{allData.map((items) => (
					<div className="col-span-12 sm:col-span-6 md:!col-span-4 xxl:!col-span-2" key={items.id}>
						<div className="box">
							<div className={`box-body ${items.class}`}>
								<div className="relative mx-auto">
									<Link to={`${import.meta.env.BASE_URL}advancedUi/filemanager/filedetails/`}>
										<img className={`mx-auto ${items.class3}`} src={items.floderimg} alt="img" />
									</Link>
									<div className={items.class1}>
										<Link aria-label="anchor" to="#"><i className={`ri ri-star-line hover:text-warning text-base ${items.class4}`}></i></Link>
									</div>
									<div className={items.class2}>
										<button aria-label="button" id="hs-dropdown-custom-icon-trigger1" type="button"
											className="hs-dropdown-toggle p-0 !bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0  ti-dropdown-toggle">
											<svg className="ti-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="16"
												height="16" fill="currentColor" viewBox="0 0 16 16">
												<path
													d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
												</path>
											</svg>
										</button>
										<div className="hs-dropdown-menu ti-dropdown-menu" aria-labelledby="hs-dropdown-custom-icon-trigger1">
											<Link className="ti-dropdown-item" to="#"><i className="ri ri-edit-2-line text-lg"></i>Edit</Link>
											<Link className="ti-dropdown-item" to="#"><i className="ri ri-share-line text-lg"></i>share</Link>
											<Link className="ti-dropdown-item" to="#"><i className="ri ri-download-2-line text-lg"></i>Download</Link>
											<Link className="ti-dropdown-item" to="#"><i className="ri ri-delete-bin-6-line text-lg"></i>Delete</Link>
											<Link className="ti-dropdown-item" to="#"><i className="ri ri-information-line text-lg"></i>Info</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="box-footer overflow-auto">
								<div className="flex justify-between">
									<div className="space-y-1"><p className="text-sm font-semibold">{items.typeoffile}</p><p className="text-gray-500 dark:text-white/70 text-xs">{items.filesize}</p></div>
									<div className="my-auto">{items.viewer}</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</Fragment>
	);
};

export default Filemanagerlist;
