import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

import { Autoplay, Pagination, Navigation, Scrollbar, EffectCards, Zoom, EffectFade, FreeMode, EffectCoverflow, EffectFlip, EffectCube } from "swiper/modules";


const Carousel = () => {
	return (
		<div>
			<PageHeader currentpage="Carousel" activepage="Advanced UI" mainpage="Carousel" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Swiper Slide</h5>
						</div>
						<div className="box-body">
							<Swiper className="Swiperslide-1" modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }}>
								<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Navigation Swiper Slide</h5>
						</div>
						<div className="box-body">

							<Swiper className="mySwiper1" modules={[Autoplay, Navigation]} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false }}>
								<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Pagination Swiper Slide</h5>
						</div>
						<div className="box-body">
							<Swiper className="mySwiper-page" modules={[Autoplay, Pagination,]} pagination={{ clickable: true }} autoplay={{ delay: 2500, disableOnInteraction: false }}>
								<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Pagination Progress Swiper Slide</h5>
						</div>
						<div className="box-body">
							<Swiper className="mySwiper3" modules={[Autoplay, Pagination, Navigation]} navigation={true} pagination={{ type: "progressbar" }} autoplay={{ delay: 2500, disableOnInteraction: false }}>
								<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Scrollbar Swiper Slide</h5>
						</div>
						<div className="box-body">
							<Swiper className="mySwiper4" modules={[Autoplay, Scrollbar]} scrollbar={{ hide: true }} autoplay={{ delay: 2500, disableOnInteraction: false }}>
								<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Vertical Swiper Slide</h5>
						</div>
						<div className="box-body">
							<Swiper className="mySwiper5 !h-[312px]" direction={"vertical"} pagination={{ clickable: true }} modules={[Autoplay, Pagination]} autoplay={{ delay: 2500, disableOnInteraction: false }}>
								<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Effect Cards Swiper Slide</h5>
						</div>
						<div className="box-body">
							<div className="w-10/12 sm:w-8/12 mx-auto">
								<Swiper effect={"cards"} grabCursor={true} modules={[EffectCards, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper">
									<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Zoom Swiper Slide</h5>
						</div>
						<div className="box-body">
							<div className="w-10/12 sm:w-8/12 mx-auto">
								<Swiper style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff", }} zoom={true} navigation={true} pagination={{ clickable: true }} modules={[Zoom, Navigation, Pagination]} className="mySwiper13" >
									<SwiperSlide><div className="swiper-zoom-container"><img className="swiper-zoom-container" src={ALLImages('jpg10')} alt="image" /></div></SwiperSlide>
									<SwiperSlide><div className="swiper-zoom-container"><img className="swiper-zoom-container" src={ALLImages('jpg11')} alt="image" /></div></SwiperSlide>
									<SwiperSlide><div className="swiper-zoom-container"><img className="swiper-zoom-container" src={ALLImages('jpg12')} alt="image" /></div></SwiperSlide>
									<SwiperSlide><div className="swiper-zoom-container"><img className="swiper-zoom-container" src={ALLImages('jpg13')} alt="image" /></div></SwiperSlide>
									<SwiperSlide><div className="swiper-zoom-container"><img className="swiper-zoom-container" src={ALLImages('jpg14')} alt="image" /></div></SwiperSlide>
									<SwiperSlide><div className="swiper-zoom-container"><img className="swiper-zoom-container" src={ALLImages('jpg15')} alt="image" /></div></SwiperSlide>
									<SwiperSlide><div className="swiper-zoom-container"><img className="swiper-zoom-container" src={ALLImages('jpg16')} alt="image" /></div></SwiperSlide>
									<SwiperSlide><div className="swiper-zoom-container"><img className="swiper-zoom-container" src={ALLImages('jpg17')} alt="image" /></div></SwiperSlide>
									<SwiperSlide><div className="swiper-zoom-container"><img className="swiper-zoom-container" src={ALLImages('jpg18')} alt="image" /></div></SwiperSlide>
									<SwiperSlide><div className="swiper-zoom-container"><img className="swiper-zoom-container" src={ALLImages('jpg19')} alt="image" /></div></SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Effect Fade Swiper Slide</h5>
						</div>
						<div className="box-body">
							<div className="w-10/12 sm:w-8/12 mx-auto">
								<Swiper style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff", }} spaceBetween={30} effect={"fade"} navigation={true} pagination={{ clickable: true, }} modules={[EffectFade, Navigation, Pagination]} className="mySwiper8">
									<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
									<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Free Mode Swiper Slide</h5>
						</div>
						<div className="box-body">
							<Swiper effect={"cube"} cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94, }} grabCursor={true} pagination={{ clickable: true, }} modules={[EffectCube, Pagination]} className="mySwiper9">
								<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Effect Coverflow Swiper Slide</h5>
						</div>
						<div className="box-body">
							<Swiper effect={"coverflow"} grabCursor={true} centeredSlides={true} slidesPerView={"auto"} coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }} pagination={{clickable: true}} modules={[EffectCoverflow, Pagination]} className="mySwiper10" >
								<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Effect Flip Swiper Slide</h5>
						</div>
						<div className="box-body">
							<Swiper  effect={"flip"} grabCursor={true} pagination={{clickable: true}} navigation={true} modules={[EffectFlip, Pagination, Navigation]} className="mySwiper11" >
								<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Space Between Swiper Slide</h5>
						</div>
						<div className="box-body">
							<Swiper  pagination={{ clickable: true,}} className="mySwiper6"
							breakpoints={{
								320: {
									slidesPerView: 2,
									spaceBetween: 30
								  },
								  480: {
									slidesPerView: 3,
									spaceBetween: 30
								  },
								640: {
								  slidesPerView: 2,
								  spaceBetween: 20,
								},
								768: {
								  slidesPerView: 4,
								  spaceBetween: 40,
								},
								1024: {
								  slidesPerView: 4,
								  spaceBetween: 50,
								},
							  }}>
								<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Free Mode Swiper Slide</h5>
						</div>
						<div className="box-body">
							<Swiper breakpoints={{
								320: {
									slidesPerView: 2,
									spaceBetween: 30
								  },
								  480: {
									slidesPerView: 3,
									spaceBetween: 30
								  },
								640: {
								  slidesPerView: 2,
								  spaceBetween: 20,
								},
								768: {
								  slidesPerView: 4,
								  spaceBetween: 40,
								},
								1024: {
								  slidesPerView: 4,
								  spaceBetween: 50,
								},
							  }} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode, Pagination]} className="mySwiper7">
								<SwiperSlide><img src={ALLImages('jpg10')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg11')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg12')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg13')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg14')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg15')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg16')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg17')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg18')} alt="image" /></SwiperSlide>
								<SwiperSlide><img src={ALLImages('jpg19')} alt="image" /></SwiperSlide>
							</Swiper>
								
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Carousel;
