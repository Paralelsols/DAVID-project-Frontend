
"use client"
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import logo from '@/app/assets/coin-wallet-logo.png'
export default function FloatingButton() {
    const secondaryButtons = [
        { href:'https://pancakeswap.finance/swap?outputCurrency=0x9767c8E438Aa18f550208e6d1fDf5f43541cC2c8', onClick: () => console.log('clicked on Buynow') },
      ];

      function addClass() {
        var myElement = document.getElementById('sbtn');
        if (myElement) {
          myElement.classList.add('block');
          myElement.classList.remove('hidden');
        }
      }
      
      function removeClass() {
        var element = document.getElementById('sbtn');
        if (element) {
          element.classList.remove('block');
          element.classList.add('hidden');
        }
      }

      useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);

    return (
        <>
            <div style={{padding:'0px'}} className="container">
                <div className='transform'>
                    <div style={{}} onMouseOver={addClass} onMouseOut={removeClass} >
                    <button className="buttonMain">
                    <div style={{background:'transparent', cursor:'default'}} class="uiverse">
  
                      {/* <span class="tooltip"><a href='https://pancakeswap.finance/swap?outputCurrency=0x9767c8E438Aa18f550208e6d1fDf5f43541cC2c8' target='_blank'>Buy Now</a></span> */}
                      <span className='spean'>
                      <a  href='https://pancakeswap.finance/swap?outputCurrency=0x9767c8E438Aa18f550208e6d1fDf5f43541cC2c8' target="_blank" style={{color:'antiquewhite'}} className="text">Buy Now</a>
                      </span>
                  </div>
                    </button>
                    {/* hidden */}
                {/* {secondaryButtons.map((button, index) => (
                    <button  data-aos="zoom-in" key={index} onMouseOver={addClass} onMouseOut={removeClass} id="sbtn" className="buttonSecondary btns" onClick={button.onClick}>
                        <a href={button.href} target="_blank" className="text">Buy <br /> Now</a>
                    </button>
            
                ))} */}
                </div>
                 </div>
            </div>

        </>
    );
}