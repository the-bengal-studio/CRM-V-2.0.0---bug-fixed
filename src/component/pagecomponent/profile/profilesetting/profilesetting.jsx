import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import ALLImages from "../../../../common/imagesData";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { TagsInput } from "react-tag-input-component";
import { LanguageData, TimeZoneData } from "../../../../common/select2data";
import ProfileService from "../../../../common/profileservices";
import { Helmet } from "react-helmet";

const Profilesetting = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [selected, setSelected] = useState(['Laravel', 'Angular', 'Html', 'VueJs', 'React' ]);  // react-tag-input-component

			//URl image
			const [UrlImage, setUrlImage] = useState(ALLImages('jpg57'));
			//Disabling input feild
			const [UrlDisabled, setUrlDisabled] = useState(true);
		
			const [fileDisabled, setfileDisabled] = useState(false);
			//Default image
			const [Image, setImage] = useState(ALLImages('jpg57'));
		
			let location = useLocation();
		
		
			const putImage = () => {
				setImage(ProfileService.returnImage())
				if (UrlImage != Image) {
					ProfileService.handleChangeUrl(UrlImage)
					setImage(ProfileService.returnImage())
				}
				// setSmShow(false)
			}
		
			//toggle button for image 
			const toggleImage = (type) => {
				if (type == "fileDisabled") {
					setfileDisabled(false)
					setUrlDisabled(true)
				}
				if (type == "UrlDisabled") {
					setUrlDisabled(false)
					setfileDisabled(true)
				}
			}
			const [ClassName, setClassName] = useState()
		
			useEffect(() => {
				if (ProfileService.returnImage() != undefined) {
					setImage(ProfileService.returnImage())
				}
				let contactItem = document.querySelectorAll(".main-contact-item")
				contactItem.forEach((ele => {
					ele.addEventListener("click", () => {
						setClassName("main-content-body-show")
					});
				}))
		
			}, [location])
	return (
		<div>
			<Helmet>
          <body class={ClassName}></body>
        </Helmet>
			<PageHeader currentpage="Profile Settings" activepage="Pages" mainpage="Profile Settings" />
			<div className= "grid grid-cols-12 gap-x-6">
				<div className= "col-span-12 xl:col-span-3">
					<div className= "box">
						<div className= "box-body relative">
							<div className= "flex relative before:bg-black/50 before:absolute before:w-full before:h-full before:rounded-sm">
								<img src= {ALLImages('png106')} alt="" className= "h-[200px] w-full rounded-sm" id="profile-img2"/>
								<span className= "absolute top-5 ltr:right-5 rtl:left-5 flex p-2 rounded-sm ring-1 ring-black/10 text-white bg-black/10 leading-none">
									<i className= "ri ri-pencil-line"></i>
									
								</span>
							</div>
							<div className= "absolute top-[4.5rem] inset-x-0 text-center space-y-3">
								<div className= "flex justify-center w-full">
									<div className= "relative">
										<img src= {Image} className= "w-24 h-24 rounded-full ring-4 ring-white/10 mx-auto" id="profile-img" alt="pofile-img"/>
										
										<button type="button" className="absolute bottom-0 ltr:right-0 rtl:left-0 block p-1 rounded-full ring-3 ring-white/10 text-white bg-white/10 dark:bg-bgdark leading-none" data-hs-overlay="#hs-small-modal"><i className= "ri ri-pencil-line"></i> <span></span></button>

										<div id="hs-small-modal" className="hs-overlay hidden ti-modal">
											<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
												<div className="ti-modal-content">
													<div className="ti-modal-body">
													<div onClick={() => { toggleImage("fileDisabled") }}>
													<label htmlFor="file-input" className = "sr-only">Choose file</label>
													<input type="file" name="file-input" id="file-input" disabled={fileDisabled} onChange={(ele) => ProfileService.handleChange(ele)} className = " inset-0 block w-full h-full cursor-pointer border my-2 border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/70 file:bg-transparent file:border-0 file:bg-gray-100 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 dark:file:bg-black/20 dark:file:text-white/70"/>
													</div>
													<div onClick={() => { toggleImage("UrlDisabled") }}>
													<input type="text" className= "my-auto ti-form-input"  name="basic-input" id="basic-input" disabled={UrlDisabled} onChange={(ele) => { setUrlImage(ele.target.value) }} placeholder="Paste the URL"/>
													</div><br/>
													<button type="button"  onClick={() => { putImage() }} className= "py-1 px-3 ti-btn ti-btn-primary text-sm m-0">Submit</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className= "box-body pt-0">
							<nav className= "flex flex-col space-y-2" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
								<button type="button" className= "hs-tab-active:bg-primary hs-tab-active:border-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mr-px py-3 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 active" id="profile-settings-item-1" data-hs-tab="#profile-settings-1" aria-controls="profile-settings-1" role="tab">
									<i className= "ri ri-shield-user-line"></i> Personal Settings
								</button>
								<button type="button" className= "hs-tab-active:bg-primary hs-tab-active:border-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mr-px py-3 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" id="profile-settings-item-2" data-hs-tab="#profile-settings-2" aria-controls="profile-settings-2" role="tab">
									<i className= "ri ri-global-line"></i> General Settings
								</button>
								<button type="button" className= "hs-tab-active:bg-primary hs-tab-active:border-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mr-px py-3 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" id="profile-settings-item-3" data-hs-tab="#profile-settings-3" aria-controls="profile-settings-3" role="tab">
									<i className= "ri ri-lock-line"></i> Password Settings
								</button>
								<button type="button" className= "hs-tab-active:bg-primary hs-tab-active:border-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mr-px py-3 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" id="profile-settings-item-4" data-hs-tab="#profile-settings-4" aria-controls="profile-settings-4" role="tab">
									<i className= "ri ri-account-circle-line"></i> Account Settings
								</button>
								<button type="button" className= "hs-tab-active:bg-primary hs-tab-active:border-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mr-px py-3 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" id="profile-settings-item-5" data-hs-tab="#profile-settings-5" aria-controls="profile-settings-5" role="tab">
									<i className= "ri ri-notification-4-line"></i> Notifications Settings
								</button>
							</nav>
						</div>
					</div>
				</div>
				<div className= "col-span-12 xl:col-span-9">
					<div className= "box">
						<div className= "box-body p-0">
							<div id="profile-settings-1" role="tabpanel" aria-labelledby="profile-settings-item-1">
								<div className= "box border-0 shadow-none mb-0">
									<div className= "box-header">
										<h5 className= "box-title leading-none flex"><i className= "ri ri-shield-user-line ltr:mr-2 rtl:ml-2"></i> Personal Settings</h5>
									</div>
									<div className= "box-body">
										<div>
											<div className= "grid lg:grid-cols-2 gap-6">
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">First Name</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="Firstname"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Last Name</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="Lastname"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Phone Number</label>
													<input type="number" className= "my-auto ti-form-input" placeholder="+91 123-456-789"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Email Address</label>
													<input type="email" className= "my-auto ti-form-input" placeholder="your@site.com"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Date Of Birth</label>
													<DatePicker className="ti-form-input rounded-l-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='choose Date' />
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Gender</label>
													<ul className= "flex flex-col sm:flex-row">
														<li className= "ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
															<div className= "relative flex items-start w-full">
																<div className= "flex items-center h-5">
																	<input id="hs-horizontal-list-group-item-radio-1" name="hs-horizontal-list-group-item-radio" type="radio" className= "ti-form-radio" defaultChecked/>
																</div>
																<label htmlFor="hs-horizontal-list-group-item-radio-1" className= "ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                         Female
																</label>
															</div>
														</li>

														<li className= "ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
															<div className= "relative flex items-start w-full">
																<div className= "flex items-center h-5">
																	<input id="hs-horizontal-list-group-item-radio-2" name="hs-horizontal-list-group-item-radio" type="radio" className= "ti-form-radio"/>
																</div>
																<label htmlFor="hs-horizontal-list-group-item-radio-2" className= "ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                          Male
																</label>
															</div>
														</li>

														<li className= "ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
															<div className= "relative flex items-start w-full">
																<div className= "flex items-center h-5">
																	<input id="hs-horizontal-list-group-item-radio-3" name="hs-horizontal-list-group-item-radio" type="radio" className= "ti-form-radio"/>
																</div>
																<label htmlFor="hs-horizontal-list-group-item-radio-3" className= "ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                        Others
																</label>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<div className= "my-5">
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Address</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="Address"/>
												</div>
											</div>
											<div className= "grid lg:grid-cols-2 gap-6">
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">City</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="city"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Country</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="state"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">State</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="state"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Pincode</label>
													<input type="number" className= "my-auto ti-form-input" placeholder="pincode"/>
												</div>
											</div>
											<div className= "mt-5">
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Bio</label>
													<textarea className= "ti-form-input" rows="3" placeholder="Add Your Bio"></textarea>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="profile-settings-2" className= "hidden" role="tabpanel" aria-labelledby="profile-settings-item-2">
								<div className= "box border-0 shadow-none mb-0">
									<div className= "box-header">
										<h5 className= "box-title leading-none flex"><i className= "ri ri-global-line ltr:mr-2 rtl:ml-2"></i> General Settings</h5>
									</div>
									<div className= "box-body">
										<h5 className= "text-base font-semibold">User Details</h5>
										<div className= "my-4">
											<div className= "grid lg:grid-cols-2 gap-6 mb-6">
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">User Id</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="User Id"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Joining Date</label>
													
													<DatePicker className="ti-form-input rounded-l-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='choose Date' />
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Language</label>
													<Select classNamePrefix='react-select' options={LanguageData} placeholder='US-English' />
													
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Time Zone</label>
													<Select classNamePrefix='react-select' options={TimeZoneData} placeholder='(GMT-11:00) Midway Island, Samoa' />

													
												</div>
											</div>
											<div className= "space-y-2" id="skills">
												<label className= "ti-form-label">Skills</label>
												
												<TagsInput className="badge bg-gray-100 border dark:bg-black/20 dark:text-white text-gray-800" value={selected} onChange={setSelected} name="ProductTag" placeHolder="Filter product" />
											</div>
										</div>
										<h5 className= "text-base font-semibold">Education Details</h5>
										<div className= "my-4">
											<div className= "grid lg:grid-cols-3 gap-6">
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Schooling</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="Schooling"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Joining Date</label>
													<DatePicker className="ti-form-input rounded-l-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='choose Date' />
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Completed Date</label>
													<DatePicker className="ti-form-input rounded-l-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='choose Date' />
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Graduation</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="Graduation"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Joining Date</label>
													<DatePicker className="ti-form-input rounded-l-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='choose Date' />
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Completed Date</label>
													<DatePicker className="ti-form-input rounded-l-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='choose Date' />
												</div>
											</div>
										</div>
										<h5 className= "text-base font-semibold">Work  Experience</h5>
										<div className= "my-4">
											<div className= "grid lg:grid-cols-4 gap-6">
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Work 1 :</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="company Name"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Designation</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="Designation"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Joining Date</label>
													<DatePicker className="ti-form-input rounded-l-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='choose Date' />
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Completed Date</label>
													<DatePicker className="ti-form-input rounded-l-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='choose Date' />
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Work 2 :</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="company Name"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Designation</label>
													<input type="text" className= "my-auto ti-form-input" placeholder="Designation"/>
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Joining Date</label>
													<DatePicker className="ti-form-input rounded-l-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='choose Date' />
												</div>
												<div className= "space-y-2">
													<label className= "ti-form-label mb-0">Completed Date</label>
													<DatePicker className="ti-form-input rounded-l-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='choose Date' />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="profile-settings-3" className= "hidden" role="tabpanel" aria-labelledby="profile-settings-item-3">
								<div className= "box border-0 shadow-none mb-0">
									<div className= "box-header">
										<h5 className= "box-title leading-none flex"><i className= "ri ri-lock-line ltr:mr-2 rtl:ml-2"></i> Password Settings</h5>
									</div>
									<div className= "box-body p-0">
										<div className= "grid grid-cols-12">
											<div className= "col-span-12 xl:col-span-6 xl:ltr:border-r xl:rtl:border-l xl:border-b-0 border-b p-6 border-gray-200 dark:border-white/10">
												<div className= "space-y-4">
													<div className= "space-y-2">
														<label className= "ti-form-label mb-0">Email Id<sup className= "text-danger">*</sup></label>
														<input type="email" className= "my-auto ti-form-input" placeholder="Email Id" required/>
													</div>
													<div className= "space-y-2">
														<label className= "ti-form-label mb-0">Current Password<sup className= "text-danger">*</sup></label>
														<input type="password" className= "my-auto ti-form-input" autoComplete="off" placeholder="Current Password" required/>
													</div>
													<div className= "space-y-2">
														<label className= "ti-form-label mb-0">New Password<sup className= "text-danger">*</sup></label>
														<input type="password" className= "my-auto ti-form-input" autoComplete="off" placeholder="New Password" required/>
													</div>
													<div className= "space-y-2">
														<label className= "ti-form-label mb-0">Confirm Password<sup className= "text-danger">*</sup></label>
														<input type="password" className= "my-auto ti-form-input" autoComplete="off" placeholder="Confirm Password" required/>
													</div>
													<p className= "text-xs text-gray-500 dark:text-white/70">Password should be min of <b className= "text-success">10 characters <sup>*</sup> </b> (and up to 100 characters),<b className= "text-success">One Upper Case Character<sup>*</sup></b> and <b className= "text-success">One Special Character<sup>*</sup></b>   e.g., ! @ # ? included.</p>
												</div>
											</div>
											<div className= "col-span-12 xl:col-span-6">
												<div className= "box border-0 shadow-none">
													<div className= "box-header">
														<div className= "sm:flex space-y-4">
															<h5 className= "box-title my-auto">Web Linked Devices</h5>
															<button type="button" className= "py-1 px-3 ti-btn ti-btn-primary text-sm m-0">Log out From All Devices </button>
														</div>
													</div>
													<div className= "box-body">
														<ul className= "flex flex-col">
															<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
																<div className= "sm:flex w-full space-y-2">
																	<div className= "flex space-x-3 rtl:space-x-reverse">
																		<div className= "avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
																			<i className= "ri ri-smartphone-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
																		</div>
																		<div className= "">
																			<p className= "mb-0 text-sm">Mobile-Poco-M2-Pro</p>
																			<p className= "mb-0 text-gray-500 dark:text-white/70 text-xs">Manchester, UK-Nov 30, 04:45PM</p>
																		</div>
																	</div>
																	<div className= "ltr:ml-auto rtl:mr-auto my-auto text-end">
																		<button type="button" className= "px-2 py-1 ti-btn ti-btn-soft-info text-xs">ReWoke</button>
																		<button type="button" className= "px-2 py-1 ti-btn ti-btn-soft-danger text-xs">Logout</button>
																	</div>
																</div>
															</li>
															<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
																<div className= "sm:flex w-full space-y-2">
																	<div className= "flex space-x-3 rtl:space-x-reverse">
																		<div className= "avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
																			<i className= "ri ri-tablet-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
																		</div>
																		<div className= "">
																			<p className= "mb-0 text-sm">Apple Tablet</p>
																			<p className= "mb-0 text-gray-500 dark:text-white/70 text-xs">Manchester, UK-Nov 30, 02:45PM</p>
																		</div>
																	</div>
																	<div className= "ltr:ml-auto rtl:mr-auto my-auto text-end">
																		<button type="button" className= "px-2 py-1 ti-btn ti-btn-soft-info text-xs">ReWoke</button>
																		<button type="button" className= "px-2 py-1 ti-btn ti-btn-soft-danger text-xs">Logout</button>
																	</div>
																</div>
															</li>
															<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
																<div className= "sm:flex w-full space-y-2">
																	<div className= "flex space-x-3 rtl:space-x-reverse">
																		<div className= "avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
																			<i className= "ri ri-airplay-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
																		</div>
																		<div className= "">
																			<p className= "mb-0 text-sm">Dell Desktop</p>
																			<p className= "mb-0 text-gray-500 dark:text-white/70 text-xs">Manchester, UK-Nov 30, 02:45PM</p>
																		</div>
																	</div>
																	<div className= "ltr:ml-auto rtl:mr-auto my-auto text-end">
																		<button type="button" className= "px-2 py-1 ti-btn ti-btn-soft-info text-xs">ReWoke</button>
																		<button type="button" className= "px-2 py-1 ti-btn ti-btn-soft-danger text-xs">Logout</button>
																	</div>
																</div>
															</li>
															<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
																<div className= "sm:flex w-full space-y-2">
																	<div className= "flex space-x-3 rtl:space-x-reverse">
																		<div className= "avatar rounded-sm avatar-sm bg-gray-100 dark:bg-black/20 p-2.5">
																			<i className= "ri ri-macbook-line text-xl leading-none text-gray-500 dark:text-white/70"></i>
																		</div>
																		<div className= "">
																			<p className= "mb-0 text-sm">Lenovo Laptop</p>
																			<p className= "mb-0 text-gray-500 dark:text-white/70 text-xs">Manchester, UK-Nov 30, 02:45PM</p>
																		</div>
																	</div>
																	<div className= "ltr:ml-auto rtl:mr-auto my-auto text-end">
																		<button type="button" className= "px-2 py-1 ti-btn ti-btn-soft-info text-xs">ReWoke</button>
																		<button type="button" className= "px-2 py-1 ti-btn ti-btn-soft-danger text-xs">Logout</button>
																	</div>
																</div>
															</li>
														</ul>
													</div>
												</div>
												<div className= "my-5 px-6">
													<div className= "sm:space-x-6 rtl:space-x-reverse sm:flex space-y-4">
														<label className= "ti-form-label my-auto">Account :</label>
														<button type="button" className= "ti-btn ti-btn-danger">
                                    Deactivate Account
														</button>
														<button type="button" className= "ti-btn-disabled ti-btn ti-btn-success">
                                    Activate Account
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="profile-settings-4" className= "hidden" role="tabpanel" aria-labelledby="profile-settings-item-4">
								<div className= "box border-0 shadow-none mb-0">
									<div className= "box-header">
										<h5 className= "box-title leading-none flex"><i className= "ri ri-account-circle-line ltr:mr-2 rtl:ml-2"></i> Account Settings</h5>
									</div>
									<div className= "box-body">
										<div className= "sm:grid grid-cols-12 gap-6 space-y-6">
											<div className= "col-span-2 my-auto">
												<label className= "ti-form-label mb-0">Verfication Step - 2
													<Link aria-label="anchor" className= "ltr:ml-2 rtl:mr-2" to="#">
														<i className= "ri ri-question-line"></i>
													</Link>
												</label>
											</div>
											<div className= "col-span-10">
												<div className= "flex items-center">
													<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:float-right rtl:float-left m-0 "/>
												</div>
											</div>
										</div>
										<div className= "my-5">
											<nav className= "flex space-x-2 rtl:space-x-reverse mb-4" aria-label="Tabs" role="tablist">
												<button type="button" className= "hs-tab-active:bg-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white py-2 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 active" id="adhar-tab" data-hs-tab="#adhar" aria-controls="adhar" role="tab">
                            Adhar Number
												</button>
												<button type="button" className= "hs-tab-active:bg-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white py-2 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" id="mobile-tab" data-hs-tab="#mobile" aria-controls="mobile" role="tab">
                            mobile Number
												</button>
											</nav>
											<div>
												<div id="adhar" role="tabpanel" aria-labelledby="adhar-tab">
													<input type="text" className= "ti-form-input" placeholder="name" defaultValue="5353 2525 2525"/>
												</div>
												<div id="mobile" className= "hidden" role="tabpanel" aria-labelledby="mobile-tab">
													<input type="number" className= "ti-form-input" placeholder="name" defaultValue="9699696996"/>
												</div>
											</div>
										</div>
										<h5 className= "text-base font-semibold ">Social Accounts</h5>
										<div className= "space-y-3 mt-5">
											<div className= "sm:grid grid-cols-12 gap-6 space-y-4">
												<div className= "col-span-2 my-auto">
													<label className= "ti-form-label">Facebook</label>
												</div>
												<div className= "col-span-10">
													<input type="email" className= "ti-form-input" defaultValue="https://www.facebook.com/Spruha"/>
												</div>
											</div>
											<div className= "sm:grid grid-cols-12 gap-6 space-y-4">
												<div className= "col-span-2 my-auto">
													<label className= "ti-form-label">Twitter</label>
												</div>
												<div className= "col-span-10">
													<input type="email" className= "ti-form-input" defaultValue="twitter.com/spruko.me"/>
												</div>
											</div>
											<div className= "sm:grid grid-cols-12 gap-6 space-y-4">
												<div className= "col-span-2 my-auto">
													<label className= "ti-form-label">Google+</label>
												</div>
												<div className= "col-span-10">
													<input type="email" className= "ti-form-input" defaultValue="spruko.com"/>
												</div>
											</div>
											<div className= "sm:grid grid-cols-12 gap-6 space-y-4">
												<div className= "col-span-2 my-auto">
													<label className= "ti-form-label">Linked in</label>
												</div>
												<div className= "col-span-10">
													<input type="email" className= "ti-form-input" defaultValue="linkedin.com/in/spruko"/>
												</div>
											</div>
											<div className= "sm:grid grid-cols-12 gap-6 space-y-4">
												<div className= "col-span-2 my-auto">
													<label className= "ti-form-label">Github</label>
												</div>
												<div className= "col-span-10">
													<input type="email" className= "ti-form-input" defaultValue="github.com/spruko"/>
												</div>
											</div>
											<div className= "sm:grid grid-cols-12 gap-6 space-y-4">
												<div className= "col-span-2 my-auto">
													<label className= "ti-form-label">Website</label>
												</div>
												<div className= "col-span-10">
													<input type="email" className= "ti-form-input" defaultValue="www.andersonitumay.com"/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="profile-settings-5" className= "hidden" role="tabpanel" aria-labelledby="profile-settings-item-5">
								<div className= "box border-0 shadow-none mb-0">
									<div className= "box-header">
										<h5 className= "box-title leading-none flex"><i className= "ri ri-notification-4-line ltr:mr-2 rtl:ml-2"></i> Notifications Settings</h5>
									</div>
									<div className= "box-body">
										<div className= "space-y-4">
											<div className= "p-4 border border-gray-200 dark:border-white/10 rounded-sm">
												<div className= "md:grid grid-cols-12 gap-6 space-y-4">
													<div className= "col-span-12 md:col-span-6 my-auto">
														<p className= "text-base mb-1 font-semibold">Comments</p>
														<p className= "text-xs mb-0 text-gray-500 dark:text-white/70">The Comment Notifications are the notifications you get for your posts and replies for your comments.</p>
													</div>
													<div className= "col-span-12 md:col-span-6">
														<div className= "space-y-2">
															<div className= "sm:grid grid-cols-12 gap-6 space-y-4 md:text-end">
																<div className= "col-span-9 my-auto">
																	<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Notify Me</label>
																</div>
																<div className= "col-span-3 my-auto">
																	<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:float-right rtl:float-left " defaultChecked/>
																</div>
															</div>
															<div className= "sm:grid grid-cols-12 gap-6 space-y-4 md:text-end">
																<div className= "col-span-9 my-auto">
																	<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Notify Me If Mentioned</label>
																</div>
																<div className= "col-span-3 my-auto">
																	<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:float-right rtl:float-left"/>
																</div>
															</div>
															<div className= "sm:grid grid-cols-12 gap-6 space-y-4 md:text-end">
																<div className= "col-span-9 my-auto">
																	<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Notify For My Posts</label>
																</div>
																<div className= "col-span-3 my-auto">
																	<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:float-right rtl:float-left" defaultChecked/>
																</div>
															</div>
															<div className= "sm:grid grid-cols-12 gap-6 space-y-4 md:text-end">
																<div className= "col-span-9 my-auto">
																	<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">All Comments</label>
																</div>
																<div className= "col-span-3 my-auto">
																	<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:float-right rtl:float-left"/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className= "p-4 border border-gray-200 dark:border-white/10 rounded-sm">
												<div className= "md:grid grid-cols-12 gap-6 space-y-4">
													<div className= "col-span-12 md:col-span-6 my-auto">
														<p className= "text-base mb-1 font-semibold">Tags</p>
														<p className= "text-xs mb-0 text-gray-500 dark:text-white/70">The Tag Notifications are the notifications you get when you are tagged for others posts.</p>
													</div>
													<div className= "col-span-12 md:col-span-6">

														<div className= "space-y-2">
															<div className= "sm:grid grid-cols-12 gap-6 space-y-4 md:text-end">
																<div className= "col-span-9 my-auto">
																	<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Notify Me</label>
																</div>
																<div className= "col-span-3 my-auto">
																	<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:float-right rtl:float-left" defaultChecked/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className= "p-4 border border-gray-200 dark:border-white/10 rounded-sm">
												<div className= "md:grid grid-cols-12 gap-6 space-y-4">
													<div className= "col-span-12 md:col-span-6 my-auto">
														<p className= "text-base mb-1 font-semibold">Reminders</p>
														<p className= "text-xs mb-0 text-gray-500 dark:text-white/70">The Reminder Notifications are the notifications you get when you missed any update .</p>
													</div>
													<div className= "col-span-12 md:col-span-6">
														<div className= "space-y-2">
															<div className= "sm:grid grid-cols-12 gap-6 space-y-4 md:text-end">
																<div className= "col-span-9 my-auto">
																	<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Remind Me</label>
																</div>
																<div className= "col-span-3 my-auto">
																	<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:float-right rtl:float-left" defaultChecked/>
																</div>
															</div>
															<div className= "sm:grid grid-cols-12 gap-6 space-y-4 md:text-end">
																<div className= "col-span-9 my-auto">
																	<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Remind Me only Important Updates</label>
																</div>
																<div className= "col-span-3 my-auto">
																	<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:float-right rtl:float-left" defaultChecked/>
																</div>
															</div>
															<div className= "sm:grid grid-cols-12 gap-6 space-y-4 md:text-end">
																<div className= "col-span-9 my-auto">
																	<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Remind Me All updates</label>
																</div>
																<div className= "col-span-3 my-auto">
																	<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:float-right rtl:float-left"/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className= "p-4 border border-gray-200 dark:border-white/10 rounded-sm">
												<div className= "md:grid grid-cols-12 gap-6 space-y-4">
													<div className= "col-span-12 md:col-span-6 my-auto">
														<p className= "text-base mb-1 font-semibold">More Activity</p>
														<p className= "text-xs mb-0 text-gray-500 dark:text-white/70">The Notifications is for likes ,comments,reactions for your profile  .</p>
													</div>
													<div className= "col-span-12 md:col-span-6">
														<div className= "space-y-2">
															<div className= "sm:grid grid-cols-12 gap-6 space-y-4 md:text-end">
																<div className= "col-span-9 my-auto">
																	<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Notify Me</label>
																</div>
																<div className= "col-span-3 my-auto">
																	<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:float-right rtl:float-left"/>
																</div>
															</div>
															<div className= "sm:grid grid-cols-12 gap-6 space-y-4 md:text-end">
																<div className= "col-span-9 my-auto">
																	<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Notify Me only Important</label>
																</div>
																<div className= "col-span-3 my-auto">
																	<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:float-right rtl:float-left"/>
																</div>
															</div>
															<div className= "sm:grid grid-cols-12 gap-6 space-y-4 md:text-end">
																<div className= "col-span-9 my-auto">
																	<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Notify Me All</label>
																</div>
																<div className= "col-span-3 my-auto">
																	<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:float-right rtl:float-left" defaultChecked/>
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
						<div className= "box-footer text-end space-x-3 rtl:space-x-reverse">
							<Link to="#" className= "ti-btn m-0 ti-btn-soft-primary"><i className= "ri ri-refresh-line"></i> Update</Link>
							<Link to="#" className= "ti-btn m-0 ti-btn-soft-secondary"><i className= "ri ri-close-circle-line"></i> Cancel</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Profilesetting;
