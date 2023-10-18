import React, { useState } from "react";
import { Link } from "react-router-dom";
import ALLImages from "../../../../common/imagesData";
import { modeofPayment, PaymentStatus } from "../../../../common/select2data";
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";


const Invoicelist = () => {

	const [startDate, setStartDate] = useState(new Date());

	const invoicelistdata = [
		{
			id: 1,
			invoiceid: '#IN5252155',
			poc: ALLImages('jpg58'),
			noc: 'Socrates Itumay',
			custemail: 'socratesitumany@abc.com',
			createdDt: '25-09-2022',
			dueDt: '15-10-2022',
			status: 'Paid',
			mop: 'Card',
			billingamnt: '$999',
			color: 'success'
		},
		{
			id: 2,
			invoiceid: '#IN2363363',
			poc: ALLImages('jpg59'),
			noc: 'Json Taylor',
			custemail: 'jsontaylor2416@gmail.com',
			createdDt: '12-09-2022',
			dueDt: '20-10-2022',
			status: 'Overdue',
			mop: 'Net Banking',
			billingamnt: '$2526',
			color: 'danger'
		},
		{
			id: 3,
			invoiceid: '#IN125252',
			poc: ALLImages('jpg60'),
			noc: 'Suzika Stallone',
			custemail: 'suzikastallone3214@gmail.com',
			createdDt: '12-09-2022',
			dueDt: '20-10-2022',
			status: 'Due',
			mop: 'UPI ID',
			billingamnt: '$2526',
			color: 'warning'
		},
		{
			id: 4,
			invoiceid: '#IN5656',
			poc: ALLImages('jpg61'),
			noc: 'Selena Deoyl',
			custemail: 'selenadeoyl114@gmail.com',
			createdDt: '12-09-2022',
			dueDt: '20-10-2022',
			status: 'Unpaid',
			mop: 'Paypal',
			billingamnt: '$2526',
			color: 'secondary'
		},
		{
			id: 5,
			invoiceid: '#IN25252',
			poc: ALLImages('jpg65'),
			noc: 'Roman Killon',
			custemail: 'romankillon143@gmail.com',
			createdDt: '12-09-2022',
			dueDt: '20-10-2022',
			status: 'Draft',
			mop: 'Paypal',
			billingamnt: '$2526',
			color: 'primary'
		},
		{
			id: 6,
			invoiceid: '#IN5252155',
			poc: ALLImages('jpg66'),
			noc: 'Charlie Davieson',
			custemail: 'charliedavieson@gmail.com',
			createdDt: '25-09-2022',
			dueDt: '15-10-2022',
			status: 'Paid',
			mop: 'Card',
			billingamnt: '$999',
			color: 'success'
		},
		{
			id: 7,
			invoiceid: '#IN2363363',
			poc: ALLImages('jpg67'),
			noc: 'Joseph Samurai',
			custemail: 'josephsamurai@gmail.com',
			createdDt: '12-09-2022',
			dueDt: '20-10-2022',
			status: 'Overdue',
			mop: 'Net Banking',
			billingamnt: '$999',
			color: 'danger'
		},
		{
			id: 8,
			invoiceid: '#IN125252',
			poc: ALLImages('jpg68'),
			noc: 'Kevin Powell',
			custemail: 'kevinpowell@gmail.com',
			createdDt: '12-09-2022',
			dueDt: '20-10-2022',
			status: 'Due',
			mop: 'UPI ID',
			billingamnt: '$2526',
			color: 'warning'
		},
		{
			id: 1,
			invoiceid: '#IN5656',
			poc: ALLImages('jpg62'),
			noc: 'Darla Jung',
			custemail: 'darlajung555@gmail.com',
			createdDt: '12-09-2022',
			dueDt: '20-10-2022',
			status: 'Unpaid',
			mop: 'Paypal',
			billingamnt: '$2526',
			color: 'secondary'
		},
		{
			id: 1,
			invoiceid: '#IN25252',
			poc: ALLImages('jpg63'),
			noc: 'Kiara Advensh',
			custemail: 'kiaraadvensh87@gmail.com',
			createdDt: '12-09-2022',
			dueDt: '20-10-2022',
			status: 'Draft',
			mop: 'Paypal',
			billingamnt: '$2526',
			color: 'primary'
		}
	]

	const [allData, setAllData] = useState(invoicelistdata);
	function handleRemove(id) {
		const newList = allData.filter((idx) => idx.id !== id);
		setAllData(newList);
	  }

	  function dec(el) {
		let unit = el.currentTarget.parentElement.querySelector("input").value;
	
		if (Number(unit) === 0) {
			return false;
		} else {
			el.currentTarget.parentElement.querySelector("input").value--;
		}
	}
	function inc(el) {
		el.currentTarget.parentElement.querySelector("input").value++;
	}
	return (
		<div>
			<PageHeader currentpage="Invoice " activepage="Pages" mainpage="Invoice " />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header lg:flex lg:justify-between">
							<h5 className="box-title my-auto">Invoice List</h5>
							<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary" data-hs-overlay="#hs-basic-modal"><i className="ri ri-add-line"></i> Create Invoice</button>

							<div id="hs-basic-modal" className="hs-overlay ti-modal hidden">
								<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out sm:!max-w-6xl">
									<div className="ti-modal-content">
										<div className="ti-modal-header">
											<h3 className="ti-modal-title invoice-title"> Create Invoice </h3>
											<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-basic-modal">
												<span className="sr-only">Close</span>
												<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" /> </svg>
											</button>
										</div>
										<div className="ti-modal-body p-6">
											<div className="flex flex-col md:flex-row space-y-6 justify-between mb-5">
												<div className="space-y-2">
													<div className="mb-2">
														<img src={ALLImages('logo')} alt="logo" className="flex dark:hidden" />
														<img src={ALLImages('dark')} alt="logo" className="hidden dark:flex" />
													</div>
													<input type="text" className="company-name ti-form-input md:w-72" placeholder="Company Name" />
													<input type="text" className="company-address ti-form-input md:w-72" placeholder="Company Address" />
													<input type="text" className="company-address1 ti-form-input md:w-72" placeholder="Complete Address" />
												</div>
												<div className="space-y-2 text-end inline-block">
													<h3 className="text-2xl text-primary uppercase font-semibold">Invoice</h3>
													<input type="text" className="invoice-id ti-form-input md:w-72 inline-block text-end" placeholder="Invoice Id" />
													<div className="mt-1 flex"><input type="text" className="create-date ti-form-input md:w-72 text-end sm:ltr:ml-3 sm:rtl:mr-3 flatpickr-input invoice-date font-normal" placeholder="created date" readOnly /></div>
													<div className="mt-1 flex"><input type="text" className="due-date ti-form-input md:w-72 text-end sm:ltr:ml-3 sm:rtl:mr-3 flatpickr-input invoice-date font-normal" placeholder="Due Date" readOnly /></div>
												</div>
											</div>
											<hr className="pb-5 dark:border-t-white/10" />
											<div className="grid grid-cols-12 gap-6 mb-5">
												<div className="lg:col-span-6 col-span-12">
													<div className="space-y-3 inline-block">
														<h3 className="font-semibold text-lg">Billed To :</h3>
														<input type="text" className="company-name ti-form-input md:w-72" placeholder="Company Name" />
														<input type="text" className="company-address ti-form-input md:w-72" placeholder="Company Address" />
														<input type="text" className="company-address1 ti-form-input md:w-72" placeholder="Complete Address" />
													</div>
												</div>
												<div className="lg:col-span-6 col-span-12 text-end">
													<div className="space-y-3 inline-block">
														<h3 className="font-semibold text-lg">Shipped To :</h3>
														<input type="text" className="company-name ti-form-input md:w-72 text-end" placeholder="Company Name" />
														<input type="text" className="company-address ti-form-input md:w-72 text-end" placeholder="Company Address" />
														<input type="text" className="company-address1 ti-form-input md:w-72 text-end" placeholder="Complete Address" />
													</div>
												</div>
											</div>
											<div className="sm:flex space-y-4 justify-between">
												<h5 className="font-semibold text-lg my-auto">Invoic Items</h5>
												<Link to="#" className="invoice-add-item ti-btn ti-btn-primary m-0 py-2"><i className="ri ri-add-line"></i>Add Item Deatils</Link>
											</div>
											<div className="py-5">
												<div className="overflow-auto lg:overflow-hidden">
													<table className="ti-custom-table !border dark:border-white/10 !border-x-0 text-center">
														<thead className="bg-gray-50 dark:bg-black/20 overflow-hidden">
															<tr>
																<th scope="col" className="!text-center">S.No</th>
																<th scope="col" className="!text-center">Product</th>
																<th scope="col" className="!text-center">Quantity</th>
																<th scope="col" className="!text-center">Unit</th>
																<th scope="col" className="!text-center">Amount</th>
																<th scope="col" className="!text-center">Action</th>
															</tr>
														</thead>
														<tbody className="invoice-body">
															<tr className="invoice-list">
																<td className=""><input type="number" className="ti-form-input" placeholder="s.no" /></td>
																<td className=""><input type="text" className="ti-form-input" placeholder="Product name" /></td>
																<td className="font-semibold ">
																	<div className="flex rounded-sm shadow-sm">
																		<button aria-label="button" type="button" onClick={dec}
																			className="quantity-minus inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
																			<i className="ti ti-minus"></i>
																		</button>
																		<input type="text" id="quantity1" name="quantity"
																			className="p-0 ti-form-input w-20 rounded-none shadow-sm focus:z-10 text-center"
																			value="0" readOnly />
																		<button aria-label="button" type="button" onClick={inc}
																			className="quantity-plus inline-flex flex-shrink-0 justify-center items-center h-8 w-8  ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
																			<i className="ti ti-plus"></i>
																		</button>
																	</div>
																</td>
																<td className=""><input type="number" className="ti-form-input" placeholder="value" /></td>
																<td className="font-medium"><input type="number" className="ti-form-input" placeholder="Total amount" /></td>
																<td className="font-medium">
																	<div className="hs-tooltip ti-main-tooltip">
																		<Link to="#"
																			className="invoice-btn m-0 hs-tooltip-toggle relative  w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
																			<i className="ti ti-trash"></i>
																			<span
																				className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
																				role="tooltip">
																				Delete
																			</span>
																		</Link>
																	</div>
																</td>
															</tr>
															<tr className="invoice-list">
																<td className=""><input type="number" className="ti-form-input" placeholder="s.no" /></td>
																<td className=""><input type="text" className="ti-form-input" placeholder="Product name" /></td>
																<td className="font-semibold ">
																	<div className="flex rounded-sm shadow-sm">
																		<button aria-label="button" type="button" onClick={dec}
																			className="quantity-minus inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
																			<i className="ti ti-minus"></i>
																		</button>
																		<input type="text" id="quantity" name="quantity1"
																			className="p-0 ti-form-input w-20 rounded-none shadow-sm focus:z-10 text-center"
																			value="0" readOnly />
																		<button aria-label="button" type="button" onClick={inc}
																			className="quantity-plus inline-flex flex-shrink-0 justify-center items-center h-8 w-8  ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
																			<i className="ti ti-plus"></i>
																		</button>
																	</div>
																</td>
																<td className=""><input type="number" className="ti-form-input" placeholder="value" /></td>
																<td className="font-medium"><input type="number" className="ti-form-input" placeholder="Total amount" /></td>
																<td className="font-medium">
																	<div className="hs-tooltip ti-main-tooltip">
																		<Link to="#"
																			className="invoice-btn m-0 hs-tooltip-toggle relative  w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
																			<i className="ti ti-trash"></i>
																			<span
																				className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
																				role="tooltip">
																				Delete
																			</span>
																		</Link>
																	</div>
																</td>
															</tr>
														</tbody>
														<tbody className="border-t border-b-0 border-x-0 border-gray-200 dark:border-white/10">
															<tr className="!border-b-0">
																<td colSpan={3} className="!p-1"></td>
																<td className="!pb-1">Sub-Total</td>
																<td className="!pb-1" ><input type="number" className=" ti-form-input" placeholder="sub Total" /></td>
																<td></td>
															</tr>
															<tr className="!border-b-0 !border-t-0">
																<td colSpan={3} className="!p-1"></td>
																<td className="!py-1">Tax</td>
																<td className="!py-1"><input type="number" className=" ti-form-input" placeholder="Tax" /></td>
																<td></td>
															</tr>
															<tr className="!border-b-0 !border-t-0">
																<td colSpan={3} className="!p-1"></td>
																<td className="!py-1">Discount</td>
																<td className="!py-1"><input type="number" className=" ti-form-input" placeholder="Discount" /></td>
																<td></td>
															</tr>
															<tr className="!border-t-0">
																<td colSpan={3} className="!p-1"></td>
																<td className="!pt-1">Total</td>
																<td className="!pt-1"><input type="number" className=" ti-form-input" placeholder="Total" /></td>
																<td></td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
											<h3 className="font-semibold text-xl mb-4">Payment Details</h3>
											<div className="grid grid-cols-12 gap-6 mb-5 invoice-pay">
												<div className="lg:col-span-6 col-span-12 max-w-xs">
													<div className="space-y-3">
													<Select options={PaymentStatus} classNamePrefix='react-select' placeholder='Open this select menu' />
														<input type="text" className="ti-form-input" placeholder="Card Holder Name" />
														<input type="number" className="ti-form-input" placeholder="Card Number" />
													</div>
												</div>
												<div className="lg:col-span-6 col-span-12 max-w-xs">
													<div className="space-y-3">
													<Select options={modeofPayment} classNamePrefix='react-select' placeholder='Open this select menu' />
														<input type="text" className="ti-form-input" placeholder="Bank Details" />
														<input type="number" className="ti-form-input" placeholder="Amount" />
													</div>
												</div>
											</div>
										</div>
										<div className="ti-modal-footer sm:flex !block space-y-2 text-end">
											<Link className="ti-btn ti-btn-primary" to="#">
												<i className="ri-save-line"></i>Save changes
											</Link>
											<Link className="ti-btn ti-btn-secondary" to="#">
												<i className="ri-send-plane-line"></i> Send Invoice
											</Link>
											<Link className="ti-btn ti-btn-danger" to="#">
												<i className="ri-download-cloud-2-line"></i> Download
											</Link>
										</div>
									</div>
								</div>
							</div>


							
						</div>
						<div className="box-body">
							<div className="xl:flex xl:justify-between space-y-3 xl:space-y-0">
								<div className="sm:flex sm:space-x-3 space-y-3 sm:space-y-0 rtl:space-x-reverse">
									<div className="relative max-w-xs">
										<label htmlFor="hs-table-search" className="sr-only">Search</label>
										<input type="text" name="hs-table-search" id="hs-table-search"
											className="px-3 py-2 ltr:pr-10 rtl:pl-10 ti-form-input" placeholder="Search for items" />
										<div
											className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-4 rtl:pl-4">
											<i className="ri-search-line text-gray-500 dark:text-white/70"></i>
										</div>
									</div>
									<button aria-label="button" type="button"
										className="ltr:mr-1 rtl:ml-1 ti-btn px-3 py-2 ti-btn-outline border-gray-200 text-gray-500 dark:text-white/70 hover:text-white hover:bg-gray-500 hover:border-gray-500 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10 m-0">
										<i className="ri-refresh-line leading-none text-lg "></i>
									</button>
									<button aria-label="button" type="button" id="delete-btn" className="ti-btn px-3 py-2 ti-btn-danger m-0">
										<i className="ri-delete-bin-7-line leading-none text-lg"></i>
									</button>
								</div>
								<div className="sm:space-x-3 sm:flex space-y-3 sm:space-y-0 rtl:space-x-reverse">
									<div className="inline-flex">
										<div
											className="px-4 py-2 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
											<span className="text-sm text-gray-500 dark:text-white/70"><i
												className="ri ri-calendar-line"></i></span>
										</div>

										
										<DatePicker className="px-3 py-2 ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10 flatpickr-input" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
									</div>
									<div className="hs-dropdown ti-dropdown">
										<button id="hs-dropdown-transform-style" type="button"
											className="px-3 py-2 hs-dropdown-toggle ti-dropdown-toggle">
											All Invoices
											<svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret" width="16"
												height="16" viewBox="0 0 16 16" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
													stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
											</svg>
										</button>

										<div aria-labelledby="hs-dropdown-transform-style" data-hs-transition className="hs-dropdown-menu hidden z-10 hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out scale-95 duration-200 origin-top-left ti-dropdown-menu">
											<Link className="ti-dropdown-item" to="#"> All Invoices </Link>
											<Link className="ti-dropdown-item" to="#"> Paid Invoices </Link>
											<Link className="ti-dropdown-item" to="#"> Unpaid Invoices </Link>
											<Link className="ti-dropdown-item" to="#"> Draft Invoices </Link>
											<Link className="ti-dropdown-item" to="#"> Overdue Invoices </Link>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-5 table-bordered rounded-sm ti-custom-table-head overflow-scroll xxl:overflow-hidden">
								<table className="ti-custom-table ti-custom-table-head edit-table whitespace-nowrap text-center">
									<thead className="bg-gray-50 dark:bg-black/20">
										<tr className="cart-box">
											<th scope="col" className="dark:text-white/70">
												<div className="flex leading-[0] justify-center">
													<input type="checkbox"
														className="border-gray-500 ti-form-checkbox mt-0.5 check-all"
														id="hs-default-checkbox" />
													<label htmlFor="hs-default-checkbox"
														className="text-sm text-gray-500 dark:text-white/70"></label>
												</div>
											</th>
											<th scope="col" className="dark:text-white/70">Invoice Id</th>
											<th scope="col" className="dark:text-white/70">Customer</th>
											<th scope="col" className="dark:text-white/70">Created Date</th>
											<th scope="col" className="dark:text-white/70">Due Date</th>
											<th scope="col" className="dark:text-white/70">Status</th>
											<th scope="col" className="dark:text-white/70">payment Mode</th>
											<th scope="col" className="dark:text-white/70">Amount</th>
											<th scope="col" className="dark:text-white/70">Action</th>
										</tr>
									</thead>
									<tbody>
										{allData.map((idx)=>(
										<tr className="invoice-list" key={Math.random()}>
											<td className="">
												<div className="flex items-center h-5 invoice-checkbox justify-center">
													<input id="invoice-check-1" type="checkbox"
														className="border-gray-500 ti-form-checkbox" />
													<label htmlFor="invoice-check-1" className="sr-only">Checkbox</label>
												</div>
											</td>
											<td>{idx.invoiceid}</td>
											<td>
												<div className="flex space-x-3 rtl:space-x-reverse text-start min-w-[220px] truncate">
													<img className="avatar avatar-sm rounded-sm"
														src={idx.poc} alt="Image Description" />
													<div className="block">
														<p className="block text-sm font-semibold text-gray-800 dark:text-white my-auto">{idx.noc}</p>
														<p className="block text-xs text-gray-500 dark:text-white/70 my-auto">{idx.custemail}</p>
													</div>
												</div>
											</td>
											<td>{idx.createdDt}</td>
											<td>{idx.dueDt}</td>
											<td><span className={`truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-${idx.color}/10 text-${idx.color}/80`}>{idx.status}</span></td>
											<td>{idx.mop}</td>
											<td>{idx.billingamnt}</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative  w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-send"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															Send
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" onClick="changeTheInfo('Edit Invoice','Socrates Itumay','P.O. Box 283 8562 Fusce Rd., 20620','socratesitumany@abc.com','#IN5252155','25-10-2022','25-11-2022')"
														data-hs-overlay="#invoice-modal" className="invoice-edit m-0 hs-tooltip-toggle relative  w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#" onClick={() => handleRemove(idx.id)}
														className="invoice-btn m-0 hs-tooltip-toggle relative  w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
															Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										))}
									</tbody>
								</table>
							</div>
							<nav className="flex justify-end items-center space-x-2 rtl:space-x-reverse mt-5">
								<Link className="w-10 h-10 bg-white dark:bg-black/20 text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full" to="#">
									<span aria-hidden="true">«</span>
									<span className="sr-only">Previous</span>
								</Link>
								<Link className="w-10 h-10 bg-primary text-white p-2 inline-flex items-center justify-center text-sm font-medium rounded-full" to="#" aria-current="page">1</Link>
								<Link className="w-10 h-10 bg-white dark:bg-black/20 text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full" to="#">2</Link>
								<Link className="w-10 h-10 bg-white dark:bg-black/20 text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full" to="#">3</Link>
								<Link className="w-10 h-10 bg-white dark:bg-black/20 text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full" to="#">
									<span className="sr-only">Next</span>
									<span aria-hidden="true">»</span>
								</Link>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Invoicelist;
