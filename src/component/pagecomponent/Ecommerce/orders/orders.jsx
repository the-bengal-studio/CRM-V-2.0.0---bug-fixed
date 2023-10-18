import React from "react";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from 'react-router-dom'
import ALLImages from "../../../../common/imagesData";

const Orders = () => {
	return (
		<div>
		<PageHeader currentpage="Orders" activepage="Pages" mainpage="Orders" />
			<div className= "grid grid-cols-12 gap-x-6 gap-y-2 max-w-7xl mx-auto">
				<div className= "col-span-12 lg:col-span-6">
					<div className= "box">
						<div className= "box-header">
							<div className= "flex justify-between">
								<div className= "">
									<span className= "text-sm font-semibold">Order Id</span>
									<span className= "block text-xs text-gray-500 dark:text-white/70">#25256</span>
								</div>
								<div className= "">
									<span className= "fs-14 font-semibold">Ordered Date </span>
									<span className= "block text-xs text-gray-500 dark:text-white/70">12,November</span>
								</div>
							</div>
						</div>
						<div className= "box-body">
							<div className= "space-y-3">
								<div className= "sm:flex space-x-3 rtl:space-x-reverse">
									<img src= {ALLImages('png25')} alt="product" className= "avatar w-24 h-24 rounded-sm bg-gray-100 dark:bg-black/20 p-2"/>
									<div className= "flex justify-between w-full">
										<div className= "product-details space-y-1">
											<h5 className= "text-lg font-semibold">Black Heals For Women</h5>
											<p className= "font-medium text-sm">Delivery Address : <span
												className="text-gray-500 dark:text-white/70 text-xs  font-normal">
                            2nd street,houston texas,united states.</span>
											</p>
											<p className= "font-medium text-sm">Delivery Dated : <span
												className="text-gray-500 dark:text-white/70 text-xs font-normal">
                            25 November</span>
											</p>
											<div><span className= "font-medium text-sm ltr:mr-2 rtl:ml-2">Status : </span><Link className= "text-info hover:underline" to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails`}>Packed</Link></div>
										</div>
										<div className= "flex space-x-2 rtl:space-x-reverse">
											<h5 className= "text-base font-semibold text-gray-500 dark:text-white/70">$699</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className= "box-footer">
							<Link to="#"
								className="ti-btn m-0 py-2 px-3 ti-btn-secondary">
                  Cancel Order
							</Link>
							<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product/`}
								className="ltr:float-right rtl:float-left ti-btn m-0 py-2 px-3 ti-btn-danger">
                  Shop Similar
							</Link>
						</div>
					</div>
				</div>
				<div className= "col-span-12 lg:col-span-6">
					<div className= "box">
						<div className= "box-header">
							<div className= "flex justify-between">
								<div className= "">
									<span className= "text-sm font-semibold">Order Id</span>
									<span className= "block text-xs text-gray-500 dark:text-white/70">#12852</span>
								</div>
								<div className= "">
									<span className= "fs-14 font-semibold">Ordered Date </span>
									<span className= "block text-xs text-gray-500 dark:text-white/70">13,November</span>
								</div>
							</div>
						</div>
						<div className= "box-body">
							<div className= "space-y-3">
								<div className= "sm:flex space-x-3 rtl:space-x-reverse">
									<img src= {ALLImages('png31')} alt="product" className= "avatar w-24 h-24 rounded-sm bg-gray-100 dark:bg-black/20 p-2"/>
									<div className= "flex justify-between w-full">
										<div className= "product-details space-y-1">
											<h5 className= "text-lg font-semibold">Sun Glasses</h5>
											<p className= "font-medium text-sm">Delivery Address : <span
												className="text-gray-500 dark:text-white/70 text-xs  font-normal">
                            2nd street,houston texas,united states.</span>
											</p>
											<p className= "font-medium text-sm">Delivery Dated : <span
												className="text-gray-500 dark:text-white/70 text-xs font-normal">
                            26 November</span>
											</p>
											<div><span className= "font-medium text-sm ltr:mr-2 rtl:ml-2">Status : </span><Link className= "text-primary hover:underline" to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}>Ordered</Link></div>
										</div>
										<div className= "flex space-x-2 rtl:space-x-reverse">
											<h5 className= "text-base font-semibold text-gray-500 dark:text-white/70">$599</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className= "box-footer">
							<Link to="#"
								className="ti-btn m-0 py-2 px-3 ti-btn-secondary">
                  Cancel Order
							</Link>
							<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product/`}
								className="ltr:float-right rtl:float-left ti-btn m-0 py-2 px-3 ti-btn-danger">
                  Shop Similar
							</Link>
						</div>
					</div>
				</div>
				<div className= "col-span-12 lg:col-span-6">
					<div className= "box">
						<div className= "box-header">
							<div className= "flex justify-between">
								<div className= "">
									<span className= "text-sm font-semibold">Order Id</span>
									<span className= "block text-xs text-gray-500 dark:text-white/70">#58584</span>
								</div>
								<div className= "">
									<span className= "fs-14 font-semibold">Ordered Date </span>
									<span className= "block text-xs text-gray-500 dark:text-white/70">11,November</span>
								</div>
							</div>
						</div>
						<div className= "box-body">
							<div className= "space-y-3">
								<div className= "sm:flex space-x-3 rtl:space-x-reverse">
									<img src= {ALLImages('png28')} alt="product" className= "avatar w-24 h-24 rounded-sm bg-gray-100 dark:bg-black/20 p-2"/>
									<div className= "flex justify-between w-full">
										<div className= "product-details space-y-1">
											<h5 className= "text-lg font-semibold">Dolor Wireless Airpods </h5>
											<p className= "font-medium text-sm">Delivery Address : <span
												className="text-gray-500 dark:text-white/70 text-xs  font-normal">
                            2nd street,houston texas,united states.</span>
											</p>
											<p className= "font-medium text-sm">Delivery Dated : <span
												className="text-gray-500 dark:text-white/70 text-xs font-normal">
                            21 November</span>
											</p>
											<div><span className= "font-medium text-sm ltr:mr-2 rtl:ml-2">Status : </span><Link className= "text-danger hover:underline" to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}>Cancelled</Link></div>
										</div>
										<div className= "flex space-x-2 rtl:space-x-reverse">
											<h5 className= "text-base font-semibold text-gray-500 dark:text-white/70">$399</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className= "box-footer">
							<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product/`}
								className="ltr:float-right rtl:float-left ti-btn m-0 py-2 px-3 ti-btn-primary">
                  Back To Shop
							</Link>
						</div>
					</div>
				</div>
				<div className= "col-span-12 lg:col-span-6">
					<div className= "box">
						<div className= "box-header">
							<div className= "flex justify-between">
								<div className= "">
									<span className= "text-sm font-semibold">Order Id</span>
									<span className= "block text-xs text-gray-500 dark:text-white/70">#25465</span>
								</div>
								<div className= "">
									<span className= "fs-14 font-semibold">Ordered Date </span>
									<span className= "block text-xs text-gray-500 dark:text-white/70">10,November</span>
								</div>
							</div>
						</div>
						<div className= "box-body">
							<div className= "space-y-3">
								<div className= "sm:flex space-x-3 rtl:space-x-reverse">
									<img src= {ALLImages('png29')} alt="product" className= "avatar w-24 h-24 rounded-sm bg-gray-100 dark:bg-black/20 p-2"/>
									<div className= "flex justify-between w-full">
										<div className= "product-details space-y-1">
											<h5 className= "text-lg font-semibold">Dolor Rose Frangrance Perfume</h5>
											<p className= "font-medium text-sm">Delivery Address : <span
												className="text-gray-500 dark:text-white/70 text-xs  font-normal">
                            2nd street,houston texas,united states.</span>
											</p>
											<p className= "font-medium text-sm">Delivered On : <span
												className="text-gray-500 dark:text-white/70 text-xs font-normal">
                            12 November ,5:51pm</span>
											</p>
											<div><span className= "font-medium text-sm ltr:mr-2 rtl:ml-2">Status : </span><Link className= "text-success hover:underline" to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}>Delivered</Link></div>
										</div>
										<div className= "flex space-x-2 rtl:space-x-reverse">
											<h5 className= "text-base font-semibold text-gray-500 dark:text-white/70">$245</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className= "box-footer">
							<Link to="#"
								className="ti-btn m-0 py-2 px-3 ti-btn-info">
                  Rate product
							</Link>
							<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product/`}
								className="ltr:float-right rtl:float-left ti-btn m-0 py-2 px-3 ti-btn-danger">
                  Shop Similar
							</Link>
						</div>
					</div>
				</div>
				<div className= "col-span-12 lg:col-span-6">
					<div className= "box">
						<div className= "box-header">
							<div className= "flex justify-between">
								<div className= "">
									<span className= "text-sm font-semibold">Order Id</span>
									<span className= "block text-xs text-gray-500 dark:text-white/70">#25465</span>
								</div>
								<div className= "">
									<span className= "fs-14 font-semibold">Ordered Date </span>
									<span className= "block text-xs text-gray-500 dark:text-white/70">15,November</span>
								</div>
							</div>
						</div>
						<div className= "box-body">
							<div className= "space-y-3">
								<div className= "sm:flex space-x-3 rtl:space-x-reverse">
									<img src= {ALLImages('png26')} alt="product" className= "avatar w-24 h-24 rounded-sm bg-gray-100 dark:bg-black/20 p-2"/>
									<div className= "flex justify-between w-full">
										<div className= "product-details space-y-1">
											<h5 className= "text-lg font-semibold">Tshirt For Men </h5>
											<p className= "font-medium text-sm">Delivery Address : <span
												className="text-gray-500 dark:text-white/70 text-xs  font-normal">
                            2nd street,houston texas,united states.</span>
											</p>
											<p className= "font-medium text-sm">Delivered Date : <span
												className="text-gray-500 dark:text-white/70 text-xs font-normal">
                            25 November </span>
											</p>
											<div><span className= "font-medium text-sm ltr:mr-2 rtl:ml-2">Status : </span><Link className= "text-secondary hover:underline" to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}>Shipped</Link></div>
										</div>
										<div className= "flex space-x-2 rtl:space-x-reverse">
											<h5 className= "text-base font-semibold text-gray-500 dark:text-white/70">$245</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className= "box-footer">
							<Link to="#"
								className="ti-btn m-0 py-2 px-3 ti-btn-secondary">
                  Cancel Order
							</Link>
							<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product/`}
								className="ltr:float-right rtl:float-left ti-btn m-0 py-2 px-3 ti-btn-danger">
                  Shop Similar
							</Link>
						</div>
					</div>
				</div>
				<div className= "col-span-12 lg:col-span-6">
					<div className= "box">
						<div className= "box-header">
							<div className= "flex justify-between">
								<div className= "">
									<span className= "text-sm font-semibold">Order Id</span>
									<span className= "block text-xs text-gray-500 dark:text-white/70">#25465</span>
								</div>
								<div className= "">
									<span className= "fs-14 font-semibold">Ordered Date </span>
									<span className= "block text-xs text-gray-500 dark:text-white/70">08,November</span>
								</div>
							</div>
						</div>
						<div className= "box-body">
							<div className= "space-y-3">
								<div className= "sm:flex space-x-3 rtl:space-x-reverse">
									<img src= {ALLImages('png33')} alt="product" className= "avatar w-24 h-24 rounded-sm bg-gray-100 dark:bg-black/20 p-2"/>
									<div className= "flex justify-between w-full">
										<div className= "product-details space-y-1">
											<h5 className= "text-lg font-semibold">Travel Bag For Womens </h5>
											<p className= "font-medium text-sm">Delivery Address : <span
												className="text-gray-500 dark:text-white/70 text-xs  font-normal">
                            2nd street,houston texas,united states.</span>
											</p>
											<p className= "font-medium text-sm">Delivered Date : <span
												className="text-gray-500 dark:text-white/70 text-xs font-normal">
                            20 November </span>
											</p>
											<div><span className= "font-medium text-sm ltr:mr-2 rtl:ml-2">Status : </span><Link className= "text-warning hover:underline" to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/orderdetails/`}>Out For Delivery</Link></div>
										</div>
										<div className= "flex space-x-2 rtl:space-x-reverse">
											<h5 className= "text-base font-semibold text-gray-500 dark:text-white/70">$299</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className= "box-footer">
							<Link to="#"
								className="ti-btn m-0 py-2 px-3 ti-btn-secondary">
                  Cancel Order
							</Link>
							<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product/`}
								className="ltr:float-right rtl:float-left ti-btn m-0 py-2 px-3 ti-btn-danger">
                  Shop Similar
							</Link>
						</div>
					</div>
				</div>
			</div>
			<nav className= "flex justify-center mx-auto space-x-2 rtl:space-x-reverse mb-5">
				<Link className= "w-10 h-10 bg-gray-100 dark:bg-black/20 dark:text-white/70 text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full" to="#">
					<span aria-hidden="true">«</span>
					<span className= "sr-only">Previous</span>
				</Link>
				<Link className= "w-10 h-10 bg-primary text-white p-2 inline-flex items-center justify-center text-sm font-medium rounded-full" to="#" aria-current="page">1</Link>
				<Link className= "w-10 h-10 bg-gray-100 dark:bg-black/20 dark:text-white/70 text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full" to="#">2</Link>
				<Link className= "w-10 h-10 bg-gray-100 dark:bg-black/20 dark:text-white/70 text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full" to="#">3</Link>
				<Link className= "w-10 h-10 bg-gray-100 dark:bg-black/20 dark:text-white/70 text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full" to="#">
					<span className= "sr-only">Next</span>
					<span aria-hidden="true">»</span>
				</Link>
			</nav>
		</div>
	);
};
export default Orders;
