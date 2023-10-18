import React from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';

const Formcheckbox = () => {
  return (
    <div>

                <PageHeader currentpage="CheckBox" activepage="Forms" mainpage="CheckBox" />        

                <div className = "grid grid-cols-12 gap-x-6">
                    <div className = "col-span-12 md:col-span-6 xl:!col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Default Checkbox</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "space-y-2">
                                    <div className = "flex">
                                      <input type="checkbox" className = "ti-form-checkbox mt-0.5 pointer-events-none" id="hs-default-checkbox"/>
                                      <label htmlFor="hs-default-checkbox" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Default checkbox</label>
                                    </div>

                                    <div className = "flex">
                                      <input type="checkbox" className = "ti-form-checkbox mt-0.5 pointer-events-none" id="hs-checked-checkbox" defaultChecked/>
                                      <label htmlFor="hs-checked-checkbox" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Checked checkbox</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 md:col-span-6 xl:!col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Disabled Checkbox</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "space-y-2">
                                    <div className = "flex opacity-40">
                                        <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-disabled-checkbox" disabled/>
                                        <label htmlFor="hs-disabled-checkbox" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Disabled checkbox</label>
                                    </div>

                                    <div className = "flex opacity-40">
                                        <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-disabled-checked-checkbox" checked disabled/>
                                        <label htmlFor="hs-disabled-checked-checkbox" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Disabled checked checkbox</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 xl:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Checkbox group</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "space-y-2">
                                    <div className = "flex gap-x-6">
                                        <div className = "flex">
                                          <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-checkbox-group-1"/>
                                          <label htmlFor="hs-checkbox-group-1" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Apple</label>
                                        </div>

                                        <div className = "flex">
                                          <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-checkbox-group-2"/>
                                          <label htmlFor="hs-checkbox-group-2" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Pear</label>
                                        </div>

                                        <div className = "flex">
                                          <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-checkbox-group-3"/>
                                          <label htmlFor="hs-checkbox-group-3" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Orange</label>
                                        </div>
                                    </div>

                                    <div className = "flex gap-x-6">
                                        <div className = "flex">
                                          <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-checkbox-group-4" defaultChecked/>
                                          <label htmlFor="hs-checkbox-group-4" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Apple</label>
                                        </div>

                                        <div className = "flex">
                                          <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-checkbox-group-5" defaultChecked/>
                                          <label htmlFor="hs-checkbox-group-5" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Pear</label>
                                        </div>

                                        <div className = "flex">
                                          <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-checkbox-group-6" defaultChecked/>
                                          <label htmlFor="hs-checkbox-group-6" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Orange</label>
                                        </div>
                                    </div>

                                    <div className = "flex gap-x-6">
                                        <div className = "flex opacity-40">
                                          <input type="checkbox" className = "ti-form-checkbox mt-0.5 pointer-events-none" id="hs-checkbox-group-7" checked disabled/>
                                          <label htmlFor="hs-checkbox-group-7" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Apple</label>
                                        </div>

                                        <div className = "flex opacity-40">
                                          <input type="checkbox" className = "ti-form-checkbox mt-0.5 pointer-events-none" id="hs-checkbox-group-8" disabled/>
                                          <label htmlFor="hs-checkbox-group-8" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Pear</label>
                                        </div>

                                        <div className = "flex opacity-40">
                                          <input type="checkbox" className = "ti-form-checkbox mt-0.5 pointer-events-none" id="hs-checkbox-group-9" disabled/>
                                          <label htmlFor="hs-checkbox-group-9" className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Orange</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "grid grid-cols-12 gap-x-6">
                    <div className = "col-span-12 lg:col-span-6">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Checkbox Within Form Input</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "grid sm:grid-cols-2 gap-2">
                                    <label className = "p-3 flex w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                                      <input type="checkbox" className = "ti-form-checkbox mt-0.5 pointer-events-none" id="hs-checkbox-in-form"/>
                                      <span className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Default checkbox</span>
                                    </label>

                                    <label className = "p-3 flex w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                                      <input type="checkbox" className = "ti-form-checkbox mt-0.5 pointer-events-none" id="hs-checkbox-checked-in-form" defaultChecked/>
                                      <span className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Checked checkbox</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-6">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Chexbox With List Group On Right</h5>
                            </div>
                            <div className = "box-body">
                              <div className = "grid sm:grid-cols-2 gap-2">
                                <label className = "flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                                  <span className = "text-sm text-gray-500 dark:text-white/70">Default checkbox</span>
                                  <input type="checkbox" className = "ti-form-checkbox ltr:ml-auto rtl:mr-auto mt-0.5 pointer-events-none" id="hs-checkbox-on-right"/>
                                </label>

                                <label className = "flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                                  <span className = "text-sm text-gray-500 dark:text-white/70">Checked checkbox</span>
                                  <input type="checkbox" className = "ti-form-checkbox ltr:ml-auto rtl:mr-auto mt-0.5 pointer-events-none" id="hs-checkbox-checkbox-on-right" defaultChecked/>
                                </label>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-6">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Checkbox Within Vertical Form Input</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "grid space-y-2">
                                    <label className = "max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                                      <input type="checkbox" className = "shrink-0 mt-0.5 border-gray-200 rounded text-primary pointer-events-none focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-white/10" id="hs-vertical-checkbox-in-form"/>
                                      <span className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Default checkbox</span>
                                    </label>

                                    <label className = "max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70">
                                      <input type="checkbox" className = "shrink-0 mt-0.5 border-gray-200 rounded text-primary pointer-events-none focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-white/10" id="vertical-checkbox-checked-in-form" defaultChecked/>
                                      <span className = "text-sm text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Checked checkbox</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-6">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">List with Description</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "grid space-y-3">
                                    <div className = "relative flex items-start">
                                        <div className = "flex items-center h-5 mt-1">
                                        <input id="hs-checkbox-delete" name="hs-checkbox-delete" type="checkbox" className = "ti-form-checkbox" aria-describedby="hs-checkbox-delete-description" defaultChecked/>
                                        </div>
                                        <label htmlFor="hs-checkbox-delete" className = "ltr:ml-2 rtl:mr-2">
                                        <span className = "block text-sm font-semibold text-gray-800 dark:text-white">Delete</span>
                                        <span id="hs-checkbox-delete-description" className = "block text-sm text-gray-600 dark:text-white/70">Notify me when this action happens.</span>
                                        </label>
                                    </div>

                                    <div className = "relative flex items-start">
                                        <div className = "flex items-center h-5 mt-1">
                                        <input id="hs-checkbox-archive" name="hs-checkbox-archive" type="checkbox" className = "ti-form-checkbox" aria-describedby="hs-checkbox-archive-description"/>
                                        </div>
                                        <label htmlFor="hs-checkbox-archive" className = "ltr:ml-2 rtl:mr-2">
                                        <span className = "block text-sm font-semibold text-gray-800 dark:text-white">Archive</span>
                                        <span id="hs-checkbox-archive-description" className = "block text-sm text-gray-600 dark:text-white/70">Notify me when this action happens.</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-6">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Chexbox With List Group</h5>
                            </div>
                            <div className = "box-body">
                                <ul className = "max-w-sm flex flex-col">
                                    <li className = "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                      <div className = "relative flex items-start w-full">
                                        <div className = "flex items-center h-5">
                                          <input id="hs-list-group-item-checkbox-1" name="hs-list-group-item-checkbox-1" type="checkbox" className = "ti-form-checkbox" defaultChecked/>
                                        </div>
                                        <label htmlFor="hs-list-group-item-checkbox-1" className = "ltr:ml-2.5 rtl:mr-2.5 block w-full text-sm text-gray-600 dark:text-white/70">
                                          Chris Lynch
                                        </label>
                                      </div>
                                    </li>

                                    <li className = "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                      <div className = "relative flex items-start w-full">
                                        <div className = "flex items-center h-5">
                                          <input id="hs-list-group-item-checkbox-2" name="hs-list-group-item-checkbox-2" type="checkbox" className = "ti-form-checkbox"/>
                                        </div>
                                        <label htmlFor="hs-list-group-item-checkbox-2" className = "ltr:ml-2.5 rtl:mr-2.5 block w-full text-sm text-gray-600 dark:text-white/70">
                                          Maria Guan
                                        </label>
                                      </div>
                                    </li>

                                    <li className = "ti-list-group bg-white text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white">
                                      <div className = "relative flex items-start w-full">
                                        <div className = "flex items-center h-5">
                                          <input id="hs-list-group-item-checkbox-3" name="hs-list-group-item-checkbox-3" type="checkbox" className = "ti-form-checkbox"/>
                                        </div>
                                        <label htmlFor="hs-list-group-item-checkbox-3" className = "ltr:ml-2.5 rtl:mr-2.5 block w-full text-sm text-gray-600 dark:text-white/70">
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
                                <h5 className = "box-title">Chexbox With Horizontal List Group</h5>
                            </div>
                            <div className = "box-body">
                              <ul className = "flex flex-col sm:flex-row">
                                <li className = "ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last-rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                  <div className = "relative flex items-start w-full">
                                    <div className = "flex items-center h-5">
                                      <input id="hs-horizontal-list-group-item-checkbox-1" name="hs-horizontal-list-group-item-checkbox-1" type="checkbox" className = "ti-form-checkbox" defaultChecked/>
                                    </div>
                                    <label htmlFor="hs-horizontal-list-group-item-checkbox-1" className = "ltr:ml-2.5 rtl:mr-2.5 block w-full text-sm text-gray-600 dark:text-white/70">
                                      Chris Lynch
                                    </label>
                                  </div>
                                </li>

                                <li className = "ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last-rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                  <div className = "relative flex items-start w-full">
                                    <div className = "flex items-center h-5">
                                      <input id="hs-horizontal-list-group-item-checkbox-2" name="hs-horizontal-list-group-item-checkbox-2" type="checkbox" className = "ti-form-checkbox"/>
                                    </div>
                                    <label htmlFor="hs-horizontal-list-group-item-checkbox-2" className = "ltr:ml-2.5 rtl:mr-2.5 block w-full text-sm text-gray-600 dark:text-white/70">
                                      Maria Guan
                                    </label>
                                  </div>
                                </li>

                                <li className = "ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last-rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                  <div className = "relative flex items-start w-full">
                                    <div className = "flex items-center h-5">
                                      <input id="hs-horizontal-list-group-item-checkbox-3" name="hs-horizontal-list-group-item-checkbox-3" type="checkbox" className = "ti-form-checkbox"/>
                                    </div>
                                    <label htmlFor="hs-horizontal-list-group-item-checkbox-3" className = "ltr:ml-2.5 rtl:mr-2.5 block w-full text-sm text-gray-600 dark:text-white/70">
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
export default Formcheckbox;