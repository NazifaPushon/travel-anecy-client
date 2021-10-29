import React from 'react';

const TravelGallery = () => {
    return (
        <div className="container my-20" id="gallery">
            <div className="my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                    <div className="flex items-center">
                    <h4 className="text-xl font-semibold text-tomato">OUR TOUR GALLERY </h4>
                    <div className="w-32  mx-auto rounded-full bg-tomato my-5" style={{paddingTop : "2px"}}></div>
                    </div>
                    <h1 className="text-left font-black my-0">BEST TRAVELER'S SHARED PHOTOS</h1>
                </div>
                <div>
                    <img src="https://i.ibb.co/zbvfNM2/img038.jpg" className="w-full" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/52yFnPV/img039.jpg" className="w-full" alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
                <div className="col-span-2">
                    <img src="https://i.ibb.co/df0NTSL/photo-1568797953832-2cc7f5f7eb3c-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg" alt="" className="w-full h-80"/>
                </div>
                <div className="col-span-2">
                    <img src="https://i.ibb.co/6WPkZSq/photo-1575986767340-5d17ae767ab0-ixlib-rb-1-2.jpg" alt="" className="w-full h-80"/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                <div>
                    <img src="https://i.ibb.co/z4BDHw9/photo-1599139497467-3e7f6e244c8a-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg" className="" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/bz6dtkw/photo-1600548999926-63a80fa87be1-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg" className="" alt="" />
                </div>
                <div>
                    <div className="flex items-center">
                    <div className="w-32  mx-auto rounded-full bg-tomato my-5" style={{paddingTop : "2px"}}></div>
                    <h4 className="text-xl text-right font-semibold text-tomato">OUR TOUR GALLERY </h4>
                    
                    </div>
                    <h1 className="text-right font-black">CREATE MEMORIES</h1>
                    <p className="text-gray-600">These are the big memories that we all cherish. But there are other little memories that stick out because they had such a powerful emotional impact on you. </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TravelGallery;