import React from 'react'
import Button from '../common/Button';


const Subscription = () => {
    return (
        <div className=" mx-auto max-w-7xl px-3 py-6 sm:px-6 lg:px-16">
            <div className="subscription relative flex justify-center items-center p-8 md:p-16 mt-4 sm:mt-20 md:mt-20">
                <div className="absolute   redcircle2 redcircle2-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="196" height="313" viewBox="0 0 196 313" fill="none">
                        <path d="M-18.9205 -6.97227C34.4359 -18.6314 96.4688 -1.86827 138.625 36.6057C181.118 74.9855 203.519 134.955 193.477 184.038C183.22 233 140.183 271.17 93.189 304.277C46.2894 337.721 -4.56697 366.102 -47.6727 356.021C-90.5631 346.061 -125.703 297.64 -143.421 245.979C-161.26 194.532 -162.108 139.603 -139.977 92.2195C-117.63 44.9567 -72.4923 4.56569 -18.9205 -6.97227Z" fill="white" fill-opacity="0.16" />
                    </svg>
                </div>
                <div className="lg:w-9/12 md:px-6">
                    <div>
                        <h3 className="text-sm md:text-4xl text-center text-white textplayfair">Subscribe to get updates on exciting offers & deals</h3>
                    </div>
                    <div className="mt-6 ">
                        <form >
                            <div className="flex align-items-center mt-3 relative">
                                <input type="text" placeholder='Enter your email' className=" text-white  block w-full p-4  bg-white border text-base shadow-sm placeholder-white
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                
                                "/>
                                <Button onClick={(e)=>{e.preventDefault()}} textclass="absolute right-0  z-1 bg-white text-red-800 hover:text-white hover:bg-red-800 p-4 textplayfair" text="Subscribe"></Button>
                            </div>

                        </form>
                    </div>
                </div >
                <div className="absolute  redcircle2 redcircle2-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="173" height="313" viewBox="0 0 173 313" fill="none">
                        <path d="M305.451 52.7092C338.647 89.9696 353.099 146.876 341.357 197.686C329.84 248.721 292.128 293.434 248.545 307.435C204.961 321.21 155.281 304.047 107.858 281.465C60.2102 259.109 14.8203 231.333 3.52926 192.492C-7.76177 153.877 15.0461 104.196 48.2417 66.9359C81.2115 29.6755 124.569 4.38359 172.217 0.77046C219.865 -2.61685 272.256 15.223 305.451 52.7092Z" fill="white" fill-opacity="0.16" />
                    </svg>
                    {/* <img src="assets/images/home/redcircle2.png"></img> */}
                </div>
            </div >
        </div>
    )
}

export default Subscription;
