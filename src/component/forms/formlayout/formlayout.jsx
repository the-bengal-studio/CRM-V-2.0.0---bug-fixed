import React, { useState } from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Month, Year } from '../../../common/select2data';
import DatePicker from 'react-datepicker';

 const Formlayout = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div>

			<PageHeader currentpage="Form Layouts" activepage="Forms" mainpage="Form Layouts" />

                <div className = "grid grid-cols-12 gap-x-6">
                    <div className = "col-span-12 xxl:col-span-6">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Vertical form Layout</h5>
                            </div>
                            <div className = "box-body">
                                <form className = "space-y-3">
                                    <div className = "space-y-3">
                                        <label className = "ti-form-label">Email Id/ User Name</label>
                                        <input type="email" className = "ti-form-input" placeholder="you@site.com"/>
                                    </div>
                                    <div className = "space-y-3">
                                        <label className = "ti-form-label">Password</label>
                                        <input type="password" className = "ti-form-input" placeholder="password"/>
                                    </div>
                                    <div className = "flex">
                                        <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-checkbox-group-11"/>
                                        <label htmlFor="hs-checkbox-group-11"
                                            className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">I agree with the <Link
                                                to="#" className = "text-primary hover:underline">terms and
                                                conditions</Link></label>
                                    </div>
                                    <button type="submit" className = "ti-btn ti-btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12 xxl:col-span-6">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Horizontal form Layout</h5>
                            </div>
                            <div className = "box-body">
                                <form className = "space-y-3">
                                    <div className = "sm:grid grid-cols-12 gap-x-6">
                                        <label className = "col-span-3 ti-form-label">Email Id</label>
                                        <input type="email" className = "col-span-9 ti-form-input" placeholder="you@site.com"/>
                                    </div>
                                    <div className = "sm:grid grid-cols-12 gap-x-6">
                                        <label className = "col-span-3 ti-form-label">Password</label>
                                        <input type="password" className = "col-span-9 ti-form-input" placeholder="password"/>
                                    </div>
                                    <div className = "sm:grid grid-cols-12 gap-x-6">
                                        <div className = "col-span-3"> </div>
                                        <div className = "col-span-9">
                                            <input type="checkbox" className = " ti-form-checkbox mt-0.5"
                                                id="hs-checkbox-group-12"/>
                                            <label htmlFor="hs-checkbox-group-12"
                                                className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">I agree with the
                                                <Link to="#" className = "text-primary hover:underline ltr:ml-1 rtl:ml-1">terms and
                                                    conditions</Link></label>
                                        </div>
                                    </div>

                                    <div className = "grid grid-cols-12 gap-x-6">
                                        <div className = "col-span-3"> </div>
                                        <div className = "col-span-9">
                                            <button type="submit" className = "ti-btn ti-btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "grid grid-cols-12 gap-x-6">
                    <div className = "col-span-12 lg:col-span-12">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Inline form Layout</h5>
                            </div>
                            <div className = "box-body">
                                <form className = "sm:grid grid-cols-12 gap-x-6 space-y-4 lg:space-y-0">
                                    <div className = "col-span-12 lg:col-span-3 sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full rtl:space-x-reverse">
                                        <label className = "w-32 ti-form-label mb-0">Email Id</label>
                                        <input type="email" className = "my-auto ti-form-input" placeholder="you@site.com"/>
                                    </div>
                                    <div className = "col-span-12 lg:col-span-3 sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full rtl:space-x-reverse">
                                        <label className = "w-32 ti-form-label mb-0">Password</label>
                                        <input type="password" className = "ti-form-input" placeholder="password"/>
                                    </div>
                                    <div className = "col-span-12 lg:col-span-3 sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full rtl:space-x-reverse">
                                        <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-checkbox-group-13"/>
                                        <label htmlFor="hs-checkbox-group-13"
                                            className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">I agree with the <Link
                                                to="#" className = "text-primary hover:underline">terms and
                                                conditions</Link></label>
                                    </div>
                                    <button type="submit" className = "col-span-12 lg:col-span-3 ti-btn ti-btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "grid grid-cols-12 gap-x-6">
                    <div className = "col-span-12">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Form Layout Style-1</h5>
                            </div>
                            <div className = "box-body">
                                <form>
                                    <div className = "grid lg:grid-cols-2 gap-6 space-y-4 lg:space-y-0">
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">First Name</label>
                                            <input type="text" className = "my-auto ti-form-input" placeholder="Firstname"/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Last Name</label>
                                            <input type="text" className = "my-auto ti-form-input" placeholder="Lastname"/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Phone Number</label>
                                            <input type="number" className = "my-auto ti-form-input"
                                                placeholder="+91 123-456-789"/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Email Address</label>
                                            <input type="email" className = "my-auto ti-form-input"
                                                placeholder="your@site.com"/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Password</label>
                                            <input type="password" className = "ti-form-input" placeholder="password"/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Confirm Password</label>
                                            <input type="password" className = "ti-form-input" placeholder="password"/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Date Of Birth</label>
                                                <DatePicker className = "ti-form-input" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Gender</label>
                                            <ul className = "flex flex-col sm:flex-row">
                                                <li
                                                    className = "ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none ltr:sm:first:rounded-tl-none rtl:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none ltr:sm:last:rounded-br-none rtl:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                                    <div className = "relative flex items-start w-full">
                                                        <div className = "flex items-center h-5">
                                                            <input id="hs-horizontal-list-group-item-radio-1"
                                                                name="hs-horizontal-list-group-item-radio" type="radio"
                                                                className = "ti-form-radio" defaultChecked/>
                                                        </div>
                                                        <label htmlFor="hs-horizontal-list-group-item-radio-1"
                                                            className = "ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                                            Female
                                                        </label>
                                                    </div>
                                                </li>

                                                <li
                                                className = "ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none ltr:sm:first:rounded-tl-none rtl:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none ltr:sm:last:rounded-br-none rtl:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                                <div className = "relative flex items-start w-full">
                                                        <div className = "flex items-center h-5">
                                                            <input id="hs-horizontal-list-group-item-radio-2"
                                                                name="hs-horizontal-list-group-item-radio" type="radio"
                                                                className = "ti-form-radio"/>
                                                        </div>
                                                        <label htmlFor="hs-horizontal-list-group-item-radio-2"
                                                            className = "ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
                                                            Male
                                                        </label>
                                                    </div>
                                                </li>

                                                <li
                                                className = "ti-list-group gap-x-2.5 bg-white border text-gray-800 ltr:sm:-ml-px rtl:sm:-mr-px sm:mt-0 ltr:sm:first:rounded-tr-none ltr:sm:first:rounded-tl-none rtl:sm:first:rounded-tr-none rtl:sm:first:rounded-tl-none ltr:sm:first:rounded-bl-sm rtl:sm:first:rounded-br-sm ltr:sm:last:rounded-bl-none ltr:sm:last:rounded-br-none rtl:sm:last:rounded-bl-none rtl:sm:last:rounded-br-none ltr:sm:last:rounded-tr-sm rtl:sm:last:rounded-tl-sm dark:bg-bgdark dark:border-white/10 dark:text-white">
                                                <div className = "relative flex items-start w-full">
                                                        <div className = "flex items-center h-5">
                                                            <input id="hs-horizontal-list-group-item-radio-3"
                                                                name="hs-horizontal-list-group-item-radio" type="radio"
                                                                className = "ti-form-radio"/>
                                                        </div>
                                                        <label htmlFor="hs-horizontal-list-group-item-radio-3"
                                                            className = "ltr:ml-3 rtl:mr-3 block w-full text-sm text-gray-600 dark:text-white/70">
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
                                            <input type="text" className = "my-auto ti-form-input" placeholder="Address"/>
                                        </div>
                                    </div>
                                    <div className = "grid lg:grid-cols-2 gap-6 space-y-4 lg:space-y-0">
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">City</label>
                                            <input type="text" className = "my-auto ti-form-input" placeholder="city"/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">State</label>
                                            <input type="text" className = "my-auto ti-form-input" placeholder="state"/>
                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Pincode</label>
                                            <input type="number" className = "my-auto ti-form-input" placeholder="pincode"/>
                                        </div>
                                    </div>
                                    <div className = "my-5">
                                        <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-checkbox-group-4"/>
                                        <label htmlFor="hs-checkbox-group-4"
                                            className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">I agree with the <Link
                                                to="#" className = "text-primary hover:underline">terms and
                                                conditions</Link></label>
                                    </div>
                                    <button type="submit" className = "ti-btn ti-btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className = "col-span-12">
                        <div className = "box">
                            <div className = "box-header">
                                <h5 className = "box-title">Form Layout Style-2</h5>
                            </div>
                            <div className = "box-body">
                                <form className = "space-y-4">
                                    <div className = "space-y-2">
                                        <label htmlFor="hs-trailing-icon" className = "ti-form-label">Card number</label>
                                        <div className = "relative z-0">
                                            <input type="text" id="hs-trailing-icon" name="hs-trailing-icon"
                                                className = "ti-form-input ltr:pr-11 rtl:pl-4 focus:z-10"
                                                placeholder="xxxx-xxxx-xxxx-xxxx"/>
                                            <div
                                                className = "absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none z-20 ltr:pr-4 rtl:pl-4">
                                                <svg className = "h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z">
                                                    </path>
                                                    <path
                                                        d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "space-y-2">
                                        <label className = "ti-form-label mb-0">Name On Card</label>
                                        <input type="text" className = "my-auto ti-form-input" placeholder="Address"/>
                                    </div>
                                    <div className = "grid lg:grid-cols-3 gap-x-6 space-y-4 lg:space-y-0">
                                        <div className = "space-y-2">
                                            <label className = "ti-form-select-label">Expiration Date</label>
							           <Select classNamePrefix='react-select' options={Month} menuPlacement='top' placeholder='Select the month' />

                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-select-label">Expiration Month</label>
							           <Select classNamePrefix='react-select' options={Year} menuPlacement='top' placeholder='Select the month' />

                                        </div>
                                        <div className = "space-y-2">
                                            <label className = "ti-form-label mb-0">Cvv</label>
                                            <input type="number" className = "my-auto ti-form-input py-2" placeholder="cvv"/>
                                        </div>
                                    </div>
                                    <div className = "my-5">
                                        <input type="checkbox" className = "ti-form-checkbox mt-0.5" id="hs-checkbox-group-1"/>
                                        <label htmlFor="hs-checkbox-group-1"
                                            className = "text-sm text-gray-500 ltr:ml-3 rtl:mr-3 dark:text-white/70">Save my card for
                                            future purchases </label>
                                    </div>
                                    <button type="submit" className = "ti-btn ti-btn-primary w-full">Complete Payment</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
  )
}
export default Formlayout;