import React, { useState } from "react";
import ALLImages from "../../../../common/imagesData";
import { BlogCatagories, PlubishStatus } from "../../../../common/select2data";
import Select from 'react-dropdown-select';
import SunEditor from "suneditor-react";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import DatePicker from 'react-datepicker';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const Blogedit = () => {

	const [startDate, setStartDate] = useState(new Date()); //React date picker

	const [files, setFiles] = useState([]);  //file pond 

	return (
		<div>
			<PageHeader currentpage="Edit Blog" activepage="Pages" mainpage="Edit Blog" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xxl:col-span-9">
					<div className="box">
						<div className="box-body space-y-5">
							<div>
								<label htmlFor="input-label1" className="ti-form-label">Blog Title</label>
								<input type="text" id="input-label1" className="ti-form-input" placeholder="blogtitle" defaultValue="Myths about Investment" />
							</div>
							<div>
								<label className="ti-form-select-label">Categories</label>
								<Select className="blog-tag2" multi options={BlogCatagories} values={[]} onChange={(value) => console.log(value)} />
							</div>
							<div>
								<label htmlFor="input-label" className="ti-form-label">Content</label>
								<SunEditor className='ht-250' height="260" />
							</div>
							<div>
								<label htmlFor="input-label" className="ti-form-label">Upload</label>
								<FilePond className="basic-filepond" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
									server="/api" allowReorder={true} files={files} onupdatefiles={setFiles} allowMultiple={false} allowImagePreview={true} maxFiles={10} name="filepond"
									labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
							</div>
							<div className="sm:grid grid-cols-12 sm:gap-6 space-y-5 sm:space-y-0">
								<div className="col-span-12 lg:col-span-6">
									<label htmlFor="input-label2" className="ti-form-label">Blog Author</label>
									<input type="text" id="input-label2" className="ti-form-input" placeholder="Enter Name" />
								</div>
								<div className="col-span-12 lg:col-span-6">
									<label htmlFor="input-label3" className="ti-form-label">Author Email</label>
									<input type="email" id="input-label3" className="ti-form-input" placeholder="Enter Email" />
								</div>
								<div className="col-span-12">
									<label className="ti-form-select-label">Tags</label>
									<Select className="blog-tag" multi options={BlogCatagories} values={[]} onChange={(value) => console.log(value)} />
								</div>
								<div className="col-span-12 lg:col-span-4 blog-input">
									<label htmlFor="input-label" className="ti-form-label">Blog Published Date</label>
									<div className="flex rounded-sm">
										<div
											className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
											<span className="text-sm text-gray-500 dark:text-white/70"><i className="ri ri-calendar-line"></i></span>
										</div>
										<DatePicker className="ltr:rounded-l-none rtl:rounded-r-none focus:z-10 flatpickr-input w-[320px]" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
									</div>
								</div>
								<div className="col-span-12 lg:col-span-4 blog-input">
									<label htmlFor="input-label" className="ti-form-label">Blog Published Time</label>
									<div className="flex rounded-sm">
										<div className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
											<span className="text-sm text-gray-500 dark:text-white/70"><i className="ri ri-time-line"></i></span>
										</div>
										<DatePicker className="ltr:rounded-l-none rtl:rounded-r-none focus:z-10 flatpickr-input w-[320px]" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
									</div>
								</div>
								<div className="col-span-12 lg:col-span-4 blog-input">
									<label className="ti-form-select-label">Publish Status</label>
									<Select className="blog-tag3" options={PlubishStatus} placeholder='Status' />
								</div>
							</div>
						</div>
						<div className="box-footer bg-transparent">
							<div className="flex items-center justify-between">
								<button type="button" className="py-2 px-3 ti-btn ti-btn-secondary">Save To Draft</button>
								<button type="button" className="py-2 px-3 ti-btn ti-btn-primary">Publish Now</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-body p-0">
							<Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]} className="mySwiper8 !z-0" >
								<SwiperSlide>
									<div className="rtl:dir-rtl">
										<img src={ALLImages('jpg13')} alt="image" />
										<div className="blog-caption text-start">
											<p className="mb-2 text-xs">The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.</p>
											<h6 className="text-base font-semibold mb-2">N.A.S.A</h6>
											<div className="flex items-center">
												<img src={ALLImages('jpg71')} alt="" className="shadow-none ring-transparent avatar avatar-sm !rounded-full ltr:mr-2 rtl:ml-2" />
												<div className="font-semibold">Json Taylor - <span className="text-xs opacity-70 font-normal">12,Dec 2022 - 04:34PM</span></div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide><div className="rtl:dir-rtl">
									<img src={ALLImages('jpg14')} alt="image" />
									<div className="blog-caption text-start">
										<p className="mb-2 text-xs">The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.</p>
										<h6 className="text-base font-semibold mb-2">N.A.S.A</h6>
										<div className="flex items-center">
											<img src={ALLImages('jpg71')} alt="" className="shadow-none ring-transparent avatar avatar-sm !rounded-full ltr:mr-2 rtl:ml-2" />
											<div className="font-semibold">Json Taylor - <span className="text-xs opacity-70 font-normal">12,Dec 2022 - 04:34PM</span></div>
										</div>
									</div>
								</div></SwiperSlide>
								<SwiperSlide><div className="rtl:dir-rtl">
									<img src={ALLImages('jpg15')} alt="image" />
									<div className="blog-caption text-start">
										<p className="mb-2 text-xs">The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.</p>
										<h6 className="text-base font-semibold mb-2">N.A.S.A</h6>
										<div className="flex items-center">
											<img src={ALLImages('jpg71')} alt="" className="shadow-none ring-transparent avatar avatar-sm !rounded-full ltr:mr-2 rtl:ml-2" />
											<div className="font-semibold">Json Taylor - <span className="text-xs opacity-70 font-normal">12,Dec 2022 - 04:34PM</span></div>
										</div>
									</div>
								</div></SwiperSlide>
							</Swiper>
						</div>
					</div>
					<div className="box">
					<div className="box-header">
						<h5 className="box-title">Recent Blogs</h5>
					</div>
					<div className="box-body">
						<ul className="flex flex-col">
							<li className="ti-list-group pt-0 px-0 border-0 text-gray-800 dark:text-white">
								<div className="space-x-3 flex w-full rtl:space-x-reverse">
									<img src={ALLImages('jpg16')} className="avatar avatar-lg rounded-sm ring-0"
										alt="Image Description" />
									<div className="flex justify-between w-full">
										<div className="space-y-1 my-auto">
											<h3 className="font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
											</h3>
											<p className="flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i
												className="ri ri-calendar-line text-xs"></i><span>Sept 29 , 2022</span></p>
										</div>
										<div className="my-auto ltr:ml-auto rtl:mr-auto hidden sm:block">
											<button type="button" aria-label="button"
												className="m-0 p-2 ti-btn bg-gray-100 text-gray-500 hover:text-white hover:bg-gray-500 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-white/10"><i
													className="leading-none ri-arrow-right-s-line rtl:rotate-180"></i></button>
										</div>
									</div>
								</div>
							</li>
							<li className="ti-list-group px-0 border-0 text-gray-800 dark:text-white">
								<div className="space-x-3 flex w-full rtl:space-x-reverse">
									<img src={ALLImages('jpg18')} className="avatar avatar-lg rounded-sm ring-0"
										alt="Image Description" />
									<div className="flex justify-between w-full">
										<div className="space-y-1 my-auto">
											<h3 className="font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
											</h3>
											<p className="flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i
												className="ri ri-time-line text-xs"></i><span>3 hours ago</span></p>
										</div>
										<div className="my-auto ltr:ml-auto rtl:mr-auto hidden sm:block">
											<button type="button" aria-label="button"
												className="m-0 p-2 ti-btn bg-gray-100 text-gray-500 hover:text-white hover:bg-gray-500 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-white/10"><i
													className="leading-none ri-arrow-right-s-line rtl:rotate-180"></i></button>
										</div>
									</div>
								</div>
							</li>
							<li className="ti-list-group px-0 border-0 text-gray-800 dark:text-white">
								<div className="space-x-3 flex w-full rtl:space-x-reverse">
									<img src={ALLImages('jpg17')} className="avatar avatar-lg rounded-sm ring-0"
										alt="Image Description" />
									<div className="flex justify-between w-full">
										<div className="space-y-1 my-auto">
											<h3 className="font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
											</h3>
											<p className="flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i
												className="ri ri-time-line text-xs"></i><span>30 mins ago</span></p>
										</div>
										<div className="my-auto ltr:ml-auto rtl:mr-auto hidden sm:block">
											<button type="button" aria-label="button"
												className="m-0 p-2 ti-btn bg-gray-100 text-gray-500 hover:text-white hover:bg-gray-500 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-white/10"><i
													className="leading-none ri-arrow-right-s-line rtl:rotate-180"></i></button>
										</div>
									</div>
								</div>
							</li>
							<li className="ti-list-group px-0 border-0 text-gray-800 dark:text-white">
								<div className="space-x-3 flex w-full rtl:space-x-reverse">
									<img src={ALLImages('jpg12')} className="avatar avatar-lg rounded-sm ring-0"
										alt="Image Description" />
									<div className="flex justify-between w-full">
										<div className="space-y-1 my-auto">
											<h3 className="font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
											</h3>
											<p className="flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i
												className="ri ri-calendar-line text-xs"></i><span>l day ago</span></p>
										</div>
										<div className="my-auto ltr:ml-auto rtl:mr-auto hidden sm:block">
											<button type="button" aria-label="button"
												className="m-0 p-2 ti-btn bg-gray-100 text-gray-500 hover:text-white hover:bg-gray-500 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-white/10"><i
													className="leading-none ri-arrow-right-s-line rtl:rotate-180"></i></button>
										</div>
									</div>
								</div>
							</li>
							<li className="ti-list-group px-0 border-0 text-gray-800 dark:text-white">
								<div className="space-x-3 flex w-full rtl:space-x-reverse">
									<img src={ALLImages('jpg11')} className="avatar avatar-lg rounded-sm ring-0"
										alt="Image Description" />
									<div className="flex justify-between w-full">
										<div className="space-y-1 my-auto">
											<h3 className="font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
											</h3>
											<p className="flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i
												className="ri ri-calendar-line text-xs"></i><span>l day ago</span></p>
										</div>
										<div className="my-auto ltr:ml-auto rtl:mr-auto hidden sm:block">
											<button type="button" aria-label="button"
												className="m-0 p-2 ti-btn bg-gray-100 text-gray-500 hover:text-white hover:bg-gray-500 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-white/10"><i
													className="leading-none ri-arrow-right-s-line rtl:rotate-180"></i></button>
										</div>
									</div>
								</div>
							</li>
							<li className="ti-list-group px-0 pb-0 border-0 text-gray-800 dark:text-white">
								<div className="space-x-3 flex w-full rtl:space-x-reverse">
									<img src={ALLImages('jpg17')} className="avatar avatar-lg rounded-sm ring-0"
										alt="Image Description" />
									<div className="flex justify-between w-full">
										<div className="space-y-1 my-auto">
											<h3 className="font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
											</h3>
											<p className="flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i
												className="ri ri-time-line text-xs"></i><span>30 mins ago</span></p>
										</div>
										<div className="my-auto ltr:ml-auto rtl:mr-auto hidden sm:block">
											<button type="button" aria-label="button"
												className="m-0 p-2 ti-btn bg-gray-100 text-gray-500 hover:text-white hover:bg-gray-500 ring-offset-white focus:ring-gray-500 dark:bg-black/20 dark:hover:bg-black/30 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-white/10"><i
													className="leading-none ri-arrow-right-s-line rtl:rotate-180"></i></button>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="box-footer text-center">
						<button type="button" className="py-1 px-3 ti-btn ti-btn-primary">
							View More
						</button>
					</div>
				</div>

				<div className="box">
					<div className="box-body">
						<h3 className="font-semibold text-base text-primary">Subscribe For More Blog's</h3>
						<input type="email" id="input-label" className="ti-form-input" placeholder="you@site.com" />
						<button type="button" className="py-2 px-3 w-full ti-btn ti-btn-primary mt-2">
							subscribe
						</button>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
};
export default Blogedit;
