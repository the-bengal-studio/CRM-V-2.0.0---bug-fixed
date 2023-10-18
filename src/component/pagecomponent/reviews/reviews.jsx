import React from "react";
import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Reviews = () => {
	return (
		<div>
			<PageHeader currentpage="Reviews" activepage="Pages" mainpage="Reviews" />
			<div className="container mx-auto">

				<h2 className="text-xl text-center font-semibold mb-6"> Our Clients Reviews </h2>

				<div className="grid sm:grid-cols-2 lg:!grid-cols-3 gap-x-6">
					<div className="box">
						<div className="box-body">
							<div className="flex space-x-1 rtl:space-x-reverse">
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
							</div>
							<p className="mb-6">
								Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie
								90's microdosing. Tacos pinterest fanny pack venmo.
							</p>
							<a className="flex my-auto">
								<img alt="testimonial" src={ALLImages('jpg58')} className="avatar avatar-sm !rounded-full" />
								<div className="ltr:pl-4 rtl:pr-4 my-auto">
									<p className="font-medium text-base leading-none">Socrates Itumay</p>
									<span className="dark:text-white/70 text-gray-500 text-xs">UI DEVELOPER</span>
								</div>
							</a>
						</div>
					</div>
					<div className="box">
						<div className="box-body">
							<div className="flex space-x-1 rtl:space-x-reverse">
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
							</div>
							<p className="mb-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel ut impedit. Sapiente id libero
								reprehenderit accusantium nisi. Dolorum hic voluptas quia id.
							</p>
							<a className="flex my-auto ">
								<img alt="testimonial" src={ALLImages('jpg68')} className="avatar avatar-sm !rounded-full" />
								<div className="ltr:pl-4 rtl:pr-4 my-auto">
									<p className="font-medium text-base leading-none">Eos Tempor</p>
									<span className="dark:text-white/70 text-gray-500 text-xs">UI DEVELOPER</span>
								</div>
							</a>
						</div>
					</div>
					<div className="box">
						<div className="box-body">
							<div className="flex space-x-1 rtl:space-x-reverse">
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
							</div>
							<p className="mb-6">
								There are many variations of passages of Lorem Ipsum available, but the majority have suffered by
								injected humour, or randomised words which don't look even slightly believable.
							</p>
							<a className="flex my-auto ">
								<img alt="testimonial" src={ALLImages('jpg59')} className="avatar avatar-sm !rounded-full" />
								<div className="ltr:pl-4 rtl:pr-4 my-auto">
									<p className="font-medium text-base leading-none">Airi Satou</p>
									<span className="dark:text-white/70 text-gray-500 text-xs">UI DEVELOPER</span>
								</div>
							</a>
						</div>
					</div>
					<div className="box">
						<div className="box-body">
							<div className="flex space-x-1 rtl:space-x-reverse">
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
							</div>
							<p className="mb-6">
								All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the
								years, sometimes by accident, sometimes on purpose (injected humour and the like).
							</p>
							<a className="flex my-auto ">
								<img alt="testimonial" src={ALLImages('jpg69')} className="avatar avatar-sm !rounded-full" />
								<div className="ltr:pl-4 rtl:pr-4 my-auto">
									<p className="font-medium text-base leading-none">Mc Greggor</p>
									<span className="dark:text-white/70 text-gray-500 text-xs">UI DEVELOPER</span>
								</div>
							</a>
						</div>
					</div>
					<div className="box">
						<div className="box-body">
							<div className="flex space-x-1 rtl:space-x-reverse">
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
							</div>
							<p className="mb-6">
								If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum
								generators on the Internet tend to repeat Various versions have evolved over the years, .
							</p>
							<a className="flex my-auto ">
								<img alt="testimonial" src={ALLImages('jpg61')} className="avatar avatar-sm !rounded-full" />
								<div className="ltr:pl-4 rtl:pr-4 my-auto">
									<p className="font-medium text-base leading-none">Samantha Paul</p>
									<span className="dark:text-white/70 text-gray-500 text-xs">UI DEVELOPER</span>
								</div>
							</a>
						</div>
					</div>
					<div className="box">
						<div className="box-body">
							<div className="flex space-x-1 rtl:space-x-reverse">
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
								<div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
							</div>
							<p className="mb-6">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestias, officia, inventore incidunt
								aliquid amet nihil exercitationem, modi possimus voluptate molestiae explicabo assumenda.
							</p>
							<a className="flex my-auto ">
								<img alt="testimonial" src={ALLImages('jpg71')} className="avatar avatar-sm !rounded-full" />
								<div className="ltr:pl-4 rtl:pr-4 my-auto">
									<p className="font-medium text-base leading-none">Pope Johnson</p>
									<span className="dark:text-white/70 text-gray-500 text-xs">UI DEVELOPER</span>
								</div>
							</a>
						</div>
					</div>
				</div>


				<h2 className="text-xl text-center font-semibold my-6">What Our Clients Say </h2>

				<div className="box !bg-transparent border-0 shadow-none">
					<div className="box-body px-0">
						<Swiper breakpoints={{
							320: {
								slidesPerView: 1,
								spaceBetween: 30
							},
							480: {
								slidesPerView: 2,
								spaceBetween: 30
							},
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 40,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 50,
							},
						}} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]} className="mySwiper swipe2">
							<SwiperSlide className="swiper-slide !text-sm !bg-transparent">
								<div className="box mb-0 text-start rtl:dir-rtl">
									<div className="box-body">
										<i className="!text-lg text-gray-500 dark:text-white/70 ri ri-double-quotes-l"></i>
										<span>
											Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo.
										</span>
										<i className="!text-lg text-gray-500 dark:text-white/70 ri ri-double-quotes-r"></i>
									</div>
									<div className="box-footer">
										<a className="flex my-auto">
											<img alt="testimonial" src={ALLImages('jpg58')} className="avatar avatar-sm !rounded-full" />
											<div className="ltr:pl-4 rtl:pr-4 my-auto">
												<p className="font-medium text-base leading-none">Socrates Itumay</p>
												<span className="dark:text-white/70 text-gray-500 text-xs">UI DEVELOPER</span>
											</div>
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="!text-sm !bg-transparent">
								<div className="box mb-0 text-start rtl:dir-rtl">
									<div className="box-body">
										<i className="!text-lg text-gray-500 dark:text-white/70 ri ri-double-quotes-l"></i>
										<span>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel ut impedit. Sapiente id libero reprehenderit accusantium nisi. Dolorum hic voluptas quia id.
										</span>
										<i className="!text-lg text-gray-500 dark:text-white/70 ri ri-double-quotes-r"></i>
									</div>
									<div className="box-footer">
										<a className="flex my-auto">
											<img alt="testimonial" src={ALLImages('jpg68')} className="avatar avatar-sm !rounded-full" />
											<div className="ltr:pl-4 rtl:pr-4 my-auto">
												<p className="font-medium text-base leading-none">Eos Tempor</p>
												<span className="dark:text-white/70 text-gray-500 text-xs">UI DEVELOPER</span>
											</div>
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="!text-sm !bg-transparent">
								<div className="box mb-0 text-start rtl:dir-rtl">
									<div className="box-body">
										<i className="!text-lg text-gray-500 dark:text-white/70 ri ri-double-quotes-l"></i>
										<span>
											There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't  even slightly believable.
										</span>
										<i className="!text-lg text-gray-500 dark:text-white/70 ri ri-double-quotes-r"></i>
									</div>
									<div className="box-footer">
										<a className="flex my-auto">
											<img alt="testimonial" src={ALLImages('jpg59')} className="avatar avatar-sm !rounded-full" />
											<div className="ltr:pl-4 rtl:pr-4 my-auto">
												<p className="font-medium text-base leading-none">Airi Satou</p>
												<span className="dark:text-white/70 text-gray-500 text-xs">UI DEVELOPER</span>
											</div>
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="!text-sm !bg-transparent">
								<div className="box mb-0 text-start rtl:dir-rtl">
									<div className="box-body">
										<i className="!text-lg text-gray-500 dark:text-white/70 ri ri-double-quotes-l"></i>
										<span>
											All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
										</span>
										<i className="!text-lg text-gray-500 dark:text-white/70 ri ri-double-quotes-r"></i>
									</div>
									<div className="box-footer">
										<a className="flex my-auto">
											<img alt="testimonial" src={ALLImages('jpg69')} className="avatar avatar-sm !rounded-full" />
											<div className="ltr:pl-4 rtl:pr-4 my-auto">
												<p className="font-medium text-base leading-none">Mc Greggor</p>
												<span className="dark:text-white/70 text-gray-500 text-xs">UI DEVELOPER</span>
											</div>
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="!text-sm !bg-transparent">
								<div className="box mb-0 text-start rtl:dir-rtl">
									<div className="box-body">
										<i className="!text-lg text-gray-500 dark:text-white/70 ri ri-double-quotes-l"></i>
										<span>
											If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem generators on the Internet to repeat Various versions have evolved over the years.
										</span>
										<i className="!text-lg text-gray-500 dark:text-white/70 ri ri-double-quotes-r"></i>
									</div>
									<div className="box-footer">
										<a className="flex my-auto">
											<img alt="testimonial" src={ALLImages('jpg60')} className="avatar avatar-sm !rounded-full" />
											<div className="ltr:pl-4 rtl:pr-4 my-auto">
												<p className="font-medium text-base leading-none">Samantha Paul</p>
												<span className="dark:text-white/70 text-gray-500 text-xs">UI DEVELOPER</span>
											</div>
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="!text-sm !bg-transparent">
								<div className="box mb-0 text-start rtl:dir-rtl">
									<div className="box-body">
										<i className="!text-lg text-gray-500 dark:text-white/70 ri ri-double-quotes-l"></i>
										<span>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestias, inventore incidunt aliquid amet nihil exercitationem, modi possimus molestiae assumenda.
										</span>
										<i className="!text-lg text-gray-500 dark:text-white/70 ri ri-double-quotes-r"></i>
									</div>
									<div className="box-footer">
										<a className="flex my-auto">
											<img alt="testimonial" src={ALLImages('jpg70')} className="avatar avatar-sm !rounded-full" />
											<div className="ltr:pl-4 rtl:pr-4 my-auto">
												<p className="font-medium text-base leading-none">Pope Johnson</p>
												<span className="dark:text-white/70 text-gray-500 text-xs">UI DEVELOPER</span>
											</div>
										</a>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>


			</div>


		</div>
	);
};
export default Reviews;
