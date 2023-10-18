import React from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';

const Formelements = () => {
  return (
    <div>

                <PageHeader currentpage="Form Elements" activepage="Forms" mainpage="Form Elements" />        

                <div className = "grid grid-cols-12 gap-6">
                    <div className = "col-span-12 lg:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Basic Inputs</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "max-w-sm space-y-3">
                                    <input type="text" className = "ti-form-input"/>
                                    <textarea className = "ti-form-input" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Inputs With Placeholder</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "max-w-sm space-y-3">
                                    <input type="text" className = "ti-form-input" placeholder="This is placeholder"/>
                                    <textarea className = "ti-form-input" rows="3"
                                        placeholder="This is a textarea placeholder"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Disabled Inputs</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "max-w-sm space-y-3">
                                    <input type="text" className = "opacity-70 pointer-events-none ti-form-input"
                                        placeholder="Disabled input" disabled/>
                                    <input type="text" className = "opacity-70 pointer-events-none ti-form-input"
                                        placeholder="Disabled readonly input" disabled readOnly/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "grid grid-cols-12 gap-6">
                    <div className = "col-span-12 lg:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Pilled Inputs</h5>
                            </div>
                            <div className = "box-body">
                                <input type="text" className = "ti-form-input px-5 rounded-full" placeholder="Input text"/>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Readonly Inputs</h5>
                            </div>
                            <div className = "box-body">
                                <input type="text" className = "ti-form-input" placeholder="Readonly input" readOnly/>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Input With Hidden Label</h5>
                            </div>
                            <div className = "box-body">
                                <label htmlFor="input-email-label" className = "sr-only">Email</label>
                                <input type="email" id="input-email-label" className = "ti-form-input"
                                    placeholder="you@site.com"/>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Input With Label</h5>
                            </div>
                            <div className = "box-body">
                                <label htmlFor="input-label"
                                    className = "ti-form-label">Email</label>
                                <input type="email" id="input-label" className = "ti-form-input" placeholder="you@site.com"/>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Input With Helper text</h5>
                            </div>
                            <div className = "box-body">
                                <label htmlFor="input-label-with-helper-text"
                                    className = "ti-form-label">Email</label>
                                <input type="email" id="input-label-with-helper-text" className = "ti-form-input"
                                    placeholder="you@site.com" aria-describedby="hs-input-helper-text"/>
                                <p className = "text-sm text-gray-500 mt-2 dark:text-white/70" id="hs-input-helper-text">We'll never share your
                                    details.</p>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Input With Inline helper text</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full rtl:space-x-reverse">
                                    <label htmlFor="inline-input-label-with-helper-text"
                                        className = "ti-form-label">Email</label>
                                    <input type="email" id="inline-input-label-with-helper-text"
                                        className = "ti-form-input"
                                        placeholder="you@site.com" aria-describedby="hs-inline-input-helper-text"/>
                                    <p className = "text-sm text-gray-500 mt-2 dark:text-white/70" id="hs-inline-input-helper-text">We'll never
                                        share your details.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Input With Corner Hint</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "flex justify-between items-center">
                                    <label htmlFor="with-corner-hint" className = "ti-form-label">Email</label>
                                    <span className = "block  text-sm text-gray-500 mb-2 dark:text-white/70">Optional</span>
                                </div>
                                <input type="email" id="with-corner-hint" className = "ti-form-input" placeholder="you@site.com"/>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Input Sizes</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "max-w-sm space-y-3">
                                    <input type="text" className = "py-2 px-3 ti-form-input" placeholder="Small size"/>
                                    <input type="text" className = "ti-form-input" placeholder="Default size"/>
                                    <input type="text" className = "ti-form-input sm:p-5" placeholder="Large size"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 lg:col-span-4">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Input Validation states</h5>
                            </div>
                            <div className = "box-body">
                                <div className = "max-w-sm space-y-3">
                                    <div>
                                        <label htmlFor="hs-validation-name-error" className = "ti-form-label">Email</label>
                                        <div className = "relative">
                                          <input type="text" id="hs-validation-name-error" name="hs-validation-name-error" className = "ti-form-input !border-danger focus:border-danger focus:ring-danger" required aria-describedby="hs-validation-name-error-helper"/>
                                          <div className = "absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-3 rtl:pl-3">
                                            <svg className = "h-5 w-5 text-danger" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                            </svg>
                                          </div>
                                        </div>
                                        <p className = "text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
                                      </div>

                                      <div>
                                        <label htmlFor="hs-validation-name-success" className = "ti-form-label">Email</label>
                                        <div className = "relative">
                                          <input type="text" id="hs-validation-name-success" name="hs-validation-name-success" className = "ti-form-input !border-success focus:border-success focus:ring-success" required aria-describedby="hs-validation-name-success-helper"/>
                                          <div className = "absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-3 rtl:pl-3">
                                            <svg className = "h-5 w-5 text-success" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                            </svg>
                                          </div>
                                        </div>
                                        <p className = "text-sm text-green-600 mt-2" id="hs-validation-name-success-helper">Looks good!</p>
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
export default Formelements;