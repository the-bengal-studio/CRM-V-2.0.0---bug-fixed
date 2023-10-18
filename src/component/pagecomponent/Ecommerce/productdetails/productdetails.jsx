import React, { useState } from "react";
import ALLImages from "../../../../common/imagesData";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Color, productSize } from "../../../../common/select2data";
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { MostSearchProduct } from "../../../../common/EcommerceData";

const Productdetails = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
			<PageHeader currentpage="Product Details" activepage="Pages" mainpage="Product Details" />
			<div className="box">
				<div className="grid grid-cols-12">
					<div className="col-span-12 xxl:col-span-5">
						<div className="box mb-0 border-0 shadow-none bg-transparent">
							<div className="box-body">
								<Swiper style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff", }} className="mySwiper2" loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]}>
									<SwiperSlide>
									<img alt="product-image-1" src={ALLImages('png17')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-2" src={ALLImages('png18')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-3" src={ALLImages('png19')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-4" src={ALLImages('png20')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-5" src={ALLImages('png21')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-6" src={ALLImages('png22')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-7" src={ALLImages('png23')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-8" src={ALLImages('png24')} />
									</SwiperSlide>
								</Swiper>
								<Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper">
									<SwiperSlide>
									<img alt="product-image-1" src={ALLImages('png17')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-2" src={ALLImages('png18')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-3" src={ALLImages('png19')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-4" src={ALLImages('png20')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-5" src={ALLImages('png21')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-6" src={ALLImages('png22')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-7" src={ALLImages('png23')} />
									</SwiperSlide>
									<SwiperSlide>
									<img alt="product-image-8" src={ALLImages('png24')} />
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
					<div className="col-span-12 xxl:col-span-4">
						<div className="box mb-0 border-0 shadow-none bg-transparent">
							<div className="box-body xxl:px-0">
								<div className="space-y-5">
									<h5 className="font-bold text-xl text-gray-800 dark:text-white">Dolar 20000mAh 18W Fast Charging Power Bank | Dual Output (Type C, 1
										USB) and Dual Input (Type C, Micro USB) Ports</h5>
									<div className="sm:flex sm:space-x-6 rtl:space-x-reverse sm:space-y-0 space-y-2">
										<div className="flex space-x-2 rtl:space-x-reverse">
											<i className="ri ri-star-fill text-yellow-500 text-sm"></i>
											<p className="text-gray-500 dark:text-white/70 text-sm space-x-2 rtl:space-x-reverse">4.2 Rating</p>
										</div>
										<div className="flex space-x-2 rtl:space-x-reverse">
											<span className="my-auto w-1.5 h-1.5 inline-block bg-gray-400 rounded-full"></span>
											<p className="text-gray-500 dark:text-white/70 text-sm space-x-2 rtl:space-x-reverse">2,262 Reviews
											</p>
										</div>
										<div className="flex space-x-2 rtl:space-x-reverse">
											<span className="my-auto w-1.5 h-1.5 inline-block bg-gray-400 rounded-full"></span>
											<p className="text-gray-500 dark:text-white/70 text-sm space-x-2 rtl:space-x-reverse">3,252 Units
												Sold</p>
										</div>
									</div>
									<p className="text-gray-500 dark:text-white/70"><strong className="text-primary">81%</strong> of buyers
										enjoyed this product! <strong className="text-success">(105 votes)</strong> </p>
									<div className="space-y-4">
										<h5 className="font-bold text-sm my-auto w-28 text-gray-800 dark:text-white">Description :</h5>
										<p className="my-auto font-medium text-sm text-gray-500 dark:text-white/70">Lorem ipsum dolor sit
											amet, consectetur adipisicing elit. Voluptas sint exercitationem veritatis harum maiores
											corporis perspiciatis quos accusantium velit. Deserunt tenetur rerum nemo illum. Dolor
											laboriosam atque accusantium perspiciatis rerum?</p>
									</div>
									<div className="sm:flex sm:space-x-5">
										<h5 className="font-bold text-sm my-auto w-28 text-gray-800 dark:text-white">Status :</h5>
										<span className="my-auto font-medium text-sm text-success">Available In Stock</span>
									</div>
									<div className="sm:flex sm:space-x-2">
										<h5 className="font-bold text-sm my-auto w-28 text-gray-800 dark:text-white">Price :</h5>
										<h5 className="text-2xl font-semibold text-primary">$2000</h5>
										<span
											className="my-auto line-through text-base text-gray-500 dark:text-white/70 font-semibold">$2999</span>
									</div>
									<div className="sm:flex sm:space-x-3 product-des">
										<h5 className="font-bold text-sm my-auto w-28 text-gray-800 dark:text-white">Colors :</h5>
										<Select className="product-des-select" classNamePrefix='react-select' options={Color} placeholder='Select Color' />
									</div>
									<div className="sm:flex sm:space-x-3 product-des">
										<h5 className="font-bold text-sm my-auto w-28 text-gray-800 dark:text-white">Capacity :</h5>
										<Select className="product-des-select" classNamePrefix='react-select' options={productSize} placeholder='Select Size' />
									</div>
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/wishlist/`} className="ti-btn ti-btn-ghost-primary"><i className="ri-heart-2-line"></i>Add To Favourites</Link>
									<Link to="#" className="ti-btn ti-btn-ghost-danger"><i className="ri-share-forward-line"></i>Compare Product</Link>
									<div className="sm:flex sm:space-x-3 product-des">
										<h5 className="font-bold text-sm my-auto w-28 text-gray-800 dark:text-white">Share :</h5>
										<div className="flex space-x-1 rtl:space-x-reverse">
											<button aria-label="button" type="button"
												className="m-0 rounded-sm p-2 ti-btn ti-btn-outline ring-white/10 text-gray-500 dark:text-white/70 bg-white/10  border-gray-200 dark:border-white/10">
												<i className="ri ri-github-line text-lg leading-none"></i>
											</button>
											<button aria-label="button" type="button"
												className="m-0 rounded-sm p-2 ti-btn ti-btn-outline ring-white/10 text-gray-500 dark:text-white/70 bg-white/10  border-gray-200 dark:border-white/10">
												<i className="ri ri-instagram-line text-lg leading-none"></i>
											</button>
											<button aria-label="button" type="button"
												className="m-0 rounded-sm p-2 ti-btn ti-btn-outline ring-white/10 text-gray-500 dark:text-white/70 bg-white/10  border-gray-200 dark:border-white/10">
												<i className="ri ri-twitter-line text-lg leading-none"></i>
											</button>
											<button aria-label="button" type="button"
												className="m-0 rounded-sm p-2 ti-btn ti-btn-outline ring-white/10 text-gray-500 dark:text-white/70 bg-white/10  border-gray-200 dark:border-white/10">
												<i className="ri ri-linkedin-line text-lg leading-none"></i>
											</button>
											<button aria-label="button" type="button"
												className="m-0 rounded-sm p-2 ti-btn ti-btn-outline ring-white/10 text-gray-500 dark:text-white/70 bg-white/10  border-gray-200 dark:border-white/10">
												<i className="ri ri-facebook-circle-line text-lg leading-none"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-12 xxl:col-span-3">
						<div className="box shadow-none border-0 mb-0">
							<div className="box-body">
								<div className="box !bg-success !border-success text-white">
									<div className="box-body p-4">
										<div className="flex">
											<div className="space-y-2">
												<h5 className="text-xl">30% Off</h5>
												<p className="text-xs text-white/80">Grab it fast has limited Stock</p>
											</div>
											<div className="ltr:ml-auto rtl:mr-auto my-auto">
												<span className="px-2 py-1 badge bg-black/20 text-white rounded-sm text-xs">Untill Mar 9th
													2023</span>
											</div>
										</div>
									</div>
								</div>
								<div className="box shadow-none">
									<div className="box-header">
										<h5 className="box-title">Set Order</h5>
									</div>
									<div className="box-body space-y-4">
										<div className="flex space-x-3 rtl:space-x-reverse">
											<h5 className="font-normal text-gray-500 dark:text-white/70 text-sm my-auto w-28">Item :</h5>
											<img src={ALLImages('png22')} className="avatar rounded-sm"
												alt="Product-image" />
										</div>
										<div className="flex space-x-3 rtl:space-x-reverse">
											<h5 className="font-normal text-gray-500 dark:text-white/70 text-sm my-auto w-28">Color :</h5>
											<p className="font-medium text-sm">Red</p>
										</div>
										<div className="flex space-x-3 rtl:space-x-reverse">
											<h5 className="font-normal text-gray-500 dark:text-white/70 text-sm my-auto w-28">Capacity :</h5>
											<p className="font-medium text-sm">2000 mAh</p>
										</div>
										<div className="sm:flex sm:space-x-3">
											<h5 className="font-normal text-gray-500 dark:text-white/70 text-sm my-auto w-28">Quantity :</h5>
											<div className="flex rounded-sm">
												<button aria-label="button" type="button" id="product-quantity-minus" onClick={dec}
													className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-5 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
													<i className="ti ti-minus"></i>
												</button>
												<input type="text" id="product-quantity" name="product-quantity"
													className="p-0 ti-form-input w-12 rounded-none focus:z-10 text-center"
													placeholder="0" />
												<button aria-label="button" type="button" id="product-quantity-plus" onClick={inc}
													className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8  ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
													<i className="ti ti-plus"></i>
												</button>
											</div>
										</div>
										<div className="flex space-x-3 rtl:space-x-reverse">
											<h5 className="font-normal text-gray-500 dark:text-white/70 text-sm my-auto w-28">Total :</h5>
											<p className="font-medium text-sm">$2000</p>
										</div>
										<p className="font-medium text-sm">Expected Delivery By Feb 25 ,2023</p>
										<div>
											<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/cart/`} className="w-full ti-btn ti-btn-primary">Add To Cart</Link>
											<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/checkout/`} className="w-full ti-btn ti-btn-outline ti-btn-outline-primary">Buy Now</Link>
										</div>
									</div>
								</div>
								<p className="text-gray-500 dark:text-white/70 text-sm text-center">Any Issue Reagarding Product ? <Link
									to="#" className="text-primary"><i
										className="ri-information-line ltr:mr-2 rtl:ml-2 align-middle"></i>Report</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 xxl:col-span-9">
					<div className="box">
						<div className="box-body pt-0 px-0">
							<div className="border-b border-gray-200 dark:border-white/10">
								<nav className="-mb-0.5 sm:flex sm:space-x-6 rtl:space-x-reverse px-6" aria-label="Tabs" role="tablist"
									data-hs-tabs-vertical="true">
									<button aria-label="button" type="button"
										className="w-full sm:w-auto hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 dark:text-white/70 hover:text-primary active"
										id="product-spec-tab-2" data-hs-tab="#product-spec-content-2"
										aria-controls="product-spec-content-2" role="tab">
										Description
									</button>
									<button aria-label="button" type="button"
										className="w-full sm:w-auto hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 dark:text-white/70 hover:text-primary"
										id="product-spec-tab-3" data-hs-tab="#product-spec-content-3"
										aria-controls="product-spec-content-3" role="tab">
										Ratings
									</button>
									<button aria-label="button" type="button"
										className="w-full sm:w-auto hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 dark:text-white/70 hover:text-primary"
										id="product-spec-tab-4" data-hs-tab="#product-spec-content-4"
										aria-controls="product-spec-content-3" role="tab">
										Reviews
									</button>
									<button aria-label="button" type="button"
										className="w-full sm:w-auto hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 dark:text-white/70 hover:text-primary"
										id="product-spec-tab-1" data-hs-tab="#product-spec-content-1"
										aria-controls="product-spec-content-1" role="tab">
										Ship and Return
									</button>
								</nav>
							</div>
							<div className="mt-6 px-6">
								<div id="product-spec-content-2" className="" role="tabpanel" aria-labelledby="product-spec-tab-2">
									<ul className="list-disc list-inside space-y-3 text-gray-900 dark:text-gray-200">
										<li>
											At vero eos et accusamus et iusto odio dignissimos
											ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
											molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
											officia deserunt mollitia animi, id est laborum et dolorum fuga.</li>
										<li>
											On the other hand, we denounce with righteous
											indignation and dislike men who are so beguiled and demoralized .</li>
										<li>
											But I must explain to you how all this mistaken idea
											of denouncing pleasure and praising pain was born and I will give you a complete account
											of
											the system.</li>
									</ul>
									<h5 className="font-bold text-sm my-6">Specifications :</h5>
									<div className="grid grid-cols-12 gap-6 overflow-auto">
										<div className="col-span-12 xxl:!col-span-6 md:col-span-6">
											<table className="ti-custom-table ti-custom-table-head">
												<tbody className="!divide-y-0">
													<tr>
														<td className="font-bold">Brand</td>
														<td>:</td>
														<td className="text-gray-500 dark:text-white/70">Dolar</td>
													</tr>
													<tr>
														<td className="font-bold">Connector Type</td>
														<td>:</td>
														<td className="text-gray-500 dark:text-white/70">USB</td>
													</tr>
													<tr>
														<td className="font-bold">Battery Capacity</td>
														<td>:</td>
														<td className="text-gray-500 dark:text-white/70"> 2000 mAh</td>
													</tr>
													<tr>
														<td className="font-bold">Special Feature</td>
														<td>:</td>
														<td className="text-gray-500 dark:text-white/70">Fast charge</td>
													</tr>
													<tr>
														<td className="font-bold">Weight</td>
														<td>:</td>
														<td className="text-gray-500 dark:text-white/70">500grms</td>
													</tr>
												</tbody>
											</table>
										</div>
										<div className="col-span-12 xxl:!col-span-6 md:col-span-6">
											<table className="ti-custom-table ti-custom-table-head">
												<tbody className="!divide-y-0">
													<tr>
														<td className="font-bold">Waranty</td>
														<td>:</td>
														<td className="text-gray-500 dark:text-white/70">6 Months</td>
													</tr>
													<tr>
														<td className="font-bold">Ports</td>
														<td>:</td>
														<td className="text-gray-500 dark:text-white/70">Dual Ports</td>
													</tr>
													<tr>
														<td className="font-bold">Dimensions</td>
														<td>:</td>
														<td className="text-gray-500 dark:text-white/70">32.25 * 25.2 *36.3 cm</td>
													</tr>
													<tr>
														<td className="font-bold">Display</td>
														<td>:</td>
														<td className="text-gray-500 dark:text-white/70">Wireless</td>
													</tr>
													<tr>
														<td className="font-bold">Origin</td>
														<td>:</td>
														<td className="text-gray-500 dark:text-white/70">India</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div id="product-spec-content-3" className="hidden" role="tabpanel">
									<div className="max-w-lg mx-auto space-y-6">
										<div className="space-y-4 text-center">
											<h5 className="text-base font-semibold">Customer Rating</h5>
											<div><span className="text-xl text-warning p-3 bg-warning/20 rounded-full">4.5</span></div>
											<div className="product-rating">
												<i className="ri ri-star-fill text-yellow-500 text-xl"></i>
												<i className="ri ri-star-fill text-yellow-500 text-xl"></i>
												<i className="ri ri-star-fill text-yellow-500 text-xl"></i>
												<i className="ri ri-star-fill text-yellow-500 text-xl"></i>
												<i className="ri ri-star-half-fill text-yellow-500 text-xl"></i>
											</div>
											<p className="!mt-3 text-sm text-gray-500 dark:text-white/70">Based On 25,256 Ratings</p>
										</div>
										<div className="space-y-4">
											<div className="flex items-center space-x-5 rtl:space-x-reverse justify-center">
												<div className="text-base leading-none">5<i
													className="ri ri-star-fill text-yellow-500 ltr:ml-2 rtl:mr-2"></i></div>
												<div className="ti-main-progress h-3 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar"
														style={{ width: "70%" }} aria-valuenow={70} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="text-gray-500 dark:text-white/70 text-sm">15,252</div>
											</div>
											<div className="flex items-center space-x-5 rtl:space-x-reverse justify-center">
												<div className="text-base leading-none">4<i
													className="ri ri-star-fill text-yellow-500 ltr:ml-2 rtl:mr-2"></i></div>
												<div className="ti-main-progress h-3 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar"
														style={{ width: "57%" }} aria-valuenow={57} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="text-gray-500 dark:text-white/70 text-sm">5,235</div>
											</div>
											<div className="flex items-center space-x-5 rtl:space-x-reverse justify-center">
												<div className="text-base leading-none">3<i
													className="ri ri-star-fill text-yellow-500 ltr:ml-2 rtl:mr-2"></i></div>
												<div className="ti-main-progress h-3 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar"
														style={{ width: "40%" }} aria-valuenow={40} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="text-gray-500 dark:text-white/70 text-sm">2,876</div>
											</div>
											<div className="flex items-center space-x-5 rtl:space-x-reverse justify-center">
												<div className="text-base leading-none">2<i
													className="ri ri-star-fill text-yellow-500 ltr:ml-2 rtl:mr-2"></i></div>
												<div className="ti-main-progress h-3 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar"
														style={{ width: "30%" }} aria-valuenow={30} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="text-gray-500 dark:text-white/70 text-sm">1,352</div>
											</div>
											<div className="flex items-center space-x-5 rtl:space-x-reverse justify-center">
												<div className="text-base leading-none">1<i
													className="ri ri-star-fill text-yellow-500 ltr:ml-2 rtl:mr-2"></i></div>
												<div className="ti-main-progress h-3 bg-gray-200 dark:bg-black/20">
													<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar"
														style={{ width: "15%" }} aria-valuenow={15} aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div className="text-gray-500 dark:text-white/70 text-sm">852</div>
											</div>
										</div>
									</div>
								</div>
								<div id="product-spec-content-4" className="hidden" role="tabpanel">
									<div className="space-y-2">
										<div className="box">
											<div className="box-header p-3">
												<div className="sm:flex justify-between">
													<div className="flex space-x-4 rtl:space-x-reverse">
														<div className="flex items-center space-x-3 rtl:space-x-reverse">
															<img className="avatar avatar-sm !w-8 !h-8 ring-0 rounded-full"
																src={ALLImages('jpg58')} alt="avatar" />
															<div>
																<p className="font-semibold text-sm">Dolar Paul
																</p>
																<p
																	className="flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs font-normal">
																	29 September,2023</p>
															</div>
														</div>
													</div>
													<div className="flex items-center space-x-3 rtl:space-x-reverse">
														<div className="flex space-x-2 rtl:space-x-reverse">
															<div className="product-rating">
																<i className="ri ri-star-fill text-yellow-500 text-base leading-none"></i>
																<i className="ri ri-star-fill text-yellow-500 text-base leading-none"></i>
																<i className="ri ri-star-fill text-yellow-500 text-base leading-none"></i>
																<i className="ri ri-star-fill text-yellow-500 text-base leading-none"></i>
																<i className="ri ri-star-fill text-gray-200 text-base leading-none"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="box-body p-3">
												<h5 className="font-semibold text-slate-700 dark:text-white">Lorem ipsum dolor sit amet
													consectetur adipisicing elit.</h5>
												<p className="my-2 text-gray-500 dark:text-white/70 text-xs">Very nice ! On the other hand,
													we
													denounce with righteous indignation and dislike men who are so beguiled and
													demoralized.</p>
												<img src={ALLImages('png22')}
													className="avatar rounded-sm p-2 border border-gray-200 dark:border-white/10"
													alt="Product-image" />
												<img src={ALLImages('png18')}
													className="avatar rounded-sm p-2 border border-gray-200 dark:border-white/10"
													alt="Product-image" />
												<img src={ALLImages('png21')}
													className="avatar rounded-sm p-2 border border-gray-200 dark:border-white/10"
													alt="Product-image" />
											</div>
											<div className="box-footer p-3 flex">
												<Link className="like" to="#"><span
													className="badge bg-danger/20 text-danger rounded-pill py-2 px-3"><i
														className="ri ri-heart-line me-1"></i>56</span></Link>
												<Link className="reply ltr:ml-auto rtl:mr-auto" to="#"><span
													className="badge bg-primary/20 text-primary rounded-pill py-2 px-3"><i
														className="ri ri-arrow-go-back-line me-1"></i>Reply</span></Link>
											</div>
										</div>
										<div className="box">
											<div className="box-header p-3">
												<div className="sm:flex justify-between">
													<div className="flex space-x-4 rtl:space-x-reverse">
														<div className="flex items-center space-x-3 rtl:space-x-reverse">
															<img className="avatar avatar-sm !w-8 !h-8 ring-0 rounded-full"
																src={ALLImages('jpg61')} alt="avatar" />
															<div>
																<p className="font-semibold text-sm">Socrates Imualte</p>
																<p
																	className="flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs font-normal">
																	25 September,2023</p>
															</div>
														</div>
													</div>
													<div className="flex items-center space-x-3 rtl:space-x-reverse">
														<div className="flex space-x-2 rtl:space-x-reverse">
															<div className="product-rating">
																<i className="ri ri-star-fill text-yellow-500 text-base leading-none"></i>
																<i className="ri ri-star-fill text-yellow-500 text-base leading-none"></i>
																<i className="ri ri-star-fill text-yellow-500 text-base leading-none"></i>
																<i className="ri ri-star-fill text-gray-200 text-base leading-none"></i>
																<i className="ri ri-star-fill text-gray-200 text-base leading-none"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="box-body p-3">
												<h5 className="font-semibold text-slate-700 dark:text-white">Lorem ipsum dolor sit amet
													consectetur adipisicing elit.</h5>
												<p className="my-2 text-gray-500 dark:text-white/70 text-xs">Very nice ! On the other hand,
													we
													denounce with righteous indignation and dislike men who are so beguiled and
													demoralized.</p>
												<img src={ALLImages('png19')}
													className="avatar rounded-sm p-2 border border-gray-200 dark:border-white/10"
													alt="product-image" />
											</div>
											<div className="box-footer p-3 flex">
												<Link className="like" to="#"><span
													className="badge bg-danger/20 text-danger rounded-pill py-2 px-3"><i
														className="ri ri-heart-line me-1"></i>56</span></Link>
												<Link className="reply ltr:ml-auto rtl:mr-auto" to="#"><span
													className="badge bg-primary/20 text-primary rounded-pill py-2 px-3"><i
														className="ri ri-arrow-go-back-line me-1"></i>Reply</span></Link>
											</div>
										</div>
									</div>
								</div>
								<div id="product-spec-content-1" className="hidden" role="tabpanel">
									You can exchange the product up to 30 days after delivery. Shipping on your first exchange
									for any item is free of charge. If you decide to exchange that item again (i.e. more than once) you
									will
									be responsible for any forward and return shipping fees.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xxl:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Most Searched Products </h5>
						</div>
						<div className="box-body p-0">
							<ul className="flex flex-col divide-y divide-gray-200 dark:divide-white/10">
								{MostSearchProduct.map((idx)=>(
								<li className="ti-list-group border-0 text-gray-800 dark:text-white" key={Math.random()}>
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product/`} className="w-full">
										<div className="flex space-x-3 rtl:space-x-reverse w-full">
											<img src={idx.prdctSrc} className="avatar avatar-lg rounded-sm border border-gray-200 dark:border-white/10 p-1" alt="product-image" />
											<div className="w-full my-auto">
												<div className="flex">
													<p className=" text-sm mb-0 font-semibold">{idx.title}</p>
													<p className="ltr:ml-auto rtl:mr-auto text-base mb-0 font-semibold text-primary">{idx.newPr}</p>
												</div>
												<div className="flex">
													<p className="mb-0 flex">
														<span className="text-yellow-500 flex"><i className="ri-star-s-fill ltr:mr-1 rtl:ml-1"></i>{idx.rating}</span>
														<span className="text-gray-500 dark:text-white/70 ltr:ml-1 rtl:mr-1">({idx.views})</span>
													</p>
													<span className="text-gray-500 dark:text-white/70 text-sm ltr:ml-auto rtl:mr-auto">{idx.oldPr}</span>
												</div>
											</div>
										</div>
									</Link>
								</li>
								))}
							</ul>
						</div>
						<div className="box-footer">
							<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product/`} className="ti-btn ti-btn-primary py-1 w-full">Shop Now</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="box">
				<div className="grid grid-cols-12 divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-white/10">
					<div className="col-span-12 xl:col-span-3 lg:col-span-6">
						<div className="box mb-0 border-0 shadow-none">
							<div className="box-body">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<svg className="w-[3rem] h-[3rem] my-auto" id="SvgjsSvg1023" xmlns="http://www.w3.org/2000/svg"
										version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" >
										<defs id="SvgjsDefs1024"></defs>
										<g id="SvgjsG1025"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"
											viewBox="0 0 512 512">
											<path
												d="M67.158 205.5h2.347a6 6 0 0 0 0-12h-2.347a6 6 0 0 0 0 12zm43.491-12H92.92a6 6 0 0 0 0 12h17.729a6 6 0 0 0 0-12zm23.795 12h127.085a6 6 0 0 0 0-12H134.444a6 6 0 1 0 0 12zm-67.286-50h2.347a6 6 0 0 0 0-12h-2.347a6 6 0 0 0 0 12zm43.491-12H92.92a6 6 0 0 0 0 12h17.729a6 6 0 0 0 0-12zm23.795 12h127.085a6 6 0 0 0 0-12H134.444a6 6 0 1 0 0 12zm-67.286-50h2.347a6 6 0 0 0 0-12h-2.347a6 6 0 0 0 0 12zm43.491-12H92.92a6 6 0 0 0 0 12h17.729a6 6 0 0 0 0-12zm23.795 12h127.085a6 6 0 0 0 0-12H134.444a6 6 0 0 0 0 12zm-67.286 150h2.347a6 6 0 0 0 0-12h-2.347a6 6 0 0 0 0 12zm43.491-12H92.92a6 6 0 0 0 0 12h17.729a6 6 0 0 0 0-12zm100.88 0h-77.085a6 6 0 1 0 0 12h77.085a6 6 0 0 0 0-12zM208.6 344.212h-12.822a6 6 0 0 0 0 12H208.6a6 6 0 0 0 0-12zm-34.072 0h-44.5a6 6 0 1 0 0 12h44.5a6 6 0 1 0 0-12z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path
												d="m466.126 325.3-.015-.1a15.948 15.948 0 0 0-15.832-13.54h-57.7l-4.763-34.168-.014-.1a17.869 17.869 0 0 0-17.737-15.17h-13v-12.181a45.478 45.478 0 0 0-55.465-44.4V172.59h68.331a6 6 0 0 0 6-6V68.666A43.217 43.217 0 0 0 334.8 25.552V25.5H75.761a48.722 48.722 0 0 0-48.667 48.667V419.5a6 6 0 0 0 9.748 4.686l29.07-23.253 29.069 23.253a6 6 0 0 0 7.5 0l29.065-23.251 29.063 23.251a6 6 0 0 0 7.5 0l29.064-23.251 18.815 15.052-3.018 21.654a6.043 6.043 0 0 0-.058.828 29.942 29.942 0 0 0 29.908 29.908h75.927a26.1 26.1 0 0 0 24.809 18.123h115.3a26.081 26.081 0 0 0 26.052-26.052 6.042 6.042 0 0 0-.057-.828Zm-121.067-75.259v12.174h-67.018v-12.174a33.509 33.509 0 0 1 67.018 0Zm18.866-181.375v91.924h-62.331V68.666a31.166 31.166 0 1 1 62.331 0Zm-163.01 319.9a6 6 0 0 0-7.5 0l-29.065 23.251-29.063-23.251a6 6 0 0 0-7.5 0l-29.058 23.25-29.069-23.252a6 6 0 0 0-7.5 0l-23.07 18.454V74.167A36.709 36.709 0 0 1 75.761 37.5h227.178a43.036 43.036 0 0 0-13.345 31.166V210.2a45.537 45.537 0 0 0-23.553 39.846v12.174h-13a17.869 17.869 0 0 0-17.737 15.17l-.015.1-17.38 124.67Zm24 50.29 22.253-159.65a5.926 5.926 0 0 1 5.875-4.99h13v20.076a6 6 0 0 0 12 0v-20.077h67.018v20.076a6 6 0 0 0 12 0v-20.076h13a5.926 5.926 0 0 1 5.875 4.989l4.523 32.451h-28.328A15.948 15.948 0 0 0 336.3 325.2l-.015.1-18.27 131.078h-75.2a17.928 17.928 0 0 1-17.905-17.523ZM458.854 474.5h-115.3a14.069 14.069 0 0 1-14.047-13.672l18.653-133.811a4.006 4.006 0 0 1 3.971-3.362h98.148a4.006 4.006 0 0 1 3.971 3.362l18.65 133.811a14.069 14.069 0 0 1-14.046 13.672Z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path
												d="M434.342 335.6a6 6 0 0 0-6 6v19.182a27.137 27.137 0 0 1-54.274 0V341.6a6 6 0 0 0-12 0v19.182a39.137 39.137 0 0 0 78.274 0V341.6a6 6 0 0 0-6-6zM102 310.021h.065a6 6 0 0 0 .064-12l-28.294-.3L62.5 297.6h-.065a6 6 0 0 0-.064 12l11.341.122a11 11 0 0 1 9.161 5.105l-20.556-.22h-.065a6 6 0 0 0-.063 12l20.566.221a11 11 0 0 1-9.278 4.907l-11.342-.122h-.065a6 6 0 0 0-4.17 10.31l28.059 27.091a6 6 0 0 0 8.335-8.633l-17.479-16.874a22.972 22.972 0 0 0 18.906-16.546l6.1.065h.066a6 6 0 0 0 .063-12l-6.087-.065a22.817 22.817 0 0 0-1.957-5.028z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
										</svg></g>
									</svg>
									<div>
										<span className="block text-sm font-semibold dark:text-white max-w-[200px] truncate">Secured
											Payments</span>
										<span className="block text-xs text-gray-600 dark:text-white/70">Make Payments easily and
											securily</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-12 xl:col-span-3 lg:col-span-6">
						<div className="box mb-0 border-0 shadow-none">
							<div className="box-body">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<svg className="w-[3rem] h-[3rem] my-auto" id="SvgjsSvg1014" xmlns="http://www.w3.org/2000/svg"
										version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" >
										<defs id="SvgjsDefs1015"></defs>
										<g id="SvgjsG1016"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"
											viewBox="0 0 128 128">
											<path
												d="M53.91024 99.66314L36.999 122.13726l-.14745-12.93677a1.94223 1.94223 0 0 0-.75973-1.51221 2.03942 2.03942 0 0 0-1.67961-.37329l-14.68137 3.23444L33.98545 94.5136A25.4139 25.4139 0 0 1 32.69925 90L14.69479 110.25543a2.90162 2.90162 0 0 0-.31053 3.31372 3.009 3.009 0 0 0 2.995 1.49689 1.84633 1.84633 0 0 0 .19335-.03247L32.879 111.6607l.15527 13.50671a2.93332 2.93332 0 0 0 2.06735 2.68268 3.03615 3.03615 0 0 0 3.33-1.02057l18.32513-24.35065A18.70661 18.70661 0 0 1 53.91024 99.66314zM102.49034 102.58l-3.26762-.00427H97.18863l7.08825 7.97375L89.5946 107.315a2.032 2.032 0 0 0-1.67968.37329 1.94223 1.94223 0 0 0-.75973 1.51221l-.14648 12.9339L70.51187 100.21368a15.30967 15.30967 0 0 1-2.93408 2.69885l18.04908 23.98A3.005 3.005 0 0 0 87.95984 128a3.08023 3.08023 0 0 0 .94338-.14893 2.954 2.954 0 0 0 2.0712-2.7428l.15331-13.44659 15.30634 3.37189a1.84632 1.84632 0 0 0 .19335.03247 3.00161 3.00161 0 0 0 2.996-1.49786 2.9181 2.9181 0 0 0-.34862-3.35571zM62.00229 20.99969A28.99954 28.99954 0 1 0 91.001 50.00024 29.03275 29.03275 0 0 0 62.00229 20.99969zm0 53.99915A24.9996 24.9996 0 1 1 87.0012 50.00024 25.02721 25.02721 0 0 1 62.00229 74.99883z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path
												d="M75.281,45.18585l-7.95083-1.12109-3.54477-6.97156a2.00038,2.00038,0,0,0-3.56625,0L56.6744,44.06475l-7.95083,1.12109a2.00012,2.00012,0,0,0-1.09468,3.43353l5.71655,5.40912-1.34662,7.62292a2.00024,2.00024,0,0,0,2.87878,2.12885l7.12469-3.63568L69.127,63.78027a2.00024,2.00024,0,0,0,2.87878-2.12885L70.65914,54.0285l5.71655-5.40912A2.00012,2.00012,0,0,0,75.281,45.18585Zm-8.153,6.67664a1.99759,1.99759,0,0,0-.59568,1.80078l.8359,4.72943-4.45684-2.27441a1.9986,1.9986,0,0,0-1.81828,0l-4.45684,2.27441.8359-4.72943a1.99759,1.99759,0,0,0-.59568-1.80078l-3.48325-3.29584,4.87088-.68652A1.99977,1.99977,0,0,0,59.768,46.806l2.23428-4.39447L64.23657,46.806a1.99977,1.99977,0,0,0,1.50384,1.07416l4.87088.68652Z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path
												d="M72.16884,91.71636c.753-.17682,2.4272.59741,3.8329,1.29138V88.59948a7.799,7.799,0,0,0-4.74107-.77954c-2.2792.53223-3.91292,2.71869-5.49292,4.83392-.99214,1.32806-2.49208,3.33588-3.29087,3.34467H62.473c-.791,0-2.38466-2.042-3.33677-3.26263-1.62786-2.08594-3.31138-4.2431-5.61011-4.73041a4.84557,4.84557,0,0,0-1.01363-.10352c-1.953,0-3.9969,1.06934-5.98314,2.10931-1.50482.78906-3.783,1.97852-4.53691,1.62988-.6572-.30176-1.17475-2.7724-1.48431-4.249-.54685-2.60834-1.11226-5.30652-3.01354-6.75867-1.88761-1.44238-4.67948-1.32812-7.3864-1.2168-1.45111.06152-4.15509.1709-4.62187-.38672-.4951-.5957.15234-3.10736.54-4.60931.65232-2.52826,1.32611-5.14343.29-7.20593-1.04976-2.079-3.59457-3.15521-6.05638-4.19525-1.3476-.56927-3.8553-1.62982-4.0301-2.34467-.17284-.71191,1.57415-2.76166,2.51259-3.86224,1.71868-2.01752,3.49594-4.10345,3.4725-6.42957-.02637-2.31055-1.84172-4.3515-3.59848-6.32611-.96675-1.08588-2.76648-3.10931-2.60633-3.83588.15527-.69922,2.62489-1.79974,3.952-2.39056,2.45009-1.0918,4.98416-2.2207,5.99974-4.33295.9941-2.06244.2705-4.65326-.42869-7.15906-.4199-1.502-1.122-4.01654-.625-4.64056.51951-.65039,3.21666-.59277,4.82889-.55469,2.63465.05957,5.35035.11719,7.12664-1.30078,1.85051-1.47552,2.35927-4.16589,2.85144-6.76746.28319-1.49408.75583-3.996,1.4267-4.31927.73044-.35352,3.10924.832,4.53008,1.542,2.36806,1.18262,4.81131,2.40424,7.07391,1.87885,2.27724-.53119,3.91-2.71674,5.49-4.83093C59.228,6.01653,60.72891,4.00781,61.52966,4h.00488c.791,0,2.38369,2.041,3.33579,3.26263,1.62688,2.0849,3.30943,4.24213,5.60815,4.73035,2.2626.48047,4.66581-.7851,6.99872-2.00775,1.50482-.78809,3.77327-1.97357,4.533-1.63184.65915.30371,1.17671,2.77637,1.48724,4.25385.54685,2.60742,1.11128,5.30463,3.01354,6.75873,1.88664,1.43939,4.67753,1.32025,7.38249,1.21381,1.45306-.0625,4.15509-.17187,4.62285.3877.497.59473-.15136,3.10834-.53806,4.60931-.65232,2.52826-1.32611,5.14349-.289,7.204,1.04878,2.0791,3.59457,3.15619,6.05735,4.1972,1.34662.56934,3.85432,1.62988,4.02814,2.34271.17284.71094-1.57415,2.76172-2.51259,3.86224-1.71868,2.01758-3.49594,4.10345-3.47153,6.4267.02539,2.31342,1.84269,4.35638,3.59945,6.33093.96578,1.08594,2.76453,3.10736,2.6034,3.83392-.15429.70117-2.62586,1.80273-3.95393,2.39355-.30919.13782-.6196.27631-.92824.41724.26714.09418.53367.19092.79379.30743a10.03377,10.03377,0,0,1,3.22252,2.26093c2.25094-1.06488,4.28613-2.31586,4.77195-4.51489.60251-2.72162-1.49408-5.07806-3.52133-7.35632-1.08882-1.22363-2.579-2.89935-2.58778-3.71576-.00879-.82617,1.45013-2.538,2.51649-3.789,1.97159-2.31348,4.00959-4.706,3.35435-7.4032-.65036-2.668-3.5516-3.89447-6.35714-5.081-1.5429-.65234-3.65609-1.5459-4.04377-2.31244-.36034-.7168.18944-2.84863.59079-4.40521.72555-2.8125,1.54681-5.99994-.26268-8.17078-1.72942-2.07422-4.84647-1.94531-7.86-1.82227-1.71282.07031-4.05256.166-4.78885-.39551-.72067-.55072-1.18745-2.77631-1.52825-4.40125C86.801,8.87585,86.17019,5.86614,83.682,4.71966c-2.54383-1.166-5.34742.30078-8.0602,1.72168-1.46576.76758-3.47348,1.81927-4.31231,1.63959-.873-.18549-2.26748-1.97357-3.286-3.27924C66.17106,2.42675,64.261-.01264,61.48864.00006c-2.78015.0293-4.64921,2.53119-6.45773,4.952-.98629,1.32031-2.33779,3.12885-3.19322,3.329-.85153.19336-2.89148-.82025-4.37969-1.56244-2.73035-1.36328-5.55445-2.77338-8.05531-1.56543-2.48622,1.2002-3.06139,4.2392-3.617,7.17859-.30663,1.61816-.72555,3.83295-1.41693,4.38373-.6445.51465-2.89831.46484-4.54375.42871-3.08971-.06738-6.28976-.13867-8.04359,2.05957-1.77336,2.2226-.88473,5.40417-.10058,8.21082.40526,1.45013,1.01753,3.64252.67673,4.34851-.37987.79-2.48524,1.72852-4.02326,2.41309-2.77136,1.23529-5.63745,2.51166-6.22922,5.17957-.60251,2.72363,1.49505,5.081,3.52328,7.36029,1.08784,1.2226,2.578,2.8974,2.5868,3.7099.00879.82806-1.45111,2.541-2.51747,3.79193-1.97159,2.31342-4.00959,4.70593-3.35435,7.4032.65134,2.66986,3.55356,3.89642,6.36007,5.08289,1.54192.65137,3.65414,1.54492,4.04084,2.31055.36034.7168-.18944,2.85052-.59079,4.40717-.72555,2.81146-1.54778,5.9989.26171,8.17078,1.73137,2.0722,4.84744,1.9433,7.85806,1.82123,1.70989-.07031,4.05353-.168,4.79276.39844.72067.5498,1.18647,2.77533,1.52728,4.40033.61032,2.9101,1.24018,5.91882,3.72738,7.06238,2.54383,1.1748,5.34938-.29785,8.0641-1.71967,1.46283-.7666,3.4686-1.81836,4.31134-1.6377.872.18555,2.26748,1.97357,3.287,3.27924,1.84172,2.36133,3.74691,4.8017,6.489,4.8017h.04687c2.7782-.03027,4.64628-2.53217,6.45382-4.95111C69.96,93.72613,71.31244,91.91558,72.16884,91.71636Z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path
												d="M115.22324,84.58056a5.60744,5.60744,0,0,0-5.074-8.44965l-3.52652-.00287a7.5752,7.5752,0,0,0,.11071-1.69342c-.18871-1.71136-.68619-6.22174-4.44542-7.88336a6.18128,6.18128,0,0,0-2.53151-.55225q-.144,0-.28783.0072a6.004,6.004,0,0,0-3.442,1.33276,6.53012,6.53012,0,0,0-2.20645,5.81995c.00738.14569.01648.29059.01648.432v.49341c-.52274,1.06165-2.03049,3.42163-2.562,4.25336l-.02673.04193c-.30815.09192-.659.19452-1.01967.29883a3.97691,3.97691,0,0,0-2.2272-.67963H84.00133a4.00382,4.00382,0,0,0-3.99983,3.99994V93.99853a4.00382,4.00382,0,0,0,3.99983,3.99994h3.99983a3.96114,3.96114,0,0,0,2.53383-.93054c.073.0011.14227.00488.21728.00488.35143,0,.76925-.01251,1.18879-.02594.20336-.00647.40733-.01331.59989-.01764a6.76032,6.76032,0,0,0,1.83159.82379,4.0015,4.0015,0,0,0,1.03108.137l12.00314.0033a5.80986,5.80986,0,0,0,5.84874-5.75677c0-.03119-.00024-.06207-.00073-.09308a5.67142,5.67142,0,0,0,1.14607-3.42084c0-.16193-.00714-.32074-.02057-.47583a5.654,5.654,0,0,0,.88192-3.03613A5.111,5.111,0,0,0,115.22324,84.58056Zm-27.22208,9.418H84.00133V81.99877h3.99983Zm22.14808-10.5246s1.11311.85413,1.11311,1.73669a1.80642,1.80642,0,0,1-1.85295,1.75671,2.74184,2.74184,0,0,1,.9916,1.75525,1.80538,1.80538,0,0,1-1.84758,1.759,3.06474,3.06474,0,0,1,.70224,1.75488,1.80328,1.80328,0,0,1-1.84892,1.75684L95.41026,93.99c-.6445-.1731-1.11976-.68451-1.7368-.90259a2.998,2.998,0,0,0-.78134-.06262c-.26793,0-.57761.00885-.89114.01862V82.32818a14.83735,14.83735,0,0,0,1.888-.6192c.23766-.50226,3.94758-5.93549,3.94758-7.00708v-1.111c0-1.0957-.3001-2.33557.67539-3.11786a2.03882,2.03882,0,0,1,1.15675-.47192q.04394-.0022.08783-.0022a2.26188,2.26188,0,0,1,.91451.21082c1.57232.69495,1.92612,3.20734,2.08524,4.65a23.82308,23.82308,0,0,1-1.28968,5.264l8.68267.00714a1.66944,1.66944,0,0,1,1.85093,1.585A1.8057,1.8057,0,0,1,110.14924,83.47393Z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
										</svg></g>
									</svg>
									<div>
										<span className="block text-sm font-semibold dark:text-white max-w-[200px] truncate">High Quality
											Products</span>
										<span className="block text-xs text-gray-600 dark:text-white/70">Product is Made with Atmost
											Care</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-12 xl:col-span-3 lg:col-span-6">
						<div className="box mb-0 border-0 shadow-none">
							<div className="box-body">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<svg className="w-[3rem] h-[3rem] my-auto" id="SvgjsSvg1012" xmlns="http://www.w3.org/2000/svg"
										version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" >
										<defs id="SvgjsDefs1013"></defs>
										<g id="SvgjsG1014"><svg xmlns="http://www.w3.org/2000/svg" id="svg6485" version="1.1"
											viewBox="0 0 32 32">
											<g id="layer1" transform="translate(0 -1020.362)" fill="#6366f1"
												className="color000 svgShape !fill-primary">
												<path style={{ lineHeight: "normal", textIndent: "0", textAlign: "start", textDecorationline: "none", textDecorationStyle: "solid", textDecorationColor: "#000", textTransform: "none", isolation: "auto", mixBlendmode: "normal" }}
													id="path12487" fill="#6366f1" fillOpacity="1" fillRule="nonzero" stroke="none"
													strokeDasharray="none" strokeDashoffset="0"
													strokeLinecap="round" strokeMiterlimit="4" strokeOpacity="1" strokeWidth="1"
													d="M4.975 1027.362c-1.1 0-2 .9-2 2v7.5a.5.5 0 1 0 1 0v-7.5c0-.563.437-1 1-1h15c.563 0 1 .437 1 1v10c0 .563-.437 1-1 1h-6.5a.5.5 0 1 0 0 1h6.5c1.1 0 2-.9 2-2v-8h4.19c.417 0 .634.123.841.33.164.164.302.406.434.67h-3.932a.5.5 0 1 0 0 1H24v3.66c0 .735.608 1.34 1.342 1.34H30v1.5h-.8a.5.5 0 1 0 0 1h.8v.5c0 .563-.437 1-1 1h-2a2.758 2.758 0 0 0-2.75-2.75 2.758 2.758 0 0 0-2.75 2.75h-9a2.758 2.758 0 0 0-2.75-2.75 2.758 2.758 0 0 0-2.75 2.75H4.5a.488.488 0 0 1-.5-.5v-.5h1.493a.5.5 0 1 0 0-1H1.5a.5.5 0 1 0 0 1H3v.5c0 .823.678 1.5 1.5 1.5h2.696a2.757 2.757 0 0 0 2.554 1.75c1.16 0 2.152-.73 2.555-1.75h9.39a2.757 2.757 0 0 0 2.555 1.75c1.16 0 2.152-.73 2.555-1.75H29c1.1 0 2-.9 2-2v-.922a.5.5 0 0 0 0-.16v-2.418a.5.5 0 0 0-.045-.205l-2.5-5.502c-.172-.38-.382-.81-.742-1.17a2.165 2.165 0 0 0-1.549-.623h-4.189v-1c0-1.1-.9-2-2-2h-15zm10.502 4.084a.5.5 0 0 0-.344.15l-3.656 3.622-1.656-1.658a.5.5 0 1 0-.71.707l2.01 2.01a.5.5 0 0 0 .707 0l4.008-3.971a.5.5 0 0 0-.36-.862zm9.523 1.916h2.907l1.816 4h-4.38a.329.329 0 0 1-.343-.34v-3.66zm-22.55 5a.5.5 0 0 0 .05 1h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 0-.05 0zm7.3 2.25c.973 0 1.75.778 1.75 1.75 0 .973-.777 1.75-1.75 1.75-.972 0-1.75-.777-1.75-1.75 0-.972.778-1.75 1.75-1.75zm14.5 0c.973 0 1.75.778 1.75 1.75 0 .973-.777 1.75-1.75 1.75-.972 0-1.75-.777-1.75-1.75 0-.972.778-1.75 1.75-1.75zm-14.5 1a.75.75 0 0 0-.75.75.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75.75.75 0 0 0-.75-.75zm14.5 0a.75.75 0 0 0-.75.75.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75.75.75 0 0 0-.75-.75z"
													clipRule="nonzero" color="#000" colorInterpolation="sRGB"
													colorRendering="auto"
													display="inline" imageRendering="auto" opacity="1"
													shapeRendering="auto" textRendering="auto"
													visibility="visible"
													className="color000 svgShape !fill-primary">
												</path>
											</g>
										</svg></g>
									</svg>
									<div>
										<span className="block text-sm font-semibold dark:text-white max-w-[200px] truncate">Free
											Delivery</span>
										<span className="block text-xs text-gray-600 dark:text-white/70">100% free charges on Every
											Delivery</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-12 xl:col-span-3 lg:col-span-6">
						<div className="box mb-0 border-0 shadow-none">
							<div className="box-body">
								<div className="flex space-x-3 rtl:space-x-reverse">
									<svg className="w-[3rem] h-[3rem] my-auto" id="SvgjsSvg1021" xmlns="http://www.w3.org/2000/svg" version="1.1"
										xmlnsXlink="http://www.w3.org/1999/xlink" >
										<defs id="SvgjsDefs1022"></defs>
										<g id="SvgjsG1023"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
											<path
												d="M32 61.5c-13.239 0-24.788-8.942-28.086-21.747a1.001 1.001 0 0 1 .72-1.218c.53-.134 1.08.185 1.218.72C8.921 51.175 19.674 59.5 32 59.5c14.888 0 27-12.112 27-27a1 1 0 1 1 2 0c0 15.99-13.01 29-29 29zm-28-29a1 1 0 0 1-1-1c0-15.99 13.01-29 29-29 13.239 0 24.788 8.942 28.086 21.747a1.001 1.001 0 0 1-1.938.498C55.079 12.825 44.326 4.5 32 4.5c-14.888 0-27 12.112-27 27a1 1 0 0 1-1 1z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path
												d="M4 32.5a.997.997 0 0 1-.707-.293l-3-3a.999.999 0 1 1 1.414-1.414l3 3A.999.999 0 0 1 4 32.5z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path
												d="M4 32.5a.999.999 0 0 1-.707-1.707l3-3a.999.999 0 1 1 1.414 1.414l-3 3A.997.997 0 0 1 4 32.5zm59 3a.997.997 0 0 1-.707-.293l-3-3a.999.999 0 1 1 1.414-1.414l3 3A.999.999 0 0 1 63 35.5z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path
												d="M57 35.5a.999.999 0 0 1-.707-1.707l3-3a.999.999 0 1 1 1.414 1.414l-3 3A.997.997 0 0 1 57 35.5zM13.998 54.945a1 1 0 0 1-1-1V28.49a1 1 0 1 1 2 0v25.455a1 1 0 0 1-1 1zm36.004.002a1 1 0 0 1-1-1V28.49a1 1 0 1 1 2 0v25.457a1 1 0 0 1-1 1z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path d="M50.002 29.49H13.998a1 1 0 1 1 0-2h36.004a1 1 0 1 1 0 2z" fill="#6366f1"
												className="color000 svgShape !fill-primary"></path>
											<path
												d="M13.997 29.49a1 1 0 0 1-.857-1.515l3-5.002a1 1 0 0 1 1.715 1.029l-3 5.002a.997.997 0 0 1-.858.486zm36.006 0a.998.998 0 0 1-.858-.485l-3-5.002a1 1 0 1 1 1.715-1.029l3 5.002a1 1 0 0 1-.857 1.514z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path d="M47.002 24.488H16.998a1 1 0 1 1 0-2h30.004a1 1 0 1 1 0 2z" fill="#6366f1"
												className="color000 svgShape !fill-primary"></path>
											<path
												d="M27.999 29.49a1 1 0 0 1-.981-1.197l1-5.002a.993.993 0 0 1 1.177-.784 1 1 0 0 1 .784 1.177l-1 5.002a1 1 0 0 1-.98.804zm8 0a.998.998 0 0 1-.979-.804l-1-5.002a1 1 0 0 1 1.961-.393l1 5.002a1 1 0 0 1-.982 1.197z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path
												d="M27.998 35.49a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1zm8.002 0a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path
												d="M36.001 35.49c-.08 0-.162-.01-.243-.03l-4-1a1 1 0 0 1 .484-1.94l4 1a1 1 0 0 1-.241 1.97z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
											<path
												d="M27.997 35.49a1 1 0 0 1-.241-1.97l4.002-1a.997.997 0 0 1 1.212.728.998.998 0 0 1-.728 1.212l-4.002 1c-.081.02-.163.03-.243.03zm13.007 12.002H22.996a1 1 0 1 1 0-2h18.008a1 1 0 1 1 0 2zm0-3.992H22.996a1 1 0 1 1 0-2h18.008a1 1 0 1 1 0 2zm-5.002 7.994h-8.004a1 1 0 1 1 0-2h8.004a1 1 0 1 1 0 2z"
												fill="#6366f1" className="color000 svgShape !fill-primary"></path>
										</svg></g>
									</svg>
									<div>
										<span className="block text-sm font-semibold dark:text-white max-w-[200px] truncate">Free
											Returns</span>
										<span className="block text-xs text-gray-600 dark:text-white/70">Cash Back offers on every
											purchase</span>
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
export default Productdetails;
