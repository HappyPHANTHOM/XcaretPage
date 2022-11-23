import React from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import NavBar from "./NavBar";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Link from "next/link";

const Confirmation = () => {

   const setModal = useSelector((state) => state.textData.modal)

    return ( 
        <>
            {
                isBrowser ? (
                    <>  
                        <Link href={'/'}>
                            <NavBar/>
                        </Link>    
                    {
                        setModal===false ? (
                        <div>
                            
                            <div className="container px-96 pt-3 py-3">
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <picture>
                                        <source srcSet="https://cdn-3.expansion.mx/be/96/0407b0894af48a2583f8cffe67fa/mg-8114.jpg" type="image/webp" />
                                        <img  className="w-full" src="https://cdn-3.expansion.mx/be/96/0407b0894af48a2583f8cffe67fa/mg-8114.jpg" alt="Sunset in the mountains"/>    
                                    </picture>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                        <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>  
                                    </div>
                                </div>
                            </div>
                        </div> ) : (
                            <Modal/>
                        )
                    }
                    </>
                ) : (
                    <>
                    <Link href={'/'}>
                        <NavBar/>
                    </Link>
                    {
                        setModal===false ? (
                        <div>
                            
                            <div className="container px-10 pt-3 py-3">
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <picture>
                                        <source srcSet="https://cdn-3.expansion.mx/be/96/0407b0894af48a2583f8cffe67fa/mg-8114.jpg" type="image/webp" />
                                        <img  className="w-full" src="https://cdn-3.expansion.mx/be/96/0407b0894af48a2583f8cffe67fa/mg-8114.jpg" alt="Sunset in the mountains"/>    
                                    </picture>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                        <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>  
                                    </div>
                                </div>
                            </div>
                        </div> ) : (
                            <Modal/>
                        )
                    }
                    </>
                )
            }
        </>
        
    )
        

}
 
export default Confirmation;