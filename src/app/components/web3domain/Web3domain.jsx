import Image from "next/image";
import img from "../../assets/images/about.webp";
import imgMangoTree from "../../assets/images/abstract.png";
export default function Web3doamin() {
  return (
    <>
      <div
        id="web3"
        className="bg-web3 max-w-screen-xl  w-full z-20 top-0 left-0 text-white mt-20"
      >
        <div className="flex flex-col md:flex-row max-w-screen-xl w-[94%] items-center justify-between mx-auto  pt-5 pb-5">
          <div className="md:w-1/2 p-4 order-2 md:order-2 text-center md:text-center  ">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
              <span className="mangoname">Abstract</span>
            </h1>
            <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold mt-4">
              <span className="mangoname">PMT AI</span> is a cutting-edge trading platform that revolutionizes
            </h1>
            {/* <p className="text-sm md:text-sm lg:text-lg mt-9 lowercase">
              WE HAVE ADOPTED IN JULY 2023 AS OF NOW THERE ARE 85K+ DOMAINS HAVE
              BEEN REGISTERED MAKING MMIT MORE POWERFUL BECAUSE EACH DOMAIN
              CONTAINS{" "}
              <a className="mangocolor cursor-default">.MMIT EXTENSION</a>
            </p> */}
            {/* <h2 className="text-md md:text-md lg:text-lg">Web3. It's decentralized, blockchain-based, and infinite possibilities. </h2> */}
            <p className="text-sm md:text-sm lg:text-lg mt-9">
            he way individuals engage with cryptocurrency and forex markets. <span className="hidden md:block">By harnessing the power of advanced algorithms and real-time data analysis{" "}PMT AI empowers users to automate their trading strategies, create custom bots, and navigate the complexities of the financial markets with ease. With a focus on performance, efficiency, and user experience</span>
            </p>
            <a href="https://docs.google.com/document/d/1YxNXR4gAiT1MP4bSgUXmTv7G5NZgcXQIma5RWWL-J7c/edit?usp=sharing" target="_blank">
              <button className="button mt-7 w-[80%] md:w-[35%]" type="button">
              Whitepaper
              </button>
            </a>
          </div>
          <div className="md:w-1/2  md:order-1 flex justify-center">
           
            <Image
         
             className="updownAnimation"
              width='300'
              height='300'
              src={imgMangoTree}
              alt="heroimg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
