import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ContactData } from '../../../common/commondata';
import ALLImages from '../../../common/imagesData';
import ProfileService from '../../../common/profileservices';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { Helmet } from 'react-helmet';

const Contacts = () => {

  const [allData, setAllData] = useState(ContactData)
  const [ClassName, setClassName] = useState()

	let allElement2 = [];
	let myfunction = (InputData) => {
		let allElement
		for (allElement of ContactData) {
			if (allElement.name[0] == " ") {
				allElement.name = allElement.name.trim()
			}
			if (allElement.name.toLowerCase().includes(InputData.toLowerCase())) {
				if (allElement.name.toLowerCase().startsWith(InputData.toLowerCase())) {
					allElement2.push(allElement);
				}
			}
		}
		setAllData(allElement2);
	};

//Delete items

	function handleRemove(id) {
		const newList = allData.filter((idx) => idx.id !== id);
		setAllData(newList);
	  }
  			//URl image
        const [UrlImage, setUrlImage] = useState(ALLImages('jpg57'));
        //Disabling input feild
        const [UrlDisabled, setUrlDisabled] = useState(true);
      
        const [fileDisabled, setfileDisabled] = useState(false);
        //Default image
        const [Image, setImage] = useState(ALLImages('jpg57'));
      
        let location = useLocation();
      
      
        const putImage = () => {
          setImage(ProfileService.returnImage())
          if (UrlImage != Image) {
            ProfileService.handleChangeUrl(UrlImage)
            setImage(ProfileService.returnImage())
          }
          // setSmShow(false)
        }
      
        //toggle button for image 
        const toggleImage = (type) => {
          if (type == "fileDisabled") {
            setfileDisabled(false)
            setUrlDisabled(true)
          }
          if (type == "UrlDisabled") {
            setUrlDisabled(false)
            setfileDisabled(true)
          }
        }
      
        useEffect(() => {
          if (ProfileService.returnImage() != undefined) {
            setImage(ProfileService.returnImage())
          }
          let contactItem = document.querySelectorAll(".main-contact-item")
          contactItem.forEach((ele => {
            ele.addEventListener("click", () => {
              setClassName("main-content-body-show")
            });
          }))
      
        }, [location])
  return (
    <div>
      <Helmet>
          <body class={ClassName}></body>
        </Helmet>
        <PageHeader currentpage="Contacts" activepage="Pages" mainpage="Contacts" />
        <div className= "grid grid-cols-12 gap-x-5">
          <div className= "col-span-12 xxl:col-span-9">
            <div className= "box">
              <div className= "box-header">
                <div className= "grid grid-cols-12 gap-6">
                  <div className= "col-span-12 lg:col-span-4">
                    <div className= "relative sm:max-w-xs max-w-[210px]">
                      <label htmlFor="hs-table-search" className= "sr-only">Search</label>
                      <div
                        className= "absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-4 rtl:pl-4">
                        <i className= "ti ti-search"></i>
                      </div>
                      <input type="text" name="hs-table-search" id="hs-table-search" onChange={(ele) => { myfunction(ele.target.value) }}
                        className= "p-2 ltr:pr-10 rtl:pl-10 ti-form-input" placeholder="Search Contact"/>
                    </div>
                  </div>
                  <div className= "col-span-12 lg:sm:col-span-8">
                    <div className= "sm:flex space-x-3 sm:space-y-0 space-y-2 lg:justify-end team-right rtl:space-x-reverse">
                      <div className= "hs-dropdown ti-dropdown">
                        <button id="hs-dropdown-custom-icon-trigger2" type="button"
                          className= "hs-dropdown-toggle ti-btn ti-btn-primary m-0">Sort By<i
                            className= "ri-arrow-down-s-line align-middle"></i></button>
                        <div className= "hs-dropdown-menu ti-dropdown-menu hidden"
                          aria-labelledby="hs-dropdown-custom-icon-trigger2">
                          <Link className= "ti-dropdown-item" to="#">A To Z</Link>
                          <Link className= "ti-dropdown-item" to="#">Z To A</Link>
                          <Link className= "ti-dropdown-item" to="#">Favorites</Link>
                          <Link className= "ti-dropdown-item" to="#">All</Link>
                        </div>
                      </div>
                      <Link to="#" className= "team-add-btn m-0 ti-btn ti-btn-secondary whitespace-nowrap">
                        <i className="ti ti-circle-plus leading-none"> </i>Add New Contact
                      </Link>
                      <div className= "hs-dropdown ti-dropdown">
                        <Link aria-label="anchor" to="#"
                          className= "hs-dropdown-toggle ti-dropdown-toggle inline-flex !p-2 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border font-medium bg-white text-gray-500 shadow-sm align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-xs dark:bg-bgdark dark:border-white/10 dark:text-white/70 dark:focus:ring-offset-white/10">
                          <i className= "ri ri-more-2-line text-lg leading-none"></i>
                        </Link>
                        <div className= "hs-dropdown-menu ti-dropdown-menu">
                          <Link className= "ti-dropdown-item" to="#"><i
                              className= "ri-folder-shared-line me-2 align-middle"></i>Move To</Link>
                          <Link className= "ti-dropdown-item" to="#"><i
                              className= "ri-file-copy-line me-2 align-middle"></i>Copy All</Link>
                          <Link className= "ti-dropdown-item" to="#"><i
                              className= "ri-delete-bin-5-line me-2 align-middle"></i>Delete All</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className= "box-body">
                <div className= "sm:grid sm:space-y-0 space-y-6 xl:!grid-cols-3 md:grid-cols-2 gap-6">
                  {allData.map((idx)=>(
                  <div className= "box mb-0 overflow-hidden" key={Math.random()}>
                    <div className= "box-body space-y-5">
                      <div className= "flex">
                        <div className= "sm:flex sm:space-x-3 sm:space-y-0 space-y-4 rtl:space-x-reverse">
                          <img className= "avatar avatar-lg rounded-sm" src={idx.pic}
                            alt="Image Description"/>
                          <div className= "space-y-1 my-auto">
                            <h5 className= "font-semibold text-base leading-none">{idx.name}</h5>
                            <p className= "text-gray-500 dark:text-white/70 font-semibold text-xs truncate max-w-[9rem]">
                              {idx.mail}</p>
                            <p className= "text-primary dark:text-primary text-xs font-semibold">{idx.number}</p>
                          </div>
                        </div>
                        <div className= "ltr:ml-auto rtl:mr-auto">
                          <Link to="#"><i className= {idx.favoriteclass}></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className= "box-footer">
                      <div className= "grid grid-cols-12 gap-x-3">
                        <div className= "sm:col-span-2 col-span-4 ">
                          <Link to="#"
                            className= "inline-flex !p-1 flex-shrink-0 justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-500 shadow-sm align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-xs dark:bg-bgdark dark:border-white/10 dark:text-white/70 dark:focus:ring-offset-white/10">
                            <i className= "ri ri-phone-line text-lg leading-none"></i>
                          </Link>
                        </div>
                        <div className= "sm:col-span-8 col-span-4">
                          <Link to="#"
                            className= "inline-flex !p-1 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border font-medium bg-white text-gray-500 shadow-sm align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-xs dark:bg-bgdark dark:border-white/10 dark:text-white/70 dark:focus:ring-offset-white/10">
                            <i className= "ri-chat-2-line text-lg leading-none"></i> <span
                              className= "text-sm leading-none hidden sm:block">Message</span>
                          </Link>
                        </div>
                        <div className= "sm:col-span-2 col-span-4">
                          <div className= "hs-dropdown ti-dropdown flex justify-end">
                            <span
                              className= "cursor-pointer hs-dropdown-toggle ti-dropdown-toggle inline-flex !p-1 flex-shrink-0 justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-500 shadow-sm align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-xs dark:bg-bgdark dark:border-white/10 dark:text-white/70 dark:focus:ring-offset-white/10">
                              <i className= "ri ri-more-2-line text-lg leading-none"></i>
                            </span>
                            <div className= "hs-dropdown-menu ti-dropdown-menu">
                              <Link className= "ti-dropdown-item" to="#"><i
                                  className= "ri-share-line me-2 align-middle"></i>Share</Link>
                              <Link className= "ti-dropdown-item" to="#"><i
                                  className= "ri-video-chat-line me-2 align-middle"></i>Video Call</Link>
                              <Link className= "ti-dropdown-item" to="#" onClick={() => handleRemove(idx.id)}><i
                                  className= "ri-delete-bin-5-line me-2 align-middle"></i>Delete</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
                <nav className= "mt-6 flex justify-end items-center space-x-2 rtl:space-x-reverse">
                  <Link className= "text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm"
                    to="#">
                    <span aria-hidden="true">Prev</span>
                    <span className= "sr-only">Previous</span>
                  </Link>
                  <Link className= "bg-primary text-white py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
                    to="#" aria-current="page">1</Link>
                  <Link className= "text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
                    to="#">2</Link>
                  <Link className= "text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center text-sm font-medium rounded-sm"
                    to="#">3</Link>
                  <Link className= "text-gray-500 dark:text-white/70 hover:text-primary e py-1 px-2 leading-none inline-flex items-center gap-2 rounded-sm"
                    to="#">
                    <span className= "sr-only">Next</span>
                    <span aria-hidden="true">Next</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className= "col-span-12 xxl:col-span-3">
            <div className= "box">
              <div className= "box-body">
                <div className= "relative">
                  <div
                    className= "flex relative before:bg-black/50 before:absolute before:w-full before:h-full before:rounded-sm">
                    <img src= {ALLImages('png118')} alt="" className= "h-[150px] w-full rounded-sm" id="profile-img2"/>
                    <span
                      className= "absolute top-5 ltr:right-5 rtl:left-5 flex p-2 rounded-sm ring-1 ring-black/10 text-white bg-black/10 leading-none">
                      <i className= "ri ri-pencil-line"></i>
                    </span>
                  </div>
                  <div className= "absolute top-[5.5rem] inset-x-0 text-center space-y-3">
                    <div className= "flex justify-center w-full">
                      <div className= "relative">
                        <img src= {Image} className= "w-24 h-24 rounded-full ring-4 ring-white/10 mx-auto" id="profile-img" alt="pofile-img"/>
                        
                        <button type="button" className="absolute top-0 ltr:right-0 rtl:left-0 block p-1 rounded-full ring-2 ring-white/10 text-white bg-white/10 dark:bg-bgdark leading-none" data-hs-overlay="#hs-small-modal"><i className= "ri ri-pencil-line ltr:mr-2 rtl:ml-2"></i> <span></span></button>

                          <div id="hs-small-modal" className="hs-overlay hidden ti-modal">
                            <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                              <div className="ti-modal-content">
                                
                                <div className="ti-modal-body">
                                <div onClick={() => { toggleImage("fileDisabled") }}>
                                <label htmlFor="file-input" className = "sr-only">Choose file</label>
                                <input type="file" name="file-input" id="file-input" disabled={fileDisabled} onChange={(ele) => ProfileService.handleChange(ele)} className = " inset-0 block w-full h-full cursor-pointer border my-2 border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/70 file:bg-transparent file:border-0 file:bg-gray-100 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 dark:file:bg-black/20 dark:file:text-white/70"/>
                                </div>
                                <div onClick={() => { toggleImage("UrlDisabled") }}>
                                <input type="text" className= "my-auto ti-form-input"  name="basic-input" id="basic-input" disabled={UrlDisabled} onChange={(ele) => { setUrlImage(ele.target.value) }} placeholder="Paste the URL"/>
                                </div><br/>
                                <button type="button"  onClick={() => { putImage() }} className= "py-1 px-3 ti-btn ti-btn-primary text-sm m-0">Submit</button>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className= "mt-14 space-y-5">
                  <div className= "mt-4  text-center">
                    <h2 className= "text-xl font-semibold">Airi Satou</h2>
                    <p className= "text-sm text-gray-500 dark:text-white/70 font-semibold">Team Lead</p>
                  </div>
                  <h5 className= "box-title my-3">Contact Information</h5>
                  <div className= "flex space-x-3 rtl:space-x-reverse">
                    <i
                      className= "ri ri-phone-line text-lg leading-none p-3 avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm"></i>
                    <div className= "my-auto">
                      <h5 className= "text-sm font-semibold">Phone Number</h5>
                      <Link to="#" className= "text-xs text-gray-500 dark:text-white/70">+121 9585652655</Link>
                    </div>
                  </div>
                  <div className= "flex space-x-3 rtl:space-x-reverse">
                    <i
                      className= "ri ri-mail-line text-lg leading-none p-3 avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm"></i>
                    <div className= "my-auto">
                      <h5 className= "text-sm font-semibold">Email Id</h5>
                      <Link to="#"
                        className= "text-xs text-gray-500 dark:text-white/70">juliawalker@gmail.com</Link>
                    </div>
                  </div>
                  <h5 className= "box-title my-3">WebSite Information</h5>
                  <div className= "flex space-x-3 rtl:space-x-reverse">
                    <i
                      className= "ri ri-github-line text-lg leading-none p-3 avatar avatar-sm bg-primary/20 dark:bg-primary/20 text-primary dark:text-primary rounded-sm"></i>
                    <div className= "my-auto">
                      <h5 className= "text-sm font-semibold">Github Id</h5>
                      <Link to="#"
                        className= "text-xs text-gray-500 dark:text-white/70">https://github.com/</Link>
                    </div>
                  </div>
                  <div className= "flex space-x-3 rtl:space-x-reverse">
                    <i
                      className= "ri ri-facebook-line text-lg leading-none p-3 avatar avatar-sm bg-secondary/20 dark:bg-secondary/20 text-secondary dark:text-secondary rounded-sm"></i>
                    <div className= "my-auto">
                      <h5 className= "text-sm font-semibold">Facebook Id</h5>
                      <Link to="#"
                        className= "text-xs text-gray-500 dark:text-white/70">https://facebook.com/</Link>
                    </div>
                  </div>
                  <div className= "flex space-x-3 rtl:space-x-reverse">
                    <i
                      className= "ri ri-instagram-line text-lg leading-none p-3 avatar avatar-sm bg-danger/20 dark:bg-danger/20 text-danger dark:text-danger rounded-sm"></i>
                    <div className= "my-auto">
                      <h5 className= "text-sm font-semibold">instagram Id</h5>
                      <Link to="#"
                        className= "text-xs text-gray-500 dark:text-white/70">https://instagram.com/</Link>
                    </div>
                  </div>
                  <div className= "flex space-x-3 rtl:space-x-reverse">
                    <i
                      className= "ri ri-twitter-line text-lg leading-none p-3 avatar avatar-sm bg-info/20 dark:bg-info/20 text-info dark:text-info rounded-sm"></i>
                    <div className= "my-auto">
                      <h5 className= "text-sm font-semibold">twitter Id</h5>
                      <Link to="#"
                        className= "text-xs text-gray-500 dark:text-white/70">https://twitter.com/</Link>
                    </div>
                  </div>
                  <div className= "flex space-x-3 rtl:space-x-reverse">
                    <i
                      className= "ri ri-linkedin-line text-lg leading-none p-3 avatar avatar-sm bg-warning/20 dark:bg-warning/20 text-warning dark:text-warning rounded-sm"></i>
                    <div className= "my-auto">
                      <h5 className= "text-sm font-semibold">linkedin Id</h5>
                      <Link to="#"
                        className= "text-xs text-gray-500 dark:text-white/70">https://linkedin.com/</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className= "box-footer">
                <button type="button" className= "w-full ti-btn ti-btn-primary">
                  <i className= "ti ti-report"></i>Report
                </button><button type="button"
                  className= "w-full ti-btn font-medium border-gray-200 bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10">
                  <i className= "ti ti-ban"></i>Block
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Contacts;