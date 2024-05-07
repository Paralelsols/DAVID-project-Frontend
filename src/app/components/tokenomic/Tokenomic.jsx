"use client"
import React,{useEffect , useRef} from "react";
import Image from "next/image";
import img from '../../assets/images/coinblanck.webp'
import { Pie ,Doughnut  } from 'react-chartjs-2';
import 'chart.js/auto';
 
export const PieChartComponent = () => {
    const getGradient = (ctx, chartArea, colorStart, colorEnd) => {
      const { left, right, top, bottom } = chartArea;
      const innerWidth = right - left;
      const innerHeight = bottom - top;
      const midX = left + innerWidth / 2;
      const midY = top + innerHeight / 2;
      const gradient = ctx.createRadialGradient(midX, midY, 0, midX, midY, Math.max(innerWidth, innerHeight) / 2);
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
          borderColor: '#ffffff',
          borderWidth: 2,
          borderRadius: 10, // Adds a rounded edge to each segment
          borderAlign: 'center', // Centers the border on the edge of the segment
        },
      ],
    };
  
    const options = {
      cutout: '50%',
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
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
      <div style={{ width: '500px', height: '500px'}}>
        <Doughnut data={data} options={options} />
      </div>
    );
  };
  
export default function Tokenomic() {
    return (
        <>
            <div className="bg-roadmap w-full items-center mt-40 p-5 text-center">
                {/* <h4 style={{ marginTop: '40px' }} className=" name">Tokenomics</h4> */}
                <h1 className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold mb-5">
                    <span className=" name"> PMT Ai Tokenomics </span>
                </h1>
                <div className="flex flex-col md:flex-row max-w-screen-xl w-[94%] items-center justify-between mx-auto  pt-5 pb-5">
                    <div className="md:w-1/2 p-4 order-2 md:order-1 text-center md:text-center">
                        {/* <h1 className="text-[24px] md:text-[30px] font-bold md:mb-10">
                            <span className=" name">This reporte provides a details breakdown of the Tokenomics of PMT Ai</span>
                        </h1> */}
                        <span className='text-[20px] md:text-[25px] text-white'>PMT Ai</span>
                        <h1 style={{ lineHeight: 'normal', color: 'white' }} className="text-[12px] md:text-[16px]">
                        breakdown of the Tokenomics in this provided reporte.
                        </h1>
                        <ul className="space-y-4 text-left text-gray-500  mt-10 mb-10">
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 12"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5.917 5.724 10.5 15 1.5"
                                    />
                                </svg>
                                <span className="text-[white]"> 10% tax fees</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 12"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5.917 5.724 10.5 15 1.5"
                                    />
                                </svg>
                                <span className="text-[white]"> 10% Airdrop</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 12"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5.917 5.724 10.5 15 1.5"
                                    />
                                </svg>
                                <span className="text-[white]">Total Tokens 500,000,000 <span className=" name">...</span></span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 12"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5.917 5.724 10.5 15 1.5"
                                    />
                                </svg>
                                <span className="text-[white]">Fully Diluted Valuation 93,269,143.55</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 12"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5.917 5.724 10.5 15 1.5"
                                    />
                                </svg>
                                <span className="text-[white] lowercase">20% to Burn</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-3.5 h-3.5 text-green-500 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 12"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5.917 5.724 10.5 15 1.5"
                                    />
                                </svg>
                                <span className="text-[white] lowercase">40% OF THE SUPPLY IS  IN CIRCULATION </span>
                            </li>
                        </ul>
                        {/* <a href="https://bscscan.com/token" target="_blank" className="text-white">
                        <button className="button mt-7 w-[80%] md:w-[40%]" type="button">
                          Explore on BSC Scan
                        </button>
                        </a> */}
                    </div>
                    <div className="md:w-1/2  md:order-2 hidden md:block">
                       <PieChartComponent />
                        {/* <Image className="scaleAnimation" style={{ marginLeft: 'auto', marginRight: 'auto', width:'70%' }} width={"60%"} height={"60%"} src={img} alt="heroimg" /> */}
                    </div>
                </div>
            </div >
        </>
    );
}