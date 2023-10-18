import React from 'react'
import { Link } from 'react-router-dom';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';

const Paginations = () => {
  return (
    <div>

             <PageHeader currentpage="Pagination" activepage="Elements" mainpage="Pagination" />        

                <div className= "grid grid-cols-12 gap-x-6">
                    <div className= "xxl:!col-span-3 md:col-span-6 col-span-12">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Basic Pagination</h5>
                            </div>
                            <div className= "box-body">
                              <div className= "overflow-auto">
                                <nav >
                                  <ul className= "ti-pagination">
                                    <li><Link className= "page-link" to="#">
                                      Previous
                                    </Link></li>
                                    <li><Link className= "page-link" to="#" aria-current="page">1</Link></li>
                                    <li><Link className= "page-link" to="#">2</Link></li>
                                    <li><Link className= "page-link" to="#">3</Link></li>
                                    <li><Link className= "page-link" to="#">
                                      Next
                                    </Link></li>
                                  </ul>
                                </nav>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className= "xxl:!col-span-3 md:col-span-6 col-span-12">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Pagination Working with icons</h5>
                            </div>
                            <div className= "box-body">
                              <nav >
                                <ul className= "ti-pagination">
                                  <li><Link className= "page-link" to="#">

                                  <span aria-hidden="true">«</span>
                                  <span className= "sr-only">Previous</span>
                                  </Link></li>
                                  <li><Link className= "page-link" to="#" aria-current="page">1</Link></li>
                                  <li><Link className= "page-link" to="#">2</Link></li>
                                  <li><Link className= "page-link" to="#">3</Link></li>
                                  <li><Link className= "page-link" to="#">
                                    <span className= "sr-only">Next</span>
                                    <span aria-hidden="true">»</span>
                                  </Link></li>
                                </ul>
                              </nav>
                            </div>
                        </div>
                    </div>
                    <div className= "xxl:!col-span-3 md:col-span-6 col-span-12">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Pagination Disabled and Active State</h5>
                            </div>
                            <div className= "box-body">
                              <nav >
                                <ul className= "ti-pagination">
                                  <li><Link className= "page-link disabled" to="#">
                                  <span aria-hidden="true">«</span>
                                  <span className= "sr-only">Previous</span>
                                  </Link></li>
                                  <li><Link className= "page-link active" to="#" aria-current="page">1</Link></li>
                                  <li><Link className= "page-link" to="#">2</Link></li>
                                  <li><Link className= "page-link" to="#">3</Link></li>
                                  <li><Link className= "page-link" to="#">
                                    <span className= "sr-only">Next</span>
                                    <span aria-hidden="true">»</span>
                                  </Link></li>
                                </ul>
                              </nav>
                            </div>
                        </div>
                    </div>
                    <div className= "xxl:!col-span-3 md:col-span-6 col-span-12">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Pagination Center Alignment</h5>
                            </div>
                            <div className= "box-body">
                              <nav >
                                <ul className= "ti-pagination justify-center">
                                  <li><Link className= "page-link" to="#">
                                  <span aria-hidden="true">«</span>
                                  <span className= "sr-only">Previous</span>
                                  </Link></li>
                                  <li><Link className= "page-link active" to="#" aria-current="page">1</Link></li>
                                  <li><Link className= "page-link" to="#">2</Link></li>
                                  <li><Link className= "page-link" to="#">3</Link></li>
                                  <li><Link className= "page-link" to="#">
                                    <span className= "sr-only">Next</span>
                                    <span aria-hidden="true">»</span>
                                  </Link></li>
                                </ul>
                              </nav>
                            </div>
                        </div>
                    </div>
                    <div className= "xxl:!col-span-3 md:col-span-6 col-span-12">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Pagination Right Alignment</h5>
                            </div>
                            <div className= "box-body">
                              <nav >
                                <ul className= "ti-pagination justify-end">
                                  <li><Link className= "page-link" to="#">
                                  <span aria-hidden="true">«</span>
                                  <span className= "sr-only">Previous</span>
                                  </Link></li>
                                  <li><Link className= "page-link active" to="#" aria-current="page">1</Link></li>
                                  <li><Link className= "page-link" to="#">2</Link></li>
                                  <li><Link className= "page-link" to="#">3</Link></li>
                                  <li><Link className= "page-link" to="#">
                                    <span className= "sr-only">Next</span>
                                    <span aria-hidden="true">»</span>
                                  </Link></li>
                                </ul>
                              </nav>
                            </div>
                        </div>
                    </div>
                    <div className= "xxl:!col-span-3 md:col-span-6 col-span-12">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Pagination Style 1</h5>
                            </div>
                            <div className= "box-body overflow-auto">
                              <nav className= "pagination-style-1">
                                <ul className= "ti-pagination">
                                  <li><Link aria-label="anchor" className= "page-link" to="#">
                                    <i className= "ri-arrow-left-s-line align-middle rtl:rotate-180"></i>
                                  </Link></li>
                                  <li><Link className= "page-link active" to="#" aria-current="page">1</Link></li>
                                  <li><Link className= "page-link" to="#">2</Link></li>
                                  <li><Link aria-label="anchor" className= "page-link" to="#"><i className= "ri-more-line"></i></Link></li>
                                  <li><Link className= "page-link" to="#">21</Link></li>
                                  <li><Link className= "page-link" to="#">22</Link></li>
                                  <li><Link aria-label="anchor" className= "page-link" to="#">
                                    <i className= "ri-arrow-right-s-line align-middle rtl:rotate-180"></i>
                                  </Link></li>
                                </ul>
                              </nav>
                            </div>
                        </div>
                    </div>
                    <div className= "xxl:!col-span-3 md:col-span-6 col-span-12">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Pagination Style 2</h5>
                            </div>
                            <div className= "box-body overflow-auto">
                              <nav className= "pagination-style-2">
                                <ul className= "ti-pagination">
                                  <li><Link className= "page-link" to="#">
                                    Prev
                                  </Link></li>
                                  <li><Link className= "page-link active" to="#" aria-current="page">1</Link></li>
                                  <li><Link className= "page-link" to="#">2</Link></li>
                                  <li><Link  aria-label="anchor" className= "page-link" to="#"><i className= "ri-more-line"></i></Link></li>
                                  <li><Link className= "page-link" to="#">21</Link></li>
                                  <li><Link className= "page-link" to="#">22</Link></li>
                                  <li><Link className= "page-link" to="#">
                                    Next
                                  </Link></li>
                                </ul>
                              </nav>
                            </div>
                        </div>
                    </div>
                    <div className= "xxl:!col-span-3 md:col-span-6 col-span-12">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Pagination Style 3</h5>
                            </div>
                            <div className= "box-body overflow-auto">
                              <nav className= "pagination-style-3">
                                <ul className= "ti-pagination">
                                  <li><Link className= "page-link" to="#">
                                   Prev
                                  </Link></li>
                                  <li><Link className= "page-link active" to="#" aria-current="page">1</Link></li>
                                  <li><Link className= "page-link" to="#">2</Link></li>
                                  <li><Link aria-label="anchor" className= "page-link" to="#"><i className= "ri-more-line"></i></Link></li>
                                  <li><Link className= "page-link" to="#">21</Link></li>
                                  <li><Link className= "page-link" to="#">22</Link></li>
                                  <li><Link className= "page-link" to="#">
                                    Next
                                  </Link></li>
                                </ul>
                              </nav>
                            </div>
                        </div>
                    </div>
                    <div className= "xxl:!col-span-3 col-span-12">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Pagination Style 4</h5>
                            </div>
                            <div className= "box-body overflow-auto">
                              <nav className= "pagination-style-1">
                                <ul className= "ti-pagination">
                                  <li><Link className= "page-link" to="#">
                                   Prev
                                  </Link></li>
                                  <li><Link className= "page-link active" to="#" aria-current="page">1</Link></li>
                                  <li><Link className= "page-link" to="#">2</Link></li>
                                  <li><Link aria-label="anchor" className= "page-link" to="#"><i className= "ri-more-line"></i></Link></li>
                                  <li><Link className= "page-link" to="#">16</Link></li>
                                  <li><Link className= "page-link" to="#">17</Link></li>
                                  <li><Link className= "page-link" to="#">
                                    Next
                                  </Link></li>
                                </ul>
                              </nav>
                            </div>
                        </div>
                    </div>
                    <div className= "xxl:!col-span-9 col-span-12">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Pagination Sizing</h5>
                            </div>
                            <div className= "box-body space-y-4">
                              <nav>
                                <ul className= "ti-pagination pagination-sm">
                                  <li><Link className= "page-link" to="#">
                                  <span aria-hidden="true">«</span>
                                  <span className= "sr-only">Previous</span>
                                  </Link></li>
                                  <li><Link className= "page-link active" to="#" aria-current="page">1</Link></li>
                                  <li><Link className= "page-link" to="#">2</Link></li>
                                  <li><Link className= "page-link" to="#">3</Link></li>
                                  <li><Link className= "page-link" to="#">
                                    <span className= "sr-only">Next</span>
                                    <span aria-hidden="true">»</span>
                                  </Link></li>
                                </ul>
                              </nav>
                              <nav>
                                <ul className= "ti-pagination sm:justify-center">
                                  <li><Link className= "page-link" to="#">
                                  <span aria-hidden="true">«</span>
                                  <span className= "sr-only">Previous</span>
                                  </Link></li>
                                  <li><Link className= "page-link active" to="#" aria-current="page">1</Link></li>
                                  <li><Link className= "page-link" to="#">2</Link></li>
                                  <li><Link className= "page-link" to="#">3</Link></li>
                                  <li><Link className= "page-link" to="#">
                                    <span className= "sr-only">Next</span>
                                    <span aria-hidden="true">»</span>
                                  </Link></li>
                                </ul>
                              </nav>
                              <nav>
                                <ul className= "ti-pagination sm:justify-end pagination-lg">
                                  <li><Link className= "page-link" to="#">
                                  <span aria-hidden="true">«</span>
                                  <span className= "sr-only">Previous</span>
                                  </Link></li>
                                  <li><Link className= "page-link active" to="#" aria-current="page">1</Link></li>
                                  <li><Link className= "page-link" to="#">2</Link></li>
                                  <li><Link className= "page-link" to="#">3</Link></li>
                                  <li><Link className= "page-link" to="#">
                                    <span className= "sr-only">Next</span>
                                    <span aria-hidden="true">»</span>
                                  </Link></li>
                                </ul>
                              </nav>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
  )
}
export default Paginations;