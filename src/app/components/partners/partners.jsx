import Image from "next/image";
// import img from '../../assets/images/coin_3d.webp'
import coinscope from '../../assets/images/Auditing-partner/coinscope.webp'

import mangoswap from '../../assets/images/ecosystem-partner/MangoSwap.webp'
import travelcare from '../../assets/images/ecosystem-partner/travel-care.webp'
import mangobrowser from '../../assets/mangobrowser.webp'
import mangowallet from '../../assets/mangowallet.webp'
export default function Partners() {
    return (
        <>
            <div className="bg-roadmap w-full items-center mt-5 p-5 text-center">
                {/* <h4 style={{ marginTop: '10px' }} className="mangoname">Tokenomics</h4> */}
                <h1 className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold ">
                    <span className="mangoname">Our Partners</span>
                </h1>
                <div className="hidemob flex flex-col md:flex-row max-w-screen-xl md:w-[94%] w-full items-center justify-between mx-auto pt-5 pb-5">
                    <div className="md:w-1/2 p-4 text-center md:text-left hidden md:block">
                        <h1 className="text-[25px] md:text-[35px] font-bold text-center text-white">
                            Auditing <span className="mangoname"> partner</span>
                        </h1>

                    </div>
                    <div className="md:w-1/2 hidden md:block">
                        <h1 className="text-[25px] md:text-[35px] font-bold text-white">
                        Utilisation <span className="mangoname"> partner</span>
                        </h1>

                    </div>

                </div>
                <div className="flex flex-col md:flex-row max-w-screen-xl md:w-[94%] w-full items-center justify-between mx-auto pt-5 pb-5">
                    <div className="md:w-1/2 p-4  text-center md:text-left ">
                        <h1 className="showmob hidden text-[25px] md:text-5xl lg:text-5xl font-bold text-white">
                            Auditing  <span className="mangoname"> partner</span>
                        </h1>
                    <a className="cursor-pointer" href="https://www.coinscope.co/" target="_blank">
                        <Image className="pb-5" src={coinscope} alt="" />
                    </a>
                    </div>
                    <div className="md:w-1/2  ">
                        <h1 className="showmob hidden text-[25px] md:text-5xl lg:text-5xl font-bold text-white">
                        Utilisation <span className="mangoname"> partner</span>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-5 max-w-screen-xl md:w-full w-full mx-auto p-5">
                            {/* <div className="partnerscard p-2">
                                <Image className="mt-[15px]" style={{ marginLeft: 'auto', marginRight: 'auto' }} width={"100%"} height={"100%"} src={mangoswap} alt="heroimg" />
                                <a href="https://www.mangoswapp.com/" target="_blank">
                                <button className="button text-white mt-8 w-full " type="button">
                                   Swapp
                                </button>
                                </a>
                            </div> */}
                            <div className="partnerscard p-2">
                                <Image style={{ marginLeft: 'auto', marginRight: 'auto' }} width={"100%"} height={"100%"} src={travelcare} alt="heroimg" />
                                <a href="https://www.travelcare.io/en/home" target="_blank">
                                <button className="button text-white mt-9 md:mt-7 w-full" type="button">
                                    Travelcare
                                </button>
                                </a>
                            </div>
                            {/* <div className="partnerscard p-2">
                                <Image className="md:mt-[56px] md:pb-[26px] mt-[24px] pb-[10px]" style={{ marginLeft: 'auto', marginRight: 'auto' }} width={"100%"} height={"100%"} src={mangobrowser} alt="heroimg" />
                                <button className="cursor-default button text-white mt-7 w-full" type="button">
                                    Browser
                                </button>
                            </div> */}
                            {/* <div className="partnerscard p-2">
                                <Image className="md:mt-[7px] md:pb-[3px] mt-[0px] pb-[0px]" style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%', }} src={mangowallet} alt="heroimg" />
                                <a href="https://play.google.com/store/apps/details?id=com.cryptoapp.sbgwallet&hl=en_US" target="_blank">
                                <button className="button text-white mt-7 w-full" type="button">
                                    Wallet
                                </button>
                                </a>
                            </div> */}

                        </div>
                        {/* <div style={{ marginLeft: 'auto', marginRight: 'auto' }} className="partnerscard p-2 w-[88%] md:w-[93%]">
                            <h1 style={{ lineHeight: 'initial', color: 'gold' }} className="text-[25px] md:text-[20px] lg:text-5xl font-bold">
                                MangoTree
                            </h1>
                            <button className="cursor-default  button text-white mt-7 w-full" type="button">
                                <a href="https://mangotree.ai/" target="_blank">MangoTree</a>
                            </button>
                        </div> */}
                    </div>

                </div>
            </div >
        </>
    );
}