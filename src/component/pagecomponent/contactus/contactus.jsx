import React from "react";
import { Link } from "react-router-dom";
import ALLImages from "../../../common/imagesData";

const Contactus = () => {
	return (
		<div>

				<div className= "flex relative before:bg-primary/80 before:absolute before:w-full before:h-full">
					<img src={ALLImages('png118')} alt="" className= "h-[400px] w-full rounded-sm" id="profile-img2"/>
				</div>
				<div className= "absolute top-28 bannertext-center text-center space-y-3">
					<div className= "text-white space-y-3">
						<p className= "text-xl text-white/70">Contact us</p>
						<h1 className= "text-4xl sm:text-5xl font-bold ">How Can We Help Us .....!</h1>
						<p className= "text-sm text-white/50">Have any questions ? We would love to hear from you.</p>
						<Link to="#" className="ti-btn ti-btn-secondary"> <i className= "ri-phone-line"></i> Call Us </Link>
					</div>
				</div>

				<div className= "main-content -mt-12">
					<div className= "container mx-auto relative mb-10">

						<div className= "grid grid-cols-12 gap-x-6">
							<div className= "col-span-12 xl:col-span-4">
								<div className= "box">
									<div className= "box-body">
										<div className= "space-x-3 flex rtl:space-x-reverse">
											<div
												className="bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary p-3 rounded-full leading-none text-center avatar">
												<i className= "ri-smartphone-line text-2xl leading-none"></i>
											</div>
											<div>
												<h5 className= "font-semibold text-base">Phone number</h5>
												<p className= "text-gray-500 dark:text-white/70"> + 01 234 567 88</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className= "col-span-12 xl:col-span-4">
								<div className= "box">
									<div className= "box-body">
										<div className= "space-x-3 flex rtl:space-x-reverse">
											<div
												className="bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary p-3 rounded-full leading-none text-center avatar">
												<i className= "ri-mail-line text-2xl leading-none"></i>
											</div>
											<div>
												<h5 className= "font-semibold text-base">Email Address</h5>
												<p className= "text-gray-500 dark:text-white/70"> info12323@example.com</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className= "col-span-12 xl:col-span-4">
								<div className= "box">
									<div className= "box-body">
										<div className= "space-x-3 flex rtl:space-x-reverse">
											<div
												className="bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary p-3 rounded-full leading-none text-center avatar">
												<i className= "ri-map-pin-line text-2xl leading-none"></i>
											</div>
											<div>
												<h5 className= "font-semibold text-base">Address</h5>
												<p className= "text-gray-500 dark:text-white/70"> New York, NY 10012, US-52014</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className= "xl:grid xl:grid-cols-2 xl:gap-x-6">
							<div className= "box">
								<div className= "box-body">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.683976874076!2d78.56807711487751!3d17.47483348802633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c7ec139a15d%3A0x326d1c90786b2ab6!2sSPRUKO%20TECHNOLOGIES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1684127205680!5m2!1sen!2sin"  height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-sm w-full"/>
								</div>
							</div>
							<div className= "box">
								<div className= "box-body">
									<div className= "my-auto text-center">
										<h2 className= "mb-2 font-semibold text-2xl leading-none text-start">Contact Form</h2>
										<p className= "text-gray-500 dark:text-white/70 text-start">Ask us everything and we would love to hear
                    from you</p>
										<div className= "mt-5">
											<div className= "space-y-4 text-start">
												<div className= "grid sm:grid-cols-12 gap-x-6">
													<label className= "col-span-3 my-auto ti-form-label whitespace-nowrap">Full Name:</label>
													<input type="text" className= "col-span-9 ti-form-input" placeholder="Enter Full Name"/>
												</div>
												<div className= "grid sm:grid-cols-12 gap-x-6">
													<label className= "col-span-3 my-auto ti-form-label whitespace-nowrap">Email ID:</label>
													<input type="email" className= "col-span-9 ti-form-input" placeholder="Enter Email Id"/>
												</div>
												<div className= "grid sm:grid-cols-12 gap-x-6">
													<label className= "col-span-3 my-auto ti-form-label whitespace-nowrap">Phone No:</label>
													<input type="number" className= "col-span-9 ti-form-input" placeholder="Enter Phone No"/>
												</div>
												<div className= "grid sm:grid-cols-12 gap-x-6">
													<label className= "col-span-3 my-auto ti-form-label whitespace-nowrap">Message:</label>
													<textarea className= "col-span-9 ti-form-input" rows="4" placeholder="Enter Your Messaage"></textarea>
												</div>
												<div className= "grid sm:grid-cols-12 gap-x-6">
													<div className= "col-span-3"></div>
													<div className= "col-span-9">
														<Link className= "ti-btn ti-btn-primary mb-0" to="#">Send Message</Link>
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
	);
};
export default Contactus;
