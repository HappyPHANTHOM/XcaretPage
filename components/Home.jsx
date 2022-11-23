import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData, changeTxt, modalControl } from '../slices/textSlice';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import NavBar from './NavBar';
import Slider from './Slider';
import Footer from './Footer';
import Modal from './Modal';
import Link from 'next/link';



const Home = () => {
    
    const dispatch = useDispatch()

    useEffect( () => {
       dispatch(getData())
    //    validate()
    },[dispatch])

    // const [changeText,setChangeText] = useState('false')
    // const [data, setData] = useState(useSelector((state) => state.textData.text))
   

    // function handleClick(){
    //     console.log(boolean);
    //     if(boolean==='true'){
    //     dispatch(changeTxt('false'))
    //     }
    //     dispatch(changeTxt('true'))
    // }

    const boolean = useSelector((state) => state.textData.changeText)
    const data = useSelector((state) => state.textData.text)
    const setModal = useSelector((state) => state.textData.modal)
    // console.log(boolean);
    // const {es} = aber;
    // const {es} = data; 1554340027

    function validate(boolean){
        if(boolean==='true'){
            const {en} = data; 
            return en;
        }else {
            const {es} = data;
            return es;
        }
    };

    const text = validate(boolean);

    if(isBrowser){
        if(!data){
            return(
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }
        return(
            <BrowserView>
                {/* <div className='container px-5'> */}

                <div className='container'>
                    <NavBar contact={text?.navbar.menu.lang.href} title={text?.navbar.menu.contact}/>
                    <div>
                        <picture>
                        <source srcSet="https://www.whereismykiwi.com/wp-content/uploads/2020/10/xcaret-mexico.jpg" type="image/webp" />
                        <img className="w-full" src="https://www.whereismykiwi.com/wp-content/uploads/2020/10/xcaret-mexico.jpg" alt="Sunset in the mountains"/>
                        </picture>
                    </div>
                    <div className='grid  grid-cols-1 sm:grid-cols-2 gap-1 mt-20 ml-20'>
                        <div className="grid grid-rows-2">
                            <div className="bg-stone-300 text-center row-span-2">
                                {/* <Slider imgArr={es.carousel.desktop}/> */}
                                <Slider/>
                            </div>
                        </div>
                        <div className="grid grid-rows-2">
                            <div className="bg-stone-300 text-center row-span-2">
                                <div className="container mx-auto mt-5 px-5">
                                    <div>
                                        <picture>
                                        <source srcSet="https://cdn-5fc8b814c1ac1a221c181e9b.closte.com/hostlogos/hotelxcaret.png" type="image/webp" />
                                        <img className='w-24 h-32 pl-5' src="https://cdn-5fc8b814c1ac1a221c181e9b.closte.com/hostlogos/hotelxcaret.png" alt="Logo xcaret mexico"/>
                                        </picture>
                                    </div>
                                    <div className='text-left '>
                                        <div className='uppercase text-3xl'>
                                            Hotel Xcaret Mexico
                                        </div>
                                        <div className='text-xl'>
                                            {text?.promotions[0].Subtitle}
                                        </div>
                                        <div>
                                            {text?.promotions[0].Subtitle}
                                        </div>
                                    </div>
                                    <Link href={'/modal'}>
                                    <div className='p-16'>
                                        <button onClick={() => dispatch(modalControl(true))} className='border border-black rounded text-center w-72 p-5 text-xl'>
                                            {text?.buttonBook.text}
                                        </button>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid  grid-cols-1 sm:grid-cols-2 gap-1 mt-20 mr-20'>
                        <div className="grid grid-rows-2">
                            <div className="bg-stone-300 text-center row-span-2">
                                <div className="container mx-auto mt-5 px-5">
                                    <div>
                                        <picture>
                                        <source srcSet="https://www.hotelxcaretarte.com/img/logo.png" type="image/webp" />
                                        <img className='w-64 h-32 pl-5' src="https://www.hotelxcaretarte.com/img/logo.png" alt="Logo xcaret arte"/>
                                        </picture>
                                    </div>
                                    <div className='text-right'>
                                        <div className='uppercase text-3xl'>
                                            {text?.promotions[0].title}
                                        </div> 
                                        <div className='text-xl'>
                                            {text?.promotions[0].Subtitle}
                                        </div>
                                        <div>
                                            {text?.promotions[0].Subtitle}
                                        </div>
                                    </div>
                                    <Link href={'/modal'}>
                                        <div className='p-16'>
                                            <button onClick={() => dispatch(modalControl(true))} className='border border-black rounded text-center w-72 p-5 text-xl'>
                                                {text?.buttonBook.text}
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-rows-2">
                            <div className="bg-stone-300 text-center row-span-2">
                                {/* <Slider imgArr={text?.carousel.desktop}/> */}
                                <Slider/>
                            </div>
                        </div>
                    </div>
                    <div className='grid  grid-cols-1 sm:grid-cols-2 gap-1 mt-20 ml-20'>
                        <div className="grid grid-rows-2">
                            <div className="bg-stone-300 text-center row-span-2">
                                {/* <Slider imgArr={text?.carousel.desktop}/> */}
                                <Slider/>
                            </div>
                        </div>
                        <div className="grid grid-rows-2">
                            <div className="bg-stone-300 text-center row-span-2">
                                <div className="container mx-auto mt-5 px-5">
                                    <div>
                                        <picture>
                                        <source srcSet="https://www.hotelxcaret.com/assets/concentrador-hoteles/cdlp/cdlp.webp" type="image/webp" />
                                        <img className='w-24 h-32 pl-5' src="https://www.hotelxcaret.com/assets/concentrador-hoteles/cdlp/cdlp.webp" alt="Logo casa de playa"/>
                                        </picture>
                                    </div>
                                    <div className='text-left '>
                                        <div className='uppercase text-3xl'>
                                            La Casa de la Playa
                                        </div>
                                        <div className='text-xl'>
                                            {text?.promotions[0].Subtitle}
                                        </div>
                                        <div>
                                            {text?.promotions[0].Subtitle}
                                        </div>
                                        <Link href='/modal'>
                                        {/* <Modal text={text}/> */}
                                            <div className='p-16'>
                                                <button onClick={() => dispatch(modalControl(true))} className='border border-black rounded text-center w-72 p-5 text-xl'>
                                                    {text?.buttonBook.text}
                                                </button>
                                            </div>
                                        </Link>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Footer footerData={text}/> */}
                    {
                        text ? (
                            <div  className='row-auto'>
                            <Footer footerData={text}/>
                            </div>
                        ) : (
                            <div  className='row-auto'>
                                <a>cargando</a>
                            </div>
                        )
                    }
                </div>    
            </BrowserView>
        )
    }
    else {
        return ( 
            <MobileView>

                    <div className='grid'>
                        
                        <div className="grid grid-rows-3">
                        <div className='mx-2'>
                                <NavBar contact={text?.navbar.menu.lang.href} title={text?.navbar.menu.contact}/>
                                    <picture>
                                    <source srcSet="https://www.whereismykiwi.com/wp-content/uploads/2020/10/xcaret-mexico.jpg" type="image/webp" />
                                    <img src="https://www.whereismykiwi.com/wp-content/uploads/2020/10/xcaret-mexico.jpg" alt="Sunset in the mountains"/>
                                    </picture>
                                </div>
                            <div className=" text-center row-span-2">  
                                <div className="container mx-auto p-5 px-5 ml-4">
                                    <Slider/>
                                    <div>
                                        
                                        <picture className=''>
                                        <source srcSet="https://cdn-5fc8b814c1ac1a221c181e9b.closte.com/hostlogos/hotelxcaret.png" type="image/webp" />
                                        <img className='w-24 h-36 mx-40' src="https://cdn-5fc8b814c1ac1a221c181e9b.closte.com/hostlogos/hotelxcaret.png" alt="Logo xcaret mexico"/>
                                        </picture>
                                    </div>
                                    <div className='text-center '>
                                        <div className='uppercase text-3xl'>
                                            Hotel Xcaret Mexico
                                        </div>
                                        <div className='text-xl'>
                                            {text?.promotions[0].Subtitle}
                                        </div>
                                        <div>
                                            {text?.promotions[0].Subtitle}
                                        </div>
                                    </div>
                                    <Link href={'/modal'}>
                                    <div className='p-16'>
                                        <button onClick={() => dispatch(modalControl(true))} className='border border-black rounded text-center w-72 p-5 text-xl'>
                                            {text?.buttonBook.text}
                                        </button>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid  grid-cols-1 sm:grid-cols-2 gap-1 m-4'>
                        <div className="grid grid-rows-2">
                            <div className=" text-center row-span-2">
                                <div className="container mx-auto mt-5 px-5">
                                    <div>
                                    <Slider/>
                                        <picture>
                                        <source srcSet="https://www.hotelxcaretarte.com/img/logo.png" type="image/webp" />
                                        <img className='w-72 h-32 mx-16' src="https://www.hotelxcaretarte.com/img/logo.png" alt="Logo xcaret arte"/>
                                        </picture>
                                    </div>
                                    <div className='text-center'>
                                        <div className='uppercase text-3xl'>
                                            {text?.promotions[0].title}
                                        </div> 
                                        <div className='text-xl'>
                                            {text?.promotions[0].Subtitle}
                                        </div>
                                        <div>
                                            {text?.promotions[0].Subtitle}
                                        </div>
                                    </div>
                                    <Link href={'/modal'}>
                                        <div className='p-16'>
                                            <button onClick={() => dispatch(modalControl(true))} className='border border-black rounded text-center w-72 p-5 text-xl'>
                                                {text?.buttonBook.text}
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid  grid-cols-1 sm:grid-cols-2 gap-1 m-4'>
                        <div className="grid grid-rows-2">
                            <div className=" text-center row-span-2">
                                <div className="container mx-auto mt-5 px-5">
                                    <div>
                                    <Slider/>

                                        <picture>
                                        <source srcSet="https://www.hotelxcaret.com/assets/concentrador-hoteles/cdlp/cdlp.webp" type="image/webp" />
                                        <img className='w-24 h-36 mx-40' src="https://www.hotelxcaret.com/assets/concentrador-hoteles/cdlp/cdlp.webp" alt="Logo casa de playa"/>
                                        </picture>
                                    </div>
                                    <div className='text-center '>
                                        <div className='uppercase text-3xl'>
                                            La Casa de la Playa
                                        </div>
                                        <div className='text-xl'>
                                            {text?.promotions[0].Subtitle}
                                        </div>
                                        <div>
                                            {text?.promotions[0].Subtitle}
                                        </div>
                                        <Link href='/modal'>
                                        {/* <Modal text={text}/> */}
                                            <div className='p-16'>
                                                <button onClick={() => dispatch(modalControl(true))} className='border border-black rounded text-center w-72 p-5 text-xl'>
                                                    {text?.buttonBook.text}
                                                </button>
                                            </div>
                                        </Link>    
                                        

                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {
                        text ? (
                            <div  className='row-auto'>
                            <Footer footerData={text}/>
                            </div>
                        ) : (
                            <div  className='row-auto'>
                                <a>cargando</a>
                            </div>
                        )
                    }
            </MobileView>
        )
    }
}
 
export default Home;