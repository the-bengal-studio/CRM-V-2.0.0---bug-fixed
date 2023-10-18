import React, { Fragment, useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Link } from 'react-router-dom';
import ALLImages from '../../../../common/imagesdata';

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import png46 from "../../../../assets/img/files/2.png";
import png47 from "../../../../assets/img/files/3.png";
import png48 from "../../../../assets/img/files/4.png";
import png49 from "../../../../assets/img/files/5.png";
import png50 from "../../../../assets/img/files/6.png";
import png52 from "../../../../assets/img/files/8.png";
import png53 from "../../../../assets/img/files/9.png";
import png54 from "../../../../assets/img/files/10.png";
import jpg64 from "../../../../assets/img/users/8.jpg";
import jpg58 from "../../../../assets/img/users/2.jpg";
import jpg60 from "../../../../assets/img/users/4.jpg";
import jpg76 from "../../../../assets/img/users/20.jpg";

const Basicswiperdata = [
    { id: 1, floderimg: png46, typeoffile: 'File.pdf', client1: jpg64, client2: jpg58, client3: jpg60, },
    { id: 2, floderimg: png50, typeoffile: 'Image1.png', client1: jpg64, client2: jpg58, client3: jpg60, client4: jpg76 },
    { id: 3, floderimg: png49, typeoffile: 'Documents', client1: jpg64 },
    { id: 4, floderimg: png48, typeoffile: 'project.xls', client1: jpg64, client2: jpg58, },
    { id: 5, floderimg: png46, typeoffile: 'project.ppt', client1: jpg64, client2: jpg58, },
    { id: 6, floderimg: png52, typeoffile: 'Fproject.mp4', client1: jpg64, client2: jpg58, },
    { id: 7, floderimg: png47, typeoffile: 'project.jpg', client1: jpg64, client2: jpg58, },
    { id: 8, floderimg: png53, typeoffile: 'project2.docx', client1: jpg64, client2: jpg58, },
    { id: 9, floderimg: png54, typeoffile: 'project.zip', client1: jpg64, client2: jpg58, },
]
export function SpacebetweenSwiper() {

    return (
        <>
            <div className="swiper Swiperslide-1">
                <div className="swiper-wrapper">
                    <Swiper
                        breakpoints={{
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
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}

                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        grabCursor={false}
                        modules={[Autoplay]}
                    >
                        {Basicswiperdata.map((items, id) => (

                            <SwiperSlide key={id}>
                                <div className="box-body">
                                    <a href="" className="mx-auto my-3"><img src={items.floderimg} alt="image" className="mx-auto" /></a>
                                </div>

                                <div className="box-footer bg-transparent overflow-auto">
                                    <div className="flex justify-between">
                                        <div><p className="text-sm">{items.typeoffile}</p></div>
                                        <div><p className="text-sm"> 30MB</p></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </>
    );
}



//Images
import file01 from '../../../../assets/img/gallery/1.jpg';
import file02 from '../../../../assets/img/gallery/2.jpg';
import file03 from '../../../../assets/img/gallery/3.jpg';
import file04 from '../../../../assets/img/gallery/4.jpg';
import file05 from '../../../../assets/img/gallery/5.jpg';
import file06 from '../../../../assets/img/gallery/6.jpg';
import file07 from '../../../../assets/img/gallery/7.jpg';
import file08 from '../../../../assets/img/gallery/8.jpg';
import file09 from '../../../../assets/img/gallery/9.jpg';



export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
            <div className="col-span-12 sm:col-span-4"  >
                <div className="inner">
                    <a href="#" >
                        <img src={file01} alt='media1' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">

                <div className="inner">
                    <a href="#" >
                        <img src={file02} alt='media2' className="gallery rounded-md" onClick={() => setOpen(true)} />

                    </a>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">

                <div className="inner">
                    <a href="#" >
                        <img src={file03} alt='media3' className="gallery rounded-md" onClick={() => setOpen(true)} />

                    </a>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">


                <div className="inner">
                    <a href="#" >
                        <img src={file04} alt='media4' className="gallery rounded-md" onClick={() => setOpen(true)} />

                    </a>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">

                <div className="inner">
                    <a href="#" >
                        <img src={file05} alt='media5' className="gallery rounded-md" onClick={() => setOpen(true)} />

                    </a>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="inner">
                    <a href='#'>
                        <img src={file06} alt='media6' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="inner">
                    <a href='#'>
                        <img src={file07} alt='media6' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="inner">
                    <a href='#'>
                        <img src={file08} alt='media6' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
                <div className="inner">
                    <a href='#'>
                        <img src={file09} alt='media6' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>



            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
                maxZoomPixelRatio: 10,
                scrollToZoom: true
            }}
                slides={[{ src: file01 }, { src: file02 }, { src: file03 }, { src: file04 }, { src: file05 }, { src: file06 }, { src: file07 }, { src: file08 }, { src: file09 }]} />

        </Fragment>
    );
};



export const HomeGallery = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
            <div className="box">
                <div className="box-header">
                    <h5 className="box-title">Photos</h5>
                </div>
                <div className="box-body">
                    <div className="relative">
                        <div className="grid grid-cols-3 gap-3">
                            <Link to="#" className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={ALLImages('jpg10')}
                                    alt="Image Description" />
                            </Link>
                            <Link to="#" className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={ALLImages('jpg11')}
                                    alt="Image Description" />
                            </Link>
                            <Link to="#" className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={ALLImages('jpg12')}
                                    alt="Image Description" />
                            </Link>
                            <Link to="#" className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={ALLImages('jpg13')}
                                    alt="Image Description" />
                            </Link>
                            <Link to="#" className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={ALLImages('jpg14')}
                                    alt="Image Description" />
                            </Link>
                            <Link to="#" className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={ALLImages('jpg15')}
                                    alt="Image Description" />
                            </Link>
                            <Link to="#" className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={ALLImages('jpg16')}
                                    alt="Image Description" />
                            </Link>
                            <Link to="#" className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={ALLImages('jpg17')}
                                    alt="Image Description" />
                            </Link>
                            <Link to="#" className="gallery" onClick={() => setOpen(true)}>
                                <img className="w-full object-cover rounded-sm" src={ALLImages('jpg18')}
                                    alt="Image Description" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="box-footer text-center">
                    <Link to="#" className="ti-btn ti-btn-primary py-1 px-2 m-0">View All</Link>
                </div>
            </div>



            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
                maxZoomPixelRatio: 10,
                scrollToZoom: true
            }}
                slides={[{ src: file01 }, { src: file02 }, { src: file03 }, { src: file04 }, { src: file05 }, { src: file06 }, { src: file07 }, { src: file08 }, { src: file09 },]} />

        </Fragment>
    );
};










