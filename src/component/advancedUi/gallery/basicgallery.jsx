import React, { Fragment, useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import file01 from '../../../assets/img/gallery/1.jpg';
import file02 from '../../../assets/img/gallery/2.jpg';
import file03 from '../../../assets/img/gallery/3.jpg';
import file04 from '../../../assets/img/gallery/4.jpg';
import file05 from '../../../assets/img/gallery/5.jpg';
import file07 from '../../../assets/img/gallery/7.jpg';
import file08 from '../../../assets/img/gallery/8.jpg';
import file09 from '../../../assets/img/gallery/9.jpg';
import file10 from '../../../assets/img/gallery/10.jpg';
import video1 from '../../../assets/img/video/gallery-video-1.mp4'

export const LightboxGallery1 = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
            <div className="col-span-12 lg:col-span-3">
                <div className="inner">
                    <a href="#" className='gallery'>
                        <img src={file02} alt='media2' className=" w-full" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
                <div className="inner">
                    <a href="#" className='gallery'>
                        <img src={file04} alt='media3' className="" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">

                <div className="inner">
                    <a href="#" className='gallery'>
                        <img src={file03} alt='media4' className=" w-full" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">

                <div className="inner">
                    <a href="#" className='gallery'>
                        <img src={file01} alt='media5' className="" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Captions]} zoom={{
                maxZoomPixelRatio: 10,
                scrollToZoom: true

            }}
                slides={[{
                    src: file01, title: `Image-1`,
                }, {
                    src: file04, title: "Image-2",
                }, {
                    src: file03, title: "Image-3",
                }, {
                    src: file05, title: "Image-4",
                },]}

            />

        </Fragment>
    );
};


export const LightboxGalleryDescription = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
            <div className="col-span-12 lg:col-span-3">
                <div className="inner">
                    <a href="#" data-glightbox='title:Description Bottom' className="gallery2" >
                        <img src={file02} alt='media2' className='w-full' onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3 ">
                <div className="inner">
                    <a href="#" className="gallery2" >
                        <img src={file04} alt='media3' onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">

                <div className="inner">
                    <a href="#" className="gallery2" >
                        <img src={file08} alt='media4' className="gallery2" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">

                <div className="inner">
                    <a href="#" className="gallery2" >
                        <img src={file07} alt='media5' className="gallery2" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Captions]} captions={{ descriptionTextAlign: 'center', titleTextalign: 'end' }} zoom={{
                scrollToZoom: true


            }}
                slides={[{

                    src: file01, title: `Image-1`,
                    description: "Veliki zali, Dubravica, Croatia",
                }, {

                    src: file08, title: "Image-2",
                    description: "Veliki zali, Dubravica, Croatia",
                }, {
                    src: file03, title: "Image-3",
                    description: "Veliki zali, Dubravica, Croatia",
                }, {
                    src: file07, title: "Image-4",
                    description: "Veliki zali, Dubravica, Croatia",
                },]}


            />



        </Fragment>
    );
};


export const LightboxGalleryVideo = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
            <div className="col-span-12 lg:col-span-3">
                <div className="inner">
                    <a href="#" className="gallery3" >
                        <img src={file10} alt='media4' className="gallery3" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
                <div className="inner">
                    <a href="#" className="gallery3" >
                        <img src={file09} alt='media5' className="gallery3" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
                <div className="inner">
                    <a href="#" className="gallery3" >
                        <img src={file08} alt='media5' className="gallery3" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
                <div className="inner">
                    <a href="#" className="gallery3" >
                        <img src={file07} alt='media5' className="gallery3" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Video]} captions={{ descriptionTextAlign: 'center', titleTextalign: 'end' }}


                slides={[
                    {

                        src: file10,
                        type: "video",
                        width: 1280,
                        height: 720,
                        sources: [
                            {
                                src: video1,
                                type: "video/mp4"
                            }
                        ]

                    }, {

                        src: file09, type: "video",
                        width: 1280,
                        height: 720,
                        sources: [
                            {
                                src: video1,
                                type: "video/mp4"
                            }
                        ]

                    }, {
                        src: file08, type: "video",
                        width: 1280,
                        height: 720,
                        sources: [
                            {
                                src: video1,
                                type: "video/mp4"
                            }
                        ]

                    }, {
                        src: file07, type: "video",
                        width: 1280,
                        height: 720,
                        sources: [
                            {
                                src: video1,
                                type: "video/mp4"
                            }
                        ]

                    },

                ]}

            />

        </Fragment>
    );
};







