import React from "react";

const Footer = ({footerData}) => {
    // const data = footerData.es;
    const {legals, prefooter, footer} = footerData;
    console.log(footerData);

    return (
        <div className="mt-20">
            <div className="h-64 bg-stone-300">
                <div className="px-40 pt-8">
                    {legals}
                </div>
            </div>
            <div className="h-36 bg-stone-700">
                <div className="px-56 pt-7 text-sm text-white">
                    {prefooter?.contactCenter.title}
                    <br/>
                    {prefooter?.contactCenter.email}
                </div>
            </div>
            <div className="h-12 bg-black">
                <div className="px-56 text-sm pt-3 text-white justify-start">
                    {footer?.copy}
                    {footer?.links[0].tittle}
                    {footer?.links[1].tittle}
                </div>
            </div>
        </div>
     );
}

export default Footer;