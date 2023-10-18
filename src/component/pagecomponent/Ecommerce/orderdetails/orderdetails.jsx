import React from "react";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from 'react-router-dom';
import ALLImages from "../../../../common/imagesData";


const Orderdetails = () => {
	return (
		<div>
		<PageHeader currentpage="Order Details" activepage="Pages" mainpage="Order Details" />
			<div className= "grid grid-cols-12 gap-6">
				<div className= "col-span-12 lg:col-span-12">
					<div className= "box">
						<div className= "box-header">
							<div className= "sm:flex flex-row justify-between">
								<div className= "flex justify-start item-start space-y-2 flex-col">
									<h1 className= "text-base font-semibold text-gray-800 dark:text-white">Order : #52225</h1>
									<p className= "text-sm font-medium text-gray-500 dark:text-white/70 ">Order-Placement : 21st Nov 2022 at 5:20 PM</p>
								</div>
								<Link to={`${import.meta.env.BASE_URL}pagecomponent/invoice/invoicedetails/`} className= "ti-btn ti-btn-primary"><i className= "ri ri-download-2-fill ltr:mr-1 rtl:ml-1"></i> Invoice</Link>
							</div>
						</div>
						<div className= "box-body">
							<div className= "sm:grid grid-cols-12 gap-6 space-y-6 sm:space-y-0">
								<div className= "col-span-12 lg:col-span-6 xxl:!col-span-3">
									<div className= "box shadow-none border-0 mb-0">
										<div className= "box-body p-0 space-y-2">
											<h5 className= "text-base font-semibold text-gray-800 dark:text-white">Billing Address</h5>
											<p className= "text-gray-500 dark:text-white/70 text-sm">Sed rebum., RD. 12,NW, Dolor et., Gubergren
											</p>
										</div>
									</div>
								</div>
								<div className= "col-span-12 lg:col-span-6 xxl:!col-span-3">
									<div className= "box shadow-none border-0 mb-0">
										<div className= "box-body p-0 space-y-2">
											<h5 className= "text-base font-semibold text-gray-800 dark:text-white">Shipping Address</h5>
											<p className= "text-gray-500 dark:text-white/70 text-sm">Sed rebum., RD. 12,NW, Dolor et., Gubergren
											</p>
										</div>
									</div>
								</div>
								<div className= "col-span-12 lg:col-span-6 xxl:!col-span-3">
									<div className= "box shadow-none border-0 mb-0">
										<div className= "box-body p-0 space-y-2">
											<h5 className= "text-base font-semibold text-gray-800 dark:text-white">Shipping Method</h5>
											<p className= "text-gray-500 dark:text-white/70 text-sm">Free Delivery - Takes 4 to 5 working days to delivery</p>
										</div>
									</div>
								</div>
								<div className= "col-span-12 lg:col-span-6 xxl:!col-span-3">
									<div className= "box shadow-none border-0 mb-0">
										<div className= "box-body p-0 space-y-2">
											<h5 className= "text-base font-semibold text-gray-800 dark:text-white">Payment Method</h5>
											<div className= "flex flex-col">
												<div
													className="flex w-full rounded-sm text-base font-semibold focus:ring-primary dark:bg-bgdark dark:text-white/70">
													<img src= {ALLImages('png97')} className= "avatar !ring-transparent" alt="Image Description"/>
													<div>
														<p className= "text-sm ltr:ml-3 rtl:mr-3 dark:text-white my-auto">card : <span
															className="text-sm font-medium ltr:ml-3 rtl:mr-3 text-gray-500 dark:text-white my-auto">Master Card</span></p>
														<p className= "text-sm ltr:ml-3 rtl:mr-3 dark:text-white my-auto">Card ending with : <span
															className="text-sm font-medium ltr:ml-3 rtl:mr-3 text-gray-500 dark:text-white my-auto">1253</span></p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className= "box-body pt-0">
							<div className= "table-bordered whitespace-nowrap rounded-sm overflow-auto">
								<table className= "ti-custom-table ti-custom-table-head">
									<thead className= "bg-gray-100 dark:bg-black/20">
										<tr>
											<th scope="col" className= "dark:text-white/70">Product Details</th>
											<th scope="col" className= "dark:text-white/70">Tracking No</th>
											<th scope="col" className= "dark:text-white/70">Status</th>
											<th scope="col" className= "dark:text-white/70">Expected Delivery</th>
											<th scope="col" className= "dark:text-white/70">Price (Each) </th>
											<th scope="col" className= "dark:text-white/70">QNTY</th>
											<th scope="col" className= "dark:text-white/70">Total</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className= "flex space-x-3 rtl:space-x-reverse w-[290px]">
													<img className= "avatar avatar-lg rounded-sm bg-gray-100 dark:bg-black/20 p-1"
														src= {ALLImages('png25')} alt="Image Description"/>
													<div>
														<p className= "block text-sm font-semibold text-gray-800 dark:text-white truncate">Black Heals For Women</p>
														<span className= "block text-sm text-gray-600 dark:text-white/70">Brown Color</span>
														<span className= "block text-sm text-gray-600 dark:text-white/70">Size : M</span>
													</div>
												</div>
											</td>
											<td><Link to="#">#1218153635</Link></td>
											<td><Link className= "badge bg-red-100 text-red-800" to="#">Packed</Link></td>
											<td>30 Nov 2022</td>
											<td>$999</td>
											<td>1</td>
											<td>$699</td>
										</tr>
										<tr>
											<td>
												<div className= "flex space-x-3 rtl:space-x-reverse w-[290px]">
													<img className= "avatar avatar-lg rounded-sm bg-gray-100 dark:bg-black/20 p-1"
														src= {ALLImages('png31')} alt="Image Description"/>
													<div>
														<p className= "block text-sm font-semibold text-gray-800 dark:text-white truncate">Sun Glasses</p>
														<span className= "block text-sm text-gray-600 dark:text-white/70">White Color</span>
														<span className= "block text-sm text-gray-600 dark:text-white/70">Adjustable</span>
													</div>
												</div>
											</td>
											<td><Link to="#">#1218153635</Link></td>
											<td><Link className= "badge bg-sky-100 text-sky-800" to="#">Shipped</Link></td>
											<td>30 Nov 2022</td>
											<td>$699</td>
											<td>2</td>
											<td>$1,198</td>
										</tr>
										<tr>
											<td>
												<div className= "flex space-x-3 rtl:space-x-reverse w-[290px]">
													<img className= "avatar avatar-lg rounded-sm bg-gray-100 dark:bg-black/20 p-1"
														src= {ALLImages('png34')} alt="Image Description"/>
													<div>
														<p className= "block text-sm font-semibold text-gray-800 dark:text-white truncate">Leather Wallet For Grils</p>
														<span className= "block text-sm text-gray-600 dark:text-white/70">White Color</span>
													</div>
												</div>
											</td>
											<td><Link to="#">#1218153635</Link></td>
											<td><Link className= "badge bg-yellow-100 text-yellow-800" to="#">Out for Delivery</Link></td>
											<td>30 Nov 2022</td>
											<td>$150</td>
											<td>5</td>
											<td>$500</td>
										</tr>
										<tr>
											<td>
												<div className= "flex space-x-3 rtl:space-x-reverse w-[290px]">
													<img className= "avatar avatar-lg rounded-sm bg-gray-100 dark:bg-black/20 p-1"
														src= {ALLImages('png29')} alt="Image Description"/>
													<div>
														<p className= "block text-sm font-semibold text-gray-800 dark:text-white truncate">Dolor Rose Frangrance Perfume</p>
														<span className= "block text-sm text-gray-600 dark:text-white/70">Jasmine Fragrance</span>
														<span className= "block text-sm text-gray-600 dark:text-white/70">500 ML</span>
													</div>
												</div>
											</td>
											<td><Link to="#">#1218153635</Link></td>
											<td><Link className= "badge bg-green-100 text-green-800" to="#">Delivered</Link></td>
											<td>30 Nov 2022</td>
											<td>$299</td>
											<td>1</td>
											<td>$199</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className= "grid grid-cols-12 gap-6">
				<div className= "col-span-12 xxl:!col-span-4 md:col-span-6">
					<div className= "box">
						<div className= "box-header">
							<div className= "flex justify-between">
								<h5 className= "box-title">Order Tracking</h5>
								<p className= "font-semibold mb-0 text-sm">#152632235822</p>
							</div>
						</div>
						<div className= "box-body">
							<div className= "order-track">
								<div className= "hs-accordion-group" data-hs-accordion-always-open>
									<div className= "hs-accordion active" id="order-heading-one">
										<Link to="#"
											className="hs-accordion-toggle group pb-3 inline-flex items-center gap-x-3 w-full font-semibold text-start transition"
											aria-controls="order-collapse-one">
											<div className= "flex w-full mb-0">
												<div className= "ltr:mr-2 rtl:ml-2">
													<span className= "text-danger">
														<i className= "ri ri-shopping-bag-2-line text-sm"></i>
													</span>
												</div>
												<div className= "sm:flex w-full justify-between">
													<p className= "font-semibold mb-0 text-sm">Order Placed</p>
													<p className= "text-xs text-gray-500 dark:text-white/70">Nov 10, 2022</p>
												</div>
											</div>
										</Link>
										<div id="order-collapse-one"
											className="space-y-3 hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
											aria-labelledby="order-heading-one">
											<div className= "text-xs">
												<p className= "mb-0">Order placed successfully by <Link to="#"
													className="font-semibold text-primary">Json Taylor</Link></p>
												<span className= "text-gray-500 dark:text-white/70">Nov 10, 2022, 15:36</span>
											</div>
											<div className= "text-xs">
												<p className= "mb-0">Your Order is ready to shipped from seller</p>
												<span className= "text-gray-500 dark:text-white/70">Nov 11, 2022, 04:52</span>
											</div>
										</div>
									</div>
									<div className= "hs-accordion active" id="order-heading-two">
										<Link to="#"
											className="hs-accordion-toggle group pb-3 inline-flex items-center gap-x-3 w-full font-semibold text-start transition"
											aria-controls="order-collapse-two">
											<div className= "flex w-full mb-0">
												<div className= "ltr:mr-2 rtl:ml-2">
													<span className= "text-info">
														<i className= "ri ri-gift-2-line text-sm"></i>
													</span>
												</div>
												<div className= "sm:flex w-full justify-between">
													<p className= "font-semibold mb-0 text-sm ">Order Packed</p>
													<p className= "text-xs text-gray-500 dark:text-white/70">Nov 10, 2022</p>
												</div>
											</div>
										</Link>
										<div id="order-collapse-two"
											className="space-y-3 hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
											aria-labelledby="order-heading-two">
											<div className= "text-xs">
												<p className= "mb-0">Order placed successfully packed by courier Patner</p>
												<span className= "text-gray-500 dark:text-white/70">Nov 12, 2022, 5:40</span>
											</div>
											<div className= "text-xs">
												<p className= "mb-0">Your Order is ready to ship from courier Patner</p>
												<span className= "text-gray-500 dark:text-white/70">Nov 12, 2022, 16:52</span>
											</div>
										</div>
									</div>
									<div className= "hs-accordion" id="order-heading-three">
										<Link to="#"
											className="group pb-3 inline-flex items-center gap-x-3 w-full font-semibold text-start transition">
											<div className= "flex w-full mb-0">
												<div className= "ltr:mr-2 rtl:ml-2">
													<span className= "text-primary">
														<i className= "ri ri-truck-line text-sm"></i>
													</span>
												</div>
												<div className= "sm:flex w-full justify-between">
													<p className= "font-semibold mb-0 text-sm ">Order Shipped</p>
													<p className= "text-xs text-gray-500 dark:text-white/70">Nov 13, 2022</p>
												</div>
											</div>
										</Link>
									</div>
									<div className= "hs-accordion" id="order-heading-four">
										<Link to="#"
											className="group pb-3 inline-flex items-center gap-x-3 w-full font-semibold text-start transition">
											<div className= "flex w-full mb-0">
												<div className= "ltr:mr-2 rtl:ml-2">
													<span className= "text-primary">
														<i className= "ri ri-logout-box-r-line text-sm"></i>
													</span>
												</div>
												<div className= "sm:flex w-full justify-between">
													<p className= "font-semibold mb-0 text-sm ">Order Is Out For Delivery</p>
													<p className= "text-xs text-gray-500 dark:text-white/70">Nov 14, 2022</p>
												</div>
											</div>
										</Link>
									</div>
									<div className= "hs-accordion" id="order-heading-five">
										<Link to="#" className= "group inline-flex items-center gap-x-3 w-full font-semibold text-start transition">
											<div className= "flex w-full mb-0">
												<div className= "ltr:mr-2 rtl:ml-2">
													<span className= "text-primary">
														<i className= "ri ri-hand-heart-line text-sm"></i>
													</span>
												</div>
												<div className= "sm:flex w-full justify-between">
													<p className= "font-semibold mb-0 text-sm ">Order Is Delivered</p>
													<p className= "text-xs text-gray-500 dark:text-white/70">Nov 15, 2022</p>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className= "col-span-12 xxl:!col-span-5 md:col-span-6">
					<div className= "box">
						<div className= "box-header">
							<h5 className= "box-title">Paymeny Summary</h5>
						</div>
						<div className= "box-body">
							<ul className= "flex flex-col">
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full"> Total Items
										<span className= "">4</span>
									</div>
								</li>
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full">  SubTotal
										<span className= "">$1100</span>
									</div>
								</li>
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full"> Other Charges
										<span className= "">$200</span>
									</div>
								</li>
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full"> Shipping Charges
										<span className= "text-success text-end">-0% (Free)</span>
									</div>
								</li>
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full"> Coupon Discount
										<span className= "text-success">-5%</span>
									</div>
								</li>
								<li className= "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
									<div className= "flex justify-between w-full text-xl font-semibold"> Total
										<span className= "">$1500</span>
									</div>
								</li>
							</ul>
						</div>
						<div className= "box-footer">
							<Link to="#" className= "ti-btn ti-btn-primary w-full p-2">Cancel Order</Link>
						</div>
					</div>
				</div>
				<div className= "col-span-12 xxl:!col-span-3">
					<div className= "box">
						<div className= "box-header">
							<h5 className= "box-title"> Customer Details </h5>
						</div>
						<div className= "box-body">
							<div className= "flex align-items-center space-x-3 rtl:space-x-reverse">
								<div className= "flex-auto my-auto space-y-2">
									<div className= "space-x-3">
										<span className= "text-sm font-bold">Name :</span>
										<span className= "text-sm text-gray-500 dark:text-white/70">Json Taylor</span>
									</div>
									<div className= "space-x-3">
										<span className= "text-sm font-bold">Email :</span>
										<span className= "text-sm text-gray-500 dark:text-white/70">jsontaylor2135@gmail.com</span>
									</div>
									<div className= "space-x-3">
										<span className= "text-sm font-bold">Phone No :</span>
										<span className= "text-sm text-gray-500 dark:text-white/70">+121 45856956956</span>
									</div>
									<div className= "space-x-3">
										<span className= "text-sm font-bold">Orders:</span>
										<span className= "text-sm text-gray-500 dark:text-white/70">15 Previous orders</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className= "box">
						<div className= "box-body space-y-2">
							<h5 className= "text-base font-semibold text-gray-800 dark:text-white">Rate The Product</h5>
							<div id="product-rater"></div>
							<textarea className= "ti-form-input" rows="3" name="description" value="This is a description." onChange={(ele)=>{}}
								placeholder="">Some quick example text to build on the card title and make up the bulk of the card's content.</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Orderdetails;
