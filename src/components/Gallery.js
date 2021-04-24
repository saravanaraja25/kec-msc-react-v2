import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery as Gall, Item } from 'react-photoswipe-gallery'
const Gallery = () => {
    const images = [
        {
          original: '/images/img/1.JPG',
          thumbnail: '/images/img/1.JPG',
        },
        {
          original: '/images/img/2.jpg',
          thumbnail: '/images/img/2.jpg',
        },
        {
          original: '/images/img/3.jpg',
          thumbnail: '/images/img/3.jpg',
        },
        {
          original: '/images/img/4.jpg',
          thumbnail: '/images/img/4.jpg',
        },
        {
          original: '/images/img/5.jpg',
          thumbnail: '/images/img/5.jpg',
        },
        {
          original: '/images/img/6.jpg',
          thumbnail: '/images/img/6.jpg',
        },
        {
            original: '/images/img/7.JPG',
            thumbnail: '/images/img/7.JPG',
        },
        {
            original: '/images/img/8.JPG',
            thumbnail: '/images/img/8.JPG',
        },
        {
            original: '/images/img/9.JPG',
            thumbnail: '/images/img/9.JPG',
        },
        {
            original: '/images/img/10.JPG',
            thumbnail: '/images/img/10.JPG',
        },
        {
            original: '/images/img/11.JPG',
            thumbnail: '/images/img/11.JPG',
        },
        {
            original: '/images/img/12.JPG',
            thumbnail: '/images/img/12.JPG',
        },
        {
            original: '/images/img/13.JPG',
            thumbnail: '/images/img/13.JPG',
        },
        {
            original: '/images/img/14.JPG',
            thumbnail: '/images/img/14.JPG',
        },
        {
            original: '/images/img/15.JPG',
            thumbnail: '/images/img/15.JPG',
        },
        {
            original: '/images/img/16.JPG',
            thumbnail: '/images/img/16.JPG',
        },
        {
            original: '/images/img/17.JPG',
            thumbnail: '/images/img/17.JPG',
        },
        {
            original: '/images/img/18.JPG',
            thumbnail: '/images/img/18.JPG',
        },
        {
            original: '/images/img/19.JPG',
            thumbnail: '/images/img/19.JPG',
        },
        {
            original: '/images/img/20.JPG',
            thumbnail: '/images/img/20.JPG',
        },
        {
            original: '/images/img/21.JPG',
            thumbnail: '/images/img/21.JPG',
        },
        {
            original: '/images/img/22.JPG',
            thumbnail: '/images/img/22.JPG',
        },
        {
            original: '/images/img/23.JPG',
            thumbnail: '/images/img/23.JPG',
        },
        {
            original: '/images/img/24.JPG',
            thumbnail: '/images/img/24.JPG',
        },
        {
            original: '/images/img/25.JPG',
            thumbnail: '/images/img/25.JPG',
        },
        {
            original: '/images/img/26.JPG',
            thumbnail: '/images/img/26.JPG',
        },
    ];
    return (
        <div data-aos="fade-up" className="gallery">
            <div className="breadcrumb py-5 mb-3">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-6">
                            <h2>Gallery</h2>
                        </div>
                        <div className="col-6 text-right">
                            <h6 className="mt-2">Home / Gallery</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <Gall>
                        {images.map((data)=>
                            <div className="col-md-3 mb-4 d-flex justify-content-center">
                                <Item
                                    original={data.original}
                                    thumbnail={data.thumbnail}
                                    width="1024"
                                    height="768"
                                    >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={data.thumbnail} />
                                    )}
                                </Item>
                            </div>
                        )}
                    </Gall>
                </div>
            </div>
        </div>
    )
}

export default Gallery
