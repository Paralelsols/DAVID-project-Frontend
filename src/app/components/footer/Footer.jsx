import Image from 'next/image';

import logo from '../../assets/logo.webp'
// import qr from '../../assets/images/qrcode.webp'
import qr from '../../assets/images/mango-qr.png'

export default function Footer() {
    return (
        <>
            <div className="bg-herofooter w-[100%] ">
                <footer style={{ marginLeft: 'auto', marginRight: 'auto' }} className=" bg-transparent w-[90%] ">
                    <div className="mx-auto w-full max-w-screen-xl">
                        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                            <div>
                                {/* <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                                    Company
                                    // style={{ width: '30%', height: '30%' }}
                                </h2> */}
                                {/* <Image
                                    height={100}
                                    width={100}
                                    src={logo}
                                    className="mr-3"
                                    alt="Logo"
                                /> */}
                                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    LOGO
                                </span>
                                <ul className="text-white  font-medium">
                                    <p className='footerPara lowercase'>
                                       <span className='capitalize'>For</span> PARTNERSHIPS AND INQURIES
                                    </p>
                                    <p style={{ marginTop: '15px' }} className='footerPara flex'>
                                        <img style={{ filter: 'invert(1)' }} width="20" height="20" src="https://img.icons8.com/pulsar-line/48/mail.png" alt="mail" />
                                        <a className='p-1' href="mailto:info@mmint.io">
                                            info@example.io
                                        </a>
                                    </p>
                                    {/* <li className="mb-4">
                                        <a href="#" className=" hover:underline">
                                            About
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Careers
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Brand Center
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Blog
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                                    Follow Us
                                </h2>
                                <ul className="text-white  font-medium">
                                    <li className="mb-4 footerli">
                                        <a href="https://t.me/manintell" className="hover:underline">
                                            Telegram
                                        </a>
                                    </li>
                                    <li className="mb-4 footerli">
                                        <a href="https://twitter.com/manintell" className="hover:underline">
                                            Twitter
                                        </a>
                                    </li>
                                    <li className="mb-4 footerli">
                                        <a href="https://discord.com/login?redirect_to=%2Flogin%3Fredirect_to%3D%252Fchannels%252F1177526037278634054%252F1177526038046187562" className="hover:underline">
                                            Discord
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                                    Legal
                                </h2>
                                <ul className="text-white  font-medium">
                                    <li className="mb-4 footerli">
                                        <a className="cursor-default">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="mb-4 footerli">
                                        <a className="cursor-default">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="mb-4 footerli">
                                        <a className="cursor-default">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-[80%]'>
                                <Image
                                    // style={{ width: '30%', height: '30%' }}
                                    height={100}
                                    width={100}
                                    src={qr}
                                    className="mr-3 footerqr"
                                    alt="qr"
                                />
                                <h2 className="mb-4 mt-2 text-sm text-center font-semibold text-white uppercase ">
                                    Scan QR code for  Wallet App.
                                </h2>
                                {/* <ul className="text-white  font-medium">
                                   
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            iOS
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Android
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Windows
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            MacOS
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div style={{ borderTop: '1px solid gray' }} className="px-4 py-6 bg-transparent  md:flex md:items-center md:justify-between">
                            <span className="text-sm text-white  sm:text-center">
                                © 2023 <a className='mangoname' href=""></a> All Rights
                                Reserved.
                            </span>
                            <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
                                <a
                                    href="https://twitter.com/manintell"
                                    className="text-white-400 hover:text-white "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width={22}
                                        height={22}
                                        viewBox="0,0,256,256"
                                    >
                                        <g
                                            fill="#ffffff"
                                            fillRule="nonzero"
                                            stroke="none"
                                            strokeWidth={1}
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            strokeMiterlimit={10}
                                            strokeDasharray=""
                                            strokeDashoffset={0}
                                            fontFamily="none"
                                            fontWeight="none"
                                            fontSize="none"
                                            textAnchor="none"
                                            style={{ mixBlendMode: "normal" }}
                                        >
                                            <g transform="scale(5.12,5.12)">
                                                <path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z" />
                                            </g>
                                        </g>
                                    </svg>

                                    <span className="sr-only">Twitter page</span>
                                </a>

                                <a
                                    href="https://www.instagram.com/manintell/"
                                    className="text-white-400 hover:text-white "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width={22}
                                        height={22}
                                        viewBox="0,0,256,256"
                                    >
                                        <g
                                            fill="#ffffff"
                                            fillRule="nonzero"
                                            stroke="none"
                                            strokeWidth={1}
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            strokeMiterlimit={10}
                                            strokeDasharray=""
                                            strokeDashoffset={0}
                                            fontFamily="none"
                                            fontWeight="none"
                                            fontSize="none"
                                            textAnchor="none"
                                            style={{ mixBlendMode: "normal" }}
                                        >
                                            <g transform="scale(5.12,5.12)">
                                                <path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z" />
                                            </g>
                                        </g>
                                    </svg>

                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a
                                    href="https://t.me/manintell"
                                    className="text-white-400 hover:text-white "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width={22}
                                        height={22}
                                        viewBox="0,0,256,256"
                                    >
                                        <g
                                            fill="#ffffff"
                                            fillRule="nonzero"
                                            stroke="none"
                                            strokeWidth={1}
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            strokeMiterlimit={10}
                                            strokeDasharray=""
                                            strokeDashoffset={0}
                                            fontFamily="none"
                                            fontWeight="none"
                                            fontSize="none"
                                            textAnchor="none"
                                            style={{ mixBlendMode: "normal" }}
                                        >
                                            <g transform="scale(5.12,5.12)">
                                                <path d="M25,2c12.703,0 23,10.297 23,23c0,12.703 -10.297,23 -23,23c-12.703,0 -23,-10.297 -23,-23c0,-12.703 10.297,-23 23,-23zM32.934,34.375c0.423,-1.298 2.405,-14.234 2.65,-16.783c0.074,-0.772 -0.17,-1.285 -0.648,-1.514c-0.578,-0.278 -1.434,-0.139 -2.427,0.219c-1.362,0.491 -18.774,7.884 -19.78,8.312c-0.954,0.405 -1.856,0.847 -1.856,1.487c0,0.45 0.267,0.703 1.003,0.966c0.766,0.273 2.695,0.858 3.834,1.172c1.097,0.303 2.346,0.04 3.046,-0.395c0.742,-0.461 9.305,-6.191 9.92,-6.693c0.614,-0.502 1.104,0.141 0.602,0.644c-0.502,0.502 -6.38,6.207 -7.155,6.997c-0.941,0.959 -0.273,1.953 0.358,2.351c0.721,0.454 5.906,3.932 6.687,4.49c0.781,0.558 1.573,0.811 2.298,0.811c0.725,0 1.107,-0.955 1.468,-2.064z" />
                                            </g>
                                        </g>
                                    </svg>

                                    <span className="sr-only">Telegram</span>
                                </a>
                                {/* <a
                                    href="https://www.facebook.com/ManIntelligent"
                                    className="text-white-400 hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width={22}
                                        height={22}
                                        viewBox="0,0,256,256"
                                    >
                                        <g
                                            fill="#ffffff"
                                            fillRule="nonzero"
                                            stroke="none"
                                            strokeWidth={1}
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            strokeMiterlimit={10}
                                            strokeDasharray=""
                                            strokeDashoffset={0}
                                            fontFamily="none"
                                            fontWeight="none"
                                            fontSize="none"
                                            textAnchor="none"
                                            style={{ mixBlendMode: "normal" }}
                                        >
                                            <g transform="scale(5.12,5.12)">
                                                <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z" />
                                            </g>
                                        </g>
                                    </svg>

                                    <span className="sr-only">Facebook page</span>
                                </a> */}
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}