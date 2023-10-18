import React from 'react'
import ALLImages from '../../../common/imagesData';
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';

const Columns = () => {
  return (
    <div>


			<PageHeader currentpage="Columns" activepage="Elements" mainpage="Columns" />

                <div className= "grid grid-cols-12 gap-6">
                    <div className= "col-span-12">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Based On Column Count</h5>
                            </div>
                            <div className= "box-body">
                                <div className= "relative">
                                    <div className= "absolute inset-0 -top-8 -bottom-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
                                        <div className= "bg-stripes-primary dark:bg-stripes-primary opacity-75 w-full h-full"></div>
                                        <div className= "hidden sm:block bg-stripes-primary dark:bg-stripes-primary opacity-75 w-full h-full"></div>
                                        <div className= "hidden sm:block bg-stripes-primary dark:bg-stripes-primary opacity-75 w-full h-full"></div>
                                    </div>
                                    <div className= "relative columns-1 sm:columns-3 gap-8">
                                        <div className= "relative aspect-w-16 aspect-h-9">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg10')} alt="Image Description"/>
                                        </div>
                                        <div className= "relative aspect-w-1 aspect-h-1 mt-8">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg11')} alt="Image Description"/>
                                        </div>
                                        <div className= "relative aspect-w-1 aspect-h-1 mt-8">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg13')} alt="Image Description"/>
                                        </div>
                                        <div className= "hidden sm:block relative aspect-w-1 aspect-h-1 mt-8 sm:mt-0">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg18')} alt="Image Description"/>
                                        </div>
                                        <div className= "hidden sm:block relative aspect-w-16 aspect-h-9 mt-8">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg17')} alt="Image Description"/>
                                        </div>
                                        <div className= "hidden sm:block relative aspect-w-1 aspect-h-1 mt-8">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg16')} alt="Image Description"/>
                                        </div>
                                        <div className= "hidden sm:block relative aspect-w-1 aspect-h-1 mt-8 sm:mt-0">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg14')} alt="Image Description"/>
                                        </div>
                                        <div className= "hidden sm:block relative aspect-w-1 aspect-h-1 mt-8">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg15')} alt="Image Description"/>
                                        </div>
                                        <div className= "hidden sm:block relative aspect-w-16 aspect-h-9 mt-8">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg14')} alt="Image Description"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className= "grid grid-cols-12 gap-6">
                    <div className= "col-span-12">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Based On Column Width</h5>
                            </div>
                            <div className= "box-body">
                                <div className= "relative rounded-sm overflow-auto max-h-[800px]">
                                    <div className= "relative">
                                        <div className= "columns-3xs gap-8 space-y-8">
                                            <div className= "relative aspect-w-16 aspect-h-9">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg10')} alt="Image Description"/>
                                            </div>
                                            <div className= "relative aspect-w-1 aspect-h-1">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg16')} alt="Image Description"/>
                                            </div>
                                            <div className= "relative hidden sm:block aspect-w-1 aspect-h-1">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg17')} alt="Image Description"/>
                                            </div>
                                            <div className= "relative hidden sm:block aspect-w-16 aspect-h-9">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg14')} alt="Image Description"/>
                                            </div>
                                            <div className= "relative hidden sm:block aspect-w-16 aspect-h-9">
                                            <img className= "w-full object-cover rounded-sm" src= {ALLImages('jpg15')} alt="Image Description"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
  )
}
export default Columns;