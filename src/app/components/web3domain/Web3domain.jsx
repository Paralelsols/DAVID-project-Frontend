import Image from "next/image";
import img from "../../assets/images/about.webp";
import imgMangoTree from "../../assets/mangi-animate.gif";
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
              <span className="mangoname">Mango Web3 Domain</span>
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold mt-4">
              MOST POWERFULL <span className="mangoname">WEB 3</span> DOMAINS
              with over 85k+ registrations
            </h1>
            {/* <p className="text-sm md:text-sm lg:text-lg mt-9 lowercase">
              WE HAVE ADOPTED IN JULY 2023 AS OF NOW THERE ARE 85K+ DOMAINS HAVE
              BEEN REGISTERED MAKING MMIT MORE POWERFUL BECAUSE EACH DOMAIN
              CONTAINS{" "}
              <a className="mangocolor cursor-default">.MMIT EXTENSION</a>
            </p> */}
            {/* <h2 className="text-md md:text-md lg:text-lg">Web3. It's decentralized, blockchain-based, and infinite possibilities. </h2> */}
            <p className="text-sm md:text-sm lg:text-lg mt-9">
              It's your given name. Own it. Take control of your digital
              identity. Begin with a Web3 domain{" "}
            </p>
            <a href="https://mangotree.ai/" target="_blank">
              <button className="button mt-7 w-[80%] md:w-[35%]" type="button">
                Explore Mango Tree
              </button>
            </a>
          </div>
          <div className="md:w-1/2  md:order-1 flex justify-center">
            <Image
             className="updownAnimation"
              width={"100%"}
              height={"100%"}
              src={imgMangoTree}
              alt="heroimg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
