import Link from "next/link";
import React, { useEffect } from "react";
import { AiFillFire } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { modalControl, randomNumber } from '../slices/textSlice';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Modal = ({text}) => {

  const setModal = useSelector((state) => state.textData.modal)
  const dispatch = useDispatch()

  const number = useSelector((state) =>  state.textData.random)

  const boolean = useSelector((state) => state.textData.changeText)
  console.log(boolean);

  useEffect(() => {
    dispatch(randomNumber())
  },[dispatch])

  return (
    <>
    {
      isBrowser ? (
        <div className="flex md:flex-col justify-center items-center mt-40">
      {setModal===false ? (

        <div className='p-16'>
          <button onClick={() => dispatch(modalControl(true))} className='border border-black rounded text-center w-72 p-5 text-xl'>
            {text?.buttonBook.text}
          </button>
        </div>
      ) : (
        <div className=" flex justify-center items-center flex-col w-1/2 rounded-lg shadow-xl h-auto p-2">
          {/* <Image src={Gift} width={100} height={100} objectFit="contain" /> */}
          <h2 className="text-base mt-2 text-gray-400 font-semibold text-center mx-4">
            {
            boolean==='true' ? 
            <div> Confirm reserve check <br/> Total pay ${number} </div>
            :
            <div>Confirme reservacion <br/> Total a pagar ${number} </div>
            }
          </h2>
          <div className="flex gap-5">
            <button
              className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
              onClick={() => dispatch(modalControl(false))}
            >
              {
                boolean==='true' ?
                <a>Confirm</a>
                :
                <a>Confirmar</a>
              }
            </button>
            <Link href={'/'}>
              <button
                className=" w-auto px-12 my-5 border border-red-100 h-10 hover:bg-red-700 hover:text-white   rounded-md text-red-600  hover:shadow-lg font-semibold"
                onClick={() => dispatch(modalControl(false))}
              >
                {
                boolean==='true' ?
                <a>Cancel</a>
                :
                <a>Cancelar</a>
              }
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
      ) : (
      <div className="flex md:flex-col justify-center items-center mt-40">
        {setModal===false ? (
          <div className='p-16'>
            <button onClick={() => dispatch(modalControl(true))} className='border border-black rounded text-center w-72 p-5 text-xl'>
              {text?.buttonBook.text}
            </button>
          </div>
        ) : (
          <div className=" flex justify-center items-center flex-col w-80 rounded-lg shadow-xl h-auto p-2">
            {/* <Image src={Gift} width={100} height={100} objectFit="contain" /> */}
            <h2 className="text-base mt-2 text-gray-400 font-semibold text-center mx-4">
              Hurry! Your USD 50,00 Gift Voucher is about to expire! Shop now the
              latest Summer-Trends.
            </h2>
            <div className="flex gap-5">
              <button
                className="my-5 w-auto px-5 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                onClick={() => dispatch(modalControl(false))}
              >
                Confirmar
              </button>
              <Link href={'/'}>
                <button
                  className=" w-auto px-8 my-5 border border-red-100 h-10 hover:bg-red-700 hover:text-white   rounded-md text-red-600  hover:shadow-lg font-semibold"
                  onClick={() => dispatch(modalControl(false))}
                >
                  Cancelar
                </button>
              </Link>
            </div>
          </div>
        )}
    </div>
      )
    }
    </>
  )
};

export default Modal;