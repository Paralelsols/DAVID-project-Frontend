import Image from "next/image";
import img from "../../assets/images/block_chain.webp";
export default function Blockchain() {
  return (
    <>
      <div id="blockchain" className="bg-blockchain max-w-screen-xl  w-full z-20  left-0 text-white">
        <div className="flex flex-col md:flex-row max-w-screen-xl w-[94%] items-center justify-between mx-auto pt-5 pb-5">
          <div className="md:w-1/2 p-4 order-2 md:order-2 text-center md:text-center ">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
              <span className="mangoname">Blockchain</span>
            </h1>
            <p className="text-sm md:text-sm lg:text-lg mt-9">
              Empowering DeFi Innovation for Transparent and
              Secure Transactions. Explore Real-time Insights with
              {/* <span className="mangoborder"> Mango Scan!</span>{" "} */}
            </p>
            {/* <p className="text-sm md:text-sm lg:text-lg mt-9">Blockchain technology is the foundation of Web3. It's a decentralized and secure way of recording transactions and data, offering transparency and trust in a <span className="mangoborder"> digital world.</span> </p> */}
            {/* <p className="text-sm md:text-sm lg:text-lg mt-9">
                            Mango Smart Chain is your bridge to the world of decentralized finance <b style={{ fontWeight: 'bolder' }} className="mangocolor">(DeFi).</b> It's a blockchain network that powers innovative financial applications, providing users with control over their assets and financial operations.
                        </p> */}
            {/* <p className="text-sm md:text-sm lg:text-lg mt-9">
                        Technology provides a secure and decentralized data ledger, distributed across a global network, enabling transparent and immutable transactions and data storage. Renowned for supporting cryptocurrencies, its versatile applications span from executing smart contracts to enhancing supply chain transparency.
                        </p>
                        <p className="text-sm md:text-sm lg:text-lg mt-9">
                            For real-time insights into the <span className="mangoname">Mango Hyper Chain,</span> check out Mango Scan
                        </p> */}
            {/* <a href="https://mangoscan.io/" target="_blank"> */}
              <button className="button mt-7 w-[80%] md:w-[40%]" type="button">
                Explore 
              </button>
            {/* </a> */}
          </div>
          <div className="md:w-1/2  md:order-1">
            <Image
              className="updownAnimationWithDelay"
              style={{ transform: "scaleX(-1) scaleY(1)" }}
              width={"100%"}
              height={"100%"}
              src={img}
              alt="heroimg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
