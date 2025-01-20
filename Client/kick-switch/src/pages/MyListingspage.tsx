import AddListing from "@/components/AddListing";
import axios from "axios";
import { useEffect, useState } from "react";
import { refresh } from "@/state/mylisting/mylistingState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import ShoeCarousel from "@/components/ShoeCarousel";

const MyListingspage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [listings, setListings] = useState([]);
  const listingsModified = useSelector((state: RootState) => state.mylisting);
  const [addListing, setAddListing] = useState(false);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8800/api/listings/user/" + user.user.id, {
          headers: {
            Authorization: `Bearer ${user.token}`, // Replace with your token
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setListings(response.data);
          dispatch(refresh());
        });
    } catch (error) {
      console.error(error);
    }
  }, [listingsModified]);

  // Disable scrolling when `addListing` is true
  useEffect(() => {
    if (addListing) {
      document.body.style.overflow = "hidden"; // Disable scrolling on the body
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling on the body
    }

    // Cleanup effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [addListing]);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => setAddListing(!addListing)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {addListing ? "Close Add Listing" : "Add Listing"}
      </button>

      <ShoeCarousel listings={listings} />

      {addListing && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setAddListing(false)} // Close modal on background click
        >
          <div
            className="bg-white p-8 rounded shadow-lg relative max-h-[90%] w-[90%] overflow-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <AddListing setAddListing={setAddListing} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListingspage;
