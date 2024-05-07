"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import Image from "next/image";
import ModalImg from "../../assets/modal.jpeg";

const AddModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  function removeModal() {
    console.log("This function runs after 10 seconds");
    setIsOpen(false);
  }

  setTimeout(removeModal, 10000);

  return (
    isOpen && (
      <div
        style={{ zIndex: "10000" }}
        className=" fixed inset-0  overflow-auto bg-smoke-light flex"
        onClick={() => setIsOpen(false)}
      >
        {/* modal-bg */}
        <div
          data-aos="zoom-in"
          className=" bg-transparent  relative p-8 w-full max-w-md m-auto flex-col flex rounded-lg"
        >
          <span className="absolute top-0 right-0 p-2">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </span>
          <div className="text-center">
            <Image
              style={{ borderRadius: "20px" }}
              data-aos="fade-up"
              src={ModalImg}
              alt=""
            />
            {/* <h1 className="text-xl font-bold mb-4 ">  Join Us Now</h1>
            <p className="mb-8 ">Let's get started with us and enjoy Your journey with MMIT</p> */}
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x9767c8E438Aa18f550208e6d1fDf5f43541cC2c8"
              target="_blank"
            >
              <button className="bg-color text-white font-bold mt-2 py-2 px-4 rounded">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default AddModal;
