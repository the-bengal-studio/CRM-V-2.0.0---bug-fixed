import React from 'react'
import { Link } from 'react-router-dom';
import ALLImages from '../../../common/imagesData';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';

const Navbar = () => {
  return (
    <div>

                <PageHeader currentpage="Navbar" activepage="Elements" mainpage="Navbar" />        

        <div className= "grid grid-cols-12 gap-x-5">
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Basic Navbar</h5>
              </div>
              <div className= "box-body">
                <header
                  className= "flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bgdark">
                  <nav className= " w-full mx-auto sm:px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className= "header-logo">
                      <img src= {ALLImages('logo')} alt="logo" className= "dark:hidden block"/>
                      <img src= {ALLImages('dark')} alt="logo" className= "hidden dark:block"/>
                    </Link>
                    <div className= "flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 ltr:sm:pl-5 rtl:sm:pr-5">
                      <Link className= "font-medium text-primary" to="#" aria-current="page">Landing</Link>
                      <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                        to="#">Account</Link>
                      <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                        to="#">Work</Link>
                      <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                        to="#">Blog</Link>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Navbar With horizontal scroll</h5>
              </div>
              <div className= "box-body">
                <header
                  className= "flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bgdark">
                  <nav className= "w-full mx-auto px-4 xxl:flex xxl:items-center xxl:justify-between" aria-label="Global">
                    <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className= "header-logo">
                      <img src= {ALLImages('logo')} alt="logo" className= "dark:hidden block"/>
                      <img src= {ALLImages('dark')} alt="logo" className= "hidden dark:block"/>
                    </Link>
                    <div
                      className= "flex flex-row items-center gap-5 mt-5 pb-2 overflow-x-auto xxl:justify-end xxl:mt-0 ltr:xxl:pl-5 rtl:xxl:pr-5 xxl:pb-0 xxl:overflow-x-visible">
                      <Link className= "font-medium text-primary" to="#" aria-current="page">Dashboard</Link>
                      <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                        to="#">Widgets</Link>
                      <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                        to="#">Components</Link>
                      <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                        to="#">Advanced Ui</Link>
                      <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                        to="#">Basic Ui</Link>
                      <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                        to="#">Elements</Link>
                      <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                        to="#">Forms</Link>
                      <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                        to="#">Pages</Link>
                      <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                        to="#">Authentication</Link>
                      <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                        to="#">Maps</Link>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Navbar With collapse</h5>
              </div>
              <div className= "box-body">
                <header
                  className= "flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bgdark">
                  <nav className= "w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className= "flex items-center justify-between">
                      <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className= "header-logo">
                        <img src= {ALLImages('logo')} alt="logo" className= "dark:hidden block"/>
                        <img src= {ALLImages('dark')} alt="logo" className= "hidden dark:block"/>
                      </Link>
                      <div className= "sm:hidden">
                        <button type="button"
                          className= "hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse"
                          aria-label="Toggle navigation">
                          <svg className= "hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className= "hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-with-collapse" className= "hidden basis-full grow sm:block">
                      <div className= "flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 ltr:sm:pl-5 rtl:sm:pr-5">
                        <Link className= "font-medium text-primary" to="#" aria-current="page">Landing</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Account</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Work</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Blog</Link>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Navbar Collapse with animation</h5>
              </div>
              <div className= "box-body">
                <header
                  className= "flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bgdark">
                  <nav className= "w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className= "flex items-center justify-between">
                      <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className= "header-logo">
                        <img src= {ALLImages('logo')} alt="logo" className= "dark:hidden block"/>
                        <img src= {ALLImages('dark')} alt="logo" className= "hidden dark:block"/>
                      </Link>
                      <div className= "sm:hidden">
                        <button type="button"
                          className= "hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-collapse-with-animation"
                          aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                          <svg className= "hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className= "hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-collapse-with-animation"
                      className= "hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className= "flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 ltr:sm:pl-5 rtl:sm:pr-5">
                        <Link className= "font-medium text-primary" to="#" aria-current="page">Landing</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Account</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Work</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Blog</Link>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Navbar with Image</h5>
              </div>
              <div className= "box-body">
                <header
                  className= "flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bgdark">
                  <nav className= "w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className= "flex items-center justify-between">
                      <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className= "header-logo">
                        <img src= {ALLImages('logo')} alt="logo" className= "dark:hidden block"/>
                        <img src= {ALLImages('dark')} alt="logo" className= "hidden dark:block"/>
                      </Link>
                      <div className= "sm:hidden">
                        <button type="button"
                          className= "hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-image-2" aria-controls="navbar-image-2"
                          aria-label="Toggle navigation">
                          <svg className= "hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className= "hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-image-2"
                      className= "hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className= "flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 ltr:sm:pl-5 rtl:sm:pr-5">
                        <Link className= "font-medium text-primary" to="#" aria-current="page">Landing</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Account</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Work</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Blog</Link>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Navbar with Alignment</h5>
              </div>
              <div className= "box-body">
                <header
                  className= "flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bgdark">
                  <nav className= "w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className= "flex items-center justify-between">
                      <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className= "header-logo">
                        <img src= {ALLImages('logo')} alt="logo" className= "dark:hidden block"/>
                        <img src= {ALLImages('dark')} alt="logo" className= "hidden dark:block"/>
                      </Link>
                      <div className= "sm:hidden">
                        <button type="button"
                          className= "hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment"
                          aria-label="Toggle navigation">
                          <svg className= "hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className= "hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-alignment"
                      className= "hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className= "flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 ltr:sm:pl-5 rtl:sm:pr-5">
                        <Link className= "font-medium text-primary" to="#" aria-current="page">Landing</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Account</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Work</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Blog</Link>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Navbar with MegaMenu</h5>
              </div>
              <div className= "box-body">
                <header
                  className= "relative flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bgdark">
                  <nav className= "w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className= "flex items-center justify-between">
                      <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className= "header-logo">
                        <img src= {ALLImages('logo')} alt="logo" className= "dark:hidden block"/>
                        <img src= {ALLImages('dark')} alt="logo" className= "hidden dark:block"/>
                      </Link>
                      <div className= "sm:hidden">
                        <button type="button"
                          className= "hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-with-mega-menu" aria-controls="navbar-with-mega-menu"
                          aria-label="Toggle navigation">
                          <svg className= "hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className= "hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-with-mega-menu"
                      className= "hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className= "flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 ltr:sm:pl-5 rtl:sm:pr-5">
                        <Link className= "font-medium text-primary" to="#" aria-current="page">Landing</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Account</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Work</Link>
                        <Link className= "font-medium text-gray-600 hover:text-gray-400 dark:text-white/70 dark:hover:text-gray-500"
                          to="#">Blog</Link>

                          <div className= "hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none]">
                            <button id="hs-mega-menu-basic-dr3" type="button" className= "flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-white/70 dark:hover:text-white/70 ">
                              Dropdown
                              <svg className= "ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                              </svg>
                            </button>

                            <div className= "hs-dropdown-menu transition-[opacity,margin] ltr:right-0 rtl:left-0 duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-sm p-2 dark:bg-bgdark sm:dark:border dark:border-white/10 dark:divide-white/10 before:absolute top-full sm:border before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5">
                              <Link className= "flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                About
                              </Link>
                              <div className= "hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none]">
                                <button type="button" className= "w-full flex justify-between items-center text-sm text-gray-800 rounded-sm py-2 px-3 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300">
                                  Sub Menu
                                  <svg className= "sm:-rotate-90 ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 text-gray-600 dark:text-white/70 rtl:rotate-90" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                  </svg>
                                </button>

                                <div className= "hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-sm p-2 dark:bg-bgdark sm:dark:border dark:border-white/10 dark:divide-white/10 before:absolute sm:border ltr:before:-right-5 rtl:before:-left-5 before:top-0 before:h-full before:w-5 top-0 ltr:right-full rtl:left-full !mx-[10px]">
                                  <Link className= "flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                    About
                                  </Link>
                                  <Link className= "flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                    Downloads
                                  </Link>
                                  <Link className= "flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                    Team Account
                                  </Link>
                                </div>
                              </div>

                              <Link className= "flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Downloads
                              </Link>
                              <Link className= "flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-800 hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" to="#">
                                Team Account
                              </Link>
                            </div>
                          </div>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
          </div>
          <div className= "col-span-12">
            <div className= "box">
              <div className= "box-header">
                <h5 className= "box-title">Navbar with Color variants</h5>
              </div>
              <div className= "box-body space-y-4">
                <header
                  className= "flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-primary text-sm py-4 rounded-sm">
                  <nav className= "w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className= "flex items-center justify-between">
                      <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className= "header-logo">
                        <img src= {ALLImages('desktoplight')} alt="logo" className= "block"/>
                      </Link>
                      <div className= "sm:hidden">
                        <button type="button"
                          className= "hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border border-white/[.25] font-medium bg-primary text-white shadow-sm align-middle hover:bg-primary focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white/10 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-primary dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-primary" aria-controls="navbar-primary" aria-label="Toggle navigation">
                          <svg className= "hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className= "hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-primary"
                      className= "hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className= "flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 ltr:sm:pl-5 rtl:sm:pr-5">
                        <Link className= "font-medium text-white" to="#" aria-current="page">Landing</Link>
                        <Link className= "font-medium text-gray-300 hover:text-white"
                          to="#">Account</Link>
                        <Link className= "font-medium text-gray-300 hover:text-white"
                          to="#">Work</Link>
                        <Link className= "font-medium text-gray-300 hover:text-white"
                          to="#">Blog</Link>
                      </div>
                    </div>
                  </nav>
                </header>

                <header
                  className= "flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-secondary text-sm py-4 rounded-sm">
                  <nav className= "w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className= "flex items-center justify-between">
                      <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className= "header-logo">
                        <img src= {ALLImages('desktoplight')} alt="logo" className= "block"/>
                      </Link>
                      <div className= "sm:hidden">
                        <button type="button"
                          className= "hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border border-white/[.25] font-medium bg-secondary text-white shadow-sm align-middle hover:bg-white/[.15] focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-secondary focus:ring-white transition-all text-sm"
                          data-hs-collapse="#navbar-secondary" aria-controls="navbar-secondary"
                          aria-label="Toggle navigation">
                          <svg className= "hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <svg className= "hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div id="navbar-secondary"
                      className= "hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                      <div className= "flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 ltr:sm:pl-5 rtl:sm:pr-5">
                        <Link className= "font-medium text-white" to="#" aria-current="page">Landing</Link>
                        <Link className= "font-medium text-gray-300 hover:text-white" to="#">Account</Link>
                        <Link className= "font-medium text-gray-300 hover:text-white" to="#">Work</Link>
                        <Link className= "font-medium text-gray-300 hover:text-white" to="#">Blog</Link>
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
export default Navbar;