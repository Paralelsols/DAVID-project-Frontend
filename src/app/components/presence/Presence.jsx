import Image from "next/image";
// import img from '../../assets/images/coin_3d.webp'

import img1 from '../../assets/events/1expo.webp'
import img2 from '../../assets/events/asiaexpo.webp'
import img3 from '../../assets/events/Press-Relese-1-3.webp'
import img4 from '../../assets/events/image-5-1024x576-1.webp'
import img5 from '../../assets/events/oct-2022.webp'

import coinscope from '../../assets/images/Auditing-partner/coinscope.webp'

import mangoswap from '../../assets/images/ecosystem-partner/MangoSwap.webp'
import travelcare from '../../assets/images/ecosystem-partner/travel-care.webp'

export default function Presence() {
    return (
        <>
            <div  id="blockchain" className="bg-roadmap w-full items-center mt-10 mb-10 p-5 text-center">
                {/* <h4 style={{ marginTop: '10px' }} className="mangoname">Tokenomics</h4> */}
                <h1 className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold ">
                    <span className="mangoname">Our Presence At </span>
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-screen-xl md:w-full w-full mx-auto p-5 justify-center">
                    <div className="partnerscard ">
                       <Image style={{borderRadius:'10px'}} src={img1} alt="..." />
                        <h1 style={{ lineHeight: 'normal', marginTop: 'revert' }} className="md:text-[23px] text-[10px] text-[white] ">Dubai <br /><span className="mangoname">March 2022</span></h1>
                        <a href="https://cryptoevents.global/crypto-expo-dubai-2022/" target="_blank">
                        <button className="button text-[white]  mt-6 w-[95%] mb-2 " type="button">
                            Event
                        </button>
                        </a>
                    </div>

                    <div className="partnerscard ">
                        <Image style={{borderRadius:'10px'}} src={img2} alt="..." />
                        <h1 style={{ lineHeight: 'normal', marginTop: 'revert' }} className="md:text-[23px] text-[10px] text-[white] ">Singapore <br /><span className="mangoname">June 2022</span></h1>
                        <a href="https://cryptoevents.global/crypto-expo-asia-2022/" target="_blank">
                        <button className="button text-[white]  mt-4 w-[95%] mb-0" type="button">
                            Event
                        </button>
                        </a>
                    </div>
                    <div className="partnerscard ">
                        <Image className="mb-0 md:mb-6" style={{borderRadius:'10px'}} src={img5} alt="..." />
                        <h1 style={{ lineHeight: 'normal', marginTop: 'revert' }} className="md:text-[23px] text-[10px] text-[white] ">Dubai  <br /><span className="mangoname">Oct 2022</span></h1>
                        <a href="https://cryptoevents.global/crypto-expo-dubai-2023/" target="_blank">
                        <button className="button text-[white]  mt-4 w-[95%] mb-0" type="button">
                            Event
                        </button>
                        </a>
                    </div>

                    <div className="partnerscard ">
                        <Image style={{borderRadius:'10px'}} src={img3} alt="..." />
                        <h1 style={{ lineHeight: 'normal', marginTop: 'revert' }} className="md:text-[23px] text-[10px] text-[white] ">Dubai  <br /><span className="mangoname">March 2023</span></h1>
                        <a href="https://cryptoevents.global/crypto-expo-dubai-2023/" target="_blank">
                        <button className="button text-[white]  mt-4 w-[95%] mb-0" type="button">
                            Event
                        </button>
                        </a>
                    </div>
                   
                </div>
                <div style={{marginLeft:'auto', marginRight:'auto'}} className="partnerscard w-[45%] md:w-[25%] ">
                <Image style={{borderRadius:'10px'}} src={img4} alt="..." />
                        <h1 style={{ lineHeight: 'normal', marginTop: 'revert' }} className="md:text-[23px] text-[10px] text-[white] ">Singapore  <br /><span className="mangoname">Sep 2023</span></h1>
                        <a href="https://www.asia.token2049.com/" target="_blank">
                        <button className="button text-[white]  mt-4 w-[95%] mb-2" type="button">
                            Event
                        </button>
                        </a>
                    </div>
            </div >
        </>
    );
}