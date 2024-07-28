/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const TopSeller = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=5`);
        const data = await response.json();

        const authorData = data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));

        setAuthors(authorData);
      } catch (e) {
        console.error("Error fetching data: " + e.message);
      }
    };

    fetchData();
  }, []);

  const handleFollowClick = (index) => {
    setAuthors((prevAuthors) =>
      prevAuthors.map((author, idx) =>
        idx === index ? { ...author, isFollowing: !author.isFollowing } : author
      )
    );
  };

  return (
    <div className="bg-white p-5 mx-5 mt-[5rem] border w-[23rem] rounded">
      <h2 className="text-xl font-bold mb-5">Top Sellers</h2>

      <ul>
        {authors.map((author, index) => (
          <li className="flex items-center justify-between mb-4" key={index}>
            <section className="flex items-center justify-between">
              <img
                src={author.image}
                alt={author.name}
                className="w-[25%] h-[25%] justify-center rounded-full"
              />
              <span className="ml-4">{author.name}</span>
            </section>
            <button
              className={`py-1 px-3 rounded ${
                author.isFollowing
                  ? "bg-red-500 text-white"
                  : "bg-black text-white"
              }`}
              onClick={() => handleFollowClick(index)}
            >
              {author.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSeller;
