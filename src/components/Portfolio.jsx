import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import foodDelivery from "../assets/portfolio/foodDelivery.png";
import amazonClone from "../assets/portfolio/amazon-clone.png";
import dataFinance from "../assets/portfolio/dataFinance.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: foodDelivery,
      href: "https://biteheaven.netlify.app/",
      github: "https://github.com/IM-Mukesh/food-delivery",
    },
    {
      id: 2,
      src: amazonClone,
      href: "https://amazon-f-clone.netlify.app",
      github: "https://github.com/IM-Mukesh/amazon-clone/tree/master",
    },
    {
      id: 3,
      src: dataFinance,
      href: "https://finance-clone.netlify.app/",
      github: "https://github.com/IM-Mukesh/data-finance/tree/master",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-[320px] h-[180px]"
              />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={github}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
