import React, { useState } from "react";
import ALLImages from "../../../../common/imagesData";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from 'react-router-dom';
import { MasterData } from "../../../../common/EcommerceData";

const Wishlist = () => {



	const [allData, setAllData] = useState(MasterData)
	const [showContent, setShowContent] = useState(false);
	function handleRemove(id) {
		const newList = allData.filter((idx) => idx.id !== id);
		setAllData(newList);
		if (newList.length === 0) {
			setShowContent(true);
			console.log('it is working')
		}
	}
	return (
		<div>
			<PageHeader currentpage="Wishlist" activepage="Pages" mainpage="Wishlist" />
			<div className={`whishlist-full ${allData.length === 0 ? 'hidden' : ''}`}>
				<div className="grid grid-cols-12 gap-x-6">
					{allData.map((idx) => (
						<div className="col-span-12 md:col-span-6 xl:!col-span-4 xxl:!col-span-3 wishlist-box" key={Math.random()}>
							<div className="box product-box">
								<div className="box-body space-y-3">
									<div className="product-image">
										<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/productdetails/`} className="image"><img className="mx-auto rounded-sm" src={idx.productpicture} alt="img" /> </Link>
										<div className="product-icons">
											<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/cart/`} className="z-40 absolute top-12 ltr:right-2 rtl:left-2 block bg-white dark:bg-bgdark p-2 leading-none rounded-full text-gray-500 dark:text-white text-base">
												<i className="ri ri-shopping-cart-2-line"></i></Link>
											<Link aria-label="anchor" to="#" onClick={() => handleRemove(idx.id)} className="wishlist z-40 absolute top-2 ltr:right-2 rtl:left-2 block bg-white dark:bg-bgdark p-2 leading-none rounded-full text-gray-500 dark:text-white text-base">
												<i className="ri ri-delete-bin-line"></i></Link>
											<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/productdetails/`} className="z-40 absolute top-[5.5rem] ltr:right-2 rtl:left-2 block bg-white dark:bg-bgdark p-2 leading-[0] rounded-full text-gray-500 dark:text-white text-base">
												<i className="ri ri-eye-line leading-none"></i></Link>
										</div>
										<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/productdetails/`} className={`z-40 absolute bottom-2  ltr:left-2 rtl:right-2 block bg-${idx.class} p-1 leading-none rounded-sm text-white text-xs`}>{idx.status}</Link>
									</div>
									<div className="product-details space-y-1">
										<h5 className="text-lg font-semibold">{idx.title}</h5>
										<div className="flex space-x-2 rtl:space-x-reverse">
											<div className="product-rating">
												<i className="ri ri-star-fill text-yellow-500 text-base"></i>
												<i className="ri ri-star-fill text-yellow-500 text-base"></i>
												<i className="ri ri-star-fill text-yellow-500 text-base"></i>
												<i className="ri ri-star-fill text-yellow-500 text-base"></i>
												<i className="ri ri-star-fill text-gray-200 text-base"></i>
											</div>
											<p className=" my-auto text-gray-500  dark:text-white/70 text-sm space-x-2 rtl:space-x-reverse">{idx.rating} ({idx.views} views)</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<nav className="flex justify-end items-center space-x-2 rtl:space-x-reverse mb-5">
					<Link className="w-10 h-10 bg-gray-100 dark:bg-black/20 dark:text-white/70 text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full" to="#">
						<span aria-hidden="true">«</span>
						<span className="sr-only">Previous</span>
					</Link>
					<Link className="w-10 h-10 bg-primary text-white p-2 inline-flex items-center justify-center text-sm font-medium rounded-full" to="#" aria-current="page">1</Link>
					<Link className="w-10 h-10 bg-gray-100 dark:bg-black/20 dark:text-white/70 text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full" to="#">2</Link>
					<Link className="w-10 h-10 bg-gray-100 dark:bg-black/20 dark:text-white/70 text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center items-center text-sm font-medium rounded-full" to="#">3</Link>
					<Link className="w-10 h-10 bg-gray-100 dark:bg-black/20 dark:text-white/70 text-gray-500 hover:bg-primary hover:text-white p-2 inline-flex justify-center text-sm font-medium items-center gap-2 rounded-full" to="#">
						<span className="sr-only">Next</span>
						<span aria-hidden="true">»</span>
					</Link>
				</nav>
			</div>
			{showContent &&
				<div className="grid grid-cols-12 gap-x-6 whishlist-empty max-w-5xl mx-auto my-auto">
					<div className="col-span-12">
						<div className="box">
							<div className="box-body">
								<div className="justify-center text-center">
									<img src={ALLImages('png44')} className="mx-auto w-1/2 h-1/2" alt="img" />
									<h3 className="font-semibold mb-1">Your Whishlist is Empty</h3>
									<h5 className="mb-3">Add Some items to make me happy 😀</h5>
									<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product/`} className="ti-btn ti-btn-primary"><i className="ri ri-arrow-right-line ltr:mr-1 rtl:ml-1"></i>continue shopping </Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	);
};
export default Wishlist;
