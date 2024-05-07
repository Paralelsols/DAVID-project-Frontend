import Image from "next/image";
import img from '../../assets/images/hero-Img.webp'
import keyboard from '../../assets/images/keyboard.webp'
import { scroll } from "@/function";
import PresaleWegit from "../presaleWegit/presaleWegit";


export default function Hero() {
    return (
        <>
            <div id="home" className="flex flex-col md:flex-row max-w-screen-xl w-[94%] mt-10 mb-5 items-center justify-between mx-auto ">
                <div className="md:w-1/2 p-4 order-2 md:order-1 text-center md:text-center  ">
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">
                   {/* <span className="mangoname">MMIT</span>  */}
                    </h1>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
                        The First <span className="mangoname">Fruit Meme</span> Token

                    </h1>
                    {/* <p className="text-sm md:text-sm lg:text-lg mt-1">
                        The First Fruit Meme Token
                    </p> */}
                    {/* className="mangoborder" */}
                    <p style={{ lineHeight: '36px !importent' }} className="text-sm md:text-sm lg:text-lg mt-9">
                It has maintained a market presence since 2022, making it an influential and enduring player in the crypto space.</p>
                    <button onClick={() => scroll('blockchain')} className="cursor-pointer button mt-7 w-[80%] md:w-[20%]" type="button">
                        Explore
                    </button>
                </div>
                <div  className="md:w-1/2 md:order-2">
                {/* style={{border:'1px solid' , borderColor:'black' , borderRadius:'20px'}} */}
                    {/* <PresaleWegit /> */}
                    <Image className="updownAnimation" width={"100%"} height={"100%"} src={keyboard} alt="heroimg" />
                </div>
            </div>

        </>
    );
}