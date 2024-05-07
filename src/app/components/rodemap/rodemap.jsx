import Image from "next/image";
import colorLine from '../../assets/images/roadmapcolorline.webp'
// import loder from '../../assets/images/giff/loader2.gif'
import loder from '../../assets/images/leftaero.webp'
export default function rodemap() {
    return (
        <>
            <div id="roadmap" className="bg-roadmap w-full items-center mt-10 p-5 text-center">
                {/* <h4 style={{ marginTop: '40px' }} className=" name">roadmap</h4> */}
                {/* <h1 className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold mb-10">
                    roadmap for <span className=" name">  web 3.0 </span> LTD
                </h1> */}
                <h1 className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold mb-10">
                    <span className=" name"> roadmap</span>
                </h1>
                {/* <p className="para">Cursus ornare nunc cursus tempus. Morbi in donec viverra amet cras arcu. Sit egestas eget nec facilisis pellentesque. </p> */}
                <div className="mt-20">
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-5 max-w-screen-xl md:w-[94%] w-full mx-auto mt-10">
                        <div className="p-5 text-left">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                    Phase 1
                                </h2>
                                <ul className="max-w-md space-y-1 text-gray-500 list-inside ">
                                    <li className="flex items-center">

                                        Launched pre sale at a price of 0.000000001
                                    </li>
                                    <li className="flex items-center">

                                        Brand awareness
                                    </li>
                                    <li className="flex items-center">

                                        First Fruit Meme token launch
                                    </li>
                                    <li className="flex items-center">

                                        Attended Crypto Expo Dubai

                                    </li>

                                </ul>
                            </>
                        </div>
                        <div className="p-auto m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                        </div>
                        <div className="p-5 text-left md:text-right ">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                    Phase 2
                                </h2>
                                <ul className="max-w-md text-gray-500 list-inside ">
                                    <li  >
                                        Listed at Pancake Swap

                                    </li>
                                    <li  >
                                        Coingecko listing

                                    </li>
                                    <li  >
                                        Coin market cap listing

                                    </li>
                                    <li >
                                        Won the Best Crypto Debut Award at Crypto Expo Asia
                                    </li>

                                </ul>
                            </>
                        </div>
                        <div className="p-auto m-auto md:hidden showmob">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                        </div>

                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-5 max-w-screen-xl md:w-[94%] w-full mx-auto mt-10">
                        <div className="p-5 text-left">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                    Phase 3
                                </h2>
                                <ul className="max-w-md space-y-1 text-gray-500 list-inside ">
                                    <li className="flex items-center">Kill one zero and reach a price of 0.000000013

                                    </li>
                                    <li className="flex items-center">Listed in the top Centralized exchanges</li>
                                    <li className="flex items-center">To achieve 1000 rank at coingecko </li>


                                </ul>
                            </>
                        </div>
                        <div className="p-auto m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                        </div>
                        <div className="p-5 text-left md:text-right ">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                    Phase 4
                                </h2>
                                <ul className="max-w-md text-gray-500 list-inside ">
                                    <li >Holders to 10000</li>
                                    <li >Kill one more zero</li>
                                    <li > swapp Launch
                                    </li>
                                    <li >To get listed in top 10 CEX</li>

                                </ul>

                            </>
                        </div>
                        <div className="p-auto m-auto md:hidden showmob">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                        </div>

                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-5 max-w-screen-xl md:w-[94%] w-full mx-auto mt-10">
                        <div className="p-5 text-left">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                    Phase 5
                                </h2>
                                <ul className="max-w-md space-y-1 text-gray-500 list-inside ">
                                    <li className="flex items-center">To get listed in top 10 CEX</li>
                                    <li className="flex items-center"> swap Launch</li>
                                    <li className="flex items-center">To Get in Top 300 At Coingecko
                                    </li>
                                </ul>
                            </>
                        </div>
                        <div className="p-auto m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                        </div>
                        <div className="p-5 text-left md:text-right ">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                    Phase 6
                                </h2>
                                <ul className="max-w-md text-gray-500 list-inside ">
                                    <li  >
                                          wallet
                                    </li>
                                    <li  >
                                          Man own blockchain
                                    </li>
                                    <li  >
                                        Kill one zero To get in Top 200
                                    </li>
                                    <li >
                                         decentralized staking
                                    </li>
                                    <li >
                                        To get Listed at Top 5 CEX
                                    </li>
                                </ul>
                            </>
                        </div>
                        <div className="p-auto m-auto md:hidden showmob">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                        </div>

                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-5 max-w-screen-xl md:w-[94%] w-full mx-auto mt-10">
                        <div className="p-5 text-left">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                    Phase 7
                                </h2>
                                <ul className="max-w-md space-y-1 text-gray-500 list-inside ">
                                    <li className="flex items-center">
                                        To kill 1 more zero
                                    </li>
                                    <li className="flex items-center">
                                        To get listed at Top 3 CEX
                                    </li>
                                    <li className="flex items-center">
                                          Metaverse launch
                                    </li>
                                </ul>
                            </>
                        </div>
                        <div className="p-auto m-auto leftrightAnimation">
                            <Image style={{ transform: 'scaleX(1) scaleY(-1)', width: '30%' }} className="rdimg" src={loder} alt="progress" />
                            <span style={{ fontWeight: 'bolder' }} className=" name ">Here We Are</span>
                        </div>
                        <div className="p-5 text-left md:text-right ">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                    Phase 8
                                </h2>
                                <ul className="max-w-md text-gray-500 list-inside ">
                                   
                                    <li  >
                                        Token Burn Completion
                                    </li>
                                    <li  >
                                        Web3 Browser
                                    </li>
                                    <li >
                                         store launch
                                    </li>
                                    <li>
                                        To Get Listed on Binance
                                    </li>
                                    <li>
                                    Collaborations with Governments 
                                    </li>
                                </ul>
                            </>
                        </div>
                        <div className="p-auto m-auto md:hidden showmob">
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                            <svg style={{ marginTop: '-10px' }} xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
}