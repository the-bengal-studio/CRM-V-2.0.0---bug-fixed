import React from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';

const Formswitch = () => {
  return (
    <div>

			<PageHeader currentpage="Form Switch" activepage="Forms" mainpage="Form Switch" />

                <div className = "grid grid-cols-12 gap-6">
                  <div className = "col-span-12 lg:col-span-6">
                      <div className = "box">
                          <div className = "box-header">
                              <h5 className = "box-title">Default Toggle Switch</h5>
                          </div>
                          <div className = "box-body">
                            <input type="checkbox" id="hs-basic-usage" className = "ti-switch"/>
                            <label htmlFor="hs-basic-usage" className = "sr-only">Toggle switch</label>
                          </div>
                      </div>
                  </div>
                  <div className = "col-span-12 lg:col-span-6">
                      <div className = "box">
                          <div className = "box-header">
                              <h5 className = "box-title">Toggle Switch With Tooltip</h5>
                          </div>
                          <div className = "box-body">
                            <div className = "hs-tooltip flex items-center">
                              <input type="checkbox" id="hs-tooltip-example" className = "hs-tooltip-toggle ti-switch shrink-0"/>
                              <label htmlFor="hs-tooltip-example" className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Allow push notifications</label>
                              <div className = "hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-sm shadow-sm dark:bg-slate-700" role="tooltip">
                                Enable push notifications
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>

                <div className = "grid grid-cols-12 gap-6">
                  <div className = "col-span-12 lg:col-span-6">
                      <div className = "box">
                          <div className = "box-header">
                              <h5 className = "box-title">Toggle Switch With Description</h5>
                          </div>
                          <div className = "box-body">
                            <div className = "space-y-4">
                              <div className = "flex items-center">
                                <input type="checkbox" id="hs-basic-with-description-unchecked" className = "ti-switch"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Unchecked</label>
                              </div>

                              <div className = "flex items-center">
                                <input type="checkbox" id="hs-basic-with-description-checked" className = "ti-switch" defaultChecked/>
                                <label htmlFor="hs-basic-with-description-checked" className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Checked</label>
                              </div>

                              <div className = "flex items-center">
                                <label className = "text-sm text-gray-500 ltr:mr-3 rtl:ml-3 dark:text-white/70">On</label>
                                <input type="checkbox" id="hs-basic-with-description" className = "ti-switch"/>
                                <label className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Off</label>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className = "col-span-12 lg:col-span-6">
                      <div className = "box">
                          <div className = "box-header">
                              <h5 className = "box-title">Disabled Toggle Switch</h5>
                          </div>
                          <div className = "box-body">
                            <div className = "space-y-4">
                              <div className = "flex items-center opacity-70">
                                <input type="checkbox" id="hs-basic-disabled-with-description-unchecked" className = "ti-switch shrink-0 pointer-events-none" disabled/>
                                <label htmlFor="hs-basic-disabled-with-description-unchecked" className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Unchecked</label>
                              </div>

                              <div className = "flex items-center opacity-70">
                                <input type="checkbox" id="hs-basic-disabled-with-description-checked" className = "ti-switch shrink-0 pointer-events-none" checked disabled/>
                                <label htmlFor="hs-basic-disabled-with-description-checked" className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Checked</label>
                              </div>

                              <div className = "flex items-center opacity-70">
                                <label className = "text-sm text-gray-500 ltr:mr-3 rtl:ml-3 dark:text-white/70">On</label>
                                <input type="checkbox" id="hs-basic-disabled-with-description" className = "ti-switch shrink-0 pointer-events-none" disabled/>
                                <label className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Off</label>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>

                <div className = "grid grid-cols-12 gap-6">
                  <div className = "col-span-12 lg:col-span-6">
                      <div className = "box">
                          <div className = "box-header">
                              <h5 className = "box-title">Toggle Switch With Sizes</h5>
                          </div>
                          <div className = "box-body">
                            <div className = "space-y-4">
                              <div className = "flex items-center">
                                <input type="checkbox" id="hs-small-switch" className = "ti-switch shrink-0 w-11 h-6 before:w-5 before:h-5"/>
                                <label htmlFor="hs-small-switch" className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Small</label>
                              </div>

                              <div className = "flex items-center">
                                <input type="checkbox" id="hs-medium-switch" className = "ti-switch shrink-0"/>
                                <label htmlFor="hs-medium-switch" className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Medium</label>
                              </div>

                              <div className = "flex items-center">
                                <input type="checkbox" id="hs-large-switch" className = "ti-switch shrink-0 w-[4.25rem] h-9 before:w-8 before:h-8"/>
                                <label htmlFor="hs-large-switch" className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Large</label>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className = "col-span-12 lg:col-span-6">
                      <div className = "box">
                          <div className = "box-header">
                              <h5 className = "box-title">Toggle Switch Validation States</h5>
                          </div>
                          <div className = "box-body">
                            <div className = "space-y-4">
                              <div className = "flex items-center">
                                <input type="checkbox" id="hs-valid-toggle-switch" className = "ti-switch shrink-0 checked:bg-none checked:bg-green-600 checked:hover:bg-green-600 checked:focus:bg-green-600 focus:border-green-600 focus:ring-green-600 dark:checked:bg-green-600 checked:before:bg-green-200 dark:checked:before:bg-green-200" defaultChecked/>
                                <label htmlFor="hs-valid-toggle-switch" className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Valid toggle switch</label>
                              </div>

                              <div className = "flex items-center">
                                <input type="checkbox" id="hs-invalid-toggle-switch" className = "ti-switch shrink-0 checked:bg-none checked:bg-red-600 checked:hover:bg-red-600 checked:focus:bg-red-600 focus:border-red-600 focus:ring-red-600 dark:checked:bg-red-600 checked:before:bg-red-200 dark:checked:before:bg-red-200" defaultChecked/>
                                <label htmlFor="hs-invalid-toggle-switch" className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Invalid toggle switch</label>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>

    </div>
  )
}
export default Formswitch;