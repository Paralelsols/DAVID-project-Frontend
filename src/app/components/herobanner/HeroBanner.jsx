import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function HeroBanner() {
  return (
    <>
      <div className="flex justify-center items-center gap-5 px-1 my-14 max-[850px]:flex-wrap">
        <a
          href="https://twitter.com/mangomanintell"
          className="social-icon-bg p-2 rounded-full flex justify-center items-end"
        >
          <FaXTwitter style={{ width: "30px", height: "30px" }} />
        </a>
        <a
          href="https://t.me/mangomanintell"
          className="social-icon-bg p-2 rounded-full flex justify-center items-end"
        >
          <svg width="30" height="30" viewBox="0 0 512 512" fill="currentColor">
            <path d="m484.689 98.231-69.417 327.37c-5.237 23.105-18.895 28.854-38.304 17.972L271.2 365.631l-51.034 49.086c-5.647 5.647-10.372 10.372-21.256 10.372l7.598-107.722L402.539 140.23c8.523-7.598-1.848-11.809-13.247-4.21L146.95 288.614 42.619 255.96c-22.694-7.086-23.104-22.695 4.723-33.579L455.423 65.166c18.893-7.085 35.427 4.209 29.266 33.065z"></path>
          </svg>
        </a>
        {/* <a
          href="https://www.reddit.com/user/Mangomanintell"
          className="social-icon-bg p-2 rounded-full flex justify-center items-end"
        >
          <svg
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 56.7 56.7"
            xml
            space="preserve"
          >
            <path d="M53.048 28.446a5.696 5.696 0 0 0-5.69-5.69 5.647 5.647 0 0 0-3.75 1.419c-3.763-2.408-8.784-3.925-14.322-4.089l3.389-11.59 8.32 1.546c0 .068-.014.132-.01.2a3.6 3.6 0 0 0 3.774 3.408 3.6 3.6 0 0 0 3.407-3.774 3.6 3.6 0 0 0-3.774-3.408 3.587 3.587 0 0 0-2.945 1.84l-.003-.001-10.026-1.863-3.993 13.64c-5.552.147-10.589 1.656-14.368 4.059a5.647 5.647 0 0 0-3.715-1.387 5.697 5.697 0 0 0-5.69 5.69c0 1.94.999 3.73 2.617 4.774a10.124 10.124 0 0 0-.155 1.73c0 8.212 9.956 14.894 22.194 14.894S50.5 43.162 50.5 34.949c0-.568-.052-1.128-.145-1.68a5.69 5.69 0 0 0 2.692-4.823zM17.76 32.318a3.496 3.496 0 1 1 6.993.002 3.496 3.496 0 0 1-6.993-.002zm18.79 9.458c-.104.108-2.613 2.661-8.283 2.661-5.7 0-7.98-2.588-8.073-2.698a.894.894 0 0 1 1.352-1.168c.052.056 1.954 2.079 6.72 2.079 4.85 0 6.976-2.095 6.998-2.115a.895.895 0 0 1 1.286 1.24zm-.695-5.961a3.496 3.496 0 1 1-.003-6.992 3.496 3.496 0 0 1 .003 6.992z"></path>
          </svg>
        </a> */}
        {/* <a href="https://twitter.com/mangomanintell" className="social-icon-bg p-2 rounded-full flex justify-center items-end">
                    <svg width="30" height="30" viewBox="0 0 56.693 56.693" fill="currentColor"><path d="M52.837 15.065a20.11 20.11 0 0 1-5.805 1.591 10.125 10.125 0 0 0 4.444-5.592 20.232 20.232 0 0 1-6.418 2.454 10.093 10.093 0 0 0-7.377-3.192c-5.581 0-10.106 4.525-10.106 10.107 0 .791.089 1.562.262 2.303-8.4-.422-15.848-4.445-20.833-10.56a10.055 10.055 0 0 0-1.368 5.082c0 3.506 1.784 6.6 4.496 8.412a10.078 10.078 0 0 1-4.578-1.265l-.001.128c0 4.896 3.484 8.98 8.108 9.91a10.162 10.162 0 0 1-4.565.172c1.287 4.015 5.019 6.938 9.441 7.019a20.276 20.276 0 0 1-12.552 4.327c-.815 0-1.62-.048-2.411-.142a28.6 28.6 0 0 0 15.493 4.541c18.591 0 28.756-15.4 28.756-28.756 0-.438-.009-.875-.028-1.309a20.47 20.47 0 0 0 5.042-5.23z"></path></svg>
                </a> */}
        <a
          href="https://discord.com/login?redirect_to=%2Flogin%3Fredirect_to%3D%252Fchannels%252F1177526037278634054%252F1177526038046187562"
          className="social-icon-bg p-2 rounded-full flex justify-center items-end"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 33.867 33.867"
            fill="currentColor"
          >
            <path d="M11.343 5.177c-1.076 0-4.32 1.316-4.902 1.579-.582.263-1.228 1.084-1.961 2.439-.734 1.355-1.323 2.939-2.28 5.269-.956 2.33-1.179 6.822-1.147 8.193.032 1.371.189 2.442 1.594 3.253 1.404.81 2.646 1.658 3.953 2.168 1.308.51 2.2.877 2.806.367.606-.51 1.005-1.403 1.005-1.403s.574-.797-.51-1.275c-1.084-.479-1.626-.814-1.579-1.308.048-.494.127-.765.398-.701.271.064.91 1.211 3.365 1.737s4.848.447 4.848.447 2.394.08 4.849-.447c2.455-.526 3.093-1.673 3.364-1.737.271-.064.35.207.398.7.048.495-.494.83-1.578 1.309-1.084.478-.51 1.275-.51 1.275s.399.892 1.005 1.403c.605.51 1.498.143 2.805-.367 1.307-.51 2.55-1.357 3.954-2.168 1.405-.811 1.562-1.882 1.594-3.253.032-1.37-.191-5.863-1.148-8.193-.956-2.33-1.546-3.914-2.28-5.269-.732-1.355-1.379-2.176-1.96-2.44-.582-.262-3.827-1.578-4.903-1.578-1.076 0-1.394.75-1.394.75l-.375.829s-2.52-.479-3.804-.48c-1.284 0-3.837.48-3.837.48l-.375-.83s-.318-.749-1.395-.749zm.117 9.948h.04c1.569 0 2.84 1.373 2.84 3.066 0 1.694-1.271 3.066-2.84 3.066s-2.84-1.372-2.84-3.066c-.001-1.677 1.247-3.043 2.8-3.066zm10.907 0h.04c1.553.023 2.8 1.39 2.8 3.066 0 1.694-1.271 3.066-2.84 3.066-1.57 0-2.84-1.372-2.84-3.066 0-1.693 1.27-3.066 2.84-3.066z"></path>
          </svg>
        </a>
        {/* <a
          href="https://www.facebook.com/MangoManIntelligent"
          className="social-icon-bg p-2 rounded-full flex justify-center items-end"
        >
          <FaFacebookF style={{ width: "30px", height: "30px" }} />
        </a> */}
        <a
          href="https://whatsapp.com/channel/0029Va946Cx3GJP2FXcugH2W"
          className="social-icon-bg p-2 rounded-full flex justify-center items-end"
        >
          <FaWhatsapp style={{ width: "30px", height: "30px" }} />
        </a>
        <a
          href="https://medium.com/@mangomaninteligent1"
          className="social-icon-bg p-2 rounded-full flex justify-center items-end"
        >
          <FaMedium style={{ width: "30px", height: "30px" }} />
        </a>
        <a
          href="https://www.instagram.com/mangomanintell/"
          className="social-icon-bg p-2 rounded-full flex justify-center items-end"
        >
          <FaInstagram style={{ width: "30px", height: "30px" }} />
        </a>
      </div>
      <div
        style={{ zIndex: "100" }}
        className="addframe hidemob w-[94%] items-center p-5 text-center"
      >
        <h1
          id="herobanner"
          className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold mb-10"
        >
          <b>MMIT's achievement</b>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 text-center md:text-left gap-5 max-w-screen-xl w-[94%] mx-auto">
          <div className="p-5">
            <h3>
              <span className="frametext"></span>
              <span className="frameplus">55k+</span>
              <br />
              <span className="foempara">Holders</span>
            </h3>
          </div>
          <div className="p-5">
            <h3>
              <span className="frametext"></span>
              <span className="g2">20+</span>
              <br />
              <span className="foempara">Listed Exchanges</span>
            </h3>
          </div>
          <div className="p-5">
            <h3>
              <span className="frametext"></span>
              <span className="g3">7+</span>
              <br />
              <span className="foempara">Our Live Ecosystems</span>
            </h3>
          </div>
          <div className="p-5">
            <h3>
              <span className="frametext"></span>
              <span className="g4">10+</span>
              <br />
              <span className="foempara">Presence Crypto Events</span>
            </h3>
          </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mt-24 text-white">
        Our Ecosystem
      </h1>
    </>
  );
}
