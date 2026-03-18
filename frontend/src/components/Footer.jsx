import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
    return (
        <div>
        <div className="flex flex-col sm:grid grid=cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
<div>
    <img src={assets.logo} className="mb-5 w-32" alt=""/>
    <p className="m-full md:w-2/3 text-gray-600"> 
        Lorem Ipsum is simply dummy text of the printing and type setting <br/>
        industry. Lorem Ipsum has been the industry's standard dummy text <br/>
        ever since the 1500s. when on unknown printer took a galley of type and <br/>
        scrambled it to make a type specimen book.
         </p>
   </div>
        </div>

        </div>
    )
}
export default Footer