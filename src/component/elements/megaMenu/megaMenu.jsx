import React from 'react'
import { Link } from 'react-router-dom';
import ALLImages from '../../../common/imagesData';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';

const MegaMenu = () => {
  return (
    <div>

      <PageHeader currentpage="Mega Menu" activepage="Elements" mainpage="Mega Menu" />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Basic Mega Menu</h5>
            </div>
            <div className="box-body">
              <header className="relative flex flex-wrap md:justify-start md:flex-nowrap w-full bg-white text-sm dark:bg-bgdark">
                <nav className="w-full mx-auto px-4 md:flex md:items-center md:justify-between" aria-label="Global">
                  <div className="flex items-center justify-between">
                    <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="header-logo">
                      <img src={ALLImages('logo')} alt="logo" className="dark:hidden block" />
                      <img src={ALLImages('dark')} alt="logo" className="hidden dark:block" />
                    </Link>
                    <div className="md:hidden">
                      <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-transparent transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-collapse="#navbar-collapse-basic" aria-controls="navbar-collapse-basic" aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div id="navbar-collapse-basic" className="hidden basis-full grow md:block">
                    <div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 ltr:md:pl-5 rtl:md:pr-5">
                      <Link className="font-medium text-primary" to="#" aria-current="page">Active</Link>

                      <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none]">
                        <button id="hs-mega-menu-basic-dr3" type="button" className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70 ">
                          Dropdown
                          <svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                          </svg>
                        </button>

                        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute top-full md:border before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5">
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                            About
                          </Link>
                          <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none]">
                            <button type="button" className="w-full flex justify-between items-center text-sm text-gray-800 rounded-sm py-2 px-3 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300">
                              Sub Menu
                              <svg className="md:-rotate-90 ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70 rtl:rotate-90" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                              </svg>
                            </button>

                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute md:border ltr:before:-right-5 rtl:before:-left-5 before:top-0 before:h-full before:w-5 top-0 ltr:right-full rtl:left-full !mx-[10px]">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                About
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Downloads
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Team Account
                              </Link>
                            </div>
                          </div>

                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                            Downloads
                          </Link>
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                            Team Account
                          </Link>
                        </div>
                      </div>

                      <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                        <button type="button" className="flex items-center w-full text-gray-600  hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70">
                          Mega Menu
                          <svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                          </svg>
                        </button>

                        <div className="hs-dropdown-menu transition-[opacity,margin] md:border duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full ltr:left-0 rtl:right-0 min-w-[15rem] bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5">
                          <div className="md:grid md:grid-cols-3">
                            <div className="flex flex-col">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                About
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Services
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Customer Story
                              </Link>
                            </div>

                            <div className="flex flex-col">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Careers
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Careers: Overview
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Careers: Apply
                              </Link>
                            </div>

                            <div className="flex flex-col">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Log In
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Sign Up
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-white/70" to="#">Link</Link>
                    </div>
                  </div>
                </nav>
              </header>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Mega Menu With Hover Event</h5>
            </div>
            <div className="box-body">
              <header className="relative flex flex-wrap md:justify-start md:flex-nowrap w-full bg-white text-sm dark:bg-bgdark">
                <nav className="w-full mx-auto px-4 md:flex md:items-center md:justify-between" aria-label="Global">
                  <div className="flex items-center justify-between">
                    <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="header-logo">
                      <img src={ALLImages('logo')} alt="logo" className="dark:hidden block" />
                      <img src={ALLImages('dark')} alt="logo" className="hidden dark:block" />
                    </Link>
                    <div className="md:hidden">
                      <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-transparent transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-collapse="#navbar-collapse-basic1" aria-controls="navbar-collapse-basic1" aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div id="navbar-collapse-basic1" className="hidden basis-full grow md:block">
                    <div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 ltr:md:pl-5 rtl:md:pr-5">
                      <Link className="font-medium text-primary" to="#" aria-current="page">Active</Link>

                      <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                        <button id="hs-mega-menu-basic-dr3" type="button" className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70 ">
                          Dropdown
                          <svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                          </svg>
                        </button>

                        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute top-full md:border before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5">
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                            About
                          </Link>
                          <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                            <button type="button" className="w-full flex justify-between items-center text-sm text-gray-800 rounded-sm py-2 px-3 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300">
                              Sub Menu
                              <svg className="md:-rotate-90 ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70 rtl:rotate-90" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                              </svg>
                            </button>

                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute md:border ltr:before:-right-5 rtl:before:-left-5 before:top-0 before:h-full before:w-5 top-0 ltr:right-full rtl:left-full !mx-[10px]">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                About
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Downloads
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Team Account
                              </Link>
                            </div>
                          </div>

                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                            Downloads
                          </Link>
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                            Team Account
                          </Link>
                        </div>
                      </div>

                      <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                        <button type="button" className="flex items-center w-full text-gray-600  hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70">
                          Mega Menu
                          <svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                          </svg>
                        </button>

                        <div className="hs-dropdown-menu transition-[opacity,margin] md:border duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full ltr:left-0 rtl:right-0 min-w-[15rem] bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5">
                          <div className="md:grid md:grid-cols-3">
                            <div className="flex flex-col">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                About
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Services
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Customer Story
                              </Link>
                            </div>

                            <div className="flex flex-col">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Careers
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Careers: Overview
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Careers: Apply
                              </Link>
                            </div>

                            <div className="flex flex-col">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Log In
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Sign Up
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-white/70" to="#">Link</Link>
                    </div>
                  </div>
                </nav>
              </header>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Mega Menu Slide Up Animation</h5>
            </div>
            <div className="box-body">
              <header className="relative flex flex-wrap md:justify-start md:flex-nowrap w-full bg-white text-sm dark:bg-bgdark">
                <nav className="w-full mx-auto px-4 md:flex md:items-center md:justify-between" aria-label="Global">
                  <div className="flex items-center justify-between">
                    <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="header-logo">
                      <img src={ALLImages('logo')} alt="logo" className="dark:hidden block" />
                      <img src={ALLImages('dark')} alt="logo" className="hidden dark:block" />
                    </Link>
                    <div className="md:hidden">
                      <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-transparent transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10" data-hs-collapse="#navbar-collapse-basic2" aria-controls="navbar-collapse-basic2" aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div id="navbar-collapse-basic2" className="hidden basis-full grow md:block">
                    <div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 ltr:md:pl-5 rtl:md:pr-5">
                      <Link className="font-medium text-primary" to="#" aria-current="page">Active</Link>

                      <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                        <button id="hs-mega-menu-basic-dr" type="button" className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70 ">
                          Dropdown
                          <svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                          </svg>
                        </button>

                        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-3 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute top-full md:border before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5">
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                            About
                          </Link>
                          <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                            <button type="button" className="w-full flex justify-between items-center text-sm text-gray-800 rounded-sm py-2 px-3 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300">
                              Sub Menu
                              <svg className="md:-rotate-90 ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70 rtl:rotate-90" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                              </svg>
                            </button>

                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-3 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute md:border ltr:before:-right-5 rtl:before:-left-5 before:top-0 before:h-full before:w-5 top-0 ltr:right-full rtl:left-full !mx-[10px]">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                About
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Downloads
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Team Account
                              </Link>
                            </div>
                          </div>

                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                            Downloads
                          </Link>
                          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                            Team Account
                          </Link>
                        </div>
                      </div>

                      <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                        <button type="button" className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70">
                          Mega Menu
                          <svg className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                          </svg>
                        </button>

                        <div className="hs-dropdown-menu transition-[opacity,margin] md:border duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 md:mt-3 top-full ltr:left-0 rtl:right-0 min-w-[15rem] bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5">
                          <div className="md:grid md:grid-cols-3">
                            <div className="flex flex-col">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                About
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Services
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Customer Story
                              </Link>
                            </div>

                            <div className="flex flex-col">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Careers
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Careers: Overview
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Careers: Apply
                              </Link>
                            </div>

                            <div className="flex flex-col">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Log In
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Sign Up
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-white/70" to="#">Link</Link>
                    </div>
                  </div>
                </nav>
              </header>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Mega Menu With Auto Close Behavior</h5>
            </div>
            <div className="box-body">
              <header
                className="relative flex flex-wrap md:justify-start md:flex-nowrap w-full bg-white text-sm dark:bg-bgdark"
              >
                <nav
                  className="w-full mx-auto px-4 md:flex md:items-center md:justify-between"
                  aria-label="Global"
                >
                  <div className="flex items-center justify-between">
                    <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="header-logo">
                      <img src={ALLImages('logo')} alt="logo" className="dark:hidden block" />
                      <img src={ALLImages('dark')} alt="logo" className="hidden dark:block" />
                    </Link>
                    <div className="md:hidden">
                      <button
                        type="button"
                        className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-transparent transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
                        data-hs-collapse="#navbar-collapse-slide-up"
                        aria-controls="navbar-collapse-slide-up"
                        aria-label="Toggle navigation"
                      >
                        <svg
                          className="hs-collapse-open:hidden w-4 h-4"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                          />
                        </svg>
                        <svg
                          className="hs-collapse-open:block hidden w-4 h-4"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    id="navbar-collapse-slide-up"
                    className="hidden basis-full grow md:block"
                  >
                    <div
                      className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 ltr:md:pl-5 rtl:md:pr-5"
                    >
                      <Link
                        className="font-medium text-primary"
                        href="javascript:void(0);"
                        aria-current="page"
                      >Active</Link>

                      <div className="hs-dropdown relative inline-flex">
                        <button
                          id="hs-dropdown-basic"
                          type="button"
                          className="hs-mega-menu-toggle hs-mega-menu-open:text-gray-500 hover:hs-mega-menu-open:text-gray-500 dark:hs-mega-menu-open:text-white/70 dark:hover:hs-mega-menu-open:text-white flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70"
                        >
                          Dropdown
                          <svg
                            className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600 ltr:ml-2 rtl:mr-2"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>

                        <div
                          className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-15rem bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                          aria-labelledby="hs-dropdown-basic"
                        >
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          >
                            About
                          </Link>
                          <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                            <button type="button" className="w-full flex justify-between items-center text-sm text-gray-800 rounded-sm py-2 px-3 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300">
                              Sub Menu
                              <svg className="md:-rotate-90 ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70 rtl:rotate-90" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                              </svg>
                            </button>

                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-3 bg-white md:shadow-md rounded-sm p-2 dark:bg-bgdark md:dark:border dark:border-white/10 dark:divide-white/10 before:absolute md:border ltr:before:-right-5 rtl:before:-left-5 before:top-0 before:h-full before:w-5 top-0 ltr:right-full rtl:left-full !mx-[10px]">
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                About
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Downloads
                              </Link>
                              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Team Account
                              </Link>
                            </div>
                          </div>
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          >
                            Services
                          </Link>
                          <Link
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          >
                            Customer Story
                          </Link>
                        </div>
                      </div>

                      <div
                        className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none]"
                      >
                        <button
                          type="button"
                          className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                        >
                          Mega Menu
                          <svg
                            className="ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </button>
                        <div
                          className="hs-dropdown-menu transition-[opacity,margin] md:border duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full ltr:right-0 rtl:left-0 bg-white dark:bg-bgdark md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5"
                        >
                          <div className="md:grid md:grid-cols-3">
                            <div className="flex flex-col">
                              <Link
                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                href="#"
                              >
                                About
                              </Link>
                              <Link
                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                href="#"
                              >
                                Services
                              </Link>
                              <Link
                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                href="#"
                              >
                                Customer Story
                              </Link>
                            </div>

                            <div className="flex flex-col">
                              <Link
                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                href="#"
                              >
                                Careers
                              </Link>
                              <Link
                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                href="#"
                              >
                                Careers: Overview
                              </Link>
                              <Link
                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                href="#"
                              >
                                Careers: Apply
                              </Link>
                            </div>

                            <div className="flex flex-col">
                              <Link
                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                href="#"
                              >
                                Log In
                              </Link>
                              <Link
                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                href="#"
                              >
                                Sign Up
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link
                        className="font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-white/70"
                        href="javascript:void(0);"
                      >Link</Link>

                    </div>
                  </div>
                </nav>
              </header>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default MegaMenu;