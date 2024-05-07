import Image from "next/image";
import img1 from "../../assets/images/Services/1.webp"
import img2 from "../../assets/images/Services/2.webp"
import img3 from "../../assets/images/Services/3.webp"

export default function Services() {
    return (
        <>
            <div className="bg-services w-full items-center mt-10 p-5 text-center">
                <h4 style={{ marginTop: '40px' }} className="mangoname">services</h4>
                <h1 className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold mb-10">
                    what services do we provide
                </h1>
                <p className="para">Cursus ornare nunc cursus tempus. Morbi in donec viverra amet cras arcu. Sit egestas eget nec facilisis pellentesque. </p>
                <div style={{ marginBottom: '45px' }} className="grid grid-cols-1 md:grid-cols-3 text-left gap-5 mt-5 max-w-screen-xl w-[94%] mx-auto">
                    <div className="servicecard p-10 ">
                        <Image src={img1} alt="" width='68%' height='auto' />
                        <span className="servicetext mt-5 mb-5">SEO audit</span>
                        <br />
                        <span style={{ fontWeight: '100 !importent', fontSize: '13px' }}>Malesuada ut elementum auctor vestibulum fusce montes et pellentesque gravida. Sed phasellus posuere.</span>
                        <br />
                        <a href="" target="_blank" className="servicebutton">learn more</a>
                        {/* <h3><span className="frametext">7.4M</span><span className="frameplus">+</span>
                            <br /><span className="foempara">revenue generated</span></h3> */}
                    </div>
                    <div className="servicecard p-10 ">
                        <Image src={img2} alt="" width='68%' height='auto' />
                        <span className="servicetext mt-5 mb-5">marketing</span>
                        <br />
                        <span style={{ fontWeight: '100 !importent', fontSize: '13px' }}>Malesuada ut elementum auctor vestibulum fusce montes et pellentesque gravida. Sed phasellus posuere.</span>
                        <br />
                        <a href="" target="_blank" className="servicebutton">learn more</a>
                        {/* <h3><span className="frametext">7.4M</span><span className="frameplus">+</span>
                            <br /><span className="foempara">revenue generated</span></h3> */}
                    </div>
                    <div className="servicecard p-10 ">
                        <Image src={img3} alt="" width='68%' height='auto' />
                        <span className="servicetext mt-5 mb-5">website audit</span>
                        <br />
                        <span style={{ fontWeight: '100 !importent', fontSize: '13px' }}>Malesuada ut elementum auctor vestibulum fusce montes et pellentesque gravida. Sed phasellus posuere.</span>
                        <br />
                        <a href="" target="_blank" className="servicebutton">learn more</a>
                        {/* <h3><span className="frametext">7.4M</span><span className="frameplus">+</span>
                            <br /><span className="foempara">revenue generated</span></h3> */}
                    </div>
                </div>
            </div>
        </>
    );
}