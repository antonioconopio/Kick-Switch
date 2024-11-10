import React from "react";

const Product = ({ item }) => {
  const { name, brand, price, condition, description, images, listings } = item;

  return (
    <div className="h-[600px] w-[100%] bg-white p-10">
      {/* Product Header */}
      <div className="flex flex-row justify-center items-baseline mb-6">
        <h1 className="text-lg font-medium text-gray-700 mx-2">{brand}</h1>
        <h1 className="text-2xl font-semibold">
          {name} : {description}
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-row justify-center">
        {/* Image Gallery */}
        <div className="product-images bg-white border border-gray-300 h-[60vh] w-[80vh] m-2 rounded-md flex flex-col items-center justify-center p-3">
          {images && images.length > 0 ? (
            <img
              src={images[0]}
              alt={name}
              className="h-[90%] w-[90%] object-cover rounded-md"
            />
          ) : (
            <div className="text-gray-500">No image available</div>
          )}
          <div className="flex mt-2 space-x-2">
            {images &&
              images
                .slice(1)
                .map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-12 w-12 object-cover rounded-md border border-gray-300 hover:cursor-pointer"
                  />
                ))}
          </div>
        </div>

        {/* Operations Section */}
        <div className="Operations bg-white border border-gray-300 h-[60vh] w-[60vh] m-2 rounded-md flex flex-col p-4">
          <div className="flex flex-col items-start mb-4">
            <p className="text-xl font-semibold text-gray-700 mb-2">
              Price: ${price}
            </p>
            <p className="text-md font-medium text-gray-500 mb-4">
              Condition: {condition}
            </p>
          </div>

          {/* Scrollable Available Listings Near Me */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Available Listings Near Me
            </h2>
            <ul className="max-h-40 overflow-y-auto space-y-2 pr-2">
              {listings && listings.length > 0 ? (
                listings.map((listing, index) => (
                  <li
                    key={index}
                    className="p-4 bg-gray-50 rounded-md border border-gray-200 shadow-sm hover:shadow-md"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{listing.location}</span>
                      <div className="space-x-2">
                        <button className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400">
                          Message
                        </button>
                        <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                          Buy
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">
                      {listing.details}
                    </p>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No listings available nearby.</p>
              )}
            </ul>
          </div>

          <button className="bg-black text-white px-6 py-2 rounded-md mt-auto hover:bg-gray-800">
            Add to Cart
          </button>
          <button className="bg-gray-200 text-black px-6 py-2 rounded-md mt-2 hover:bg-gray-300">
            Request Trade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
