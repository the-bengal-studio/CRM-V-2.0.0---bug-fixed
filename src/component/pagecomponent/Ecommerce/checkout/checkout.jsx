import React, { useState } from "react";
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import { Link } from 'react-router-dom';
import ALLImages from "../../../../common/imagesData";
import { OrderSummery } from "../../../../common/EcommerceData";
import Select from 'react-select';
import { AddressType, AvailabileTime } from "../../../../common/select2data";

const Checkout = () => {

	const [allData, setAllData] = useState(OrderSummery)
	function handleRemove(id) {
		const newList = allData.filter((idx) => idx.id !== id);
		setAllData(newList);
	  }

	return (
		<div>
		<PageHeader currentpage="Check Out" activepage="Pages" mainpage="Check Out" />
			<div className= "grid grid-cols-12 gap-x-6">
				<div className= "col-span-12 xxl:col-span-9">
					<div className= "box shadow-none border-0 !bg-transparent">
						<div className= "box-body space-y-2 p-0">
							<div className= "sm:flex justify-between space-y-2 sm:space-y-0">
								<h3 className= "text-xl my-auto font-semibold text-gray-800 dark:text-white">Billing Address</h3>
								<button type="button" data-hs-overlay="#addadress"
									className="hs-dropdown-toggle ti-btn ti-btn-primary m-0"><i className= "ri-map-pin-add-line"></i>Add New Address</button>
							</div>
							<div className= "sm:grid grid-cols-12 gap-6 space-y-4 sm:space-y-0">
								<div className= "col-span-12 lg:col-span-6">
									<label className= "flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
										<input type="radio" name="address" className= "ti-form-radio" id="address1" defaultChecked/>
										<span className= "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70 w-full">
											<span className= "sm:flex">
												<span>
													<span className= "text-base font-semibold text-primary block"> Address 1</span>
													<span> Json Taylor ,Sed rebum., RD. 12,NW, Dolor et., Gubergren </span>
													<span><i className= "ri-smartphone-line"></i> +(773)-1614311</span>
												</span>
												<span className= "ltr:ml-auto rtl:mr-auto my-auto flex">
													<Link aria-label="anchor" to="#"
														className="ti-btn text-xs font-medium rounded-sm transition-none focus:outline-none ti-btn-soft-secondary">
														<i className= "ti ti-pencil"></i>
													</Link>
													<Link aria-label="anchor" to="#"
														className="ti-btn text-xs font-medium rounded-sm transition-none focus:outline-none ti-btn-soft-danger">
														<i className= "ti ti-trash"></i>
													</Link>
												</span>
											</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 lg:col-span-6">
									<label
										className="flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
										<input type="radio" name="address" className= "ti-form-radio" id="address2"/>
										<span className= "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70 w-full">
											<span className= "sm:flex">
												<span>
													<span className= "text-base font-semibold text-primary block"> Address 2 </span>
													<span> Json Taylor ,Sed rebum., RD. 12,NW, Dolor et., Gubergren </span>
													<span><i className= "ri-smartphone-line"></i> +(773)-1614311</span>
												</span>
												<span className= "ltr:ml-auto rtl:mr-auto my-auto flex">
													<Link aria-label="anchor" to="#"
														className="ti-btn text-xs font-medium rounded-sm transition-none focus:outline-none ti-btn-soft-secondary">
														<i className= "ti ti-pencil"></i>
													</Link>
													<Link aria-label="anchor" to="#"
														className="ti-btn text-xs font-medium rounded-sm transition-none focus:outline-none ti-btn-soft-danger">
														<i className= "ti ti-trash"></i>
													</Link>
												</span>
											</span>
										</span>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className= "box shadow-none border-0 !bg-transparent">
						<div className= "box-body space-y-2 p-0">
							<h3 className= "text-xl my-auto font-semibold text-gray-800 dark:text-white">Shipping Address</h3>
							<div className= "sm:grid grid-cols-12 gap-6 space-y-4 sm:space-y-0">
								<div className= "col-span-12 lg:col-span-6">
									<label 
										className="flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
										<input type="radio" name="address2" className= "ti-form-radio" id="address3"/>
										<span className= "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70 w-full">
											<span className= "sm:flex">
												<span>
													<span className= "text-base font-semibold text-primary block"> Address 1</span>
													<span> Json Taylor ,Sed rebum., RD. 12,NW, Dolor et., Gubergren </span>
													<span><i className= "ri-smartphone-line"></i> +(773)-1614311</span>
												</span>
												<span className= "ltr:ml-auto rtl:mr-auto my-auto flex">
													<Link aria-label="anchor" to="#"
														className="ti-btn text-xs font-medium rounded-sm transition-none focus:outline-none ti-btn-soft-secondary">
														<i className= "ti ti-pencil"></i>
													</Link>
													<Link aria-label="anchor" to="#"
														className="ti-btn text-xs font-medium rounded-sm transition-none focus:outline-none ti-btn-soft-danger">
														<i className= "ti ti-trash"></i>
													</Link>
												</span>
											</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 lg:col-span-6">
									<label 
										className="flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
										<input type="radio" name="address2" className= "ti-form-radio" id="address4" defaultChecked/>

										<span className= "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70 w-full">
											<span className= "sm:flex">
												<span>
													<span className= "text-base font-semibold text-primary block"> Address 2 </span>
													<span> Json Taylor ,Sed rebum., RD. 12,NW, Dolor et., Gubergren </span>
													<span><i className= "ri-smartphone-line"></i> +(773)-1614311</span>
												</span>
												<span className= "ltr:ml-auto rtl:mr-auto my-auto flex">
													<Link aria-label="anchor" to="#"
														className="ti-btn text-xs font-medium rounded-sm transition-none focus:outline-none ti-btn-soft-secondary">
														<i className= "ti ti-pencil"></i>
													</Link>
													<Link aria-label="anchor" to="#"
														className="ti-btn text-xs font-medium rounded-sm transition-none focus:outline-none ti-btn-soft-danger">
														<i className= "ti ti-trash"></i>
													</Link>
												</span>
											</span>
										</span>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className= "box shadow-none border-0 !bg-transparent">
						<div className= "box-body space-y-2 p-0">
							<h3 className= "text-xl my-auto font-semibold text-gray-800 dark:text-white">Delivery Method</h3>
							<div className= "sm:grid grid-cols-12 gap-6 space-y-4 sm:space-y-0">
								<div className= "col-span-12 lg:col-span-6">
									<div className= "box mb-0">
										<div className= "box-body">
											<div className= "flex flex-col">
												<label className= "flex rounded-sm text-base font-semibold focus:ring-primary dark:bg-bgdark dark:text-white/70">
													<input type="radio" name="delivery" className= "ti-form-radio" id="delivery-1"/>
													<span className= "sm:flex w-full ltr:ml-3 rtl:mr-3">
														<span className= "block">
															<span className= "text-base dark:text-white leading-none block">Free Delivery</span>
															<span className= "text-sm text-gray-500 dark:text-white/70 font-normal"> Expected Deilivery on 20 Nov</span>
														</span>
														<span className= "ltr:ml-auto rtl:mr-auto my-auto">
															<span className= "text-xl font-semibold">$0</span>
														</span>
													</span>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className= "col-span-12 lg:col-span-6">
									<div className= "box mb-0">
										<div className= "box-body">
											<div className= "flex flex-col">
												<label
													className="flex rounded-sm text-base font-semibold focus:ring-primary dark:bg-bgdark dark:text-white/70">
													<input type="radio" name="delivery" className= "ti-form-radio" id="delivery-2"/>
													<span className= "sm:flex w-full ltr:ml-3 rtl:mr-3">
														<span className= "block">
															<span className= "text-base dark:text-white leading-none block">Standard Delivery</span>
															<span className= "text-sm text-gray-500 dark:text-white/70 font-normal"> Expected Deilivery on 15 Nov</span>
														</span>
														<span className= "ltr:ml-auto rtl:mr-auto my-auto">
															<span className= "text-xl font-semibold">$3.99</span>
														</span>
													</span>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className= "col-span-12 lg:col-span-6">
									<div className= "box mb-0">
										<div className= "box-body">
											<div className= "flex flex-col">
												<label
													className="flex rounded-sm text-base font-semibold focus:ring-primary dark:bg-bgdark dark:text-white/70">
													<input type="radio" name="delivery" className= "ti-form-radio" id="delivery-3"/>
													<span className= "sm:flex w-full ltr:ml-3 rtl:mr-3">
														<span className= "block">
															<span className= "text-base dark:text-white leading-none block">Courier Delivery</span>
															<span className= "text-sm text-gray-500 dark:text-white/70 font-normal"> Expected Deilivery on 10 Nov</span>
														</span>
														<span className= "ltr:ml-auto rtl:mr-auto my-auto">
															<span className= "text-xl font-semibold">$5.99</span>
														</span>
													</span>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className= "col-span-12 lg:col-span-6">
									<div className= "box mb-0">
										<div className= "box-body">
											<div className= "flex flex-col">
												<label
													className="flex rounded-sm text-base font-semibold focus:ring-primary dark:bg-bgdark dark:text-white/70">
													<input type="radio" name="delivery" className= "ti-form-radio" id="delivery-4"/>
													<span className= "sm:flex w-full ltr:ml-3 rtl:mr-3">
														<span className= "block">
															<span className= "text-base dark:text-white leading-none block">Express Delivery</span>
															<span className= "text-sm text-gray-500 dark:text-white/70 font-normal"> Expected Deilivery Tommorrow</span>
														</span>
														<span className= "ltr:ml-auto rtl:mr-auto my-auto">
															<span className= "text-xl font-semibold">$10.99</span>
														</span>
													</span>
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className= "box shadow-none border-0 !bg-transparent">
						<div className= "box-body space-y-2 p-0">
							<h3 className= "text-xl my-auto font-semibold text-gray-800 dark:text-white">Payment Method</h3>
							<div className= "sm:grid grid-cols-12 gap-6 text-center space-y-4 sm:space-y-0">
								<div className= "col-span-12 md:col-span-2">
									<label className= "payment-box">
										<input type="radio" name="payment" className= "ti-form-radio" id="payment1" defaultChecked/>
										<span className= "payment-sec">
											<span className= "block">
												<img src= {ALLImages('png93')} alt="payment-img"
													className="avatar avatar-lg shadow-none !ring-transparent rounded-sm mx-auto"/>
											</span>
											<span className= "text-sm text-center font-semibold">Amazon Pay</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 md:col-span-2">
									<label className= "payment-box">
										<input type="radio" name="payment" className= "ti-form-radio" id="payment2"/>
										<span className= "payment-sec">
											<span className= "block">
												<img src= {ALLImages('png94')} alt="payment-img"
													className="avatar avatar-lg shadow-none !ring-transparent rounded-sm mx-auto"/>
											</span>
											<span className= "text-sm text-center font-semibold">PayPal</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 md:col-span-2">
									<label className= "payment-box">
										<input type="radio" name="payment" className= "ti-form-radio" id="payment3"/>
										<span className= "payment-sec">
											<span className= "block">
												<img src= {ALLImages('png95')} alt="payment-img"
													className="avatar avatar-lg shadow-none !ring-transparent rounded-sm mx-auto"/>
											</span>
											<span className= "text-sm text-center font-semibold">Rupay</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 md:col-span-2">
									<label className= "payment-box">
										<input type="radio" name="payment" className= "ti-form-radio" id="payment4"/>
										<span className= "payment-sec">
											<span className= "block">
												<img src= {ALLImages('png96')} alt="payment-img"
													className="avatar avatar-lg shadow-none !ring-transparent rounded-sm mx-auto"/>
											</span>
											<span className= "text-sm text-center font-semibold">Mastero card</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 md:col-span-2">
									<label className= "payment-box">
										<input type="radio" name="payment" className= "ti-form-radio" id="payment5"/>
										<span className= "payment-sec">
											<span className= "block">
												<img src= {ALLImages('png97')} alt="payment-img"
													className="avatar avatar-lg shadow-none !ring-transparent rounded-sm mx-auto"/>
											</span>
											<span className= "text-sm text-center font-semibold">Master card</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 md:col-span-2">
									<label className= "payment-box">
										<input type="radio" name="payment" className= "ti-form-radio" id="payment6"/>
										<span className= "payment-sec">
											<span className= "block">
												<img src= {ALLImages('png98')} alt="payment-img"
													className="avatar avatar-lg shadow-none !ring-transparent rounded-sm mx-auto"/>
											</span>
											<span className= "text-sm text-center font-semibold">Visa card</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 md:col-span-2">
									<label className= "payment-box">
										<input type="radio" name="payment" className= "ti-form-radio" id="payment7"/>
										<span className= "payment-sec">
											<span className= "block">
												<img src= {ALLImages('png99')} alt="payment-img"
													className="avatar avatar-lg shadow-none !ring-transparent rounded-sm mx-auto"/>
											</span>
											<span className= "text-sm text-center font-semibold">Cash On Delivery</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 md:col-span-2">
									<label className= "payment-box">
										<input type="radio" name="payment" className= "ti-form-radio" id="payment8"/>
										<span className= "payment-sec">
											<span className= "block">
												<img src= {ALLImages('png100')} alt="payment-img"
													className="avatar avatar-lg shadow-none !ring-transparent rounded-sm mx-auto"/>
											</span>
											<span className= "text-sm text-center font-semibold">Net Banking</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 md:col-span-2">
									<label className= "payment-box">
										<input type="radio" name="payment" className= "ti-form-radio" id="payment9"/>
										<span className= "payment-sec">
											<span className= "block">
												<img src= {ALLImages('png101')} alt="payment-img"
													className="avatar avatar-lg shadow-none !ring-transparent rounded-sm mx-auto"/>
											</span>
											<span className= "text-sm text-center font-semibold">Bitcoin</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 md:col-span-2">
									<label className= "payment-box">
										<input type="radio" name="payment" className= "ti-form-radio" id="payment10"/>
										<span className= "payment-sec">
											<span className= "block">
												<img src= {ALLImages('png102')} alt="payment-img"
													className="avatar avatar-lg shadow-none !ring-transparent rounded-sm mx-auto"/>
											</span>
											<span className= "text-sm text-center font-semibold">American Express</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 md:col-span-2">
									<label className= "payment-box">
										<input type="radio" name="payment" className= "ti-form-radio" id="payment11"/>
										<span className= "payment-sec">
											<span className= "block">
												<img src= {ALLImages('png103')} alt="payment-img"
													className="avatar avatar-lg shadow-none !ring-transparent rounded-sm mx-auto"/>
											</span>
											<span className= "text-sm text-center font-semibold">Wallet</span>
										</span>
									</label>
								</div>
								<div className= "col-span-12 md:col-span-2">
									<label className= "payment-box">
										<input type="radio" name="payment" className= "ti-form-radio" id="payment12"/>
										<span className= "payment-sec">
											<span className= "block">
												<img src= {ALLImages('png104')} alt="payment-img"
													className="avatar avatar-lg shadow-none !ring-transparent rounded-sm mx-auto"/>
											</span>
											<span className= "text-sm text-center font-semibold">Bank Transfer</span>
										</span>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className= "flex justify-between mb-6">
						<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/cart`} className= "ti-btn ti-btn-secondary m-0"><i className= "ri-arrow-left-line"></i> Back to cart</Link>
						<Link to="#" data-hs-overlay="#payment-success" className= "ti-btn ti-btn-primary hs-dropdown-toggle m-0">Place Order<i className= "ri-arrow-right-line"></i></Link>
					</div>
				</div>
				<div className= "col-span-12 xxl:col-span-3">
					<div className= "box">
						<div className= "box-header">
							<h5 className= "box-titile">Order Summary</h5>
						</div>
						<div className= "box-body px-0 space-y-5">
							{allData.map((idx)=>(
							<div key={Math.random()} className= "flex flex-row justify-between border-b pb-5 px-6 border-gray-200 dark:border-white/10">
								<div className= "flex items-center">
									<img
										className="inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-sm p-2 border dark:border-white/10 bg-gray-100 dark:bg-black/20"
										src= {idx.prdctsrc} alt="Image Description"/>
									<div className= "ltr:ml-4 rtl:mr-4 space-y-1">
										<h5 className= "font-semibold text-gray-800 dark:text-white">{idx.title}</h5>
										<p className= "text-xs tetext-gray-400 dark:text-white/70">Quantity : {idx.Qty} ,Discount : {idx.offer}</p>
										<div className= "">
											<span className= "font-semibold text-base">{idx.OfferPr}</span>
											<span className= "text-sm font-normal text-gray-500 dark:text-white/70 line-through">{idx.originalPr}</span>
										</div>
									</div>
								</div>
								<div className= "">
									<Link aria-label="anchor" to="#" className="ti-btn text-xs font-medium rounded-sm p-1 transition-none focus:outline-none ti-btn-soft-danger" onClick={() => handleRemove(idx.id)}>
										<i className= "ti ti-trash"></i>
									</Link>
								</div>
							</div>
							))}
							<ul className= "flex flex-col px-6">
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full">
                      Total Items
										<span className= "">4</span>
									</div>
								</li>
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full">
                      SubTotal
										<span className= "">$1100</span>
									</div>
								</li>
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full">
                      Other Charges
										<span className= "">$200</span>
									</div>
								</li>
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full">
                      Delivery Charges
										<span className= "text-success">-0% (Free)</span>
									</div>
								</li>
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full">
                      Coupon Discount
										<span className= "text-success">-5%</span>
									</div>
								</li>
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full">
                      Over all Discount
										<span className= "text-success">-10%</span>
									</div>
								</li>
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full text-xl font-semibold">
                      Total
										<span className= "">$1500</span>
									</div>
								</li>
								<li className= "ti-list-group bg-success/30 text-success border-success/30">
									<div className= "flex justify-between w-full">
                      Your Total Savings On this Order
										<span className= "">$500</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div id="addadress" className= "hs-overlay ti-modal hidden">
				<div className= "hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out flex items-center !max-w-2xl">
					<div className= "ti-modal-content w-full">
						<div className= "ti-modal-header">
							<h3 className= "ti-modal-title">
                  Add Address
							</h3>
							<button type="button" className= "hs-dropdown-toggle ti-modal-clode-btn" data-hs-overlay="#addadress">
								<span className= "sr-only">Close</span>
								<svg className= "w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
										fill="currentColor"></path>
								</svg>
							</button>
						</div>
						<div className= "ti-modal-body">
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
							</div>
							<div className= "my-5">
								<div className= "space-y-2">
									<label className= "ti-form-label mb-0">Address</label>
									<input type="text" className= "my-auto ti-form-input" placeholder="Address"/>
								</div>
							</div>
							<div className= "grid lg:grid-cols-2 gap-6">
								<div className= "space-y-2">
									<label className= "ti-form-label mb-0">Address Type</label>
									<Select className=" billing-search" classNamePrefix='react-select' options={AddressType} placeholder='Select One' />
								</div>
								<div className= "space-y-2">
									<label className= "ti-form-label mb-0">Available Timings</label>
									<Select className=" billing-search" classNamePrefix='react-select' options={AvailabileTime} placeholder='Select One' />
								</div>
								<div className= "space-y-2">
									<label className= "ti-form-label mb-0">City</label>
									<input type="text" className= "my-auto ti-form-input" placeholder="city"/>
								</div>
								<div className= "space-y-2">
									<label className= "ti-form-label mb-0">State</label>
									<input type="text" className= "my-auto ti-form-input" placeholder="state"/>
								</div>
								<div className= "space-y-2">
									<label className= "ti-form-label mb-0">Country</label>
									<input type="text" className= "my-auto ti-form-input" placeholder="country"/>
								</div>
								<div className= "space-y-2">
									<label className= "ti-form-label mb-0">Pincode</label>
									<input type="number" className= "my-auto ti-form-input" placeholder="pincode"/>
								</div>
							</div>
						</div>
						<div className= "ti-modal-footer">
							<button type="button" className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
								data-hs-overlay="#addadress"> Discard
							</button>
							<Link className= "ti-btn ti-btn-primary" to="#"> Save </Link>
						</div>
					</div>
				</div>
			</div>

			<div id="payment-success" className= "hs-overlay ti-modal hidden">
				<div className= "hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center !max-w-2xl">
					<div className= "ti-modal-content">
						<div className= "ti-modal-body !p-6">
							<div className= "checkout-payment-success">
								<div className= "mb-5">
									<img src= {ALLImages('png117')} alt="" className= "mx-auto"/>
								</div>
								<div className= "text-center">
									<h5 className= "text-base font-semibold mb-1">Hurray !..Your Order Has Been confirmed </h5>
									<p className= "text-sm font-semibold text-gray-500 dark:text-white/70">Order Has Been Placed Successfully Now You Can Track Your Order ...</p>
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails`} className= "ti-btn ti-btn-secondary mt-4">Track Your Order</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Checkout;
