import React, { useEffect, useState } from "react";
import ALLImages from "../../../../common/imagesData";
import { DateFormat, LanguageData, MarkAsRead, Refresh, ReturnReceipt, RowPage, TimeFormat, TimeZoneData } from "../../../../common/select2data";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import Select from 'react-select';
import ProfileService from "../../../../common/profileservices";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Mailsettings = () => {
	const [ClassName, setClassName] = useState()
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
			<PageHeader currentpage="Mail Settings" activepage="Mail" mainpage="Mail Settings" />
			<div className= "md:grid grid-cols-12 md:gap-6">
				<div className= "col-span-12 lg:col-span-12">
					<div className= "box">
						<div className= "box-header bg-transparent">
							<nav className= "-mb-0.5 md:flex space-x-4 rtl:space-x-reverse md:space-y-0 space-y-4 " aria-label="Tabs" role="tablist">
								<button type="button" className= "hs-tab-active:bg-white hs-tab-active:rounded-b-none border-b-[3px] border-transparent hs-tab-active:border-primary hs-tab-active:text-primary dark:hs-tab-active:bg-bgdark dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-transparent dark:text-white/70 active" id="mail-item-1" data-hs-tab="#mail-1" aria-controls="mail-1" role="tab">
									<i className= "ri ri-global-line"></i>General &amp; personal
								</button>
								<button type="button" className= "hs-tab-active:bg-white hs-tab-active:rounded-b-none border-b-[3px] border-transparent hs-tab-active:border-primary hs-tab-active:text-primary dark:hs-tab-active:bg-bgdark dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-transparent dark:text-white/70 dark:hover:text-gray-300" id="mail-item-2" data-hs-tab="#mail-2" aria-controls="mail-2" role="tab">
									<i className= "ri ri-lock-password-line"></i> Notifications
								</button>
								<button type="button" className= "hs-tab-active:bg-white hs-tab-active:rounded-b-none border-b-[3px] border-transparent hs-tab-active:border-primary hs-tab-active:text-primary dark:hs-tab-active:bg-bgdark dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-transparent dark:text-white/70 dark:hover:text-gray-300" id="mail-item-3" data-hs-tab="#mail-3" aria-controls="mail-3" role="tab">
									<i className= "ri ri-lock-password-line"></i> Security
								</button>
								<button type="button" className= "hs-tab-active:bg-white hs-tab-active:rounded-b-none border-b-[3px] border-transparent hs-tab-active:border-primary hs-tab-active:text-primary dark:hs-tab-active:bg-bgdark dark:hs-tab-active:border-primary dark:hs-tab-active:text-white -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-transparent dark:text-white/70 dark:hover:text-gray-300" id="mail-item-4" data-hs-tab="#mail-4" aria-controls="mail-4" role="tab">
									<i className= "ri ri-mail-open-line"></i> Mail-View
								</button>
							</nav>
						</div>
						<div className= "box-body">
							<div id="mail-1" role="tabpanel" aria-labelledby="mail-item-1">
								<h5 className= "font-semibold text-lg mb-2">General and Basic Info Settings</h5>
								<p className= "text-gray-500 dark:text-white/70 mb-6 text-sm">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<div className= "space-y-6">
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-12 md:col-span-2 my-auto">
											<label htmlFor="profile-change" className= "ti-form-label">Change Profile</label>
										</div>
										<div className= "col-span-12 md:col-span-10">
											<div className= "relative inline-block md:mt-8">
												<img src={Image} className= "w-24 h-24 rounded-full ring-4 ring-gray-200 dark:ring-white/10 mx-auto" id="profile-img" alt="profile-img"/>
												
													<button type="button" className="absolute bottom-0 ltr:right-0 rtl:left-0 block p-1 rounded-full ring-2 ring-gray-200 dark:ring-white/10 text-gray-500 bg-gray-100 dark:bg-bgdark leading-none" data-hs-overlay="#hs-small-modal"><i className= "ri ri-pencil-line"></i> <span></span></button>

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
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-12 md:col-span-2 my-auto">
											<label htmlFor="input-label1" className= "ti-form-label">User Name</label>
										</div>
										<div className= "col-span-12 md:col-span-10">
											<input type="text" id="input-label1" className= "ti-form-input" placeholder="name" defaultValue="Jason Taylor"/>
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-12 md:col-span-2 my-auto">
											<label htmlFor="input-label2" className= "ti-form-label">User Email Id</label>
										</div>
										<div className= "col-span-12 md:col-span-10">
											<input type="email" id="input-label2" className= "ti-form-input" placeholder="youremail@gmail.com" defaultValue="jasontaylor152@gmail.com"/>
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-12 md:col-span-2 my-auto">
											<label className= "ti-form-label">Language</label>
										</div>
										<div className= "col-span-12 md:col-span-10">
										<Select options={LanguageData} classNamePrefix='react-select' placeholder='US English' />
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-12 md:col-span-2 my-auto">
											<label className= "ti-form-label">Time Zone</label>
										</div>
										<div className= "col-span-12 md:col-span-10">
										<Select options={TimeZoneData} classNamePrefix='react-select' placeholder='(GMT-11:00) Midway Island, Samoa' />
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-12 md:col-span-2 my-auto">
											<label className= "ti-form-label">Time Format</label>
										</div>
										<div className= "col-span-12 md:col-span-10">
										<Select options={TimeFormat} classNamePrefix='react-select' placeholder='Open this select menu' />
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-12 md:col-span-2 my-auto">
											<label className= "ti-form-label">Date Format</label>
										</div>
										<div className= "col-span-12 md:col-span-10">
										<Select options={DateFormat} classNamePrefix='react-select' placeholder='Open this select menu' />
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-12 md:col-span-2 my-auto">
											<label className= "ti-form-label">Verfication</label>
										</div>
										<div className= "col-span-12 md:col-span-10">
											<nav className= "flex space-x-2 rtl:space-x-reverse mb-4" aria-label="Tabs" role="tablist">
												<button type="button" className= "hs-tab-active:bg-primary hs-tab-active:text-white py-2 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 active" id="adhar-tab" data-hs-tab="#adhar" aria-controls="adhar" role="tab">
                            Adhar Number
												</button>
												<button type="button" className= "hs-tab-active:bg-primary hs-tab-active:text-white py-2 px-4 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center text-gray-500 rounded-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-gray-300" id="mobile-tab" data-hs-tab="#mobile" aria-controls="mobile" role="tab">
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
									</div>
								</div>
							</div>
							<div id="mail-2" className= "hidden" role="tabpanel" aria-labelledby="mail-item-2">
								<h5 className= "font-semibold text-lg mb-2">Notification Settings</h5>
								<p className= "text-gray-500 dark:text-white/70 mb-5 text-sm">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<div className= "space-y-5">
									<div className= "flex items-center">
										<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5" defaultChecked/>
										<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Enable Personal Setting For Admin Panel</label>
									</div>
									<div className= "flex items-center">
										<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5"/>
										<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Personal Setting For Customer Panel</label>
									</div>
									<div className= "flex items-center">
										<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5"/>
										<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Default Login</label>
									</div>
									<div className= "flex items-center">
										<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5"/>
										<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Disable Register</label>
									</div>
									<div className= "flex items-center">
										<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5"/>
										<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Enable Contact Us</label>
									</div>
									<div className= "flex items-center">
										<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5" defaultChecked/>
										<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Notifications From Unknown Mails</label>
									</div>
									<div className= "flex items-center">
										<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5" defaultChecked/>
										<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Notifications From Spam Mails</label>
									</div>
									<div className= "flex items-center">
										<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5"/>
										<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Notifications From Blocked Contacts</label>
									</div>
									<div className= "flex items-center">
										<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5"/>
										<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Allow All Mails</label>
									</div>
									<div className= "flex items-center">
										<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5"/>
										<label className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Block Mails</label>
									</div>
								</div>
							</div>
							<div id="mail-3" className= "hidden" role="tabpanel" aria-labelledby="mail-item-3">
								<h5 className= "font-semibold text-lg mb-2">Security Settings</h5>
								<p className= "text-gray-500 dark:text-white/70 mb-5 text-sm">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<div className= "space-y-6">
									<div className= "sm:grid grid-cols-12 sm:gap-6">
										<div className= "col-span-12 sm:col-span-2 my-auto">
											<label className= "ti-form-label">Verfication Step - 2
												<a aria-label="anchor" className= "ltr:ml-2 rtl:mr-2" href="#">
													<i className= "ri ri-question-line"></i>
												</a>
											</label>
										</div>
										<div className= "col-span-12 sm:col-span-10">
											<div className= "flex items-center">
												<input type="checkbox" className= "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5 ltr:ml-4 rtl:mr-4"/>
											</div>
										</div>
									</div>
									<h5 className= "font-semibold text-sm mb-2">Change Password</h5>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-2 my-auto">
											<label htmlFor="input-label4" className= "ti-form-label">Old Password
											</label>
										</div>
										<div className= "col-span-10">
											<input type="password" id="input-label4" className= "ti-form-input" placeholder="Password"/>
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-2 my-auto">
											<label htmlFor="input-label5" className= "ti-form-label">New Password
											</label>
										</div>
										<div className= "col-span-10">
											<input type="password" id="input-label5" className= "ti-form-input" placeholder="Password"/>
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-2 my-auto">
											<label htmlFor="input-label6" className= "ti-form-label">Confirm Password
											</label>
										</div>
										<div className= "col-span-10">
											<input type="password" id="input-label6" className= "ti-form-input" placeholder="Password"/>
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-2 my-auto">
											<label className= "ti-form-label">Account
											</label>
										</div>
										<div className= "col-span-10">
											<button type="button" className= "py-2 px-3 ti-btn bg-danger text-white hover:bg-danger/80 focus:ring-danger dark:focus:ring-offset-white/10">De-Activate Account</button>
										</div>
									</div>
								</div>
							</div>
							<div id="mail-4" className= "hidden" role="tabpanel" aria-labelledby="mail-item-4">
								<h5 className= "font-semibold text-lg mb-2">Mail Settings</h5>
								<p className= "text-gray-500 dark:text-white/70 mb-6 text-sm">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<div className= "space-y-6">
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-2 my-auto">
											<label className= "ti-form-label">Rows per page</label>
										</div>
										<div className= "col-span-10">
										<Select options={RowPage} classNamePrefix='react-select' placeholder='Open this select menu' />
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-2 my-auto">
											<label className= "ti-form-label">Inbox Type</label>
										</div>
										<div className= "col-span-10">
										<Select options={RowPage} classNamePrefix='react-select' placeholder='Open this select menu' />
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-2 my-auto">
											<label className= "ti-form-label">Mark As Read</label>
										</div>
										<div className= "col-span-10">
										<Select options={MarkAsRead} classNamePrefix='react-select' placeholder='Open this select menu' />
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-2 my-auto">
											<label className= "ti-form-label">Request For Return Recepit</label>
										</div>
										<div className= "col-span-10">
										<Select options={ReturnReceipt} classNamePrefix='react-select' placeholder='Open this select menu' />
										</div>
									</div>
									<div className= "md:grid grid-cols-12 md:gap-6">
										<div className= "col-span-2 my-auto">
											<label className= "ti-form-label">Refresh</label>
										</div>
										<div className= "col-span-10">
										<Select options={Refresh} classNamePrefix='react-select' placeholder='Open this select menu' />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className= "box-footer bg-transparent">
							<button type="submit" className= "py-2 px-3 ti-btn ti-btn-primary ltr:float-right rtl:float-left">Restore Default</button>
							<button type="button" className= "py-2 px-3 ti-btn ti-btn-danger ltr:float-right rtl:float-left">Save Changes</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
export default Mailsettings;
