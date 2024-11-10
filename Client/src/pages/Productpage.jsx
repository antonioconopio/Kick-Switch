import React from "react";
import Product from "../components/Product";
import chicagoOne from "../assets/chicagoOne.jpg";
import chicagoTwo from "../assets/chicagoTwo.jpg";

const Productpage = () => {
  const item = {
    name: "Air Jordan 1",
    brand: "Nike",
    price: 200,
    condition: "New",
    description: "Chicago",
    images: [chicagoOne, chicagoTwo],
    listings: [
      {
        location: "Downtown Store",
        details: "Size 10, available for immediate pickup",
      },
      {
        location: "Eastside Outlet",
        details: "Size 9, slightly worn, discounted price",
      },
    ],
  };

  return (
    <div>
      <Product item={item} />
    </div>
  );
};

export default Productpage;
