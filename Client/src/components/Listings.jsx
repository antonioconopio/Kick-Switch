import React, { useState } from "react";
import Card from "./Card";
import AddCard from "./addCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import AddListing from "./AddListing";

const Listings = ({ name }) => {
  const [listing, setListing] = useState(false);

  const toggleAddListing = () => {
    setListing(!listing);

    if (!listing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="p-16">
      <h1 className="text-xl m-2">{name}</h1>
      <div className="cardContainer flex flex-row justify-start items-center">
        <IoIosArrowBack className="hover:cursor-pointer" />

        {/* Pass toggleAddListing to AddCard */}
        <AddCard onClick={toggleAddListing} />
        <Card />

        <IoIosArrowForward className="hover:cursor-pointer" />
      </div>

      {/* Pass toggleAddListing to AddListing */}
      <AddListing onClose={toggleAddListing} listing={listing} />
    </div>
  );
};

export default Listings;
