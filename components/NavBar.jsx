import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, changeTxt } from '../slices/textSlice';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Link from "next/link";

const NavBar = ({contact, title}) => {

  const dispatch = useDispatch()
  const boolean = useSelector((state) => state.textData.changeText)


    return ( 
    <>
    {
    isBrowser ? (
      <nav className="flex items-center justify-between flex-wrap bg-stone-300 p-6 border">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <picture>
            <source srcSet="https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg" type="image/webp" />
            <img  src="https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg" alt="Logo" width={''}/>
          </picture>
        </div>
        <div id='menu' className="w-full block flex- lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {
              boolean==='false' ? (
                  <button onClick={() => dispatch(changeTxt('true'))} className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-grey mr-4">
                  {contact}
                  </button>
              ) : (
                  <button onClick={() => dispatch(changeTxt('false'))} className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-grey mr-4">
                  {contact}
                  </button>
              )
            }
            <a className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-grey mr-4">
              <Link href={'/contact'}>
                {title}
              </Link>
            </a>
          </div>
        
        </div>
      </nav> ) : (
      <div>
        {/* <p>es movile</p> */}
        <nav className="flex items-center justify-between  pl-2 border">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <picture className="w-36">
              <source srcSet="https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg" type="image/webp" />
              <img  src="https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg" alt="Logo" width={''}/>
            </picture>
          </div>
          <div id='menu' className=" flex w-auto">
            <div className="text-sm p-5">
              {
                boolean==='false' ? (
                  <button onClick={() => dispatch(changeTxt('true'))} className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-grey mr-4">
                  {contact}
                </button>
                ) : (
                  <button onClick={() => dispatch(changeTxt('false'))} className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-grey mr-4">
                  {contact}
                </button>
                )
              }   
            </div>
            <a className="  inline-block p-5 text-black-200 hover:text-grey mr-4 my-4">
              <Link href={'/contact'}>
                {title}
              </Link>
            </a>

          </div>
        </nav>
      </div>
      )
    }
    </>
    );
}
 
export default NavBar;