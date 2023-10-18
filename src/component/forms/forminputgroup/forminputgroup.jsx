import React from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import Select from 'react-select';
import { InlineAddonData, InlineData } from '../../../common/select2data';

const Forminputgroup = () => {
  return (
    <div>

                <PageHeader currentpage="Input-Group" activepage="Forms" mainpage="Input-Group" /> 
                <div className = "grid grid-cols-12 gap-x-6">
                    <div className = "col-span-12 lg:col-span-6">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Input Group Sizes</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "space-y-3">
                                    <div>
                                      <div className = "flex rounded-sm">
                                        <span className = "px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-white/70">Small</span>
                                        <input type="text" className = "py-2 px-3  ltr:pr-11 rtl:pl-11 ti-form-input rounded-none ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10"/>
                                      </div>
                                    </div>

                                    <div>
                                      <div className = "flex rounded-sm">
                                        <span className = "px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-white/70">Default</span>
                                        <input type="text" className = "ti-form-input rounded-none  ltr:pr-11 rtl:pl-11 ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10"/>
                                      </div>
                                    </div>

                                    <div>
                                      <div className = "flex rounded-sm">
                                        <span className = "px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-white/70">Large</span>
                                        <input type="text" className = "ti-form-input rounded-none  ltr:pr-11 rtl:pl-11 ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10 sm:p-5"/>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-6">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Input Group Sizes</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "space-y-3">
                                    <div>
                                        <div className = "sm:flex rounded-sm">
                                          <span className = "py-2 px-3 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm sm:w-auto ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm dark:bg-black/20 dark:border-white/10 dark:text-white/70">First and last name</span>
                                          <input type="text" className = "ti-form-input rounded-none  ltr:pr-11 rtl:pl-11 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm relative focus:z-10"/>
                                          <input type="text" className = "ti-form-input rounded-none  ltr:pr-11 rtl:pl-11 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm relative focus:z-10"/>
                                        </div>
                                    </div>

                                    <div>
                                        <div className = "sm:flex rounded-sm">
                                          <input type="text" className = "ti-form-input rounded-none  ltr:pr-11 rtl:pl-11 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm relative focus:z-10"/>
                                          <input type="text" className = "ti-form-input rounded-none  ltr:pr-11 rtl:pl-11 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm relative focus:z-10"/>
                                          <span className = "py-2 px-3 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm sm:w-auto ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm dark:bg-black/20 dark:border-white/10 dark:text-white/70">First and last name</span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className = "sm:flex rounded-sm">
                                          <input type="text" className = "ti-form-input rounded-none  ltr:pr-11 rtl:pl-11 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm relative focus:z-10"/>
                                          <span className = "py-2 px-3 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm sm:w-auto ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm dark:bg-black/20 dark:border-white/10 dark:text-white/70">
                                            <svg className = "hidden sm:block h-4 w-4 text-gray-500 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                              <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                                            </svg>
                                            <svg className = "sm:hidden mx-auto h-4 w-4 text-gray-500 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                              <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                                            </svg>
                                          </span>
                                          <input type="text" className = "ti-form-input rounded-none  ltr:pr-11 rtl:pl-11 -mt-px ltr:-ml-px rtl:-mr-px first:rounded-t-sm last:rounded-b-sm ltr:sm:first:rounded-l-sm rtl:sm:first:rounded-r-sm sm:mt-0 ltr:sm:first:ml-0 rtl:sm:first:mr-0  ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-r-sm rtl:sm:last:rounded-l-sm relative focus:z-10"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "grid grid-cols-12 gap-x-6">
                    <div className = "col-span-12 md:col-span-6 xxl:!col-span-3">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Leading Icon</h5>
                            </div>
                            <div className = "box-body">
                                <div>
                                    <label htmlFor="hs-leading-icon" className = "ti-form-label">Email address</label>
                                    <div className = "relative">
                                      <input type="text" id="hs-leading-icon" name="hs-leading-icon" className = "ti-form-input ltr:pl-11 rtl:pr-11 focus:z-10" placeholder="you@site.com"/>
                                      <div className = "absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center pointer-events-none z-20 ltr:pl-4 rtl:pr-4">
                                        <svg className = "h-4 w-4 text-gray-500 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                        </svg>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 md:col-span-6 xxl:!col-span-3">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Trailing Icon</h5>
                            </div>
                            <div className = "box-body">
                                <div>
                                    <label htmlFor="hs-trailing-icon" className = "ti-form-label">Card number</label>
                                    <div className = "relative">
                                      <input type="text" id="hs-trailing-icon" name="hs-trailing-icon" className = "ti-form-input  ltr:pr-11 rtl:pl-11 focus:z-10" placeholder="xxxx-xxxx-xxxx-xxxx"/>
                                      <div className = "absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none z-20 ltr:pr-4 rtl:pl-4">
                                        <svg className = "h-4 w-4 text-gray-500 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                          <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"/>
                                          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z"/>
                                        </svg>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 md:col-span-6 xxl:!col-span-3">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Leading And Trailing Icon</h5>
                            </div>
                            <div className = "box-body">
                                <div>
                                    <label htmlFor="hs-input-with-leading-and-trailing-icon" className = "ti-form-label">Price</label>
                                    <div className = "relative">
                                      <input type="text" id="hs-input-with-leading-and-trailing-icon" name="hs-input-with-leading-and-trailing-icon" className = "ti-form-input ltr:pl-9 ltr:pr-16 rtl:pr-9 rtl:pl-16 focus:z-10" placeholder="0.00"/>
                                      <div className = "absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center pointer-events-none z-20 ltr:pl-4 rtl:pr-4">
                                        <span className = "text-gray-500 dark:text-white/70">$</span>
                                      </div>
                                      <div className = "absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none z-20 ltr:pr-4 rtl:pl-4">
                                        <span className = "text-gray-500 dark:text-white/70">USD</span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 md:col-span-6 xxl:!col-span-3">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Add-On</h5>
                            </div>
                            <div className = "box-body">
                                <div>
                                    <label htmlFor="hs-input-with-add-on-url" className = "block text-sm text-gray-700 font-medium dark:text-white">Website URL</label>
                                    <div className = "flex rounded-sm">
                                      <div className = "px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                        <span className = "text-sm text-gray-500 dark:text-white/70">http://</span>
                                      </div>
                                      <input type="text" name="hs-input-with-add-on-url" id="hs-input-with-add-on-url" className = "ti-form-input rounded-none  ltr:pr-11 rtl:pl-11 ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10" placeholder="www.example.com"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "grid grid-cols-12 gap-x-6">
                    <div className = "col-span-12 md:col-span-6 xxl:!col-span-3">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Inline Add-On</h5>
                            </div>
                            <div className = "box-body">
                                <div>
                                    <label htmlFor="hs-inline-add-on" className = "ti-form-label">Website URL</label>
                                    <div className = "relative">
                                      <input type="text" id="hs-inline-add-on" name="hs-inline-add-on" className = "ti-form-input ltr:pl-16 rtl:pr-16 focus:z-10" placeholder="www.example.com"/>
                                      <div className = "absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center pointer-events-none z-20 ltr:pl-4 rtl:pr-4">
                                        <span className = "text-sm text-gray-500 dark:text-white/70">http://</span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 md:col-span-6 xxl:!col-span-3 leading_select">
                        <div className = "box inline-leading-select">
                            <div className = "box-header">
                                <h5 className = "box-title">Inline Leading Select</h5>
                            </div>
                            <div className = "box-body">
                                <div>
                                    <label htmlFor="hs-inline-leading-select-label" className = "ti-form-label">Phone number</label>
                                    <div className = "relative">
                                      <input type="text" id="hs-inline-leading-select-label" className = "ti-form-input ltr:pl-[7rem] rtl:pr-[7rem] focus:z-10" placeholder="+1 (000) 000-0000"/>
                                      <div className = "absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center text-gray-500 dark:text-white/70 ltr:pl-px rtl:pr-px">
                                        <label htmlFor="hs-inline-leading-select-country" className = "sr-only">Country</label>
                                        <Select className = "block w-full border-transparent rounded-sm focus:ring-primary focus:border-primary dark:bg-bgdark" options={InlineData} classNamePrefix='react-select' />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 md:col-span-6 xxl:!col-span-3">
                        <div className = "box inline-leading-select">
                            <div className = "box-header">
                                <h5 className = "box-title">Inline Leading Add-On And Trailing Select</h5>InlineAddonData
                            </div>
                            <div className = "box-body">
                                <div>
                                    <label htmlFor="hs-inline-leading-pricing-select-label" className = "ti-form-label">Price</label>
                                    <div className = "relative">
                                      <input type="text" id="hs-inline-leading-pricing-select-label" className = "ti-form-input ltr:pl-9 rtl:pr-9 ltr:pr-20 rtl:pl-20 focus:z-10" placeholder="0.00"/>
                                      <div className = "absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center pointer-events-none z-20 ltr:pl-4 rtl:pr-4">
                                        <span className = "text-gray-500 dark:text-white/70">$</span>
                                      </div>
                                      <div className = "absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center text-gray-500 dark:text-white/70 ltr:pr-px rtl:pl-px">
                                        <label htmlFor="hs-inline-leading-select-currency" className = "sr-only">Currency</label>
                                        
                                        <Select className = "block w-full border-transparent rounded-sm focus:ring-primary focus:border-primary dark:bg-bgdark" options={InlineAddonData} classNamePrefix='react-select' />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 md:col-span-6 xxl:!col-span-3">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Checkbox and radios</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "space-y-3">
                                    <div>
                                        <div className = "flex rounded-sm">
                                          <span className = "px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-white/70">
                                            <span className = "flex">
                                              <input type="checkbox" className = "ti-form-checkbox" id="hs-input-group-with-checkbox"/>
                                              <label htmlFor="hs-input-group-with-checkbox" className = "sr-only">Checkbox</label>
                                            </span>
                                          </span>
                                          <input type="text" name="hs-input-with-add-on-url-checkbox" id="hs-input-with-add-on-url-checkbox" className = "ti-form-input rounded-none ltr:pr-11 rtl:pl-11 ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10" placeholder="Checkbox"/>
                                        </div>
                                    </div>

                                    <div>
                                        <div className = "flex rounded-sm">
                                          <span className = "px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-white/70">
                                            <span className = "flex">
                                              <input type="radio" className = "ti-form-radio" id="hs-input-group-with-radio"/>
                                              <label htmlFor="hs-input-group-with-radio" className = "sr-only">Radio</label>
                                            </span>
                                          </span>
                                          <input type="text" name="hs-input-with-add-on-url-radio" id="hs-input-with-add-on-url-radio" className = "ti-form-input rounded-none ltr:pr-11 rtl:pl-11 ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10" placeholder="Radio"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 md:col-span-6 xxl:!col-span-3">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Multiple Add-On</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "space-y-3">
                                    <div>
                                      <label htmlFor="hs-leading-multiple-add-on" className = "sr-only">Multiple add-on</label>
                                      <div className = "flex rounded-sm">
                                        <div className = "px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                          <span className = "text-sm text-gray-500 dark:text-white/70">$</span>
                                        </div>
                                        <div className = "px-4 inline-flex items-center min-w-fit border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                          <span className = "text-sm text-gray-500 dark:text-white/70">0.00</span>
                                        </div>
                                        <input type="text" id="hs-leading-multiple-add-on" className = " ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" placeholder="www.example.com"/>
                                      </div>
                                    </div>

                                    <div>
                                      <label htmlFor="hs-trailing-multiple-add-on" className = "sr-only">Multiple add-on</label>
                                      <div className = "flex rounded-sm">
                                        <input type="text" id="hs-trailing-multiple-add-on" className = "ti-form-input ltr:rounded-r-none rtl:rounded-l-none focus:z-10" placeholder="www.example.com"/>
                                        <div className = "px-4 inline-flex items-center min-w-fit border ltr:border-l-0 rtl:border-r-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                          <span className = "text-sm text-gray-500 dark:text-white/70">$</span>
                                        </div>
                                        <div className = "px-4 inline-flex items-center min-w-fit ltr:rounded-r-sm rtl:rounded-l-sm border ltr:border-l-0 rtl:border-r-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                          <span className = "text-sm text-gray-500 dark:text-white/70">0.00</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 md:col-span-6 xxl:!col-span-3">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Trailing Button Add-Ons</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "space-y-3">
                                    <div>
                                        <label htmlFor="hs-trailing-button-add-on-with-icon" className = "sr-only">Label</label>
                                        <div className = "flex rounded-sm">
                                          <input type="text" id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" className = "ti-form-input rounded-none ltr:rounded-l-sm rtl:rounded-r-sm focus:z-10"/>
                                          <button aria-label="button" type="button" className = "inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                            <svg className = "h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                          </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="hs-trailing-button-add-on-with-leading-and-trailing" className = "sr-only">Label</label>
                                        <div className = "flex rounded-sm">
                                          <span className = "px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 text-sm dark:bg-black/20 dark:border-white/10">
                                            <span className = "text-sm text-gray-500 dark:text-white/70">http://</span>
                                          </span>
                                          <input type="text" id="hs-trailing-button-add-on-with-leading-and-trailing" name="hs-trailing-button-add-on-with-leading-and-trailing" className = "ti-form-input rounded-none focus:z-10"/>
                                          <button aria-label="button" type="button" className = "inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                            <svg className = "h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                          </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="hs-trailing-button-add-on-with-icon-and-button" className = "sr-only">Label</label>
                                        <div className = "relative flex rounded-sm">
                                            <input type="text" id="hs-trailing-button-add-on-with-icon-and-button" name="hs-trailing-button-add-on-with-icon-and-button" className = "ti-form-input ltr:pl-11 rtl:pr-11 rounded-none ltr:rounded-l-sm rtl:rounded-r-sm focus:z-10"/>
                                            <div className = "absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center pointer-events-none z-20 ltr:pl-4 rtl:pr-4">
                                            <svg className = "h-4 w-4 text-gray-500 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                            </div>
                                            <button type="button" className = "py-2 px-3 inline-flex flex-shrink-0 justify-center items-center ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">Search</button>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="hs-trailing-button-add-on" className = "sr-only">Label</label>
                                        <div className = "flex rounded-sm">
                                            <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" className = "ti-form-input rounded-none ltr:rounded-l-sm rtl:rounded-r-sm focus:z-10"/>
                                            <button type="button" className = "py-2 px-3 inline-flex flex-shrink-0 justify-center items-center gap-2 ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                            Button
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="hs-trailing-button-add-on-multiple-add-ons" className = "sr-only">Label</label>
                                        <div className = "flex rounded-sm">
                                            <input type="text" id="hs-trailing-button-add-on-multiple-add-ons" name="hs-trailing-button-add-on-multiple-add-ons" className = "ti-form-input rounded-none ltr:rounded-l-sm rtl:rounded-r-sm focus:z-10"/>
                                            <button type="button" className = "ltr:-ml-px rtl:-mr-px py-2 px-3 inline-flex justify-center items-center gap-2 border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white">
                                            Button
                                            </button>
                                            <button type="button" className = "py-2 px-3 inline-flex flex-shrink-0 justify-center items-center gap-2 ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                            Button
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 md:col-span-6 xxl:!col-span-3">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Leading Button Add-Ons</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "space-y-3">
                                    <div>
                                        <label htmlFor="hs-leading-button-add-on-with-icon" className = "sr-only">Label</label>
                                        <div className = "flex rounded-sm">
                                          <button aria-label="button" type="button" className = "inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                            <svg className = "h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                          </button>
                                          <input type="text" id="hs-leading-button-add-on-with-icon" name="hs-leading-button-add-on-with-icon" className = "ti-form-input rounded-none ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10"/>
                                        </div>
                                      </div>

                                      <div>
                                        <label htmlFor="hs-leading-button-add-on-with-leading-and-leading" className = "sr-only">Label</label>
                                        <div className = "flex rounded-sm">
                                          <button aria-label="button" type="button" className = "inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                            <svg className = "h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                          </button>
                                          <input type="text" id="hs-leading-button-add-on-with-leading-and-leading" name="hs-leading-button-add-on-with-leading-and-leading" className = "ti-form-input rounded-none focus:z-10"/>
                                          <span className = "px-4 inline-flex items-center min-w-fit ltr:rounded-r-sm rtl:rounded-l-sm border ltr:border-l-0 rtl:border-r-0 border-gray-200 bg-gray-50 text-sm dark:bg-black/20 dark:border-white/10">
                                            <span className = "text-sm text-gray-500 dark:text-white/70">http://</span>
                                          </span>
                                        </div>
                                      </div>

                                      <div>
                                        <label htmlFor="hs-leading-button-add-on-with-icon-and-button" className = "sr-only">Label</label>
                                        <div className = "relative flex rounded-sm">
                                          <button type="button" className = "py-2 px-3 inline-flex flex-shrink-0 justify-center items-center ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">Search</button>
                                          <input type="text" id="hs-leading-button-add-on-with-icon-and-button" name="hs-leading-button-add-on-with-icon-and-button" className = "ti-form-input ltr:pr-11 rtl:pl-11 rounded-none ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10"/>
                                          <div className = "absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none z-20 ltr:pr-4 rtl:pl-4">
                                            <svg className = "h-4 w-4 text-gray-500 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>

                                      <div>
                                        <label htmlFor="hs-leading-button-add-on" className = "sr-only">Label</label>
                                        <div className = "flex rounded-sm">
                                          <button type="button" className = "py-2 px-3 inline-flex flex-shrink-0 justify-center items-center gap-2 ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                            Button
                                          </button>
                                          <input type="text" id="hs-leading-button-add-on" name="hs-leading-button-add-on" className = "ti-form-input rounded-none ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10"/>
                                        </div>
                                      </div>

                                      <div>
                                        <label htmlFor="hs-leading-button-add-on-multiple-add-ons" className = "sr-only">Label</label>
                                        <div className = "flex rounded-sm">
                                          <button type="button" className = "py-2 px-3 inline-flex flex-shrink-0 justify-center items-center gap-2 ltr:rounded-l-sm rtl:rounded-r-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                            Button
                                          </button>
                                          <button type="button" className = "border-x-0 -mr-px py-2 px-3 inline-flex justify-center items-center gap-2 border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white">
                                            Button
                                          </button>
                                          <input type="text" id="hs-leading-button-add-on-multiple-add-ons" name="hs-leading-button-add-on-multiple-add-ons" className = "ti-form-input rounded-none ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10"/>
                                        </div>
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 md:col-span-6 xxl:!col-span-3">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Search Box With Loading</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "space-y-3">
                                    <div>
                                        <label htmlFor="hs-search-box-with-loading-1" className = "ti-form-label">Search</label>
                                        <div className = "relative">
                                          <input type="text" id="hs-search-box-with-loading-1" name="hs-search-box-with-loading-1" className = "ti-form-input ltr:pl-11 rtl:pr-11 focus:z-10" placeholder="Input search"/>
                                          <div className = "absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center pointer-events-none ltr:pl-4 rtl:pr-4">
                                            <div className = "animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-primary rounded-full" role="status" aria-label="loading">
                                              <span className = "sr-only">Loading...</span>
                                            </div>
                                          </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="hs-search-box-with-loading-2" className = "ti-form-label">Search</label>
                                        <div className = "flex rounded-sm">
                                          <input type="text" id="hs-search-box-with-loading-2" name="hs-search-box-with-loading-2" className = "ti-form-input rounded-none ltr:rounded-l-sm rtl:rounded-r-sm focus:z-10" placeholder="Input search"/>
                                          <button type="button" className = "inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                            <span className = "animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
                                              <span className = "sr-only">Loading...</span>
                                            </span>
                                          </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="hs-search-box-with-loading-3" className = "ti-form-label">Search</label>
                                        <div className = "flex rounded-sm">
                                          <span className = "px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-black/20 dark:border-white/10 dark:text-white/70">http://</span>
                                          <input type="text" id="hs-search-box-with-loading-3" name="hs-search-box-with-loading-3" className = "ti-form-input rounded-none focus:z-10" placeholder="Input search"/>
                                          <button type="button" className = "inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                            <span className = "animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
                                              <span className = "sr-only">Loading...</span>
                                            </span>
                                          </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="hs-search-box-with-loading-4" className = "ti-form-label">Search</label>
                                        <div className = "flex rounded-sm">
                                          <input type="text" id="hs-search-box-with-loading-4" name="hs-search-box-with-loading-4" className = "ti-form-input rounded-none ltr:rounded-l-sm rtl:rounded-r-sm focus:z-10" placeholder="Input search"/>
                                          <button type="button" className = "py-2 px-3 inline-flex flex-shrink-0 justify-center items-center gap-2 ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                            <span className = "animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
                                              <span className = "sr-only">Loading...</span>
                                            </span>
                                            Search
                                          </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="hs-search-box-with-loading-5" className = "ti-form-label">Search</label>
                                        <div className = "relative flex rounded-sm">
                                          <input type="text" id="hs-search-box-with-loading-5" name="hs-search-box-with-loading-5" className = "rounded-none ti-form-input ltr:pl-11 rtl:pr-11 ltr:rounded-l-sm rtl:rounded-r-sm" placeholder="Input search"/>
                                          <div className = "absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center pointer-events-none ltr:pl-4 rtl:pr-4">
                                            <svg className = "h-4 w-4 text-gray-500 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                          </div>
                                          <button type="button" className = "py-2 px-3 inline-flex flex-shrink-0 justify-center items-center gap-2 ltr:rounded-r-sm rtl:rounded-l-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm">
                                            <span className = "animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
                                              <span className = "sr-only">Loading...</span>
                                            </span>
                                            Search
                                          </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
  )
}
export default Forminputgroup;