/* eslint-disable no-unused-vars */
import React from "react";

const PopularProducts = () => {
  const products = [
    {
      title: "Wireless Headphones",
      description: "High-quality wireless headphones with noise-cancellation.",
      price: "$199",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Smart Watch",
      description:
        "Stay connected with this stylish and functional smart watch.",
      price: "$149",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "4K Action Camera",
      description: "Capture every moment in stunning 4K resolution.",
      price: "$299",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable speaker with exceptional sound quality.",
      price: "$99",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "Track your fitness journey with this advanced fitness tracker.",
      price: "$79",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
  ];

  return (
    <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">Popular Products</h2>
      <ul className="space-y-4">
        {products.map((product, index) => (
          <li key={index} className="flex flex-col sm:flex-row items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-[100px] h-[100px] object-cover mr-4 mb-4 sm:mb-0"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="font-bold text-lg">{product.price}</p>
            </div>
            <a
              href={product.link}
              className="py-2 px-4 bg-blue-500 text-white rounded mt-2 sm:mt-0"
            >
              View Details
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularProducts;
