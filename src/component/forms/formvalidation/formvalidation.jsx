import React, { useState } from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import DatePicker from 'react-datepicker';

const Formvalidation = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
			<PageHeader currentpage="Form Validation" activepage="Forms" mainpage="Form Validation" />

                <div className = "grid grid-cols-12 gap-6">
                    <div className = "col-span-12">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Default Validation</h5>
                            </div>
                            <div className = "box-body">
                                <form className = "ti-validation">
                                    <div className = "grid lg:grid-cols-2 gap-6">
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">First Name</label>
                                            <input type="text" className = "my-auto ti-form-input" placeholder="Firstname" required/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Last Name</label>
                                            <input type="text" className = "my-auto ti-form-input" placeholder="Lastname" required/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Phone Number</label>
                                            <input type="number" className = "my-auto ti-form-input" placeholder="+91 123-456-789" required/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Email Address</label>
                                            <input type="email" className = "my-auto ti-form-input" placeholder="your@site.com" required/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Password</label>
                                            <input type="password" className = "ti-form-input" placeholder="password" required/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Confirm Password</label>
                                            <input type="password" className = "ti-form-input" placeholder="password" required/>
                                        </div>
                                        <div className = "space-y-2 date-of-birth">
                                            <label className = "ti-form-label mb-0">Date Of Birth</label>
                                            <DatePicker className = "ti-form-input" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Gender</label>
                                            <ul className = "flex flex-col sm:flex-row">
                                                <li className = "ti-list-group w-full gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                                  <div className = "relative flex items-start w-full">
                                                    <div className = "flex items-center h-5">
                                                      <input id="ti-radio-validation-1" name="ti-radio-validation" type="radio" className = "ti-form-radio" defaultChecked required/>
                                                    </div>
                                                    <label htmlFor="ti-radio-validation-1" className = "ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                                     Female
                                                    </label>
                                                  </div>
                                                </li>

                                                <li className = "ti-list-group w-full gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                                  <div className = "relative flex items-start w-full">
                                                    <div className = "flex items-center h-5">
                                                      <input id="ti-radio-validation-2" name="ti-radio-validation" type="radio" className = "ti-form-radio" required/>
                                                    </div>
                                                    <label htmlFor="ti-radio-validation-2" className = "ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                                      Male
                                                    </label>
                                                  </div>
                                                </li>

                                                <li className = "ti-list-group w-full gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                                  <div className = "relative flex items-start w-full">
                                                    <div className = "flex items-center h-5">
                                                      <input id="ti-radio-validation-3" name="ti-radio-validation" type="radio" className = "ti-form-radio" required/>
                                                    </div>
                                                    <label htmlFor="ti-radio-validation-3" className = "ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                                    Others
                                                    </label>
                                                  </div>
                                                </li>
                                              </ul>
                                        </div>
                                    </div>
                                    <div className = "my-5">
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Address</label>
                                            <input type="text" className = "my-auto ti-form-input" placeholder="Address" required/>
                                        </div>
                                    </div>
                                    <div className = "grid lg:grid-cols-2 gap-6">
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">City</label>
                                            <input type="text" className = "my-auto ti-form-input" placeholder="city" required/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">State</label>
                                            <input type="text" className = "my-auto ti-form-input" placeholder="state" required/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Pincode</label>
                                            <input type="number" className = "my-auto ti-form-input" placeholder="pincode" required/>
                                        </div>
                                    </div>
                                    <div className = "my-5">
                                        <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-checkbox-group-1" required/>
                                        <label htmlFor="hs-checkbox-group-1" className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">I agree with the <a href="#" className = "text-primary hover:underline">terms and conditions</a></label>
                                    </div>
                                    <button type="submit" className = "ti-btn ti-btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Custom Validation</h5>
                            </div>
                            <div className = "box-body">
                                <form className = "ti-custom-validation" noValidate>
                                    <div className = "grid lg:grid-cols-2 gap-6">
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">First Name</label>
                                            <input type="text" className = "firstName my-auto ti-form-input" placeholder="Firstname" defaultValue="John mark"  required/>
                                            <span className = "firstNameError text-red-500 text-xs hidden">error</span>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Last Name</label>
                                            <input type="text" className = "lastName my-auto ti-form-input" placeholder="Lastname" required/>
                                            <span className = "lastNameError text-red-500 text-xs hidden">error</span>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Phone Number</label>
                                            <input type="number" className = "phonenumber my-auto ti-form-input" placeholder="+91 123-456-789" required/>
                                            <span className = "phoneError text-red-500 text-xs hidden">error</span>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Email Address</label>
                                            <input type="email" className = "email-address my-auto ti-form-input" placeholder="your@site.com" required/>
                                            <span className = "emailError text-red-500 text-xs hidden">error</span>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Password</label>
                                            <input type="password" className = "password ti-form-input" placeholder="password" required/>
                                            <span className = "passwordError text-red-500 text-xs hidden">error</span>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Confirm Password</label>
                                            <input type="password" className = "confirmPassword ti-form-input" placeholder="password" required/>
                                            <span className = "confirmPasswordError text-red-500 text-xs hidden">error</span>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Date Of Birth</label>
                                            <input type="date" className = "birthdate ti-form-input flatpickr-input" readOnly required/>
                                            <span className = "dobError text-red-500 text-xs hidden">error</span>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Gender</label>
                                            <ul className = "flex flex-col sm:flex-row">
                                                <li className = "ti-list-group w-full gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                                  <div className = "relative flex items-start w-full">
                                                    <div className = "flex items-center h-5">
                                                      <input id="ti-radio-validation-11" name="ti-radio-validation" type="radio" className = "ti-form-radio" defaultChecked required/>
                                                    </div>
                                                    <label htmlFor="ti-radio-validation-11" className = "ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                                     Female
                                                    </label>
                                                  </div>
                                                </li>

                                                <li className = "ti-list-group w-full gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                                  <div className = "relative flex items-start w-full">
                                                    <div className = "flex items-center h-5">
                                                      <input id="ti-radio-validation-12" name="ti-radio-validation" type="radio" className = "ti-form-radio" required/>
                                                    </div>
                                                    <label htmlFor="ti-radio-validation-12" className = "ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                                      Male
                                                    </label>
                                                  </div>
                                                </li>

                                                <li className = "ti-list-group w-full gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                                  <div className = "relative flex items-start w-full">
                                                    <div className = "flex items-center h-5">
                                                      <input id="ti-radio-validation-13" name="ti-radio-validation" type="radio" className = "ti-form-radio" required/>
                                                    </div>
                                                    <label htmlFor="ti-radio-validation-13" className = "ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                                    Others
                                                    </label>
                                                  </div>
                                                </li>
                                              </ul>
                                        </div>
                                    </div>
                                    <div className = "my-5">
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Address</label>
                                            <input type="text" className = "postalAddress my-auto ti-form-input" placeholder="Address" required/>
                                            <span className = "addressError text-red-500 text-xs hidden">error</span>
                                        </div>
                                    </div>
                                    <div className = "grid lg:grid-cols-2 gap-6">
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">City</label>
                                            <input type="text" className = "cityName my-auto ti-form-input" placeholder="city" required/>
                                            <span className = "cityError text-red-500 text-xs hidden">error</span>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">State</label>
                                            <input type="text" className = "stateName my-auto ti-form-input" placeholder="state" required/>
                                            <span className = "stateError text-red-500 text-xs hidden">error</span>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Pincode</label>
                                            <input type="number" className = "pincode my-auto ti-form-input" placeholder="pincode" required/>
                                            <span className = "pincodeError text-red-500 text-xs hidden">error</span>
                                        </div>
                                    </div>
                                    <div className = "my-5">
                                        <input type="checkbox" className = "validationCheckbox ti-form-checkbox mt-0.5" id="hs-checkbox-group-12" required/>
                                        <span className = "checkboxError text-red-500 text-xs hidden">error</span>
                                        <label htmlFor="hs-checkbox-group-12" className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">I agree with the <a href="#" className = "text-primary hover:underline">terms and conditions</a></label>
                                    </div>
                                    <button defaultValue="Login Now" type="submit" className = "ti-btn ti-btn-primary ti-custom-validate-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
export default Formvalidation;