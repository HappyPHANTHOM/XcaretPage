import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getData } from "../slices/textSlice";
import NavBar from './NavBar'
import Link from "next/link";

const Card = () => {

    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(getData())
    },[dispatch])

    const contact = useSelector((state) => state.textData.text)
    // const { prefooter } = contact.es 
    // console.log(prefooter)

    return (
        <>
        <Link href={'/'}>
        <NavBar/>
        </Link>
        {
            contact && contact?.es?.prefooter.numbers.map((number, i) => {
                return (
                    <div key={i} className="max-w-full flex p-10 justify-center">
                        <div className=" mb-4 border  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col ">
                            <div className="mb-8">
                                <p className="text-sm text-gray-600 flex items-center">
                                CONTACT
                                </p>
                                <div className="text-gray-900 font-bold text-xl mb-2">{number?.name} </div>
                                <p className="text-gray-700 text-base">{number?.number} </p>
                            </div>
                            <div className="flex items-center">
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