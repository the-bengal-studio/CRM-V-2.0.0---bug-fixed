import React from 'react'
import { Link } from 'react-router-dom';
import ALLImages from '../../../common/imagesData';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Aboutus = () => {
  return (
    <div>

      <div className="flex relative before:bg-primary/80 before:absolute before:w-full before:h-full">
        <img src={ALLImages('png118')} alt="" className="h-[500px] w-full rounded-sm" id="profile-img2" />
      </div>
      <div className="absolute xxl:!top-24 top-16 xxl:!inset-x-1/4  sm:inset-x-[15%] text-center space-y-3 p-2 sm:p-0">
        <div className="text-white space-y-3">
          <p className="text-xl text-white/70">About Us</p>
          <h1 className="text-5xl font-bold">We Do Things Differently ....!!</h1>
          <p className="text-sm text-white/50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            voluptatibus dolorum voluptate cumque nulla dicta corporis consequatur animi! Neque temporibus odit labore
            maxime atque excepturi repellendus, non quas quasi.</p>
        </div>
        <button type="button" className="ti-btn ti-btn-secondary">Join Us<i className="ri-arrow-right-line rtl:rotate-180"></i></button>
      </div>


      <div className="main-content sm:-mt-32 -mt-16">

        <div className="container mx-auto bg-white dark:bg-bgdark rounded-sm relative py-8 px-8 mb-6">


          <div className="box">
            <div className="box-body">
              <div className="grid xl:grid-cols-2 gap-6">
                <div>
                  <img className="rounded-sm" src={ALLImages('jpg19')} alt="" />
                </div>
                <div className="space-y-3">
                  <h2 className="font-semibold text-3xl text-gray-800 dark:text-white">Hello! This is <span className="text-primary">Synto.</span></h2>
                  <p className="text-base font-semibold">This is Our Story.</p>
                  <p className="text-gray-500 dark:text-white/70">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. .
                  </p>
                  <p className="text-gray-500 dark:text-white/70">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                  </p>

                  <p className="text-gray-500 dark:text-white/70">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                  </p>
                  <Link className="ti-btn ti-btn-primary" to="#">Read More <i className="ri ri-arrow-right-s-line rtl:rotate-180"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-body">
              <div className="grid xl:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h2 className="font-semibold text-3xl text-gray-800 dark:text-white">Our Mission</h2>
                  <p className="text-gray-500 dark:text-white/70">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. .
                  </p>
                  <p className="text-gray-500 dark:text-white/70">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                  </p>
                  <p className="text-gray-500 dark:text-white/70">
                    If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum
                    generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose (injected humour and the like).
                  </p>
                  <p className="text-gray-500 dark:text-white/70">
                    If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum
                    generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose (injected humour and the like).
                  </p>
                  <Link className="ti-btn ti-btn-primary" to="#">Read More <i className="ri ri-arrow-right-s-line rtl:rotate-180"></i></Link>
                </div>
                <div>
                  <img className="rounded-sm" src={ALLImages('jpg18')} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="box bg-transparent border-0 shadow-none">
            <div className="box-body px-0">
              <div className="mb-6 text-center">
                <h2 className="font-semibold text-3xl text-gray-800 dark:text-white">Our Services</h2>
                <h5 className="text-sm text-gray-500 dark:text-white/70">If you are going to use a passage of Lorem Ipsum, you
                  need to as necessary All the Lorem Ipsum generators on the Internet</h5>
              </div>
              <div className="sm:grid sm:space-y-0 space-y-6 grid-cols-12 gap-6">
                <div className="col-span-12 xl:col-span-3 md:col-span-6">
                  <div className="box mb-0">
                    <div className="box-body space-y-3 text-center">
                      <div className="mx-auto">
                        <img alt="service-img" src={ALLImages('png107')} />
                      </div>
                      <h5 className="text-lg font-semibold">Branding</h5>
                      <p className="mb-0 text-gray-500 dark:text-white/70 text-xs"> Rerum dignissimos, architecto asperiores
                        optio ducimus voluptatibus earum corrupti.</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xl:col-span-3 md:col-span-6">
                  <div className="box mb-0">
                    <div className="box-body space-y-3 text-center">
                      <div className="mx-auto">
                        <img alt="service-img" src={ALLImages('png108')} />
                      </div>
                      <h5 className="text-lg font-semibold">Development</h5>
                      <p className="mb-0 text-gray-500 dark:text-white/70 text-xs"> Rerum dignissimos, architecto asperiores
                        optio ducimus voluptatibus earum corrupti.</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xl:col-span-3 md:col-span-6">
                  <div className="box mb-0">
                    <div className="box-body space-y-3 text-center">
                      <div className="mx-auto">
                        <img alt="service-img" src={ALLImages('png110')} />
                      </div>
                      <h5 className="text-lg font-semibold">Social Media</h5>
                      <p className="mb-0 text-gray-500 dark:text-white/70 text-xs"> Rerum dignissimos, architecto asperiores
                        optio ducimus voluptatibus earum corrupti.</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xl:col-span-3 md:col-span-6">
                  <div className="box mb-0">
                    <div className="box-body space-y-3 text-center">
                      <div className="mx-auto">
                        <img alt="service-img" src={ALLImages('png109')} />
                      </div>
                      <h5 className="text-lg font-semibold">E-commerce</h5>
                      <p className="mb-0 text-gray-500 dark:text-white/70 text-xs"> Rerum dignissimos, architecto asperiores
                        optio ducimus voluptatibus earum corrupti.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box bg-transparent border-0 shadow-none">
            <div className="box-body px-0">
              <div className="mb-6 text-center">
                <h2 className="font-semibold text-3xl text-gray-800 dark:text-white">What Our Clients Say</h2>
                <h5 className="text-sm text-gray-500 dark:text-white/70">
                  If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet</h5>
              </div>

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
              }} modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }} className="mySwiper about-swipe2">
                <SwiperSlide>
                  <div className="box mb-0 text-start">
                    <div className="box-body">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                      </div>
                      <p className="mb-6">
                        Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo.
                      </p>
                      <a className="flex my-auto">
                        <img alt="testimonial" src={ALLImages('jpg58')} className="avatar avatar-sm !rounded-full" />
                        <div className="ltr:pl-4 rtl:pr-4 my-auto">
                          <p className="font-medium text-base leading-none">Socrates Itumay</p>
                          <span className="dark:text-white/70 text-gray-500 text-xs">UI Developer</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box mb-0 text-start">
                    <div className="box-body">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                      </div>
                      <p className="mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel ut impedit. Sapiente id libero reprehenderit accusantium nisi. Dolorum hic voluptas quia id.
                      </p>
                      <a className="flex my-auto ">
                        <img alt="testimonial" src={ALLImages('jpg68')} className="avatar avatar-sm !rounded-full" />
                        <div className="ltr:pl-4 rtl:pr-4 my-auto">
                          <p className="font-medium text-base leading-none">Eos Tempor</p>
                          <span className="dark:text-white/70 text-gray-500 text-xs">UI Developer</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box mb-0 text-start">
                    <div className="box-body">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                      </div>
                      <p className="mb-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable.
                      </p>
                      <a className="flex my-auto ">
                        <img alt="testimonial" src={ALLImages('jpg59')} className="avatar avatar-sm !rounded-full" />
                        <div className="ltr:pl-4 rtl:pr-4 my-auto">
                          <p className="font-medium text-base leading-none">Airi Satou</p>
                          <span className="dark:text-white/70 text-gray-500 text-xs">UI Developer</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box mb-0 text-start">
                    <div className="box-body">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                      </div>
                      <p className="mb-6">
                        All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                      </p>
                      <a className="flex my-auto ">
                        <img alt="testimonial" src={ALLImages('jpg69')} className="avatar avatar-sm !rounded-full" />
                        <div className="ltr:pl-4 rtl:pr-4 my-auto">
                          <p className="font-medium text-base leading-none">Mc Greggor</p>
                          <span className="dark:text-white/70 text-gray-500 text-xs">UI Developer</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box mb-0 text-start">
                    <div className="box-body">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                      </div>
                      <p className="mb-6">
                        If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, .
                      </p>
                      <a className="flex my-auto ">
                        <img alt="testimonial" src={ALLImages('jpg61')} className="avatar avatar-sm !rounded-full" />
                        <div className="ltr:pl-4 rtl:pr-4 my-auto">
                          <p className="font-medium text-base leading-none">Samantha Paul</p>
                          <span className="dark:text-white/70 text-gray-500 text-xs">UI Developer</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box mb-0 text-start">
                    <div className="box-body">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                        <div className="text-yellow-500 text-base hover:text-yellow-500"><i className="ri-star-fill"></i></div>
                      </div>
                      <p className="mb-6">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestias, officia, inventore incidunt aliquid amet nihil exercitationem, modi possimus voluptate molestiae explicabo assumenda.
                      </p>
                      <a className="flex my-auto ">
                        <img alt="testimonial" src={ALLImages('jpg71')} className="avatar avatar-sm !rounded-full" />
                        <div className="ltr:pl-4 rtl:pr-4 my-auto">
                          <p className="font-medium text-base leading-none">Pope Johnson</p>
                          <span className="dark:text-white/70 text-gray-500 text-xs">UI Developer</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="box mb-0 overflow-hidden">
            <div className="box-body">
              <div className="space-y-8 my-auto text-center">
                <div className="">
                  <h2 className="font-semibold text-3xl text-gray-800 dark:text-white mb-3 leading-none">Contact Us</h2>
                  <p className="text-gray-500 dark:text-white/70">Have any questions ? We would love to hear from you.</p>
                </div>
                <div>
                  <div className="space-y-6 mb-6 text-start">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <label htmlFor="fullname" className="my-auto ti-div-label">Full Name</label>
                        <input type="text" className="ti-form-input" id="fullname" placeholder="Enter Full Name" />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="Email-id" className="my-auto ti-form-label">Email ID</label>
                        <input type="email" className="ti-form-input" id="Email-id" placeholder="Enter Email Id" />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="phoneno" className="my-auto ti-form-label">Phone No :</label>
                        <input type="number" className="ti-form-input" id="phoneno" placeholder="Enter Phone No" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="messagearea" className="my-auto ti-form-label">Message</label>
                      <textarea className="ti-form-input" rows="6" id="messagearea" placeholder="Enter Your Messaage"></textarea>
                    </div>
                  </div>
                  <Link className=" text-center ti-btn ti-btn-primary" to="#">Send Message</Link>
                </div>
              </div>
            </div>
          </div>


        </div>


      </div>


    </div>

  )
}
export default Aboutus;