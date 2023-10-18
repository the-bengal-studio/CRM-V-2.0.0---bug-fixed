import React from "react";
import ALLImages from "../../../../common/imagesData";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import { LightboxGallery, SpacebetweenSwiper } from "./filedetailscarcousel";

const Filedetails = () => {
	return (
		<>
			<PageHeader currentpage="File Details" activepage="Advance UI" mainpage="File Details" />
			<div className="grid grid-cols-12 xl:gap-6">
				<div className="col-span-12 xl:col-span-8">
					<div className="box">
						<div className="box-body space-y-4">
							<img className="rounded-md" src={ALLImages('jpg17')} alt="Image Description" />
							<div className="sm:flex justify-between space-y-2 sm:space-y-0">
								<div className="flex space-x-2 rtl:space-x-reverse"><i className="ri ri-image-line text-primary p-2 leading-none bg-primary/20 rounded-md"></i><h3 className="my-auto font-bold">Nature.jpg</h3></div>
								<div className="flex space-x-3 rtl:space-x-reverse">
									<i className="ri ri-edit-2-line p-2 leading-none bg-gray-200 text-gray-500 dark:text-white/70 dark:bg-black/20 rounded-md"></i>
									<i className="ri ri-star-line p-2 leading-none bg-gray-200 text-gray-500 dark:text-white/70 dark:bg-black/20 rounded-md"></i>
									<i className="ri ri-share-line p-2 leading-none bg-gray-200 text-gray-500 dark:text-white/70 dark:bg-black/20 rounded-md"></i>
									<i className="ri ri-download-2-line p-2 leading-none bg-gray-200 text-gray-500 dark:text-white/70 dark:bg-black/20 rounded-md"></i>
									<i className="ri ri-delete-bin-6-line p-2 leading-none bg-gray-200 text-gray-500 dark:text-white/70 dark:bg-black/20 rounded-md"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Related Files</h5>
						</div>
						<div className="box-body">
							<SpacebetweenSwiper />
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">File Details</h5>
						</div>
						<div className="box-body p-0">
							<div className="rounded-lg overflow-auto">
								<table className="ti-custom-table ti-custom-table-head">
									<tbody>
										<tr className="divide-x divide-gray-200 dark:divide-white/10">
											<td className="font-medium">Type</td>
											<td>Jpg File(.jpg)</td>
										</tr>

										<tr className="divide-x divide-gray-200 dark:divide-white/10">
											<td className="font-medium">Location</td>
											<td>file/gallery</td>
										</tr>

										<tr className="divide-x divide-gray-200 dark:divide-white/10">
											<td className="font-medium">Size</td>
											<td>909KB</td>
										</tr>

										<tr className="divide-x divide-gray-200 dark:divide-white/10">
											<td className="font-medium">Created Date</td>
											<td>1-10-2022</td>
										</tr>

										<tr className="divide-x divide-gray-200 dark:divide-white/10">
											<td className="font-medium">Modified Date</td>
											<td>12-10-2022</td>
										</tr>

										<tr className="divide-x divide-gray-200 dark:divide-white/10">
											<td className="font-medium">Dimensions</td>
											<td>7360 * 4912</td>
										</tr>

										<tr className="divide-x divide-gray-200 dark:divide-white/10">
											<td className="font-medium">File Location</td>
											<td>Device/Storage/Archives/AMB-2012.zip</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">File Description</h5>
						</div>
						<div className="box-body">
							<p className="mb-3">
								This file contains 3 folder Synto.main &amp; Synto.premium &amp; Synto.featured and 42 images and layout styles are added in this update.
							</p>
							<h5 className="font-semibold text-slate-700 dark:text-white text-sm">Shared With :-</h5>
							<div className="flex -space-x-2 rtl:space-x-reverse mt-2">
								<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg57')} alt="Image Description" />
								<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg60')} alt="Image Description" />
								<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg62')} alt="Image Description" />
								<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg61')} alt="Image Description" />
								<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg63')} alt="Image Description" />
								<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg58')} alt="Image Description" />
								<img className="avatar avatar-sm rounded-full" src={ALLImages('jpg65')} alt="Image Description" />
								<span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
									<span className="font-medium text-gray-500 leading-none dark:text-white/70">9+</span>
								</span>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Recent Files</h5>
						</div>
						<div className="box-body">
							<div className="relative">
								<div className="sm:grid grid-cols-12 gap-6 sm:space-y-0 space-y-6">
									<LightboxGallery />
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
};

export default Filedetails;
