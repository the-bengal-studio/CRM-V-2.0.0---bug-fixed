import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ALLImages from '../../../../common/imagesData';
import PageHeader from '../../../../layout/layoutsection/pageHeader/pageHeader';
import { TagsInput } from "react-tag-input-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Blogdetails = () => {
  const [selected, setSelected] = useState(['#Lifestyle', '#Health', '#Tour', '#Music', '#Travel', '#Nature', '#Tourism', '#Hotels', '#Marketing', '#Development', '#Shopping', '#Realestate', '#Business']);  // react-tag-input-component
  return (
    <div>
        <PageHeader currentpage="Blog Details" activepage="Pages" mainpage="Blog Details" />
        <div className= "grid grid-cols-12 gap-x-6">
          <div className= "col-span-12 xxl:col-span-9">
            <div className= "box">
              <div className= "p-6">
                <img className= "w-full h-auto rounded-sm" src= {ALLImages('jpg17')} alt="Image Description"/>
                <div className= "box-body px-0 pb-0">
                  <div className= "sm:flex justify-between mb-5 space-y-2 sm:space-y-0">
                    <div className= "sm:flex sm:space-x-4 space-y-2 sm:space-y-0 rtl:space-x-reverse">
                      <div className= "flex items-center space-x-3 rtl:space-x-reverse">
                        <img className= "avatar avatar-sm !w-8 !h-8 ring-0 rounded-full" src= {ALLImages('jpg57')} alt="avatar"/>
                        <div><p className= "text-slate-700 font-medium text-sm dark:text-white">Json Taylor</p></div>
                      </div>
                      <div className= "flex items-center space-x-3 rtl:space-x-reverse">
                        <p className= "flex space-x-2 rtl:space-x-reverse text-slate-700 dark:text-white text-sm font-medium"><i className= "ri ri-calendar-line text-sm"></i><span>29 September,2022</span></p>
                      </div>
                      <div className= "flex items-center space-x-3 rtl:space-x-reverse">
                        <p className= "flex space-x-2 rtl:space-x-reverse text-slate-700 dark:text-white text-sm font-medium"><span className= "w-1.5 h-1.5 inline-block bg-primary rounded-full my-auto"></span><span>Lifestyle</span></p>
                      </div>
                    </div>
                    <div className= "flex items-center space-x-3 rtl:space-x-reverse">
                      <p className= "flex space-x-2 rtl:space-x-reverse text-slate-700 dark:text-white text-sm font-medium"><i className= "ri ri-chat-3-line text-sm"></i><span>(20) Comments</span></p>
                    </div>
                  </div>
                  <h5 className= "font-semibold text-slate-700 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Elitr vero et at eirmod labore et clita invidunt lorem.</h5>
                  <p className= "mt-3 mb-3 text-gray-500 dark:text-white/70 text-sm">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
                  <div className= "box bg-gray-100 dark:bg-black/20 mb-5 shadow-none">
                    <Link aria-label="anchor" to="#" className= ""></Link>
                    <div className= "box-body">
                      <blockquote className= "relative text-center max-w-2xl mx-auto">
                        <div className= "relative z-10">
                          <p className= "text-xl text-gray-800">
                            <em className= "relative">
                              <span className= "relative z-10 dark:text-white">In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful..</span>
                            </em>
                          </p> <footer className= "blockquote-footer mt-2 text-sm opacity-70">-Someone famous as <cite title="Source Title">-Alice Walker</cite></footer>
                        </div>
                      </blockquote>
                    </div>
                </div>
                  <p className= "mt-3 mb-3 text-gray-500 dark:text-white/70 text-sm">but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example.</p>
                  <div>
                    <h5 className= "font-semibold text-slate-700 dark:text-white text-sm">Shared With :-</h5>
                    <div className= "flex space-x-2 rtl:space-x-reverse mt-2">
                      <img className= "avatar avatar-sm rounded-full" src= {ALLImages('jpg57')} alt="Image Description"/>
                      <img className= "avatar avatar-sm rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
                      <img className= "avatar avatar-sm rounded-full" src= {ALLImages('jpg62')} alt="Image Description"/>
                      <img className= "avatar avatar-sm rounded-full" src= {ALLImages('jpg61')} alt="Image Description"/>
                      <img className= "avatar avatar-sm rounded-full hidden sm:flex" src= {ALLImages('jpg63')} alt="Image Description"/>
                      <img className= "avatar avatar-sm rounded-full hidden sm:flex" src= {ALLImages('jpg58')} alt="Image Description"/>
                      <img className= "avatar avatar-sm rounded-full hidden sm:flex" src= {ALLImages('jpg65')} alt="Image Description"/>
                      <span className= "inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
                        <span className= "font-medium text-gray-500 leading-none dark:text-white/70">9+</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className= "box-footer bg-transparent">
                <div className= "sm:flex items-center justify-between space-y-2 sm:space-y-0">
                  <div className= "sm:flex items-center sm:space-x-3 space-y-2 sm:space-y-0 rtl:space-x-reverse">
                    <Link to="#" className= "text-xs text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full flex font-normal"><i className= "text-xs ri ri-heart-line"></i><span>30 Likes</span></Link>
                    <Link to="#" className= "text-xs text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full flex font-normal"><i className= "text-xs ri ri-share-line"></i><span>350 Shares</span></Link>
                  </div>
                  <div className= "space-x-2">
                    <Link to="#" className= "text-xs text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-full flex font-normal"><i className= "text-xs ri ri-eye-line"></i><span>30k Views</span></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Leave a Reply</h5>
              </div>
              <div className= "box-body">
                <label htmlFor="input-label" className= "ti-form-label">Name</label>
                <input type="text" id="input-label" className= "ti-form-input mb-5" placeholder="YourName"/>

                <label htmlFor="input-label1" className= "ti-form-label">Email</label>
                <input type="email" id="input-label1" className= "ti-form-input mb-5" placeholder="youremail@gmail.com"/>


                <label className= "ti-form-label">Comment</label>
                <textarea className= "ti-form-input mb-5" rows="10"></textarea>

                <div className= "flex mb-5">
                  <input type="checkbox" className= "ti-form-checkbox mt-0.5" id="hs-default-checkbox"/>
                  <label htmlFor="hs-default-checkbox" className= "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">I Am Not A Robot</label>
                </div>

                <button type="submit" className= "py-2 px-3 ti-btn ti-btn-primary ltr:float-right rtl:float-left">
                 Submit Reply
                </button>

              </div>
            </div>
          </div>
          <div className= "col-span-12 xxl:col-span-3">
            <div className= "box">
              <div className= "box-body p-0">
              <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]} className="mySwiper8" >
								<SwiperSlide>
									<div className="rtl:dir-rtl">
										<img src={ALLImages('jpg13')} alt="image" />
										<div className="blog-caption text-start">
											<p className="mb-2 text-xs">The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.</p>
											<h6 className="text-base font-semibold mb-2">N.A.S.A</h6>
											<div className="flex items-center">
												<img src={ALLImages('jpg71')} alt="" className="shadow-none ring-transparent avatar avatar-sm !rounded-full ltr:mr-2 rtl:ml-2" />
												<div className="font-semibold">Json Taylor - <span className="text-xs opacity-70 font-normal">12,Dec 2022 - 04:34PM</span></div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide><div className="rtl:dir-rtl">
									<img src={ALLImages('jpg14')} alt="image" />
									<div className="blog-caption text-start">
										<p className="mb-2 text-xs">The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.</p>
										<h6 className="text-base font-semibold mb-2">N.A.S.A</h6>
										<div className="flex items-center">
											<img src={ALLImages('jpg71')} alt="" className="shadow-none ring-transparent avatar avatar-sm !rounded-full ltr:mr-2 rtl:ml-2" />
											<div className="font-semibold">Json Taylor - <span className="text-xs opacity-70 font-normal">12,Dec 2022 - 04:34PM</span></div>
										</div>
									</div>
								</div></SwiperSlide>
								<SwiperSlide><div className="rtl:dir-rtl">
									<img src={ALLImages('jpg15')} alt="image" />
									<div className="blog-caption text-start">
										<p className="mb-2 text-xs">The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.</p>
										<h6 className="text-base font-semibold mb-2">N.A.S.A</h6>
										<div className="flex items-center">
											<img src={ALLImages('jpg71')} alt="" className="shadow-none ring-transparent avatar avatar-sm !rounded-full ltr:mr-2 rtl:ml-2" />
											<div className="font-semibold">Json Taylor - <span className="text-xs opacity-70 font-normal">12,Dec 2022 - 04:34PM</span></div>
										</div>
									</div>
								</div></SwiperSlide>
							</Swiper>
              </div>
            </div>
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Popular Blogs</h5>
              </div>
              <div className= "box-body">
                <ul className= "flex flex-col">
                  <li className= "ti-list-group pt-0 px-0 border-0 text-gray-800 dark:text-white">
                   <Link to="#" className= "space-x-3 flex rtl:space-x-reverse">
                    <img src= {ALLImages('jpg16')} className= "avatar avatar-lg rounded-sm ring-0" alt="Image Description"/>
                    <div className= "space-y-1 my-auto">
                      <h3 className= "font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                      <p className= "flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i className= "ri ri-calendar-line text-xs"></i><span>Sept 29 , 2022</span></p>
                    </div>
                   </Link>
                  </li>
                  <li className= "ti-list-group px-0 border-0 text-gray-800 dark:text-white">
                   <Link to="#" className= "space-x-3 flex rtl:space-x-reverse">
                    <img src= {ALLImages('jpg18')} className= "avatar avatar-lg rounded-sm ring-0" alt="Image Description"/>
                    <div className= "space-y-1 my-auto">
                      <h3 className= "font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                      <p className= "flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i className= "ri ri-time-line text-xs"></i><span>3 hours ago</span></p>
                    </div>
                   </Link>
                  </li>
                  <li className= "ti-list-group px-0 border-0 text-gray-800 dark:text-white">
                   <Link to="#" className= "space-x-3 flex rtl:space-x-reverse">
                    <img src= {ALLImages('jpg17')} className= "avatar avatar-lg rounded-sm ring-0" alt="Image Description"/>
                    <div className= "space-y-1 my-auto">
                      <h3 className= "font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                      <p className= "flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i className= "ri ri-time-line text-xs"></i><span>30 mins ago</span></p>
                    </div>
                   </Link>
                  </li>
                  <li className= "ti-list-group px-0 border-0 text-gray-800 dark:text-white">
                   <Link to="#" className= "space-x-3 flex rtl:space-x-reverse">
                    <img src= {ALLImages('jpg12')} className= "avatar avatar-lg rounded-sm ring-0" alt="Image Description"/>
                    <div className= "space-y-1 my-auto">
                      <h3 className= "font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                      <p className= "flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i className= "ri ri-calendar-line text-xs"></i><span>l day ago</span></p>
                    </div>
                   </Link>
                  </li>
                  <li className= "ti-list-group px-0 border-0 text-gray-800 dark:text-white">
                   <Link to="#" className= "space-x-3 flex rtl:space-x-reverse">
                    <img src= {ALLImages('jpg11')} className= "avatar avatar-lg rounded-sm ring-0" alt="Image Description"/>
                    <div className= "space-y-1 my-auto">
                      <h3 className= "font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                      <p className= "flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i className= "ri ri-calendar-line text-xs"></i><span>l day ago</span></p>
                    </div>
                   </Link>
                  </li>
                  <li className= "ti-list-group px-0 pb-0 border-0 text-gray-800 dark:text-white">
                   <Link to="#" className= "space-x-3 flex rtl:space-x-reverse">
                    <img src= {ALLImages('jpg17')} className= "avatar avatar-lg rounded-sm ring-0" alt="Image Description"/>
                    <div className= "space-y-1 my-auto">
                      <h3 className= "font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                      <p className= "flex space-x-2 rtl:space-x-reverse text-gray-500 dark:text-white/70 text-xs"><i className= "ri ri-time-line text-xs"></i><span>30 mins ago</span></p>
                    </div>
                   </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Categories</h5>
              </div>
              <TagsInput className= "box-body" value={selected} onChange={setSelected} name="text" placeHolder="Enter the Text" />
            </div>

            <div className= "box">
              <div className= "box-body">
                <h3 className= "font-semibold text-base mb-5 text-primary">Subscribe For More Blog's</h3>
                <input type="email" className= "ti-form-input" placeholder="you@site.com"/>
                <button type="button" className= "py-2 px-3 w-full ti-btn ti-btn-primary mt-2">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}
export default Blogdetails;