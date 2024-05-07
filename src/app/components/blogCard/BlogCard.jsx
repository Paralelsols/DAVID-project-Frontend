"use client";
import Image from "next/image";
import Blog1 from "../../assets/images/blog-1.webp";
import SecImg from "../../assets/images/blog-1.PNG";
import BlogData from "../../../../data.json";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// Images
import Img1F from "../../assets/images/1,.png";
import Img2F from "../../assets/images/2,.png";
import Img3F from "../../assets/images/3,.png";
import Img4F from "../../assets/images/4,.png";
import Img5F from "../../assets/images/4,.png";
import Img6F from "../../assets/images/4,.png";

export default function BlogCard() {
  const router = useRouter();

  const handleClick = (blogVal) => {
    localStorage.setItem("blogId", blogVal.id);
    router.push(`/pages/BlogDetail/?data=${JSON.stringify(blogVal.id)}`);
  };

  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-5xl text-[white] font-bold ">
        <span className="mangoname">Our Blogs </span>
      </h1>
      <div className="flex justify-center w-full flex-wrap p-5">
        {BlogData.map((val, ind) => {
          return (
            <div
              className="w-[25%] max-[1100px]:w-[33.33%] max-[820px]:w-[50%] p-3"
              key={ind}
            >
              <a
                // href="pages/BlogDetail"
                onClick={() => handleClick(val)}
              >
                <div className="rounded-2xl overflow-hidden">
                  <div>
                    <Image
                      src={
                        (val?.id == 1 && Img1F) ||
                        (val?.id == 2 && Img2F) ||
                        (val?.id == 3 && Img3F) ||
                        (val?.id == 4 && Img4F) ||
                        (val?.id == 5 && Img5F) ||
                        (val?.id == 6 && Img6F)
                      }
                    />
                  </div>
                  <div className="py-4 px-5 flex blog-card-bg h-[180px] gap-2">
                    <p className="blog-card-detail global-font">
                      {val?.mainHeading}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 16 16 12 12 8"></polyline>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
