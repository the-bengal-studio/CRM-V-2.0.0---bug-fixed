import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFlip } from "swiper/modules";

import jpg60 from "../../../assets/img/users/4.jpg";
import jpg70 from "../../../assets/img/users/14.jpg";
import jpg71 from "../../../assets/img/users/15.jpg";
import jpg72 from "../../../assets/img/users/16.jpg";
import jpg73 from "../../../assets/img/users/17.jpg";
import jpg74 from "../../../assets/img/users/18.jpg";
import jpg75 from "../../../assets/img/users/19.jpg";

import { Link } from "react-router-dom";
const Basicswiperdata = [
    { id: 1, floderimg: jpg70, typeoffile: 'File.pdf', filesize: '20MB', Timeago: '20 Min ago', Nameofcustomer: 'Ecos Tempor ', client3: jpg60, },
    { id: 2, floderimg: jpg71, typeoffile: 'Image1.png', filesize: '10MB', Timeago: ' 3 Hours ago ', Nameofcustomer: 'Socrate itumany', client3: jpg60, },
    { id: 4, floderimg: jpg72, typeoffile: 'Documents', filesize: '1.5GB', Timeago: '10 Hours ago ', Nameofcustomer: 'Airi Satou', },
    { id: 5, floderimg: jpg73, typeoffile: 'project.xls', filesize: '34MB', Timeago: ' 1 day ago ', Nameofcustomer: 'Mg Greggor', },
    { id: 8, floderimg: jpg74, typeoffile: 'project.ppt', filesize: '10KB', Timeago: ' 2 days  ago ', Nameofcustomer: 'Samanatha Paul', },
    { id: 10, floderimg: jpg75, typeoffile: 'Fproject.mp4', filesize: '100KB', Timeago: ' 3  days ago ', Nameofcustomer: 'Pope Johnson', },

]

export function SpacebetweenSwiper() {

    return (
        <>

            <Swiper
                spaceBetween={40}
                slidesPerView={4}
                freeMode={true}
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
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                modules={[EffectFlip, Autoplay]}

            // className="mySwiper"
            >
                {Basicswiperdata.map((items, id) => (

                    <SwiperSlide key={id}>

                        <div className="swiper-slide !text-start !bg-transparent dark:!bg-transparent">
                            <div className="box mb-0 overflow-hidden">
                                <div className="box-body mb-0">
                                    <div className="flex space-x-1 rtl:space-x-reverse">
                                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                                    </div>
                                    <p className="text-base text-gray-500 dark:text-white/70">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel ut impedit. Sapiente id
                                        libero

                                    </p>
                                </div>
                                <div className="box-footer">
                                    <div className="flex justify-between">
                                        <Link className="flex my-auto">
                                            <img alt="testimonial" src={items.floderimg} className="avatar avatar-sm !rounded-full" />
                                            <div className="ltr:pl-4 rtl:pr-4 my-auto">
                                                <p className="font-semibold text-base leading-none text-gray-800 dark:text-white text-primary">{items.Nameofcustomer}</p>
                                                <span className="dark:text-white/70 text-gray-500 text-xs">Ui Developer</span>
                                            </div>
                                        </Link>
                                        <p className="text-center text-gray-500 dark:text-white/70 my-auto">{items.Timeago}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>


        </>
    );
}