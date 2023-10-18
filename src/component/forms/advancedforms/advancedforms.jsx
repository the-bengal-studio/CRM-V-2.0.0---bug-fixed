import React, { Fragment, useState } from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import DatePicker from 'react-datepicker';
import { addDays, setHours, setMinutes } from 'date-fns'; //dependencies for react date picker packages
import Calendar from 'react-calendar';  //React Calendar
import { Monolithmethod } from "./monolithmethod";
import { Classicmethod } from "./classicmethod";
import { Nonamethod } from "./nanomethod";


const Advancedforms = () => {

    const [startDate, setStartDate] = useState(new Date());

    //range data picker

    const [dateRange, setDateRange] = useState([null, null]);
    const [startsDate, endDate] = dateRange;

    //Specific time range

    const [startTime, setStartTime] = useState(
        setHours(setMinutes(new Date(), 30), 17)
    );

    //React Calender 

    const [value, onChange] = useState(new Date());

    const [show, setShow] = useState(false);

    return (
        <Fragment>

            <PageHeader currentpage="Advanced Forms" activepage="Forms" mainpage="Advanced Forms" />

            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Basic Date Picker</h5>
                        </div>
                        <div className="box-body">
                            <div className="flex rounded-sm overflow-auto">
                                <div className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-white/70">
                                        <i className="ri ri-calendar-line"></i>
                                    </span>
                                </div>

                                <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Date Time Picker</h5>
                        </div>
                        <div className="box-body">
                            <div className="flex rounded-sm overflow-auto">
                                <div
                                    className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-white/70"><i
                                        className="ri ri-calendar-line"></i></span>
                                </div>

                                <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate} onChange={(date) => setStartDate(date)} timeInputLabel="Time:" dateFormat="MM/dd/yyyy h:mm aa" showTimeInput />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Human Friendly Date Picker</h5>
                        </div>
                        <div className="box-body date-picker">
                            <div className="flex rounded-sm overflow-auto">
                                <div
                                    className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-white/70"><i
                                        className="ri ri-calendar-line"></i></span>
                                </div>

                                <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate} onChange={(date) => setStartDate(date)} locale="en-GB" showTimeSelect timeFormat="p" timeIntervals={15} dateFormat="Pp" />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Date Range Picker</h5>
                        </div>
                        <div className="box-body">
                            <div className="flex rounded-sm overflow-auto">
                                <div
                                    className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-white/70"><i
                                        className="ri ri-calendar-line"></i></span>
                                </div>

                                <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" placeholderText="Choose Date" selectsRange={true} startDate={startsDate} endDate={endDate} onChange={(update) => { setDateRange(update) }} isClearable={true} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title"> Inline Time Picker </h5>
                        </div>
                        <div className="box-body">
                            <div className="flex items-center rounded-sm overflow-auto">
                                <div
                                    className="px-4 py-3 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-white/70"><i
                                        className="ri ri-calendar-line"></i></span>
                                </div>
                                <DatePicker className="px-4 py-3 "
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title"> Specific Time Range  </h5>
                        </div>
                        <div className="box-body date-picker">
                            <div className="flex rounded-sm">
                                <div className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-white/70"><i
                                        className="ri ri-time-line"></i>
                                    </span>
                                </div>
                                <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startTime} onChange={(date) => setStartTime(date)} showTimeSelect minTime={setHours(setMinutes(new Date(), 0), 17)} maxTime={setHours(setMinutes(new Date(), 30), 20)} dateFormat="MMMM d, yyyy h:mm aa" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div className="box multiple-month-picker">
                        <div className="box-header">
                            <h5 className="box-title"> Multiple Month Picker </h5>
                        </div>
                        <div className="box-body">
                            <div className="flex rounded-sm overflow-auto">
                                <div
                                    className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-white/70"><i
                                        className="ri ri-time-line"></i></span>
                                </div>
                                <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10 flatpickr-input" selected={startDate} onChange={(date) => setStartDate(date)} monthsShown={2} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Basic Time Picker</h5>
                        </div>
                        <div className="box-body">
                            <div className="flex rounded-sm overflow-auto">
                                <div
                                    className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-white/70"><i
                                        className="ri ri-time-line"></i></span>
                                </div>

                                <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title"> Month with Year Picker </h5>
                        </div>
                        <div className="box-body date-picker">
                            <div className="flex rounded-sm overflow-auto">
                                <div
                                    className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-white/70"><i
                                        className="ri ri-calendar-line"></i></span>
                                </div>

                                <DatePicker className="ti-form-input rounded-none ltr:border-r-0 rtl:border-l-0 focus:z-10 flatpickr-input" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="MM/yyyy" showMonthYearPicker showFullMonthYearPicker />
                                <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10 flatpickr-input" selected={startDate} onChange={(date) => setStartDate(date)} showYearPicker dateFormat="yyyy" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title"> Specific Date Range </h5>
                        </div>
                        <div className="box-body">
                            <div className="flex rounded-sm overflow-auto">
                                <div
                                    className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-white/70"><i
                                        className="ri ri-time-line"></i></span>
                                </div>

                                <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10 flatpickr-input" selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} maxDate={addDays(new Date(), 5)} placeholderText="Select a date between today and 5 days in the future" />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title"> Range Picker with Portal screen Format </h5>
                        </div>
                        <div className="box-body">
                            <div className="flex rounded-sm overflow-auto">
                                <div
                                    className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-white/70"><i
                                        className="ri ri-time-line"></i></span>
                                </div>
                                <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" placeholderText="Choose Date" selectsRange={true} startDate={startsDate} endDate={endDate} onChange={(update) => { setDateRange(update); }} withPortal />


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Inline Calendar </h5>
                        </div>
                        <div className="box-body sm:overflow-hidden overflow-auto">
                            <div className="flex justify-center rounded-sm overflow-auto">
                                <div className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-white/70">
                                        <i className="ri ri-calendar-line"></i>
                                    </span>
                                </div>
                                <div className="inline-calendar">
                                <input type="text" className="py-2 px-3  ltr:pr-11 rtl:pl-11 ti-form-input rounded-none ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10" onClick={() => setShow(show => !show)} />
                                {show && (<Calendar className="ti-form-input focus:z-10 flatpickr-input" onChange={onChange} value={value} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title"> Color Picker </h5>
                        </div>
                        <div className="box-body">
                            <div className="">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="theme-container active ti-btn ti-btn-primary">
                                            Classic

                                        </div>
                                        <div className="text-center">
                                            <Classicmethod />

                                        </div>
                                    </div>
                                    <div>
                                        <div className="theme-container1 active ti-btn ti-btn-primary">
                                            Monolith

                                        </div>
                                        <div className="text-center">
                                            <Monolithmethod />

                                        </div>
                                    </div>
                                    <div>
                                        <div className="theme-container2 active ti-btn ti-btn-primary">
                                            Nona
                                        </div>
                                        <div className="text-center">
                                            <Nonamethod />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Advancedforms;
