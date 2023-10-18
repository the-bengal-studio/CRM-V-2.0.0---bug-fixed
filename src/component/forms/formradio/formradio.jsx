import React from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';

const Formradio = () => {
  return (
    <div>

                <PageHeader currentpage="Radio" activepage="Forms" mainpage="Radio" />        

                <div className = "grid grid-cols-12 gap-x-6">
                  <div className = "col-span-12  md:col-span-6 xl:!col-span-4">
                      <div className = "box">
                          <div className = "box-header">
                              <h5 className = "box-title">Default Radio</h5>
                          </div>
                          <div className = "box-body">
                              <div className = "space-y-2">
                                  <div className = "flex">
                                    <input type="radio" name="hs-default-radio" className = "ti-form-radio pointer-events-none" id="hs-default-radio"/>
                                    <label htmlFor="hs-default-radio" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Default radio</label>
                                  </div>

                                  <div className = "flex">
                                    <input type="radio" name="hs-default-radio" className = "ti-form-radio pointer-events-none" id="hs-checked-radio" defaultChecked/>
                                    <label htmlFor="hs-checked-radio" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Checked radio</label>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className = "col-span-12  md:col-span-6 xl:!col-span-4">
                      <div className = "box">
                          <div className = "box-header">
                              <h5 className = "box-title">Disabled Radio</h5>
                          </div>
                          <div className = "box-body">
                              <div className = "space-y-2">
                                  <div className = "flex opacity-40">
                                    <input type="radio" name="hs-disabled-radio" className = "ti-form-radio" id="hs-disabled-radio" disabled/>
                                    <label htmlFor="hs-disabled-radio" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Disabled radio</label>
                                  </div>

                                  <div className = "flex opacity-40">
                                    <input type="radio" name="hs-disabled-radio" className = "ti-form-radio" id="hs-disabled-checked-radio" checked disabled/>
                                    <label htmlFor="hs-disabled-checked-radio" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Disabled checked radio</label>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className = "col-span-12 xl:col-span-4">
                      <div className = "box">
                          <div className = "box-header">
                              <h5 className = "box-title">Inline Radio Group</h5>
                          </div>
                          <div className = "box-body">
                            <div className = "flex gap-x-6">
                              <div className = "flex">
                                <input type="radio" name="hs-radio-group" className = "ti-form-radio" id="hs-radio-group-1" defaultChecked/>
                                <label htmlFor="hs-radio-group-1" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Apple</label>
                              </div>

                              <div className = "flex">
                                <input type="radio" name="hs-radio-group" className = "ti-form-radio" id="hs-radio-group-2"/>
                                <label htmlFor="hs-radio-group-2" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Pear</label>
                              </div>

                              <div className = "flex">
                                <input type="radio" name="hs-radio-group" className = "ti-form-radio" id="hs-radio-group-3"/>
                                <label htmlFor="hs-radio-group-3" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Orange</label>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>

                <div className = "grid grid-cols-12 gap-x-6">
                  <div className = "col-span-12 lg:col-span-4">
                      <div className = "box">
                          <div className = "box-header">
                              <h5 className = "box-title">Vertical Radio Group</h5>
                          </div>
                          <div className = "box-body">
                            <div className = "flex flex-col gap-y-3">
                              <div className = "flex">
                                <input type="radio" name="hs-radio-vertical-group" className = "ti-form-radio" id="hs-radio-vertical-group-1" defaultChecked/>
                                <label htmlFor="hs-radio-vertical-group-1" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Apple</label>
                              </div>

                              <div className = "flex">
                                <input type="radio" name="hs-radio-vertical-group" className = "ti-form-radio" id="hs-radio-vertical-group-2"/>
                                <label htmlFor="hs-radio-vertical-group-2" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Pear</label>
                              </div>

                              <div className = "flex">
                                <input type="radio" name="hs-radio-vertical-group" className = "ti-form-radio" id="hs-radio-vertical-group-3"/>
                                <label htmlFor="hs-radio-vertical-group-3" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Orange</label>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className = "col-span-12 lg:col-span-4">
                    <div className = "box">
                      <div className = "box-header">
                          <h5 className = "box-title">List With Description</h5>
                      </div>
                      <div className = "box-body">
                        <div className = "grid space-y-3">
                          <div className = "relative flex items-start">
                            <div className = "flex items-center h-5 mt-1">
                              <input id="hs-radio-delete" name="hs-radio-with-description" type="radio" className = "ti-form-radio" aria-describedby="hs-radio-delete-description" defaultChecked/>
                            </div>
                            <label htmlFor="hs-radio-delete" className = "ltr:ml-2 rtl:mr-2">
                              <span className = "block text-sm font-semibold text-gray-800 dark:text-white">Delete</span>
                              <span id="hs-radio-delete-description" className = "block text-sm text-gray-600 dark:text-white/70">Notify me when this action happens.</span>
                            </label>
                          </div>

                          <div className = "relative flex items-start">
                            <div className = "flex items-center h-5 mt-1">
                              <input id="hs-radio-archive" name="hs-radio-with-description" type="radio" className = "ti-form-radio" aria-describedby="hs-radio-archive-description"/>
                            </div>
                            <label htmlFor="hs-radio-archive" className = "ltr:ml-2 rtl:mr-2">
                              <span className = "block text-sm font-semibold text-gray-800 dark:text-white">Archive</span>
                              <span id="hs-radio-archive-description" className = "block text-sm text-gray-600 dark:text-white/70">Notify me when this action happens.</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className = "col-span-12 lg:col-span-4">
                    <div className = "box">
                      <div className = "box-header">
                          <h5 className = "box-title">Vertical Radio Within Form Input</h5>
                      </div>
                      <div className = "box-body">
                        <div className = "grid space-y-2">
                          <label className = "max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                            <input type="radio" name="hs-vertical-radio-in-form" className = "ti-form-radio pointer-events-none" id="hs-vertical-radio-in-form"/>
                            <span className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Default radio</span>
                          </label>

                          <label className = "max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                            <input type="radio" name="hs-vertical-radio-in-form" className = "ti-form-radio pointer-events-none" id="hs-vertical-radio-checked-in-form" defaultChecked/>
                            <span className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Checked radio</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className = "grid grid-cols-12 gap-x-6">
                  <div className = "col-span-12 lg:col-span-6">
                    <div className = "box">
                      <div className = "box-header">
                          <h5 className = "box-title">Radio Within Form Input</h5>
                      </div>
                      <div className = "box-body">
                        <div className = "grid sm:grid-cols-2 gap-2">
                          <label className = "flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                            <input type="radio" name="hs-radio-in-form" className = "ti-form-radio" id="hs-radio-in-form"/>
                            <span className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Default radio</span>
                          </label>

                          <label className = "flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                            <input type="radio" name="hs-radio-in-form" className = "ti-form-radio" id="hs-radio-checked-in-form" defaultChecked/>
                            <span className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Checked radio</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className = "col-span-12 lg:col-span-6">
                    <div className = "box">
                      <div className = "box-header">
                          <h5 className = "box-title">Radio On Right Within Form Input</h5>
                      </div>
                      <div className = "box-body">
                        <div className = "grid sm:grid-cols-2 gap-2">
                          <label className = "flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                            <span className = "text-sm text-gray-500 dark:text-white/70">Default radio</span>
                            <input type="radio" name="hs-radio-on-right" className = "ti-form-radio pointer-events-none ltr:ml-auto rtl:mr-auto" id="hs-radio-on-right"/>
                          </label>

                          <label className = "flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                            <span className = "text-sm text-gray-500 dark:text-white/70">Checked radio</span>
                            <input type="radio" name="hs-radio-on-right" className = "ti-form-radio pointer-events-none ltr:ml-auto rtl:mr-auto" id="hs-radioradio-on-right" defaultChecked/>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className = "grid grid-cols-12 gap-x-6">
                  <div className = "col-span-12 lg:col-span-6">
                    <div className = "box">
                      <div className = "box-header">
                          <h5 className = "box-title">Radio With Listgroup</h5>
                      </div>
                      <div className = "box-body">
                        <ul className = "flex flex-col">
                          <li className = "ti-list-group bg-white border text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                            <div className = "relative flex items-start w-full">
                              <div className = "flex items-center h-5">
                                <input id="hs-list-group-item-radio-1" name="hs-list-group-item-radio" type="radio" className = "ti-form-radio" defaultChecked/>
                              </div>
                              <label htmlFor="hs-list-group-item-radio-1" className = "ltr:ml-2 rtl:mr-2 block w-full text-sm text-gray-600 dark:text-white/70">
                                Chris Lynch
                              </label>
                            </div>
                          </li>

                          <li className = "ti-list-group bg-white border text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                            <div className = "relative flex items-start w-full">
                              <div className = "flex items-center h-5">
                                <input id="hs-list-group-item-radio-2" name="hs-list-group-item-radio" type="radio" className = "ti-form-radio"/>
                              </div>
                              <label htmlFor="hs-list-group-item-radio-2" className = "ltr:ml-2 rtl:mr-2 block w-full text-sm text-gray-600 dark:text-white/70">
                                Maria Guan
                              </label>
                            </div>
                          </li>

                          <li className = "ti-list-group bg-white border text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                            <div className = "relative flex items-start w-full">
                              <div className = "flex items-center h-5">
                                <input id="hs-list-group-item-radio-3" name="hs-list-group-item-radio" type="radio" className = "ti-form-radio"/>
                              </div>
                              <label htmlFor="hs-list-group-item-radio-3" className = "ltr:ml-2 rtl:mr-2 block w-full text-sm text-gray-600 dark:text-white/70">
                                Bob Arum
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className = "col-span-12 lg:col-span-6">
                    <div className = "box">
                      <div className = "box-header">
                          <h5 className = "box-title">Radio With Listgroup</h5>
                      </div>
                      <div className = "box-body">
                        <ul className = "flex flex-col sm:flex-row">
                          <li className = "ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                            <div className = "relative flex items-start w-full">
                              <div className = "flex items-center h-5">
                                <input id="hs-horizontal-list-group-item-radio-1" name="hs-horizontal-list-group-item-radio" type="radio" className = "ti-form-radio" defaultChecked/>
                              </div>
                              <label htmlFor="hs-horizontal-list-group-item-radio-1" className = "ltr:ml-2 rtl:mr-2 block w-full text-sm text-gray-600 dark:text-white/70">
                                Chris Lynch
                              </label>
                            </div>
                          </li>

                          <li className = "ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                            <div className = "relative flex items-start w-full">
                              <div className = "flex items-center h-5">
                                <input id="hs-horizontal-list-group-item-radio-2" name="hs-horizontal-list-group-item-radio" type="radio" className = "ti-form-radio"/>
                              </div>
                              <label htmlFor="hs-horizontal-list-group-item-radio-2" className = "ltr:ml-2 rtl:mr-2 block w-full text-sm text-gray-600 dark:text-white/70">
                                Maria Guan
                              </label>
                            </div>
                          </li>

                          <li className = "ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                            <div className = "relative flex items-start w-full">
                              <div className = "flex items-center h-5">
                                <input id="hs-horizontal-list-group-item-radio-3" name="hs-horizontal-list-group-item-radio" type="radio" className = "ti-form-radio"/>
                              </div>
                              <label htmlFor="hs-horizontal-list-group-item-radio-3" className = "ltr:ml-2 rtl:mr-2 block w-full text-sm text-gray-600 dark:text-white/70">
                                Bob Arum
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

    </div>
  )
}
export default Formradio;