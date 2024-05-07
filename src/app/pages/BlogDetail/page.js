"use client"
import React, { useEffect, useState } from "react";
import logo from '../../assets/logo.webp'
import { scroll } from "@/function";
import BlogNavbar from "@/app/components/blogNavbar/BlogNavbar";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa"
import MainImg from "../../assets/images/blog-main-img.webp"
import SecImg from "../../assets/images/1,.png"
import ThirdImg from "../../assets/images/third-blog-img.webp"
import Footer from "@/app/components/footer/Footer";
import { useRouter } from "next/router";
import BlogData from "../../../../data.json"
// Images
import Img1F from "../../assets/images/1,.png"
import Img1S from "../../assets/images/1.png"
import Img2F from "../../assets/images/2,.png"
import Img2S from "../../assets/images/2.png"
import Img3F from "../../assets/images/3,.png"
import Img3S from "../../assets/images/3.png"
import Img4F from "../../assets/images/4,.png"
import Img4S from "../../assets/images/4.png"
import Img5F from "../../assets/images/4,.png"
import Img5S from "../../assets/images/4.png"
import Img6F from "../../assets/images/4,.png"
import Img6S from "../../assets/images/4.png"

export default function page({ searchParams }) {

    const [selectedBlogData, setSelectedBlogData] = useState({})

    useEffect(() => {
        const localId = localStorage.getItem("blogId")
        let filterBlog = BlogData.filter((val) => {
            return val.id == localId
        })
        console.log("my Search Params value ", filterBlog)
        setSelectedBlogData(filterBlog[0])
        console.log("My Blog Value ", filterBlog[0])
    }, [])
    // Use state to manage the class
    const [isStickyActive, setIsStickyActive] = useState(false);

    // Toggle the class by updating state
    const toggleClass = () => {
        setIsStickyActive(!isStickyActive);
    };

    // Create a variable to hold the class conditionally
    const navbarClass = isStickyActive ? "active" : "";
    return (
        <>
            <div className="max-w-screen-xl w-[92%] flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        height={100}
                        width={100}
                        src={logo}
                        className="mr-3"
                        alt="Logo"
                    />
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Mango Man
                        </span> */}
                </a>
                <div className="flex md:order-2">
                    <a href="https://stakerewards.mmint.io/Mmint/referral/0x1D0BcF91Ba851045D0499F2b7Ee82824c6cF4bD6" target="_blank">
                        <button
                            type="button"
                            className="text-white button focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                        >
                            Stake
                        </button>
                    </a>
                    <button
                        onClick={toggleClass}
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1${navbarClass ? `active ${navbarClass} ` : ""
                        }`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent  text-white ">
                        <li >
                            <a
                                onClick={() => scroll('home')}
                                className="cursor-pointer block py-2 pl-3 pr-4 text-white md:p-0"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => scroll('blockchain')}
                                className="cursor-pointer block py-2 pl-3 pr-4 text-white md:p-0"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => scroll('roadmap')}
                                className="cursor-pointer block py-2 pl-3 pr-4 text-white md:p-0"
                            >
                                Roadmap
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://mangotree.ai/"
                                target="_blank"
                                className="block py-2 pl-3 pr-4 text-white md:p-0"
                            >
                                Web3 Domains
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <BlogNavbar /> */}
            <div className="py-20 max-[580px]:py-8 px-8 flex justify-between gap-1 max-[800px]:flex-wrap blog-banner-bg">
                <div
                    className="w-[60%] max-[800px]:w-[100%]">
                    <p className="blog-para">{selectedBlogData?.mainHeading}</p>
                    <div className="flex items-center gap-5 px-1 my-3 max-[850px]:flex-wrap">
                        <div className="social-icon-bg p-2 rounded-full flex justify-center items-end">
                            <svg width="15" height="15" viewBox="0 0 512 512" fill="currentColor"><path d="m484.689 98.231-69.417 327.37c-5.237 23.105-18.895 28.854-38.304 17.972L271.2 365.631l-51.034 49.086c-5.647 5.647-10.372 10.372-21.256 10.372l7.598-107.722L402.539 140.23c8.523-7.598-1.848-11.809-13.247-4.21L146.95 288.614 42.619 255.96c-22.694-7.086-23.104-22.695 4.723-33.579L455.423 65.166c18.893-7.085 35.427 4.209 29.266 33.065z"></path></svg>
                        </div>
                        <div className="social-icon-bg p-2 rounded-full flex justify-center items-end">
                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 56.7 56.7" xml space="preserve"><path d="M53.048 28.446a5.696 5.696 0 0 0-5.69-5.69 5.647 5.647 0 0 0-3.75 1.419c-3.763-2.408-8.784-3.925-14.322-4.089l3.389-11.59 8.32 1.546c0 .068-.014.132-.01.2a3.6 3.6 0 0 0 3.774 3.408 3.6 3.6 0 0 0 3.407-3.774 3.6 3.6 0 0 0-3.774-3.408 3.587 3.587 0 0 0-2.945 1.84l-.003-.001-10.026-1.863-3.993 13.64c-5.552.147-10.589 1.656-14.368 4.059a5.647 5.647 0 0 0-3.715-1.387 5.697 5.697 0 0 0-5.69 5.69c0 1.94.999 3.73 2.617 4.774a10.124 10.124 0 0 0-.155 1.73c0 8.212 9.956 14.894 22.194 14.894S50.5 43.162 50.5 34.949c0-.568-.052-1.128-.145-1.68a5.69 5.69 0 0 0 2.692-4.823zM17.76 32.318a3.496 3.496 0 1 1 6.993.002 3.496 3.496 0 0 1-6.993-.002zm18.79 9.458c-.104.108-2.613 2.661-8.283 2.661-5.7 0-7.98-2.588-8.073-2.698a.894.894 0 0 1 1.352-1.168c.052.056 1.954 2.079 6.72 2.079 4.85 0 6.976-2.095 6.998-2.115a.895.895 0 0 1 1.286 1.24zm-.695-5.961a3.496 3.496 0 1 1-.003-6.992 3.496 3.496 0 0 1 .003 6.992z"></path></svg>
                        </div>
                        <div className="social-icon-bg p-2 rounded-full flex justify-center items-end">
                            <svg width="15" height="15" viewBox="0 0 56.693 56.693" fill="currentColor"><path d="M52.837 15.065a20.11 20.11 0 0 1-5.805 1.591 10.125 10.125 0 0 0 4.444-5.592 20.232 20.232 0 0 1-6.418 2.454 10.093 10.093 0 0 0-7.377-3.192c-5.581 0-10.106 4.525-10.106 10.107 0 .791.089 1.562.262 2.303-8.4-.422-15.848-4.445-20.833-10.56a10.055 10.055 0 0 0-1.368 5.082c0 3.506 1.784 6.6 4.496 8.412a10.078 10.078 0 0 1-4.578-1.265l-.001.128c0 4.896 3.484 8.98 8.108 9.91a10.162 10.162 0 0 1-4.565.172c1.287 4.015 5.019 6.938 9.441 7.019a20.276 20.276 0 0 1-12.552 4.327c-.815 0-1.62-.048-2.411-.142a28.6 28.6 0 0 0 15.493 4.541c18.591 0 28.756-15.4 28.756-28.756 0-.438-.009-.875-.028-1.309a20.47 20.47 0 0 0 5.042-5.23z"></path></svg>
                        </div>
                        <div className="social-icon-bg p-2 rounded-full flex justify-center items-end">
                            <svg width="15" height="15" viewBox="0 0 33.867 33.867" fill="currentColor"><path d="M11.343 5.177c-1.076 0-4.32 1.316-4.902 1.579-.582.263-1.228 1.084-1.961 2.439-.734 1.355-1.323 2.939-2.28 5.269-.956 2.33-1.179 6.822-1.147 8.193.032 1.371.189 2.442 1.594 3.253 1.404.81 2.646 1.658 3.953 2.168 1.308.51 2.2.877 2.806.367.606-.51 1.005-1.403 1.005-1.403s.574-.797-.51-1.275c-1.084-.479-1.626-.814-1.579-1.308.048-.494.127-.765.398-.701.271.064.91 1.211 3.365 1.737s4.848.447 4.848.447 2.394.08 4.849-.447c2.455-.526 3.093-1.673 3.364-1.737.271-.064.35.207.398.7.048.495-.494.83-1.578 1.309-1.084.478-.51 1.275-.51 1.275s.399.892 1.005 1.403c.605.51 1.498.143 2.805-.367 1.307-.51 2.55-1.357 3.954-2.168 1.405-.811 1.562-1.882 1.594-3.253.032-1.37-.191-5.863-1.148-8.193-.956-2.33-1.546-3.914-2.28-5.269-.732-1.355-1.379-2.176-1.96-2.44-.582-.262-3.827-1.578-4.903-1.578-1.076 0-1.394.75-1.394.75l-.375.829s-2.52-.479-3.804-.48c-1.284 0-3.837.48-3.837.48l-.375-.83s-.318-.749-1.395-.749zm.117 9.948h.04c1.569 0 2.84 1.373 2.84 3.066 0 1.694-1.271 3.066-2.84 3.066s-2.84-1.372-2.84-3.066c-.001-1.677 1.247-3.043 2.8-3.066zm10.907 0h.04c1.553.023 2.8 1.39 2.8 3.066 0 1.694-1.271 3.066-2.84 3.066-1.57 0-2.84-1.372-2.84-3.066 0-1.693 1.27-3.066 2.84-3.066z"></path></svg>
                        </div>
                        <div className="social-icon-bg p-2 rounded-full flex justify-center items-end">
                            <FaFacebookF style={{ width: '15px', height: '15px' }} />
                        </div>
                        <div className="social-icon-bg p-2 rounded-full flex justify-center items-end">
                            <FaWhatsapp style={{ width: '15px', height: '15px' }} />
                        </div>
                        <div className="social-icon-bg p-2 rounded-full flex justify-center items-end">
                            <FaMedium style={{ width: '15px', height: '15px' }} />
                        </div>
                        <div className="social-icon-bg p-2 rounded-full flex justify-center items-end">
                            <FaInstagram style={{ width: '15px', height: '15px' }} />
                        </div>
                    </div>
                    <p className="tw-text-gray-300 tw-font-light text-xl my-1">
                        24 July 2023n
                    </p>
                </div>
                <div className="w-[40%] max-[800px]:w-[100%] max-[800px]:mt-6">
                    <div className="rounded-2xl overflow-hidden w-full" >
                        <Image width="100%" height="100%" src={selectedBlogData?.id == 1 && Img1F || selectedBlogData?.id == 2 && Img2F || selectedBlogData?.id == 3 && Img3F || selectedBlogData?.id == 4 && Img4F || selectedBlogData?.id == 5 && Img5F || selectedBlogData?.id == 6 && Img6F} />
                    </div>
                </div>
            </div>
            <div className="px-16 max-[410px]:px-4">
                {/* <div className="bg-[#020202] p-5 rounded-3xl">
                    <span className="text-lg font-bold">TLDR</span>
                    <ul className="list-disc ml-6">
                        <li className="ml-6">GainForest uses the transparent nature of Solana to power a dashboard of verifiable, trackable donations that ensure donors reach the local people maintaining forests directly.</li>
                        <li className="ml-6">Using on-chain metadata, donors can track how healthy the area they support is with real-time updating “NFTrees.”</li>
                        <li className="ml-6">Solana is a carbon-neutral chain that uses minimal energy, and the Solana Foundation has been issuing transparency reports on the network’s environmental impact since 2021.</li>
                    </ul>
                </div> */}
                <p className="text-xl my-8">
                    {selectedBlogData?.FirstIntro}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">{selectedBlogData?.firstHead}</h1>
                <p className="para-line-height text-6xl font-bold mt-8 mb-4">
                    {selectedBlogData?.firstPara1}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">{selectedBlogData?.secHead}</h1>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">{selectedBlogData?.sec2Head}</h1>
                <p className="para-line-height text-6xl font-bold mt-8 mb-4">
                    {selectedBlogData?.sec2headpara1}
                </p>
                <p className="para-line-height text-6xl font-bold mt-8 mb-4">
                    {selectedBlogData?.sec2headpara2}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">{selectedBlogData?.sec3Head}</h1>
                <p className="para-line-height text-6xl font-bold mt-8 mb-4">
                    {selectedBlogData?.sec2headpara1}
                </p>
                <p className="para-line-height text-6xl font-bold mt-8 mb-4">
                    {selectedBlogData?.sec2headpara2}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">{selectedBlogData?.sec4Head}</h1>
                <p className="para-line-height text-6xl font-bold mt-8 mb-4">
                    {selectedBlogData?.sec4headpara1}
                </p>
                <p className="para-line-height text-6xl font-bold mt-8 mb-4">
                    {selectedBlogData?.sec4headpara2}
                </p>
                <p className="para-line-height text-6xl font-bold mt-8 mb-4">
                    {selectedBlogData?.secPara1}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.secPara2}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.secPara3}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">{selectedBlogData?.thirdHead}</h1>
                <p className="para-line-height">
                    {selectedBlogData?.thirdPara1}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.thirdPara2}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.thirdPara3}
                </p>
            </div>
            <div className="px-16 max-[410px]:px-4 my-8">
                <div className="w-[100%] img-100">
                    <Image className="img-100" width={"100%"} src={selectedBlogData?.id == 1 && Img1S || selectedBlogData?.id == 2 && Img2S || selectedBlogData?.id == 3 && Img3S || selectedBlogData?.id == 4 && Img4S || selectedBlogData?.id == 5 && Img5S || selectedBlogData?.id == 6 && Img6S} />
                </div>
            </div>
            <div className="px-16 max-[410px]:px-4">
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">{selectedBlogData?.forthHead}</h1>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">{selectedBlogData?.forth2Head}</h1>
                <p className="para-line-height">
                    {selectedBlogData?.forth2headpara1}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.forth2headpara2}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.forth2headpara3}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">{selectedBlogData?.forth3Head}</h1>
                <p className="para-line-height">
                    {selectedBlogData?.forth3headpara1}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.forth3headpara2}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">{selectedBlogData?.forth4Head}</h1>
                <p className="para-line-height">
                    {selectedBlogData?.forth4headpara2}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.forth4headpara1}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">{selectedBlogData?.forth5Head}</h1>
                <p className="para-line-height">
                    {selectedBlogData?.forth5headpara1}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.forth5headpara2}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.forth5headpara3}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.forthPara1}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.forthPara2}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">
                    {selectedBlogData?.fifthHead}
                </h1>
                <p className="para-line-height">
                    {selectedBlogData?.fifthPara1}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.fifthPara2}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.fifthPara3}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">
                    {selectedBlogData?.sixHead}
                </h1>
                <p className="para-line-height">
                    {selectedBlogData?.sixPara1}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.sixPara2}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.sixPara3}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">
                    {selectedBlogData?.sevenHead}
                </h1>
                <p className="para-line-height">
                    {selectedBlogData?.sevenPara1}

                </p>
                <p className="para-line-height">
                    {selectedBlogData?.sevenPara2}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.sevenPara3}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">
                    {selectedBlogData?.eightHead}
                </h1>
                <p className="para-line-height">
                    {selectedBlogData?.eightpara1}
                </p>
                <p className="para-line-height">
                    {selectedBlogData?.eightpara2}
                </p>
                <h1 className="blog-head text-6xl font-bold mt-8 mb-4">
                    Conclusion
                </h1>
                <p className="para-line-height">
                    {selectedBlogData?.conclusion}
                </p>
            </div>
            {/* <div className="px-8 flex justify-between mt-16 max-[895px]:flex-wrap">
                <div className="w-[48%] max-[895px]:w-[100%]">
                    <div>
                        <Image src={ThirdImg} />
                    </div>
                </div>
                <div className="w-[48%] max-[895px]:w-[100%] max-[895px]:mt-4">
                    <p className="para-line-height">
                        In February, GainForest announced the successful mapping of 3,000 trees — each with its own attached GPS data, photos and species ID. “It’s like Google Maps for mangroves,” Cajén jokes. As GainForest continues to bring new projects onto the platform, their hope is to eventually provide not just the simplest solution for incentivizing reforestation efforts, but also the best and most accurate maps and databases for scientists looking to study conservation.
                    </p>
                </div>
            </div>
            <div className="px-8">
                <p className="para-line-height mt-8">
                    As far as the team at GainForest is concerned, the concept of an NFTree wouldn’t be viable without a blockchain as sustainable as Solana. Since the Solana Foundation began tracking the carbon footprint of the Solana blockchain in 2021, the protocol has shown it to be an energy-efficient option for using decentralized technology. In fact, when Cajén first met GainForest co-founder David Dao at the annual meeting of the World Economics Forum in 2022, he says, it was because of their mutual enthusiasm for Solana.
                    “The two of us just happened to sit down next to each other and start going nuts about how efficient Solana is,” Cajén recalls. He quit his job to join the GainForest team soon after.
                </p>
                <p className="para-line-height">
                    Learn more about the Solana network’s impact on the climate.
                </p>
                <div className="border my-8"></div>
                <p className="para-line-height">
                    Learn more about the Solana network’s impact on the climate.
                </p>
            </div> */}
            <Footer />
        </>
    );
}