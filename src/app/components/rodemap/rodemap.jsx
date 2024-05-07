"use client"
import React,{ useRef} from "react";
import Image from "next/image";
import colorLine from '../../assets/images/roadmapcolorline.webp'


import { Pie ,Doughnut  } from 'react-chartjs-2';
import 'chart.js/auto';
 
export const PieChartComponent = () => {
    const getGradient = (ctx, chartArea, colorStart, colorEnd) => {
      const { left, right, top, bottom } = chartArea;
      const innerWidth = right - left;
      const innerHeight = bottom - top;
      const midX = left + innerWidth / 2;
      const midY = top + innerHeight / 2;
      const gradient = ctx.createRadialGradient(midX, midY, 0, midX, midY, Math.max(innerWidth, innerHeight) / 2000);
      gradient.addColorStop(0, colorStart);
      gradient.addColorStop(1, colorEnd);
      return gradient;
    };
  
    const data = {
      labels: ['Token Distribution','for Founders', 'in Circulation', 'for Team', 'To Burn', 'Airdrop'],
      datasets: [
        {
          label: 'Token Distribution',
          data: [40, 20, 40, 10, 20, 10], // Percentages for each category
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
  
            if (!chartArea) {
              return [];
            }
            return [
              getGradient(ctx, chartArea, '#6a82fb', '#fc5c7d'),  // Sky blue to pink
              getGradient(ctx, chartArea, '#fc5c7d', '#fda085'),  // Pink to peach
              getGradient(ctx, chartArea, '#fda085', '#f6d365'),  // Peach to yellow
              getGradient(ctx, chartArea, '#f6d365', '#96e6a1'),  // Yellow to light green
              getGradient(ctx, chartArea, '#96e6a1', '#6a82fb')   // Light green to sky blue
            ];
          },
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 0, // Adds a rounded edge to each segment
          borderAlign: 'center', // Centers the border on the edge of the segment
        },
      ],
    };
  
    const options = {
      cutout: '1%',
      plugins: {
        legend: {
          display: true,
          position: 'left',
          labels: {
            color: 'white'
          }
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return `${tooltipItem.label}: ${tooltipItem.raw}%`;
            }
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        animateScale: true,
        animateRotate: true
      }
    };
  
    return (
      <div style={{ width: '300px', height: '300px'}}>
        <Pie data={data} options={options} />
      </div>
    );
  };

export default function rodemap() {
    return (
        <>
            <div id="roadmap" className="bg-roadmap w-full items-center p-5 text-center">
                {/* <h4 style={{ marginTop: '40px' }} className=" name">roadmap</h4> */}
                {/* <h1 className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold mb-10">
                    roadmap for <span className=" name">  web 3.0 </span> LTD
                </h1> */}
                {/* <h1 className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold mb-10">
                    <span className=" name"> roadmap</span>
                </h1> */}
                {/* <p className="para">Cursus ornare nunc cursus tempus. Morbi in donec viverra amet cras arcu. Sit egestas eget nec facilisis pellentesque. </p> */}
                <div className="mt-20">
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-5 max-w-screen-xl md:w-[94%] w-full mx-auto mt-10">
                        <div className="p-5 text-left">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                   TOKEN DISTRIBUTION
                                </h2>
                                <ul className="max-w-md space-y-1 text-gray-500 list-inside ">
                                <li  className="hidden md:block flex items-center">
                                        40% Token Distribution
                                    </li>
                                
                                    <li className="hidden md:block flex items-center">
                                        The highest percentage in circulation
                                    </li>
                                    <li >
                                        <PieChartComponent /> 
                                    </li>

                                </ul>
                            </>
                        </div>
                        {/* className="hidden md:block" */}
                        <div className="p-auto m-auto">
                            <svg className="hidden md:block " xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Image className="rdimg hidden md:block " src={colorLine} alt="" width='90%' height='10%' />
                        </div>
                        <div style={{textTransform:'lowercase'}}  className="p-5 text-left md:text-right ">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                    FOUNDERS
                                </h2>
                                <ul className="max-w-md text-gray-500 list-inside ">
                                    <li  >
                                    THE FOUNDERS OF PMT AI RECEIVE 20% OF THE TOTAL TOKEN SUPPLY AS AN INCENTIVE FOR THEIR VISION

                                    </li>
                                    <li className="hidden md:block" >
                                    EFFORTS, AND CONTRIBUTIONS TO THE PROJECTS INCEPTION AND DEVELOPMENT. THIS ENSURES ALIGNMENT OF INTERESTS AND PROVIDES LONG-TERM MOTIVATION FOR THE TEAM TO DRIVE THE PROJECT FORWARD.

                                    </li>

                                    <li className="hidden md:block"> Allocation : 100,000,000 tokens</li>
                                </ul>
                            </>
                        </div>
                        <div className="p-auto m-auto md:hidden showmob">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                        </div>

                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-5 max-w-screen-xl md:w-[94%] w-full mx-auto mt-10">
                        <div style={{textTransform:'lowercase'}}  className="p-5 text-left">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                   CIRCULATION
                                </h2>
                                {/* className="hidden md:block" */}
                                <ul className="max-w-md space-y-1 text-gray-500 list-inside ">
                                    <li className="hidden md:block flex items-center">K40% OF THE TOTAL TOKEN SUPPLY, AMOUNTING TO 200,000,000 TOKENS, IS MADE AVAILABLE FOR CIRCULATION WITHIN THE PMT AI ECOSYSTEM. 
                                    </li>
                                    <li className="hidden md:block flex items-center">THESE TOKENS CAN BE TRADED, OR USED FOR VARIOUS PURPOSES WITHIN THE PLATFORM</li>
                                    <li className="flex items-center">CONTRIBUTING TO LIQUIDITY AND UTILITY. </li>
                                    <li className="flex items-center"> Allocation : 200,000,000 tokens</li>

                                </ul>
                            </>
                        </div>
                        <div className="p-auto m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                        </div>
                        <div style={{textTransform:'lowercase'}}  className="p-5 text-left md:text-right ">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                   TEAM
                                </h2>
                                <ul className="max-w-md text-gray-500 list-inside ">
                                    <li  >EXPLANATION: THE TEAM MEMBERS INVOLVED IN THE DEVELOPMENT, MARKETING</li>
                                    <li className="hidden md:block" > AND MANAGEMENT OF PMT AI RECEIVE 10% OF THE TOTAL TOKEN SUPPLY AS A REWARD FOR THEIR ONGOING DEDICATION AND EXPERTISE. </li>
                                    <li className="hidden md:block" > THIS ALLOCATION HELPS ATTRACT AND RETAIN TALENT ESSENTIAL FOR THE PROJECT'S SUCCESS.
                                    </li>
                                    <li > Allocation : 50,000,000 tokens</li>
                                </ul>

                            </>
                        </div>
                        <div className="p-auto m-auto md:hidden showmob">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                        </div>

                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-5 max-w-screen-xl md:w-[94%] w-full mx-auto mt-10">
                        <div style={{textTransform:'lowercase'}} className="p-5 text-left">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                    BURN
                                </h2>
                                <ul className="max-w-md space-y-1 text-gray-500 list-inside ">
                                    <li className="hidden md:block flex items-center">A PORTION EQUIVALENT TO 20% OF THE TOTAL TOKEN SUPPLY IS DESIGNATED FOR BURNING, MEANING THESE TOKENS ARE PERMANENTLY REMOVED FROM CIRCULATION. BURNING TOKENS HELPS INCREASE SCARCITY AND POTENTIALLY BOOSTS THE VALUE OF REMAINING TOKENS BY REDUCING SUPPLY OVER TIME</li>
                                    <li className="flex items-center"> Allocation : 100,000,000 tokens</li>
                                  
                                </ul>
                            </>
                        </div>
                        <div className="p-auto m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                        </div>
                        <div className="p-5 text-left md:text-right ">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                              AIRDROP
                                </h2>
                                <ul className="max-w-md text-gray-500 list-inside ">
                                    <li  className="hidden md:block" >
                                    A PORTION EQUIVALENT TO 10% OF THE TOTAL TOKEN SUPPLY IS RESERVED FOR AIRDROPS
                                    </li>
                                    <li  >
                                    WHERE TOKENS ARE DISTRIBUTED FOR FREE TO ELIGIBLE PARTICIPANTS
                                    </li>
                                    <li className="hidden md:block" >
                                    AIRDROPS ARE OFTEN USED TO PROMOTE COMMUNITY ENGAGEMENT, ATTRACT NEW USERS, AND INCREASE AWARENESS OF THE PROJECT.
                                    </li>
                                    <li  className="hidden md:block" > Allocation : 50,000,000 tokens</li>
                                </ul>
                            </>
                        </div>
                        {/* <div className="p-auto m-auto md:hidden showmob">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                        </div> */}

                    </div>
                    {/* <div className="grid grid-cols-2 md:grid-cols-3  gap-5 max-w-screen-xl md:w-[94%] w-full mx-auto mt-10">
                        <div className="p-5 text-left">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                    Phase 7
                                </h2>
                                <ul className="max-w-md space-y-1 text-gray-500 list-inside ">
                                    <li className="flex items-center">
                                        To kill 1 more zero
                                    </li>
                                    <li className="flex items-center">
                                        To get listed at Top 3 CEX
                                    </li>
                                    <li className="flex items-center">
                                          Metaverse launch
                                    </li>
                                </ul>
                            </>
                        </div>
                        <div className="p-auto m-auto leftrightAnimation">
                            <Image style={{ transform: 'scaleX(1) scaleY(-1)', width: '30%' }} className="rdimg" src={loder} alt="progress" />
                            <span style={{ fontWeight: 'bolder' }} className=" name ">Here We Are</span>
                        </div>
                        <div className="p-5 text-left md:text-right ">
                            <>
                                <h2 className="roadmapname mb-2 text-lg font-semibold text-gray-900 ">
                                    Phase 8
                                </h2>
                                <ul className="max-w-md text-gray-500 list-inside ">
                                   
                                    <li  >
                                        Token Burn Completion
                                    </li>
                                    <li  >
                                        Web3 Browser
                                    </li>
                                    <li >
                                         store launch
                                    </li>
                                    <li>
                                        To Get Listed on Binance
                                    </li>
                                    <li>
                                    Collaborations with Governments 
                                    </li>
                                </ul>
                            </>
                        </div>
                        <div className="p-auto m-auto md:hidden showmob">
                            <Image className="rdimg" src={colorLine} alt="" width='90%' height='10%' />
                            <svg style={{ marginTop: '-10px' }} xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <g filter="url(#filter0_d_214_6731)">
                                    <circle cx="31.0001" cy="23.7298" r="14.7865" fill="url(#paint0_linear_214_6731)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_214_6731" x="0.213623" y="0.943359" width="61.5729" height="61.5729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="8" />
                                        <feGaussianBlur stdDeviation="8" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.744292 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_214_6731" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_214_6731" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_214_6731" x1="17.7048" y1="38.5163" x2="52.109" y2="24.7877" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB00FF" />
                                        <stop offset="1" stop-color="#00F0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                    </div> */}
                </div>
            </div >
        </>
    );
}