
//Components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroBanner from "../components/herobanner/HeroBanner";
import Web3doamin from "../components/web3domain/Web3domain";
import Blockchain from "../components/blockchain/Blockchain";
import Swap from "../components/swap/Swap";
import MangoWallet from "../components/mangowallet/MangoWallet";
import Available from "../components/weareavailable/Available";
import Services from "../components/services/Services";
import Rodemap from "../components/rodemap/rodemap";
import Subscribe from "../components/subscribe/Subscribe";
import Tokenomic from "../components/tokenomic/Tokenomic";
import Partners from "../components/partners/partners";
import Presence from "../components/presence/Presence";
import FloatingButton from "../components/floatingButton/FloatingButton";
import AddModal from "../components/addModal/AddModal";
import BlogCard from "../components/blogCard/BlogCard";

export default function HomePage() {
    return (
        <>
            {/* <AddModal /> */}
            {/* <FloatingButton /> */}
            <div className="bg-hero ">
                <Header />
            </div>
            {/* <HeroBanner /> */}
            <Web3doamin />
            <Swap />
            <Blockchain />
            {/* <MangoWallet /> */}
            {/* <Available /> */}
            {/* <Services /> */}
            <Tokenomic />
            <Rodemap />
            {/* <Partners /> */}
            {/* <Presence /> */}
            {/* <BlogCard /> */}
            <Subscribe />
            <br></br><br></br><br></br>
            <Footer />
        </>
    );
}