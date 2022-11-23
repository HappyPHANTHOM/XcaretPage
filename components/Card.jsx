import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getData } from "../slices/textSlice";
import NavBar from './NavBar'
import Link from "next/link";

const Card = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    },[])

    const contact = useSelector((state) => state.textData.text)
    const { prefooter } = contact.es 
    // console.log(prefooter)

    return (
        <>
        <Link href={'/'}>
        <NavBar/>
        </Link>
        {
            prefooter && prefooter?.numbers.map((number, i) => {
                return (
                    <div key={i} className="max-w-full flex p-10 justify-center">
                        {/* <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
                        </div> */}
                        <div className=" mb-4 border  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col ">
                            <div className="mb-8">
                                <p className="text-sm text-gray-600 flex items-center">
                                {/* <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg> */}
                                CONTACT
                                </p>
                                <div className="text-gray-900 font-bold text-xl mb-2">{number?.name} </div>
                                <p className="text-gray-700 text-base">{number?.number} </p>
                            </div>
                            <div className="flex items-center">
                                {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
                                <picture>
                                <source srcSet="https://direccionempresarial.com.mx/wp-content/uploads/2021/08/servicio-de-atencion-al-cliente.jpg" type="image/webp" />
                                <img  className="w-40 h-40" src="https://direccionempresarial.com.mx/wp-content/uploads/2021/08/servicio-de-atencion-al-cliente.jpg" alt="Sunset in the mountains"/>
                                </picture>
                               
                            </div>
                        </div>
                  </div>
                )
               
            })
        } 
       </>
     );
}
 
export default Card;